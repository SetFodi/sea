"use client";

import { PARTNERS } from "@/lib/data";

export default function Partners({ center = false }: { center?: boolean }) {
  const groups = [PARTNERS, PARTNERS];

  return (
    <div className={`trust-logos${center ? " center" : ""}`} aria-label="Partner logos">
      <div className="partner-marquee">
        <div className="partner-marquee__track">
          {groups.map((group, groupIndex) => (
            <div
              className="partner-marquee__group"
              key={groupIndex}
              aria-hidden={groupIndex === 1 ? "true" : undefined}
            >
              {group.map((p) => (
                <a
                  className="partner-logo"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  key={`${groupIndex}-${p.main}`}
                  aria-label={`${p.main}${p.sub ? `, ${p.sub}` : ""}`}
                  tabIndex={groupIndex === 1 ? -1 : undefined}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt="" loading="eager" decoding="async" />
                  <span className="partner-logo__caption">
                    <b>{p.main}</b>
                    {p.sub ? <small>{p.sub}</small> : null}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
