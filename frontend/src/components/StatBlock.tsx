import styles from "./StatBlock.module.css";

interface StatBlockProps {
  label: string;
  value: string | number;
  unit?: string;
}

export function StatBlock({ label, value, unit }: StatBlockProps) {
  return (
    <div className={styles.block}>
      <div className={styles.label}>// {label}</div>
      <div className={styles.valueRow}>
        <span className={styles.value}>{value}</span>
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
    </div>
  );
}
