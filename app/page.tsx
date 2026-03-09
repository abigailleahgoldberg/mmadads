"use client";

import Link from "next/link";
import { posts } from "./blog/data";

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

const latestPosts = posts.slice(0, 3);

const champions = [
  {
    weightClass: "HEAVYWEIGHT",
    name: "Jon Jones",
    record: "27-1-0 (1 NC)",
    style:
      "The most decorated heavyweight in UFC history. Unmatched wrestling base and finishing instinct from every position.",
  },
  {
    weightClass: "LIGHT HEAVYWEIGHT",
    name: "Alex Pereira",
    record: "12-2",
    style:
      "Four-weight kickboxing champion turned UFC destroyer. Knockout power in both hands. Finishes anyone on his best night.",
  },
  {
    weightClass: "MIDDLEWEIGHT",
    name: "Dricus du Plessis",
    record: "22-2",
    style:
      "South African pressure and pure grit. Wrestling-based control with a finishing instinct that makes everyone uncomfortable.",
  },
  {
    weightClass: "WELTERWEIGHT",
    name: "Belal Muhammad",
    record: "23-3",
    style:
      "The marathon man. Relentless grappling pressure, elite conditioning, and a pace that breaks opponents across 25 minutes.",
  },
];

const chatMessages = [
  "bro did you see that finish",
  "judges robbed him again. two rounds clear",
  "4am and i'm still watching the post-fight presser",
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          SECTION 1: HERO
      ============================================================ */}
      <section style={{
        backgroundColor: COLORS.dark,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Red stripe -- fight card energy */}
        <div style={{
          height: "6px",
          backgroundColor: COLORS.red,
          width: "100%",
          flexShrink: 0,
        }} />

        {/* Hero content */}
        <div
          className="hero-content-wrap"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 1.5rem 4rem",
            width: "100%",
            gap: "3rem",
          }}
        >
          {/* LEFT: 60% */}
          <div
            className="hero-left-panel"
            style={{ flex: "0 0 58%" }}
          >
            {/* Label */}
            <div style={{
              fontFamily: FONT.mono,
              fontSize: "0.72rem",
              color: COLORS.red,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "1.75rem",
            }}>
              POST-BEDTIME MMA COVERAGE
            </div>

            {/* Headline */}
            <div
              className="hero-headline"
              style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "clamp(64px, 10vw, 120px)",
                lineHeight: 0.92,
                marginBottom: "2rem",
                letterSpacing: "-0.01em",
              }}
            >
              <div style={{ color: COLORS.bone }}>THE CARD</div>
              <div style={{ color: COLORS.slate }}>STARTS AT</div>
              <div style={{ color: COLORS.red }}>10PM.</div>
            </div>

            {/* Body */}
            <p style={{
              fontFamily: FONT.body,
              fontSize: "1.05rem",
              color: COLORS.slate,
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}>
              Kids are in bed. Snacks are ready. The group chat is going. This is for the dads who know every record and watch every prelim.
            </p>

            {/* CTAs */}
            <div
              className="hero-cta-row"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link href="/blog" style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                backgroundColor: COLORS.red,
                color: COLORS.bone,
                padding: "0.9rem 2rem",
                textDecoration: "none",
                display: "inline-block",
              }}>
                TONIGHT'S CARD
              </Link>
              <Link href="/blog" style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                backgroundColor: "transparent",
                color: COLORS.bone,
                border: `2px solid ${COLORS.bone}`,
                padding: "0.9rem 2rem",
                textDecoration: "none",
                display: "inline-block",
              }}>
                THE BLOG
              </Link>
            </div>
          </div>

          {/* RIGHT: 40% -- Fight Card Panel */}
          <div
            className="hero-right-panel"
            style={{
              flex: "0 0 38%",
              backgroundColor: COLORS.navyLight,
              padding: "2rem",
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* "TONIGHT" label */}
            <div style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "0.8rem",
              color: COLORS.red,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              TONIGHT
            </div>

            {/* Fight card entries */}
            {[
              { event: "MAIN EVENT", weightClass: "HEAVYWEIGHT" },
              { event: "CO-MAIN EVENT", weightClass: "LIGHT HEAVYWEIGHT" },
              { event: "PRELIMS", weightClass: "MULTIPLE BOUTS" },
            ].map(({ event, weightClass }, i) => (
              <div key={event}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  paddingTop: i === 0 ? 0 : "1.25rem",
                  paddingBottom: "1.25rem",
                }}>
                  {/* Left: event type + weight class */}
                  <div>
                    <div style={{
                      fontFamily: FONT.mono,
                      fontSize: "0.65rem",
                      color: COLORS.slate,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.3rem",
                    }}>
                      {weightClass}
                    </div>
                    <div style={{
                      fontFamily: FONT.display,
                      fontWeight: 500,
                      fontSize: "0.8rem",
                      color: COLORS.slate,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}>
                      {event}
                    </div>
                  </div>
                  {/* Right: fighters */}
                  <div style={{
                    fontFamily: FONT.display,
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: COLORS.bone,
                    textAlign: "right",
                    letterSpacing: "0.02em",
                  }}>
                    TBD vs TBD
                  </div>
                </div>
                {/* Separator -- not after last item */}
                {i < 2 && (
                  <div style={{
                    height: "1px",
                    backgroundColor: `${COLORS.bone}22`,
                    width: "100%",
                  }} />
                )}
              </div>
            ))}

            {/* Full card link */}
            <div style={{ marginTop: "1.75rem" }}>
              <Link href="/blog" style={{
                fontFamily: FONT.mono,
                fontSize: "0.72rem",
                color: COLORS.bone,
                textDecoration: "none",
                letterSpacing: "0.06em",
                opacity: 0.7,
              }}>
                Full card breakdown --&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: THE DAD TEST
      ============================================================ */}
      <section style={{
        backgroundColor: COLORS.bone,
        padding: "6rem 1.5rem",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Headline */}
          <div style={{
            fontFamily: FONT.display,
            fontWeight: 700,
            fontSize: "clamp(36px, 6vw, 72px)",
            color: COLORS.dark,
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            marginBottom: "3rem",
            textTransform: "uppercase",
          }}>
            DO YOU PASS<br />THE DAD TEST?
          </div>

          {/* Checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
            {[
              "You know Khabib's record off the top of your head",
              "You've explained the difference between wrestling and jiu-jitsu to your kid",
              "You have an opinion about judging criteria",
              "You've woken up at 3am for a fight card on another continent",
              "Your group chat has a dedicated MMA thread",
            ].map((item) => (
              <div key={item} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
              }}>
                {/* Square checkbox */}
                <div style={{
                  width: "22px",
                  height: "22px",
                  minWidth: "22px",
                  backgroundColor: COLORS.red,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2px",
                }}>
                  <span style={{
                    color: COLORS.bone,
                    fontSize: "13px",
                    fontWeight: 700,
                    lineHeight: 1,
                    fontFamily: FONT.mono,
                  }}>
                    X
                  </span>
                </div>
                <span style={{
                  fontFamily: FONT.body,
                  fontSize: "1rem",
                  color: COLORS.dark,
                  lineHeight: 1.5,
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div style={{
            borderTop: `3px solid ${COLORS.dark}`,
            paddingTop: "2rem",
          }}>
            <div style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: COLORS.dark,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              marginBottom: "0.75rem",
            }}>
              YOU BELONG HERE.
            </div>
            <p style={{
              fontFamily: FONT.body,
              fontSize: "1rem",
              color: COLORS.slate,
              lineHeight: 1.7,
              maxWidth: "500px",
            }}>
              mmadads.com covers MMA the way you watch it. Seriously.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: FIGHTER STATS -- CURRENT CHAMPIONS
      ============================================================ */}
      <section style={{
        backgroundColor: COLORS.dark,
        padding: "6rem 1.5rem",
        borderTop: `1px solid ${COLORS.navy}`,
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{
              fontFamily: FONT.mono,
              fontSize: "0.7rem",
              color: COLORS.red,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "0.75rem",
            }}>
              AS OF EARLY 2026
            </div>
            <div style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: COLORS.bone,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}>
              CURRENT CHAMPIONS
            </div>
          </div>

          {/* Grid */}
          <div
            className="champion-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
            }}
          >
            {champions.map((c) => (
              <div key={c.weightClass} style={{
                backgroundColor: COLORS.navy,
                borderLeft: `4px solid ${COLORS.gold}`,
                padding: "1.75rem 1.5rem",
              }}>
                {/* Weight class */}
                <div style={{
                  fontFamily: FONT.mono,
                  fontSize: "0.62rem",
                  color: COLORS.slate,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "0.75rem",
                }}>
                  {c.weightClass}
                </div>
                {/* Name */}
                <div style={{
                  fontFamily: FONT.display,
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: COLORS.bone,
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                }}>
                  {c.name}
                </div>
                {/* Record */}
                <div style={{
                  fontFamily: FONT.mono,
                  fontSize: "0.8rem",
                  color: COLORS.red,
                  marginBottom: "0.75rem",
                  letterSpacing: "0.04em",
                }}>
                  {c.record}
                </div>
                {/* Style note */}
                <div style={{
                  fontFamily: FONT.body,
                  fontSize: "0.82rem",
                  color: COLORS.slate,
                  lineHeight: 1.65,
                }}>
                  {c.style}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: BLOG PREVIEW
      ============================================================ */}
      <section style={{
        backgroundColor: COLORS.navy,
        padding: "6rem 1.5rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <div>
              <div style={{
                fontFamily: FONT.mono,
                fontSize: "0.7rem",
                color: COLORS.red,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "0.5rem",
              }}>
                LATEST FROM THE SITE
              </div>
              <div style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: COLORS.bone,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}>
                THE BREAKDOWN
              </div>
            </div>
            <Link href="/blog" style={{
              fontFamily: FONT.mono,
              fontSize: "0.75rem",
              color: COLORS.bone,
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              opacity: 0.6,
              paddingBottom: "0.25rem",
              borderBottom: `1px solid ${COLORS.slate}`,
            }}>
              ALL POSTS --&gt;
            </Link>
          </div>

          {/* Post cards */}
          <div
            className="blog-preview-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article style={{
                  backgroundColor: COLORS.navyLight,
                  borderTop: `3px solid ${COLORS.red}`,
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}>
                  {/* Category */}
                  <div style={{
                    fontFamily: FONT.mono,
                    fontSize: "0.62rem",
                    color: COLORS.slate,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: "0.85rem",
                  }}>
                    {post.category}
                  </div>
                  {/* Title */}
                  <div style={{
                    fontFamily: FONT.display,
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: COLORS.bone,
                    lineHeight: 1.25,
                    marginBottom: "0.85rem",
                    textTransform: "uppercase",
                  }}>
                    {post.title}
                  </div>
                  {/* Excerpt */}
                  <p style={{
                    fontFamily: FONT.body,
                    fontSize: "0.85rem",
                    color: COLORS.slate,
                    lineHeight: 1.7,
                    flexGrow: 1,
                    marginBottom: "1.25rem",
                  }}>
                    {post.excerpt}
                  </p>
                  {/* Date */}
                  <div style={{
                    fontFamily: FONT.mono,
                    fontSize: "0.68rem",
                    color: COLORS.slate,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    opacity: 0.7,
                  }}>
                    {post.date}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: THE GROUP CHAT
      ============================================================ */}
      <section style={{
        backgroundColor: COLORS.navy,
        borderTop: `1px solid ${COLORS.dark}`,
        padding: "6rem 1.5rem",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {/* Headline */}
          <div style={{
            fontFamily: FONT.display,
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 56px)",
            color: COLORS.bone,
            textTransform: "uppercase",
            letterSpacing: "0.01em",
            lineHeight: 1.05,
            marginBottom: "3rem",
            textAlign: "center",
          }}>
            THE GROUP CHAT<br />NEVER SLEEPS
          </div>

          {/* Chat bubbles */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "3rem",
          }}>
            {chatMessages.map((msg, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
              }}>
                <div style={{
                  backgroundColor: i % 2 === 0 ? "#1C2C45" : "#233352",
                  borderRadius: i % 2 === 0
                    ? "0 16px 16px 16px"
                    : "16px 0 16px 16px",
                  padding: "0.85rem 1.2rem",
                  maxWidth: "70%",
                }}>
                  <span style={{
                    fontFamily: FONT.mono,
                    fontSize: "0.82rem",
                    color: COLORS.bone,
                    lineHeight: 1.5,
                    opacity: 0.9,
                  }}>
                    {msg}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Body + CTA */}
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: FONT.body,
              fontSize: "0.95rem",
              color: COLORS.slate,
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}>
              This site is for those conversations. MMA coverage from dads who actually watch.
            </p>
            <Link href="/blog" style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              backgroundColor: COLORS.red,
              color: COLORS.bone,
              padding: "0.9rem 2rem",
              textDecoration: "none",
              display: "inline-block",
            }}>
              READ THE BLOG
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
