import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import clsx from 'clsx';
import { BRAND, NAV_LINKS } from '../../config/site';
import { useFlash } from '../effects/flash-context';
import { Icon } from '../ui/Icon';
import { MenuOverlay } from './MenuOverlay';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { triggerFlash } = useFlash();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 32);
  });

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
      >
        <div
          className={clsx(
            'flex w-full max-w-4xl items-center justify-between gap-2 rounded-full border py-1.5 pl-5 pr-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]',
            scrolled
              ? 'border-white/10 bg-black/55 shadow-ambient-sm backdrop-blur-xl'
              : 'border-white/[0.07] bg-black/25 backdrop-blur-md'
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt"
          >
            <span aria-hidden="true" className="flex items-end gap-[3px]">
              <span className="h-3 w-px bg-lane/70" />
              <span className="h-3 w-px bg-lane/70" />
              <span className="h-3 w-px bg-volt" />
            </span>
            <span
              className="text-sm font-bold uppercase tracking-signage text-lane"
              style={{ fontStretch: '125%' }}
            >
              {BRAND.name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="rounded-full px-4 py-2 text-sm font-medium text-lane-dim transition-colors duration-300 hover:text-lane focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={triggerFlash}
              className="group hidden min-h-touch items-center gap-2 rounded-full px-4 text-xs font-semibold uppercase tracking-[0.14em] text-volt transition-colors hover:text-volt-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt sm:flex"
            >
              <Icon name="bolt" size={14} />
              Flash test
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lane transition-colors hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt"
            >
              <Icon name="menu" size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? <MenuOverlay onClose={() => setMenuOpen(false)} /> : null}
      </AnimatePresence>
    </>
  );
}
