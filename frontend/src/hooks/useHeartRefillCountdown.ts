import { useEffect, useState } from "react";
import { heartRefillLabel } from "@/lib/state";
import type { GameState } from "@/types";

/** Re-render every minute so the refill countdown stays current. */
export function useHeartRefillCountdown(state: GameState): string {
  const [label, setLabel] = useState(() => heartRefillLabel(state));

  useEffect(() => {
    setLabel(heartRefillLabel(state));
    const id = setInterval(() => setLabel(heartRefillLabel(state)), 60_000);
    return () => clearInterval(id);
  }, [state.hearts, state.last_heart_refill_at, state.last_heart_refill_date]);

  return label;
}
