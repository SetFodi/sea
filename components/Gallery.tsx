"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLang } from "@/lib/LanguageProvider";
import { PROJECTS } from "@/lib/data";

export default function Gallery({ limit, preview = false }: { limit?: number; preview?: boolean }) {
  const { pick, t } = useLang();
  const list = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const activeBeforeOpen = useRef<HTMLElement | null>(null);

  const active = activeIndex === null ? null : list[activeIndex];
  const isOpen = active !== null;

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeViewer = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || list.length < 1) return current;
      return (current - 1 + list.length) % list.length;
    });
  }, [list.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || list.length < 1) return current;
      return (current + 1) % list.length;
    });
  }, [list.length]);

  useEffect(() => {
    if (!isOpen) return;

    activeBeforeOpen.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const timer = window.setTimeout(() => closeRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(timer);
      activeBeforeOpen.current?.focus();
      activeBeforeOpen.current = null;
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.classList.toggle("viewer-open", isOpen);
    return () => document.body.classList.remove("viewer-open");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) ?? []
      ).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true");

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeViewer, isOpen, showNext, showPrevious]);

  const viewer =
    active && mounted
      ? createPortal(
          <div className="image-viewer" onClick={closeViewer}>
            <div
              className="image-viewer__dialog"
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={pick(active.title)}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="image-viewer__close"
                type="button"
                aria-label={t("gallery.close")}
                ref={closeRef}
                onClick={closeViewer}
              >
                <span aria-hidden="true">×</span>
              </button>

              <button
                className="image-viewer__nav image-viewer__nav--prev"
                type="button"
                aria-label={t("gallery.previous")}
                onClick={showPrevious}
              >
                <span aria-hidden="true">‹</span>
              </button>

              <div className="image-viewer__stage">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/projects/${active.img}`} alt={pick(active.title)} />
              </div>

              <button
                className="image-viewer__nav image-viewer__nav--next"
                type="button"
                aria-label={t("gallery.next")}
                onClick={showNext}
              >
                <span aria-hidden="true">›</span>
              </button>

              <div className="image-viewer__caption">
                <div>
                  <span className="k">{pick(active.tag)}</span>
                  <strong>{pick(active.title)}</strong>
                </div>
                <span className="image-viewer__count">
                  {(activeIndex ?? 0) + 1} / {list.length}
                </span>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div className={`gallery${preview ? " preview" : ""}`}>
        {list.map((p, index) => {
          const title = pick(p.title);
          const tag = pick(p.tag);

          return (
            <button
              className="shot"
              key={p.img}
              type="button"
              aria-label={`${t("gallery.open")}: ${title}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/projects/${p.img}`} alt={title} loading="lazy" />
              <span className="shot-cap">
                <span className="k">{tag}</span>
                <span className="t">{title}</span>
              </span>
            </button>
          );
        })}
      </div>
      {viewer}
    </>
  );
}
