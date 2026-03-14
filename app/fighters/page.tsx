"use client";

import Link from "next/link";
import { useState } from "react";
import { fighters, weightClasses } from "../data/fighters";

const COLORS = {
  dark: "#080E18",
  navy: "#0F1C2E",
  navyLight: "#141F30",
  red: "#D42B2B",
  slate: "#4A5568",
  bone: "#EEE8DC",
  gold: "#E8A020",
};

const FONT = {
  display: "'Oswald', sans-serif",
  body: "'Merriweather', Georgia, serif",
  mono: "'Roboto Mono', monospace",
};

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
      <section
        style={{
          backgroundColor: COLORS.dark,
          borderBottom: `3px solid ${COLORS.red}`,
          padding: "4rem 1.5rem 3rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: FONT.mono,
              fontSize: "0.72rem",
              color: COLORS.red,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "1rem",
            }}
          >
            FIGHTER DATABASE
          </div>
          <h1
            style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "clamp(36px, 6vw, 72px)",
              color: COLORS.bone,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 0.95,
              marginBottom: "1.5rem",
            }}
          >
            FIGHTERS
          </h1>
          <p
            style={{
              fontFamily: FONT.body,
              fontSize: "1rem",
              color: COLORS.slate,
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            Every fighter in our database — real records, real bios, real dad takes. Filter by weight class or browse the full roster.
          </p>
        </div>
      </section>

      {/* Weight Class Filter */}
      <section
        style={{
          backgroundColor: COLORS.navy,
          borderBottom: `1px solid rgba(238,232,220,0.08)`,
          padding: "1.25rem 1.5rem",
          position: "sticky",
          top: "64px",
          zIndex: 50,
          overflowX: "auto",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "0.5rem",
            flexWrap: "nowrap",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveClass(tab)}
              style={{
                fontFamily: FONT.mono,
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.45rem 0.85rem",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                backgroundColor:
                  activeClass === tab ? COLORS.red : "transparent",
                color:
                  activeClass === tab ? COLORS.bone : COLORS.slate,
                transition: "all 0.15s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Fighter Grid */}
      <section
        style={{
          backgroundColor: COLORS.dark,
          padding: "3rem 1.5rem 5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontFamily: FONT.mono,
              fontSize: "0.68rem",
              color: COLORS.slate,
              letterSpacing: "0.1em",
              marginBottom: "1.5rem",
            }}
          >
            {filteredFighters.length} FIGHTERS
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {filteredFighters.map((fighter) => (
              <Link
                key={fighter.slug}
                href={`/fighters/${fighter.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  style={{
                    backgroundColor: COLORS.navy,
                    borderLeft: `4px solid ${fighter.isChampion ? COLORS.gold : COLORS.red}`,
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    cursor: "pointer",
                    transition: "background-color 0.15s",
                  }}
                >
                  {fighter.isChampion && (
                    <div
                      style={{
                        fontFamily: FONT.mono,
                        fontSize: "0.6rem",
                        color: COLORS.gold,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      UFC CHAMPION
                    </div>
                  )}
                  <div
                    style={{
                      fontFamily: FONT.display,
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      color: COLORS.bone,
                      textTransform: "uppercase",
                      lineHeight: 1.1,
                    }}
                  >
                    {fighter.name}
                  </div>
                  {fighter.nickname && (
                    <div
                      style={{
                        fontFamily: FONT.body,
                        fontStyle: "italic",
                        fontSize: "0.82rem",
                        color: COLORS.slate,
                      }}
                    >
                      &ldquo;{fighter.nickname}&rdquo;
                    </div>
                  )}
                  <div
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: "0.7rem",
                      color: COLORS.slate,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {fighter.weightClass}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: "0.85rem",
                      color: COLORS.red,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {fighter.record}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT.body,
                      fontSize: "0.75rem",
                      color: COLORS.slate,
                      lineHeight: 1.5,
                    }}
                  >
                    {fighter.fightingStyle}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: "0.65rem",
                      color: fighter.isChampion ? COLORS.gold : COLORS.slate,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginTop: "0.5rem",
                      opacity: 0.8,
                    }}
                  >
                    Full profile --&gt;
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
