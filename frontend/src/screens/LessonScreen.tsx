import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Caption } from "@/components/Caption";
import { ProgressBar } from "@/components/ProgressBar";
import { useGameStore } from "@/store/useGameStore";
import styles from "./LessonScreen.module.css";

export function LessonScreen() {
  const navigate = useNavigate();
  const lessonSession = useGameStore((s) => s.lessonSession);
  const answerLesson = useGameStore((s) => s.answerLesson);
  const continueLesson = useGameStore((s) => s.continueLesson);
  const finishLesson = useGameStore((s) => s.finishLesson);

  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string } | null>(null);

  if (!lessonSession) {
    navigate("/lesson/intro", { replace: true });
    return null;
  }

  const q = lessonSession.queue[lessonSession.index];
  const progress = Math.round((lessonSession.index / lessonSession.queue.length) * 100);

  const handleAnswer = (idx: number) => {
    if (feedback) return;
    setSelected(idx);
    const result = answerLesson(idx);
    setFeedback(result);
  };

  const handleContinue = () => {
    const next = continueLesson();
    if (next === "finished") {
      finishLesson();
      navigate("/lesson/summary");
    } else {
      setSelected(null);
      setFeedback(null);
    }
  };

  return (
    <div className={`page-scroll screen-pad ${styles.page}`}>
      <div className={styles.topBar}>
        <Caption>
          ZONE {String(q.zone).padStart(2, "0")} · Q {lessonSession.index + 1} / {lessonSession.queue.length}
        </Caption>
        <ProgressBar value={progress} />
      </div>

      <div className={styles.split}>
        <div className={styles.questionCol}>
          <p className={styles.question}>{q.question}</p>
        </div>

        <div className={styles.optionsCol}>
          <div className={styles.options}>
            {q.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              let variant = "";
              if (feedback) {
                if (idx === q.correct_index) variant = styles.correct;
                else if (idx === selected && !feedback.correct) variant = styles.wrong;
                else variant = styles.dim;
              }
              return (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.option} ${variant}`}
                  onClick={() => handleAnswer(idx)}
                  disabled={Boolean(feedback)}
                >
                  <span className={styles.letter}>{letter}</span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {feedback && (
        <div
          className={`${styles.feedback} ${feedback.correct ? styles.feedbackCorrect : styles.feedbackWrong}`}
          role="status"
          aria-live="polite"
        >
          <div className={styles.feedbackWord}>{feedback.correct ? "CORRECT" : "WRONG"}</div>
          {feedback.explanation && <p className={styles.explanation}>{feedback.explanation}</p>}
          <Button onClick={handleContinue}>[ CONTINUE → ]</Button>
        </div>
      )}
    </div>
  );
}
