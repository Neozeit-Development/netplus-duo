/* NetPlus Duo — game logic: state, SRS scheduling, lesson flow, UI rendering. */

const STORAGE_KEY = "netplus_duo_state";
const LESSON_SIZE = 10;
const XP_PER_CORRECT = 10;
const XP_PER_LEVEL = 100;
const MAX_SRS_INTERVAL = 14;

/* ---------- Date helpers (local calendar days, not UTC) ---------- */

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function addDays(dateStr, days) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
}

function daysBetween(fromStr, toStr) {
  const [ay, am, ad] = fromStr.split("-").map(Number);
  const [by, bm, bd] = toStr.split("-").map(Number);
  const a = new Date(ay, am - 1, ad);
  const b = new Date(by, bm - 1, bd);
  return Math.round((b - a) / 86400000);
}

/* ---------- State ---------- */

function defaultState() {
  return {
    username: "Player",
    streak_days: 0,
    longest_streak: 0,
    hearts: 5,
    max_hearts: 5,
    xp: 0,
    level: 1,
    last_played_date: null,
    last_heart_refill_date: todayStr(),
    srs: {},
    performance: {},
    weekly_freeze_used: false,
  };
}

/* ---------- Shuffle helper ---------- */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* Record a right/wrong outcome for a question, used to find weak areas. */
function recordPerformance(state, questionId, wasCorrect) {
  const entry = state.performance[questionId] || (state.performance[questionId] = { correct: 0, wrong: 0 });
  if (wasCorrect) entry.correct += 1;
  else entry.wrong += 1;
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultState();
  try {
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    return defaultState();
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* Refill hearts on a new calendar day. Called whenever the app loads or menu is shown. */
function applyDailyReset(state) {
  const today = todayStr();
  if (state.last_heart_refill_date !== today) {
    state.hearts = state.max_hearts;
    state.last_heart_refill_date = today;
  }
  return state;
}

/* Apply streak increment/reset. Called on lesson completion. */
function applyStreakUpdate(state) {
  const today = todayStr();
  if (state.last_played_date === today) {
    // already played today, no change
  } else if (state.last_played_date === null) {
    state.streak_days = 1;
  } else {
    const gap = daysBetween(state.last_played_date, today);
    if (gap === 1) {
      state.streak_days += 1;
    } else {
      state.streak_days = 1;
    }
  }
  state.longest_streak = Math.max(state.longest_streak, state.streak_days);
  state.last_played_date = today;
  return state;
}

function computeLevel(xp) {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

/* ---------- SRS (simplified SM-2) ---------- */

function scheduleReview(state, questionId, wasCorrect) {
  const today = todayStr();
  const existing = state.srs[questionId];
  let interval;
  if (wasCorrect) {
    const prevInterval = existing ? existing.interval : 1;
    interval = Math.min(prevInterval * 2, MAX_SRS_INTERVAL);
  } else {
    interval = 1;
  }
  state.srs[questionId] = {
    interval,
    due: addDays(today, interval),
  };
}

function isDue(srsEntry, today) {
  return srsEntry && srsEntry.due <= today;
}

/* ---------- Lesson queue ---------- */

function buildLessonQueue(state, allQuestions) {
  const today = todayStr();

  const due = [];
  const fresh = [];

  for (const q of allQuestions) {
    const srsEntry = state.srs[q.id];
    if (srsEntry) {
      if (isDue(srsEntry, today)) due.push(q);
    } else {
      fresh.push(q);
    }
  }

  due.sort((a, b) => (state.srs[a.id].due < state.srs[b.id].due ? -1 : 1));

  const queue = due.slice(0, LESSON_SIZE);
  if (queue.length < LESSON_SIZE) {
    queue.push(...fresh.slice(0, LESSON_SIZE - queue.length));
  }
  return queue;
}

/* ---------- Weak-area queue ---------- */

const WEAK_LESSON_SIZE = 15;

/* Per-domain accuracy across all attempted questions, weakest first. */
function computeDomainAccuracy(state, allQuestions) {
  const byDomain = {};
  allQuestions.forEach((q) => {
    const perf = state.performance[q.id];
    if (!perf) return;
    const attempts = perf.correct + perf.wrong;
    if (attempts === 0) return;
    const d = byDomain[q.domain] || (byDomain[q.domain] = { correct: 0, attempts: 0 });
    d.correct += perf.correct;
    d.attempts += attempts;
  });
  return Object.entries(byDomain)
    .map(([domain, d]) => ({ domain, accuracy: d.correct / d.attempts, attempts: d.attempts }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

/* Ranks every question by how often it's been missed, weakest first, and
   pads with unseen questions if there isn't enough history yet. */
function buildWeakAreaQueue(state, allQuestions, size) {
  const scored = allQuestions.map((q) => {
    const perf = state.performance[q.id];
    const attempts = perf ? perf.correct + perf.wrong : 0;
    const wrongRate = attempts > 0 ? perf.wrong / attempts : 0;
    return { q, attempts, wrongRate };
  });

  const missed = scored.filter((s) => s.wrongRate > 0);
  missed.sort((a, b) => b.wrongRate - a.wrongRate || b.attempts - a.attempts);

  const queue = missed.slice(0, size).map((s) => s.q);
  if (queue.length < size) {
    const usedIds = new Set(queue.map((q) => q.id));
    const filler = shuffle(allQuestions.filter((q) => !usedIds.has(q.id)));
    queue.push(...filler.slice(0, size - queue.length));
  }
  return shuffle(queue);
}

/* ---------- App state (in-memory) ---------- */

let state = loadState();
applyDailyReset(state);
saveState(state);

let session = null; // { queue, index, correct, wrong, xpEarned, startLevel }

/* ---------- Screen navigation ---------- */

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* ---------- Header rendering ---------- */

function renderHeader() {
  document.getElementById("streak-value").textContent = state.streak_days;
  document.getElementById("level-value").textContent = state.level;
  const xpInLevel = state.xp % XP_PER_LEVEL;
  document.getElementById("xp-value").textContent = xpInLevel;
  document.getElementById("xp-next-value").textContent = XP_PER_LEVEL;

  const full = "♥".repeat(state.hearts);
  const empty = "♡".repeat(state.max_hearts - state.hearts);
  document.getElementById("hearts-display").textContent = full + empty;
}

/* ---------- Menu ---------- */

function renderMenu() {
  applyDailyReset(state);
  saveState(state);
  renderHeader();
  showScreen("screen-menu");
}

/* ---------- Intro ---------- */

function renderIntro() {
  document.getElementById("intro-streak").textContent = state.streak_days;
  document.getElementById("intro-hearts").textContent = state.hearts;
  const queue = buildLessonQueue(state, QUESTIONS);
  document.getElementById("intro-count").textContent = queue.length;
  showScreen("screen-intro");
}

/* ---------- Weak areas ---------- */

function renderWeakIntro() {
  const ranked = computeDomainAccuracy(state, QUESTIONS);
  const summaryEl = document.getElementById("weak-summary-text");
  if (ranked.length === 0) {
    summaryEl.textContent = "Play a few daily lessons first — the drill needs some history to know what to target.";
  } else {
    const weakest = ranked[0];
    const pct = Math.round(weakest.accuracy * 100);
    summaryEl.textContent = `Weakest domain: ${weakest.domain} (${pct}% correct so far). This drill pulls the ${WEAK_LESSON_SIZE} questions you've missed most across every domain.`;
  }
  showScreen("screen-weak-intro");
}

/* ---------- Lesson ---------- */

function startLesson() {
  beginSession(buildLessonQueue(state, QUESTIONS), "daily");
}

function startWeakLesson() {
  beginSession(buildWeakAreaQueue(state, QUESTIONS, WEAK_LESSON_SIZE), "weak");
}

function beginSession(queue, mode) {
  session = {
    queue,
    index: 0,
    correct: 0,
    wrong: 0,
    xpEarned: 0,
    startLevel: state.level,
    mode,
  };
  showScreen("screen-lesson");
  renderQuestion();
}

function renderQuestion() {
  const q = session.queue[session.index];
  document.getElementById("feedback-panel").classList.add("hidden");
  document.getElementById("question-card").classList.remove("flash-correct");

  document.getElementById("question-meta").textContent = `Zone ${q.zone} · Question ${session.index + 1} of ${session.queue.length}`;
  document.getElementById("question-text").textContent = q.question;

  const pct = Math.round((session.index / session.queue.length) * 100);
  document.getElementById("progress-bar-fill").style.width = pct + "%";

  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";
  q.options.forEach((optionText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optionText;
    btn.addEventListener("click", () => handleAnswer(idx));
    grid.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  const q = session.queue[session.index];
  const correct = selectedIndex === q.correct_index;
  const buttons = document.querySelectorAll("#options-grid .option-btn");
  buttons.forEach((b) => (b.disabled = true));

  scheduleReview(state, q.id, correct);
  recordPerformance(state, q.id, correct);

  if (correct) {
    buttons[selectedIndex].classList.add("correct");
    document.getElementById("question-card").classList.add("flash-correct");
    session.correct += 1;
    session.xpEarned += XP_PER_CORRECT;
    state.xp += XP_PER_CORRECT;
    state.level = computeLevel(state.xp);
  } else {
    buttons[selectedIndex].classList.add("wrong");
    buttons[q.correct_index].classList.add("correct");
    session.wrong += 1;
    state.hearts = Math.max(0, state.hearts - 1);
  }

  saveState(state);
  renderHeader();
  showFeedback(correct, q.explanation);
}

function showFeedback(correct, explanation) {
  const panel = document.getElementById("feedback-panel");
  panel.classList.remove("hidden", "correct", "wrong");
  panel.classList.add(correct ? "correct" : "wrong");
  document.getElementById("feedback-title").textContent = correct ? "Correct! +10 XP" : "Not quite";
  document.getElementById("feedback-explanation").textContent = explanation || "";
}

function continueLesson() {
  session.index += 1;
  if (state.hearts <= 0 || session.index >= session.queue.length) {
    finishLesson();
  } else {
    renderQuestion();
  }
}

function finishLesson() {
  const leveledUp = state.level > session.startLevel;
  applyStreakUpdate(state);
  saveState(state);
  renderHeader();

  document.getElementById("summary-title").textContent =
    session.mode === "weak" ? "Weak Area Drill Complete!" : "Lesson Complete!";
  document.getElementById("summary-correct").textContent = session.correct;
  document.getElementById("summary-wrong").textContent = session.wrong;
  document.getElementById("summary-xp").textContent = session.xpEarned;
  document.getElementById("summary-streak").textContent = state.streak_days;

  document.getElementById("summary-levelup").classList.toggle("hidden", !leveledUp);
  if (leveledUp) {
    document.getElementById("summary-newlevel").textContent = state.level;
  }
  document.getElementById("summary-outofhearts").classList.toggle("hidden", state.hearts > 0);

  showScreen("screen-summary");
}

/* ---------- Stats ---------- */

function renderStats() {
  const today = todayStr();
  const reviewCount = Object.values(state.srs).filter((e) => isDue(e, today)).length;

  document.getElementById("stats-streak").textContent = state.streak_days;
  document.getElementById("stats-longest").textContent = state.longest_streak;
  document.getElementById("stats-level").textContent = state.level;
  document.getElementById("stats-xp").textContent = state.xp;
  document.getElementById("stats-hearts").textContent = `${state.hearts}/${state.max_hearts}`;
  document.getElementById("stats-reviews").textContent = reviewCount;

  showScreen("screen-stats");
}

/* ---------- Settings ---------- */

function renderSettings() {
  document.getElementById("settings-username").value = state.username;
  showScreen("screen-settings");
}

function resetProgress() {
  if (!confirm("Reset all progress? This cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  applyDailyReset(state);
  saveState(state);
  renderMenu();
}

/* ---------- Study Guide ---------- */

let studyDomainIdx = null;
let studyObjectiveIdx = null;

function renderStudyDomains() {
  studyDomainIdx = null;
  studyObjectiveIdx = null;
  const list = document.getElementById("study-domains-list");
  list.innerHTML = "";
  STUDY_CONTENT.forEach((domain, idx) => {
    const card = document.createElement("button");
    card.className = "study-list-card";
    const title = document.createElement("span");
    title.className = "study-list-card-title";
    title.textContent = `${domain.zone}. ${domain.domain}`;
    const sub = document.createElement("span");
    sub.className = "study-list-card-sub";
    const itemCount = domain.objectives.reduce((n, o) => n + o.items.length, 0);
    sub.textContent = `${domain.objectives.length} objectives · ${itemCount} study cards`;
    card.appendChild(title);
    card.appendChild(sub);
    card.addEventListener("click", () => {
      studyDomainIdx = idx;
      renderStudyObjectives();
    });
    list.appendChild(card);
  });
  showScreen("screen-study-domains");
}

function renderStudyObjectives() {
  const domain = STUDY_CONTENT[studyDomainIdx];
  document.getElementById("study-objectives-breadcrumb").textContent = "Study Guide";
  document.getElementById("study-objectives-title").textContent = `${domain.zone}. ${domain.domain}`;

  const list = document.getElementById("study-objectives-list");
  list.innerHTML = "";
  domain.objectives.forEach((objective, idx) => {
    const card = document.createElement("button");
    card.className = "study-list-card";
    const title = document.createElement("span");
    title.className = "study-list-card-title";
    title.textContent = `${objective.id} ${objective.name}`;
    const sub = document.createElement("span");
    sub.className = "study-list-card-sub";
    sub.textContent = objective.description;
    card.appendChild(title);
    card.appendChild(sub);
    card.addEventListener("click", () => {
      studyObjectiveIdx = idx;
      renderStudyDetail();
    });
    list.appendChild(card);
  });
  showScreen("screen-study-objectives");
}

function renderStudyDetail() {
  const domain = STUDY_CONTENT[studyDomainIdx];
  const objective = domain.objectives[studyObjectiveIdx];

  document.getElementById("study-detail-breadcrumb").textContent = `${domain.domain}`;
  document.getElementById("study-detail-title").textContent = `${objective.id} ${objective.name}`;
  document.getElementById("study-detail-description").textContent = objective.description;

  const list = document.getElementById("study-items-list");
  list.innerHTML = "";
  objective.items.forEach((item) => list.appendChild(renderStudyItem(item)));
  showScreen("screen-study-detail");
}

function renderStudyItem(item) {
  const card = document.createElement("div");
  card.className = `study-card study-card-${item.type}`;

  const title = document.createElement("h3");
  title.className = "study-card-title";
  title.textContent = item.title;
  card.appendChild(title);

  if (item.type === "table") {
    const table = document.createElement("table");
    table.className = "study-table";
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    item.headers.forEach((h) => {
      const th = document.createElement("th");
      th.textContent = h;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    item.rows.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    card.appendChild(table);
  } else if (item.body) {
    const body = document.createElement("p");
    body.className = "study-card-body";
    body.textContent = item.body;
    card.appendChild(body);
  }

  if (item.key_points && item.key_points.length) {
    const ul = document.createElement("ul");
    ul.className = "study-key-points";
    item.key_points.forEach((pt) => {
      const li = document.createElement("li");
      li.textContent = pt;
      ul.appendChild(li);
    });
    card.appendChild(ul);
  }

  return card;
}

/* ---------- Practice Exam ---------- */

const EXAM_SIZE = 90;
const EXAM_MINUTES = 90;
const EXAM_PASS_PERCENT = 80;
const EXAM_DOMAIN_WEIGHTS = { 1: 0.23, 2: 0.2, 3: 0.19, 4: 0.14, 5: 0.24 };

let examSession = null; // { queue, index, answers, secondsLeft }
let examTimerHandle = null;

function buildExamQueue(allQuestions) {
  const byZone = {};
  allQuestions.forEach((q) => {
    (byZone[q.zone] = byZone[q.zone] || []).push(q);
  });

  const zones = Object.keys(EXAM_DOMAIN_WEIGHTS).map(Number);
  let allocated = 0;
  const queue = [];
  zones.forEach((zone, idx) => {
    const count = idx === zones.length - 1
      ? EXAM_SIZE - allocated
      : Math.round(EXAM_SIZE * EXAM_DOMAIN_WEIGHTS[zone]);
    allocated += count;
    const pool = shuffle([...(byZone[zone] || [])]);
    queue.push(...pool.slice(0, count));
  });

  return shuffle(queue);
}

function renderExamIntro() {
  document.getElementById("exam-intro-minutes").textContent = EXAM_MINUTES;
  document.getElementById("exam-intro-count").textContent = EXAM_SIZE;
  document.getElementById("exam-intro-pass").textContent = EXAM_PASS_PERCENT + "%";
  showScreen("screen-exam-intro");
}

function startExam() {
  const queue = buildExamQueue(QUESTIONS);
  examSession = {
    queue,
    index: 0,
    answers: new Array(queue.length).fill(null),
    secondsLeft: EXAM_MINUTES * 60,
  };
  showScreen("screen-exam");
  renderExamQuestion();
  renderExamTimer();
  clearInterval(examTimerHandle);
  examTimerHandle = setInterval(() => {
    examSession.secondsLeft -= 1;
    renderExamTimer();
    if (examSession.secondsLeft <= 0) {
      clearInterval(examTimerHandle);
      finishExam();
    }
  }, 1000);
}

function renderExamTimer() {
  const total = Math.max(0, examSession.secondsLeft);
  const m = Math.floor(total / 60);
  const s = total % 60;
  document.getElementById("exam-timer").textContent = `${m}:${String(s).padStart(2, "0")}`;
}

function renderExamQuestion() {
  const q = examSession.queue[examSession.index];

  document.getElementById("exam-meta").textContent = `Question ${examSession.index + 1} of ${examSession.queue.length}`;
  document.getElementById("exam-question-text").textContent = q.question;

  const pct = Math.round((examSession.index / examSession.queue.length) * 100);
  document.getElementById("exam-progress-fill").style.width = pct + "%";

  const selected = examSession.answers[examSession.index];
  const grid = document.getElementById("exam-options-grid");
  grid.innerHTML = "";
  q.options.forEach((optionText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (selected === idx ? " selected" : "");
    btn.textContent = optionText;
    btn.addEventListener("click", () => {
      examSession.answers[examSession.index] = idx;
      renderExamQuestion();
    });
    grid.appendChild(btn);
  });

  document.getElementById("btn-exam-prev").disabled = examSession.index === 0;
  document.getElementById("btn-exam-next").textContent =
    examSession.index === examSession.queue.length - 1 ? "Submit Exam" : "Next";
}

function examPrev() {
  if (examSession.index > 0) {
    examSession.index -= 1;
    renderExamQuestion();
  }
}

function examNext() {
  if (examSession.index < examSession.queue.length - 1) {
    examSession.index += 1;
    renderExamQuestion();
  } else {
    finishExam();
  }
}

function examQuit() {
  if (!confirm("Quit the exam? It will be scored with the answers you've picked so far.")) return;
  finishExam();
}

function finishExam() {
  clearInterval(examTimerHandle);

  let correctCount = 0;
  const domainStats = {};
  examSession.queue.forEach((q, i) => {
    const answered = examSession.answers[i];
    const correct = answered === q.correct_index;
    if (correct) correctCount += 1;
    recordPerformance(state, q.id, correct);

    const d = domainStats[q.domain] || (domainStats[q.domain] = { correct: 0, total: 0 });
    d.total += 1;
    if (correct) d.correct += 1;
  });
  saveState(state);

  const total = examSession.queue.length;
  const pct = Math.round((correctCount / total) * 100);
  const passed = pct >= EXAM_PASS_PERCENT;
  renderExamSummary(correctCount, total, pct, passed, domainStats);
}

function renderExamSummary(correctCount, total, pct, passed, domainStats) {
  document.getElementById("exam-result-pct").textContent = pct + "%";
  document.getElementById("exam-result-label").textContent = passed ? "PASS" : "FAIL";
  const banner = document.getElementById("exam-result-banner");
  banner.classList.toggle("exam-pass", passed);
  banner.classList.toggle("exam-fail", !passed);

  document.getElementById("exam-summary-correct").textContent = correctCount;
  document.getElementById("exam-summary-wrong").textContent = total - correctCount;
  document.getElementById("exam-summary-total").textContent = total;

  const breakdown = document.getElementById("exam-domain-breakdown");
  breakdown.innerHTML = "";
  Object.entries(domainStats).forEach(([domain, d]) => {
    const row = document.createElement("div");
    row.className = "exam-domain-row";
    const name = document.createElement("span");
    name.textContent = domain;
    const score = document.createElement("span");
    score.textContent = `${d.correct}/${d.total}`;
    row.appendChild(name);
    row.appendChild(score);
    breakdown.appendChild(row);
  });

  showScreen("screen-exam-summary");
}

/* ---------- Event wiring ---------- */

document.getElementById("btn-play").addEventListener("click", renderIntro);
document.getElementById("btn-stats").addEventListener("click", renderStats);
document.getElementById("btn-settings").addEventListener("click", renderSettings);
document.getElementById("btn-study").addEventListener("click", renderStudyDomains);
document.getElementById("btn-weak").addEventListener("click", renderWeakIntro);
document.getElementById("btn-exam").addEventListener("click", renderExamIntro);

document.getElementById("btn-start-lesson").addEventListener("click", startLesson);
document.getElementById("btn-intro-back").addEventListener("click", renderMenu);

document.getElementById("btn-start-weak").addEventListener("click", startWeakLesson);
document.getElementById("btn-weak-back").addEventListener("click", renderMenu);

document.getElementById("btn-study-domains-back").addEventListener("click", renderMenu);
document.getElementById("btn-study-objectives-back").addEventListener("click", renderStudyDomains);
document.getElementById("btn-study-detail-back").addEventListener("click", renderStudyObjectives);

document.getElementById("btn-start-exam").addEventListener("click", startExam);
document.getElementById("btn-exam-intro-back").addEventListener("click", renderMenu);
document.getElementById("btn-exam-prev").addEventListener("click", examPrev);
document.getElementById("btn-exam-next").addEventListener("click", examNext);
document.getElementById("btn-exam-quit").addEventListener("click", examQuit);
document.getElementById("btn-exam-summary-done").addEventListener("click", renderMenu);

document.getElementById("btn-continue").addEventListener("click", continueLesson);

document.getElementById("btn-summary-done").addEventListener("click", renderMenu);

document.getElementById("btn-stats-back").addEventListener("click", renderMenu);

document.getElementById("btn-settings-back").addEventListener("click", () => {
  state.username = document.getElementById("settings-username").value || "Player";
  saveState(state);
  renderMenu();
});
document.getElementById("btn-reset-progress").addEventListener("click", resetProgress);

/* ---------- Init ---------- */

renderMenu();
