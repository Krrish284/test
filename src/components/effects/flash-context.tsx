import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface FlashContextValue {
  flashAt: number;
  triggerFlash: () => void;
}

const FlashContext = createContext<FlashContextValue | null>(null);

export function FlashProvider({ children }: { children: ReactNode }) {
  const [flashAt, setFlashAt] = useState(0);
  const cooldown = useRef(0);

  const triggerFlash = useCallback(() => {
    const now = performance.now();
    if (now - cooldown.current < 900) {
      return;
    }
    cooldown.current = now;
    setFlashAt(now);
  }, []);

  const value = useMemo(() => ({ flashAt, triggerFlash }), [flashAt, triggerFlash]);
  return <FlashContext.Provider value={value}>{children}</FlashContext.Provider>;
}

export function useFlash(): FlashContextValue {
  const ctx = useContext(FlashContext);
  if (!ctx) {
    throw new Error('useFlash must be used within FlashProvider');
  }
  return ctx;
}
