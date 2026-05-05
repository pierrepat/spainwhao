export interface RentalProperty {
  slug: string;
  name: string;
  tagline: string;
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
    location: "Costa Blanca, Spain",
    status: "available",
    heroImage: "/images/villa-la-barraca/photo_070.jpg",
    hasPhotography: true,
    bookingUrl: null, // TODO: integrate booking system
  },
  {
    slug: "flat-by-the-sea",
    name: "Flat by the Sea",
    tagline: "Seaside apartment renovation with panoramic views",
    location: "Costa Blanca, Spain",
    status: "available",
    heroImage: "/images/flat-by-the-sea/photo_001.jpg",
    hasPhotography: true,
    bookingUrl: "https://www.airbnb.com/rooms/12957503",
  },
  {
    slug: "luxury-flat-madrid",
    name: "Luxury Flat Madrid",
    tagline: "High-end urban flat in the heart of the capital",
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
