"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageProvider";
import { Icon } from "./icons";
import Reveal from "./Reveal";
import HomeCategories from "./HomeCategories";
import Partners from "./Partners";
import Gallery from "./Gallery";
import CtaBand from "./CtaBand";

export default function HomeView() {
  const { t } = useLang();

  const stats = [
    { n: t("stat.1.n"), u: "", l: t("stat.1.l") },
    { n: t("stat.2.n"), u: "", l: t("stat.2.l") },
    { n: t("stat.3.n"), u: "+", l: t("stat.3.l") },
    { n: t("stat.4.n"), u: "", l: t("stat.4.l") },
  ];

  const services = [
    { code: t("svc.1.code"), icon: "droplet", tt: t("svc.1.t"), d: t("svc.1.d") },
    { code: t("svc.2.code"), icon: "membrane", tt: t("svc.2.t"), d: t("svc.2.d") },
    { code: t("svc.3.code"), icon: "pump", tt: t("svc.3.t"), d: t("svc.3.d") },
    { code: t("svc.4.code"), icon: "chip", tt: t("svc.4.t"), d: t("svc.4.d") },
  ];

  const steps = [
    { n: "01", tt: t("proc.1.t"), d: t("proc.1.d") },
    { n: "02", tt: t("proc.2.t"), d: t("proc.2.d") },
    { n: "03", tt: t("proc.3.t"), d: t("proc.3.d") },
    { n: "04", tt: t("proc.4.t"), d: t("proc.4.d") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero/water-treatment-engineer.jpg" alt="" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow on-dark">{t("hero.eyebrow")}</span>
            <h1 className="display">
              {t("hero.h1a")} <span className="accent">{t("hero.h1b")}</span>
              <br />
              {t("hero.h1c")}
            </h1>
            <p className="lead">{t("hero.lead")}</p>
            <div className="hero-actions">
              <Link className="btn btn--cyan" href="/products">
                {t("hero.cta1")}
              </Link>
              <Link className="btn btn--ghost on-dark" href="/contact">
                {t("hero.cta2")}
              </Link>
            </div>
            <div className="hero-stats">
              {stats.map((s, i) => (
                <div className="stat" key={i}>
                  <span className="stat-num">
                    {s.n}
                    {s.u ? <span className="u">{s.u}</span> : null}
                  </span>
                  <span className="stat-label">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="container">
          <span className="trust-label">{t("trust.label")}</span>
          <Partners />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head" as="div">
            <span className="eyebrow">{t("svc.eyebrow")}</span>
            <h2 className="h-section">{t("svc.title")}</h2>
            <p className="lead">{t("svc.lead")}</p>
          </Reveal>
          <div className="cap-grid">
            {services.map((s, i) => (
              <Reveal as="article" className="cap-card" delay={((i % 4) + 1) as 1 | 2 | 3 | 4} key={i}>
                <span className="cap-code">{s.code}</span>
                <div className="cap-icon">
                  <Icon name={s.icon} />
                </div>
                <h3>{s.tt}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section alt">
        <div className="container">
          <Reveal className="section-head split-head">
            <div>
              <span className="eyebrow">{t("cat.eyebrow")}</span>
              <h2 className="h-section">{t("cat.title")}</h2>
              <p className="lead">{t("cat.lead")}</p>
            </div>
            <Link className="arrow-link" href="/products">
              <span>{t("cat.viewall")}</span> →
            </Link>
          </Reveal>
          <HomeCategories />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{t("proc.eyebrow")}</span>
            <h2 className="h-section">{t("proc.title")}</h2>
          </Reveal>
          <Reveal className="process-grid" delay={1}>
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="step-n">{s.n}</span>
                <h3>{s.tt}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head split-head">
            <div>
              <span className="eyebrow">{t("proj.eyebrow")}</span>
              <h2 className="h-section">{t("proj.title")}</h2>
              <p className="lead">{t("proj.lead")}</p>
            </div>
            <Link className="arrow-link" href="/projects">
              <span>{t("proj.cta")}</span> →
            </Link>
          </Reveal>
          <Gallery limit={6} preview />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
