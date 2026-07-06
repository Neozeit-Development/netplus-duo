import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORAGE_KEY, XP_PER_CORRECT } from "@/lib/constants";
import { applyHeartRefill, applyStreakUpdate, computeLevel, defaultState, recordPerformance } from "@/lib/state";
import { scheduleReview } from "@/lib/srs";
import type { ExamSession, GameState, LessonSession, LessonSummary, Question } from "@/types";

interface GameStore {
  state: GameState;
  lessonSession: LessonSession | null;
  lastLessonSummary: LessonSummary | null;
  examSession: ExamSession | null;
  hydrate: () => void;
  setUsername: (username: string) => void;
  resetProgress: () => void;
  startLesson: (queue: Question[], mode: LessonSession["mode"]) => void;
  answerLesson: (selectedIndex: number) => { correct: boolean; explanation: string };
  continueLesson: () => "finished" | "continue";
  finishLesson: () => void;
  startExam: (queue: Question[], secondsLeft: number) => void;
  setExamAnswer: (index: number) => void;
  setExamIndex: (index: number) => void;
  tickExam: () => boolean;
  finishExam: () => void;
  clearExam: () => void;
  recordExamAnswers: (queue: Question[], answers: (number | null)[]) => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      state: defaultState(),
      lessonSession: null,
      lastLessonSummary: null,
      examSession: null,

      hydrate: () => {
        set((s) => ({ state: applyHeartRefill(s.state) }));
      },

      setUsername: (username) => {
        set((s) => ({ state: { ...s.state, username: username || "Player" } }));
      },

      resetProgress: () => {
        set({
          state: applyHeartRefill(defaultState()),
          lessonSession: null,
          lastLessonSummary: null,
          examSession: null,
        });
      },

      startLesson: (queue, mode) => {
        const { state } = get();
        set({
          lessonSession: {
            queue,
            index: 0,
            correct: 0,
            wrong: 0,
            xpEarned: 0,
            startLevel: state.level,
            mode,
          },
        });
      },

      answerLesson: (selectedIndex) => {
        const { state, lessonSession } = get();
        if (!lessonSession) return { correct: false, explanation: "" };

        const q = lessonSession.queue[lessonSession.index];
        const correct = selectedIndex === q.correct_index;

        let newState = scheduleReview(state, q.id, correct);
        newState = recordPerformance(newState, q.id, correct);

        const session = { ...lessonSession };
        if (correct) {
          session.correct += 1;
          session.xpEarned += XP_PER_CORRECT;
          newState = {
            ...newState,
            xp: newState.xp + XP_PER_CORRECT,
            level: computeLevel(newState.xp + XP_PER_CORRECT),
          };
        } else {
          session.wrong += 1;
          newState = { ...newState, hearts: Math.max(0, newState.hearts - 1) };
        }

        set({ state: newState, lessonSession: session });
        return { correct, explanation: q.explanation };
      },

      continueLesson: () => {
        const { state, lessonSession } = get();
        if (!lessonSession) return "finished";
        const nextIndex = lessonSession.index + 1;
        if (state.hearts <= 0 || nextIndex >= lessonSession.queue.length) {
          return "finished";
        }
        set({ lessonSession: { ...lessonSession, index: nextIndex } });
        return "continue";
      },

      finishLesson: () => {
        const { state, lessonSession } = get();
        if (!lessonSession) {
          set({ lessonSession: null });
          return;
        }
        const newState = applyStreakUpdate(state);
        const leveledUp = newState.level > lessonSession.startLevel;
        const summary: LessonSummary = {
          correct: lessonSession.correct,
          wrong: lessonSession.wrong,
          xpEarned: lessonSession.xpEarned,
          leveledUp,
          newLevel: newState.level,
          mode: lessonSession.mode,
          outOfHearts: newState.hearts <= 0,
        };
        set({
          state: newState,
          lessonSession: null,
          lastLessonSummary: summary,
        });
      },

      startExam: (queue, secondsLeft) => {
        set({
          examSession: {
            queue,
            index: 0,
            answers: new Array(queue.length).fill(null),
            secondsLeft,
          },
        });
      },

      setExamAnswer: (index) => {
        const { examSession } = get();
        if (!examSession) return;
        const answers = [...examSession.answers];
        answers[examSession.index] = index;
        set({ examSession: { ...examSession, answers } });
      },

      setExamIndex: (index) => {
        const { examSession } = get();
        if (!examSession) return;
        set({ examSession: { ...examSession, index } });
      },

      tickExam: () => {
        const { examSession } = get();
        if (!examSession) return false;
        const secondsLeft = examSession.secondsLeft - 1;
        set({ examSession: { ...examSession, secondsLeft } });
        return secondsLeft <= 0;
      },

      finishExam: () => {
        set({ examSession: null });
      },

      clearExam: () => {
        set({ examSession: null });
      },

      recordExamAnswers: (queue, answers) => {
        let newState = get().state;
        queue.forEach((q, i) => {
          const answered = answers[i];
          const correct = answered === q.correct_index;
          newState = recordPerformance(newState, q.id, correct);
        });
        set({ state: newState });
      },
    }),
    {
      name: STORAGE_KEY,
      partialize: (s) => ({ state: s.state }),
      merge: (persisted, current) => {
        const p = persisted as Partial<GameStore> | undefined;
        const raw = { ...defaultState(), ...(p?.state ?? {}) };
        if (!raw.last_heart_refill_at) {
          raw.last_heart_refill_at = raw.last_heart_refill_date
            ? new Date(`${raw.last_heart_refill_date}T00:00:00`).toISOString()
            : new Date().toISOString();
        }
        return {
          ...current,
          state: applyHeartRefill(raw),
        };
      },
    },
  ),
);
