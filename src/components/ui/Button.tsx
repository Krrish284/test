import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  arrow?: boolean;
  children: ReactNode;
}

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-volt text-asphalt hover:bg-volt-soft shadow-ambient-sm hover:shadow-flare',
  ghost:
    'bg-white/[0.04] text-lane border border-white/10 hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-md',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', arrow = false, children, className, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={clsx(
        'group inline-flex min-h-touch items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt focus-visible:ring-offset-2 focus-visible:ring-offset-asphalt disabled:pointer-events-none disabled:opacity-40',
        VARIANTS[variant],
        className
      )}
      {...rest}
    >
      <span className="whitespace-nowrap">{children}</span>
      {arrow ? (
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 12L12 4M12 4H5.5M12 4V10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
    </button>
  );
});
