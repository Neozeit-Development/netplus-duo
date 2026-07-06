import styles from "./Caption.module.css";

interface CaptionProps {
  children: React.ReactNode;
  variant?: "neutral" | "accent";
  className?: string;
}

export function Caption({ children, variant = "neutral", className }: CaptionProps) {
  return (
    <div className={`${styles.caption} ${styles[variant]} ${className ?? ""}`}>
      // {children}
    </div>
  );
}
