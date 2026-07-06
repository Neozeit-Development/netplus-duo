import { WEAK_LESSON_SIZE } from "./constants";
import { shuffle } from "./dates";
import type { DomainAccuracy, GameState, Question } from "@/types";

export function computeDomainAccuracy(
  state: GameState,
  allQuestions: Question[],
): DomainAccuracy[] {
  const byDomain: Record<string, { correct: number; attempts: number; zone: number }> = {};

  for (const q of allQuestions) {
    const perf = state.performance[q.id];
    if (!perf) continue;
    const attempts = perf.correct + perf.wrong;
    if (attempts === 0) continue;
    const d = byDomain[q.domain] ?? { correct: 0, attempts: 0, zone: q.zone };
    d.correct += perf.correct;
    d.attempts += attempts;
    byDomain[q.domain] = d;
  }

  return Object.entries(byDomain)
    .map(([domain, d]) => ({
      domain,
      zone: d.zone,
      accuracy: d.correct / d.attempts,
      attempts: d.attempts,
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

export function buildWeakAreaQueue(
  state: GameState,
  allQuestions: Question[],
  size = WEAK_LESSON_SIZE,
): Question[] {
  const scored = allQuestions.map((q) => {
    const perf = state.performance[q.id];
    const attempts = perf ? perf.correct + perf.wrong : 0;
    const wrongRate = attempts > 0 ? perf!.wrong / attempts : 0;
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

export function computeOverallReadiness(
  state: GameState,
  allQuestions: Question[],
): number {
  const ranked = computeDomainAccuracy(state, allQuestions);
  if (ranked.length === 0) return 0;
  const total = ranked.reduce((sum, d) => sum + d.accuracy, 0);
  return Math.round((total / ranked.length) * 100);
}
