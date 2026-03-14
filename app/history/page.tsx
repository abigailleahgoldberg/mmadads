import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History of MMA — From Vale Tudo to the Modern UFC",
  description:
    "The complete history of mixed martial arts — from Bruce Lee's philosophy and Gracie challenge matches to UFC 1, the dark ages, the Zuffa buyout, TUF Season 1, and the modern era. A dad's guide to understanding where the sport came from.",
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

interface Section {
  id: string;
  era: string;
  title: string;
  content: string[];
  dadNote?: string;
}

const sections: Section[] = [
  {
    id: "pre-1993",
    era: "PRE-1993",
    title: "Before the UFC: Vale Tudo, the Gracies, and the Idea of a Real Fight",
    content: [
      "Long before the Octagon existed, human beings were arguing about the same question: in a real fight, with no rules, which martial art actually wins? The formal answer to that question — the one conducted in a cage with a referee and a pay-per-view audience — wouldn't arrive until November 1993. But the argument itself is ancient, and its most recent chapter began in Brazil.",
      "Vale Tudo — Portuguese for 'anything goes' — was an informal combat tradition in Brazil dating back to the 1920s and 1930s. Circus performers, catch wrestlers, and fighters trained in various disciplines would compete in street fights and theatrical matches that had almost no restrictions. The Gracie family, who had arrived in Brazil from Japan via the teachings of Mitsuyo Maeda, used these events to test and refine what would become Brazilian jiu-jitsu.",
      "The Gracie Challenge was the crucible. Royce Gracie's father, Helio Gracie, and his relatives issued open challenges to practitioners of other martial arts throughout Brazil for decades — karate men, boxers, capoeira fighters, wrestlers. The fights were usually one-sided. A smaller man with superior leverage and submission knowledge could control and tap out much larger opponents. This wasn't theory. It was demonstrated, repeatedly, in actual competition.",
      "Meanwhile, in the United States, Bruce Lee was making an intellectual argument that would prove prophetic. Lee's Jeet Kune Do rejected the rigid traditions of classical martial arts and insisted that a real fighter needed to be formless — adaptable across striking, grappling, and every range of combat. He never competed in the modern sense, but the philosophy he articulated in interviews and books anticipated mixed martial arts by twenty years. When MMA exploded in the 1990s, people who had read Lee's work recognized that the sport was the physical expression of exactly what he'd been describing.",
      "The missing ingredient was television, money, and a format. Those arrived in 1993.",
    ],
    dadNote: "This is the 'why' behind the whole sport. Your kids might think MMA started with Conor McGregor. It started with a Brazilian family in the 1920s who wanted to prove their grappling art was the most effective in the world. Turns out they were right.",
  },
  {
    id: "ufc-1",
    era: "NOVEMBER 1993",
    title: "UFC 1: The Night That Changed Everything",
    content: [
      "The McNichols Sports Arena in Denver, Colorado. November 12, 1993. Eight fighters. A single-night, eight-man tournament. No weight classes. No time limits. No rounds. Almost no rules. A $50,000 prize for the man still standing at the end of the night.",
      "The tournament was the brainchild of Art Davie, a marketing executive who had become fascinated by the Gracie family's challenge matches and convinced a television production company called Semaphore Entertainment Group (SEG) to produce the event. The Gracies agreed to participate, sending Royce Gracie — not the most physically imposing member of the family, but arguably the most technically refined — as their representative. The selection was deliberate. If a relatively slight, unassuming Brazilian could submit larger, more aggressive fighters, the demonstration of jiu-jitsu's effectiveness would be unmistakable.",
      "That's exactly what happened. Royce Gracie submitted Gerard Gordeau (a Dutch savate fighter) in the final after working through Boxer Art Jimmerson, who famously wore one boxing glove and seemed unsure of what to do when Gracie pulled guard, and Ken Shamrock, the veteran catch wrestler who Gracie choked unconscious. Three fights. Three submissions. The tournament lasted about five minutes total of fighting time.",
      "The event was deliberately positioned as an answer to a question: what really works? The promotional material leaned into the no-rules angle. There were no judges' scorecards, no rounds, no time limits. If the cage was small enough and the rules minimal enough, a real answer would emerge. What emerged was that Brazilian jiu-jitsu, in the hands of a skilled practitioner, could neutralize striking, avoid damage, and control the outcome of a fight against opponents with different skill sets.",
      "Forty-six thousand pay-per-view buys. Not huge by the standards of established combat sports, but enough to prove there was an audience. SEG produced more events. More fighters competed. The format slowly evolved. And the sport that would eventually be called mixed martial arts began to take shape — messily, imperfectly, controversially, but undeniably.",
    ],
    dadNote: "UFC 1 is required watching for any serious MMA fan. The fights are dated but the historical importance is enormous. It's the moment the question got an empirical answer in front of a camera. Royce Gracie in those early events is one of the most important athletes of the 20th century.",
  },
  {
    id: "dark-ages",
    era: "1997–2001",
    title: "The Dark Ages: John McCain, PPV Bans, and the Near-Death of the Sport",
    content: [
      "The UFC almost died. This is not hyperbole. Between 1997 and 2001, the sport was banned from pay-per-view in most major cable markets, suspended or prohibited in a majority of US states, and publicly attacked by one of the most powerful men in American politics. It survived because of the stubbornness of the people who believed in it and the loyal base of hardcore fans who kept buying tapes when the events were no longer on TV.",
      "The political attack came primarily from Senator John McCain of Arizona, who had become convinced that no-holds-barred fighting was human cockfighting — his phrase, and one that stuck. McCain was a boxing fan (and a former Navy officer who understood physical toughness) but found the lack of rules in early UFC events objectionable. He sent letters to governors of all 50 states urging them to ban the events. Many did. SEG, the UFC's promoter, lost the pay-per-view deals that were their primary revenue source when cable companies dropped the events in response to the political pressure.",
      "The sport continued, but in a diminished form. Events were held in Native American casinos and other venues not subject to state athletic commission oversight. The production values declined. The fighter pool shrunk as top athletes found other opportunities. The events that survived were often poorly organized, with inconsistent rules and limited medical oversight.",
      "What kept the sport alive during this period was the tape and later VHS and DVD market — particularly in Japan. PRIDE Fighting Championships, launched in Tokyo in 1997, became the world's premier MMA organization for almost a decade. Japanese audiences embraced the sport with an enthusiasm that American audiences had been politically discouraged from sharing. PRIDE produced better production values, bigger international names, and events in giant arenas that made the diminished UFC look small by comparison.",
      "The path out of the dark ages required something the UFC had previously resisted: working with athletic commissions, adopting unified rules, and presenting the sport as a legitimate athletic competition rather than a spectacle. That shift began in earnest when Zuffa purchased the organization in 2001.",
    ],
    dadNote: "The dark ages are why MMA dads of a certain age used to watch the sport on bootleg tapes and sketchy websites. The UFC almost disappeared. The fact that it became a multi-billion dollar organization is a genuine comeback story worth telling.",
  },
  {
    id: "zuffa-era",
    era: "2001–2005",
    title: "The Zuffa Era: Two Million Dollars and a Lifeline",
    content: [
      "In January 2001, Lorenzo and Frank Fertitta — Las Vegas casino executives and lifelong boxing fans — bought the UFC for two million dollars. The organization was deeply in debt, its pay-per-view deals were dead, and many industry observers thought the purchase was throwing good money after bad. Dana White, the Fertittas' childhood friend and a boxing manager, came on as president. He had about thirty days of operating expenses in the bank.",
      "The first two years were financially brutal. Zuffa lost money every year as it worked to legitimize the sport. The most important strategic move was embracing the athletic commissions rather than avoiding them. By getting Nevada and New Jersey to sanction MMA under the Unified Rules of Mixed Martial Arts — codified in 2001 — Zuffa gave the sport a regulatory framework that allowed cable companies to carry events without political risk. The unified rules introduced mandatory gloves, prohibited head stomps and soccer kicks, and established a weight class system.",
      "The Unified Rules were imperfect — and remain controversial on multiple points today — but they were transformational for the sport's legitimacy. With commissions involved, the 'human cockfighting' framing became harder to sustain. This was now a regulated athletic competition, judged by officials, with medical oversight. The political argument against it collapsed.",
      "Meanwhile, Zuffa was building the fighter roster. The acquisition of PRIDE fighters, the signing of top free agents, and the development of in-house talent started producing fight cards that the hardcore audience recognized as elite-level competition. The pay-per-view numbers began climbing. By 2004, the UFC was profitable. The turnaround was complete.",
      "Dana White became the public face of the organization during this period and was instrumental in its success. His willingness to talk about the sport constantly, defend it against critics, and build relationships with media changed the public conversation. His confrontational personality made for good television and generated coverage that the sport had been denied during the McCain years.",
    ],
    dadNote: "Two million dollars. That's what the UFC sold for in 2001. By 2016 it sold for four billion. The Fertitta brothers and Dana White are the reason the sport exists in its current form. The business story is as interesting as the fight story.",
  },
  {
    id: "tuf-2005",
    era: "APRIL 2005",
    title: "The Ultimate Fighter: The Show That Saved the Sport",
    content: [
      "The Ultimate Fighter Season 1 premiered on Spike TV on January 17, 2005. The format was simple: sixteen fighters competing in a reality show house, with elimination matches deciding who advanced and who went home. The winner would receive a UFC contract. The show was financed by Zuffa itself — the network wasn't willing to pay production costs for an unproven MMA reality show, so the UFC covered the production expenses and gave Spike the show for free in exchange for the television real estate.",
      "The finale of Season 1, held April 9, 2005, changed everything. Forrest Griffin and Stephan Bonnar fought for the light heavyweight contract in a bout that — in terms of its impact on the sport's growth — may be the single most important fight in MMA history. It was not a technically perfect fight. It was a blood-soaked, sweat-soaked, relentless war in which two men who were not yet stars gave everything they had for three rounds in front of a live crowd that kept building to a crescendo.",
      "The Nielsen ratings for the finale were extraordinary for a free-cable program. The phone lines at the UFC offices were overwhelmed with subscription requests the next morning. Dana White has said many times that the Griffin-Bonnar fight saved the UFC. The hyperbole is probably justified. The show had built an audience that cared about the characters. The finale gave them a fight that they felt, viscerally, in real time.",
      "White made a post-fight decision that became legendary in the sport: he gave both Griffin and Bonnar contracts, even though the format dictated that only the winner would receive one. The gesture was genuine and smart. The crowd loved both fighters. Rewarding both fighters was the right call and it generated enormous goodwill.",
      "The Ultimate Fighter continued for many seasons after Season 1 and became the UFC's primary vehicle for introducing the sport to casual audiences for a decade. The reality format made fighters into characters with narratives. The competition gave stakes to every episode. The show was not always good — later seasons stretched the format thin — but Season 1 and its finale did something irreplaceable: it gave the sport a mainstream television moment at exactly the right time.",
    ],
    dadNote: "Find the Griffin-Bonnar fight on YouTube. Watch it with your kids who think they know the sport. Tell them this is the fight that made the modern UFC possible. Then explain what the sport looked like before it happened. The context makes the fight hit differently.",
  },
  {
    id: "golden-era",
    era: "2006–2015",
    title: "The Golden Era: GSP, Anderson Silva, Jon Jones, and the Global Explosion",
    content: [
      "The decade following TUF Season 1 was the golden era of MMA -- a period of simultaneous dominance across multiple weight classes by generationally talented champions, rapid global expansion, and the sport's establishment as a mainstream athletic competition. The names from this period -- Georges St-Pierre, Anderson Silva, Jon Jones, Brock Lesnar, Ronda Rousey -- became the first genuinely crossover stars that MMA produced.",
      "Anderson Silva's run at middleweight from 2006 to 2013 set standards that remain unrepeated. He defended the 185-pound title ten consecutive times against the best competition in the division, producing performances of such technical artistry that they became cultural moments in MMA. The Forrest Griffin knockout in 2009 remains one of the most played clips in the sport's history -- Griffin threw punches that arrived on empty air while Silva stood nearly motionless, then countered with a single left hand that dropped the former TUF champion like he'd been electrocuted. Seven years of that level of dominance.",
      "Georges St-Pierre's welterweight reign was a different kind of dominance -- methodical, systematic, and intellectually complete. GSP won the belt, lost it to Matt Serra in one of the sport's greatest upsets, came back and won it again, and then defended it nine consecutive times against every legitimate contender the division offered. His ability to gameplan and execute made him the model of what a complete MMA fighter looked like. His conditioning never failed him in championship rounds.",
      "Jon Jones arrived in 2011 as the youngest UFC champion in history and proceeded to dismantle every challenger the light heavyweight division produced with an unorthodox style built on reach, wrestling, and the oblique kick that terrified opponents before fights even began. By 2014 he was the consensus greatest fighter in the sport, the pound-for-pound number one ranking endorsed by everyone who followed the sport seriously.",
      "Brock Lesnar's brief heavyweight run -- from 2008 to 2011 -- showed what crossover star power could do for pay-per-view numbers. A former WWE champion and NCAA national wrestling champion, Lesnar became the UFC's biggest PPV draw almost immediately, pulling audiences from wrestling and mainstream sports who had never watched an MMA event before. The fights were not always pretty but the business numbers were extraordinary.",
      "The Fox deal in 2011 -- a seven-year partnership that put UFC fights on network television -- marked the moment the sport achieved genuine mainstream status. Network television didn't just reach hardcore fans. It reached the casual sports audience, the families watching football and baseball, the demographic that makes a sport culturally significant. The UFC was finally there.",
    ],
    dadNote: "If you got into the sport during this era, you understand why people who watched it then have a certain reverence in their voices when they talk about it. Silva, GSP, and Jones at their peaks were athletic performances unlike anything the sport had seen before.",
  },
  {
    id: "modern-era",
    era: "2016–PRESENT",
    title: "The Modern Era: Conor, ESPN, and the Four-Billion Dollar Sport",
    content: [
      "The modern era of MMA begins with Conor McGregor. Not because he was the greatest fighter -- the record doesn't support that -- but because he was the first fighter to transcend the sport entirely and become a mainstream cultural figure whose fame extended well beyond combat sports. The southpaw from Dublin who knocked out Jose Aldo in 13 seconds, who held two UFC titles simultaneously, who fought Floyd Mayweather in the most commercially successful boxing match in history -- McGregor did things to the UFC's business that no single athlete had done before.",
      "The McGregor effect was real and measurable. Pay-per-view buy rates for his fights exceeded anything the UFC had previously produced. His personal brand -- the suits, the Irish accent, the relentless self-promotion -- created a template that subsequent fighters imitated with varying degrees of success. He brought a generation of fans to MMA who stayed for the sport after the phenomenon.",
      "In 2016, WME-IMG purchased the UFC from the Fertittas for four billion dollars -- the largest purchase price for a sports property in history at the time. The two-million-dollar purchase in 2001 had become a four-billion-dollar asset fifteen years later. The sale reflected both the sport's commercial success and the institutional confidence that it would continue growing.",
      "The ESPN deal in 2018 moved UFC events from pay-per-view-only to a subscription streaming model (ESPN+) for Fight Night events, with the biggest numbered events remaining on pay-per-view. The ESPN partnership gave the sport consistent, high-production exposure on one of the world's most recognized sports media brands. It also changed the business model, trading some pay-per-view revenue for subscription volume and brand legitimacy.",
      "Women's divisions became established features of the UFC roster during this period. Ronda Rousey's success opened the door; the depth developed behind her. Amanda Nunes became the most decorated champion in the organization's history, holding titles simultaneously across two divisions. The women's flyweight, strawweight, bantamweight, and featherweight divisions developed genuine depth and produced fights that competed with the men's divisions on any metric of quality.",
      "The UFC Performance Institute, opened in Las Vegas in 2017, reflected the sport's maturation. World-class sports science, coaching infrastructure, and athlete development under one roof. The institute represented the institutionalization of an approach to athletic preparation that had previously been entirely dependent on individual teams and coaches. The sport professionalized at every level during this period.",
    ],
    dadNote: "The modern era is the one your kids grew up in. McGregor made the sport cool in a way it hadn't been before, and ESPN made it respectable in a way that Fox had started. The women's divisions during this period are genuinely essential viewing.",
  },
  {
    id: "rules",
    era: "GOVERNANCE",
    title: "The Rules: How MMA Learned to Regulate Itself",
    content: [
      "The Unified Rules of Mixed Martial Arts were adopted by the New Jersey State Athletic Control Board in 2000 and Nevada followed shortly after. These rules became the standard for sanctioned MMA events across North America and eventually internationally. Understanding the rules is understanding what the sport values -- and why certain techniques are prohibited while others that seem more dangerous are permitted.",
      "The weight classes established by the unified rules are: Strawweight (115 lbs), Flyweight (125 lbs), Bantamweight (135 lbs), Featherweight (145 lbs), Lightweight (155 lbs), Welterweight (170 lbs), Middleweight (185 lbs), Light Heavyweight (205 lbs), and Heavyweight (206-265 lbs). The gaps between weight classes were designed to group fighters with similar physical attributes together. Catchweight fights -- where two fighters agree on a non-standard weight -- are allowed but don't qualify for titles.",
      "Prohibited techniques under the unified rules include: eye gouging, groin attacks, fish-hooking, headbutts, biting, hair-pulling, throat strikes, downward elbow strikes (so-called 12-6 elbows), soccer kicks and stomps to a downed opponent, and strikes to the back of the head and spine. Some of these prohibitions are medically obvious. Others -- particularly the 12-6 elbow rule -- have been criticized as arbitrary. The rule against stomps and soccer kicks to downed opponents, which are prohibited in Nevada but allowed in some international jurisdictions, remains one of the most debated rules in the sport.",
      "Judging in MMA uses the 10-must scoring system borrowed from boxing. The winner of a round receives 10 points; the loser receives 9 (or fewer if they were significantly dominated). Judges are instructed to prioritize effective striking first, then effective grappling, then aggression, then cage/ring control. In practice, judging inconsistency remains one of the most significant ongoing problems in the sport -- a problem that has produced dozens of controversial decisions and ongoing debate about reform.",
      "The unified rules also require mandatory gloves (typically 4-6 oz MMA gloves with open fingers for grappling), a mandatory mouthguard, groin protection for male fighters, and specific specifications for the cage or ring. Athletic commission oversight includes medical clearances before fights and ringside physicians who can stop bouts for safety reasons.",
    ],
    dadNote: "Knowing the rules makes watching the sport better. When your kids ask why the fighter can't kick the guy who's on the ground, or why that elbow was legal, knowing the ruleset gives you the answer. The 12-6 elbow rule is specifically a great conversation starter about how arbitrary some of the regulations can be.",
  },
  {
    id: "key-figures",
    era: "KEY FIGURES",
    title: "The People Who Built the Sport",
    content: [
      "Dana White has been the president of the UFC since 2001 and is, by any measure, the most important individual in the history of MMA. His tenure spans the near-bankruptcy of the SEG era, the Zuffa acquisition, the dark days of financial losses, the TUF breakthrough, the Fox deal, the ESPN deal, and the four-billion dollar sale. He has been the public face and primary advocate for the sport for over two decades. His personality -- confrontational, emotional, completely committed -- has made him as many enemies as allies, but the sport's success happened under his leadership.",
      "Big John McCarthy is the most respected and experienced referee in MMA history. A former LAPD officer who became the sport's first iconic referee, McCarthy developed the safety protocols and referee judgment criteria that define the role to this day. His catchphrase 'Let's get it on!' has been used to start thousands of championship fights. He has also been a consistent advocate for reform in areas where the sport falls short, including judging and fighter safety.",
      "Joe Rogan has been the UFC's primary commentator since 1997 and is the voice most fans associate with the sport. A comedian and podcast host who trains Brazilian jiu-jitsu and has a genuine passion for MMA, Rogan's ability to explain technical concepts to casual viewers while maintaining the excitement and emotion of live events made him as important to the sport's growth as any fighter. The combination of his commentary work and his podcast -- The Joe Rogan Experience -- gave the sport a consistent, dedicated platform that reached tens of millions of people.",
      "Herb Dean is the second most respected referee in the sport's history, known for the speed and accuracy of his stoppage calls. His ability to protect fighters at the exact moment when intervention is necessary -- not too early, not too late -- has earned universal respect from fighters and coaches who understand how difficult that judgment is under pressure.",
      "The Gracie family -- Helio, Royce, Rickson, Renzo, and many others -- are the founding dynasty of modern MMA. Without Brazilian jiu-jitsu, without the Gracie challenge matches, without Royce's performance at UFC 1, the sport as we know it does not exist. The family's ongoing role in promoting grappling as a core athletic discipline continues to shape how the sport trains and competes.",
    ],
    dadNote: "If your kids want to know who to learn about beyond the fighters, start with these five. Dana White is the business story. McCarthy and Dean are the safety story. Rogan is the media story. The Gracies are the origin story. Together they cover why the sport is what it is today.",
  },
];

export default function HistoryPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: COLORS.dark,
          borderBottom: `3px solid ${COLORS.red}`,
          padding: "5rem 1.5rem 4rem",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: FONT.mono,
              fontSize: "0.72rem",
              color: COLORS.red,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "1.25rem",
            }}
          >
            MMA HISTORY
          </div>
          <h1
            style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "clamp(42px, 8vw, 96px)",
              color: COLORS.bone,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 0.9,
              marginBottom: "1.5rem",
            }}
          >
            THE HISTORY<br />
            <span style={{ color: COLORS.red }}>OF MMA</span>
          </h1>
          <p
            style={{
              fontFamily: FONT.body,
              fontSize: "1.1rem",
              color: COLORS.slate,
              lineHeight: 1.8,
              maxWidth: "640px",
            }}
          >
            From Gracie challenge matches in 1930s Brazil to a four-billion dollar sport watched by millions. 
            The complete story of how mixed martial arts was born, nearly killed, and became the most exciting 
            athletic competition in the world. Dad-approved depth. No gatekeeping.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section
        style={{
          backgroundColor: COLORS.navy,
          padding: "3rem 1.5rem",
          borderBottom: `1px solid rgba(238,232,220,0.08)`,
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "0.9rem",
              color: COLORS.bone,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "1.25rem",
            }}
          >
            JUMP TO SECTION
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "0.5rem",
            }}
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  fontFamily: FONT.mono,
                  fontSize: "0.68rem",
                  color: COLORS.slate,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  padding: "0.4rem 0",
                  borderBottom: `1px solid rgba(238,232,220,0.06)`,
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <span style={{ color: COLORS.red }}>--</span>
                {s.era}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          style={{
            backgroundColor: idx % 2 === 0 ? COLORS.dark : COLORS.navy,
            padding: "5rem 1.5rem",
            borderBottom: `1px solid rgba(238,232,220,0.06)`,
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            {/* Era Label */}
            <div
              style={{
                fontFamily: FONT.mono,
                fontSize: "0.7rem",
                color: COLORS.gold,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "0.75rem",
              }}
            >
              {section.era}
            </div>

            {/* Section Title */}
            <h2
              style={{
                fontFamily: FONT.display,
                fontWeight: 700,
                fontSize: "clamp(24px, 4vw, 44px)",
                color: COLORS.bone,
                textTransform: "uppercase",
                letterSpacing: "0.01em",
                lineHeight: 1.1,
                marginBottom: "2.5rem",
                paddingBottom: "1rem",
                borderBottom: `2px solid ${COLORS.red}`,
              }}
            >
              {section.title}
            </h2>

            {/* Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {section.content.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: FONT.body,
                    fontSize: "1rem",
                    color: COLORS.slate,
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Dad Note */}
            {section.dadNote && (
              <div
                style={{
                  marginTop: "3rem",
                  backgroundColor: COLORS.navyLight,
                  borderLeft: `5px solid ${COLORS.gold}`,
                  padding: "1.5rem 2rem",
                }}
              >
                <div
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: "0.62rem",
                    color: COLORS.gold,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "0.75rem",
                  }}
                >
                  DAD TAKE
                </div>
                <p
                  style={{
                    fontFamily: FONT.body,
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: COLORS.bone,
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {section.dadNote}
                </p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Continue Reading */}
      <section
        style={{
          backgroundColor: COLORS.bone,
          padding: "5rem 1.5rem",
          borderTop: `3px solid ${COLORS.dark}`,
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              fontFamily: FONT.display,
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 56px)",
              color: COLORS.dark,
              textTransform: "uppercase",
              letterSpacing: "0.01em",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
            }}
          >
            GO DEEPER
          </div>
          <p
            style={{
              fontFamily: FONT.body,
              fontSize: "1rem",
              color: COLORS.slate,
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
            }}
          >
            Now that you know the history, meet the fighters who made it and follow the events that are writing the next chapter.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "FIGHTER DATABASE", href: "/fighters" },
              { label: "EVENTS", href: "/events" },
              { label: "WEIGHT CLASSES", href: "/weight-classes" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: FONT.display,
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  backgroundColor: COLORS.dark,
                  color: COLORS.bone,
                  padding: "0.9rem 1.75rem",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
