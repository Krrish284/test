import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useFlash } from './flash-context';

export function FlashOverlay() {
  const { flashAt } = useFlash();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (flashAt === 0) {
      return;
    }
    setActive(true);
    const timer = window.setTimeout(() => setActive(false), 700);
    return () => window.clearTimeout(timer);
  }, [flashAt]);

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          key={flashAt}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.9, 0.15, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, times: [0, 0.12, 0.5, 1], ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(237,241,238,0.95),rgba(214,255,63,0.25)_45%,transparent_75%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/70 shadow-flare" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
