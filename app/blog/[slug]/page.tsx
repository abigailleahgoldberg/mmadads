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

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} style={{
          fontSize: "1.5rem",
          fontWeight: 800,
          color: "var(--cream)",
          marginTop: "2.5rem",
          marginBottom: "0.75rem",
          paddingBottom: "0.4rem",
          borderBottom: "2px solid rgba(217,119,6,0.3)",
        }}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(
        <h3 key={i} style={{
          fontSize: "1.15rem",
          fontWeight: 800,
          color: "var(--cream)",
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
          borderTop: "1px solid rgba(217,119,6,0.3)",
          margin: "2.5rem 0",
        }} />
      );
    } else if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
      // Italic affiliate paragraph
      const inner = line.slice(1, -1);
      elements.push(
        <p key={i} style={{
          fontSize: "0.9rem",
          opacity: 0.75,
          fontStyle: "italic",
          marginTop: "1rem",
          lineHeight: 1.7,
        }}
          dangerouslySetInnerHTML={{ __html: formatInlineLinks(inner) }}
        />
      );
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      // Regular paragraph -- handle inline bold
      elements.push(
        <p key={i} style={{
          fontSize: "1.05rem",
          lineHeight: 1.8,
          color: "rgba(250,250,248,0.88)",
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

function formatInline(text: string): string {
  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--cream);font-weight:700">$1</strong>');
  return text;
}

function formatInlineLinks(text: string): string {
  text = formatInline(text);
  // Markdown links [text](url)
  text = text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--gold);text-decoration:underline">$1</a>'
  );
  return text;
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
        background: `linear-gradient(180deg, var(--blue) 0%, var(--dark) 100%)`,
        padding: "3rem 1.5rem 2.5rem",
        borderBottom: "2px solid var(--gold)",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <Link href="/blog" style={{
              color: "var(--gold)",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
              opacity: 0.85,
            }}>
              ← All Posts
            </Link>
          </div>
          <div style={{
            display: "inline-block",
            backgroundColor: "rgba(217,119,6,0.15)",
            color: "var(--gold)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.3rem 0.75rem",
            borderRadius: "2px",
            marginBottom: "1rem",
          }}>
            {post.category}
          </div>
          <h1 style={{
            fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: "1rem",
            color: "var(--cream)",
          }}>
            {post.title}
          </h1>
          <p style={{
            fontSize: "1.1rem",
            opacity: 0.72,
            lineHeight: 1.65,
            marginBottom: "1.25rem",
          }}>
            {post.excerpt}
          </p>
          <div style={{
            fontSize: "0.82rem",
            opacity: 0.5,
            display: "flex",
            gap: "1.5rem",
          }}>
            <span>Published {post.date}</span>
            <span>MMADads.com</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article style={{
        maxWidth: "780px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}>
        {renderContent(post.content)}
      </article>

      {/* Affiliate Block */}
      <section style={{
        maxWidth: "780px",
        margin: "0 auto",
        padding: "0 1.5rem 3rem",
      }}>
        <div style={{
          backgroundColor: "var(--blue)",
          border: "1px solid rgba(217,119,6,0.3)",
          borderRadius: "6px",
          padding: "2rem",
        }}>
          <h3 style={{
            fontSize: "1rem",
            fontWeight: 800,
            marginBottom: "1.25rem",
            color: "var(--gold)",
          }}>
            MMA Dad Essentials
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
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
                  backgroundColor: "rgba(8,10,15,0.4)",
                  border: "1px solid rgba(217,119,6,0.2)",
                  borderRadius: "4px",
                  padding: "1rem",
                  textDecoration: "none",
                }}
              >
                <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem", fontSize: "0.9rem" }}>
                  {aff.name}
                </div>
                <div style={{ fontSize: "0.8rem", opacity: 0.65, lineHeight: 1.5 }}>
                  {aff.desc}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--gold)", marginTop: "0.5rem", fontWeight: 600 }}>
                  Learn more →
                </div>
              </a>
            ))}
          </div>
          <p style={{ fontSize: "0.7rem", opacity: 0.4, marginTop: "1rem" }}>
            Affiliate links (tag: mmadads-20). We earn a commission at no cost to you.
          </p>
        </div>
      </section>

      {/* Related Posts */}
      {displayRelated.length > 0 && (
        <section style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
        }}>
          <h2 style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            marginBottom: "1.25rem",
            paddingBottom: "0.5rem",
            borderBottom: "2px solid rgba(217,119,6,0.25)",
          }}>
            More from MMA Dads
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {displayRelated.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "1rem",
                  paddingTop: "0.2rem",
                  paddingBottom: "0.2rem",
                }}>
                  <div style={{
                    fontSize: "0.68rem",
                    color: "var(--gold)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.3rem",
                  }}>
                    {related.category}
                  </div>
                  <div style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--cream)",
                    lineHeight: 1.35,
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
