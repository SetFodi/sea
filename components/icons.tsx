import type { ReactNode } from "react";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.6 } as const;

export const ICONS: Record<string, ReactNode> = {
  droplet: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11Z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </svg>
  ),
  beaker: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M9 3h6M10 3v6L5 18a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" />
      <path d="M7.5 14h9" />
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 24 24" {...S}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" {...S}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9 19 19M19 5l-2.1 2.1M7.1 16.9 5 19" />
    </svg>
  ),
  filter: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  ),
  pump: (
    <svg viewBox="0 0 24 24" {...S}>
      <circle cx="9" cy="14" r="5" />
      <path d="M9 9V4h7v5M14 4h4M12.5 11.5 17 7" />
    </svg>
  ),
  gauge: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18l4-5" />
      <circle cx="12" cy="18" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  membrane: (
    <svg viewBox="0 0 24 24" {...S}>
      <rect x="3" y="6" width="18" height="12" rx="6" />
      <path d="M9 6v12M15 6v12" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M9 3h6M10 3v5l-4.5 9A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 8V3" />
      <circle cx="12" cy="15" r="1" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  microscope: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M6 18h12M9 18a5 5 0 0 0 8-4M9.5 12.5 7 15M11 4l3 3-3.5 3.5L8 8z" />
    </svg>
  ),
  engine: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M5 9h3l2-2h4v3h3l2 2v3h-2v2h-4v-2H9l-2 2H5v-4H3v-3h2V9Z" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 24 24" {...S}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  ),
  valve: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M4 12h4l4-4 4 4h4M12 8V4M9 4h6" />
      <circle cx="12" cy="14" r="3" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  /* UI icons */
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M5 4h3l2 5-2 1.5a12 12 0 0 0 5.5 5.5L15 18l5 2v3a17 17 0 0 1-15-15V4Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M5.4 19.1 6.3 16A7.8 7.8 0 1 1 9 18.5l-3.6.6Z" />
      <path d="M9.2 8.5c.2-.4.4-.5.8-.4l.8.2c.2.1.4.3.4.6l-.1 1c0 .2-.1.4-.3.5l-.5.4a5.7 5.7 0 0 0 2.9 2.9l.4-.5c.1-.2.3-.3.5-.3h1c.3 0 .5.2.6.4l.2.8c.1.4 0 .6-.4.8-.7.4-1.5.5-2.3.3-2.2-.5-4.5-2.8-5-5-.2-.8-.1-1.6.3-2.3Z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  ),
  /* about value icons */
  tender: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M4 7h16M4 12h16M4 17h10" />
      <path d="M18 15l3 2-3 2" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5M3 18l9 5 9-5" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" {...S}>
      <path d="M5 12a7 7 0 0 1 14 0" />
      <rect x="3" y="12" width="4" height="6" rx="2" />
      <rect x="17" y="12" width="4" height="6" rx="2" />
      <path d="M19 18a4 4 0 0 1-4 3h-2" />
    </svg>
  ),
};

export const SOCIAL: Record<string, ReactNode> = {
  fb: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 9h3V6h-3c-2 0-3 1.4-3 3.4V11H9v3h2v7h3v-7h2.4l.6-3H14V9.6c0-.4.2-.6.7-.6Z" />
    </svg>
  ),
  ig: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  li: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.5 8A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3ZM5 10h3v9H5v-9Zm5 0h2.8v1.3c.5-.8 1.5-1.5 3-1.5 2.3 0 3.2 1.4 3.2 3.9V19h-3v-4.5c0-1.2-.4-2-1.5-2s-1.7.8-1.7 2V19H10v-9Z" />
    </svg>
  ),
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const node = ICONS[name] ?? ICONS.arrow;
  return <span className={className}>{node}</span>;
}
