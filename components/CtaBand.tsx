"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageProvider";
import { CONTACT } from "@/lib/data";
import Reveal from "./Reveal";

export default function CtaBand() {
  const { t } = useLang();
  return (
    <section className="cta-band section--tight">
      <div className="container">
        <Reveal className="cta-inner">
          <div>
            <h2 className="h-section">{t("cta.title")}</h2>
            <p>{t("cta.lead")}</p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn--signal" href="/contact">
              {t("cta.btn1")}
            </Link>
            <a className="btn btn--ghost on-dark" href={`tel:${CONTACT.phoneHref}`}>
              {t("cta.btn2")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
