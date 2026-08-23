import { useCallback, useEffect, useRef, useState } from 'react';
import { isCoarsePointer } from '../utils/webgl';

interface TiltHandlers {
  onPointerMove: (event: React.PointerEvent<HTMLElement>) => void;
  onPointerLeave: () => void;
}

export function useTilt(maxDeg = 7): {
  ref: React.RefObject<HTMLDivElement>;
  style: React.CSSProperties;
  handlers: TiltHandlers;
} {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const coarse = isCoarsePointer();
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(!coarse && !reduced);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (!enabled) {
        return;
      }
      const bounds = event.currentTarget.getBoundingClientRect();
      const px = (event.clientX - bounds.left) / bounds.width - 0.5;
      const py = (event.clientY - bounds.top) / bounds.height - 0.5;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setTilt({ rx: -py * maxDeg, ry: px * maxDeg });
      });
    },
    [enabled, maxDeg]
  );

  const onPointerLeave = useCallback(() => {
    cancelAnimationFrame(frame.current);
    setTilt({ rx: 0, ry: 0 });
  }, []);

  return {
    ref,
    style: {
      transform: `perspective(900px) rotateX(${tilt.rx.toFixed(2)}deg) rotateY(${tilt.ry.toFixed(2)}deg)`,
      transition: 'transform 500ms cubic-bezier(0.32, 0.72, 0, 1)',
      transformStyle: 'preserve-3d' as const,
    },
    handlers: enabled
      ? { onPointerMove, onPointerLeave }
      : { onPointerMove: () => undefined, onPointerLeave: () => undefined },
  };
}
