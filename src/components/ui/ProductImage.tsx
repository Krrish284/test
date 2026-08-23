import { useState } from 'react';
import { imageUrl } from '../../config/env';
import clsx from 'clsx';

interface ProductImageProps {
  photoId: string;
  alt: string;
  width?: number;
  className?: string;
  imgClassName?: string;
  sizes?: string;
}

export function ProductImage({
  photoId,
  alt,
  width = 1200,
  className,
  imgClassName,
  sizes,
}: ProductImageProps) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'failed'>('loading');

  return (
    <div className={clsx('relative overflow-hidden bg-asphalt-panel', className)}>
      {status !== 'ready' ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,rgba(191,221,232,0.08),transparent_60%)]"
        />
      ) : null}
      {status === 'failed' ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-lane-mute">
            Image unavailable offline
          </span>
        </div>
      ) : (
        <img
          src={imageUrl(photoId, width)}
          alt={alt}
          loading="lazy"
          decoding="async"
          sizes={sizes}
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('failed')}
          className={clsx(
            'h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]',
            status === 'loading' ? 'opacity-0 scale-[1.04]' : 'opacity-100 scale-100',
            imgClassName
          )}
        />
      )}
    </div>
  );
}
