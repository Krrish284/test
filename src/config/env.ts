export const env = {
  siteUrl: import.meta.env.VITE_SITE_URL ?? 'http://localhost:5173',
  imageCdnBase: import.meta.env.VITE_IMAGE_CDN_BASE ?? 'https://images.unsplash.com',
} as const;

export function imageUrl(photoId: string, width = 1200): string {
  const params = new URLSearchParams({
    q: '80',
    w: String(width),
    auto: 'format',
    fit: 'crop',
  });
  return `${env.imageCdnBase}/photo-${photoId}?${params.toString()}`;
}
