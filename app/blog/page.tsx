import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./data";

export const metadata: Metadata = {
  title: "MMA Blog for Dads | Women's MMA, Fight Night, Training",
  description:
    "All posts from MMA Dads. Women's MMA deep dives, fight night guides, family training tips, fighter profiles, and more from dads who love the sport.",
};

const categories = Array.from(new Set(posts.map((p) => p.category)));

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section style={{
        background: `linear-gradient(180deg, var(--blue) 0%, var(--dark) 100%)`,
        padding: "3.5rem 1.5rem 3rem",
        borderBottom: "2px solid var(--gold)",
        textAlign: "center",
      }}>
        <h1 style={{
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 900,
          marginBottom: "0.75rem",
        }}>
          The MMA Dads Blog
        </h1>
        <p style={{ opacity: 0.7, fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>
          Women's MMA, fight night guides, training for families, fighter profiles, and more. All dad-approved.
        </p>
      </section>

      {/* Category Filter */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "2rem 1.5rem 0",
      }}>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <span key={cat} style={{
              backgroundColor: "rgba(29,52,97,0.6)",
              border: "1px solid rgba(217,119,6,0.3)",
              color: "var(--gold)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.3rem 0.8rem",
              borderRadius: "2px",
            }}>
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "2rem 1.5rem 4rem",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article style={{
                backgroundColor: "var(--blue)",
                border: "1px solid rgba(217,119,6,0.15)",
                borderRadius: "6px",
                padding: "1.75rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderLeft: "3px solid var(--gold)",
              }}>
                <div style={{
                  display: "inline-block",
                  backgroundColor: "rgba(217,119,6,0.12)",
                  color: "var(--gold)",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "2px",
                  marginBottom: "0.9rem",
                  width: "fit-content",
                }}>
                  {post.category}
                </div>
                <h2 style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  color: "var(--cream)",
                  marginBottom: "0.65rem",
                  lineHeight: 1.35,
                }}>
                  {post.title}
                </h2>
                <p style={{
                  fontSize: "0.875rem",
                  opacity: 0.7,
                  lineHeight: 1.65,
                  flexGrow: 1,
                  marginBottom: "1.25rem",
                }}>
                  {post.excerpt}
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.78rem",
                  opacity: 0.55,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "0.9rem",
                }}>
                  <span>{post.date}</span>
                  <span style={{ color: "var(--gold)", opacity: 1, fontWeight: 600 }}>Read →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Affiliate Block */}
      <section style={{
        backgroundColor: "var(--blue)",
        borderTop: "1px solid rgba(217,119,6,0.2)",
        borderBottom: "1px solid rgba(217,119,6,0.2)",
        padding: "3rem 1.5rem",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            MMA Dad Essentials
          </h2>
          <p style={{ opacity: 0.65, fontSize: "0.9rem", marginBottom: "1.75rem" }}>
            Products and services we actually use and recommend.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}>
            {[
              {
                name: "UFC Fight Pass",
                desc: "Every UFC event live, plus the full fight library. Essential for serious fans.",
                href: "https://ufcfightpass.com",
                tag: "mmadads-20",
              },
              {
                name: "Venum Gear",
                desc: "Gloves, pads, bags -- the brand we trust for family training at every level.",
                href: "https://www.venum.com",
                tag: "mmadads-20",
              },
              {
                name: "DraftKings",
                desc: "Legal MMA betting for the states where it's available. Our pick for fight night action.",
                href: "https://www.draftkings.com",
                tag: "mmadads-20",
              },
            ].map((aff) => (
              <a
                key={aff.name}
                href={`${aff.href}?ref=${aff.tag}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  backgroundColor: "rgba(8,10,15,0.4)",
                  border: "1px solid rgba(217,119,6,0.25)",
                  borderRadius: "6px",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}>
                  <div style={{ fontWeight: 800, color: "var(--gold)", fontSize: "1rem" }}>
                    {aff.name}
                  </div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.7, lineHeight: 1.6 }}>
                    {aff.desc}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--gold)", marginTop: "0.25rem", fontWeight: 600 }}>
                    Check it out →
                  </div>
                </div>
              </a>
            ))}
          </div>
          <p style={{ fontSize: "0.72rem", opacity: 0.4, marginTop: "1rem" }}>
            Affiliate links. We earn a commission at no cost to you. We only recommend things we actually use.
          </p>
        </div>
      </section>
    </>
  );
}
