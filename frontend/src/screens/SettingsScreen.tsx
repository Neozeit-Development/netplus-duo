import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Caption } from "@/components/Caption";
import { useGameStore } from "@/store/useGameStore";
import styles from "./SettingsScreen.module.css";

export function SettingsScreen() {
  const navigate = useNavigate();
  const state = useGameStore((s) => s.state);
  const setUsername = useGameStore((s) => s.setUsername);
  const resetProgress = useGameStore((s) => s.resetProgress);
  const [name, setName] = useState(state.username);

  const handleSave = () => {
    setUsername(name);
    navigate("/");
  };

  const handleReset = () => {
    if (confirm("Reset all progress? This cannot be undone.")) {
      resetProgress();
      navigate("/");
    }
  };

  return (
    <div className={`page-scroll screen-pad intro-panel ${styles.wrap}`}>
      <Caption variant="accent">SETTINGS</Caption>
      <h1 className={styles.title}>OPERATOR PROFILE</h1>

      <label className={styles.field}>
        <Caption>CALLSIGN</Caption>
        <input
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={24}
        />
      </label>

      <Button onClick={handleSave}>[ SAVE & EXIT → ]</Button>
      <Button variant="ghost" onClick={handleReset}>
        [ RESET ALL PROGRESS ]
      </Button>
      <Link to="/">
        <Button variant="ghost">[ CANCEL ]</Button>
      </Link>
    </div>
  );
}
