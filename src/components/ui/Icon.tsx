import type { ReactNode } from 'react';
import clsx from 'clsx';

const PATHS: Record<string, ReactNode> = {
  arrowUpRight: (
    <path d="M4 12L12 4M12 4H5.5M12 4V10.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  bolt: <path d="M8.5 1.5L3 9h4l-.5 5.5L12 7H8l.5-5.5Z" strokeLinejoin="round" />,
  close: <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />,
  menu: <path d="M2 4.5h12M2 11.5h12" strokeLinecap="round" />,
  check: <path d="M2.5 8.5L6 12l7.5-8" strokeLinecap="round" strokeLinejoin="round" />,
  droplet: (
    <path
      d="M8 1.8S3.4 6.6 3.4 9.8a4.6 4.6 0 109.2 0C12.6 6.6 8 1.8 8 1.8Z"
      strokeLinejoin="round"
    />
  ),
  shield: (
    <>
      <path d="M8 1.5L13 3.4v4.2c0 3.2-2.1 5.5-5 6.9-2.9-1.4-5-3.7-5-6.9V3.4L8 1.5Z" strokeLinejoin="round" />
      <path d="M5.5 8L7.4 9.9 10.8 6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  spring: (
    <>
      <path d="M4 2.5h8M4 13.5h8M6 2.5c0 3.7 4 3.7 4 5.5s-4 1.8-4 5.5" />
      <path d="M10 2.5c0 3.7-4 3.7-4 5.5s4 1.8 4 5.5" />
    </>
  ),
};

interface IconProps {
  name: keyof typeof PATHS;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
      className={clsx('shrink-0', className)}
    >
      {PATHS[name]}
    </svg>
  );
}
