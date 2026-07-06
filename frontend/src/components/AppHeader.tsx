import { XP_PER_LEVEL } from "@/lib/constants";
import { useGameStore } from "@/store/useGameStore";
import styles from "./AppHeader.module.css";

export function AppHeader() {
  const state = useGameStore((s) => s.state);
  const xpInLevel = state.xp % XP_PER_LEVEL;
  const hearts = "♥".repeat(state.hearts) + "♡".repeat(state.max_hearts - state.hearts);

  return (
    <header className={styles.header}>
      <span className={styles.hearts}>{hearts}</span>
      <span className={styles.meta}>
        RANK <span className={styles.level}>{state.level}</span>
      </span>
      <span className={styles.meta}>
        XP {xpInLevel}/{XP_PER_LEVEL}
      </span>
      <span className={styles.streak}>// {state.streak_days}d</span>
    </header>
  );
}
