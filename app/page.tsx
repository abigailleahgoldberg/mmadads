"use client";

import Link from "next/link";
import { posts } from "./blog/data";

const latestPosts = posts.slice(0, 6);

const mensChampions = [
  { division: "Heavyweight", weight: "265 lbs", name: "Tom Aspinall", record: "15-3", note: "Promoted to undisputed June 2025 after Jon Jones retired.", slug: "tom-aspinall" },
  { division: "Light Heavyweight", weight: "205 lbs", name: "Alex Pereira", record: "13-3", note: "TKO of Magomed Ankalaev UFC 320 October 2025.", slug: "alex-pereira" },
  { division: "Middleweight", weight: "185 lbs", name: "Khamzat Chimaev", record: "15-0", note: "Unanimous decision over Dricus du Plessis UFC 319 August 2025.", slug: "khamzat-chimaev" },
  { division: "Welterweight", weight: "170 lbs", name: "Islam Makhachev", record: "28-1", note: "Two-division champion. P4P #1. Defeated Jack Della Maddalena UFC 322.", slug: "islam-makhachev" },
  { division: "Lightweight", weight: "155 lbs", name: "Ilia Topuria", record: "17-0", note: "Defeated Charles Oliveira UFC 317 June 2025. Currently on hiatus.", slug: "ilia-topuria" },
  { division: "Lightweight (Interim)", weight: "155 lbs", name: "Justin Gaethje", record: "26-5", note: "Defeated Paddy Pimblett UFC 324 January 2026.", slug: "justin-gaethje" },
  { division: "Featherweight", weight: "145 lbs", name: "Alexander Volkanovski", record: "28-4", note: "Defeated Diego Lopes UFC 325 February 2026.", slug: "alexander-volkanovski" },
  { division: "Bantamweight", weight: "135 lbs", name: "Petr Yan", record: "20-5", note: "Defeated Merab Dvalishvili UFC 323 December 2025.", slug: "petr-yan" },
  { division: "Flyweight", weight: "125 lbs", name: "Joshua Van", record: "16-2", note: "Defeated Alexandre Pantoja UFC 323 December 2025.", slug: "joshua-van" },
];

const womensChampions = [
  { division: "Women's Bantamweight", weight: "135 lbs", name: "Kayla Harrison", record: "19-1", note: "Won UFC 316 June 2025. Two-time Olympic judo gold medallist.", slug: "kayla-harrison" },
  { division: "Women's Flyweight", weight: "125 lbs", name: "Valentina Shevchenko", record: "26-4-1", note: "Two-time champion. Defeated Zhang Weili UFC 322 November 2025.", slug: "valentina-shevchenko" },
  { division: "Women's Strawweight", weight: "115 lbs", name: "Mackenzie Dern", record: "16-5", note: "Unanimous decision over Virna Jandiroba UFC 321 October 2025.", slug: "mackenzie-dern" },
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
        {/* Background octagon */}
        <svg aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-20%, -50%)', width: 'min(90vw, 780px)', height: 'min(90vw, 780px)', opacity: 0.035, pointerEvents: 'none' }} viewBox="0 0 100 100">
          <polygon points="29.3,2 70.7,2 98,29.3 98,70.7 70.7,98 29.3,98 2,70.7 2,29.3" fill="none" stroke="#FF1E1E" strokeWidth="1.2"/>
          <polygon points="32,8 68,8 92,32 92,68 68,92 32,92 8,68 8,32" fill="none" stroke="#FF1E1E" strokeWidth="0.5"/>
          <polygon points="37,15 63,15 85,37 85,63 63,85 37,85 15,63 15,37" fill="none" stroke="#FFB800" strokeWidth="0.3"/>
          <line x1="2" y1="50" x2="98" y2="50" stroke="#FF1E1E" strokeWidth="0.3" strokeDasharray="4,4"/>
          <line x1="50" y1="2" x2="50" y2="98" stroke="#FF1E1E" strokeWidth="0.3" strokeDasharray="4,4"/>
          <circle cx="50" cy="50" r="1.5" fill="#FF1E1E" opacity="0.6"/>
        </svg>

        {/* Top gradient line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #FF1E1E 0%, #FFB800 40%, transparent 80%)', zIndex: 1 }} />

        {/* Bottom glow */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, rgba(255,30,30,0.06), transparent)', pointerEvents: 'none' }} />

        <div className="hero-content-wrap" style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 2rem",
          width: "100%",
          gap: "4rem",
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
              All Fighters. All Belts. All Night.
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
              <span style={{ display: "block", color: "var(--red)" }}>Every</span>
              <span style={{ display: "block", color: "var(--text)" }}>Fighter.</span>
              <span style={{ display: "block", color: "var(--red)" }}>Every</span>
              <span style={{ display: "block", color: "var(--gold)" }}>Belt.</span>
            </h1>

            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "480px",
              marginBottom: "3rem",
            }}>
              Aspinall. Pereira. Chimaev. Harrison. Shevchenko. Dern. All of them. No division left behind.
            </p>

            <div className="hero-cta-row" style={{ display: "flex", gap: "1rem" }}>
              <a href="#mens-champions" style={{
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
                Men&apos;s Champions
              </a>
              <a href="#womens-champions" style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.12em",
                backgroundColor: "#FF2D7A",
                color: "#fff",
                padding: "1rem 2.5rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                textTransform: "uppercase",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}>
                Women&apos;s Champions
              </a>
            </div>
          </div>

          {/* Right — stats snapshot */}
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
              All Divisions Covered
            </div>

            {[
              { label: "Men's Divisions", value: "9", color: "var(--gold)" },
              { label: "Women's Divisions", value: "3", color: "#FF2D7A" },
              { label: "Total Champions", value: "12", color: "var(--text)" },
              { label: "P4P #1", value: "Makhachev", color: "var(--red)" },
            ].map((stat, i) => (
              <div key={stat.label} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.25rem 0",
                borderBottom: i < 3 ? "1px solid var(--border)" : "none",
              }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  {stat.label}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.4rem", color: stat.color, letterSpacing: "0.02em", textTransform: "uppercase" }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATS BAR ====== */}
      <section style={{ background: "linear-gradient(135deg, #0E1118 0%, #080A0F 100%)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "3.5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
          {[
            { val: "12", label: "Divisions", color: "var(--gold)" },
            { val: "ALL", label: "Genders", color: "var(--red)" },
            { val: "WEEKLY", label: "Fight Cards", color: "var(--gold)" },
            { val: "REAL", label: "Coverage", color: "var(--red)" },
          ].map(({ val, label, color }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color, lineHeight: 1, letterSpacing: "-0.01em" }}>{val}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: "0.5rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== MEN'S CHAMPIONS ====== */}
      <section id="mens-champions" style={{ background: "var(--bg)", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>Verified March 2026</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text)", lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.01em", position: "relative", display: "inline-block" }}>
                The Men&apos;s Belts
                <span style={{ position: "absolute", bottom: "-6px", left: 0, width: "60px", height: "3px", background: "var(--red)" }} />
              </h2>
            </div>
            <Link href="/fighters" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              All fighters <span style={{ color: "var(--red)" }}>→</span>
            </Link>
          </div>

          <div className="champion-grid">
            {mensChampions.map((c) => (
              <Link key={c.slug} href={`/fighters/${c.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <div className="card-hover" style={{
                  background: "var(--surface)",
                  borderTop: "3px solid var(--red)",
                  padding: "2rem 1.75rem",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "0.75rem" }}>
                    {c.division} / {c.weight}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.5rem", color: "var(--text)", lineHeight: 1.05, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                    {c.name}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--gold)", marginBottom: "0.75rem", fontWeight: 700 }}>
                    {c.record}
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                    {c.note}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WOMEN'S CHAMPIONS ====== */}
      <section id="womens-champions" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#FF2D7A", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>Verified March 2026</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text)", lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.01em", position: "relative", display: "inline-block" }}>
                The Women&apos;s Belts
                <span style={{ position: "absolute", bottom: "-6px", left: 0, width: "60px", height: "3px", background: "#FF2D7A" }} />
              </h2>
            </div>
            <Link href="/fighters" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              All fighters <span style={{ color: "#FF2D7A" }}>→</span>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {womensChampions.map((c) => (
              <Link key={c.slug} href={`/fighters/${c.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <div className="card-hover" style={{
                  background: "var(--bg)",
                  borderTop: "3px solid #FF2D7A",
                  padding: "2rem 1.75rem",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "#FF2D7A", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "0.75rem" }}>
                    {c.division} / {c.weight}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.5rem", color: "var(--text)", lineHeight: 1.05, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                    {c.name}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--gold)", marginBottom: "0.75rem", fontWeight: 700 }}>
                    {c.record}
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                    {c.note}
                  </p>
                </div>
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

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text)", letterSpacing: "-0.01em", lineHeight: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>
              You passed.
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.7 }}>
              mmadads.com covers MMA the way you watch it. Seriously. With depth.
            </p>
          </div>
        </div>
      </section>

      {/* ====== ARTICLE GRID ====== */}
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
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

      {/* ====== FOOTER ====== */}
      <section style={{
        background: "#050608",
        borderTop: "1px solid var(--border)",
        padding: "4rem 2rem 2rem",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}>
            <div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "2rem",
                color: "var(--red)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}>
                MMADADS.COM
              </div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginTop: "0.5rem",
              }}>
                Every Fighter. Every Belt. Post-Bedtime.
              </div>
            </div>
            <nav style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[
                { label: "Blog", href: "/blog" },
                { label: "Fighters", href: "/fighters" },
                { label: "Events", href: "/events" },
                { label: "About", href: "/contact" },
              ].map(link => (
                <Link key={link.label} href={link.href} style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5rem",
              color: "rgba(240,237,232,0.2)",
              letterSpacing: "0.1em",
            }}>
              2026 MMADADS.COM. Independent. Not affiliated with UFC.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
