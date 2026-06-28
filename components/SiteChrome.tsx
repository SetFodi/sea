"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageProvider";
import { CONTACT } from "@/lib/data";
import { Logo } from "./Brand";
import { Icon } from "./icons";

const LINKS = [
  { href: "/", key: "nav.home" },
  { href: "/products", key: "nav.products" },
  { href: "/projects", key: "nav.projects" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
];

export default function SiteChrome() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="topbar">
          <div className="container">
            <span className="topbar-tag topbar-tag-hide">{t("top.tag")}</span>
            <div className="topbar-group">
              <a href={`tel:${CONTACT.phoneHref}`}>
                <Icon name="phone" />
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`}>
                <Icon name="mail" />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <nav className="navbar" aria-label="Primary">
            <Link className="brand" href="/" aria-label="SEA LLC">
              <Logo />
              <span className="logo-text">
                <span className="logo-name">{t("brand.name")}</span>
                <span className="logo-sub">{t("brand.sub")}</span>
              </span>
            </Link>

            <div className="nav-links">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : ""}>
                  {t(l.key)}
                </Link>
              ))}
            </div>

            <div className="nav-right">
              <div className="lang-toggle" role="group" aria-label="Language">
                <button className={lang === "ka" ? "is-active" : ""} onClick={() => setLang("ka")}>
                  GE
                </button>
                <button className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>
                  EN
                </button>
              </div>
              <Link className="btn btn--signal nav-cta" href="/contact">
                {t("nav.cta")}
              </Link>
              <button
                className="menu-btn"
                aria-label="Menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className="mobile-drawer">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : ""} onClick={() => setOpen(false)}>
            {t(l.key)}
          </Link>
        ))}
        <Link className="btn btn--signal md-cta" href="/contact" onClick={() => setOpen(false)}>
          {t("nav.cta")}
        </Link>
      </div>
      <div className="nav-backdrop" onClick={() => setOpen(false)} />
    </>
  );
}
