import { BRAND } from '../../config/site';

const FOOTER_LINKS: readonly { title: string; items: readonly string[] }[] = [
  { title: 'Shop', items: ['GhostPace 1', 'Trail', 'Tempo', 'Recovery'] },
  { title: 'Company', items: ['Night lab', 'Wear-test crew', 'Sustainability'] },
  { title: 'Support', items: ['Size guide', 'Shipping', 'Returns'] },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-asphalt-raised/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p
              className="text-2xl font-black uppercase tracking-signage text-lane"
              style={{ fontStretch: '125%' }}
            >
              {BRAND.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-lane-dim">
              Running shoes engineered for the hours nobody trains for. Reflective by design,
              grip-first by conviction.
            </p>
          </div>
          {FOOTER_LINKS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-lane-mute">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#top"
                      className="text-sm text-lane-dim transition-colors duration-300 hover:text-volt"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.06] pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-lane-mute md:flex-row md:items-center md:justify-between">
          <p>© 2026 {BRAND.name} — demo build. Pricing and reports are illustrative placeholders.</p>
          <p>
            Photography:{' '}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-lane-dim underline decoration-white/20 underline-offset-4 transition-colors hover:text-volt"
            >
              Unsplash contributors
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
