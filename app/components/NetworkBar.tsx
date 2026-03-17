"use client";

import { useState, useEffect } from "react";

const LABEL = "Network";
const LINKS = [{"label": "MMAMoms", "href": "https://mmamoms.com"}, {"label": "SpaghettiandBurritos", "href": "https://spaghettiburritos.com"}];
const STORAGE_KEY = "mmadads-network-bar-dismissed";
const ACCENT = "rgba(220,80,60,0.8)";
const ACCENT_HOVER = "#dc503c";
const BG = "#050505";

export default function NetworkBar() {
  const [dismissed, setDismissed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const val = localStorage.getItem(STORAGE_KEY);
    if (val !== "1") setDismissed(false);
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  if (isMobile) {
    return (
      <div style={{
        background: BG,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        position: "relative",
        overflow: "hidden",
        paddingRight: 28,
        paddingLeft: 12,
      }}>
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: ACCENT,
              textDecoration: "none",
              fontSize: 10,
              fontWeight: 600,
              whiteSpace: "nowrap" as const,
              flexShrink: 0,
            }}
          >
            {l.label}
          </a>
        ))}
        <button onClick={dismiss} aria-label="Dismiss" style={{ position: "absolute", right: 8, background: "none", border: "none", color: "rgba(255,255,255,0.35)", cursor: "pointer", fontSize: 14, lineHeight: 1, padding: "0 4px" }}>
          &times;
        </button>
      </div>
    );
  }

  return (
    <div style={{
      background: BG,
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      position: "relative",
      fontSize: 11,
      letterSpacing: "0.5px",
    }}>
      <span style={{ color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap" as const, flexShrink: 0, fontSize: 11 }}>
        {LABEL}
      </span>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: ACCENT,
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 500,
              whiteSpace: "nowrap" as const,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = ACCENT_HOVER)}
            onMouseLeave={e => (e.currentTarget.style.color = ACCENT)}
          >
            {l.label}
          </a>
        ))}
      </div>
      <button onClick={dismiss} aria-label="Dismiss network bar" style={{ position: "absolute", right: 12, background: "none", border: "none", color: "rgba(255,255,255,0.35)", cursor: "pointer", fontSize: 14, lineHeight: 1, padding: "0 4px" }}>
        &times;
      </button>
    </div>
  );
}
