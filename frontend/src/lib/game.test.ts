import { describe, expect, it } from "vitest";
import { HEART_REFILL_MS, LESSON_SIZE } from "@/lib/constants";
import { defaultState, applyStreakUpdate, applyHeartRefill } from "@/lib/state";
import { buildLessonQueue, scheduleReview } from "@/lib/srs";
import type { Question } from "@/types";

const sampleQuestions: Question[] = [
  {
    id: "q1",
    zone: 1,
    domain: "Networking Concepts",
    node: 1.1,
    question: "Test?",
    options: ["A", "B", "C", "D"],
    correct_index: 0,
    explanation: "",
  },
  {
    id: "q2",
    zone: 1,
    domain: "Networking Concepts",
    node: 1.2,
    question: "Test 2?",
    options: ["A", "B", "C", "D"],
    correct_index: 1,
    explanation: "",
  },
];

describe("SRS", () => {
  it("schedules shorter interval on wrong answer", () => {
    let state = defaultState();
    state = scheduleReview(state, "q1", false);
    expect(state.srs.q1.interval).toBe(1);
  });

  it("builds lesson queue from fresh questions", () => {
    const state = defaultState();
    const queue = buildLessonQueue(state, sampleQuestions);
    expect(queue.length).toBe(2);
    expect(LESSON_SIZE).toBe(5);
  });
});

describe("heart refill", () => {
  it("refills hearts after 3 hours", () => {
    const now = Date.now();
    const state = {
      ...defaultState(),
      hearts: 0,
      last_heart_refill_at: new Date(now - HEART_REFILL_MS - 1000).toISOString(),
    };
    const updated = applyHeartRefill(state, now);
    expect(updated.hearts).toBe(5);
  });

  it("does not refill hearts before 3 hours", () => {
    const now = Date.now();
    const state = {
      ...defaultState(),
      hearts: 0,
      last_heart_refill_at: new Date(now - 60_000).toISOString(),
    };
    const updated = applyHeartRefill(state, now);
    expect(updated.hearts).toBe(0);
  });
});

describe("streak", () => {
  it("starts streak at 1 on first play", () => {
    const state = defaultState();
    const updated = applyStreakUpdate(state);
    expect(updated.streak_days).toBe(1);
  });
});
