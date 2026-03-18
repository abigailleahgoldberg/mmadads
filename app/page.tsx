"use client";

import Link from "next/link";
import { posts } from "./blog/data";

const latestPosts = posts.slice(0, 3);

const champions = [
  { weightClass: "HEAVYWEIGHT", name: "Tom Aspinall", record: "15-3", note: "England's finest. BJJ black belt, fastest HW title win in history.", slug: "tom-aspinall", wins: "W15" },
  { weightClass: "LIGHT HEAVYWEIGHT", name: "Alex Pereira", record: "12-2", note: "Four-weight kickboxing champ. That left hook retires everyone.", slug: "alex-pereira", wins: "W12" },
  { weightClass: "MIDDLEWEIGHT", name: "Khamzat Chimaev", record: "14-0", note: "Undefeated. Physically impossible. Took the belt from Du Plessis.", slug: "khamzat-chimaev", wins: "W14" },
  { weightClass: "WELTERWEIGHT", name: "Islam Makhachev", record: "28-1", note: "Two-division champion. P4P number one. Nobody touches him.", slug: "islam-makhachev", wins: "W28" },
];

const dadChecks = [
  "You know Khabib's record without looking it up",
  "You've explained grappling vs wrestling to your kid at least once",
  "You have a fully formed opinion on judging criteria",
  "You've set a 3am alarm for a card on another continent",
  "Your group chat has a dedicated fight thread",
  "You've argued about P4P rankings with someone who was wrong",
];

export default function HomePage() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section style={{
        backgroundColor: "var(--bg)",
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background octagon — large, centered */}
        <svg aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-20%, -50%)', width: 'min(90vw, 780px)', height: 'min(90vw, 780px)', opacity: 0.035, pointerEvents: 'none' }} viewBox="0 0 100 100">
          <polygon points="29.3,2 70.7,2 98,29.3 98,70.7 70.7,98 29.3,98 2,70.7 2,29.3" fill="none" stroke="#FF1E1E" strokeWidth="1.2"/>
          <polygon points="32,8 68,8 92,32 92,68 68,92 32,92 8,68 8,32" fill="none" stroke="#FF1E1E" strokeWidth="0.5"/>
          <polygon points="37,15 63,15 85,37 85,63 63,85 37,85 15,63 15,37" fill="none" stroke="#FFB800" strokeWidth="0.3"/>
          <line x1="2" y1="50" x2="98" y2="50" stroke="#FF1E1E" strokeWidth="0.3" strokeDasharray="4,4"/>
          <line x1="50" y1="2" x2="50" y2="98" stroke="#FF1E1E" strokeWidth="0.3" strokeDasharray="4,4"/>
          <circle cx="50" cy="50" r="1.5" fill="#FF1E1E" opacity="0.6"/>
        </svg>

        {/* Red gradient slash — top left */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #FF1E1E 0%, #FFB800 40%, transparent 80%)', zIndex: 1 }} />

        {/* Bottom red glow */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, rgba(255,30,30,0.06), transparent)', pointerEvents: 'none' }} />

        <div className="hero-content-wrap" style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 2rem 5rem",
          width: "100%",
          gap: "5rem",
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Left */}
          <div className="hero-left-panel" style={{ flex: "0 0 55%" }}>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--red)",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}>
              <span style={{ display: "inline-block", width: "32px", height: "2px", backgroundColor: "var(--red)" }} />
              Post-Bedtime MMA Coverage
            </div>

            <h1 className="hero-headline" style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(5rem, 12vw, 9rem)",
              lineHeight: 0.88,
              marginBottom: "2.5rem",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}>
              <span style={{ display: "block", color: "var(--text)" }}>THE CARD</span>
              <span style={{ display: "block", color: "rgba(240,237,232,0.3)", fontWeight: 600 }}>STARTS AT</span>
              <span style={{ display: "block", color: "var(--red)", WebkitTextStroke: "1px var(--red)" }}>10PM.</span>
            </h1>

            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "440px",
              marginBottom: "3rem",
            }}>
              Kids are in bed. Snacks are ready. The group chat is firing. This is MMA for the dads who know every record and watch every prelim.
            </p>

            <div className="hero-cta-row" style={{ display: "flex", gap: "1rem" }}>
              <Link href="/fighters" style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.12em",
                backgroundColor: "var(--red)",
                color: "#fff",
                padding: "1rem 2.5rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                textTransform: "uppercase",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}>
                Browse Fighters
              </Link>
              <Link href="/blog" style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.12em",
                backgroundColor: "transparent",
                color: "var(--text)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "1rem 2.5rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                textTransform: "uppercase",
              }}>
                Read The Blog
              </Link>
            </div>
          </div>

          {/* Right — fight card panel */}
          <div className="hero-right-panel" style={{
            flex: "0 0 38%",
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderTop: "3px solid var(--red)",
            padding: "2.5rem",
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              color: "var(--red)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "var(--red)", display: "inline-block", animation: "pulse 2s infinite" }} />
              Next Fight Card
            </div>

            {[
              { slot: "Main Event", weight: "Heavyweight", bout: "TBD vs TBD" },
              { slot: "Co-Main", weight: "Light Heavyweight", bout: "TBD vs TBD" },
              { slot: "Prelims", weight: "Multiple Bouts", bout: "TBD" },
            ].map(({ slot, weight, bout }, i) => (
              <div key={slot}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: `${i === 0 ? "0" : "1.5rem"} 0 1.5rem`,
                }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.35rem" }}>{weight}</div>
                    <div style={{ fontFamily: "var(--font-teko)", fontSize: "1rem", color: "rgba(240,237,232,0.5)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>{slot}</div>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", textAlign: "right", letterSpacing: "0.03em", textTransform: "uppercase" }}>
                    {bout}
                  </div>
                </div>
                {i < 2 && <div style={{ height: "1px", backgroundColor: "var(--border)" }} />}
              </div>
            ))}

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
              <Link href="/events" style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--muted)",
                letterSpacing: "0.08em",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}>
                Full event schedule <span style={{ color: "var(--red)" }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section style={{ background: "linear-gradient(135deg, #0E1118 0%, #080A0F 100%)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "3.5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
          {[
            { val: "20+", label: "Fighter Profiles" },
            { val: "14+", label: "In-Depth Posts" },
            { val: "9", label: "Weight Classes" },
            { val: "10PM", label: "Card Start Time" },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--text)", lineHeight: 1, letterSpacing: "-0.01em" }}>{val}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: "0.5rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== CHAMPIONS ====== */}
      <section style={{ background: "var(--bg)", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>As of Early 2026</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text)", lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.01em" }}>Current Champions</h2>
            </div>
            <Link href="/fighters" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              All fighters <span style={{ color: "var(--red)" }}>→</span>
            </Link>
          </div>

          <div className="champion-grid">
            {champions.map((c) => (
              <Link key={c.slug} href={`/fighters/${c.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <div className="card-hover" style={{
                  background: "var(--surface)",
                  borderTop: "3px solid var(--gold)",
                  padding: "2rem 1.75rem",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Ghost record */}
                  <div style={{ position: "absolute", top: "1rem", right: "1.25rem", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "3.5rem", color: "rgba(255,184,0,0.06)", lineHeight: 1, letterSpacing: "-0.02em", userSelect: "none" }}>{c.wins}</div>

                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "1rem" }}>
                    UFC Champion — {c.weightClass}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.7rem", color: "var(--text)", lineHeight: 1, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                    {c.name}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--red)", marginBottom: "1rem", fontWeight: 700 }}>
                    {c.record}
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.825rem", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
                    {c.note}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BLOG ====== */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--red)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>Latest From the Site</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text)", lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.01em" }}>The Breakdown</h2>
            </div>
            <Link href="/blog" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              All posts <span style={{ color: "var(--red)" }}>→</span>
            </Link>
          </div>

          <div className="blog-preview-grid">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <article className="card-hover" style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderTop: "3px solid var(--red)",
                  padding: "2rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--red)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.85rem" }}>
                    {post.category}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", color: "var(--text)", lineHeight: 1.1, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "-0.005em" }}>
                    {post.title}
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.75, flexGrow: 1, marginBottom: "1.5rem" }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{post.date}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--red)" }}>Read →</div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== DAD TEST ====== */}
      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--red)", textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: "1.25rem" }}>
            Are You One of Us?
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(3rem, 8vw, 6.5rem)", color: "var(--text)", lineHeight: 0.88, letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: "4rem" }}>
            The Dad<br /><span style={{ color: "var(--red)" }}>Test.</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "4rem" }}>
            {dadChecks.map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.25rem",
                padding: "1.25rem 1.5rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--red)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.2rem", color: "var(--red)", lineHeight: 1, minWidth: "1.5rem" }}>{String(i + 1).padStart(2, "0")}</div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text)", letterSpacing: "-0.01em", lineHeight: 1, textTransform: "uppercase", marginBottom: "0.75rem" }}>
                You Belong Here.
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: "400px" }}>
                mmadads.com covers MMA the way you watch it. Seriously. With depth.
              </p>
            </div>
            <Link href="/fighters" style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "0.12em",
              backgroundColor: "var(--red)",
              color: "#fff",
              padding: "1rem 2.5rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              textTransform: "uppercase",
              alignSelf: "center",
              clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            }}>
              Explore the Site
            </Link>
          </div>
        </div>
      </section>

      {/* ====== NEWSLETTER ====== */}
      <section style={{ background: "linear-gradient(135deg, var(--surface) 0%, #0A0204 100%)", borderTop: "1px solid var(--border)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text)", lineHeight: 0.9, letterSpacing: "-0.01em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            Fight Night<br /><span style={{ color: "var(--red)" }}>Notes.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            Post-fight breakdowns, fighter profiles, dad-approved takes. No spam. Just MMA.
          </p>
          <form style={{ display: "flex", maxWidth: "440px", margin: "0 auto" }} onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: "1rem 1.25rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRight: "none",
                color: "var(--text)",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                outline: "none",
              }}
            />
            <button type="submit" style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "0.95rem",
              letterSpacing: "0.1em",
              backgroundColor: "var(--red)",
              color: "#fff",
              border: "none",
              padding: "1rem 1.75rem",
              cursor: "pointer",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
            }}>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
