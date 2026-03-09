import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "MMADADS.COM | Post-Bedtime MMA Coverage",
    template: "%s | MMADADS",
  },
  description:
    "The card starts at 10pm. Kids are in bed. This is MMA coverage for dads who know every record and watch every prelim.",
  metadataBase: new URL("https://mmadads.com"),
  openGraph: {
    siteName: "MMADADS.COM",
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
        {/* NAV */}
        <header style={{
          backgroundColor: "#080E18",
          borderBottom: "3px solid #D42B2B",
          padding: "0 1.5rem",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}>
          <nav style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}>
            <Link href="/" style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#EEE8DC",
              textDecoration: "none",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}>
              MMADADS.COM
            </Link>
            <div
              className="nav-links"
              style={{ display: "flex", gap: "2rem", alignItems: "center" }}
            >
              {[
                { label: "FIGHT CARD", href: "/blog" },
                { label: "BREAKDOWN", href: "/blog" },
                { label: "BLOG", href: "/blog" },
                { label: "PICKS", href: "/blog" },
              ].map(({ label, href }) => (
                <Link key={label} href={href} style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: "0.78rem",
                  color: "#4A5568",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}>
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* FOOTER */}
        <footer style={{
          backgroundColor: "#080E18",
          borderTop: "1px solid rgba(238,232,220,0.1)",
          padding: "3rem 1.5rem 2rem",
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}>
            <div style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "1.6rem",
              color: "#EEE8DC",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}>
              MMADADS.COM
            </div>
            <div style={{
              fontFamily: "'Merriweather', serif",
              fontSize: "0.9rem",
              color: "#4A5568",
              marginBottom: "2rem",
            }}>
              MMA coverage for dads who know the sport.
            </div>

            <div
              className="footer-links-row"
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
                marginBottom: "2rem",
              }}
            >
              {[
                { label: "BLOG", href: "/blog" },
                { label: "FIGHT CARD", href: "/blog" },
                { label: "PICKS", href: "/blog" },
                { label: "BREAKDOWN", href: "/blog" },
              ].map(({ label, href }) => (
                <Link key={label} href={href} style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.75rem",
                  color: "#4A5568",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}>
                  {label}
                </Link>
              ))}
            </div>

            <div style={{
              borderTop: "1px solid rgba(74,85,104,0.3)",
              paddingTop: "1.5rem",
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.72rem",
              color: "#4A5568",
            }}>
              &copy; {new Date().getFullYear()} MMADADS.COM. All rights reserved. Affiliate links may earn a commission.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
