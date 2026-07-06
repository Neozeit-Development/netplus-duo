import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Caption } from "@/components/Caption";
import { ProgressBar } from "@/components/ProgressBar";
import { EXAM_PASS_PERCENT } from "@/lib/constants";
import { scoreExam } from "@/lib/exam";
import { formatTimer } from "@/lib/dates";
import { useGameStore } from "@/store/useGameStore";
import styles from "./ExamScreen.module.css";

export function ExamRunScreen() {
  const navigate = useNavigate();
  const examSession = useGameStore((s) => s.examSession);
  const setExamAnswer = useGameStore((s) => s.setExamAnswer);
  const setExamIndex = useGameStore((s) => s.setExamIndex);
  const recordExamAnswers = useGameStore((s) => s.recordExamAnswers);
  const finishExam = useGameStore((s) => s.finishExam);

  const [result, setResult] = useState<ReturnType<typeof scoreExam> | null>(null);

  const submit = useCallback(() => {
    const session = useGameStore.getState().examSession;
    if (!session) return;
    const r = scoreExam(session.queue, session.answers, EXAM_PASS_PERCENT);
    recordExamAnswers(session.queue, session.answers);
    setResult(r);
    finishExam();
  }, [recordExamAnswers, finishExam]);

  useEffect(() => {
    if (!examSession) {
      navigate("/exam", { replace: true });
      return;
    }
    const id = setInterval(() => {
      const done = useGameStore.getState().tickExam();
      if (done) submit();
    }, 1000);
    return () => clearInterval(id);
  }, [examSession, navigate, submit]);

  if (!examSession && !result) return null;

  if (result) {
    return (
      <div className={`page-scroll screen-pad ${styles.resultsPage}`}>
        <Caption variant="accent">EXAM RESULTS</Caption>
        <div className={styles.resultsGrid}>
          <div className={`${styles.resultBanner} ${result.passed ? styles.pass : styles.fail}`}>
            <span className={styles.resultPct}>{result.pct}%</span>
            <span className={styles.resultLabel}>{result.passed ? "PASS" : "FAIL"}</span>
          </div>
          <div className={styles.resultsMeta}>
            <div className={styles.meta}>
              <div>// CORRECT: {result.correctCount}</div>
              <div>// WRONG: {result.total - result.correctCount}</div>
            </div>
            <div className={styles.breakdown}>
              {Object.entries(result.domainStats).map(([domain, d]) => (
                <div key={domain} className={styles.breakdownRow}>
                  <span>{domain}</span>
                  <span>
                    {d.correct}/{d.total}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Button onClick={() => navigate("/")}>[ RETURN TO BASE → ]</Button>
      </div>
    );
  }

  const q = examSession!.queue[examSession!.index];
  const selected = examSession!.answers[examSession!.index];
  const progress = Math.round((examSession!.index / examSession!.queue.length) * 100);

  const handleQuit = () => {
    if (window.confirm("Quit the exam? It will be scored with the answers you've picked so far.")) {
      submit();
    }
  };

  return (
    <div className={`page-scroll screen-pad ${styles.examPage}`}>
      <div className={styles.examTop}>
        <Caption>
          Q {examSession!.index + 1} / {examSession!.queue.length}
        </Caption>
        <ProgressBar value={progress} />
        <span className={styles.timer}>{formatTimer(examSession!.secondsLeft)}</span>
      </div>

      <div className={styles.examSplit}>
        <p className={styles.question}>{q.question}</p>
        <div className={styles.options}>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.option} ${selected === idx ? styles.selected : ""}`}
              onClick={() => setExamAnswer(idx)}
            >
              <span className={styles.letter}>{String.fromCharCode(65 + idx)}</span>
              <span>{opt}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.examFooter}>
        <div className={styles.navRow}>
          <Button
            variant="ghost"
            fullWidth={false}
            onClick={() => setExamIndex(examSession!.index - 1)}
            disabled={examSession!.index === 0}
          >
            [ PREV ]
          </Button>
          {examSession!.index < examSession!.queue.length - 1 ? (
            <Button fullWidth={false} onClick={() => setExamIndex(examSession!.index + 1)}>
              [ NEXT ]
            </Button>
          ) : (
            <Button fullWidth={false} onClick={submit}>
              [ SUBMIT ]
            </Button>
          )}
        </div>
        <Button variant="ghost" onClick={handleQuit}>
          [ QUIT EXAM ]
        </Button>
      </div>
    </div>
  );
}
