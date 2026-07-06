import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Caption } from "@/components/Caption";
import { HEART_REFILL_HOURS, WEAK_LESSON_SIZE } from "@/lib/constants";
import { buildWeakAreaQueue, computeDomainAccuracy } from "@/lib/weakAreas";
import { useGameStore } from "@/store/useGameStore";
import questions from "@/data/questions.json";
import type { Question } from "@/types";
import styles from "./WeakIntroScreen.module.css";

const ALL_QUESTIONS = questions as Question[];

export function WeakIntroScreen() {
  const navigate = useNavigate();
  const state = useGameStore((s) => s.state);
  const startLesson = useGameStore((s) => s.startLesson);
  const ranked = computeDomainAccuracy(state, ALL_QUESTIONS);

  const summary =
    ranked.length === 0
      ? "Play a few daily lessons first. The drill needs history to target weak objectives."
      : `Weakest domain: ${ranked[0].domain} (${Math.round(ranked[0].accuracy * 100)}% correct). ${WEAK_LESSON_SIZE} focused questions — about 5 minutes.`;

  const handleStart = () => {
    const queue = buildWeakAreaQueue(state, ALL_QUESTIONS);
    startLesson(queue, "weak");
    navigate("/lesson");
  };

  return (
    <div className={`page-scroll screen-pad intro-panel ${styles.wrap}`}>
      <Caption variant="accent">WEAK AREA DRILL</Caption>
      <h1 className={styles.title}>TARGETED REMEDIATION</h1>
      <p className={styles.copy}>{summary}</p>
      <p className={styles.copy}>Lives refill every {HEART_REFILL_HOURS} hours.</p>
      <Button onClick={handleStart}>[ START DRILL → ]</Button>
      <Link to="/" className={`${styles.back} mobile-back`}>
        <Button variant="ghost">[ BACK ]</Button>
      </Link>
    </div>
  );
}
