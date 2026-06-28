"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageProvider";
import { CATEGORIES, CONTACT } from "@/lib/data";
import { Logo } from "./Brand";
import { Icon, SOCIAL } from "./icons";

const NAV = [
  { href: "/", key: "nav.home" },
  { href: "/products", key: "nav.products" },
  { href: "/projects", key: "nav.projects" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
];

export default function SiteFooter() {
  const { t, pick } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <Logo />
            </Link>
            <p>{t("foot.about")}</p>
            <div className="social">
              <a href="#" aria-label="Facebook">{SOCIAL.fb}</a>
              <a href="#" aria-label="Instagram">{SOCIAL.ig}</a>
              <a href="#" aria-label="LinkedIn">{SOCIAL.li}</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t("foot.nav")}</h4>
            <ul>
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{t(l.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t("foot.cat")}</h4>
            <ul>
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link href={`/products#${c.id}`}>{pick(c.name)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t("foot.contact")}</h4>
            <ul className="footer-contact">
              <li>
                <Icon name="pin" />
                <span>{t("foot.addr")}</span>
              </li>
              <li>
                <Icon name="phone" />
                <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
              </li>
              <li>
                <Icon name="whatsapp" />
                <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {t("brand.full")}. {t("foot.rights")}
          </span>
          <span>{t("foot.madein")} 🇬🇪</span>
          <span className="footer-credit">
            {t("foot.credit.before")}{" "}
            <a href="https://pixelweb.ge" target="_blank" rel="noopener noreferrer">
              PixelWeb
            </a>
            {t("foot.credit.after")}
          </span>
        </div>
      </div>
    </footer>
  );
}
