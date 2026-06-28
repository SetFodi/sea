"use client";

import { useLang } from "@/lib/LanguageProvider";
import { CONTACT } from "@/lib/data";
import { Icon } from "./icons";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function ContactView() {
  const { t } = useLang();
  return (
    <section className="section">
      <div className="container">
        <div className="contact-grid">
          <Reveal>
            <div className="contact-cards">
              <a className="contact-card" href={`tel:${CONTACT.phoneHref}`}>
                <span className="cc-ic">
                  <Icon name="phone" />
                </span>
                <div>
                  <div className="cc-k">{t("cp.phone.k")}</div>
                  <div className="cc-v">{CONTACT.phone}</div>
                </div>
              </a>
              <a className="contact-card" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                <span className="cc-ic">
                  <Icon name="whatsapp" />
                </span>
                <div>
                  <div className="cc-k">{t("cp.whatsapp.k")}</div>
                  <div className="cc-v">{CONTACT.phone}</div>
                </div>
              </a>
              <a className="contact-card" href={`mailto:${CONTACT.email}`}>
                <span className="cc-ic">
                  <Icon name="mail" />
                </span>
                <div>
                  <div className="cc-k">{t("cp.email.k")}</div>
                  <div className="cc-v">{CONTACT.email}</div>
                </div>
              </a>
              <div className="contact-card">
                <span className="cc-ic">
                  <Icon name="pin" />
                </span>
                <div>
                  <div className="cc-k">{t("cp.addr.k")}</div>
                  <div className="cc-v">{t("cp.addr.v")}</div>
                </div>
              </div>
              <div className="contact-card">
                <span className="cc-ic">
                  <Icon name="clock" />
                </span>
                <div>
                  <div className="cc-k">{t("cp.hours.k")}</div>
                  <div className="cc-v">{t("cp.hours.v")}</div>
                </div>
              </div>
            </div>
            <div className="map-embed">
              <iframe
                title="SEA Ltd location — Shalva Nutsubidze 20, Tbilisi"
                src="https://www.google.com/maps?q=Shalva%20Nutsubidze%2020%20Tbilisi%20Georgia&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
