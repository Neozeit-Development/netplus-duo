import { LESSON_SIZE, MAX_SRS_INTERVAL } from "./constants";
import { addDays, todayStr } from "./dates";
import type { GameState, Question, SrsEntry } from "@/types";

export function scheduleReview(
  state: GameState,
  questionId: string,
  wasCorrect: boolean,
): GameState {
  const today = todayStr();
  const existing = state.srs[questionId];
  let interval: number;
  if (wasCorrect) {
    const prevInterval = existing ? existing.interval : 1;
    interval = Math.min(prevInterval * 2, MAX_SRS_INTERVAL);
  } else {
    interval = 1;
  }
  const entry: SrsEntry = { interval, due: addDays(today, interval) };
  return {
    ...state,
    srs: { ...state.srs, [questionId]: entry },
  };
}

export function isDue(srsEntry: SrsEntry | undefined, today: string): boolean {
  return Boolean(srsEntry && srsEntry.due <= today);
}

export function buildLessonQueue(state: GameState, allQuestions: Question[]): Question[] {
  const today = todayStr();
  const due: Question[] = [];
  const fresh: Question[] = [];

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

export function countDueReviews(state: GameState, today = todayStr()): number {
  return Object.values(state.srs).filter((e) => isDue(e, today)).length;
}
