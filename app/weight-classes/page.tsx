import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UFC Weight Classes — Complete Guide to Every Division",
  description:
    "Every UFC men's weight class explained — current champions, top contenders, division history, and the dad take on what makes each one worth watching.",
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
    description: "The smallest weight class in the UFC, strawweight features some of the most technically refined striking in the organization. Fighters at 115 pounds tend to have exceptional footwork, elite cardio, and submission games that develop over long careers in the lighter weight classes. Don't let the weight fool you — these fights are athletic showcases.",
    divisionVibe: "Chess matches that occasionally become street brawls. The technique is elite, the pace is relentless, and the cardio outlasts most men's divisions by at least a round.",
    historicalNote: "The UFC men's strawweight division was introduced in 2018 and remains less established than the women's 115-pound division, which has produced some of the sport's most iconic moments.",
  },
  {
    name: "Flyweight",
    limit: "125 lbs",
    champion: { name: "Alexandre Pantoja", slug: "alexandre-pantoja" },
    contenders: ["Brandon Royval", "Matheus Nicolau", "Kai Kara-France", "Muhammad Mokaev", "Steve Erceg"],
    description: "Flyweight fighters are the fastest athletes in the UFC — the agility, quickness, and explosiveness at 125 pounds exceeds what any heavier division can match. The submission game at flyweight is also exceptionally dangerous, as smaller fighters tend to have more practice with technique over strength. A championship flyweight fight at five rounds is an aerobic masterpiece.",
    divisionVibe: "The fastest fights in the building. Blink and you miss the combination. The scrambles on the ground are like watching elite gymnasts who are also trying to choke each other out.",
    historicalNote: "Demetrious Johnson's reign at flyweight from 2012 to 2018 — 11 consecutive title defenses — is the most dominant individual run in UFC history by any metric.",
  },
  {
    name: "Bantamweight",
    limit: "135 lbs",
    champion: { name: "Merab Dvalishvili", slug: "merab-dvalishvili" },
    contenders: ["Umar Nurmagomedov", "Cory Sandhagen", "Sean O'Malley", "Marlon Vera", "Henry Cejudo"],
    description: "Bantamweight sits at a perfect intersection of speed, power, and technique. The division has produced three of the sport's most analytically interesting champions in recent history — Aljamain Sterling (the technical submission artist), Sean O'Malley (the striker with elite timing), and Merab Dvalishvili (the conditioning machine). The variety of styles at the top makes every championship conversation interesting.",
    divisionVibe: "Unpredictable. Every fight at the top of the bantamweight division could go to a decision or end in the first round and you can't tell which until it's over. The depth is genuine.",
    historicalNote: "Dominick Cruz's tenure at bantamweight, including his revolutionary footwork style, changed how people conceptualize movement and distance management in MMA.",
  },
  {
    name: "Featherweight",
    limit: "145 lbs",
    champion: { name: "Ilia Topuria", slug: "ilia-topuria" },
    contenders: ["Max Holloway", "Movsar Evloev", "Arnold Allen", "Brian Ortega", "Yair Rodriguez"],
    description: "The UFC featherweight division has been one of the most consistently excellent weight classes in the organization for a decade. The run from Jose Aldo's multi-year dominance through Max Holloway's era through Alexander Volkanovski's reign to Ilia Topuria's coronation represents an almost unbroken sequence of championship-level quality. The current champion, Topuria, is 27 and unbeaten. The division is in excellent hands.",
    divisionVibe: "The featherweight division feels like the heart of the organization right now. Topuria is young, exciting, and undefeated. The challengers are legitimate. Every title defense is a genuine event.",
    historicalNote: "Jose Aldo's 2,112-day title reign at featherweight, including the record 10-second knockout loss to McGregor that ended it, bookends one of the most dominant championship runs in the sport's history.",
  },
  {
    name: "Lightweight",
    limit: "155 lbs",
    champion: { name: "Islam Makhachev", slug: "islam-makhachev" },
    contenders: ["Arman Tsarukyan", "Charles Oliveira", "Dustin Poirier", "Justin Gaethje", "Michael Chandler"],
    description: "Lightweight is the flagship division of the UFC — the weight class where the most decorated champions have competed, where the deepest talent pool consistently produces the sport's most anticipated fights. Khabib's unbeaten reign, McGregor's 13-second title fight, Poirier's wars, Gaethje's violence — the division writes stories at a rate that no other weight class can match. Islam Makhachev's current reign is one of the most dominant in the division's history.",
    divisionVibe: "The premier division. Every fight at the top of lightweight feels like a championship fight whether it is or not. The names are the biggest names in the sport. The stakes feel the highest here.",
    historicalNote: "BJ Penn, Frankie Edgar, Benson Henderson, Anthony Pettis, Rafael dos Anjos, Eddie Alvarez, Conor McGregor, Khabib Nurmagomedov, Dustin Poirier, Charles Oliveira, Islam Makhachev — the lightweight title lineage is the deepest in MMA.",
  },
  {
    name: "Welterweight",
    limit: "170 lbs",
    champion: { name: "Belal Muhammad", slug: "belal-muhammad" },
    contenders: ["Jack Della Maddalena", "Ian Machado Garry", "Colby Covington", "Khamzat Chimaev", "Gilbert Burns"],
    description: "Welterweight has historically been the division that produces the most technically complete fighters — the weight class where wrestlers, strikers, and submission artists all find each other at physical parity and technique becomes the primary differentiator. GSP defined the division for a decade. Kamaru Usman dominated it for four years after him. The current champion, Belal Muhammad, represents the grinding, pressure-based approach that has become the division's signature.",
    divisionVibe: "Welterweight is where you go to see what happens when everyone is physically equal and the only advantage is craft. The chess matches here run longest and the decisions are most contested.",
    historicalNote: "Georges St-Pierre's nine consecutive title defenses at welterweight is the standard against which every welterweight champion is measured. His combination of wrestling, striking, and championship preparation set a template the division still uses.",
  },
  {
    name: "Middleweight",
    limit: "185 lbs",
    champion: { name: "Dricus Du Plessis", slug: "dricus-du-plessis" },
    contenders: ["Robert Whittaker", "Israel Adesanya", "Khamzat Chimaev", "Paulo Costa", "Sean Strickland"],
    description: "Middleweight produced the most statistically dominant champion in UFC history -- Anderson Silva's 2,457-day reign with ten consecutive defenses. The division has cycled through extraordinary champions since Silva's fall: Weidman, Rockhold, Bisping, Romero (briefly), Gastelum (briefly), Adesanya, Strickland, and now Du Plessis. The instability at the top in recent years has made every title fight feel meaningful, as no one has come close to replicating Silva's longevity.",
    divisionVibe: "Where legends get built and broken. Middleweight has had more championship drama per calendar year than any other division over the last decade. Every new champion feels like they might be the next long-term king, and every one so far has been challenged.",
    historicalNote: "The Anderson Silva era at middleweight (2006-2013) is MMA's version of Jordan's Bulls. A period of such dominant excellence that it remains the reference point for championship conversation in the division fifteen years later.",
  },
  {
    name: "Light Heavyweight",
    limit: "205 lbs",
    champion: { name: "Alex Pereira", slug: "alex-pereira" },
    contenders: ["Magomed Ankalaev", "Jiri Prochazka", "Jamahal Hill", "Carlos Ulberg", "Aleksandar Rakic"],
    description: "Light heavyweight is the weight class that produced Jon Jones's legendary dominance and, in recent years, Alex Pereira's reign as the sport's most dangerous striker. The division sits at a fascinating intersection — large enough for genuine knockout power, light enough for legitimate athleticism and wrestling. The Pereira era has been defined by spectacular finishes that have made LHW the most-watched division in the sport during his title run.",
    divisionVibe: "The left hook division. Alex Pereira has finished multiple title challengers with the same weapon and the challengers keep coming. High-stakes, high-finish-rate, high-drama. One of the best divisions to watch right now.",
    historicalNote: "Jon Jones's 11 consecutive title defenses at light heavyweight, spanning 2011 to 2020, make him the most successful champion in the division's history and the central figure in every GOAT conversation.",
  },
  {
    name: "Heavyweight",
    limit: "265 lbs",
    champion: { name: "Jon Jones", slug: "jon-jones" },
    contenders: ["Tom Aspinall", "Ciryl Gane", "Curtis Blaydes", "Jailton Almeida", "Stipe Miocic"],
    description: "The heavyweight division carries the weight of history -- the original weight class, the home of champions like Mark Coleman, Randy Couture, Tim Sylvia, Andrei Arlovski, Brock Lesnar, Cain Velasquez, Fabricio Werdum, Stipe Miocic, and now Jon Jones. At 265 pounds, the combination of power and athleticism is unique -- a fully trained 265-pound fighter generates force that no lighter division can match, and the fights can end at any moment with a single clean exchange.",
    divisionVibe: "One punch. Every fight at heavyweight has that energy -- the possibility that any moment could be the last. Jones has made it look systematic, but the division underneath him is contested and volatile.",
    historicalNote: "Stipe Miocic's record of three consecutive title defenses and his victories over Ngannou and Cormier make him the greatest heavyweight champion in the UFC's modern era -- a standard Jones is now competing with his move to the division.",
  },
];

function WeightVisual({ limit }: { limit: string }) {
  const lbs = parseInt(limit);
  const minW = 115;
  const maxW = 265;
  const pct = ((lbs - minW) / (maxW - minW)) * 100;

  return (
    <div
      style={{
        height: "6px",
        backgroundColor: "rgba(238,232,220,0.1)",
        position: "relative",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: `${pct}%`,
          backgroundColor: COLORS.red,
          minWidth: "6px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `${pct}%`,
          top: "-14px",
          fontFamily: FONT.mono,
          fontSize: "0.6rem",
          color: COLORS.gold,
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
        }}
      >
        {limit}
      </div>
    </div>
  );
}

export default function WeightClassesPage() {
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
            DIVISION GUIDE
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
            WEIGHT CLASSES
          </h1>
          <p
            style={{
              fontFamily: FONT.body,
              fontSize: "1rem",
              color: COLORS.slate,
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            Every UFC division explained — the champions, the contenders, the historical context, and why each weight class produces its own specific brand of violence. From 115 to 265 pounds.
          </p>

          {/* Scale Visual */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.5rem",
              backgroundColor: COLORS.navy,
              maxWidth: "600px",
            }}
          >
            <div
              style={{
                fontFamily: FONT.mono,
                fontSize: "0.62rem",
                color: COLORS.slate,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.5rem",
              }}
            >
              WEIGHT SCALE — 115 to 265 lbs
            </div>
            <div
              style={{
                height: "6px",
                backgroundColor: "rgba(238,232,220,0.1)",
                position: "relative",
                marginBottom: "1rem",
              }}
            >
              {weightClasses.map((wc) => {
                const lbs = parseInt(wc.limit);
                const minW = 115;
                const maxW = 265;
                const pct = ((lbs - minW) / (maxW - minW)) * 100;
                return (
                  <div
                    key={wc.name}
                    style={{
                      position: "absolute",
                      left: `${pct}%`,
                      top: "-4px",
                      width: "14px",
                      height: "14px",
                      backgroundColor: COLORS.red,
                      borderRadius: "50%",
                      transform: "translateX(-50%)",
                    }}
                    title={`${wc.name} — ${wc.limit}`}
                  />
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: FONT.mono,
                fontSize: "0.6rem",
                color: COLORS.slate,
              }}
            >
              <span>115 lbs (Strawweight)</span>
              <span>265 lbs (Heavyweight)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Classes */}
      {weightClasses.map((wc, idx) => (
        <section
          key={wc.name}
          id={wc.name.toLowerCase().replace(/\s+/g, "-")}
          style={{
            backgroundColor: idx % 2 === 0 ? COLORS.navy : COLORS.dark,
            padding: "4rem 1.5rem",
            borderBottom: `1px solid rgba(238,232,220,0.06)`,
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 340px",
                gap: "3rem",
                flexWrap: "wrap",
              }}
            >
              {/* Main Content */}
              <div>
                {/* Weight indicator */}
                <div style={{ maxWidth: "300px", marginBottom: "1.25rem" }}>
                  <WeightVisual limit={wc.limit} />
                </div>

                <div
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: "0.65rem",
                    color: COLORS.red,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {wc.limit}
                </div>

                <h2
                  style={{
                    fontFamily: FONT.display,
                    fontWeight: 700,
                    fontSize: "clamp(30px, 5vw, 56px)",
                    color: COLORS.bone,
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    lineHeight: 0.95,
                    marginBottom: "2rem",
                  }}
                >
                  {wc.name}
                </h2>

                <p
                  style={{
                    fontFamily: FONT.body,
                    fontSize: "0.98rem",
                    color: COLORS.slate,
                    lineHeight: 1.85,
                    marginBottom: "1.5rem",
                  }}
                >
                  {wc.description}
                </p>

                {/* Division Vibe */}
                <div
                  style={{
                    backgroundColor: COLORS.navyLight,
                    borderLeft: `4px solid ${COLORS.gold}`,
                    padding: "1rem 1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: "0.6rem",
                      color: COLORS.gold,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    DIVISION VIBE
                  </div>
                  <p
                    style={{
                      fontFamily: FONT.body,
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      color: COLORS.bone,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {wc.divisionVibe}
                  </p>
                </div>

                {/* Historical Note */}
                <p
                  style={{
                    fontFamily: FONT.body,
                    fontSize: "0.85rem",
                    color: COLORS.slate,
                    lineHeight: 1.75,
                    opacity: 0.8,
                    borderTop: `1px solid rgba(238,232,220,0.08)`,
                    paddingTop: "1rem",
                  }}
                >
                  {wc.historicalNote}
                </p>
              </div>

              {/* Sidebar: Champion + Contenders */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Champion */}
                <div
                  style={{
                    backgroundColor: COLORS.navyLight,
                    borderLeft: `4px solid ${COLORS.gold}`,
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: "0.6rem",
                      color: COLORS.gold,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    CURRENT CHAMPION
                  </div>
                  {wc.champion ? (
                    <Link
                      href={`/fighters/${wc.champion.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          fontFamily: FONT.display,
                          fontWeight: 700,
                          fontSize: "1.3rem",
                          color: COLORS.bone,
                          textTransform: "uppercase",
                          lineHeight: 1.1,
                        }}
                      >
                        {wc.champion.name}
                      </div>
                      <div
                        style={{
                          fontFamily: FONT.mono,
                          fontSize: "0.65rem",
                          color: COLORS.gold,
                          marginTop: "0.4rem",
                        }}
                      >
                        View profile --&gt;
                      </div>
                    </Link>
                  ) : (
                    <div
                      style={{
                        fontFamily: FONT.display,
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: COLORS.slate,
                        textTransform: "uppercase",
                      }}
                    >
                      VACANT
                    </div>
                  )}
                </div>

                {/* Contenders */}
                <div
                  style={{
                    backgroundColor: COLORS.navyLight,
                    padding: "1.5rem",
                    borderLeft: `4px solid ${COLORS.red}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: "0.6rem",
                      color: COLORS.slate,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      marginBottom: "1rem",
                    }}
                  >
                    TOP CONTENDERS
                  </div>
                  <ol
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    {wc.contenders.map((c, ci) => (
                      <li
                        key={c}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "baseline",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: FONT.mono,
                            fontSize: "0.6rem",
                            color: COLORS.red,
                            minWidth: "1.2rem",
                          }}
                        >
                          #{ci + 1}
                        </span>
                        <span
                          style={{
                            fontFamily: FONT.display,
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            color: COLORS.bone,
                            textTransform: "uppercase",
                          }}
                        >
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
