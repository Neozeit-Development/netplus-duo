import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  fullWidth = true,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[variant]} ${fullWidth ? styles.full : ""} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
