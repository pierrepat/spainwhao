export interface RentalProperty {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  location: string;
  status: "available" | "coming-soon";
  heroImage: string | null;
  hasPhotography: boolean;
  /** Future booking system integration URL */
  bookingUrl: string | null;
}

export const rentals: RentalProperty[] = [
  {
    slug: "villa-la-barraca",
    name: "Villa La Barraca",
    tagline: "A family house on the Costa Blanca, designed to be lived in",
    description:
      "A sun-drenched retreat with private pool, landscaped gardens, and interiors styled for comfort. Available for seasonal rental.",
    highlights: [
      "Private pool & gardens",
      "Contemporary interiors",
      "Seasonal rental",
    ],
    location: "Costa Blanca, Spain",
    status: "available",
    heroImage: "/images/villa-la-barraca/photo_070.jpg",
    hasPhotography: true,
    bookingUrl: null, // TODO: integrate booking system
  },
  {
    slug: "flat-by-the-sea",
    name: "Flat by the Sea",
    tagline: "True frontline to the sea in Moraira — like living on a boat",
    description:
      "The only genuine first-line building in Moraira, with nothing between you and the water. This fully refurbished 2-bedroom apartment sits on the first floor, giving you unobstructed views of both capes — from Calpe to El Portet — from the living room, main bedroom, and balcony. Modern finishes throughout, A/C in every room, and high-speed fibre wifi. Leave the car in the covered parking and walk to beaches, restaurants, and the town centre in minutes.",
    highlights: [
      "True frontline — no road, no barrier to the sea",
      "Panoramic views from Calpe to El Portet",
      "2 bedrooms, fully refurbished",
      "A/C in every room",
      "Covered parking included",
      "Walk everywhere — no car needed",
    ],
    location: "Moraira, Costa Blanca",
    status: "available",
    heroImage: "/images/flat-by-the-sea/photo_001.jpg",
    hasPhotography: true,
    bookingUrl: "https://www.airbnb.com/rooms/12957503",
  },
  {
    slug: "luxury-flat-madrid",
    name: "Luxury Flat Madrid",
    tagline: "High-end urban flat in the heart of the capital",
    description: "",
    highlights: [],
    location: "Madrid, Spain",
    status: "coming-soon",
    heroImage: null,
    hasPhotography: false,
    bookingUrl: null,
  },
];

export const VILLA_LA_BARRACA = rentals[0];
export const VILLA_LA_BARRACA_ABOUT_IMAGE =
  "/images/villa-la-barraca/photo_090.jpg";
