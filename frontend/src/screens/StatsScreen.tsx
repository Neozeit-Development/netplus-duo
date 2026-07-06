import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Caption } from "@/components/Caption";
import { StatBlock } from "@/components/StatBlock";
import { countDueReviews } from "@/lib/srs";
import { computeDomainAccuracy } from "@/lib/weakAreas";
import { useGameStore } from "@/store/useGameStore";
import questions from "@/data/questions.json";
import type { Question } from "@/types";
import styles from "./StatsScreen.module.css";

const ALL_QUESTIONS = questions as Question[];

export function StatsScreen() {
  const state = useGameStore((s) => s.state);
  const reviews = countDueReviews(state);
  const ranked = computeDomainAccuracy(state, ALL_QUESTIONS);

  return (
    <div className={`page-scroll screen-pad ${styles.page}`}>
      <Caption variant="accent">OPERATOR STATS</Caption>
      <h1 className={styles.title}>PERFORMANCE LOG</h1>

      <div className={styles.statsRow}>
        <StatBlock label="STREAK" value={state.streak_days} unit="d" />
        <StatBlock label="BEST" value={state.longest_streak} unit="d" />
        <StatBlock label="RANK" value={state.level} />
      </div>

      <div className={styles.statsRow}>
        <StatBlock label="XP" value={state.xp} />
        <StatBlock label="LIVES" value={`${state.hearts}/${state.max_hearts}`} />
        <StatBlock label="DUE" value={reviews} />
      </div>

      {ranked.length > 0 && (
        <>
          <Caption>DOMAIN ACCURACY</Caption>
          <div className={styles.breakdown}>
            {ranked.map((d) => (
              <div key={d.domain} className={styles.breakdownRow}>
                <span>ZONE {String(d.zone).padStart(2, "0")} · {d.domain}</span>
                <span>{Math.round(d.accuracy * 100)}%</span>
              </div>
            ))}
          </div>
        </>
      )}

      <Link to="/" className="mobile-back">
        <Button variant="ghost">[ BACK ]</Button>
      </Link>
    </div>
  );
}
