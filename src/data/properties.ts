export interface RentalProperty {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  location: string;
  rentalType: "holiday" | "long-term";
  status: "available" | "coming-soon";
  heroImage: string | null;
  hasPhotography: boolean;
  photoCount: number;
  photoPrefix: string;
  /** WhatsApp pre-filled message for this property */
  whatsappMessage: string;
  /** External listing links */
  externalLinks: { label: string; url: string }[];
  /** Airbnb rating if available */
  rating: { score: number; reviews: number; source: string } | null;
}

export const rentals: RentalProperty[] = [
  {
    slug: "villa-la-barraca",
    name: "Villa La Barraca",
    tagline: "A spacious beachside villa in Moraira for families and groups",
    description:
      "Set within a 1,500 m\u00B2 private Mediterranean garden in Moraira\u2019s sought-after Moravit area, Villa La Barraca is just a 5-minute walk from Cala del Andrago and its beachfront restaurants. Two independent floors \u2014 each with 3 bedrooms, 2 bathrooms, a full kitchen, and its own entrance \u2014 make it ideal for two families, multi-generational getaways, or groups. An 11\u00D74 m pool, covered barbecue area, and beautifully landscaped grounds complete the picture. Recently redecorated with modern furnishings refreshed each season.",
    highlights: [
      "6 bedrooms across 2 independent floors",
      "11\u00D74 m pool & 1,500 m\u00B2 tropical garden",
      "5-min walk to beach, restaurants & shops",
      "A/C in every room (8 units)",
      "Private parking for 3 cars",
      "High-speed fibre wifi included",
    ],
    location: "Moraira, Costa Blanca",
    rentalType: "holiday",
    status: "available",
    heroImage: "/images/villa-la-barraca/photo_078.jpg",
    hasPhotography: true,
    photoCount: 89,
    photoPrefix: "/images/villa-la-barraca/photo_",
    whatsappMessage:
      "Hi, I'm interested in booking Villa La Barraca. Could you let me know availability?",
    externalLinks: [
      { label: "Airbnb", url: "https://www.airbnb.com/rooms/1258271" },
    ],
    rating: { score: 4.67, reviews: 12, source: "Airbnb" },
  },
  {
    slug: "flat-by-the-sea",
    name: "Flat by the Sea",
    tagline: "True frontline to the sea in Moraira \u2014 like living on a boat",
    description:
      "The only genuine first-line building in Moraira, with nothing between you and the water. This fully refurbished 2-bedroom apartment sits on the first floor, giving you unobstructed views of both capes \u2014 from Calpe to El Portet \u2014 from the living room, main bedroom, and balcony. Modern finishes throughout, A/C in every room, and high-speed fibre wifi. Leave the car in the covered parking and walk to beaches, restaurants, and the town centre in minutes.",
    highlights: [
      "True frontline \u2014 no road, no barrier to the sea",
      "Panoramic views from Calpe to El Portet",
      "2 bedrooms, fully refurbished",
      "A/C in every room",
      "Covered parking included",
      "Walk everywhere \u2014 no car needed",
    ],
    location: "Moraira, Costa Blanca",
    rentalType: "holiday",
    status: "available",
    heroImage: "/images/flat-by-the-sea/photo_001.jpg",
    hasPhotography: true,
    photoCount: 67,
    photoPrefix: "/images/flat-by-the-sea/photo_",
    whatsappMessage:
      "Hi, I'm interested in booking the Flat by the Sea. Could you let me know availability?",
    externalLinks: [
      { label: "Airbnb", url: "https://www.airbnb.com/rooms/12957503" },
    ],
    rating: { score: 4.64, reviews: 33, source: "Airbnb" },
  },
  {
    slug: "claudio-coello",
    name: "Claudio Coello XVIII",
    tagline: "A refined apartment on one of Madrid\u2019s most prestigious streets",
    description:
      "A 91 m\u00B2 apartment in the heart of the Salamanca district, on Claudio Coello \u2014 one of Madrid\u2019s most sought-after addresses. Two bedrooms, two en-suite bathrooms, a spacious living-dining area, and a fully equipped independent kitchen. Tree-lined avenues, high-end shopping, museums, and top restaurants are all on your doorstep. Available for long-term rental with all utilities, weekly cleaning, and 24/7 concierge included.",
    highlights: [
      "Claudio Coello, Barrio de Salamanca",
      "91 m\u00B2 \u2014 2 bedrooms, 2 en-suite bathrooms",
      "Long-term rental (1 month minimum)",
      "All utilities & weekly cleaning included",
      "Doorman, lift, A/C & central heating",
      "Steps from Retiro, Serrano & the Golden Mile",
    ],
    location: "Madrid, Spain",
    rentalType: "long-term",
    status: "available",
    heroImage: "/images/luxury-flat-madrid/photo_001.jpg",
    hasPhotography: true,
    photoCount: 12,
    photoPrefix: "/images/luxury-flat-madrid/photo_",
    whatsappMessage:
      "Hi, I'm interested in the Claudio Coello apartment for a long-term rental. Could we discuss availability?",
    externalLinks: [
      { label: "HomeClub", url: "https://www.homeclub.com/property/2129/" },
    ],
    rating: null,
  },
];

export const VILLA_LA_BARRACA = rentals[0];
export const VILLA_LA_BARRACA_ABOUT_IMAGE =
  "/images/villa-la-barraca/photo_064.jpg";

/** Generate all photo paths for a property */
export function getPropertyPhotos(property: RentalProperty): string[] {
  const photos: string[] = [];
  for (let i = 1; i <= property.photoCount; i++) {
    const num = String(i).padStart(3, "0");
    photos.push(`${property.photoPrefix}${num}.jpg`);
  }
  return photos;
}
