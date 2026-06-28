export function Logo() {
  return (
    <svg className="logo-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00B4D8" />
          <stop offset="1" stopColor="#15639B" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="#0B2A3A" />
      <path d="M24 11s9 9.5 9 16.5a9 9 0 1 1-18 0C15 20.5 24 11 24 11Z" fill="url(#lg)" />
      <path d="M19 27a5 5 0 0 0 5 5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity=".85" />
      <rect x="22.4" y="22" width="3.2" height="9" rx="1.6" fill="#FF6A2C" />
    </svg>
  );
}

export function Rotameter() {
  return (
    <svg className="rotameter" viewBox="0 0 84 150" fill="none" aria-hidden="true">
      <rect x="26" y="6" width="32" height="138" rx="16" fill="#0c2a3a" stroke="rgba(255,255,255,.18)" />
      <rect x="31" y="11" width="22" height="128" rx="11" fill="rgba(0,180,216,.12)" />
      <g stroke="rgba(255,255,255,.35)" strokeWidth="1.4">
        <path d="M58 30h7M58 50h7M58 70h7M58 90h7M58 110h7" />
      </g>
      <circle className="bubble" cx="42" cy="120" r="2.4" fill="#6FD9EE" />
      <circle className="bubble b2" cx="38" cy="120" r="1.8" fill="#6FD9EE" />
      <circle className="bubble b3" cx="46" cy="120" r="2" fill="#6FD9EE" />
      <g className="float">
        <rect x="33" y="64" width="18" height="16" rx="4" fill="#FF6A2C" />
        <rect x="33" y="64" width="18" height="6" rx="3" fill="#FF8A52" />
      </g>
    </svg>
  );
}
