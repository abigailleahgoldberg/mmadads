import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatInline(text: string): string {
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text);font-weight:700">$1</strong>');
  return text;
}

function formatInlineLinks(text: string): string {
  text = formatInline(text);
  text = text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--gold);text-decoration:underline">$1</a>'
  );
  return text;
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} style={{
          fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
          fontSize: "1.75rem",
          color: "var(--text)",
          letterSpacing: "0.04em",
          marginTop: "3rem",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid var(--border)",
        }}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(
        <h3 key={i} style={{
          fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
          fontSize: "1.2rem",
          color: "var(--text)",
          letterSpacing: "0.04em",
          marginTop: "2rem",
          marginBottom: "0.6rem",
        }}>
          {line.slice(2, -2)}
        </h3>
      );
    } else if (line.startsWith("---")) {
      elements.push(
        <hr key={i} style={{
          border: "none",
          borderTop: "1px solid var(--border)",
          margin: "3rem 0",
        }} />
      );
    } else if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
      const inner = line.slice(1, -1);
      elements.push(
        <p key={i} style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          color: "var(--muted)",
          fontStyle: "italic",
          marginTop: "1rem",
          lineHeight: 1.7,
        }}
          dangerouslySetInnerHTML={{ __html: formatInlineLinks(inner) }}
        />
      );
    } else if (line.trim() === "") {
      // skip blank
    } else {
      elements.push(
        <p key={i} style={{
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          lineHeight: 1.85,
          color: "var(--muted)",
          marginBottom: "0",
        }}
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const otherPosts = posts
    .filter((p) => p.slug !== slug && !relatedPosts.includes(p))
    .slice(0, 3 - relatedPosts.length);

  const displayRelated = [...relatedPosts, ...otherPosts].slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        padding: "4rem 1.5rem 3.5rem",
      }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {/* Breadcrumb */}
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
            <Link href="/blog" style={{ color: "var(--muted)", textDecoration: "none" }}>BLOG</Link>
            <span>/</span>
            <span style={{ color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {post.title.slice(0, 40)}{post.title.length > 40 ? "..." : ""}
            </span>
          </div>

          {/* Category tag */}
          <div style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            color: "var(--red)",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            border: "1px solid rgba(239,68,68,0.3)",
            padding: "0.25rem 0.65rem",
            marginBottom: "1.25rem",
          }}>
            {post.category}
          </div>

          <h1 style={{
            fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--text)",
            letterSpacing: "0.02em",
            lineHeight: 1.0,
            marginBottom: "1.25rem",
          }}>
            {post.title}
          </h1>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
          }}>
            {post.excerpt}
          </p>

          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--muted)",
            display: "flex",
            gap: "1.5rem",
            opacity: 0.7,
          }}>
            <span>Published {post.date}</span>
            <span>MMADads.com</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="card-hover" style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "3.5rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.35rem",
      }}>
        {renderContent(post.content)}
      </article>

      {/* Affiliate block */}
      <section style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "0 1.5rem 3.5rem",
      }}>
        <div style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          padding: "2rem",
        }}>
          <div style={{
            fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
            fontSize: "1.2rem",
            color: "var(--gold)",
            letterSpacing: "0.05em",
            marginBottom: "1.5rem",
          }}>
            MMA DAD ESSENTIALS
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--border)",
          }}>
            {[
              { name: "UFC Fight Pass", desc: "Every event live + full fight library.", href: "https://ufcfightpass.com" },
              { name: "Venum Gear", desc: "Gloves, pads, bags we trust for training.", href: "https://www.venum.com" },
              { name: "DraftKings", desc: "Legal MMA betting, fight night extras.", href: "https://www.draftkings.com" },
            ].map((aff) => (
              <a
                key={aff.name}
                href={`${aff.href}?ref=mmadads-20`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  backgroundColor: "var(--bg)",
                  padding: "1.25rem",
                  textDecoration: "none",
                  transition: "background-color 0.15s",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                  fontSize: "1rem",
                  color: "var(--text)",
                  letterSpacing: "0.04em",
                  marginBottom: "0.3rem",
                }}>
                  {aff.name}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "var(--muted)",
                  lineHeight: 1.5,
                  marginBottom: "0.5rem",
                }}>
                  {aff.desc}
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--gold)",
                }}>
                  Learn more &rarr;
                </div>
              </a>
            ))}
          </div>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            color: "var(--muted)",
            marginTop: "1rem",
            opacity: 0.5,
          }}>
            Affiliate links (tag: mmadads-20). We earn a commission at no cost to you.
          </p>
        </div>
      </section>

      {/* Related Posts */}
      {displayRelated.length > 0 && (
        <section style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 1.5rem 5rem",
        }}>
          <div style={{
            fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
            fontSize: "1.4rem",
            color: "var(--text)",
            letterSpacing: "0.05em",
            marginBottom: "1.5rem",
            paddingBottom: "0.75rem",
            borderBottom: "1px solid var(--border)",
          }}>
            MORE FROM MMA DADS
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--border)" }}>
            {displayRelated.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div className="related-card" style={{
                  padding: "1.25rem 1.5rem",
                  transition: "border-color 0.15s, background-color 0.15s",
                  minHeight: "44px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                >
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    color: "var(--red)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.35rem",
                  }}>
                    {related.category}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                    fontSize: "1rem",
                    color: "var(--text)",
                    letterSpacing: "0.03em",
                    lineHeight: 1.15,
                  }}>
                    {related.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
