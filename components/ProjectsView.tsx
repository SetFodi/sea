"use client";

import { useLang } from "@/lib/LanguageProvider";
import Reveal from "./Reveal";
import Gallery from "./Gallery";
import Partners from "./Partners";

export default function ProjectsView() {
  const { t } = useLang();
  return (
    <>
      <section className="section">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: 28 }}>
            <span className="eyebrow">{t("prp.gallery")}</span>
          </Reveal>
          <Gallery />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              {t("prp.partners.eyebrow")}
            </span>
            <h2 className="h-section">{t("prp.partners.title")}</h2>
            <p className="lead">{t("prp.partners.lead")}</p>
          </Reveal>
          <Reveal delay={1}>
            <Partners center />
          </Reveal>
        </div>
      </section>
    </>
  );
}
