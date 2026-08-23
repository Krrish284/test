export interface Product {
  id: string;
  name: string;
  spec: string;
  price: number;
  photoId: string;
  alt: string;
  span: 'wide' | 'tall' | 'standard';
}

export const FLAGSHIP = {
  photoId: '1542291026-7eec264c27ff',
  alt: 'UMBRA GhostPace 1 flagship runner photographed mid-air against a dark background',
} as const;

export const HERO_PHOTO_ID = '1549298916-b41d501d3772';

export const COLLECTION: readonly Product[] = [
  {
    id: 'ghostpace-1',
    name: 'GhostPace 1',
    spec: 'ROAD · RACE · 241G',
    price: 240,
    photoId: '1542291026-7eec264c27ff',
    alt: 'GhostPace 1 road racing shoe in ember red floating over a dark studio floor',
    span: 'wide',
  },
  {
    id: 'nightforge-trail',
    name: 'Nightforge Trail',
    spec: 'TRAIL · 4MM LUGS',
    price: 189,
    photoId: '1560769629-975ec94e6a86',
    alt: 'Nightforge Trail shoe with aggressive grip standing on a plain background',
    span: 'tall',
  },
  {
    id: 'pulseknit-racer',
    name: 'PulseKnit Racer',
    spec: 'ROAD · TEMPO',
    price: 165,
    photoId: '1552346154-21d32810aba3',
    alt: 'PulseKnit Racer worn by a runner crossing a wet city street at night',
    span: 'standard',
  },
  {
    id: 'eclipse-low',
    name: 'Eclipse Low',
    spec: 'DAILY · RECOVERY',
    price: 140,
    photoId: '1514989940723-e8e51635b782',
    alt: 'Eclipse Low daily trainer in off-white leather on a dark backdrop',
    span: 'standard',
  },
  {
    id: 'signal-78',
    name: 'Signal 78',
    spec: 'RETRO · REFLECTIVE',
    price: 155,
    photoId: '1539185441755-769473a23570',
    alt: 'Signal 78 retro runner pair with reflective panels on a dark surface',
    span: 'standard',
  },
  {
    id: 'driftwinter-gt',
    name: 'DriftWinter GT',
    spec: 'WINTER · GORE-TEX',
    price: 210,
    photoId: '1465453869711-7e174808ace9',
    alt: 'DriftWinter GT all-weather trainers hanging from a wire in low light',
    span: 'wide',
  },
] as const;

export interface Colorway {
  id: string;
  name: string;
  accent: string;
  photoId: string;
  note: string;
}

export const COLORWAYS: readonly Colorway[] = [
  {
    id: 'ember',
    name: 'Ember / Asphalt',
    accent: '#FF5A36',
    photoId: '1542291026-7eec264c27ff',
    note: 'Flagship launch colorway. 480 cd/lx·m² heel return.',
  },
  {
    id: 'glacier',
    name: 'Glacier Ice',
    accent: '#7DD8FF',
    photoId: '1606107557195-0e29a4b5b4aa',
    note: 'Cold-weather build. Grip compound rated to −10°C.',
  },
  {
    id: 'bone',
    name: 'Bone Static',
    accent: '#E8E4D8',
    photoId: '1595341888016-a392ef81b7de',
    note: 'Full-reflective yarn upper. Night-shift edition.',
  },
] as const;

export const CRAFT_PHOTO_ID = '1525966222134-fcfa99b8ae77';

export const SPEC_TABLE: readonly { label: string; value: string }[] = [
  { label: 'WEIGHT', value: '241 g (US 9)' },
  { label: 'HEEL STACK', value: '38 mm' },
  { label: 'DROP', value: '8 mm' },
  { label: 'REFLECTIVITY', value: '480 cd/lx·m²' },
  { label: 'ENERGY RETURN', value: '84%' },
  { label: 'GRIP RATING', value: 'Wet ARC 98' },
  { label: 'RATED RANGE', value: '−10°C to 25°C' },
] as const;
