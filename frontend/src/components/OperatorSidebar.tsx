import { NavLink } from "react-router-dom";
import { XP_PER_LEVEL } from "@/lib/constants";
import { useGameStore } from "@/store/useGameStore";
import styles from "./OperatorSidebar.module.css";

const NAV: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "MISSION SELECT", end: true },
  { to: "/lesson/intro", label: "DAILY LESSON" },
  { to: "/weak", label: "WEAK DRILL" },
  { to: "/study", label: "STUDY GUIDE" },
  { to: "/exam", label: "PRACTICE EXAM" },
  { to: "/stats", label: "STATS" },
  { to: "/settings", label: "SETTINGS" },
];

export function OperatorSidebar() {
  const state = useGameStore((s) => s.state);
  const xpInLevel = state.xp % XP_PER_LEVEL;
  const hearts = "♥".repeat(state.hearts) + "♡".repeat(state.max_hearts - state.hearts);

  return (
    <aside className={styles.sidebar} aria-label="Main navigation">
      <div className={styles.brand}>
        <div className={styles.brandCaption}>// OPERATOR CONSOLE</div>
        <div className={styles.wordmark}>NETPLUS DUO</div>
        <div className={styles.operator}>{state.username.toUpperCase()}</div>
      </div>

      <nav className={styles.nav}>
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.status}>
        <div className={styles.statusRow}>
          <span className={styles.statusLabel}>// LIVES</span>
          <span className={styles.hearts}>{hearts}</span>
        </div>
        <div className={styles.statusGrid}>
          <div>
            <span className={styles.statusLabel}>RANK</span>
            <span className={styles.statusValue}>{state.level}</span>
          </div>
          <div>
            <span className={styles.statusLabel}>STREAK</span>
            <span className={styles.statusValue}>{state.streak_days}d</span>
          </div>
          <div>
            <span className={styles.statusLabel}>XP</span>
            <span className={styles.statusValue}>
              {xpInLevel}/{XP_PER_LEVEL}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
