import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  value: number;
  variant?: "red" | "green";
}

export function ProgressBar({ value, variant = "red" }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div className={styles.track}>
      <div
        className={`${styles.fill} ${styles[variant]}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
