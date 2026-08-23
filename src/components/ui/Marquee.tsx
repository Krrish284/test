import clsx from 'clsx';

interface MarqueeProps {
  words: readonly string[];
  className?: string;
}

export function Marquee({ words, className }: MarqueeProps) {
  const track = [...words, ...words];

  return (
    <div
      className={clsx(
        'relative flex overflow-hidden border-y border-white/[0.06] bg-asphalt-raised py-4',
        className
      )}
    >
      <div className="flex min-w-max animate-ticker items-center gap-10 pr-10 motion-reduce:animate-none">
        {track.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.3em] text-lane-dim">
              {word}
            </span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-volt/70" />
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-asphalt to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-asphalt to-transparent"
      />
    </div>
  );
}
