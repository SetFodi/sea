"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageProvider";
import { CATEGORIES } from "@/lib/data";
import { Icon } from "./icons";
import Reveal from "./Reveal";

export default function HomeCategories() {
  const { t, pick } = useLang();

  return (
    <Reveal className="cat-grid" delay={1}>
      {CATEGORIES.map((c) => (
        <Link className="cat-card" href={`/products#${c.id}`} key={c.id}>
          {c.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="cat-img" src={c.img} alt="" loading="lazy" />
          ) : (
            <span className="cat-watermark">
              <Icon name={c.icon} />
            </span>
          )}
          <span className="go">
            <Icon name="arrow" />
          </span>
          <span className="cat-index">{c.code}</span>
          <h3>{pick(c.name)}</h3>
          <span className="cat-meta">
            {c.subcats.length} {t("u.subcats")}
          </span>
        </Link>
      ))}
    </Reveal>
  );
}
