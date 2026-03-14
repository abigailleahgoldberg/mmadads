import type { Metadata } from "next";
import Link from "next/link";
import { events } from "../data/events";

export const metadata: Metadata = {
  title: "UFC Event Calendar 2025–2026 — Full Schedule",
  description:
    "The complete UFC event calendar. PPV events, Fight Nights, and Apex cards — color-coded and clickable. Plan your fight nights in advance.",
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

const TYPE_COLORS: Record<string, string> = {
  ppv: COLORS.gold,
  "fight-night": COLORS.red,
  apex: COLORS.slate,
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

interface CalendarEvent {
  slug: string;
  name: string;
  type: string;
  day: number;
  completed: boolean;
}

function buildCalendarData(year: number): Record<number, CalendarEvent[]> {
  const byMonth: Record<number, CalendarEvent[]> = {};
  for (let m = 0; m < 12; m++) byMonth[m] = [];

  events.forEach((event) => {
    const d = new Date(event.date + "T12:00:00");
    if (d.getFullYear() !== year) return;
    const month = d.getMonth();
    byMonth[month].push({
      slug: event.slug,
      name: event.name,
      type: event.type,
      day: d.getDate(),
      completed: event.completed,
    });
  });

  return byMonth;
}

export default function CalendarPage() {
  const years = [2024, 2025, 2026];

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
            FIGHT CALENDAR
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
            EVENT CALENDAR
          </h1>
          <p
            style={{
              fontFamily: FONT.body,
              fontSize: "1rem",
              color: COLORS.slate,
              lineHeight: 1.7,
              maxWidth: "560px",
              marginBottom: "1.5rem",
            }}
          >
            Every UFC event by month. Plan your fight nights, clear the schedule, and know when to tell the group chat.
          </p>

          {/* Legend */}
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { color: COLORS.gold, label: "PPV" },
              { color: COLORS.red, label: "Fight Night" },
              { color: COLORS.slate, label: "APEX" },
            ].map(({ color, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div
                  style={{
                    width: 14,
                    height: 14,
                    backgroundColor: color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: "0.65rem",
                    color: COLORS.bone,
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

      {/* Calendars by Year */}
      {years.map((year) => {
        const byMonth = buildCalendarData(year);
        const hasAnyEvent = Object.values(byMonth).some((m) => m.length > 0);
        if (!hasAnyEvent) return null;

        return (
          <section
            key={year}
            style={{
              backgroundColor: year % 2 === 0 ? COLORS.navy : COLORS.dark,
              padding: "4rem 1.5rem",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                style={{
                  fontFamily: FONT.display,
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: COLORS.bone,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "2.5rem",
                  paddingBottom: "0.75rem",
                  borderBottom: `2px solid ${COLORS.red}`,
                }}
              >
                {year}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "2rem",
                }}
              >
                {MONTHS.map((monthName, monthIdx) => {
                  const monthEvents = byMonth[monthIdx];
                  const daysInMonth = getDaysInMonth(year, monthIdx);
                  const firstDay = getFirstDayOfMonth(year, monthIdx);
                  const cells: (number | null)[] = [
                    ...Array(firstDay).fill(null),
                    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
                  ];

                  const eventDayMap: Record<number, CalendarEvent> = {};
                  monthEvents.forEach((e) => {
                    eventDayMap[e.day] = e;
                  });

                  return (
                    <div key={monthName}>
                      <div
                        style={{
                          fontFamily: FONT.display,
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          color: COLORS.bone,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "0.75rem",
                          paddingBottom: "0.4rem",
                          borderBottom: `1px solid rgba(238,232,220,0.1)`,
                        }}
                      >
                        {monthName}
                        {monthEvents.length > 0 && (
                          <span
                            style={{
                              fontFamily: FONT.mono,
                              fontSize: "0.58rem",
                              color: COLORS.red,
                              marginLeft: "0.5rem",
                            }}
                          >
                            {monthEvents.length} EVENT{monthEvents.length !== 1 ? "S" : ""}
                          </span>
                        )}
                      </div>

                      {/* Day headers */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(7, 1fr)",
                          gap: "2px",
                          marginBottom: "4px",
                        }}
                      >
                        {DAYS_OF_WEEK.map((d) => (
                          <div
                            key={d}
                            style={{
                              fontFamily: FONT.mono,
                              fontSize: "0.55rem",
                              color: COLORS.slate,
                              textAlign: "center",
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {d}
                          </div>
                        ))}
                      </div>

                      {/* Day cells */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(7, 1fr)",
                          gap: "2px",
                        }}
                      >
                        {cells.map((day, ci) => {
                          if (day === null) {
                            return <div key={`empty-${ci}`} />;
                          }
                          const event = eventDayMap[day];
                          const color = event ? TYPE_COLORS[event.type] ?? COLORS.slate : "transparent";
                          const isEventDay = Boolean(event);

                          const cell = (
                            <div
                              style={{
                                aspectRatio: "1",
                                backgroundColor: isEventDay
                                  ? color
                                  : "rgba(238,232,220,0.04)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.68rem",
                                fontFamily: FONT.mono,
                                color: isEventDay ? COLORS.dark : COLORS.slate,
                                fontWeight: isEventDay ? 700 : 400,
                                cursor: isEventDay ? "pointer" : "default",
                                opacity: event?.completed ? 0.65 : 1,
                                position: "relative",
                              }}
                            >
                              {day}
                            </div>
                          );

                          return event ? (
                            <Link
                              key={`day-${day}`}
                              href={`/events/${event.slug}`}
                              title={event.name}
                              style={{ textDecoration: "none" }}
                            >
                              {cell}
                            </Link>
                          ) : (
                            <div key={`day-${day}`}>{cell}</div>
                          );
                        })}
                      </div>

                      {/* Event list for this month */}
                      {monthEvents.length > 0 && (
                        <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                          {monthEvents.map((ev) => (
                            <Link
                              key={ev.slug}
                              href={`/events/${ev.slug}`}
                              style={{ textDecoration: "none" }}
                            >
                              <div
                                style={{
                                  fontFamily: FONT.mono,
                                  fontSize: "0.6rem",
                                  color: TYPE_COLORS[ev.type] ?? COLORS.slate,
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                  opacity: ev.completed ? 0.6 : 1,
                                  paddingLeft: "0.3rem",
                                  borderLeft: `2px solid ${TYPE_COLORS[ev.type] ?? COLORS.slate}`,
                                }}
                              >
                                {ev.day} — {ev.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
