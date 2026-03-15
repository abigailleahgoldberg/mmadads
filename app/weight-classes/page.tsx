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
    champion: { name: "Alexandre Pantoja", slug: "alexandre-pantoja" },
    contenders: ["Brandon Royval", "Matheus Nicolau", "Kai Kara-France", "Muhammad Mokaev", "Steve Erceg"],
    description: "Flyweight fighters are the fastest athletes in the UFC — the agility, quickness, and explosiveness at 125 pounds exceeds what any heavier division can match. The submission game at flyweight is also exceptionally dangerous, as smaller fighters tend to have more practice with technique over strength.",
    divisionVibe: "The fastest fights in the building. Blink and you miss the combination. The scrambles on the ground are like watching elite gymnasts who are also trying to choke each other out.",
    historicalNote: "Demetrious Johnson's reign at flyweight from 2012 to 2018 — 11 consecutive title defenses — is the most dominant individual run in UFC history by any metric.",
  },
  {
    name: "Bantamweight",
    limit: "135 lbs",
    champion: { name: "Merab Dvalishvili", slug: "merab-dvalishvili" },
    contenders: ["Umar Nurmagomedov", "Cory Sandhagen", "Sean O'Malley", "Marlon Vera", "Henry Cejudo"],
    description: "Bantamweight sits at a perfect intersection of speed, power, and technique. The division has produced three of the sport's most analytically interesting champions in recent history — Aljamain Sterling, Sean O'Malley, and Merab Dvalishvili. The variety of styles at the top makes every championship conversation interesting.",
    divisionVibe: "Unpredictable. Every fight at the top of the bantamweight division could go to a decision or end in the first round and you can't tell which until it's over. The depth is genuine.",
    historicalNote: "Dominick Cruz's tenure at bantamweight, including his revolutionary footwork style, changed how people conceptualize movement and distance management in MMA.",
  },
  {
    name: "Featherweight",
    limit: "145 lbs",
    champion: { name: "Ilia Topuria", slug: "ilia-topuria" },
    contenders: ["Max Holloway", "Movsar Evloev", "Arnold Allen", "Brian Ortega", "Yair Rodriguez"],
    description: "The UFC featherweight division has been one of the most consistently excellent weight classes in the organization for a decade. The run from Jose Aldo's multi-year dominance through Max Holloway's era through Volkanovski's reign to Ilia Topuria's coronation represents an almost unbroken sequence of championship-level quality.",
    divisionVibe: "The featherweight division feels like the heart of the organization right now. Topuria is young, exciting, and undefeated. The challengers are legitimate. Every title defense is a genuine event.",
    historicalNote: "Jose Aldo's 2,112-day title reign at featherweight, including the record 10-second knockout loss to McGregor that ended it, bookends one of the most dominant championship runs in the sport's history.",
  },
  {
    name: "Lightweight",
    limit: "155 lbs",
    champion: { name: "Islam Makhachev", slug: "islam-makhachev" },
    contenders: ["Arman Tsarukyan", "Charles Oliveira", "Dustin Poirier", "Justin Gaethje", "Michael Chandler"],
    description: "Lightweight is the flagship division of the UFC — the weight class where the most decorated champions have competed, where the deepest talent pool consistently produces the sport's most anticipated fights. Islam Makhachev's current reign is one of the most dominant in the division's history.",
    divisionVibe: "The premier division. Every fight at the top of lightweight feels like a championship fight whether it is or not. The names are the biggest names in the sport. The stakes feel the highest here.",
    historicalNote: "BJ Penn, Frankie Edgar, Conor McGregor, Khabib Nurmagomedov, Charles Oliveira, Islam Makhachev — the lightweight title lineage is the deepest in MMA.",
  },
  {
    name: "Welterweight",
    limit: "170 lbs",
    champion: { name: "Belal Muhammad", slug: "belal-muhammad" },
    contenders: ["Jack Della Maddalena", "Ian Machado Garry", "Colby Covington", "Khamzat Chimaev", "Gilbert Burns"],
    description: "Welterweight has historically been the division that produces the most technically complete fighters — the weight class where wrestlers, strikers, and submission artists all find each other at physical parity and technique becomes the primary differentiator. GSP defined the division for a decade.",
    divisionVibe: "Welterweight is where you go to see what happens when everyone is physically equal and the only advantage is craft. The chess matches here run longest and the decisions are most contested.",
    historicalNote: "Georges St-Pierre's nine consecutive title defenses at welterweight is the standard against which every welterweight champion is measured.",
  },
  {
    name: "Middleweight",
    limit: "185 lbs",
    champion: { name: "Dricus Du Plessis", slug: "dricus-du-plessis" },
    contenders: ["Robert Whittaker", "Israel Adesanya", "Khamzat Chimaev", "Paulo Costa", "Sean Strickland"],
    description: "Middleweight produced the most statistically dominant champion in UFC history — Anderson Silva's 2,457-day reign with ten consecutive defenses. The division has cycled through extraordinary champions since Silva's fall: Weidman, Rockhold, Bisping, Adesanya, Strickland, and now Du Plessis.",
    divisionVibe: "Where legends get built and broken. Middleweight has had more championship drama per calendar year than any other division over the last decade. Every new champion feels like they might be the next long-term king, and every one so far has been challenged.",
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
    champion: { name: "Jon Jones", slug: "jon-jones" },
    contenders: ["Tom Aspinall", "Ciryl Gane", "Curtis Blaydes", "Jailton Almeida", "Stipe Miocic"],
    description: "The heavyweight division carries the weight of history — the original weight class, the home of champions like Mark Coleman, Randy Couture, Brock Lesnar, Cain Velasquez, Stipe Miocic, and now Jon Jones. At 265 pounds, the combination of power and athleticism is unique — a fully trained heavyweight generates force that no lighter division can match.",
    divisionVibe: "One punch. Every fight at heavyweight has that energy — the possibility that any moment could be the last. Jones has made it look systematic, but the division underneath him is contested and volatile.",
    historicalNote: "Stipe Miocic's record of three consecutive title defenses and his victories over Ngannou and Cormier make him the greatest heavyweight champion in the UFC's modern era.",
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
