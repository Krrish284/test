/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_IMAGE_CDN_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
