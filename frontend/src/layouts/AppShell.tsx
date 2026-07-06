import { Outlet } from "react-router-dom";
import { AppHeader } from "@/components/AppHeader";
import { OperatorSidebar } from "@/components/OperatorSidebar";
import { useGameStore } from "@/store/useGameStore";
import { useEffect } from "react";
import styles from "./AppShell.module.css";

export function AppShell() {
  const hydrate = useGameStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
    const id = setInterval(hydrate, 60_000);
    return () => clearInterval(id);
  }, [hydrate]);

  return (
    <div className={styles.shell}>
      <OperatorSidebar />
      <div className={styles.body}>
        <div className={styles.headerMobile}>
          <AppHeader />
        </div>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
