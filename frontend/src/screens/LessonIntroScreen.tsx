import { Link, useNavigate } from "react-router-dom";
import { Caption } from "@/components/Caption";
import { Button } from "@/components/Button";
import { HEART_REFILL_HOURS, LESSON_SIZE } from "@/lib/constants";
import { buildLessonQueue } from "@/lib/srs";
import { useHeartRefillCountdown } from "@/hooks/useHeartRefillCountdown";
import { useGameStore } from "@/store/useGameStore";
import questions from "@/data/questions.json";
import type { Question } from "@/types";
import styles from "./LessonIntroScreen.module.css";

const ALL_QUESTIONS = questions as Question[];

export function LessonIntroScreen() {
  const navigate = useNavigate();
  const state = useGameStore((s) => s.state);
  const hydrate = useGameStore((s) => s.hydrate);
  const startLesson = useGameStore((s) => s.startLesson);
  const refillIn = useHeartRefillCountdown(state);
  const queue = buildLessonQueue(state, ALL_QUESTIONS);
  const count = Math.min(queue.length, LESSON_SIZE);
  const noHearts = state.hearts === 0;

  const handleStart = () => {
    hydrate();
    const fresh = useGameStore.getState().state;
    if (fresh.hearts === 0) return;
    const q = buildLessonQueue(fresh, ALL_QUESTIONS);
    startLesson(q, "daily");
    navigate("/lesson");
  };

  return (
    <div className={`page-scroll screen-pad intro-panel ${styles.wrap}`}>
      <Caption variant="accent">DAILY LESSON</Caption>
      <h1 className={styles.title}>QUICK DRILL</h1>

      <div className={styles.stats}>
        <div>// STREAK: {state.streak_days} days</div>
        <div>// LIVES: {state.hearts} / {state.max_hearts}</div>
        <div>// QUESTIONS: {count} · ~3 min</div>
      </div>

      <p className={styles.copy}>
        Five bite-sized questions. One concept at a time. Wrong answers cost a life.
        Lives refill every {HEART_REFILL_HOURS} hours.
      </p>

      {noHearts && (
        <p className={styles.waitCopy}>// LIVES REFILL IN {refillIn.toUpperCase()}</p>
      )}

      <Button onClick={handleStart} disabled={count === 0 || noHearts}>
        {noHearts ? `[ REFILL IN ${refillIn.toUpperCase()} ]` : "[ BEGIN LESSON → ]"}
      </Button>
      <Link to="/" className={`${styles.back} mobile-back`}>
        <Button variant="ghost">[ BACK ]</Button>
      </Link>
    </div>
  );
}
