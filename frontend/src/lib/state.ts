import { HEART_REFILL_MS, XP_PER_LEVEL } from "./constants";
import { todayStr, daysBetween, formatDuration } from "./dates";
import type { GameState, PerformanceEntry } from "@/types";

export function defaultState(): GameState {
  return {
    username: "Player",
    streak_days: 0,
    longest_streak: 0,
    hearts: 5,
    max_hearts: 5,
    xp: 0,
    level: 1,
    last_played_date: null,
    last_heart_refill_at: new Date().toISOString(),
    srs: {},
    performance: {},
    weekly_freeze_used: false,
  };
}

export function parseHeartRefillTime(state: GameState): number {
  if (state.last_heart_refill_at) {
    return new Date(state.last_heart_refill_at).getTime();
  }
  if (state.last_heart_refill_date) {
    return new Date(`${state.last_heart_refill_date}T00:00:00`).getTime();
  }
  return 0;
}

/** Refill hearts when the 3-hour window has elapsed. */
export function applyHeartRefill(state: GameState, now = Date.now()): GameState {
  const lastRefill = parseHeartRefillTime(state);
  if (now - lastRefill >= HEART_REFILL_MS) {
    return {
      ...state,
      hearts: state.max_hearts,
      last_heart_refill_at: new Date(now).toISOString(),
    };
  }
  return state;
}

export function msUntilHeartRefill(state: GameState, now = Date.now()): number {
  const lastRefill = parseHeartRefillTime(state);
  return Math.max(0, HEART_REFILL_MS - (now - lastRefill));
}

export function heartRefillLabel(state: GameState, now = Date.now()): string {
  const remaining = msUntilHeartRefill(state, now);
  if (remaining === 0) return "now";
  return formatDuration(remaining);
}

export function computeLevel(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

/** @deprecated use applyHeartRefill */
export function applyDailyReset(state: GameState): GameState {
  return applyHeartRefill(state);
}

export function applyStreakUpdate(state: GameState): GameState {
  const today = todayStr();
  let streak = state.streak_days;

  if (state.last_played_date === today) {
    // already played today
  } else if (state.last_played_date === null) {
    streak = 1;
  } else {
    const gap = daysBetween(state.last_played_date, today);
    streak = gap === 1 ? state.streak_days + 1 : 1;
  }

  return {
    ...state,
    streak_days: streak,
    longest_streak: Math.max(state.longest_streak, streak),
    last_played_date: today,
  };
}

export function recordPerformance(
  state: GameState,
  questionId: string,
  wasCorrect: boolean,
): GameState {
  const existing: PerformanceEntry = state.performance[questionId] ?? {
    correct: 0,
    wrong: 0,
  };
  const entry: PerformanceEntry = {
    correct: existing.correct + (wasCorrect ? 1 : 0),
    wrong: existing.wrong + (wasCorrect ? 0 : 1),
  };
  return {
    ...state,
    performance: { ...state.performance, [questionId]: entry },
  };
}
