import { motion } from 'framer-motion';
import { WaitlistForm } from '../components/ui/WaitlistForm';
import { streakReveal } from '../utils/motion';

export function Waitlist() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-32 lg:py-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(191,221,232,0.07),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          {...streakReveal({ distance: 56 })}
          className="text-[clamp(2.4rem,6vw,4rem)] font-black uppercase leading-[1.02] tracking-tightest text-lane"
          style={{ fontStretch: '122%' }}
        >
          First light is at 04:58.
        </motion.h2>
        <motion.p
          {...streakReveal({ delay: 0.08 })}
          className="mx-auto mt-6 max-w-[52ch] leading-relaxed text-lane-dim"
        >
          The GhostPace 1 drops in limited night-run batches. Join the waitlist for early access,
          meet-up invitations, and beta wear-test openings.
        </motion.p>
        <motion.div {...streakReveal({ delay: 0.16 })} className="mt-12 text-left sm:px-8">
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  );
}
