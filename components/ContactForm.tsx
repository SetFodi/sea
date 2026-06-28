"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageProvider";
import { Icon } from "./icons";

export default function ContactForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (status === "sent") {
    return (
      <div className="form-card">
        <div className="form-sent">
          <div className="sent-ic">
            <Icon name="check" />
          </div>
          <h3>{t("cp.sent.t")}</h3>
          <p>{t("cp.sent.d")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h2 className="h-section form-title">{t("cp.form.title")}</h2>
      <form
        noValidate
        onSubmit={async (e) => {
          e.preventDefault();
          setStatus("sending");

          try {
            const response = await fetch("/api/contact", {
              method: "POST",
              body: new FormData(e.currentTarget),
            });

            if (!response.ok) throw new Error("Request failed");
            setStatus("sent");
          } catch {
            setStatus("error");
          }
        }}
      >
        <div className="field-row">
          <div className="field">
            <label htmlFor="f-name">{t("cp.f.name")}</label>
            <input id="f-name" name="name" type="text" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="f-company">{t("cp.f.company")}</label>
            <input id="f-company" name="company" type="text" autoComplete="organization" />
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor="f-email">{t("cp.f.email")}</label>
            <input id="f-email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="f-phone">{t("cp.f.phone")}</label>
            <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="f-subject">{t("cp.f.subject")}</label>
          <select id="f-subject" name="subject">
            <option>{t("cp.f.subject.opt1")}</option>
            <option>{t("cp.f.subject.opt2")}</option>
            <option>{t("cp.f.subject.opt3")}</option>
            <option>{t("cp.f.subject.opt4")}</option>
            <option>{t("cp.f.subject.opt5")}</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-msg">{t("cp.f.msg")}</label>
          <textarea id="f-msg" name="message" placeholder={t("cp.f.msg.ph")} required />
        </div>
        <button type="submit" className="btn btn--signal btn-block" disabled={status === "sending"}>
          {status === "sending" ? t("cp.f.sending") : t("cp.f.submit")}
        </button>
        {status === "error" ? <p className="form-error">{t("cp.f.error")}</p> : null}
        <p className="form-note" style={{ marginTop: 14, textAlign: "center" }}>
          {t("cp.f.note")}
        </p>
      </form>
    </div>
  );
}
