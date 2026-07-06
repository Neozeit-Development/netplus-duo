import { ProgressBar } from "./ProgressBar";
import styles from "./ZoneRow.module.css";

interface ZoneRowProps {
  zone: number;
  title: string;
  percent?: number;
  locked?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export function ZoneRow({ zone, title, percent, locked, active, onClick }: ZoneRowProps) {
  const zoneLabel = String(zone).padStart(2, "0");
  const showBar = !locked && percent !== undefined;

  return (
    <button
      type="button"
      className={`${styles.row} ${active ? styles.active : ""} ${locked ? styles.locked : ""}`}
      onClick={onClick}
      disabled={locked}
    >
      <div className={styles.index}>
        <span className={styles.numeral}>{zoneLabel}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          {showBar && (
            <div className={styles.pct}>
              <span className={styles.pctNum}>{Math.round(percent)}</span>
              <span className={styles.pctUnit}>%</span>
            </div>
          )}
        </div>
        {showBar && <ProgressBar value={percent} variant={percent >= 70 ? "green" : "red"} />}
      </div>
    </button>
  );
}
