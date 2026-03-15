import type { Metadata } from "next";
import Link from "next/link";
import { getUpcomingEvents, getCompletedEvents } from "../data/events";

export const metadata: Metadata = {
  title: "UFC Events — Schedule, Results & Fight Cards",
  description:
    "Upcoming UFC events, past results, and full fight cards. The dad-approved guide to what's on, what happened, and what to watch next.",
};

function typeBadgeStyle(type: string): { label: string; color: string } {
  const map: Record<string, { label: string; color: string }> = {
    ppv: { label: "PPV", color: "var(--gold)" },
    "fight-night": { label: "FIGHT NIGHT", color: "var(--red)" },
    apex: { label: "APEX", color: "var(--muted)" },
  };
  return map[type] ?? { label: type.toUpperCase(), color: "var(--muted)" };
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
            <span style={{ color: "var(--text)" }}>EVENTS</span>
          </div>

          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--red)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: "0.75rem",
          }}>
            EVENT DATABASE
          </div>
          <h1 style={{
            fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "var(--text)",
            letterSpacing: "0.02em",
            lineHeight: 0.92,
            marginBottom: "1.5rem",
          }}>
            EVENTS
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            maxWidth: "560px",
            marginBottom: "2rem",
          }}>
            Upcoming cards, past results, and the complete fight archives. Everything you need to plan the next fight night.
          </p>

          {/* Type key */}
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { color: "var(--gold)", label: "PPV" },
              { color: "var(--red)", label: "Fight Night" },
              { color: "var(--muted)", label: "APEX" },
            ].map(({ color, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "2px", backgroundColor: color }} />
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcoming.length > 0 && (
        <section style={{ backgroundColor: "var(--surface)", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid var(--border)",
            }}>
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "var(--red)",
                borderRadius: "50%",
              }} />
              <div style={{
                fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                fontSize: "1.6rem",
                color: "var(--text)",
                letterSpacing: "0.04em",
              }}>
                UPCOMING EVENTS
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1px",
              backgroundColor: "var(--border)",
            }}>
              {upcoming.map((event) => {
                const badge = typeBadgeStyle(event.type);
                const mainEvent = event.mainCard.find((f) => f.isMainEvent);
                return (
                  <Link key={event.slug} href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
                    <article className="card-hover" style={{
                      backgroundColor: "var(--bg)",
                      padding: "1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                      height: "100%",
                      borderTop: `2px solid ${badge.color}`,
                      transition: "background-color 0.15s",
                      cursor: "pointer",
                    }}
                    >
                      <div style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        color: badge.color,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                      }}>
                        {badge.label}
                      </div>

                      <div style={{
                        fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                        fontSize: "1.3rem",
                        color: "var(--text)",
                        letterSpacing: "0.03em",
                        lineHeight: 1.05,
                      }}>
                        {event.name}
                      </div>

                      <div style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--gold)",
                        letterSpacing: "0.04em",
                        fontWeight: 500,
                      }}>
                        {formatDate(event.date)}
                      </div>

                      <div style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.82rem",
                        color: "var(--muted)",
                      }}>
                        {event.venue} — {event.location}
                      </div>

                      {mainEvent && (
                        <div style={{
                          fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                          fontSize: "1rem",
                          color: "var(--text)",
                          borderTop: "1px solid var(--border)",
                          paddingTop: "0.75rem",
                          marginTop: "0.25rem",
                          letterSpacing: "0.03em",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          flexWrap: "wrap",
                        }}>
                          {mainEvent.fighter1} vs {mainEvent.fighter2}
                          {mainEvent.isTitleFight && (
                            <span style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.56rem",
                              color: "var(--gold)",
                              border: "1px solid var(--gold)",
                              padding: "0.15rem 0.4rem",
                              letterSpacing: "0.08em",
                            }}>
                              TITLE
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
      )}

      {/* Past Results */}
      <section style={{ backgroundColor: "var(--bg)", padding: "4rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid var(--border)",
          }}>
            <div style={{
              fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
              fontSize: "1.6rem",
              color: "var(--muted)",
              letterSpacing: "0.04em",
            }}>
              PAST RESULTS
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--border)",
          }}>
            {completed.map((event) => {
              const badge = typeBadgeStyle(event.type);
              const mainEvent = event.mainCard.find((f) => f.isMainEvent);
              return (
                <Link key={event.slug} href={`/events/${event.slug}`} style={{ textDecoration: "none" }}>
                  <article className="card-hover" style={{
                    backgroundColor: "var(--surface)",
                    padding: "1.5rem",
                    height: "100%",
                    cursor: "pointer",
                    transition: "background-color 0.15s",
                  }}
                  >
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.58rem",
                      color: badge.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      marginBottom: "0.5rem",
                      opacity: 0.7,
                    }}>
                      {badge.label}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                      fontSize: "1.1rem",
                      color: "var(--muted)",
                      letterSpacing: "0.03em",
                      marginBottom: "0.4rem",
                    }}>
                      {event.name}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--muted)",
                      marginBottom: "0.4rem",
                      opacity: 0.7,
                    }}>
                      {formatDate(event.date)} — {event.location}
                    </div>
                    {mainEvent && (
                      <div style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        opacity: 0.7,
                      }}>
                        {mainEvent.fighter1} vs {mainEvent.fighter2}
                      </div>
                    )}
                    {event.mainEventWinner && (
                      <div style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginTop: "0.5rem",
                        opacity: 0.85,
                      }}>
                        W: {event.mainEventWinner}
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
