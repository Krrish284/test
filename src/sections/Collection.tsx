import { motion } from 'framer-motion';
import { TiltCard } from '../components/ui/TiltCard';
import { ProductImage } from '../components/ui/ProductImage';
import { Icon } from '../components/ui/Icon';
import { COLLECTION } from '../data/products';
import type { Product } from '../data/products';
import { formatPrice } from '../utils/format';
import { streakReveal, staggerChild, staggerParent } from '../utils/motion';
import clsx from 'clsx';

const SPAN_CLASSES = {
  wide: 'md:col-span-7',
  tall: 'md:col-span-5 md:row-span-2',
  standard: 'md:col-span-4',
} as const;

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={staggerChild}
      className={clsx('min-w-0', SPAN_CLASSES[product.span])}
    >
      <TiltCard>
      <ProductImage
        photoId={product.photoId}
        alt={product.alt}
        width={900}
        className={clsx(
          'w-full',
          product.span === 'tall' ? 'aspect-[4/5] flex-none' : 'aspect-[16/10]',
          product.span === 'wide' && 'aspect-[16/9]'
        )}
        imgClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/card:scale-[1.045]"
      />
      <div className="flex flex-1 items-end justify-between gap-4 p-6">
        <div>
          <h3
            className="text-lg font-bold uppercase tracking-tight text-lane"
            style={{ fontStretch: '112%' }}
          >
            {product.name}
          </h3>
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-lane-mute">
            {product.spec}
          </p>
          <div
            aria-hidden="true"
            className="mt-4 h-[3px] w-10 origin-left -rotate-45 bg-[repeating-linear-gradient(45deg,#D6FF3F_0_3px,transparent_3px_6px)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          />
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="font-mono text-sm tabular-nums text-lane-dim">
            {formatPrice(product.price)}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lane-dim transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/card:border-volt group-hover/card:bg-volt group-hover/card:text-asphalt">
            <Icon name="arrowUpRight" size={14} />
          </span>
        </div>
      </div>
      </TiltCard>
    </motion.div>
  );
}

export function Collection() {
  return (
    <section id="collection" className="relative border-t border-white/[0.06] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.h2
          {...streakReveal({ distance: 56 })}
          className="max-w-[20ch] text-4xl font-black uppercase leading-[1.02] tracking-tightest text-lane sm:text-5xl"
          style={{ fontStretch: '118%' }}
        >
          Six silhouettes rated for night work.
        </motion.h2>
        <motion.p {...streakReveal({ delay: 0.1 })} className="mt-6 max-w-[58ch] leading-relaxed text-lane-dim">
          Every model carries the same reflective architecture and wet-grip compound — tuned for
          road, trail, tempo, and recovery shifts.
        </motion.p>

        <motion.div
          {...staggerParent(0.09)}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12"
        >
          {COLLECTION.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-lane-mute">
          Demo pricing — replace with live catalog data before launch.
        </p>
      </div>
    </section>
  );
}
