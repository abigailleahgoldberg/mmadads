import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./blog/data";
import EmailSignup from "./components/EmailSignup";

export const metadata: Metadata = {
  title: "MMA Dads | Women's MMA Is Must-Watch TV",
  description:
    "For dads who love MMA and want to share the sport with their families. Women's MMA coverage, fight night guides, family training tips, and real talk about the best sport in the world.",
};

const featuredSlugs = [
  "womens-mma-stars-daughters-should-know",
  "dads-guide-watching-ufc-family",
  "amanda-nunes-greatest-of-all-time-case",
];

const featuredPosts = featuredSlugs
  .map((slug) => posts.find((p) => p.slug === slug))
  .filter(Boolean);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, var(--dark) 0%, var(--blue) 60%, #0f1f3d 100%)`,
        borderBottom: "3px solid var(--gold)",
        padding: "5rem 1.5rem 4rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, rgba(217,119,6,0.03) 0px, rgba(217,119,6,0.03) 1px, transparent 1px, transparent 40px)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative" }}>
          <div style={{
            display: "inline-block",
            backgroundColor: "var(--red)",
            color: "var(--cream)",
            fontSize: "0.75rem",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.35rem 1rem",
            borderRadius: "2px",
            marginBottom: "1.5rem",
          }}>
            For Dads Who Get It
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            color: "var(--cream)",
          }}>
            MMA Dads Know:{" "}
            <span style={{ color: "var(--gold)" }}>
              Women's MMA Is Must-Watch TV
            </span>
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            opacity: 0.85,
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: "660px",
            margin: "0 auto 2.5rem",
          }}>
            Dad-approved coverage of the greatest sport on earth. Fight night guides, family-friendly MMA, women's division deep dives, and real talk from dads who can't stop watching.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/blog" style={{
              backgroundColor: "var(--gold)",
              color: "var(--dark)",
              padding: "0.85rem 2rem",
              borderRadius: "4px",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}>
              Read the Blog
            </Link>
            <Link href="/blog/womens-mma-stars-daughters-should-know" style={{
              backgroundColor: "transparent",
              color: "var(--cream)",
              padding: "0.85rem 2rem",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              border: "2px solid rgba(250,250,248,0.35)",
            }}>
              Women's MMA Fighters
            </Link>
          </div>
        </div>
      </section>

      {/* Why Women's MMA Banner */}
      <section style={{
        backgroundColor: "var(--blue)",
        padding: "2rem 1.5rem",
        borderBottom: "1px solid rgba(217,119,6,0.3)",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          <div style={{
            width: "3px",
            height: "40px",
            backgroundColor: "var(--gold)",
            flexShrink: 0,
          }} />
          <p style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            opacity: 0.9,
            maxWidth: "700px",
            textAlign: "center",
          }}>
            Women's MMA is the most underrated product in all of combat sports. Once you actually watch it, you'll never go back.
          </p>
          <div style={{
            width: "3px",
            height: "40px",
            backgroundColor: "var(--gold)",
            flexShrink: 0,
          }} />
        </div>
      </section>

      {/* Featured Posts */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            marginBottom: "0.5rem",
          }}>
            Start Here
          </h2>
          <p style={{ opacity: 0.65, fontSize: "1rem" }}>
            The posts every MMA dad should read first.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {featuredPosts.map((post) => {
            if (!post) return null;
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article style={{
                  backgroundColor: "var(--blue)",
                  border: "1px solid rgba(217,119,6,0.2)",
                  borderRadius: "6px",
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "pointer",
                }}>
                  <div style={{
                    display: "inline-block",
                    backgroundColor: "rgba(217,119,6,0.15)",
                    color: "var(--gold)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "2px",
                    marginBottom: "1rem",
                    width: "fit-content",
                  }}>
                    {post.category}
                  </div>
                  <h3 style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "var(--cream)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    fontSize: "0.9rem",
                    opacity: 0.75,
                    lineHeight: 1.6,
                    flexGrow: 1,
                    marginBottom: "1.25rem",
                  }}>
                    {post.excerpt}
                  </p>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.8rem",
                    opacity: 0.6,
                  }}>
                    <span>{post.date}</span>
                    <span style={{ color: "var(--gold)", fontWeight: 600 }}>Read more →</span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/blog" style={{
            color: "var(--gold)",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            border: "2px solid var(--gold)",
            padding: "0.75rem 2rem",
            borderRadius: "4px",
            display: "inline-block",
          }}>
            View All Posts →
          </Link>
        </div>
      </section>

      {/* Stats / Values Section */}
      <section style={{
        backgroundColor: "var(--blue)",
        padding: "4rem 1.5rem",
        borderTop: "1px solid rgba(217,119,6,0.2)",
        borderBottom: "1px solid rgba(217,119,6,0.2)",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2.5rem",
          textAlign: "center",
        }}>
          {[
            { num: "15", label: "In-depth posts" },
            { num: "Women's", label: "MMA focus" },
            { num: "Zero", label: "Fluff content" },
            { num: "Dad", label: "Approved" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                color: "var(--gold)",
                marginBottom: "0.35rem",
              }}>
                {num}
              </div>
              <div style={{ fontSize: "0.95rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />

      {/* Recent Posts Grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>
          More From the Blog
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {posts
            .filter((p) => !featuredSlugs.includes(p.slug))
            .slice(0, 6)
            .map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article style={{
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "1rem",
                  paddingBottom: "0.5rem",
                }}>
                  <div style={{
                    fontSize: "0.7rem",
                    color: "var(--gold)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.4rem",
                  }}>
                    {post.category}
                  </div>
                  <h3 style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--cream)",
                    lineHeight: 1.35,
                    marginBottom: "0.4rem",
                  }}>
                    {post.title}
                  </h3>
                  <span style={{ fontSize: "0.75rem", opacity: 0.5 }}>{post.date}</span>
                </article>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
