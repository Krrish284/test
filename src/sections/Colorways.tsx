import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ProductImage } from '../components/ui/ProductImage';
import { COLORWAYS } from '../data/products';
import type { Colorway } from '../data/products';
import { streakReveal, EASE_OUT_EXPO } from '../utils/motion';

function ColorwayStage({ colorway }: { colorway: Colorway }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-4xl bg-asphalt-panel ring-1 ring-white/[0.07]">
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-colors duration-700"
        style={{ background: `radial-gradient(90% 80% at 50% 30%, ${colorway.accent}26, transparent 65%)` }}
      />
      <AnimatePresence mode="popLayout">
        <motion.div
          key={colorway.id}
          initial={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(6px)' }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="absolute inset-0"
        >
          <ProductImage
            photoId={colorway.photoId}
            alt={`GhostPace 1 in the ${colorway.name} colorway`}
            width={1400}
            className="h-full w-full bg-transparent"
            imgClassName="object-contain p-8 sm:p-14"
          />
        </motion.div>
      </AnimatePresence>
      <span className="absolute left-5 top-5 h-2 w-2 animate-pulse-line rounded-full" style={{ backgroundColor: colorway.accent }} />
    </div>
  );
}

export function Colorways() {
  const [active, setActive] = useState<Colorway>(COLORWAYS[0]);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <section id="colorways" className="relative border-t border-white/[0.06] py-32 lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'repeating-linear-gradient(45deg, rgba(214,255,63,0.4) 0 6px, transparent 6px 12px)',
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div style={{ ['--cw' as string]: active.accent }}>
          <ColorwayStage colorway={active} />
        </div>

        <div>
          <motion.h2
            {...streakReveal({ distance: 56 })}
            className="max-w-[16ch] text-4xl font-black uppercase leading-[1.02] tracking-tightest text-lane sm:text-5xl"
            style={{ fontStretch: '118%' }}
          >
            Pick your wavelength.
          </motion.h2>

          <motion.fieldset
            {...streakReveal({ delay: 0.08 })}
            className="mt-12"
          >
            <legend className="sr-only">Choose a colorway</legend>
            <div className="flex flex-wrap gap-4">
              {COLORWAYS.map((colorway) => {
                const selected = active.id === colorway.id;
                return (
                  <button
                    key={colorway.id}
                    type="button"
                    onClick={() => setActive(colorway)}
                    aria-pressed={selected}
                    className={
                      'group flex min-h-touch items-center gap-3 rounded-full border px-5 py-2 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt focus-visible:ring-offset-2 focus-visible:ring-offset-asphalt ' +
                      (selected
                        ? 'border-transparent text-asphalt'
                        : 'border-white/12 bg-white/[0.03] text-lane-dim hover:border-white/30 hover:text-lane')
                    }
                    style={selected ? { backgroundColor: colorway.accent } : undefined}
                  >
                    <span
                      aria-hidden="true"
                      className={'h-3.5 w-3.5 rounded-full border border-white/25'}
                      style={{ backgroundColor: colorway.accent }}
                    />
                    {colorway.name}
                  </button>
                );
              })}
            </div>
          </motion.fieldset>

          <AnimatePresence mode="wait">
            <motion.p
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="mt-8 max-w-[52ch] leading-relaxed text-lane-dim"
            >
              <span className="font-semibold text-lane">{active.name}.</span> {active.note}
            </motion.p>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button arrow onClick={handleAdd}>
              {added ? 'Added to bag ✓' : 'Add GhostPace to bag'}
            </Button>
            <span aria-live="polite" className="font-mono text-[11px] uppercase tracking-[0.2em] text-lane-mute">
              Demo checkout — no order is placed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
