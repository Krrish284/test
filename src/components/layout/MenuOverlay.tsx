import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BRAND, NAV_LINKS } from '../../config/site';
import { Icon } from '../ui/Icon';

interface MenuOverlayProps {
  onClose: () => void;
}

export function MenuOverlay({ onClose }: MenuOverlayProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-50 flex flex-col justify-center bg-black/85 px-6 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        autoFocus
        className="absolute right-6 top-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lane transition-colors hover:border-volt hover:text-volt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt"
      >
        <Icon name="close" size={18} />
      </button>
      <nav aria-label="Full screen">
        <ul className="mx-auto w-full max-w-xl divide-y divide-white/[0.08]">
          {NAV_LINKS.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 24, transition: { duration: 0.22 } }}
              transition={{ duration: 0.65, delay: 0.06 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={`#${link.id}`}
                onClick={onClose}
                className="group flex min-h-touch items-baseline justify-between gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt"
              >
                <span className="text-3xl font-bold uppercase tracking-tightest text-lane transition-all duration-500 group-hover:translate-x-2 group-hover:text-volt sm:text-4xl">
                  {link.label}
                </span>
                <span className="font-mono text-[11px] tracking-[0.25em] text-lane-mute">
                  {link.marker}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
      <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-lane-mute">
        {BRAND.name} — {BRAND.division}
      </p>
    </motion.div>
  );
}
