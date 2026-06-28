"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageProvider";

export default function PageHero({
  crumbKey,
  eyebrowKey,
  titleKey,
  leadKey,
}: {
  crumbKey: string;
  eyebrowKey: string;
  titleKey: string;
  leadKey: string;
}) {
  const { t } = useLang();
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">{t("nav.home")}</Link>
          <span className="sep">/</span>
          <span>{t(crumbKey)}</span>
        </nav>
        <span className="eyebrow on-dark">{t(eyebrowKey)}</span>
        <h1 className="display">{t(titleKey)}</h1>
        <p className="lead">{t(leadKey)}</p>
      </div>
    </section>
  );
}
