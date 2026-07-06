import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Caption } from "@/components/Caption";
import { EXAM_MINUTES, EXAM_PASS_PERCENT, EXAM_SIZE } from "@/lib/constants";
import { buildExamQueue } from "@/lib/exam";
import { computeDomainAccuracy } from "@/lib/weakAreas";
import { useGameStore } from "@/store/useGameStore";
import questions from "@/data/questions.json";
import type { Question } from "@/types";
import styles from "./ExamScreen.module.css";

const ALL_QUESTIONS = questions as Question[];

export function ExamIntroScreen() {
  const navigate = useNavigate();
  const state = useGameStore((s) => s.state);
  const startExam = useGameStore((s) => s.startExam);
  const ranked = computeDomainAccuracy(state, ALL_QUESTIONS);

  const handleStart = () => {
    startExam(buildExamQueue(ALL_QUESTIONS), EXAM_MINUTES * 60);
    navigate("/exam/run");
  };

  return (
    <div className={`page-scroll screen-pad intro-panel ${styles.wrap}`}>
      <Caption variant="accent">PRACTICE EXAM</Caption>
      <h1 className={styles.title}>FULL SIMULATION</h1>
      <div className={styles.meta}>
        <div>// {EXAM_MINUTES} MINUTES</div>
        <div>// {EXAM_SIZE} QUESTIONS · 5 DOMAINS</div>
        <div>// PASS MARK: {EXAM_PASS_PERCENT}%</div>
      </div>
      {ranked.length > 0 && (
        <Caption>
          WEAKEST: {ranked[0].domain} ({Math.round(ranked[0].accuracy * 100)}%)
        </Caption>
      )}
      <p className={styles.copy}>No hints until submit. Timed like the real exam.</p>
      <Button onClick={handleStart}>[ BEGIN EXAM → ]</Button>
      <div className="mobile-back">
        <Link to="/">
          <Button variant="ghost">[ BACK ]</Button>
        </Link>
      </div>
    </div>
  );
}
