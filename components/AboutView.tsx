"use client";

import { useLang } from "@/lib/LanguageProvider";
import { Icon } from "./icons";
import Reveal from "./Reveal";

export default function AboutView() {
  const { t } = useLang();

  const facts = [
    { n: t("stat.1.n"), u: "", l: t("stat.1.l") },
    { n: t("stat.2.n"), u: "+", l: t("stat.2.l") },
    { n: t("stat.3.n"), u: "+", l: t("stat.3.l") },
    { n: t("stat.4.n"), u: "", l: t("stat.4.l") },
  ];

  const values = [
    { icon: "shield", tt: t("ap.v1.t"), d: t("ap.v1.d") },
    { icon: "tender", tt: t("ap.v2.t"), d: t("ap.v2.d") },
    { icon: "layers", tt: t("ap.v3.t"), d: t("ap.v3.d") },
    { icon: "support", tt: t("ap.v4.t"), d: t("ap.v4.d") },
  ];

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal className="media-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/projects/g-30-2.jpg" alt="SEA LLC water disinfection installation" />
              <span className="frame-tag">NaClO · DOSING · SCADA</span>
            </Reveal>
            <Reveal delay={1}>
              <span className="eyebrow">{t("ap.story.eyebrow")}</span>
              <h2 className="h-section story-title">{t("ap.story.title")}</h2>
              <p className="lead story-p1">{t("ap.story.p1")}</p>
              <p className="story-p2">{t("ap.story.p2")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ paddingBottom: "clamp(48px,4vw,80px)" }}>
        <div className="container">
          <Reveal className="facts">
            {facts.map((f, i) => (
              <div className="fact" key={i}>
                <div className="fn">
                  {f.n}
                  {f.u ? <span className="u">{f.u}</span> : null}
                </div>
                <div className="fl">{f.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{t("ap.values.eyebrow")}</span>
            <h2 className="h-section">{t("ap.values.title")}</h2>
          </Reveal>
          <div className="value-list">
            {values.map((v, i) => (
              <Reveal as="div" className="value" delay={((i % 2) + 1) as 1 | 2} key={i}>
                <span className="v-ic">
                  <Icon name={v.icon} />
                </span>
                <div>
                  <h3>{v.tt}</h3>
                  <p>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
