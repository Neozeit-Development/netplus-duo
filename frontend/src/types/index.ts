export interface Question {
  id: string;
  zone: number;
  domain: string;
  node: number;
  question: string;
  options: string[];
  correct_index: number;
  explanation: string;
}

export interface StudyItem {
  title: string;
  type: string;
  headers?: string[];
  rows?: string[][];
  body?: string;
  key_points?: string[];
}

export interface StudyObjective {
  id: number;
  name: string;
  description: string;
  items: StudyItem[];
}

export interface StudyDomain {
  zone: number;
  domain: string;
  flavorName: string;
  objectives: StudyObjective[];
}

export interface SrsEntry {
  interval: number;
  due: string;
}

export interface PerformanceEntry {
  correct: number;
  wrong: number;
}

export interface GameState {
  username: string;
  streak_days: number;
  longest_streak: number;
  hearts: number;
  max_hearts: number;
  xp: number;
  level: number;
  last_played_date: string | null;
  /** ISO timestamp of last full heart refill */
  last_heart_refill_at: string;
  /** @deprecated migrated to last_heart_refill_at */
  last_heart_refill_date?: string;
  srs: Record<string, SrsEntry>;
  performance: Record<string, PerformanceEntry>;
  weekly_freeze_used: boolean;
}

export type SessionMode = "daily" | "weak";

export interface LessonSession {
  queue: Question[];
  index: number;
  correct: number;
  wrong: number;
  xpEarned: number;
  startLevel: number;
  mode: SessionMode;
}

export interface LessonSummary {
  correct: number;
  wrong: number;
  xpEarned: number;
  leveledUp: boolean;
  newLevel: number;
  mode: SessionMode;
  outOfHearts: boolean;
}

export interface ExamSession {
  queue: Question[];
  index: number;
  answers: (number | null)[];
  secondsLeft: number;
}

export interface DomainAccuracy {
  domain: string;
  zone: number;
  accuracy: number;
  attempts: number;
}
