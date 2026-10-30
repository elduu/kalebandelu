import { useEffect, useState } from "react";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getCountdown(target: Date): Countdown {
  const distance = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
}

/** Time remaining until `target`, refreshed every second. */
export function useCountdown(target: Date): Countdown {
  const [countdown, setCountdown] = useState(() => getCountdown(target));

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown(target)), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  return countdown;
}
