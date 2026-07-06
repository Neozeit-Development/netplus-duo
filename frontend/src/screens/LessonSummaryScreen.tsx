import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { Caption } from "@/components/Caption";
import { StatBlock } from "@/components/StatBlock";
import { HEART_REFILL_HOURS, XP_PER_LEVEL } from "@/lib/constants";
import { useHeartRefillCountdown } from "@/hooks/useHeartRefillCountdown";
import { useGameStore } from "@/store/useGameStore";
import styles from "./LessonSummaryScreen.module.css";

export function LessonSummaryScreen() {
  const navigate = useNavigate();
  const state = useGameStore((s) => s.state);
  const summary = useGameStore((s) => s.lastLessonSummary);
  const refillIn = useHeartRefillCountdown(state);

  if (!summary) {
    navigate("/", { replace: true });
    return null;
  }

  const total = summary.correct + summary.wrong;

  return (
    <div className={`page-scroll screen-pad ${styles.page}`}>
      <Caption variant="accent">
        {summary.mode === "weak" ? "DRILL COMPLETE" : "SESSION COMPLETE"}
      </Caption>

      <div className={styles.hero}>
        <span className={styles.heroMain}>{summary.correct}</span>
        <span className={styles.heroSep}>/</span>
        <span className={styles.heroSub}>{total}</span>
      </div>

      {summary.outOfHearts && (
        <Caption>LIVES: 0 / {state.max_hearts} · REFILL IN {refillIn.toUpperCase()}</Caption>
      )}

      {summary.leveledUp && (
        <Caption variant="accent">NEW RANK: {summary.newLevel}</Caption>
      )}

      <div className={styles.statsRow}>
        <StatBlock label="CORRECT" value={summary.correct} />
        <StatBlock label="WRONG" value={summary.wrong} />
        <StatBlock label="STREAK" value={state.streak_days} unit="d" />
      </div>

      <Caption>
        XP +{summary.xpEarned} · RANK {state.level} · {state.xp % XP_PER_LEVEL}/{XP_PER_LEVEL}
      </Caption>

      {summary.outOfHearts ? (
        <>
          <p className={styles.copy}>
            Short session logged. Lives refill every {HEART_REFILL_HOURS} hours — next refill in{" "}
            {refillIn}. Your XP and streak progress are saved.
          </p>
          <Link to="/">
            <Button>[ RETURN TO BASE → ]</Button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/">
            <Button>[ RETURN TO BASE → ]</Button>
          </Link>
          <Button
            variant="ghost"
            onClick={() => navigate(summary.mode === "weak" ? "/weak" : "/lesson/intro")}
          >
            [ RUN AGAIN → ]
          </Button>
        </>
      )}
    </div>
  );
}
