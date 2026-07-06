export const STORAGE_KEY = "netplus_duo_state";
export const LESSON_SIZE = 5;
export const WEAK_LESSON_SIZE = 8;
export const HEART_REFILL_HOURS = 3;
export const HEART_REFILL_MS = HEART_REFILL_HOURS * 60 * 60 * 1000;
export const XP_PER_CORRECT = 10;
export const XP_PER_LEVEL = 100;
export const MAX_SRS_INTERVAL = 14;
export const EXAM_SIZE = 90;
export const EXAM_MINUTES = 90;
export const EXAM_PASS_PERCENT = 80;
export const EXAM_DOMAIN_WEIGHTS: Record<number, number> = {
  1: 0.23,
  2: 0.2,
  3: 0.19,
  4: 0.14,
  5: 0.24,
};
