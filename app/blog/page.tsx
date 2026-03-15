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
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        padding: "5rem 1.5rem 3.5rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            <span style={{ color: "var(--text)" }}>BLOG</span>
          </div>

          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--red)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: "0.75rem",
          }}>
            THE BREAKDOWN
          </div>
          <h1 style={{
            fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "var(--text)",
            letterSpacing: "0.02em",
            lineHeight: 0.92,
            marginBottom: "1.5rem",
          }}>
            MMA DADS BLOG
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            maxWidth: "560px",
            marginBottom: "2rem",
          }}>
            Women's MMA, fight night guides, training for families, fighter profiles, and more. All dad-approved.
          </p>

          {/* Categories */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <span key={cat} style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.3rem 0.75rem",
                border: "1px solid var(--border)",
              }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{
        backgroundColor: "var(--surface)",
        padding: "4rem 1.5rem 5rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--muted)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "2rem",
          }}>
            {posts.length} POSTS
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--border)",
          }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article className="card-hover" style={{
                  backgroundColor: "var(--bg)",
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "background-color 0.15s",
                }}
                >
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    color: "var(--red)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: "0.75rem",
                  }}>
                    {post.category}
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                    fontSize: "1.2rem",
                    color: "var(--text)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.15,
                    letterSpacing: "0.02em",
                    fontWeight: 400,
                  }}>
                    {post.title}
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--muted)",
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
                    borderTop: "1px solid var(--border)",
                    paddingTop: "0.85rem",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}>
                      {post.date}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      color: "var(--red)",
                    }}>
                      Read &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Essentials / Affiliate */}
      <section style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "4rem 1.5rem 5rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
            fontSize: "1.75rem",
            color: "var(--text)",
            letterSpacing: "0.04em",
            marginBottom: "0.5rem",
          }}>
            MMA DAD ESSENTIALS
          </div>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "var(--muted)",
            marginBottom: "2rem",
          }}>
            Products and services we actually use and recommend.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--border)",
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
                desc: "Gloves, pads, bags — the brand we trust for family training at every level.",
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
                style={{
                  textDecoration: "none",
                  backgroundColor: "var(--surface)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  transition: "background-color 0.15s",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                  fontSize: "1.1rem",
                  color: "var(--gold)",
                  letterSpacing: "0.04em",
                }}>
                  {aff.name}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  flexGrow: 1,
                }}>
                  {aff.desc}
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--gold)",
                  marginTop: "0.25rem",
                }}>
                  Check it out &rarr;
                </div>
              </a>
            ))}
          </div>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--muted)",
            marginTop: "1rem",
            opacity: 0.6,
          }}>
            Affiliate links. We earn a commission at no cost to you. We only recommend things we actually use.
          </p>
        </div>
      </section>
    </>
  );
}
