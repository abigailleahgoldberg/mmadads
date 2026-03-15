"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "FIGHTERS", href: "/fighters" },
  { label: "EVENTS", href: "/events" },
  { label: "HISTORY", href: "/history" },
  { label: "WEIGHT CLASSES", href: "/weight-classes" },
  { label: "BLOG", href: "/blog" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      backgroundColor: "var(--surface)",
      borderBottom: "1px solid var(--border)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <nav style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
          fontSize: "1.6rem",
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "0.05em",
          lineHeight: 1,
        }}>
          MMADADS<span style={{ color: "var(--red)" }}>.</span>COM
        </Link>

        {/* Desktop nav links */}
        <div className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                transition: "color 0.15s",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            flexDirection: "column" as const,
            gap: "5px",
            cursor: "pointer",
            padding: "8px",
            background: "none",
            border: "none",
            minHeight: "44px",
            minWidth: "44px",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="hamburger-btn"
        >
          <span style={{
            display: "block",
            width: "22px",
            height: "2px",
            backgroundColor: "var(--text)",
            transition: "all 0.2s",
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }} />
          <span style={{
            display: "block",
            width: "22px",
            height: "2px",
            backgroundColor: "var(--text)",
            transition: "all 0.2s",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block",
            width: "22px",
            height: "2px",
            backgroundColor: "var(--text)",
            transition: "all 0.2s",
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          backgroundColor: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              padding: "0.85rem 1.5rem",
              borderBottom: "1px solid var(--border)",
              minHeight: "44px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
