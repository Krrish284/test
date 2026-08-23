import { motion } from 'framer-motion';
import { HeroCanvas } from '../components/three/HeroCanvas';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { TELEMETRY } from '../config/site';
import { useFlash } from '../components/effects/flash-context';
import { EASE_OUT_EXPO } from '../utils/motion';
import { useCountUp } from '../hooks/useCountUp';

interface TelemetryItem {
  label: string;
  value: number;
  decimals: number;
  unit?: string;
}

function TelemetryCell({ item }: { item: TelemetryItem }) {
  const { ref, value } = useCountUp(item.value);
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className="flex shrink-0 items-baseline gap-2">
      <span className="text-lane-mute">{item.label}</span>
      <span className="tabular-nums text-lane">
        {value.toFixed(item.decimals)}
        {item.unit ? <span className="text-volt">{item.unit}</span> : null}
      </span>
    </span>
  );
}

export function Hero() {
  const { triggerFlash } = useFlash();

  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden">
      <HeroCanvas />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,#060708_34%,rgba(6,7,8,0)_62%)] lg:bg-[linear-gradient(95deg,#060708_30%,rgba(6,7,8,0)_58%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-6 pb-32 pt-32 lg:px-10">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } } }}
          className="max-w-4xl text-[clamp(3.2rem,9vw,6rem)] font-black uppercase leading-[0.94] tracking-tightest text-lane"
          style={{ fontStretch: '125%' }}
        >
          {[
            <>Built for</>,
            <span key="dark" className="text-volt">the dark</span>,
            <>hours.</>,
          ].map((line, index) => (
            <motion.span
              key={index}
              className="block"
              variants={{
                hidden: { opacity: 0, y: 64, filter: 'blur(12px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 1, ease: EASE_OUT_EXPO },
                },
              }}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE_OUT_EXPO }}
          className="mt-8 max-w-[62ch] text-base leading-relaxed text-lane-dim sm:text-lg"
        >
          UMBRA engineers running shoes around one premise: most training happens when nobody is
          watching. Reflective by design, gripped for wet asphalt, tuned for cold city streets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE_OUT_EXPO }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button arrow onClick={() => document.getElementById('mechanism')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore GhostPace 1
          </Button>
          <Button variant="ghost" onClick={triggerFlash}>
            <span className="flex items-center gap-2">
              <Icon name="bolt" size={14} />
              Run the flash test
            </span>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/[0.06] bg-black/40 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-10">
          <div className="hidden gap-8 overflow-hidden font-mono text-[11px] uppercase tracking-[0.2em] sm:flex">
            {TELEMETRY.map((item) => (
              <TelemetryCell key={item.label} item={item} />
            ))}
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-lane-mute sm:hidden">
            Live track conditions
          </p>
          <a
            href="#mechanism"
            className="group flex shrink-0 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-lane-dim transition-colors hover:text-volt"
          >
            Scroll
            <span aria-hidden="true" className="h-6 w-px animate-pulse-line bg-current" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
