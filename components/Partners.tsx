"use client";

import { PARTNERS } from "@/lib/data";

const MARQUEE_COPIES = 4;
const MARQUEE_ITEMS = Array.from({ length: MARQUEE_COPIES }, (_, copyIndex) =>
  PARTNERS.map((partner) => ({ partner, copyIndex })),
).flat();

export default function Partners({ center = false }: { center?: boolean }) {
  const groups = [MARQUEE_ITEMS, MARQUEE_ITEMS];

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
              {group.map(({ partner: p, copyIndex }) => {
                const isDuplicate = groupIndex === 1 || copyIndex > 0;
                const content = (
                  <>
                    {p.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.logo} alt="" loading="eager" decoding="async" />
                    ) : (
                      <span className="partner-logo__name">{p.main}</span>
                    )}
                    <span className="partner-logo__caption">
                      <b>{p.main}</b>
                      {p.sub ? <small>{p.sub}</small> : null}
                    </span>
                  </>
                );

                return p.url ? (
                  <a
                    className="partner-logo"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    key={`${groupIndex}-${copyIndex}-${p.main}`}
                    aria-label={`${p.main}${p.sub ? `, ${p.sub}` : ""}`}
                    aria-hidden={isDuplicate ? "true" : undefined}
                    tabIndex={isDuplicate ? -1 : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <span
                    className="partner-logo"
                    key={`${groupIndex}-${copyIndex}-${p.main}`}
                    aria-label={`${p.main}${p.sub ? `, ${p.sub}` : ""}`}
                    aria-hidden={isDuplicate ? "true" : undefined}
                  >
                    {content}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
