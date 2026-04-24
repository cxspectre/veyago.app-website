/**
 * Full-bleed marketing photography (hero, closing CTA).
 * Wikimedia Commons — typically CC BY-SA; confirm on each file’s Commons page before non-web use.
 */
const commons = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/${path}`;

/** Aerial city — many neighbourhoods, one decision; matches “pick a place”. */
export const heroBackdropImage = commons(
  "thumb/5/5d/Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_edited.jpg/1280px-Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_edited.jpg"
);

/** Coast, mountain, horizon — “go somewhere”; pairs with the final CTA line. */
export const finalCtaBackdropImage = commons(
  "thumb/d/d3/Cape_Town_%28ZA%29%2C_Table_Mountain%2C_Blick_auf_City_Bowl_--_2024_--_2855.jpg/1280px-Cape_Town_%28ZA%29%2C_Table_Mountain%2C_Blick_auf_City_Bowl_--_2024_--_2855.jpg"
);

/** Urban skyline — “pipeline / motion”; for the How it works story hero. */
export const howItWorksHeroBackdropImage = commons(
  "thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1280px-Skyscrapers_of_Shinjuku_2009_January.jpg"
);

