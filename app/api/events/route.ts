import { NextResponse } from 'next/server';

const API_BASE = 'https://www.thesportsdb.com/api/v1/json/3';

export async function GET() {
  try {
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;

    const [thisYearRes, lastYearRes] = await Promise.all([
      fetch(`${API_BASE}/eventsseason.php?id=4443&s=${currentYear}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`${API_BASE}/eventsseason.php?id=4443&s=${lastYear}`, {
        next: { revalidate: 3600 },
      }),
    ]);

    const thisYearData = await thisYearRes.json();
    const lastYearData = await lastYearRes.json();

    const allEvents = [
      ...(lastYearData.events || []),
      ...(thisYearData.events || []),
    ];

    const today = new Date().toISOString().split('T')[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapEvent = (e: any) => ({
      name: e.strEvent,
      date: e.dateEvent,
      location: [e.strCity, e.strCountry].filter(Boolean).join(', '),
      venue: e.strVenue || 'TBD',
      status: e.strStatus,
      result: e.strResult || null,
    });

    return NextResponse.json({
      upcoming: allEvents
        .filter((e) => e.dateEvent >= today && e.strStatus !== 'Match Finished')
        .map(mapEvent)
        .sort((a, b) => a.date.localeCompare(b.date)),
      past: allEvents
        .filter((e) => e.strStatus === 'Match Finished' || e.dateEvent < today)
        .map(mapEvent)
        .sort((a, b) => b.date.localeCompare(a.date)),
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('Events API error:', err);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}
