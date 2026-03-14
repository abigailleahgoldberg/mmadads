import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { events, getEventBySlug } from "../../data/events";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  const mainEvent = event.mainCard.find((f) => f.isMainEvent);
  return {
    title: `${event.name} — Fight Card & Results`,
    description: mainEvent
      ? `${event.name} — ${mainEvent.fighter1} vs ${mainEvent.fighter2}. ${event.completed ? "Full results." : "Upcoming " + event.date + "."} ${event.venue}, ${event.location}.`
      : `${event.name} fight card, ${event.location}, ${event.date}.`,
  };
}

const COLORS = {
  dark: "#080E18",
  navy: "#0F1C2E",
  navyLight: "#141F30",
  red: "#D42B2B",
  slate: "#4A5568",
  bone: "#EEE8DC",
  gold: "#E8A020",
};

const FONT = {
  display: "'Oswald', sans-serif",
  body: "'Merriweather', Georgia, serif",
  mono: "'Roboto Mono', monospace",
};

function typeBadge(type: string) {
  const map: Record<string, { label: string; color: string }> = {
    ppv: { label: "PPV", color: COLORS.gold },
    "fight-night": { label: "FIGHT NIGHT", color: COLORS.red },
    apex: { label: "APEX", color: COLORS.slate },
  };
  return map[type] ?? { label: type.toUpperCase(), color: COLORS.slate };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const badge = typeBadge(event.type);
  const mainEvent = event.mainCard.find((f) => f.isMainEvent);
  const otherFights = event.mainCard.filter((f) => !f.isMainEvent);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: COLORS.dark,
          borderBottom: `3px solid ${badge.color}`,
          padding: "2.5rem 1.5rem 3.5rem",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div
            style={{
              fontFamily: FONT.mono,
              fontSize: "0.68rem",
              color: COLORS.slate,
              letterSpacing: "0.08em",
              marginBottom: "2rem",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <Link href="/" style={{ color: COLORS.slate, textDecoration: "none" }}>HOME</Link>
            <span>/</span>
            <Link href="/events" style={{ color: COLORS.slate, textDecoration: "none" }}>EVENTS</Link>
            <span>/</span>
            <span style={{ color: COLORS.bone }}>{event.name.toUpperCase()}</span>
          </div>

          {/* Badge */}
          <div
            style={{
              fontFamily: FONT.mono,
              fontSize: "0.65rem",
              color: badge.color,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "0.75rem",
            }}
          >
            {badge.label} — {event.completed ? "COMPLETED" : "UPCOMING"}
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "clamp(40px, 7vw, 80px)",
              color: COLORS.bone,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 0.92,
              marginBottom: "1.25rem",
            }}
          >
            {event.name}
          </h1>

          {/* Meta */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              fontFamily: FONT.mono,
              fontSize: "0.78rem",
            }}
          >
            <span style={{ color: COLORS.gold }}>{formatDate(event.date)}</span>
            <span style={{ color: COLORS.slate }}>{event.venue}</span>
            <span style={{ color: COLORS.slate }}>{event.location}</span>
          </div>
        </div>
      </section>

      {/* Main Event */}
      {mainEvent && (
        <section style={{ backgroundColor: COLORS.navy, padding: "3.5rem 1.5rem" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div
              style={{
                fontFamily: FONT.mono,
                fontSize: "0.65rem",
                color: COLORS.red,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "1.5rem",
              }}
            >
              MAIN EVENT — {mainEvent.weightClass}
              {mainEvent.isTitleFight && (
                <span style={{ color: COLORS.gold, marginLeft: "0.75rem" }}>
                  TITLE FIGHT
                </span>
              )}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: FONT.display,
                  fontWeight: 700,
                  fontSize: "clamp(24px, 5vw, 52px)",
                  color: COLORS.bone,
                  textTransform: "uppercase",
                  flex: "1 1 200px",
                  textAlign: "right",
                }}
              >
                {mainEvent.fighter1}
              </div>
              <div
                style={{
                  fontFamily: FONT.display,
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: COLORS.red,
                  flexShrink: 0,
                }}
              >
                VS
              </div>
              <div
                style={{
                  fontFamily: FONT.display,
                  fontWeight: 700,
                  fontSize: "clamp(24px, 5vw, 52px)",
                  color: COLORS.bone,
                  textTransform: "uppercase",
                  flex: "1 1 200px",
                }}
              >
                {mainEvent.fighter2}
              </div>
            </div>

            {event.completed && mainEvent.winner && (
              <div
                style={{
                  backgroundColor: COLORS.navyLight,
                  borderLeft: `4px solid ${COLORS.gold}`,
                  padding: "1rem 1.5rem",
                  display: "inline-flex",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: "0.6rem",
                      color: COLORS.slate,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    WINNER
                  </div>
                  <div
                    style={{
                      fontFamily: FONT.display,
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: COLORS.gold,
                      textTransform: "uppercase",
                    }}
                  >
                    {mainEvent.winner}
                  </div>
                </div>
                {mainEvent.method && (
                  <div>
                    <div
                      style={{
                        fontFamily: FONT.mono,
                        fontSize: "0.6rem",
                        color: COLORS.slate,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      METHOD
                    </div>
                    <div
                      style={{
                        fontFamily: FONT.display,
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        color: COLORS.bone,
                        textTransform: "uppercase",
                      }}
                    >
                      {mainEvent.method}
                      {mainEvent.round && ` — R${mainEvent.round}`}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Full Card */}
      {otherFights.length > 0 && (
        <section style={{ backgroundColor: COLORS.dark, padding: "3.5rem 1.5rem 5rem" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div
              style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "1.3rem",
                color: COLORS.bone,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                marginBottom: "1.5rem",
                paddingBottom: "0.75rem",
                borderBottom: `2px solid rgba(212,43,43,0.3)`,
              }}
            >
              MAIN CARD
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              {otherFights.map((fight, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: COLORS.navy,
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: "0.62rem",
                      color: COLORS.slate,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      minWidth: "120px",
                    }}
                  >
                    {fight.weightClass}
                    {fight.isTitleFight && (
                      <span style={{ color: COLORS.gold, marginLeft: "0.4rem" }}>
                        TITLE
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      fontFamily: FONT.display,
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: COLORS.bone,
                      textTransform: "uppercase",
                    }}
                  >
                    {fight.fighter1} vs {fight.fighter2}
                  </div>
                  {event.completed && fight.winner && (
                    <div
                      style={{
                        fontFamily: FONT.mono,
                        fontSize: "0.7rem",
                        color: COLORS.gold,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        textAlign: "right",
                      }}
                    >
                      {fight.winner} — {fight.method}
                      {fight.round && ` R${fight.round}`}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <Link
                href="/events"
                style={{
                  fontFamily: FONT.mono,
                  fontSize: "0.72rem",
                  color: COLORS.slate,
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                &lt;-- All Events
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
