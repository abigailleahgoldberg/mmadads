"use client";

import Link from "next/link";
import { useState } from "react";
import { fighters, weightClasses } from "../data/fighters";

export default function FightersPage() {
  const [activeClass, setActiveClass] = useState<string>("All");

  const filteredFighters =
    activeClass === "All"
      ? fighters
      : fighters.filter((f) => f.weightClass === activeClass);

  const tabs = ["All", ...weightClasses];

  return (
    <>
      {/* Header */}
      <section style={{
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        padding: "5rem 1.5rem 3.5rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--muted)",
            letterSpacing: "0.08em",
            marginBottom: "2rem",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}>
            <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>HOME</Link>
            <span>/</span>
            <span style={{ color: "var(--text)" }}>FIGHTERS</span>
          </div>

          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--red)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: "0.75rem",
          }}>
            FIGHTER DATABASE
          </div>
          <h1 style={{
            fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "var(--text)",
            letterSpacing: "0.02em",
            lineHeight: 0.92,
            marginBottom: "1.5rem",
          }}>
            FIGHTERS
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            maxWidth: "560px",
          }}>
            Every fighter in our database — real records, real bios, real dad takes. Filter by weight class or browse the full roster.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section style={{
        backgroundColor: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: "64px",
        zIndex: 50,
        overflowX: "auto",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          gap: "0.25rem",
          flexWrap: "nowrap",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveClass(tab)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0 1rem",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                height: "52px",
                minHeight: "44px",
                backgroundColor: "transparent",
                color: activeClass === tab ? "var(--text)" : "var(--muted)",
                borderBottom: activeClass === tab ? "2px solid var(--red)" : "2px solid transparent",
                transition: "all 0.15s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Fighter grid */}
      <section style={{
        backgroundColor: "var(--bg)",
        padding: "3rem 1.5rem 5rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}>
            {filteredFighters.length} FIGHTER{filteredFighters.length !== 1 ? "S" : ""}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--border)",
          }}>
            {filteredFighters.map((fighter) => (
              <Link
                key={fighter.slug}
                href={`/fighters/${fighter.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article style={{
                  backgroundColor: "var(--surface)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  cursor: "pointer",
                  height: "100%",
                  transition: "background-color 0.15s",
                  borderTop: fighter.isChampion ? "2px solid var(--gold)" : "2px solid transparent",
                }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--surface-elevated)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--surface)")}
                >
                  {fighter.isChampion && (
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.58rem",
                      color: "var(--gold)",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      marginBottom: "0.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}>
                      <span style={{
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        backgroundColor: "var(--gold)",
                        borderRadius: "50%",
                      }} />
                      UFC CHAMPION
                    </div>
                  )}

                  <div style={{
                    fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                    fontSize: "1.5rem",
                    color: "var(--text)",
                    letterSpacing: "0.02em",
                    lineHeight: 1.05,
                  }}>
                    {fighter.name}
                  </div>

                  {fighter.nickname && (
                    <div style={{
                      fontFamily: "var(--font-body)",
                      fontStyle: "italic",
                      fontSize: "0.8rem",
                      color: "var(--muted)",
                    }}>
                      &ldquo;{fighter.nickname}&rdquo;
                    </div>
                  )}

                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}>
                    {fighter.weightClass}
                  </div>

                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    color: fighter.isChampion ? "var(--gold)" : "var(--red)",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    marginTop: "0.25rem",
                  }}>
                    {fighter.record}
                  </div>

                  <div style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    lineHeight: 1.55,
                    marginTop: "0.25rem",
                  }}>
                    {fighter.fightingStyle}
                  </div>

                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    color: fighter.isChampion ? "var(--gold)" : "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}>
                    Full profile <span style={{ color: "var(--red)" }}>&rarr;</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
