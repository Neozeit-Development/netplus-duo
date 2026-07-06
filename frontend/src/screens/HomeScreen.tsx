import { Link, useNavigate } from "react-router-dom";
import { Caption } from "@/components/Caption";
import { Button } from "@/components/Button";
import { ProgressBar } from "@/components/ProgressBar";
import { ZoneRow } from "@/components/ZoneRow";
import { computeDomainAccuracy, computeOverallReadiness } from "@/lib/weakAreas";
import { useGameStore } from "@/store/useGameStore";
import questions from "@/data/questions.json";
import studyContent from "@/data/study_content.json";
import type { Question, StudyDomain } from "@/types";
import styles from "./HomeScreen.module.css";

const ALL_QUESTIONS = questions as Question[];
const STUDY = studyContent as StudyDomain[];

export function HomeScreen() {
  const navigate = useNavigate();
  const state = useGameStore((s) => s.state);
  const ranked = computeDomainAccuracy(state, ALL_QUESTIONS);
  const readiness = computeOverallReadiness(state, ALL_QUESTIONS);
  const accuracyByDomain = Object.fromEntries(ranked.map((d) => [d.domain, d]));

  return (
    <div className={`page-scroll ${styles.home}`}>
      <aside className={styles.aside}>
        <div className={styles.asideTop}>
          <Caption variant="accent">MISSION SELECT</Caption>
          <h1 className={styles.wordmark}>NETPLUS DUO</h1>
          <div className={styles.operator}>// OPERATOR: {state.username.toUpperCase()}</div>
        </div>

        <div className={styles.readiness}>
          <div className={styles.readinessHeader}>
            <Caption>OVERALL READINESS</Caption>
            <div className={styles.readinessPct}>
              <span className={styles.readinessNum}>{readiness}</span>
              <span className={styles.readinessUnit}>%</span>
            </div>
          </div>
          <ProgressBar value={readiness} />
        </div>

        <Link to="/lesson/intro" className={styles.dailyCta}>
          <Button>[ LAUNCH DAILY LESSON → ]</Button>
        </Link>

        <div className={styles.asideActions}>
          <Link to="/weak"><Button variant="ghost">[ WEAK DRILL ]</Button></Link>
          <Link to="/exam"><Button variant="ghost">[ PRACTICE EXAM ]</Button></Link>
        </div>
      </aside>

      <section className={styles.main}>
        <Caption>TRAINING ZONES · COMPTIA NETWORK+ N10-009</Caption>
        <div className={styles.zoneGrid}>
          {STUDY.map((domain) => {
            const acc = accuracyByDomain[domain.domain];
            const pct = acc ? Math.round(acc.accuracy * 100) : undefined;
            return (
              <ZoneRow
                key={domain.zone}
                zone={domain.zone}
                title={domain.domain}
                percent={pct}
                locked={!acc}
                onClick={() => navigate(`/study/${domain.zone}`)}
              />
            );
          })}
        </div>
      </section>

      <nav className={styles.navGrid} aria-label="Quick navigation">
        <Link to="/weak"><Button variant="ghost">[ WEAK DRILL ]</Button></Link>
        <Link to="/exam"><Button variant="ghost">[ PRACTICE EXAM ]</Button></Link>
        <Link to="/study"><Button variant="ghost">[ STUDY GUIDE ]</Button></Link>
        <Link to="/stats"><Button variant="ghost">[ STATS ]</Button></Link>
        <Link to="/settings"><Button variant="ghost">[ SETTINGS ]</Button></Link>
      </nav>
    </div>
  );
}
