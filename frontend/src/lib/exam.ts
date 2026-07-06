import { EXAM_DOMAIN_WEIGHTS, EXAM_SIZE } from "./constants";
import { shuffle } from "./dates";
import type { Question } from "@/types";

export function buildExamQueue(allQuestions: Question[]): Question[] {
  const byZone: Record<number, Question[]> = {};
  for (const q of allQuestions) {
    (byZone[q.zone] ??= []).push(q);
  }

  const zones = Object.keys(EXAM_DOMAIN_WEIGHTS).map(Number);
  let allocated = 0;
  const queue: Question[] = [];

  zones.forEach((zone, idx) => {
    const count =
      idx === zones.length - 1
        ? EXAM_SIZE - allocated
        : Math.round(EXAM_SIZE * EXAM_DOMAIN_WEIGHTS[zone]);
    allocated += count;
    const pool = shuffle([...(byZone[zone] ?? [])]);
    queue.push(...pool.slice(0, count));
  });

  return shuffle(queue);
}

export interface ExamResult {
  correctCount: number;
  total: number;
  pct: number;
  passed: boolean;
  domainStats: Record<string, { correct: number; total: number }>;
}

export function scoreExam(
  queue: Question[],
  answers: (number | null)[],
  passPercent: number,
): ExamResult {
  let correctCount = 0;
  const domainStats: Record<string, { correct: number; total: number }> = {};

  queue.forEach((q, i) => {
    const answered = answers[i];
    const correct = answered === q.correct_index;
    if (correct) correctCount += 1;

    const d = domainStats[q.domain] ?? { correct: 0, total: 0 };
    d.total += 1;
    if (correct) d.correct += 1;
    domainStats[q.domain] = d;
  });

  const total = queue.length;
  const pct = Math.round((correctCount / total) * 100);
  return { correctCount, total, pct, passed: pct >= passPercent, domainStats };
}
