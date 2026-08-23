import { useEffect, useRef, useState } from 'react';

interface CountUpResult {
  ref: React.RefObject<HTMLElement>;
  value: number;
}

export function useCountUp(target: number, durationMs = 1600): CountUpResult {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || typeof IntersectionObserver === 'undefined') {
      setValue(target);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || startedRef.current) {
            continue;
          }
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - t, 4);
            setValue(target * eased);
            if (t < 1) {
              raf = requestAnimationFrame(tick);
            }
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, durationMs]);

  return { ref, value };
}
