import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProductImage } from '../components/ui/ProductImage';
import { CRAFT_PHOTO_ID, SPEC_TABLE } from '../data/products';
import { streakReveal } from '../utils/motion';

export function Craft() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={sectionRef} id="craft" className="relative border-t border-white/[0.06] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...streakReveal()} className="relative overflow-hidden rounded-4xl ring-1 ring-white/[0.07]">
          <motion.div style={{ y: parallaxY }} className="relative h-[52vh] min-h-[340px] scale-110">
            <ProductImage
              photoId={CRAFT_PHOTO_ID}
              alt="A runner's shoe resting on a ledge in dim city light"
              width={2000}
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#060708_4%,transparent_55%)]" />
          </motion.div>
          <p
            className="absolute bottom-8 left-8 right-8 max-w-[24ch] text-2xl font-bold uppercase leading-tight tracking-tight text-lane sm:text-3xl"
            style={{ fontStretch: '115%' }}
          >
            Prototyped on 04:00 test runs. Retired at dawn.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <motion.div {...streakReveal({ delay: 0.06 })}>
            <h2 className="max-w-[18ch] text-4xl font-black uppercase leading-[1.02] tracking-tightest text-lane sm:text-5xl" style={{ fontStretch: '118%' }}>
              The lab is the street, between dusk and dawn.
            </h2>
            <div className="mt-8 space-y-6 max-w-[62ch] leading-relaxed text-lane-dim">
              <p>
                Every UMBRA compound is validated the same way it will be used: on wet asphalt,
                below five degrees, under sodium streetlight. Our wear-testers log night shifts —
                couriers, nurses, ultra runners — and their telemetry sets the tolerance bands we
                build to.
              </p>
              <p>
                Reflective yarn is woven into the structure of the upper instead of laminated onto
                it, so reflectivity survives abrasion, rain, and three hundred kilometres of
                toe-drag. If a panel stops returning light, we consider that a structural failure.
              </p>
            </div>
          </motion.div>

          <motion.dl {...streakReveal({ delay: 0.12 })} className="self-start rounded-4xl bg-white/[0.03] p-1.5 ring-1 ring-white/[0.07]">
            <div className="rounded-[calc(2rem-0.375rem)] bg-asphalt-raised p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
              <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-lane-mute">
                GhostPace 1 — certified sheet (demo data)
              </dt>
              <dd className="mt-6">
                <table className="w-full text-sm">
                  <caption className="sr-only">GhostPace 1 specifications</caption>
                  <tbody className="divide-y divide-white/[0.07]">
                    {SPEC_TABLE.map((row) => (
                      <tr key={row.label}>
                        <th scope="row" className="py-3 pr-4 text-left font-medium text-lane-mute">
                          {row.label}
                        </th>
                        <td className="py-3 text-right font-mono tabular-nums text-volt">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </dd>
            </div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
