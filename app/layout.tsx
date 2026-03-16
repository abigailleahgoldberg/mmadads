import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import NetworkBar from "./components/NetworkBar";
import Link from "next/link";
import { Bebas_Neue, Inter } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

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
  alternates: {
    canonical: 'https://mmadads.com',
  },
};

const FOOTER_SECTIONS = [
  {
    heading: "CONTENT",
    links: [
      { label: "Fighters", href: "/fighters" },
      { label: "Events", href: "/events" },
      { label: "History", href: "/history" },
      { label: "Weight Classes", href: "/weight-classes" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "NETWORK",
    links: [
      { label: "UFC.com", href: "https://www.ufc.com" },
      { label: "MMAMoms.com", href: "https://mmamoms.com" },
      { label: "ESPN MMA", href: "https://www.espn.com/mma/" },
      { label: "Tapology", href: "https://www.tapology.com" },
    ],
  },
  {
    heading: "OUR NETWORK",
    links: [
      { label: "MMAMoms.com", href: "https://mmamoms.com" },
      { label: "TheVoiceOfCash.com", href: "https://thevoiceofcash.com" },
      { label: "WeBearish.com", href: "https://webearish.com" },
      { label: "AISkillsAgents.com", href: "https://aiskillsagents.com" },
      { label: "Full Network →", href: "https://thevoiceofcash.com/network" },
    ],
  },
  {
    heading: "SITE",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MMADADS.COM",
          "url": "https://mmadads.com",
          "description": "Post-bedtime MMA coverage for dads who know every record and watch every prelim."
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "MMADADS.COM",
          "url": "https://mmadads.com"
        }) }} />
      </head>
      <body>
        <NetworkBar />
        <Nav />

        <main>{children}</main>

        {/* FOOTER */}
        <footer style={{
          backgroundColor: "var(--surface)",
          borderTop: "1px solid var(--border)",
          padding: "4rem 1.5rem 2.5rem",
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "3rem" }}>
              <div style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "2rem",
                color: "var(--text)",
                letterSpacing: "0.05em",
                marginBottom: "0.5rem",
                lineHeight: 1,
              }}>
                MMADADS<span style={{ color: "var(--red)" }}>.</span>COM
              </div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--muted)",
              }}>
                MMA coverage for dads who know the sport.
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "2.5rem",
              marginBottom: "3rem",
            }}>
              {FOOTER_SECTIONS.map((section) => (
                <div key={section.heading}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: "1rem",
                  }}>
                    {section.heading}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {section.links.map(({ label, href }) => (
                      <Link key={label} href={href} style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.88rem",
                        color: "var(--muted)",
                        textDecoration: "none",
                      }}>
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              borderTop: "1px solid var(--border)",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--muted)",
              }}>
                &copy; {new Date().getFullYear()} MMADADS.COM. All rights reserved.
              </div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--muted)",
                opacity: 0.6,
              }}>
                Affiliate links may earn a commission.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
