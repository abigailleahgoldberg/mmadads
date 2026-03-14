import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fighters, getFighterBySlug, getFightersByWeightClass } from "../../data/fighters";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fighters.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fighter = getFighterBySlug(slug);
  if (!fighter) return {};
  return {
    title: `${fighter.name} — UFC Fighter Profile`,
    description: `${fighter.name} (${fighter.record}) ${fighter.weightClass}. ${fighter.bio.slice(0, 150).trim()}...`,
    openGraph: {
      title: `${fighter.name} | MMADads Fighter Profile`,
      description: `${fighter.nickname ? `"${fighter.nickname}" — ` : ""}${fighter.record} — ${fighter.weightClass}`,
      type: "profile",
    },
  };
}

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

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        backgroundColor: COLORS.navyLight,
        padding: "1rem 1.25rem",
        borderBottom: `2px solid ${COLORS.slate}`,
      }}
    >
      <div
        style={{
          fontFamily: FONT.mono,
          fontSize: "0.6rem",
          color: COLORS.slate,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "0.35rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 700,
          fontSize: "1rem",
          color: COLORS.bone,
          textTransform: "uppercase",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default async function FighterPage({ params }: Props) {
  const { slug } = await params;
  const fighter = getFighterBySlug(slug);
  if (!fighter) notFound();

  const related = getFightersByWeightClass(fighter.weightClass)
    .filter((f) => f.slug !== fighter.slug)
    .slice(0, 4);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: fighter.name,
    alternateName: fighter.nickname,
    description: fighter.bio.replace(/\n/g, " ").slice(0, 300),
    birthPlace: fighter.hometown,
    sport: "Mixed Martial Arts",
    url: `https://mmadads.com/fighters/${fighter.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Breadcrumb + Hero */}
      <section
        style={{
          backgroundColor: COLORS.dark,
          borderBottom: `3px solid ${fighter.isChampion ? COLORS.gold : COLORS.red}`,
          padding: "2.5rem 1.5rem 3rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div
            style={{
              fontFamily: FONT.mono,
              fontSize: "0.68rem",
              color: COLORS.slate,
              letterSpacing: "0.08em",
              marginBottom: "2rem",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <Link href="/" style={{ color: COLORS.slate, textDecoration: "none" }}>HOME</Link>
            <span style={{ color: COLORS.slate }}>/</span>
            <Link href="/fighters" style={{ color: COLORS.slate, textDecoration: "none" }}>FIGHTERS</Link>
            <span style={{ color: COLORS.slate }}>/</span>
            <span style={{ color: COLORS.bone }}>{fighter.name.toUpperCase()}</span>
          </div>

          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", alignItems: "flex-start" }}>
            {/* Name & Info */}
            <div style={{ flex: "1 1 400px" }}>
              {fighter.isChampion && (
                <div
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: "0.65rem",
                    color: COLORS.gold,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: "0.75rem",
                  }}
                >
                  UFC CHAMPION — {fighter.weightClass.toUpperCase()}
                </div>
              )}
              <h1
                style={{
                  fontFamily: FONT.display,
                  fontWeight: 700,
                  fontSize: "clamp(42px, 7vw, 80px)",
                  color: COLORS.bone,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  lineHeight: 0.92,
                  marginBottom: "0.75rem",
                }}
              >
                {fighter.name}
              </h1>
              {fighter.nickname && (
                <div
                  style={{
                    fontFamily: FONT.body,
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    color: COLORS.slate,
                    marginBottom: "0.75rem",
                  }}
                >
                  &ldquo;{fighter.nickname}&rdquo;
                </div>
              )}
              <div
                style={{
                  fontFamily: FONT.mono,
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: COLORS.red,
                  letterSpacing: "0.04em",
                  marginBottom: "0.5rem",
                }}
              >
                {fighter.record}
              </div>
              <div
                style={{
                  fontFamily: FONT.body,
                  fontSize: "0.9rem",
                  color: COLORS.slate,
                }}
              >
                {fighter.hometown}
              </div>
            </div>

            {/* Stats Grid */}
            <div
              style={{
                flex: "0 0 340px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                backgroundColor: `rgba(238,232,220,0.06)`,
              }}
            >
              <StatBox label="Weight Class" value={fighter.weightClass} />
              <StatBox label="Age" value={`${fighter.age}`} />
              <StatBox label="Height" value={fighter.height} />
              <StatBox label="Reach" value={fighter.reach} />
              <StatBox label="Stance" value={fighter.stance} />
              <StatBox label="Style" value={fighter.fightingStyle} />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section style={{ backgroundColor: COLORS.navy, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          <div>
            <SectionLabel>Overview</SectionLabel>
            {fighter.bio.split("\n\n").map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: FONT.body,
                  fontSize: "1rem",
                  color: COLORS.slate,
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                {para.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights + Signature Moves */}
      <section style={{ backgroundColor: COLORS.dark, padding: "4rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Career Highlights */}
          <div>
            <SectionLabel>Career Highlights</SectionLabel>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {fighter.careerHighlights.map((h, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: FONT.body,
                    fontSize: "0.9rem",
                    color: COLORS.slate,
                    lineHeight: 1.6,
                    paddingLeft: "1.25rem",
                    borderLeft: `3px solid ${COLORS.gold}`,
                  }}
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Signature Moves */}
          <div>
            <SectionLabel>Signature Moves</SectionLabel>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {fighter.signatureMoves.map((m, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: "0.82rem",
                    color: COLORS.bone,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      color: COLORS.red,
                      fontWeight: 700,
                      minWidth: "1rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Biggest Wins */}
      <section style={{ backgroundColor: COLORS.navyLight, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionLabel>Biggest Wins</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {fighter.biggestWins.map((win, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: COLORS.dark,
                  borderLeft: `4px solid ${COLORS.red}`,
                  padding: "1rem 1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: "0.62rem",
                    color: COLORS.slate,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.4rem",
                  }}
                >
                  WIN #{i + 1}
                </div>
                <div
                  style={{
                    fontFamily: FONT.display,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: COLORS.bone,
                    textTransform: "uppercase",
                  }}
                >
                  {win}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dad Take */}
      <section
        style={{
          backgroundColor: COLORS.bone,
          padding: "4rem 1.5rem",
          borderTop: `3px solid ${COLORS.dark}`,
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: FONT.mono,
              fontSize: "0.7rem",
              color: COLORS.red,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "1rem",
            }}
          >
            The Dad Take
          </div>
          <blockquote
            style={{
              fontFamily: FONT.body,
              fontSize: "1.15rem",
              color: COLORS.dark,
              lineHeight: 1.85,
              borderLeft: `5px solid ${COLORS.red}`,
              paddingLeft: "1.5rem",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            {fighter.dadTake}
          </blockquote>
        </div>
      </section>

      {/* Related Fighters */}
      {related.length > 0 && (
        <section style={{ backgroundColor: COLORS.dark, padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <SectionLabel>More {fighter.weightClass} Fighters</SectionLabel>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/fighters/${r.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      backgroundColor: COLORS.navy,
                      borderLeft: `3px solid ${r.isChampion ? COLORS.gold : COLORS.red}`,
                      padding: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONT.display,
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: COLORS.bone,
                        textTransform: "uppercase",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {r.name}
                    </div>
                    <div
                      style={{
                        fontFamily: FONT.mono,
                        fontSize: "0.72rem",
                        color: COLORS.red,
                      }}
                    >
                      {r.record}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        fontSize: "1.2rem",
        color: "#EEE8DC",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        paddingBottom: "0.75rem",
        borderBottom: "2px solid rgba(212,43,43,0.4)",
        marginBottom: "1.5rem",
      }}
    >
      {children}
    </div>
  );
}
