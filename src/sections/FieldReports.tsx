import { motion } from 'framer-motion';
import { FIELD_REPORTS } from '../data/reports';
import { streakReveal } from '../utils/motion';

export function FieldReports() {
  return (
    <section id="reports" className="relative border-t border-white/[0.06] py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.h2
          {...streakReveal({ distance: 56 })}
          className="max-w-[22ch] text-4xl font-black uppercase leading-[1.02] tracking-tightest text-lane sm:text-5xl"
          style={{ fontStretch: '118%' }}
        >
          Logged by people already out there.
        </motion.h2>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
          {FIELD_REPORTS.map((report, index) => (
            <motion.figure
              key={report.name}
              {...streakReveal({ delay: index * 0.08 })}
              className="flex flex-col justify-between border-t border-white/[0.09] pt-8"
            >
              <blockquote className="text-[15px] leading-relaxed text-lane-dim">
                “{report.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-volt">
                  {report.metric}
                </p>
                <p className="mt-2 text-sm font-semibold text-lane">{report.name}</p>
                <p className="text-sm text-lane-mute">{report.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.p
          {...streakReveal({ delay: 0.15 })}
          className="mt-12 max-w-[70ch] font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-lane-mute"
        >
          Composite reports from the beta cohort, shown as illustrative demo content — replace with
          verified testimonials before launch.
        </motion.p>
      </div>
    </section>
  );
}
