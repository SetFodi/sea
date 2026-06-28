"use client";

import { PARTNERS } from "@/lib/data";

export default function Partners({ center = false }: { center?: boolean }) {
  return (
    <div className={`trust-logos${center ? " center" : ""}`}>
      {PARTNERS.map((p) => (
        <span className="wordmark" key={p.main}>
          {p.main}
          {p.sub ? <small>{p.sub}</small> : null}
        </span>
      ))}
    </div>
  );
}
