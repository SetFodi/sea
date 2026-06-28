"use client";

import { useEffect, useState } from "react";

const DROP = "M100 50C100 50 136 92 136 114A36 36 0 1 1 64 114C64 92 100 50 100 50Z";

const SPECKS = [
  { cx: 90, cy: 118, r: 2.4, d: "0s" },
  { cx: 110, cy: 123, r: 1.9, d: ".18s" },
  { cx: 99, cy: 132, r: 2.6, d: ".34s" },
  { cx: 113, cy: 110, r: 1.7, d: ".5s" },
  { cx: 84, cy: 127, r: 2.1, d: ".64s" },
  { cx: 103, cy: 116, r: 1.5, d: ".8s" },
];

const BUBBLES = [
  { cx: 92, cy: 136, r: 2.2, cls: "b1" },
  { cx: 104, cy: 138, r: 1.6, cls: "b2" },
  { cx: 98, cy: 134, r: 1.9, cls: "b3" },
  { cx: 108, cy: 132, r: 1.3, cls: "b4" },
];

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("preloading");

    const start = performance.now();
    const MIN = 2000;
    const MAX = 3600;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, MIN - (performance.now() - start));
      window.setTimeout(() => {
        setDone(true);
        root.classList.remove("preloading");
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const hard = window.setTimeout(finish, MAX);

    return () => {
      window.clearTimeout(hard);
      window.removeEventListener("load", finish);
      root.classList.remove("preloading");
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = window.setTimeout(() => setGone(true), 700);
    return () => window.clearTimeout(t);
  }, [done]);

  if (gone) return null;

  return (
    <div className={`preloader${done ? " is-done" : ""}`} role="status" aria-live="polite" aria-label="Loading">
      <div className="pre-stage">
        <svg className="pre-svg" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <linearGradient id="pw" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#0E5E8C" />
              <stop offset="0.55" stopColor="#00A6D6" />
              <stop offset="1" stopColor="#6FD9EE" />
            </linearGradient>
            <linearGradient id="pring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#00B4D8" />
              <stop offset="1" stopColor="#FF6A2C" />
            </linearGradient>
            <clipPath id="pdc">
              <path d={DROP} />
            </clipPath>
          </defs>

          <g className="pre-ripples" fill="none" stroke="rgba(111,217,238,.45)" strokeWidth="1.4">
            <circle className="rp r1" cx="100" cy="112" r="42" />
            <circle className="rp r2" cx="100" cy="112" r="42" />
            <circle className="rp r3" cx="100" cy="112" r="42" />
          </g>

          <g transform="rotate(-90 100 100)">
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="3" />
            <circle
              className="ring-arc"
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="url(#pring)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          <path d={DROP} fill="rgba(255,255,255,.04)" />
          <g clipPath="url(#pdc)">
            <rect className="pre-water" x="60" y="46" width="80" height="112" fill="url(#pw)" />
            <rect className="pre-murk" x="60" y="46" width="80" height="112" fill="#6b5e35" />
            {SPECKS.map((s, i) => (
              <circle
                key={i}
                className="sp"
                cx={s.cx}
                cy={s.cy}
                r={s.r}
                fill="#14242e"
                style={{ animationDelay: s.d }}
              />
            ))}
            {BUBBLES.map((b, i) => (
              <circle key={i} className={`bub ${b.cls}`} cx={b.cx} cy={b.cy} r={b.r} fill="rgba(255,255,255,.7)" />
            ))}
          </g>
          <path className="pre-outline" d={DROP} fill="none" stroke="rgba(111,217,238,.6)" strokeWidth="2" />
        </svg>

        <div className="pre-brand">
          <span className="pn">სეა</span>
          <span className="ps">SEA LLC</span>
        </div>
        <div className="pre-tag">წყლის სისუფთავის ინჟინერია</div>
      </div>
    </div>
  );
}
