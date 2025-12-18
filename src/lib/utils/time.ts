export const Time = {
  seconds: (n: number) => n,
  minutes: (n: number) => n * 60,
  hours: (n: number) => n * 60 * 60,
  days: (n: number) => n * 60 * 60 * 24,
  weeks: (n: number) => n * 60 * 60 * 24 * 7,
  months: (n: number) => n * 60 * 60 * 24 * 30,
  years: (n: number) => n * 60 * 60 * 24 * 365,
} as const;
