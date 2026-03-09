import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "MMA Dads | Women's MMA, Fight Night, Family MMA Culture",
    template: "%s | MMA Dads",
  },
  description:
    "For dads who love MMA and want to share the sport with their families. Women's MMA coverage, fight night guides, training tips, and more.",
  metadataBase: new URL("https://mmadads.com"),
  openGraph: {
    siteName: "MMA Dads",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor: "var(--dark)",
          borderBottom: "2px solid var(--gold)",
          padding: "0 1.5rem",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}>
          <nav style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}>
            <Link href="/" style={{
              color: "var(--cream)",
              fontSize: "1.4rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              textDecoration: "none",
            }}>
              MMA<span style={{ color: "var(--gold)" }}>Dads</span>
            </Link>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <Link href="/blog" style={{
                color: "var(--cream)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                opacity: 0.85,
              }}>
                Blog
              </Link>
              <Link href="/blog/womens-mma-stars-daughters-should-know" style={{
                color: "var(--cream)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                opacity: 0.85,
              }}>
                Women's MMA
              </Link>
              <Link href="/blog/dads-guide-watching-ufc-family" style={{
                color: "var(--cream)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                opacity: 0.85,
              }}>
                Family Night
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{
          backgroundColor: "var(--blue)",
          borderTop: "2px solid var(--gold)",
          padding: "3rem 1.5rem",
          marginTop: "4rem",
        }}>
          <div style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
          }}>
            <div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                MMA<span style={{ color: "var(--gold)" }}>Dads</span>
              </div>
              <p style={{ fontSize: "0.9rem", opacity: 0.8, lineHeight: 1.7 }}>
                Built by dads who love the sport. Women's MMA is criminally underrated -- we're fixing that.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: "0.75rem", color: "var(--gold)" }}>Quick Links</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <Link href="/blog" style={{ color: "var(--cream)", opacity: 0.8, fontSize: "0.9rem" }}>All Posts</Link>
                <Link href="/blog/womens-mma-stars-daughters-should-know" style={{ color: "var(--cream)", opacity: 0.8, fontSize: "0.9rem" }}>Women's MMA</Link>
                <Link href="/blog/dads-guide-watching-ufc-family" style={{ color: "var(--cream)", opacity: 0.8, fontSize: "0.9rem" }}>Family Guide</Link>
                <Link href="/blog/ufc-fight-night-party-guide-dads" style={{ color: "var(--cream)", opacity: 0.8, fontSize: "0.9rem" }}>Fight Night</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: "0.75rem", color: "var(--gold)" }}>Affiliate Partners</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <a href="https://ufcfightpass.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cream)", opacity: 0.8, fontSize: "0.9rem" }}>UFC Fight Pass</a>
                <a href="https://www.venum.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cream)", opacity: 0.8, fontSize: "0.9rem" }}>Venum Gear</a>
                <a href="https://www.draftkings.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cream)", opacity: 0.8, fontSize: "0.9rem" }}>DraftKings</a>
              </div>
            </div>
          </div>
          <div style={{
            maxWidth: "1100px",
            margin: "2rem auto 0",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(250,250,248,0.15)",
            fontSize: "0.8rem",
            opacity: 0.6,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}>
            <span>© {new Date().getFullYear()} MMADads.com. All rights reserved.</span>
            <span>Affiliate links may earn us a commission at no cost to you.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
