export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_SIGNAGE = [0.32, 0.72, 0, 1] as const;

interface StreakVariantOptions {
  delay?: number;
  distance?: number;
}

export function streakReveal({ delay = 0, distance = 48 }: StreakVariantOptions = {}) {
  return {
    initial: { opacity: 0, y: distance, filter: 'blur(10px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-12% 0px' },
    transition: { duration: 0.9, delay, ease: EASE_OUT_EXPO },
  };
}

export const staggerParent = (stagger = 0.08) => ({
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true, margin: '-10% 0px' },
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  },
});

export const staggerChild = {
  variants: {
    hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
  },
};
