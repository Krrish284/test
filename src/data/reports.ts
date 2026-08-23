export interface FieldReport {
  quote: string;
  name: string;
  role: string;
  metric: string;
}

export const FIELD_REPORTS: readonly FieldReport[] = [
  {
    quote:
      'I run the canal towpath at 05:00 through winter. The GhostPace is the first shoe where I stopped worrying about the unlit stretch past the locks — under a passing headlight the whole heel lights up like a lane marker.',
    name: 'Mara V.',
    role: 'Ultra runner, 3,400 km logged after dark',
    metric: '412 NIGHT KM IN BETA',
  },
  {
    quote:
      'Courier shifts end at 03:00 and my route is all wet tram rails and painted crossings. The outsole bites where every other shoe I have ridden has slid. That is not marketing, that is me still upright.',
    name: 'Deniz K.',
    role: 'Bike-and-run courier, night shift',
    metric: '0 SLIDE INCIDENTS',
  },
  {
    quote:
      'I finish hospital night shifts and decompress with an easy six. The reflectivity is genuinely visible two junctions early, and the foam stays forgiving when my legs are already gone.',
    name: 'Priya S.',
    role: 'Night-shift nurse, marathon preparer',
    metric: '06:00 REGULAR',
  },
] as const;
