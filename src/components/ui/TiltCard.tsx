import type { ReactNode } from 'react';
import clsx from 'clsx';
import { useTilt } from '../../hooks/useTilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const tilt = useTilt(5);

  return (
    <div ref={tilt.ref} style={tilt.style} {...tilt.handlers} className={clsx('h-full', className)}>
      <div
        className={clsx(
          'group/card h-full rounded-4xl bg-white/[0.03] p-1.5 ring-1 ring-white/[0.07]',
          'transition-shadow duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-ambient'
        )}
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(2rem-0.375rem)] bg-asphalt-raised shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] ring-1 ring-white/[0.04]">
          {children}
        </div>
      </div>
    </div>
  );
}
