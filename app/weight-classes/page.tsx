import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UFC Weight Classes — Complete Guide to Every Division",
  description:
    "Every UFC men's weight class explained — current champions, top contenders, division history, and the dad take on what makes each one worth watching.",
};

interface WeightClassData {
  name: string;
  limit: string;
  champion: { name: string; slug: string } | null;
  contenders: string[];
  description: string;
  divisionVibe: string;
  historicalNote: string;
}

const weightClasses: WeightClassData[] = [
  {
    name: "Strawweight",
    limit: "115 lbs",
    champion: null,
    contenders: ["Weili Zhang", "Yan Xiaonan", "Tatiana Suarez", "Rose Namajunas", "Carla Esparza"],
    description: "The smallest weight class in the UFC, strawweight features some of the most technically refined striking in the organization. Fighters at 115 pounds tend to have exceptional footwork, elite cardio, and submission games that develop over long careers in the lighter weight classes.",
    divisionVibe: "Chess matches that occasionally become street brawls. The technique is elite, the pace is relentless, and the cardio outlasts most men's divisions by at least a round.",
    historicalNote: "The UFC men's strawweight division was introduced in 2018 and remains less established than the women's 115-pound division, which has produced some of the sport's most iconic moments.",
  },
  {
    name: "Flyweight",
    limit: "125 lbs",
    champion: { name: "Joshua Van", slug: "joshua-van" },
    contenders: ["Alexandre Pantoja", "Brandon Royval", "Matheus Nicolau", "Kai Kara-France", "Muhammad Mokaev"],
    description: "Flyweight fighters are the fastest athletes in the UFC — the agility, quickness, and explosiveness at 125 pounds exceeds what any heavier division can match. The submission game at flyweight is also exceptionally dangerous, as smaller fighters tend to have more practice with technique over strength. Joshua Van made history at UFC 323 in December 2025, becoming the first fighter from Myanmar to hold a UFC title.",
    divisionVibe: "The fastest fights in the building. Blink and you miss the combination. The scrambles on the ground are like watching elite gymnasts who are also trying to choke each other out. And now the champion is a 24-year-old from Myanmar who nobody had penciled in.",
    historicalNote: "Demetrious Johnson's reign at flyweight from 2012 to 2018 — 11 consecutive title defenses — is the most dominant individual run in UFC history by any metric.",
  },
  {
    name: "Bantamweight",
    limit: "135 lbs",
    champion: { name: "Petr Yan", slug: "petr-yan" },
    contenders: ["Merab Dvalishvili", "Umar Nurmagomedov", "Cory Sandhagen", "Sean O'Malley", "Marlon Vera"],
    description: "Bantamweight sits at a perfect intersection of speed, power, and technique. Petr Yan reclaimed the title at UFC 323 in December 2025, beating Merab Dvalishvili in a five-round war that showcased some of the best striking in divisional history. Yan first held the title in 2020 before losing it on a controversial disqualification — his return to the top is one of the better redemption stories in recent UFC history.",
    divisionVibe: "Unpredictable. Every fight at the top of the bantamweight division could go to a decision or end in the first round and you can't tell which until it's over. Yan's return to the top adds a great story to an already excellent division.",
    historicalNote: "Dominick Cruz's tenure at bantamweight, including his revolutionary footwork style, changed how people conceptualize movement and distance management in MMA.",
  },
  {
    name: "Featherweight",
    limit: "145 lbs",
    champion: { name: "Alexander Volkanovski", slug: "alexander-volkanovski" },
    contenders: ["Diego Lopes", "Max Holloway", "Movsar Evloev", "Arnold Allen", "Brian Ortega"],
    description: "The UFC featherweight division has been one of the most consistently excellent weight classes in the organization for a decade. The run from Jose Aldo's multi-year dominance through Max Holloway's era through Volkanovski's first reign, then Topuria's championship, and now Volkanovski reclaiming the title at UFC 314 in April 2025 — beating Diego Lopes — represents an almost unbroken sequence of championship-level quality.",
    divisionVibe: "Volkanovski came back and took back what was his. Topuria moved up to lightweight, and The Great stepped back in and proved why he was one of the longest-reigning featherweight champions in history. The division is as deep as it's ever been.",
    historicalNote: "Jose Aldo's 2,112-day title reign at featherweight, including the record 10-second knockout loss to McGregor that ended it, bookends one of the most dominant championship runs in the sport's history.",
  },
  {
    name: "Lightweight",
    limit: "155 lbs",
    champion: { name: "Ilia Topuria", slug: "ilia-topuria" },
    contenders: ["Justin Gaethje (Interim Champ)", "Arman Tsarukyan", "Charles Oliveira", "Michael Chandler", "Dustin Poirier"],
    description: "Lightweight is the flagship division of the UFC. Ilia Topuria moved up from featherweight and beat Charles Oliveira at UFC 317 in June 2025 to become the undisputed lightweight champion — one of the most exciting two-division title pursuits in recent memory. Justin Gaethje holds the interim title after beating Paddy Pimblett at UFC 324 in January 2026, setting up a unification fight.",
    divisionVibe: "The premier division just got even more interesting. Topuria moved up and took over. Gaethje is interim champ. The unification fight is the most anticipated bout in the division in years. This is what the sport looks like when ambition meets ability.",
    historicalNote: "BJ Penn, Frankie Edgar, Conor McGregor, Khabib Nurmagomedov, Charles Oliveira, Islam Makhachev, Ilia Topuria — the lightweight title lineage is the deepest in MMA.",
  },
  {
    name: "Welterweight",
    limit: "170 lbs",
    champion: { name: "Islam Makhachev", slug: "islam-makhachev" },
    contenders: ["Jack Della Maddalena", "Ian Machado Garry", "Colby Covington", "Leon Edwards", "Gilbert Burns"],
    description: "Welterweight just got a new champion in the most dramatic way possible. Islam Makhachev — who had already dominated the lightweight division for years — moved up and beat Jack Della Maddalena at UFC 322 in November 2025 to become a two-division UFC champion. It's the most significant welterweight title change in years, and it leaves the division with a legitimate pound-for-pound number one at the top.",
    divisionVibe: "Welterweight is where the pound-for-pound king now lives. Makhachev at 170 is a different problem than anyone this division has faced. The chess matches here just got a new grandmaster.",
    historicalNote: "Georges St-Pierre's nine consecutive title defenses at welterweight is the standard against which every welterweight champion is measured. Islam Makhachev is the latest to try to write his own chapter.",
  },
  {
    name: "Middleweight",
    limit: "185 lbs",
    champion: { name: "Khamzat Chimaev", slug: "khamzat-chimaev" },
    contenders: ["Dricus Du Plessis", "Robert Whittaker", "Israel Adesanya", "Paulo Costa", "Sean Strickland"],
    description: "Middleweight produced the most statistically dominant champion in UFC history — Anderson Silva's 2,457-day reign. The division has cycled through extraordinary champions since: Weidman, Rockhold, Bisping, Adesanya, Strickland, Du Plessis, and now Khamzat Chimaev, who beat Du Plessis at UFC 319 in August 2025 to claim the belt. Chimaev is undefeated and represents a physical and technical challenge that the division has never fully faced before.",
    divisionVibe: "Where legends get built and broken. Chimaev arrived at middleweight and immediately made it look like his personal proving ground. The undefeated streak is real. The physical dominance is real. The middleweight division just got harder to predict.",
    historicalNote: "The Anderson Silva era at middleweight (2006-2013) is MMA's version of Jordan's Bulls. A period of such dominant excellence that it remains the reference point fifteen years later.",
  },
  {
    name: "Light Heavyweight",
    limit: "205 lbs",
    champion: { name: "Alex Pereira", slug: "alex-pereira" },
    contenders: ["Magomed Ankalaev", "Jiri Prochazka", "Jamahal Hill", "Carlos Ulberg", "Aleksandar Rakic"],
    description: "Light heavyweight is the weight class that produced Jon Jones's legendary dominance and, in recent years, Alex Pereira's reign as the sport's most dangerous striker. The division sits at a fascinating intersection — large enough for genuine knockout power, light enough for legitimate athleticism and wrestling.",
    divisionVibe: "The left hook division. Alex Pereira has finished multiple title challengers with the same weapon and the challengers keep coming. High-stakes, high-finish-rate, high-drama.",
    historicalNote: "Jon Jones's 11 consecutive title defenses at light heavyweight, spanning 2011 to 2020, make him the most successful champion in the division's history.",
  },
  {
    name: "Heavyweight",
    limit: "265 lbs",
    champion: { name: "Tom Aspinall", slug: "tom-aspinall" },
    contenders: ["Ciryl Gane", "Curtis Blaydes", "Jailton Almeida", "Sergei Pavlovich", "Stipe Miocic"],
    description: "The heavyweight division carries the weight of history — the original weight class, the home of champions like Coleman, Couture, Lesnar, Velasquez, Miocic, and Jones. Jon Jones retired on June 21, 2025, vacating the heavyweight title. Tom Aspinall, who had been the interim champion after destroying Sergei Pavlovich in 84 seconds at UFC 295, was promoted to undisputed champion. At 31, Aspinall is the most technically complete heavyweight in the division and one of the most exciting title reigns the weight class has ever had.",
    divisionVibe: "One punch. Every fight at heavyweight has that energy. Tom Aspinall has the boxing, the submissions, and the footwork that 265-pound fighters almost never have. England has its heavyweight champion of the world. The era starts now.",
    historicalNote: "Stipe Miocic's record of three consecutive title defenses and his victories over Ngannou and Cormier make him the greatest heavyweight champion of the UFC's modern era. Jon Jones retired undefeated from the division in June 2025.",
  },
];

function WeightVisual({ limit }: { limit: string }) {
  const lbs = parseInt(limit);
  const minW = 115;
  const maxW = 265;
  const pct = Math.max(4, ((lbs - minW) / (maxW - minW)) * 100);

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{
        height: "4px",
        backgroundColor: "var(--border)",
        position: "relative",
        marginBottom: "0.5rem",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: `${pct}%`,
          backgroundColor: "var(--red)",
        }} />
      </div>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.62rem",
        color: "var(--muted)",
        letterSpacing: "0.06em",
      }}>
        115 lbs ——— {limit} ——— 265 lbs
      </div>
    </div>
  );
}

export default function WeightClassesPage() {
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
            <span style={{ color: "var(--text)" }}>WEIGHT CLASSES</span>
          </div>

          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--red)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: "0.75rem",
          }}>
            DIVISION GUIDE
          </div>
          <h1 style={{
            fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "var(--text)",
            letterSpacing: "0.02em",
            lineHeight: 0.92,
            marginBottom: "1.5rem",
          }}>
            WEIGHT CLASSES
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            maxWidth: "600px",
            marginBottom: "2.5rem",
          }}>
            Every UFC division explained — the champions, the contenders, the historical context, and why each weight class produces its own specific brand of violence. From 115 to 265 pounds.
          </p>

          {/* Division quick-nav */}
          <div style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}>
            {weightClasses.map((wc) => (
              <a className="division-nav-link" key={wc.name} href={`#${wc.name.toLowerCase().replace(/\s+/g, "-")}`} style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "0.35rem 0.75rem",
                border: "1px solid var(--border)",
                minHeight: "36px",
                display: "flex",
                alignItems: "center",
                transition: "all 0.15s",
              }}
              >
                {wc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Weight Classes */}
      {weightClasses.map((wc, idx) => (
        <section
          key={wc.name}
          id={wc.name.toLowerCase().replace(/\s+/g, "-")}
          style={{
            backgroundColor: idx % 2 === 0 ? "var(--surface)" : "var(--bg)",
            padding: "4rem 1.5rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              className="weight-class-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 320px",
                gap: "3rem",
                alignItems: "start",
              }}
            >
              {/* Main content */}
              <div>
                <div style={{ maxWidth: "280px" }}>
                  <WeightVisual limit={wc.limit} />
                </div>

                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--red)",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  marginBottom: "0.5rem",
                }}>
                  {wc.limit}
                </div>

                <h2 style={{
                  fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "var(--text)",
                  letterSpacing: "0.01em",
                  lineHeight: 0.92,
                  marginBottom: "2rem",
                }}>
                  {wc.name}
                </h2>

                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.975rem",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  marginBottom: "1.75rem",
                }}>
                  {wc.description}
                </p>

                {/* Division vibe */}
                <div style={{
                  backgroundColor: idx % 2 === 0 ? "var(--bg)" : "var(--surface)",
                  borderLeft: "3px solid var(--gold)",
                  padding: "1.25rem 1.5rem",
                  marginBottom: "1.75rem",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "0.5rem",
                  }}>
                    DIVISION VIBE
                  </div>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                    fontSize: "0.88rem",
                    color: "var(--text)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {wc.divisionVibe}
                  </p>
                </div>

                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border)",
                }}>
                  {wc.historicalNote}
                </p>
              </div>

              {/* Sidebar */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--border)" }}>
                {/* Champion */}
                <div style={{
                  backgroundColor: idx % 2 === 0 ? "var(--bg)" : "var(--surface)",
                  padding: "1.5rem",
                  borderTop: "2px solid var(--gold)",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "0.85rem",
                  }}>
                    CURRENT CHAMPION
                  </div>
                  {wc.champion ? (
                    <Link href={`/fighters/${wc.champion.slug}`} style={{ textDecoration: "none" }}>
                      <div style={{
                        fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                        fontSize: "1.4rem",
                        color: "var(--text)",
                        letterSpacing: "0.03em",
                        lineHeight: 1.05,
                        marginBottom: "0.35rem",
                      }}>
                        {wc.champion.name}
                      </div>
                      <div style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.62rem",
                        color: "var(--gold)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}>
                        View profile <span>&rarr;</span>
                      </div>
                    </Link>
                  ) : (
                    <div style={{
                      fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                      fontSize: "1.2rem",
                      color: "var(--muted)",
                    }}>
                      VACANT
                    </div>
                  )}
                </div>

                {/* Contenders */}
                <div style={{
                  backgroundColor: idx % 2 === 0 ? "var(--bg)" : "var(--surface)",
                  padding: "1.5rem",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "1rem",
                  }}>
                    TOP CONTENDERS
                  </div>
                  <ol style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65rem",
                  }}>
                    {wc.contenders.map((c, ci) => (
                      <li key={c} style={{
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "baseline",
                      }}>
                        <span style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          color: "var(--red)",
                          minWidth: "1.2rem",
                          fontWeight: 500,
                        }}>
                          #{ci + 1}
                        </span>
                        <span style={{
                          fontFamily: "var(--font-display, 'Bebas Neue', sans-serif)",
                          fontSize: "0.95rem",
                          color: "var(--text)",
                          letterSpacing: "0.02em",
                        }}>
                          {c}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
