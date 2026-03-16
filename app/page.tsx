"use client";

import Link from "next/link";
import { posts } from "./blog/data";

const latestPosts = posts.slice(0, 3);

const champions = [
  {
    weightClass: "HEAVYWEIGHT",
    name: "Tom Aspinall",
    record: "15-3",
    style: "England's heavyweight champion. Elite boxing, BJJ black belt, fastest heavyweight title win in history. Promoted from interim when Jon Jones retired June 2025.",
    slug: "tom-aspinall",
  },
  {
    weightClass: "LIGHT HEAVYWEIGHT",
    name: "Alex Pereira",
    record: "12-2",
    style: "Four-weight kickboxing champion turned UFC destroyer. Left hook finishes everyone. Beat Ankalaev at UFC 320.",
    slug: "alex-pereira",
  },
  {
    weightClass: "MIDDLEWEIGHT",
    name: "Khamzat Chimaev",
    record: "14-0",
    style: "Undefeated. Physically dominant. Beat Dricus Du Plessis at UFC 319 in August 2025 to claim the belt.",
    slug: "khamzat-chimaev",
  },
  {
    weightClass: "WELTERWEIGHT",
    name: "Islam Makhachev",
    record: "28-1",
    style: "Two-division champion. Won the welterweight title at UFC 322 in November 2025. The pound-for-pound best in the world.",
    slug: "islam-makhachev",
  },
];

const stats = [
  { value: "20+", label: "Fighter Profiles" },
  { value: "14", label: "In-Depth Posts" },
  { value: "9", label: "Weight Classes Covered" },
  { value: "10PM", label: "When the Card Starts" },
];

export default function HomePage() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section style={{
        backgroundColor: "var(--bg)",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Top accent line */}
        <div style={{
          height: "3px",
          background: "linear-gradient(90deg, var(--red) 0%, transparent 100%)",
          width: "100%",
        }} />

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
            gap: "4rem",
          }}
        >
          {/* Left panel */}
          <div className="hero-left-panel" style={{ flex: "0 0 58%" }}>
            {/* Eyebrow */}
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--red)",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              marginBottom: "1.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}>
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--red)",
              }} />
              POST-BEDTIME MMA COVERAGE
            </div>

            {/* Headline */}
            <h1
              className="hero-headline"
              style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "clamp(72px, 11vw, 130px)",
                lineHeight: 0.9,
                marginBottom: "2rem",
                letterSpacing: "0.01em",
              }}
            >
              <span style={{ display: "block", color: "var(--text)" }}>THE CARD</span>
              <span style={{ display: "block", color: "var(--muted)" }}>STARTS AT</span>
              <span style={{ display: "block", color: "var(--red)" }}>10PM.</span>
            </h1>

            {/* Body */}
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}>
              Kids are in bed. Snacks are ready. The group chat is firing. This is MMA for the dads who know every record and watch every prelim.
            </p>

            {/* CTAs */}
            <div className="hero-cta-row" style={{ display: "flex", gap: "1rem" }}>
              <Link href="/fighters" style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                backgroundColor: "var(--red)",
                color: "var(--text)",
                padding: "0.85rem 2rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                minHeight: "44px",
              }}>
                BROWSE FIGHTERS
              </Link>
              <Link href="/blog" style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                backgroundColor: "transparent",
                color: "var(--text)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "0.85rem 2rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                minHeight: "44px",
              }}>
                READ THE BLOG
              </Link>
            </div>
          </div>

          {/* Right panel — next event callout */}
          <div
            className="hero-right-panel"
            style={{
              flex: "0 0 36%",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "2rem",
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--red)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--red)",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }} />
              FIGHT CARD
            </div>

            {[
              { slot: "MAIN EVENT", weight: "HEAVYWEIGHT", bout: "TBD vs TBD" },
              { slot: "CO-MAIN EVENT", weight: "LIGHT HEAVYWEIGHT", bout: "TBD vs TBD" },
              { slot: "PRELIMS", weight: "MULTIPLE BOUTS", bout: "TBD vs TBD" },
            ].map(({ slot, weight, bout }, i) => (
              <div key={slot}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: `${i === 0 ? "0" : "1.25rem"} 0 1.25rem`,
                }}>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.3rem",
                    }}>
                      {weight}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}>
                      {slot}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                    fontSize: "1rem",
                    color: "var(--text)",
                    textAlign: "right",
                    letterSpacing: "0.03em",
                  }}>
                    {bout}
                  </div>
                </div>
                {i < 2 && <div style={{ height: "1px", backgroundColor: "var(--border)" }} />}
              </div>
            ))}

            <div style={{ marginTop: "2rem" }}>
              <Link href="/events" style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--muted)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                minHeight: "44px",
              }}>
                Full event schedule
                <span style={{ color: "var(--red)" }}>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "3rem 1.5rem",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}>
          {stats.map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--text)",
                lineHeight: 1,
                marginBottom: "0.4rem",
                letterSpacing: "0.02em",
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== CURRENT CHAMPIONS ====== */}
      <section style={{
        backgroundColor: "var(--bg)",
        padding: "6rem 1.5rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--gold)",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                marginBottom: "0.5rem",
              }}>
                AS OF EARLY 2026
              </div>
              <div style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--text)",
                letterSpacing: "0.03em",
                lineHeight: 1,
              }}>
                CURRENT CHAMPIONS
              </div>
            </div>
            <Link href="/fighters" style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              minHeight: "44px",
            }}>
              All fighters <span style={{ color: "var(--red)" }}>&rarr;</span>
            </Link>
          </div>

          <div className="champion-grid">
            {champions.map((c) => (
              <Link key={c.weightClass} href={`/fighters/${c.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  backgroundColor: "var(--surface)",
                  borderTop: "2px solid var(--gold)",
                  padding: "1.75rem 1.5rem",
                  height: "100%",
                  cursor: "pointer",
                  transition: "background-color 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--surface-elevated)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--surface)")}
                >
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "0.85rem",
                  }}>
                    UFC CHAMPION — {c.weightClass}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                    fontSize: "1.5rem",
                    color: "var(--text)",
                    lineHeight: 1.05,
                    marginBottom: "0.5rem",
                    letterSpacing: "0.03em",
                  }}>
                    {c.name}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--red)",
                    marginBottom: "0.85rem",
                    letterSpacing: "0.04em",
                    fontWeight: 500,
                  }}>
                    {c.record}
                  </div>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {c.style}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LATEST BLOG POSTS ====== */}
      <section style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
        padding: "6rem 1.5rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--red)",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                marginBottom: "0.5rem",
              }}>
                LATEST FROM THE SITE
              </div>
              <div style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--text)",
                letterSpacing: "0.03em",
                lineHeight: 1,
              }}>
                THE BREAKDOWN
              </div>
            </div>
            <Link href="/blog" style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              minHeight: "44px",
            }}>
              All posts <span style={{ color: "var(--red)" }}>&rarr;</span>
            </Link>
          </div>

          <div className="blog-preview-grid">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article style={{
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderTop: "2px solid var(--red)",
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "border-color 0.15s, background-color 0.15s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface-elevated)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(239,68,68,0.5)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    color: "var(--red)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: "0.85rem",
                  }}>
                    {post.category}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                    fontSize: "1.25rem",
                    color: "var(--text)",
                    lineHeight: 1.15,
                    marginBottom: "0.85rem",
                    letterSpacing: "0.02em",
                  }}>
                    {post.title}
                  </div>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    flexGrow: 1,
                    marginBottom: "1.25rem",
                  }}>
                    {post.excerpt}
                  </p>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid var(--border)",
                    paddingTop: "0.85rem",
                  }}>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}>
                      {post.date}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--red)",
                      letterSpacing: "0.04em",
                    }}>
                      Read &rarr;
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== DAD TEST ====== */}
      <section style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "6rem 1.5rem",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--red)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: "1rem",
          }}>
            ARE YOU ONE OF US?
          </div>
          <div style={{
            fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "var(--text)",
            lineHeight: 0.92,
            letterSpacing: "0.02em",
            marginBottom: "3rem",
          }}>
            THE DAD TEST
          </div>

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
                padding: "1rem 1.25rem",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}>
                <div style={{
                  width: "20px",
                  height: "20px",
                  minWidth: "20px",
                  backgroundColor: "var(--red)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "1px",
                }}>
                  <span style={{
                    color: "var(--text)",
                    fontSize: "12px",
                    fontWeight: 700,
                    fontFamily: "var(--font-mono)",
                    lineHeight: 1,
                  }}>
                    X
                  </span>
                </div>
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  color: "var(--text)",
                  lineHeight: 1.5,
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "2.5rem",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--text)",
                letterSpacing: "0.02em",
                marginBottom: "0.5rem",
                lineHeight: 1,
              }}>
                YOU BELONG HERE.
              </div>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--muted)",
                lineHeight: 1.7,
                maxWidth: "420px",
              }}>
                mmadads.com covers MMA the way you watch it. Seriously, with depth.
              </p>
            </div>
            <Link href="/fighters" style={{
              fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              backgroundColor: "var(--red)",
              color: "var(--text)",
              padding: "0.85rem 2rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              minHeight: "44px",
              alignSelf: "center",
            }}>
              EXPLORE THE SITE
            </Link>
          </div>
        </div>
      </section>

      {/* ====== NEWSLETTER ====== */}
      <section style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
        padding: "5rem 1.5rem",
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            color: "var(--text)",
            letterSpacing: "0.03em",
            marginBottom: "0.75rem",
            lineHeight: 1,
          }}>
            FIGHT NIGHT NOTES
          </div>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}>
            Post-fight breakdowns, fighter profiles, and dad-approved takes. No spam. Just MMA.
          </p>
          <form style={{
            display: "flex",
            gap: "0",
            maxWidth: "480px",
            margin: "0 auto",
          }}
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: "0.85rem 1.25rem",
                backgroundColor: "var(--bg)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRight: "none",
                color: "var(--text)",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                outline: "none",
                minHeight: "44px",
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "1rem",
                letterSpacing: "0.08em",
                backgroundColor: "var(--red)",
                color: "var(--text)",
                border: "none",
                padding: "0.85rem 1.5rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                minHeight: "44px",
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
