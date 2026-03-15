// Auto-generated from TheSportsDB API
// Last updated: 2026-03-15T08:05:48.145Z
// Do not edit manually — run scripts/update-fight-data.ts to refresh

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
  type: 'ppv' | 'fight-night' | 'apex';
  mainCard: Fight[];
  completed: boolean;
  mainEventWinner?: string;
  sportsDbId?: string;
}

export const events: UFCEvent[] = [
  {
    "slug": "ufc-fight-night-249-dern-vs-ribas-2",
    "name": "UFC Fight Night 249 Dern vs Ribas 2",
    "date": "2025-01-11",
    "location": "Las Vegas, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "completed": true,
    "mainCard": [],
    "sportsDbId": "2179599"
  },
  {
    "slug": "ufc-311-makhachev-vs-moicano",
    "name": "UFC 311 Makhachev vs Moicano",
    "date": "2025-01-19",
    "location": "Inglewood, California, United States",
    "venue": "Intuit Dome",
    "type": "ppv",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Islam Makhachev (c)",
        "fighter2": "Renato Moicano",
        "weightClass": "Lightweight",
        "isMainEvent": true,
        "isTitleFight": true,
        "winner": "Islam Makhachev (c)",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Merab Dvalishvili (c)",
        "fighter2": "Umar Nurmagomedov",
        "weightClass": "Bantamweight",
        "isTitleFight": true,
        "winner": "Merab Dvalishvili (c)",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Jiří Procházka",
        "fighter2": "Jamahal Hill",
        "weightClass": "Light Heavyweight",
        "winner": "Jiří Procházka",
        "method": "TKO",
        "round": 3
      },
      {
        "fighter1": "Jailton Almeida",
        "fighter2": "Serghei Spivac",
        "weightClass": "Heavyweight",
        "winner": "Jailton Almeida",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Reinier de Ridder",
        "fighter2": "Kevin Holland",
        "weightClass": "Middleweight",
        "winner": "Reinier de Ridder",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Raoni Barcelos",
        "fighter2": "Payton Talbott",
        "weightClass": "Bantamweight",
        "winner": "Raoni Barcelos",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Azamat Bekoev",
        "fighter2": "Zachary Reese",
        "weightClass": "Middleweight",
        "winner": "Azamat Bekoev",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Bogdan Guskov",
        "fighter2": "Billy Elekana",
        "weightClass": "Light Heavyweight",
        "winner": "Bogdan Guskov",
        "method": "Submission",
        "round": 2
      },
      {
        "fighter1": "Grant Dawson",
        "fighter2": "Carlos Diego Ferreira",
        "weightClass": "Lightweight",
        "winner": "Grant Dawson",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Ailín Pérez",
        "fighter2": "Karol Rosa",
        "weightClass": "Women's Bantamweight",
        "winner": "Ailín Pérez",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Muin Gafurov",
        "fighter2": "Rinya Nakamura",
        "weightClass": "Bantamweight",
        "winner": "Muin Gafurov",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Bernardo Sopaj",
        "fighter2": "Ricky Turcios",
        "weightClass": "Bantamweight",
        "winner": "Bernardo Sopaj",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Tagir Ulanbekov",
        "fighter2": "Clayton Carpenter",
        "weightClass": "Flyweight",
        "winner": "Tagir Ulanbekov",
        "method": "Decision",
        "round": 3
      }
    ],
    "mainEventWinner": "Lightweight Islam Makhachev (c)",
    "sportsDbId": "2179600"
  },
  {
    "slug": "ufc-fight-night-250-adesanya-vs-imavov",
    "name": "UFC Fight Night 250 Adesanya vs Imavov",
    "date": "2025-02-01",
    "location": "Riyadh, Saudi Arabia",
    "venue": "Kingdom Arena",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Nassourdine Imavov",
        "fighter2": "Israel Adesanya",
        "weightClass": "Middleweight",
        "isMainEvent": true,
        "winner": "Nassourdine Imavov",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Michael Page",
        "fighter2": "Sharabutdin Magomedov",
        "weightClass": "Middleweight",
        "winner": "Michael Page",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Sergei Pavlovich",
        "fighter2": "Jairzinho Rozenstruik",
        "weightClass": "Heavyweight",
        "winner": "Sergei Pavlovich",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Vinicius Oliveira",
        "fighter2": "Said Nurmagomedov",
        "weightClass": "Bantamweight",
        "winner": "Vinicius Oliveira",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Farès Ziam",
        "fighter2": "Mike Davis",
        "weightClass": "Lightweight",
        "winner": "Farès Ziam",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Muhammad Naimov",
        "fighter2": "Kaan Ofli",
        "weightClass": "Featherweight",
        "winner": "Muhammad Naimov",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Shamil Gaziev",
        "fighter2": "Thomas Petersen",
        "weightClass": "Heavyweight",
        "winner": "Shamil Gaziev",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Terrance McKinney",
        "fighter2": "Damir Hadžović",
        "weightClass": "Lightweight",
        "winner": "Terrance McKinney",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Jasmine Jasudavicius",
        "fighter2": "Mayra Bueno Silva",
        "weightClass": "Women's Flyweight",
        "winner": "Jasmine Jasudavicius",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Bogdan Grad",
        "fighter2": "Lucas Alexander",
        "weightClass": "Catchweight (148.5 lb)",
        "winner": "Bogdan Grad",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Hamdy Abdelwahab",
        "fighter2": "Jamal Pogues",
        "weightClass": "Heavyweight",
        "winner": "Hamdy Abdelwahab",
        "method": "Decision",
        "round": 3
      }
    ],
    "mainEventWinner": "Middleweight Nassourdine Imavov",
    "sportsDbId": "2179601"
  },
  {
    "slug": "ufc-312-du-plessis-vs-strickland-2",
    "name": "UFC 312 du Plessis vs Strickland 2",
    "date": "2025-02-08",
    "location": "Sydney, New South Wales, Australia",
    "venue": "Qudos Bank Arena",
    "type": "ppv",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Dricus du Plessis (c)",
        "fighter2": "Sean Strickland",
        "weightClass": "Middleweight",
        "isMainEvent": true,
        "isTitleFight": true,
        "winner": "Dricus du Plessis (c)",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Zhang Weili (c)",
        "fighter2": "Tatiana Suarez",
        "weightClass": "Women's Strawweight",
        "isTitleFight": true,
        "winner": "Zhang Weili (c)",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Tallison Teixeira",
        "fighter2": "Justin Tafa",
        "weightClass": "Heavyweight",
        "winner": "Tallison Teixeira",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Jake Matthews",
        "fighter2": "Francisco Prado",
        "weightClass": "Welterweight",
        "winner": "Jake Matthews",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Gabriel Santos",
        "fighter2": "Jack Jenkins",
        "weightClass": "Featherweight",
        "winner": "Gabriel Santos",
        "method": "Submission",
        "round": 3
      },
      {
        "fighter1": "Tom Nolan",
        "fighter2": "Viacheslav Borshchev",
        "weightClass": "Lightweight",
        "winner": "Tom Nolan",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Wang Cong",
        "fighter2": "Bruna Brasil",
        "weightClass": "Women's Flyweight",
        "winner": "Wang Cong",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Aleksandre Topuria",
        "fighter2": "Colby Thicknesse",
        "weightClass": "Bantamweight",
        "winner": "Aleksandre Topuria",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Rong Zhu",
        "fighter2": "Kody Steele",
        "weightClass": "Lightweight",
        "winner": "Rong Zhu",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Jonathan Micallef",
        "fighter2": "Kevin Jousset",
        "weightClass": "Welterweight",
        "winner": "Jonathan Micallef",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Quillan Salkilld",
        "fighter2": "Anshul Jubli",
        "weightClass": "Lightweight",
        "winner": "Quillan Salkilld",
        "method": "TKO",
        "round": 1
      }
    ],
    "mainEventWinner": "Middleweight Dricus du Plessis (c)",
    "sportsDbId": "2181020"
  },
  {
    "slug": "ufc-fight-night-251-cannonier-vs-rodrigues",
    "name": "UFC Fight Night 251 Cannonier vs Rodrigues",
    "date": "2025-02-15",
    "location": "Enterpise, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Jared Cannonier",
        "fighter2": "Gregory Rodrigues",
        "weightClass": "Middleweight",
        "isMainEvent": true,
        "winner": "Jared Cannonier",
        "method": "TKO",
        "round": 4
      },
      {
        "fighter1": "Youssef Zalal",
        "fighter2": "Calvin Kattar",
        "weightClass": "Featherweight",
        "winner": "Youssef Zalal",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Edmen Shahbazyan",
        "fighter2": "Dylan Budka",
        "weightClass": "Middleweight",
        "winner": "Edmen Shahbazyan",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Nazim Sadykhov",
        "fighter2": "Ismael Bonfim",
        "weightClass": "Lightweight",
        "winner": "Nazim Sadykhov",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Andre Petroski",
        "fighter2": "Rodolfo Vieira",
        "weightClass": "Middleweight",
        "winner": "Andre Petroski",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Jose Delgado",
        "fighter2": "Connor Matthews",
        "weightClass": "Featherweight",
        "winner": "Jose Delgado",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Angela Hill",
        "fighter2": "Ketlen Souza",
        "weightClass": "Women's Strawweight",
        "winner": "Angela Hill",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Rafael Estevam",
        "fighter2": "Jesús Santos Aguilar",
        "weightClass": "Flyweight",
        "winner": "Rafael Estevam",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Gabriel Bonfim",
        "fighter2": "Khaos Williams",
        "weightClass": "Welterweight",
        "winner": "Gabriel Bonfim",
        "method": "Technical Submission",
        "round": 2
      },
      {
        "fighter1": "Elijah Smith",
        "fighter2": "Vince Morales",
        "weightClass": "Bantamweight",
        "winner": "Elijah Smith",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Valter Walker",
        "fighter2": "Don'Tale Mayes",
        "weightClass": "Heavyweight",
        "winner": "Valter Walker",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Jacqueline Cavalcanti",
        "fighter2": "Julia Avila",
        "weightClass": "Women's Bantamweight",
        "winner": "Jacqueline Cavalcanti",
        "method": "Decision",
        "round": 3
      }
    ],
    "mainEventWinner": "Middleweight Jared Cannonier",
    "sportsDbId": "2200742"
  },
  {
    "slug": "ufc-fight-night-252-cejudo-vs-song",
    "name": "UFC Fight Night 252 Cejudo vs Song ",
    "date": "2025-02-23",
    "location": "Seattle, Washington, United States",
    "venue": "Climate Pledge Arena",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Song Yadong",
        "fighter2": "Henry Cejudo",
        "weightClass": "Bantamweight",
        "isMainEvent": true,
        "winner": "Song Yadong",
        "method": "Technical Decision",
        "round": 3
      },
      {
        "fighter1": "Anthony Hernandez",
        "fighter2": "Brendan Allen",
        "weightClass": "Middleweight",
        "winner": "Anthony Hernandez",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Rob Font",
        "fighter2": "Jean Matsumoto",
        "weightClass": "Catchweight (140 lb)",
        "winner": "Rob Font",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Jean Silva",
        "fighter2": "Melsik Baghdasaryan",
        "weightClass": "Featherweight",
        "winner": "Jean Silva",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Alonzo Menifield",
        "fighter2": "Julius Walker",
        "weightClass": "Light Heavyweight",
        "winner": "Alonzo Menifield",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Ion Cuțelaba",
        "fighter2": "İbo Aslan",
        "weightClass": "Light Heavyweight",
        "winner": "Ion Cuțelaba",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Melquizael Costa",
        "fighter2": "Andre Fili",
        "weightClass": "Featherweight",
        "winner": "Melquizael Costa",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Mansur Abdul-Malik",
        "fighter2": "Nick Klein",
        "weightClass": "Middleweight",
        "winner": "Mansur Abdul-Malik",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Ricky Simón",
        "fighter2": "Javid Basharat",
        "weightClass": "Bantamweight",
        "winner": "Ricky Simón",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Austin Vanderford",
        "fighter2": "Nikolay Veretennikov",
        "weightClass": "Catchweight (175 lb)",
        "winner": "Austin Vanderford",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Nursulton Ruziboev",
        "fighter2": "Eric McConico",
        "weightClass": "Middleweight",
        "winner": "Nursulton Ruziboev",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Modestas Bukauskas",
        "fighter2": "Raffael Cerqueira",
        "weightClass": "Light Heavyweight",
        "winner": "Modestas Bukauskas",
        "method": "KO",
        "round": 1
      }
    ],
    "mainEventWinner": "Bantamweight Song Yadong",
    "sportsDbId": "2200743"
  },
  {
    "slug": "ufc-fight-night-253-kape-vs-almabayev",
    "name": "UFC Fight Night 253 Kape vs Almabayev",
    "date": "2025-03-01",
    "location": "Enterprise, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Manel Kape",
        "fighter2": "Asu Almabayev",
        "weightClass": "Flyweight",
        "isMainEvent": true,
        "winner": "Manel Kape",
        "method": "TKO",
        "round": 3
      },
      {
        "fighter1": "Cody Brundage",
        "fighter2": "Julian Marquez",
        "weightClass": "Middleweight",
        "winner": "Cody Brundage",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Nasrat Haqparast",
        "fighter2": "Esteban Ribovics",
        "weightClass": "Lightweight",
        "winner": "Nasrat Haqparast",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Hyder Amil",
        "fighter2": "William Gomis",
        "weightClass": "Featherweight",
        "winner": "Hyder Amil",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Sam Patterson",
        "fighter2": "Danny Barlow",
        "weightClass": "Welterweight",
        "winner": "Sam Patterson",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Mário Pinto",
        "fighter2": "Austen Lane",
        "weightClass": "Heavyweight",
        "winner": "Mário Pinto",
        "method": "KO",
        "round": 2
      },
      {
        "fighter1": "Chepe Mariscal",
        "fighter2": "Ricardo Ramos",
        "weightClass": "Featherweight",
        "winner": "Chepe Mariscal",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Danny Silva",
        "fighter2": "Lucas Almeida",
        "weightClass": "Catchweight (148 lb)",
        "winner": "Danny Silva",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "JJ Aldrich",
        "fighter2": "Andrea Lee",
        "weightClass": "Women's Flyweight",
        "winner": "JJ Aldrich",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Ramazan Temirov",
        "fighter2": "Charles Johnson",
        "weightClass": "Flyweight",
        "winner": "Ramazan Temirov",
        "method": "Decision",
        "round": 3
      }
    ],
    "mainEventWinner": "Flyweight Manel Kape",
    "sportsDbId": "2203291"
  },
  {
    "slug": "ufc-313-pereira-vs-ankalaev",
    "name": "UFC 313 Pereira vs Ankalaev",
    "date": "2025-03-09",
    "location": "Las Vegas, United States",
    "venue": "T-Mobile Arena",
    "type": "ppv",
    "completed": true,
    "mainCard": [],
    "mainEventWinner": "Light Heavyweight Magomed Ankalaev",
    "sportsDbId": "2200744"
  },
  {
    "slug": "ufc-fight-night-254-vettori-vs-dolidze-2",
    "name": "UFC Fight Night 254 Vettori vs Dolidze 2",
    "date": "2025-03-15",
    "location": "Enterprise, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Roman Dolidze",
        "fighter2": "Marvin Vettori",
        "weightClass": "Middleweight",
        "isMainEvent": true,
        "winner": "Roman Dolidze",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Chidi Njokuani",
        "fighter2": "Elizeu Zaleski dos Santos",
        "weightClass": "Catchweight (172.25 lb)",
        "winner": "Chidi Njokuani",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Alexander Hernandez",
        "fighter2": "Kurt Holobaugh",
        "weightClass": "Lightweight",
        "winner": "Alexander Hernandez",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Da'Mon Blackshear",
        "fighter2": "Cody Gibson",
        "weightClass": "Bantamweight",
        "winner": "Da'Mon Blackshear",
        "method": "Submission",
        "round": 2
      },
      {
        "fighter1": "Brendson Ribeiro",
        "fighter2": "Diyar Nurgozhay",
        "weightClass": "Catchweight (210.5 lb)",
        "winner": "Brendson Ribeiro",
        "method": "Submission",
        "round": 2
      },
      {
        "fighter1": "Kevin Vallejos",
        "fighter2": "Choi Seung-woo",
        "weightClass": "Featherweight",
        "winner": "Kevin Vallejos",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Waldo Cortes-Acosta",
        "fighter2": "Ryan Spann",
        "weightClass": "Heavyweight",
        "winner": "Waldo Cortes-Acosta",
        "method": "KO",
        "round": 2
      },
      {
        "fighter1": "You Su-young",
        "fighter2": "AJ Cunningham",
        "weightClass": "Bantamweight",
        "winner": "You Su-young",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Carlos Vera",
        "fighter2": "Josias Musasa",
        "weightClass": "Bantamweight",
        "winner": "Carlos Vera",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Sam Hughes",
        "fighter2": "Stephanie Luciano",
        "weightClass": "Women's Strawweight",
        "winner": "Sam Hughes",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "André Lima",
        "fighter2": "Daniel Barez",
        "weightClass": "Flyweight",
        "winner": "André Lima",
        "method": "Submission",
        "round": 3
      },
      {
        "fighter1": "Priscila Cachoeira",
        "fighter2": "Josiane Nunes",
        "weightClass": "Women's Bantamweight",
        "winner": "Priscila Cachoeira",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Carli Judice",
        "fighter2": "Yuneisy Duben",
        "weightClass": "Women's Flyweight",
        "winner": "Carli Judice",
        "method": "TKO",
        "round": 1
      }
    ],
    "mainEventWinner": "Middleweight Roman Dolidze",
    "sportsDbId": "2200745"
  },
  {
    "slug": "ufc-fight-night-255-edwards-vs-brady",
    "name": "UFC Fight Night 255 Edwards vs Brady",
    "date": "2025-03-22",
    "location": "London, United Kingdom",
    "venue": "The O2 Arena",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Sean Brady",
        "fighter2": "Leon Edwards",
        "weightClass": "Welterweight",
        "isMainEvent": true,
        "winner": "Sean Brady",
        "method": "Submission",
        "round": 4
      },
      {
        "fighter1": "Carlos Ulberg",
        "fighter2": "Jan Błachowicz",
        "weightClass": "Light Heavyweight",
        "winner": "Carlos Ulberg",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Kevin Holland",
        "fighter2": "Gunnar Nelson",
        "weightClass": "Welterweight",
        "winner": "Kevin Holland",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Alexia Thainara",
        "fighter2": "Molly McCann",
        "weightClass": "Women's Strawweight",
        "winner": "Alexia Thainara",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Chris Duncan",
        "fighter2": "Jordan Vucenic",
        "weightClass": "Lightweight",
        "winner": "Chris Duncan",
        "method": "Submission",
        "round": 2
      },
      {
        "fighter1": "Nathaniel Wood",
        "fighter2": "Morgan Charrière",
        "weightClass": "Featherweight",
        "winner": "Nathaniel Wood",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Chris Padilla",
        "fighter2": "Jai Herbert",
        "weightClass": "Lightweight",
        "winner": "Chris Padilla",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Lone'er Kavanagh",
        "fighter2": "Felipe dos Santos",
        "weightClass": "Flyweight",
        "winner": "Lone'er Kavanagh",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Marcin Tybura",
        "fighter2": "Mick Parkin",
        "weightClass": "Heavyweight",
        "winner": "Marcin Tybura",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Christian Leroy Duncan",
        "fighter2": "Andrey Pulyaev",
        "weightClass": "Middleweight",
        "winner": "Christian Leroy Duncan",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Shauna Bannon",
        "fighter2": "Puja Tomar",
        "weightClass": "Women's Strawweight",
        "winner": "Shauna Bannon",
        "method": "Submission",
        "round": 2
      },
      {
        "fighter1": "Caolán Loughran",
        "fighter2": "Nathan Fletcher",
        "weightClass": "Bantamweight",
        "winner": "Caolán Loughran",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Kauê Fernandes",
        "fighter2": "Guram Kutateladze",
        "weightClass": "Lightweight",
        "winner": "Kauê Fernandes",
        "method": "Decision",
        "round": 3
      }
    ],
    "mainEventWinner": "Welterweight Sean Brady",
    "sportsDbId": "2200746"
  },
  {
    "slug": "ufc-on-espn-64-moreno-vs-erceg",
    "name": "UFC on ESPN 64 Moreno vs Erceg",
    "date": "2025-03-29",
    "location": "Mexico City, Mexico",
    "venue": "Mexico City Arena",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Brandon Moreno",
        "fighter2": "Steve Erceg",
        "weightClass": "Flyweight",
        "isMainEvent": true,
        "winner": "Brandon Moreno",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Manuel Torres",
        "fighter2": "Drew Dober",
        "weightClass": "Lightweight",
        "winner": "Manuel Torres",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Édgar Cháirez",
        "fighter2": "C.J. Vergara",
        "weightClass": "Flyweight",
        "winner": "Édgar Cháirez",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Raul Rosas Jr.",
        "fighter2": "Vince Morales",
        "weightClass": "Bantamweight",
        "winner": "Raul Rosas Jr.",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "David Martínez",
        "fighter2": "Saimon Oliveira",
        "weightClass": "Bantamweight",
        "winner": "David Martínez",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Kevin Borjas",
        "fighter2": "Ronaldo Rodríguez",
        "weightClass": "Catchweight (127 lb)",
        "winner": "Kevin Borjas",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Ateba Gautier",
        "fighter2": "José Medina",
        "weightClass": "Middleweight",
        "winner": "Ateba Gautier",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Melquizael Costa",
        "fighter2": "Christian Rodriguez",
        "weightClass": "Featherweight",
        "winner": "Melquizael Costa",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Loopy Godinez",
        "fighter2": "Julia Polastri",
        "weightClass": "Women's Strawweight",
        "winner": "Loopy Godinez",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Rafa García",
        "fighter2": "Vinc Pichel",
        "weightClass": "Lightweight",
        "winner": "Rafa García",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Jamall Emmers",
        "fighter2": "Gabriel Miranda",
        "weightClass": "Featherweight",
        "winner": "Jamall Emmers",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "MarQuel Mederos",
        "fighter2": "Austin Hubbard",
        "weightClass": "Lightweight",
        "winner": "MarQuel Mederos",
        "method": "Decision",
        "round": 3
      }
    ],
    "mainEventWinner": "Flyweight Brandon Moreno",
    "sportsDbId": "2200747"
  },
  {
    "slug": "ufc-on-espn-65-emmett-vs-murphy",
    "name": "UFC on ESPN 65 Emmett vs Murphy",
    "date": "2025-04-05",
    "location": "Enterprise, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Lerone Murphy",
        "fighter2": "Josh Emmett",
        "weightClass": "Featherweight",
        "isMainEvent": true,
        "winner": "Lerone Murphy",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Pat Sabatini",
        "fighter2": "Joanderson Brito",
        "weightClass": "Featherweight",
        "winner": "Pat Sabatini",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Lee Chang-ho",
        "fighter2": "Cortavious Romious",
        "weightClass": "Catchweight (139.5 lb)",
        "winner": "Lee Chang-ho",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Brad Tavares",
        "fighter2": "Gerald Meerschaert",
        "weightClass": "Middleweight",
        "winner": "Brad Tavares",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Ode' Osbourne",
        "fighter2": "Luis Gurule",
        "weightClass": "Flyweight",
        "winner": "Ode' Osbourne",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Torrez Finney",
        "fighter2": "Robert Valentin",
        "weightClass": "Middleweight",
        "winner": "Torrez Finney",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Dione Barbosa",
        "fighter2": "Diana Belbiţă",
        "weightClass": "Women's Flyweight",
        "winner": "Dione Barbosa",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Rhys McKee",
        "fighter2": "Daniel Frunza",
        "weightClass": "Welterweight",
        "winner": "Rhys McKee",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Loma Lookboonmee",
        "fighter2": "Istela Nunes",
        "weightClass": "Women's Strawweight",
        "winner": "Loma Lookboonmee",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Victor Henry",
        "fighter2": "Pedro Falcão",
        "weightClass": "Bantamweight",
        "winner": "Victor Henry",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Martin Buday",
        "fighter2": "Uran Satybaldiev",
        "weightClass": "Heavyweight",
        "winner": "Martin Buday",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Talita Alencar",
        "fighter2": "Vanessa Demopoulos",
        "weightClass": "Women's Strawweight",
        "winner": "Talita Alencar",
        "method": "Decision",
        "round": 3
      }
    ],
    "mainEventWinner": "Featherweight Lerone Murphy",
    "sportsDbId": "2203670"
  },
  {
    "slug": "ufc-314-volkanovski-vs-lopes",
    "name": "UFC 314 Volkanovski vs Lopes",
    "date": "2025-04-13",
    "location": "Miami, Florida, United States",
    "venue": "Kaseya Center",
    "type": "ppv",
    "completed": true,
    "mainCard": [],
    "mainEventWinner": "Featherweight Alexander Volkanovski",
    "sportsDbId": "2203292"
  },
  {
    "slug": "ufc-on-espn-66-machado-garry-vs-prates",
    "name": "UFC on ESPN 66 Machado Garry vs Prates",
    "date": "2025-04-27",
    "location": "Kansas City, Missouri, United States",
    "venue": "T-Mobile Center",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Ian Machado Garry",
        "fighter2": "Carlos Prates",
        "weightClass": "Welterweight",
        "isMainEvent": true,
        "winner": "Ian Machado Garry",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Zhang Mingyang",
        "fighter2": "Anthony Smith",
        "weightClass": "Light Heavyweight",
        "winner": "Zhang Mingyang",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "David Onama",
        "fighter2": "Giga Chikadze",
        "weightClass": "Catchweight (147 lb)",
        "winner": "David Onama",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Abusupiyan Magomedov",
        "fighter2": "Michel Pereira",
        "weightClass": "Middleweight",
        "winner": "Abusupiyan Magomedov",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Randy Brown",
        "fighter2": "Nicolas Dalby",
        "weightClass": "Welterweight",
        "winner": "Randy Brown",
        "method": "KO",
        "round": 2
      },
      {
        "fighter1": "Ikram Aliskerov",
        "fighter2": "André Muniz",
        "weightClass": "Middleweight",
        "winner": "Ikram Aliskerov",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Matt Schnell",
        "fighter2": "Jimmy Flick",
        "weightClass": "Flyweight",
        "winner": "Matt Schnell",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Evan Elder",
        "fighter2": "Gauge Young",
        "weightClass": "Lightweight",
        "winner": "Evan Elder",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Chris Gutiérrez",
        "fighter2": "John Castañeda",
        "weightClass": "Featherweight",
        "winner": "Chris Gutiérrez",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Da'Mon Blackshear",
        "fighter2": "Alateng Heili",
        "weightClass": "Bantamweight",
        "winner": "Da'Mon Blackshear",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Malcolm Wellmaker",
        "fighter2": "Cameron Saaiman",
        "weightClass": "Bantamweight",
        "winner": "Malcolm Wellmaker",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Jaqueline Amorim",
        "fighter2": "Polyana Viana",
        "weightClass": "Women's Strawweight",
        "winner": "Jaqueline Amorim",
        "method": "Submission",
        "round": 2
      },
      {
        "fighter1": "Timothy Cuamba",
        "fighter2": "Roberto Romero",
        "weightClass": "Featherweight",
        "winner": "Timothy Cuamba",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Joselyne Edwards",
        "fighter2": "Chelsea Chandler",
        "weightClass": "Women's Bantamweight",
        "winner": "Joselyne Edwards",
        "method": "TKO",
        "round": 1
      }
    ],
    "mainEventWinner": "Welterweight Ian Machado Garry",
    "sportsDbId": "2213799"
  },
  {
    "slug": "ufc-on-espn-67-sandhagen-vs-figueiredo",
    "name": "UFC on ESPN 67 Sandhagen vs Figueiredo",
    "date": "2025-05-04",
    "location": "Des Moines, Iowa, United States",
    "venue": "Wells Fargo Arena",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Cory Sandhagen",
        "fighter2": "Deiveson Figueiredo",
        "weightClass": "Bantamweight",
        "isMainEvent": true,
        "winner": "Cory Sandhagen",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Reinier de Ridder",
        "fighter2": "Bo Nickal",
        "weightClass": "Middleweight",
        "winner": "Reinier de Ridder",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Daniel Rodriguez",
        "fighter2": "Santiago Ponzinibbio",
        "weightClass": "Welterweight",
        "winner": "Daniel Rodriguez",
        "method": "TKO",
        "round": 3
      },
      {
        "fighter1": "Montel Jackson",
        "fighter2": "Daniel Marcos",
        "weightClass": "Bantamweight",
        "winner": "Montel Jackson",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Serhiy Sidey",
        "fighter2": "Cameron Smotherman",
        "weightClass": "Bantamweight",
        "winner": "Serhiy Sidey",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Mason Jones",
        "fighter2": "Jeremy Stephens",
        "weightClass": "Lightweight",
        "winner": "Mason Jones",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Yana Santos",
        "fighter2": "Miesha Tate",
        "weightClass": "Women's Bantamweight",
        "winner": "Yana Santos",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Azamat Bekoev",
        "fighter2": "Ryan Loder",
        "weightClass": "Middleweight",
        "winner": "Azamat Bekoev",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Gillian Robertson",
        "fighter2": "Marina Rodriguez",
        "weightClass": "Women's Strawweight",
        "winner": "Gillian Robertson",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Quang Le",
        "fighter2": "Gastón Bolaños",
        "weightClass": "Bantamweight",
        "winner": "Quang Le",
        "method": "Technical Submission",
        "round": 2
      },
      {
        "fighter1": "Thomas Petersen",
        "fighter2": "Don'Tale Mayes",
        "weightClass": "Heavyweight",
        "winner": "Thomas Petersen",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Juliana Miller",
        "fighter2": "Ivana Petrović",
        "weightClass": "Women's Flyweight",
        "winner": "Juliana Miller",
        "method": "Decision",
        "round": 3
      }
    ],
    "mainEventWinner": "Bantamweight Cory Sandhagen",
    "sportsDbId": "2213800"
  },
  {
    "slug": "ufc-324-gaethje-vs-pimblett",
    "name": "UFC 324 Gaethje vs Pimblett",
    "date": "2026-01-24",
    "location": "Las Vegas, NV, United States",
    "venue": "T-Mobile Arena",
    "type": "ppv",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Justin Gaethje",
        "fighter2": "Paddy Pimblett",
        "weightClass": "Lightweight",
        "isMainEvent": true,
        "winner": "Justin Gaethje",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Sean O'Malley",
        "fighter2": "Song Yadong",
        "weightClass": "Bantamweight",
        "winner": "Sean O'Malley",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Waldo Cortes-Acosta",
        "fighter2": "Derrick Lewis",
        "weightClass": "Heavyweight",
        "winner": "Waldo Cortes-Acosta",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Natália Silva",
        "fighter2": "Rose Namajunas",
        "weightClass": "Women's Flyweight",
        "winner": "Natália Silva",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Jean Silva",
        "fighter2": "Arnold Allen",
        "weightClass": "Featherweight",
        "winner": "Jean Silva",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Umar Nurmagomedov",
        "fighter2": "Deiveson Figueiredo",
        "weightClass": "Catchweight (138.5 lb)",
        "winner": "Umar Nurmagomedov",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Ateba Gautier",
        "fighter2": "Andrey Pulyaev",
        "weightClass": "Middleweight",
        "winner": "Ateba Gautier",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Nikita Krylov",
        "fighter2": "Modestas Bukauskas",
        "weightClass": "Light Heavyweight",
        "winner": "Nikita Krylov",
        "method": "KO",
        "round": 3
      },
      {
        "fighter1": "Alex Perez",
        "fighter2": "Charles Johnson",
        "weightClass": "Catchweight (128.5 lb)",
        "winner": "Alex Perez",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Josh Hokit",
        "fighter2": "Denzel Freeman",
        "weightClass": "Heavyweight",
        "winner": "Josh Hokit",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Ty Miller",
        "fighter2": "Adam Fugitt",
        "weightClass": "Welterweight",
        "winner": "Ty Miller",
        "method": "TKO",
        "round": 1
      }
    ],
    "mainEventWinner": "Lightweight Justin Gaethje",
    "sportsDbId": "2389036"
  },
  {
    "slug": "ufc-325-volkanovski-vs-lopes-2",
    "name": "UFC 325 Volkanovski vs Lopes 2",
    "date": "2026-01-31",
    "location": "Sydney, NSW, Australia",
    "venue": "Qudos Bank Arena",
    "type": "ppv",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Alexander Volkanovski (c)",
        "fighter2": "Diego Lopes",
        "weightClass": "Featherweight",
        "isMainEvent": true,
        "isTitleFight": true,
        "winner": "Alexander Volkanovski (c)",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Benoît Saint Denis",
        "fighter2": "Dan Hooker",
        "weightClass": "Lightweight",
        "winner": "Benoît Saint Denis",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Maurício Ruffy",
        "fighter2": "Rafael Fiziev",
        "weightClass": "Lightweight",
        "winner": "Maurício Ruffy",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Tallison Teixeira",
        "fighter2": "Tai Tuivasa",
        "weightClass": "Heavyweight",
        "winner": "Tallison Teixeira",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Quillan Salkilld",
        "fighter2": "Jamie Mullarkey",
        "weightClass": "Lightweight",
        "winner": "Quillan Salkilld",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Billy Elekana",
        "fighter2": "Junior Tafa",
        "weightClass": "Light Heavyweight",
        "winner": "Billy Elekana",
        "method": "Submission",
        "round": 2
      },
      {
        "fighter1": "Cameron Rowston",
        "fighter2": "Cody Brundage",
        "weightClass": "Middleweight",
        "winner": "Cameron Rowston",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Jacob Malkoun",
        "fighter2": "Torrez Finney",
        "weightClass": "Middleweight",
        "winner": "Jacob Malkoun",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Jonathan Micallef",
        "fighter2": "Oban Elliott",
        "weightClass": "Welterweight",
        "winner": "Jonathan Micallef",
        "method": "Technical Submission",
        "round": 2
      },
      {
        "fighter1": "Kaan Ofli",
        "fighter2": "Yi Zha",
        "weightClass": "Featherweight",
        "winner": "Kaan Ofli",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Dom Mar Fan",
        "fighter2": "Kim Sang-wook",
        "weightClass": "Lightweight",
        "winner": "Dom Mar Fan",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Keiichiro Nakamura",
        "fighter2": "Sebastian Szalay",
        "weightClass": "Featherweight",
        "winner": "Keiichiro Nakamura",
        "method": "TKO",
        "round": 3
      },
      {
        "fighter1": "Lawrence Lui",
        "fighter2": "Sulangrangbo",
        "weightClass": "Bantamweight",
        "winner": "Lawrence Lui",
        "method": "Decision",
        "round": 3
      }
    ],
    "mainEventWinner": "Featherweight Alexander Volkanovski (c)",
    "sportsDbId": "2389037"
  },
  {
    "slug": "ufc-fight-night-266-bautista-vs-oliveira",
    "name": "UFC Fight Night 266 Bautista vs Oliveira",
    "date": "2026-02-07",
    "location": "Las Vegas, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "completed": true,
    "mainCard": [],
    "mainEventWinner": "Bantamweight  Mario Bautista",
    "sportsDbId": "2391879"
  },
  {
    "slug": "ufc-fight-night-267-strickland-vs-hernandez",
    "name": "UFC Fight Night 267 Strickland vs Hernandez",
    "date": "2026-02-21",
    "location": "Houston, Texas, United States",
    "venue": "Toyota Center",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Sean Strickland",
        "fighter2": "Anthony Hernandez",
        "weightClass": "Middleweight",
        "isMainEvent": true,
        "winner": "Sean Strickland",
        "method": "TKO",
        "round": 3
      },
      {
        "fighter1": "Uroš Medić",
        "fighter2": "Geoff Neal",
        "weightClass": "Welterweight",
        "winner": "Uroš Medić",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Melquizael Costa",
        "fighter2": "Dan Ige",
        "weightClass": "Featherweight",
        "winner": "Melquizael Costa",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Serghei Spivac",
        "fighter2": "Ante Delija",
        "weightClass": "Heavyweight",
        "winner": "Serghei Spivac",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Jacobe Smith",
        "fighter2": "Josiah Harrell",
        "weightClass": "Welterweight",
        "winner": "Jacobe Smith",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Michel Pereira",
        "fighter2": "Zachary Reese",
        "weightClass": "Middleweight",
        "winner": "Michel Pereira",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Carlos Leal",
        "fighter2": "Chidi Njokuani",
        "weightClass": "Welterweight",
        "winner": "Carlos Leal",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Alibi Idiris",
        "fighter2": "Ode' Osbourne",
        "weightClass": "Flyweight",
        "winner": "Alibi Idiris",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Alden Coria",
        "fighter2": "Luis Gurule",
        "weightClass": "Flyweight",
        "winner": "Alden Coria",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Joselyne Edwards",
        "fighter2": "Nora Cornolle",
        "weightClass": "Women's Bantamweight",
        "winner": "Joselyne Edwards",
        "method": "Submission",
        "round": 2
      },
      {
        "fighter1": "Punahele Soriano",
        "fighter2": "Ramiz Brahimaj",
        "weightClass": "Welterweight",
        "winner": "Punahele Soriano",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Jean-Paul Lebosnoyani",
        "fighter2": "Philip Rowe",
        "weightClass": "Welterweight",
        "winner": "Jean-Paul Lebosnoyani",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Jordan Leavitt",
        "fighter2": "Yadier del Valle",
        "weightClass": "Featherweight",
        "winner": "Jordan Leavitt",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Carli Judice",
        "fighter2": "Juliana Miller",
        "weightClass": "Women's Flyweight",
        "winner": "Carli Judice",
        "method": "Decision",
        "round": 3
      }
    ],
    "mainEventWinner": "Middleweight Sean Strickland",
    "sportsDbId": "2391885"
  },
  {
    "slug": "ufc-fight-night-268-moreno-vs-kavanagh",
    "name": "UFC Fight Night 268 Moreno vs Kavanagh",
    "date": "2026-02-28",
    "location": "Mexico City, Mexico",
    "venue": "Mexico City Arena",
    "type": "fight-night",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Lone'er Kavanagh",
        "fighter2": "Brandon Moreno",
        "weightClass": "Flyweight",
        "isMainEvent": true,
        "winner": "Lone'er Kavanagh",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "David Martínez",
        "fighter2": "Marlon Vera",
        "weightClass": "Bantamweight",
        "winner": "David Martínez",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "King Green",
        "fighter2": "Daniel Zellhuber",
        "weightClass": "Lightweight",
        "winner": "King Green",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Édgar Cháirez",
        "fighter2": "Felipe Bunes",
        "weightClass": "Flyweight",
        "winner": "Édgar Cháirez",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Imanol Rodríguez",
        "fighter2": "Kevin Borjas",
        "weightClass": "Flyweight",
        "winner": "Imanol Rodríguez",
        "method": "TKO",
        "round": 2
      },
      {
        "fighter1": "Santiago Luna",
        "fighter2": "Angel Pacheco",
        "weightClass": "Bantamweight",
        "winner": "Santiago Luna",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Ryan Gandra",
        "fighter2": "José Medina",
        "weightClass": "Middleweight",
        "winner": "Ryan Gandra",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Ailín Pérez",
        "fighter2": "Macy Chiasson",
        "weightClass": "Women's Bantamweight",
        "winner": "Ailín Pérez",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Cristian Quiñónez",
        "fighter2": "Kris Moutinho",
        "weightClass": "Bantamweight",
        "winner": "Cristian Quiñónez",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Javier Reyes",
        "fighter2": "Douglas Silva de Andrade",
        "weightClass": "Featherweight",
        "winner": "Javier Reyes",
        "method": "TKO",
        "round": 1
      },
      {
        "fighter1": "Regina Tarin",
        "fighter2": "Ernesta Kareckaitė",
        "weightClass": "Catchweight (130 lb)",
        "winner": "Regina Tarin",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Francis Marshall",
        "fighter2": "Erik Silva",
        "weightClass": "Featherweight",
        "winner": "Francis Marshall",
        "method": "Submission",
        "round": 1
      },
      {
        "fighter1": "Damian Pinas",
        "fighter2": "Wesley Schultz",
        "weightClass": "Middleweight",
        "winner": "Damian Pinas",
        "method": "TKO",
        "round": 1
      }
    ],
    "mainEventWinner": "Flyweight Lone'er Kavanagh",
    "sportsDbId": "2391886"
  },
  {
    "slug": "ufc-326-holloway-vs-oliveira-2",
    "name": "UFC 326 Holloway vs Oliveira 2",
    "date": "2026-03-07",
    "location": "Las Vegas, Nevada, United States",
    "venue": "T-Mobile Arena",
    "type": "ppv",
    "completed": true,
    "mainCard": [
      {
        "fighter1": "Charles Oliveira",
        "fighter2": "Max Holloway (c)",
        "weightClass": "Lightweight",
        "isMainEvent": true,
        "isTitleFight": true,
        "winner": "Charles Oliveira",
        "method": "Decision",
        "round": 5
      },
      {
        "fighter1": "Caio Borralho",
        "fighter2": "Reinier de Ridder",
        "weightClass": "Middleweight",
        "winner": "Caio Borralho",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Raul Rosas Jr.",
        "fighter2": "Rob Font",
        "weightClass": "Bantamweight",
        "winner": "Raul Rosas Jr.",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Drew Dober",
        "fighter2": "Michael Johnson",
        "weightClass": "Lightweight",
        "winner": "Drew Dober",
        "method": "KO",
        "round": 2
      },
      {
        "fighter1": "Gregory Rodrigues",
        "fighter2": "Brunno Ferreira",
        "weightClass": "Middleweight",
        "winner": "Gregory Rodrigues",
        "method": "KO",
        "round": 1
      },
      {
        "fighter1": "Cody Garbrandt",
        "fighter2": "Xiao Long",
        "weightClass": "Bantamweight",
        "winner": "Cody Garbrandt",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Donte Johnson",
        "fighter2": "Cody Brundage",
        "weightClass": "Middleweight",
        "winner": "Donte Johnson",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Alberto Montes",
        "fighter2": "Ricky Turcios",
        "weightClass": "Featherweight",
        "winner": "Alberto Montes",
        "method": "Technical Submission",
        "round": 2
      },
      {
        "fighter1": "Nyamjargal Tumendemberel",
        "fighter2": "Cody Durden",
        "weightClass": "Flyweight",
        "winner": "Nyamjargal Tumendemberel",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Su Mudaerji",
        "fighter2": "Jesús Santos Aguilar",
        "weightClass": "Flyweight",
        "winner": "Su Mudaerji",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Diyar Nurgozhay",
        "fighter2": "Rafael Tobias",
        "weightClass": "Light Heavyweight",
        "winner": "Diyar Nurgozhay",
        "method": "Decision",
        "round": 3
      },
      {
        "fighter1": "Rodolfo Bellato",
        "fighter2": "Luke Fernandez",
        "weightClass": "Light Heavyweight",
        "winner": "Rodolfo Bellato",
        "method": "TKO",
        "round": 1
      }
    ],
    "mainEventWinner": "Lightweight Charles Oliveira",
    "sportsDbId": "2391887"
  },
  {
    "slug": "ufc-fight-night-269-emmett-vs-vallejos",
    "name": "UFC Fight Night 269 Emmett vs Vallejos",
    "date": "2026-03-14",
    "location": "Las Vegas, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "completed": true,
    "mainCard": [],
    "sportsDbId": "2391888"
  },
  {
    "slug": "ufc-fight-night-270-evloev-vs-murphy",
    "name": "UFC Fight Night 270 Evloev vs Murphy",
    "date": "2026-03-21",
    "location": "London, England, United Kingdom",
    "venue": "The O2 Arena",
    "type": "fight-night",
    "completed": false,
    "mainCard": [],
    "sportsDbId": "2391889"
  },
  {
    "slug": "ufc-fight-night-271-adesanya-vs-pyfer",
    "name": "UFC Fight Night 271 Adesanya vs Pyfer",
    "date": "2026-03-28",
    "location": "Seattle, Washington, United States",
    "venue": "Climate Pledge Arena",
    "type": "fight-night",
    "completed": false,
    "mainCard": [],
    "sportsDbId": "2391890"
  },
  {
    "slug": "ufc-fight-night-272",
    "name": "UFC Fight Night 272",
    "date": "2026-04-04",
    "location": "Las Vegas, Nevada, United States",
    "venue": "UFC APEX",
    "type": "fight-night",
    "completed": false,
    "mainCard": [],
    "sportsDbId": "2429046"
  },
  {
    "slug": "ufc-327",
    "name": "UFC 327",
    "date": "2026-04-11",
    "location": "Miami, Florida, United States",
    "venue": "Kaseya Center",
    "type": "ppv",
    "completed": false,
    "mainCard": [],
    "sportsDbId": "2429047"
  },
  {
    "slug": "ufc-fight-night-273",
    "name": "UFC Fight Night 273",
    "date": "2026-05-30",
    "location": "Macau SAR, China",
    "venue": "Galaxy Arena",
    "type": "fight-night",
    "completed": false,
    "mainCard": [],
    "sportsDbId": "2429048"
  },
  {
    "slug": "ufc-white-house",
    "name": "UFC White House",
    "date": "2026-06-14",
    "location": "Washington, D.C., United States",
    "venue": "TBD",
    "type": "fight-night",
    "completed": false,
    "mainCard": [],
    "sportsDbId": "2391891"
  }
];

export function getEventBySlug(slug: string): UFCEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(): UFCEvent[] {
  return events.filter((e) => !e.completed).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export function getCompletedEvents(): UFCEvent[] {
  return events.filter((e) => e.completed).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
