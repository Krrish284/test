export interface NavLink {
  id: string;
  label: string;
  marker: string;
}

export const BRAND = {
  name: 'UMBRA',
  division: 'Night Performance Division',
  flagship: 'GhostPace 1',
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'mechanism', label: 'The Mechanism', marker: 'KM 01' },
  { id: 'collection', label: 'Collection', marker: 'KM 02' },
  { id: 'colorways', label: 'Colorways', marker: 'KM 03' },
  { id: 'craft', label: 'Craft', marker: 'KM 04' },
  { id: 'reports', label: 'Field Reports', marker: 'KM 05' },
] as const;

export const TELEMETRY = [
  { label: 'LUX', value: 0.4, decimals: 1 },
  { label: 'TEMP', value: 7, decimals: 0, unit: '°C' },
  { label: 'GRIP INDEX', value: 98, decimals: 0, unit: '%' },
  { label: 'REFLECTIVITY', value: 480, decimals: 0, unit: ' cd/lx·m²' },
  { label: 'STACK', value: 38, decimals: 0, unit: 'MM' },
  { label: 'WEIGHT', value: 241, decimals: 0, unit: 'G' },
] as const;

export const MARQUEE_WORDS = [
  'REFLECTIVE BY DESIGN',
  'WET GRIP OUTSOLE',
  'NITROCELL FOAM',
  '480 CD/LX·M² RETURN',
  'TESTED BELOW 5°C',
  'NIGHT SHIFT CERTIFIED',
] as const;
