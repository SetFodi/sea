"use client";

import { useLang } from "@/lib/LanguageProvider";
import { PROJECTS } from "@/lib/data";

export default function Gallery({ limit, preview = false }: { limit?: number; preview?: boolean }) {
  const { pick } = useLang();
  const list = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <div className={`gallery${preview ? " preview" : ""}`}>
      {list.map((p) => (
        <figure className="shot" key={p.img}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/projects/${p.img}`} alt={pick(p.title)} loading="lazy" />
          <figcaption className="shot-cap">
            <span className="k">{pick(p.tag)}</span>
            <span className="t">{pick(p.title)}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
