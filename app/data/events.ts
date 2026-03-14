export interface Fight {
  fighter1: string;
  fighter2: string;
  weightClass: string;
  isMainEvent?: boolean;
  isTitleFight?: boolean;
  winner?: string;
  method?: string;
  round?: number;
}

export interface UFCEvent {
  slug: string;
  name: string;
  date: string;
  location: string;
  venue: string;
  type: "ppv" | "fight-night" | "apex";
  mainCard: Fight[];
  completed: boolean;
  mainEventWinner?: string;
}

export const events: UFCEvent[] = [
  // ── COMPLETED EVENTS ─────────────────────────────────────────────
  {
    slug: "ufc-300",
    name: "UFC 300",
    date: "2024-04-13",
    location: "Las Vegas, Nevada",
    venue: "T-Mobile Arena",
    type: "ppv",
    completed: true,
    mainEventWinner: "Alex Pereira",
    mainCard: [
      {
        fighter1: "Alex Pereira",
        fighter2: "Jamahal Hill",
        weightClass: "Light Heavyweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Alex Pereira",
        method: "KO",
        round: 1,
      },
      {
        fighter1: "Max Holloway",
        fighter2: "Justin Gaethje",
        weightClass: "Lightweight",
        isTitleFight: true,
        winner: "Max Holloway",
        method: "KO",
        round: 5,
      },
      {
        fighter1: "Zhang Weili",
        fighter2: "Yan Xiaonan",
        weightClass: "Strawweight",
        isTitleFight: true,
        winner: "Zhang Weili",
        method: "KO",
        round: 2,
      },
      {
        fighter1: "Charles Oliveira",
        fighter2: "Arman Tsarukyan",
        weightClass: "Lightweight",
        winner: "Arman Tsarukyan",
        method: "Decision",
        round: 3,
      },
      {
        fighter1: "Bo Nickal",
        fighter2: "Cody Brundage",
        weightClass: "Middleweight",
        winner: "Bo Nickal",
        method: "Sub",
        round: 1,
      },
    ],
  },
  {
    slug: "ufc-301",
    name: "UFC 301",
    date: "2024-05-04",
    location: "Rio de Janeiro, Brazil",
    venue: "Farmasi Arena",
    type: "ppv",
    completed: true,
    mainEventWinner: "Alexandre Pantoja",
    mainCard: [
      {
        fighter1: "Alexandre Pantoja",
        fighter2: "Steve Erceg",
        weightClass: "Flyweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Alexandre Pantoja",
        method: "Sub",
        round: 5,
      },
      {
        fighter1: "Jose Aldo",
        fighter2: "Jonathan Martinez",
        weightClass: "Bantamweight",
        winner: "Jonathan Martinez",
        method: "Decision",
        round: 3,
      },
      {
        fighter1: "Paul Craig",
        fighter2: "Carlos Ulberg",
        weightClass: "Light Heavyweight",
        winner: "Carlos Ulberg",
        method: "KO",
        round: 2,
      },
    ],
  },
  {
    slug: "ufc-302",
    name: "UFC 302",
    date: "2024-06-01",
    location: "Newark, New Jersey",
    venue: "Prudential Center",
    type: "ppv",
    completed: true,
    mainEventWinner: "Islam Makhachev",
    mainCard: [
      {
        fighter1: "Islam Makhachev",
        fighter2: "Dustin Poirier",
        weightClass: "Lightweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Islam Makhachev",
        method: "Sub",
        round: 5,
      },
      {
        fighter1: "Sean Strickland",
        fighter2: "Paulo Costa",
        weightClass: "Middleweight",
        winner: "Sean Strickland",
        method: "Decision",
        round: 3,
      },
      {
        fighter1: "Katlyn Chookagian",
        fighter2: "Natalia Silva",
        weightClass: "Flyweight",
        winner: "Natalia Silva",
        method: "Decision",
        round: 3,
      },
    ],
  },
  {
    slug: "ufc-303",
    name: "UFC 303",
    date: "2024-06-29",
    location: "Las Vegas, Nevada",
    venue: "T-Mobile Arena",
    type: "ppv",
    completed: true,
    mainEventWinner: "Alex Pereira",
    mainCard: [
      {
        fighter1: "Alex Pereira",
        fighter2: "Jiri Prochazka",
        weightClass: "Light Heavyweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Alex Pereira",
        method: "TKO",
        round: 4,
      },
      {
        fighter1: "Michael Chandler",
        fighter2: "Charles Oliveira",
        weightClass: "Lightweight",
        winner: "Michael Chandler",
        method: "TKO",
        round: 3,
      },
      {
        fighter1: "Ian Machado Garry",
        fighter2: "Michael Page",
        weightClass: "Welterweight",
        winner: "Ian Machado Garry",
        method: "Decision",
        round: 3,
      },
    ],
  },
  {
    slug: "ufc-304",
    name: "UFC 304",
    date: "2024-07-27",
    location: "Manchester, England",
    venue: "Co-op Live Arena",
    type: "ppv",
    completed: true,
    mainEventWinner: "Belal Muhammad",
    mainCard: [
      {
        fighter1: "Leon Edwards",
        fighter2: "Belal Muhammad",
        weightClass: "Welterweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Belal Muhammad",
        method: "Decision",
        round: 5,
      },
      {
        fighter1: "Tom Aspinall",
        fighter2: "Curtis Blaydes",
        weightClass: "Heavyweight",
        isTitleFight: true,
        winner: "Tom Aspinall",
        method: "KO",
        round: 1,
      },
      {
        fighter1: "Molly McCann",
        fighter2: "Bruna Brasil",
        weightClass: "Strawweight",
        winner: "Molly McCann",
        method: "Decision",
        round: 3,
      },
    ],
  },
  {
    slug: "ufc-305",
    name: "UFC 305",
    date: "2024-08-17",
    location: "Perth, Western Australia",
    venue: "RAC Arena",
    type: "ppv",
    completed: true,
    mainEventWinner: "Dricus Du Plessis",
    mainCard: [
      {
        fighter1: "Dricus Du Plessis",
        fighter2: "Israel Adesanya",
        weightClass: "Middleweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Dricus Du Plessis",
        method: "Sub",
        round: 4,
      },
      {
        fighter1: "Islam Makhachev",
        fighter2: "Arman Tsarukyan",
        weightClass: "Lightweight",
        isTitleFight: true,
        winner: "Islam Makhachev",
        method: "Decision",
        round: 5,
      },
      {
        fighter1: "Justin Tafa",
        fighter2: "Carlos Alves",
        weightClass: "Heavyweight",
        winner: "Justin Tafa",
        method: "KO",
        round: 1,
      },
    ],
  },
  {
    slug: "ufc-306",
    name: "UFC 306: Noche UFC",
    date: "2024-09-14",
    location: "Las Vegas, Nevada",
    venue: "Sphere",
    type: "ppv",
    completed: true,
    mainEventWinner: "Merab Dvalishvili",
    mainCard: [
      {
        fighter1: "Sean O'Malley",
        fighter2: "Merab Dvalishvili",
        weightClass: "Bantamweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Merab Dvalishvili",
        method: "Decision",
        round: 5,
      },
      {
        fighter1: "Valentina Shevchenko",
        fighter2: "Alexa Grasso",
        weightClass: "Flyweight",
        isTitleFight: true,
        winner: "Alexa Grasso",
        method: "Decision",
        round: 5,
      },
    ],
  },
  {
    slug: "ufc-308",
    name: "UFC 308",
    date: "2024-10-26",
    location: "Abu Dhabi, UAE",
    venue: "Etihad Arena",
    type: "ppv",
    completed: true,
    mainEventWinner: "Ilia Topuria",
    mainCard: [
      {
        fighter1: "Ilia Topuria",
        fighter2: "Max Holloway",
        weightClass: "Featherweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Ilia Topuria",
        method: "KO",
        round: 3,
      },
      {
        fighter1: "Magomed Ankalaev",
        fighter2: "Aleksandar Rakic",
        weightClass: "Light Heavyweight",
        winner: "Magomed Ankalaev",
        method: "Decision",
        round: 3,
      },
    ],
  },
  {
    slug: "ufc-309",
    name: "UFC 309",
    date: "2024-11-16",
    location: "New York City, New York",
    venue: "Madison Square Garden",
    type: "ppv",
    completed: true,
    mainEventWinner: "Jon Jones",
    mainCard: [
      {
        fighter1: "Jon Jones",
        fighter2: "Stipe Miocic",
        weightClass: "Heavyweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Jon Jones",
        method: "TKO",
        round: 3,
      },
      {
        fighter1: "Charles Oliveira",
        fighter2: "Michael Chandler",
        weightClass: "Lightweight",
        winner: "Charles Oliveira",
        method: "Sub",
        round: 3,
      },
      {
        fighter1: "Bo Nickal",
        fighter2: "Paul Craig",
        weightClass: "Middleweight",
        winner: "Bo Nickal",
        method: "Decision",
        round: 3,
      },
    ],
  },
  {
    slug: "ufc-311",
    name: "UFC 311",
    date: "2025-01-18",
    location: "Inglewood, California",
    venue: "Intuit Dome",
    type: "ppv",
    completed: true,
    mainEventWinner: "Islam Makhachev",
    mainCard: [
      {
        fighter1: "Islam Makhachev",
        fighter2: "Arman Tsarukyan",
        weightClass: "Lightweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Islam Makhachev",
        method: "Sub",
        round: 3,
      },
      {
        fighter1: "Merab Dvalishvili",
        fighter2: "Umar Nurmagomedov",
        weightClass: "Bantamweight",
        isTitleFight: true,
        winner: "Merab Dvalishvili",
        method: "Decision",
        round: 5,
      },
    ],
  },
  {
    slug: "ufc-313",
    name: "UFC 313",
    date: "2025-03-08",
    location: "Las Vegas, Nevada",
    venue: "T-Mobile Arena",
    type: "ppv",
    completed: true,
    mainEventWinner: "Alex Pereira",
    mainCard: [
      {
        fighter1: "Alex Pereira",
        fighter2: "Magomed Ankalaev",
        weightClass: "Light Heavyweight",
        isMainEvent: true,
        isTitleFight: true,
        winner: "Alex Pereira",
        method: "Decision",
        round: 5,
      },
      {
        fighter1: "Renato Moicano",
        fighter2: "Michael Chandler",
        weightClass: "Lightweight",
        winner: "Renato Moicano",
        method: "Sub",
        round: 1,
      },
    ],
  },
  // ── UPCOMING EVENTS ─────────────────────────────────────────────
  {
    slug: "ufc-314",
    name: "UFC 314",
    date: "2025-04-12",
    location: "Miami, Florida",
    venue: "Kaseya Center",
    type: "ppv",
    completed: false,
    mainCard: [
      {
        fighter1: "Ilia Topuria",
        fighter2: "Charles Oliveira",
        weightClass: "Lightweight",
        isMainEvent: true,
        isTitleFight: false,
      },
      {
        fighter1: "Paddy Pimblett",
        fighter2: "Michael Chandler",
        weightClass: "Lightweight",
      },
      {
        fighter1: "Joaquin Buckley",
        fighter2: "Sean Brady",
        weightClass: "Welterweight",
      },
    ],
  },
  {
    slug: "ufc-315",
    name: "UFC 315",
    date: "2025-05-10",
    location: "Montreal, Quebec, Canada",
    venue: "Bell Centre",
    type: "ppv",
    completed: false,
    mainCard: [
      {
        fighter1: "Belal Muhammad",
        fighter2: "Jack Della Maddalena",
        weightClass: "Welterweight",
        isMainEvent: true,
        isTitleFight: true,
      },
      {
        fighter1: "Robert Whittaker",
        fighter2: "Khamzat Chimaev",
        weightClass: "Middleweight",
      },
    ],
  },
  {
    slug: "ufc-fight-night-columbus-2026",
    name: "UFC Fight Night: Columbus",
    date: "2026-04-05",
    location: "Columbus, Ohio",
    venue: "Nationwide Arena",
    type: "fight-night",
    completed: false,
    mainCard: [
      {
        fighter1: "Bo Nickal",
        fighter2: "Andre Petroski",
        weightClass: "Middleweight",
        isMainEvent: true,
      },
      {
        fighter1: "Dustin Poirier",
        fighter2: "Dan Hooker",
        weightClass: "Lightweight",
      },
    ],
  },
  {
    slug: "ufc-317",
    name: "UFC 317",
    date: "2026-05-16",
    location: "Las Vegas, Nevada",
    venue: "T-Mobile Arena",
    type: "ppv",
    completed: false,
    mainCard: [
      {
        fighter1: "Jon Jones",
        fighter2: "Tom Aspinall",
        weightClass: "Heavyweight",
        isMainEvent: true,
        isTitleFight: true,
      },
      {
        fighter1: "Islam Makhachev",
        fighter2: "Dustin Poirier",
        weightClass: "Lightweight",
        isTitleFight: true,
      },
    ],
  },
  {
    slug: "ufc-318",
    name: "UFC 318",
    date: "2026-07-11",
    location: "Houston, Texas",
    venue: "Toyota Center",
    type: "ppv",
    completed: false,
    mainCard: [
      {
        fighter1: "Dricus Du Plessis",
        fighter2: "Robert Whittaker",
        weightClass: "Middleweight",
        isMainEvent: true,
        isTitleFight: true,
      },
      {
        fighter1: "Ilia Topuria",
        fighter2: "Arman Tsarukyan",
        weightClass: "Lightweight",
        isTitleFight: false,
      },
    ],
  },
];

export function getEventBySlug(slug: string): UFCEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(): UFCEvent[] {
  return events.filter((e) => !e.completed);
}

export function getCompletedEvents(): UFCEvent[] {
  return events.filter((e) => e.completed);
}
