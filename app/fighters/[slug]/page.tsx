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

function SectionDivider() {
  return (
    <div style={{
      borderTop: "1px solid var(--border)",
      marginBottom: "2.5rem",
      paddingTop: "2.5rem",
    }} />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
      fontSize: "1.3rem",
      color: "var(--text)",
      letterSpacing: "0.06em",
      paddingBottom: "0.75rem",
      borderBottom: "1px solid var(--border)",
      marginBottom: "1.75rem",
    }}>
      {children}
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      backgroundColor: "var(--bg)",
      border: "1px solid var(--border)",
      padding: "1rem 1.25rem",
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.58rem",
        color: "var(--muted)",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        marginBottom: "0.4rem",
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
        fontSize: "1.1rem",
        color: "var(--text)",
        letterSpacing: "0.04em",
      }}>
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

      {/* Hero */}
      <section style={{
        backgroundColor: "var(--bg)",
        borderBottom: `2px solid ${fighter.isChampion ? "var(--gold)" : "var(--red)"}`,
        padding: "3rem 1.5rem 4rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--muted)",
            letterSpacing: "0.08em",
            marginBottom: "2.5rem",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}>
            <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>HOME</Link>
            <span>/</span>
            <Link href="/fighters" style={{ color: "var(--muted)", textDecoration: "none" }}>FIGHTERS</Link>
            <span>/</span>
            <span style={{ color: "var(--text)" }}>{fighter.name.toUpperCase()}</span>
          </div>

          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", alignItems: "flex-start" }}>
            {/* Name block */}
            <div style={{ flex: "1 1 400px", minWidth: 0 }}>
              {fighter.isChampion && (
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  marginBottom: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    backgroundColor: "var(--gold)",
                    borderRadius: "50%",
                  }} />
                  UFC CHAMPION — {fighter.weightClass.toUpperCase()}
                </div>
              )}

              <h1 style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: "var(--text)",
                letterSpacing: "0.01em",
                lineHeight: 0.9,
                marginBottom: "0.75rem",
              }}>
                {fighter.name}
              </h1>

              {fighter.nickname && (
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  color: "var(--muted)",
                  marginBottom: "1rem",
                }}>
                  &ldquo;{fighter.nickname}&rdquo;
                </div>
              )}

              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: fighter.isChampion ? "var(--gold)" : "var(--red)",
                letterSpacing: "0.06em",
                marginBottom: "0.5rem",
              }}>
                {fighter.record}
              </div>

              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "var(--muted)",
              }}>
                {fighter.hometown}
              </div>
            </div>

            {/* Stats grid */}
            <div style={{
              flex: "0 0 340px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              backgroundColor: "var(--border)",
            }}>
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
      <section style={{ backgroundColor: "var(--surface)", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionLabel>Overview</SectionLabel>
          <div style={{ maxWidth: "760px" }}>
            {fighter.bio.split("\n\n").map((para, i) => (
              <p key={i} style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--muted)",
                lineHeight: 1.85,
                marginBottom: "1.25rem",
              }}>
                {para.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights + Signature Moves */}
      <section style={{ backgroundColor: "var(--bg)", padding: "4rem 1.5rem" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
        }}>
          <div>
            <SectionLabel>Career Highlights</SectionLabel>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {fighter.careerHighlights.map((h, i) => (
                <li key={i} style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  paddingLeft: "1rem",
                  borderLeft: "2px solid var(--gold)",
                }}>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionLabel>Signature Moves</SectionLabel>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {fighter.signatureMoves.map((m, i) => (
                <li key={i} style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                  lineHeight: 1.5,
                }}>
                  <span style={{
                    color: "var(--red)",
                    fontWeight: 700,
                    minWidth: "1.5rem",
                    letterSpacing: "0.02em",
                  }}>
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
      <section style={{ backgroundColor: "var(--surface)", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionLabel>Biggest Wins</SectionLabel>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--border)",
          }}>
            {fighter.biggestWins.map((win, i) => (
              <div key={i} style={{
                backgroundColor: "var(--bg)",
                padding: "1.25rem",
                borderLeft: "2px solid var(--red)",
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.4rem",
                }}>
                  WIN #{i + 1}
                </div>
                <div style={{
                  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                  fontSize: "1rem",
                  color: "var(--text)",
                  letterSpacing: "0.04em",
                }}>
                  {win}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dad Take */}
      <section style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "4rem 1.5rem",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "1.25rem",
          }}>
            THE DAD TAKE
          </div>
          <blockquote style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            color: "var(--muted)",
            lineHeight: 1.85,
            borderLeft: "3px solid var(--gold)",
            paddingLeft: "1.75rem",
            margin: 0,
            fontStyle: "italic",
          }}>
            {fighter.dadTake}
          </blockquote>
        </div>
      </section>

      {/* Related Fighters */}
      {related.length > 0 && (
        <section style={{
          backgroundColor: "var(--surface)",
          borderTop: "1px solid var(--border)",
          padding: "4rem 1.5rem",
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <SectionLabel>More {fighter.weightClass} Fighters</SectionLabel>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1px",
              backgroundColor: "var(--border)",
            }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/fighters/${r.slug}`} style={{ textDecoration: "none" }}>
                  <div className="post-card" style={{
                    padding: "1.25rem",
                    borderTop: `2px solid ${r.isChampion ? "var(--gold)" : "var(--surface)"}`,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                      fontSize: "1.1rem",
                      color: "var(--text)",
                      letterSpacing: "0.02em",
                      marginBottom: "0.3rem",
                    }}>
                      {r.name}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: r.isChampion ? "var(--gold)" : "var(--red)",
                    }}>
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
