export function Logo() {
  return <img className="logo-mark" src="/brand/sea-logo.png" alt="" aria-hidden="true" />;
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
