import type { Metadata } from "next";
import Link from "next/link";
import { getUpcomingEvents, getCompletedEvents } from "../data/events";

export const metadata: Metadata = {
  title: "UFC Events — Schedule, Results & Fight Cards",
  description:
    "Upcoming UFC events, past results, and full fight cards. The dad-approved guide to what's on, what happened, and what to watch next.",
};

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
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const completed = getCompletedEvents().reverse();

  return (
    <>
      {/* Header */}
      <section
        style={{
          backgroundColor: COLORS.dark,
          borderBottom: `3px solid ${COLORS.red}`,
          padding: "4rem 1.5rem 3rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: FONT.mono,
              fontSize: "0.72rem",
              color: COLORS.red,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "1rem",
            }}
          >
            EVENT DATABASE
          </div>
          <h1
            style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "clamp(36px, 6vw, 72px)",
              color: COLORS.bone,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 0.95,
              marginBottom: "1.5rem",
            }}
          >
            EVENTS
          </h1>
          <p
            style={{
              fontFamily: FONT.body,
              fontSize: "1rem",
              color: COLORS.slate,
              lineHeight: 1.7,
              maxWidth: "560px",
            }}
          >
            Upcoming cards, past results, and the complete fight archives. Everything you need to plan the next fight night.
          </p>
          {/* Color Key */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { color: COLORS.gold, label: "PPV" },
              { color: COLORS.red, label: "Fight Night" },
              { color: COLORS.slate, label: "APEX" },
            ].map(({ color, label }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <div style={{ width: 12, height: 12, backgroundColor: color }} />
                <span
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: "0.65rem",
                    color: COLORS.slate,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{ backgroundColor: COLORS.navy, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "1.6rem",
              color: COLORS.bone,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              marginBottom: "2rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${COLORS.red}`,
            }}
          >
            UPCOMING EVENTS
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {upcoming.map((event) => {
              const badge = typeBadge(event.type);
              const mainEvent = event.mainCard.find((f) => f.isMainEvent);
              return (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    style={{
                      backgroundColor: COLORS.navyLight,
                      borderLeft: `4px solid ${badge.color}`,
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    {/* Badge */}
                    <div
                      style={{
                        fontFamily: FONT.mono,
                        fontSize: "0.6rem",
                        color: badge.color,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {badge.label}
                    </div>
                    {/* Name */}
                    <div
                      style={{
                        fontFamily: FONT.display,
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        color: COLORS.bone,
                        textTransform: "uppercase",
                      }}
                    >
                      {event.name}
                    </div>
                    {/* Date */}
                    <div
                      style={{
                        fontFamily: FONT.mono,
                        fontSize: "0.72rem",
                        color: COLORS.gold,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {formatDate(event.date)}
                    </div>
                    {/* Location */}
                    <div
                      style={{
                        fontFamily: FONT.body,
                        fontSize: "0.82rem",
                        color: COLORS.slate,
                      }}
                    >
                      {event.venue} — {event.location}
                    </div>
                    {/* Main Event */}
                    {mainEvent && (
                      <div
                        style={{
                          fontFamily: FONT.display,
                          fontWeight: 600,
                          fontSize: "0.95rem",
                          color: COLORS.bone,
                          borderTop: `1px solid rgba(238,232,220,0.08)`,
                          paddingTop: "0.6rem",
                          marginTop: "0.2rem",
                          textTransform: "uppercase",
                        }}
                      >
                        {mainEvent.fighter1} vs {mainEvent.fighter2}
                        {mainEvent.isTitleFight && (
                          <span
                            style={{
                              fontFamily: FONT.mono,
                              fontSize: "0.58rem",
                              color: COLORS.gold,
                              marginLeft: "0.5rem",
                              verticalAlign: "middle",
                            }}
                          >
                            TITLE FIGHT
                          </span>
                        )}
                      </div>
                    )}
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Results */}
      <section style={{ backgroundColor: COLORS.dark, padding: "4rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "1.6rem",
              color: COLORS.bone,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              marginBottom: "2rem",
              paddingBottom: "0.75rem",
              borderBottom: `2px solid ${COLORS.slate}`,
            }}
          >
            PAST RESULTS
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {completed.map((event) => {
              const badge = typeBadge(event.type);
              const mainEvent = event.mainCard.find((f) => f.isMainEvent);
              return (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    style={{
                      backgroundColor: COLORS.navy,
                      borderLeft: `4px solid ${badge.color}`,
                      padding: "1.5rem",
                      opacity: 0.85,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONT.mono,
                        fontSize: "0.6rem",
                        color: badge.color,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {badge.label} — COMPLETED
                    </div>
                    <div
                      style={{
                        fontFamily: FONT.display,
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: COLORS.bone,
                        textTransform: "uppercase",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {event.name}
                    </div>
                    <div
                      style={{
                        fontFamily: FONT.mono,
                        fontSize: "0.68rem",
                        color: COLORS.slate,
                        marginBottom: "0.4rem",
                      }}
                    >
                      {formatDate(event.date)} — {event.location}
                    </div>
                    {mainEvent && (
                      <div
                        style={{
                          fontFamily: FONT.body,
                          fontSize: "0.82rem",
                          color: COLORS.slate,
                          marginBottom: "0.3rem",
                        }}
                      >
                        {mainEvent.fighter1} vs {mainEvent.fighter2}
                      </div>
                    )}
                    {event.mainEventWinner && (
                      <div
                        style={{
                          fontFamily: FONT.mono,
                          fontSize: "0.7rem",
                          color: COLORS.gold,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Winner: {event.mainEventWinner}
                      </div>
                    )}
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
