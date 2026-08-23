import { motion } from 'framer-motion';
import { ProductImage } from '../components/ui/ProductImage';
import { Icon } from '../components/ui/Icon';
import { FLAGSHIP } from '../data/products';
import { streakReveal } from '../utils/motion';
import { useCountUp } from '../hooks/useCountUp';

interface Feature {
  icon: 'shield' | 'droplet' | 'spring';
  title: string;
  copy: string;
  metric: number;
  decimals: number;
  suffix: string;
}

const FEATURES: readonly Feature[] = [
  {
    icon: 'shield',
    title: 'Reflective by design',
    copy: 'Retroreflective yarn is woven through the heel cage and lateral walls — not sprayed on. Under headlights the shoe returns 480 candela per lux, visible two junctions early.',
    metric: 480,
    decimals: 0,
    suffix: ' cd/lx·m² returned',
  },
  {
    icon: 'droplet',
    title: 'Grip for wet asphalt',
    copy: 'The NightGrip compound stays soft below five degrees and its siped pattern channels film water out from under the forefoot. Painted crossings and tram rails stop being a gamble.',
    metric: 98,
    decimals: 0,
    suffix: '% wet-grip index',
  },
  {
    icon: 'spring',
    title: 'Foam that gives it back',
    copy: 'NitroCell midsole returns 84% of impact energy at cold-weather durometer. Firm enough to hold pace past midnight, forgiving enough for the run home.',
    metric: 84,
    decimals: 0,
    suffix: '% energy return',
  },
];

function MetricReadout({ feature }: { feature: Feature }) {
  const { ref, value } = useCountUp(feature.metric);
  return (
    <p
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className="font-mono text-sm tabular-nums text-volt"
    >
      <span className="text-xl font-semibold">
        {value.toFixed(feature.decimals)}
      </span>
      {feature.suffix}
    </p>
  );
}



export function Mechanism() {
  return (
    <section id="mechanism" className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <motion.div {...streakReveal()} className="lg:sticky lg:top-28">
          <div className="relative rounded-4xl bg-white/[0.03] p-1.5 ring-1 ring-white/[0.07] shadow-ambient">
            <div className="overflow-hidden rounded-[calc(2rem-0.375rem)]">
              <ProductImage
                photoId={FLAGSHIP.photoId}
                alt={FLAGSHIP.alt}
                width={1200}
                className="aspect-[4/5]"
                imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.05]"
              />
            </div>
            <svg
              aria-hidden="true"
              viewBox="0 0 400 500"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              {[80, 240, 380].map((y, index) => (
                <g key={y} stroke="#D6FF3F" strokeWidth="1" opacity="0.65" fill="none">
                  <line x1="330" y1={y} x2="396" y2={y - 14} />
                  <circle cx="330" cy={y} r="3" fill="#D6FF3F" stroke="none" />
                  <rect x={index * 46 + 40} y="0" width="1" height="0" />
                </g>
              ))}
            </svg>
            <span className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/55 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-lane backdrop-blur-md">
              GhostPace 1 — Ember
            </span>
          </div>
        </motion.div>

        <div>
          <motion.h2
            {...streakReveal({ distance: 56 })}
            className="max-w-[16ch] text-4xl font-black uppercase leading-[1.02] tracking-tightest text-lane sm:text-5xl"
            style={{ fontStretch: '118%' }}
          >
            Three systems stand between you and the dark.
          </motion.h2>

          <div className="mt-16 space-y-16">
            {FEATURES.map((feature, index) => (
              <motion.article
                key={feature.title}
                {...streakReveal({ delay: index * 0.08 })}
                className="group relative max-w-[60ch] border-l border-white/[0.08] pl-8 transition-colors duration-700 hover:border-volt/60"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-1.5 h-3 w-3 rotate-45 border border-volt/70 bg-asphalt transition-colors duration-500 group-hover:bg-volt"
                />
                <h3 className="flex items-center gap-3 text-xl font-bold uppercase tracking-tight text-lane">
                  <Icon name={feature.icon} size={18} className="text-volt" />
                  {feature.title}
                </h3>
                <p className="mt-4 leading-relaxed text-lane-dim">{feature.copy}</p>
                <div className="mt-5">
                  <MetricReadout feature={feature} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
