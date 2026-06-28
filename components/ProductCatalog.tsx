"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/LanguageProvider";
import { CATEGORIES, CAT_PROD_ICON, type Loc, type ProductItem } from "@/lib/data";
import { Icon } from "./icons";

export default function ProductCatalog() {
  const { t, pick } = useLang();
  const [active, setActive] = useState<string>(CATEGORIES[0].id);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (CATEGORIES.some((c) => c.id === hash)) setActive(hash);
  }, []);

  const cat = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  const select = (id: string) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
    const top = (rootRef.current?.offsetTop ?? 0) - 90;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const prodIcon = CAT_PROD_ICON[cat.id] ?? "membrane";

  return (
    <div className="catalog" data-catalog ref={rootRef}>
      <aside className="cat-sidebar">
        <div className="cat-nav">
          <h4>{t("pp.sidebar")}</h4>
          {CATEGORIES.map((c) => (
            <button key={c.id} className={c.id === active ? "is-active" : ""} onClick={() => select(c.id)}>
              <span className="ci">
                <Icon name={c.icon} />
              </span>
              <span className="cn">
                {pick(c.name)}
                <small>{c.code}</small>
              </span>
            </button>
          ))}
        </div>
      </aside>

      <div className="catalog-main">
        <div className="cat-banner">
          {cat.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="banner-img" src={cat.img} alt="" loading="lazy" />
          ) : null}
          <span className="eyebrow">
            {t("cat.eyebrow")} · {cat.code}
          </span>
          <h2>{pick(cat.name)}</h2>
          <p>{pick(cat.tagline)}</p>
          {cat.source ? (
            <a
              className={`src-tag${cat.source.official ? " is-official" : ""}`}
              href={cat.source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cat.source.official ? <Icon name="shield" /> : null}
              {t(cat.source.official ? "pp.official" : "pp.maker")}: <b>{cat.source.name}</b>
            </a>
          ) : null}
        </div>

        {cat.subcats.map((sc, i) => (
          <section className="subcat" id={`${cat.id}-${i}`} key={i}>
            <div className="subcat-head">
              <h3>{pick(sc.name)}</h3>
              <span className="count">
                {sc.items.length} {t("pp.items")}
              </span>
            </div>
            {sc.desc ? <p className="subcat-desc">{pick(sc.desc)}</p> : null}

            {cat.type === "list" ? (
              <div className="chip-list">
                {(sc.items as Loc[]).map((it, j) => (
                  <Link className="chip" href="/contact" key={j}>
                    <span className="dot" />
                    {pick(it)}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="prod-grid">
                {(sc.items as ProductItem[]).map((it, j) => (
                  <article className="prod-card" key={j}>
                    <div className="prod-thumb">
                      {it.badge === "new" ? <span className="prod-tag new">NEW</span> : null}
                      {it.img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={it.img} alt={pick(it.name)} loading="lazy" />
                      ) : (
                        <span className="ph-icon">
                          <Icon name={prodIcon} />
                        </span>
                      )}
                    </div>
                    <div className="prod-body">
                      <h4>{pick(it.name)}</h4>
                      {it.code ? <span className="pcode">{it.code}</span> : null}
                      <div className="prod-foot">
                        <Link className="inquire" href="/contact">
                          {t("pp.inquire")}
                          <Icon name="arrow" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        ))}

        {cat.note ? <p className="subcat-desc" style={{ marginTop: 8 }}>{pick(cat.note)}</p> : null}

        <p className="catalog-note">
          {t("pp.note")} <Link href="/contact">{t("pp.notelink")}</Link>
        </p>
      </div>
    </div>
  );
}
