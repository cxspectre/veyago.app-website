export type Destination = {
  slug: string;
  name: string;
  country: string;
  vibe: string;
  budget: "€" | "€€" | "€€€";
  bestTime: string;
  /** Direct URL to a Wikimedia Commons derivative (typically CC BY-SA; see file page on Commons for exact license). */
  image: string;
};

/**
 * Wikimedia Commons thumbnails via upload.wikimedia.org.
 * Not every nominal width is accepted by the scaler: 640/800/1024 often return HTTP 400 for the same file
 * while 330/500/1280 work. We use 1280px for a sharp card/hero crop without hitting broken widths.
 * License per file on https://commons.wikimedia.org/ (typically CC BY-SA).
 */
const COMMONS = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/${path}`;

export const destinations: Destination[] = [
  {
    slug: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    vibe: "Coastal · Sunlit · Slow mornings",
    budget: "€€",
    bestTime: "Apr – Jun",
    image: COMMONS(
      "thumb/f/f2/Lisboa_-_Portugal_%2852597836992%29.jpg/1280px-Lisboa_-_Portugal_%2852597836992%29.jpg"
    ),
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    vibe: "Temples · Tea · Quiet alleys",
    budget: "€€€",
    bestTime: "Oct – Nov",
    image: COMMONS("thumb/3/3c/Kiyomizu.jpg/1280px-Kiyomizu.jpg"),
  },
  {
    slug: "tbilisi",
    name: "Tbilisi",
    country: "Georgia",
    vibe: "Raw · Underrated · Late nights",
    budget: "€",
    bestTime: "May – Sep",
    image: COMMONS(
      "thumb/4/45/View_of_Tbilisi_from_Tabori_Church_2023-10-08-2.jpg/1280px-View_of_Tbilisi_from_Tabori_Church_2023-10-08-2.jpg"
    ),
  },
  {
    slug: "porto",
    name: "Porto",
    country: "Portugal",
    vibe: "Tiled · Riverfront · Unhurried",
    budget: "€€",
    bestTime: "May – Sep",
    image: COMMONS(
      "thumb/e/e5/Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG/1280px-Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG"
    ),
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    country: "Spain",
    vibe: "Late dinners · Gothic streets",
    budget: "€€",
    bestTime: "Apr – Jun",
    image: COMMONS(
      "thumb/5/5d/Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_edited.jpg/1280px-Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_edited.jpg"
    ),
  },
  {
    slug: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    vibe: "Mountains meet ocean",
    budget: "€€",
    bestTime: "Nov – Mar",
    image: COMMONS(
      "thumb/d/d3/Cape_Town_%28ZA%29%2C_Table_Mountain%2C_Blick_auf_City_Bowl_--_2024_--_2855.jpg/1280px-Cape_Town_%28ZA%29%2C_Table_Mountain%2C_Blick_auf_City_Bowl_--_2024_--_2855.jpg"
    ),
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    vibe: "Electric · Meticulous · All-hours",
    budget: "€€€",
    bestTime: "Mar – May",
    image: COMMONS(
      "thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1280px-Skyscrapers_of_Shinjuku_2009_January.jpg"
    ),
  },
  {
    slug: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    vibe: "Murals · Markets · Modern craft",
    budget: "€€",
    bestTime: "Oct – Apr",
    image: COMMONS(
      "thumb/4/4f/Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg/1280px-Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg"
    ),
  },
];

export const heroStack: Destination[] = [
  destinations[0],
  destinations[2],
  destinations[1],
];

/** Bounded try-it deck (matches homepage marquee order). */
export const tryItDeck: Destination[] = destinations.slice(0, 5);
