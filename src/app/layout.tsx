import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spainwhao.com"),
  title: "SpainWhao — Houses in Spain, designed and lived in",
  description:
    "Family-owned property development and rentals on the Costa Blanca and in Madrid. SpainWhao S.L.",
  openGraph: {
    title: "SpainWhao — Houses in Spain, designed and lived in",
    description:
      "Family-owned property development and rentals on the Costa Blanca and in Madrid.",
    url: "https://spainwhao.com",
    siteName: "SpainWhao",
    images: [
      {
        url: "/images/villa-la-barraca/photo_070.jpg",
        width: 1200,
        height: 630,
        alt: "Villa La Barraca — SpainWhao",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpainWhao — Houses in Spain, designed and lived in",
    description:
      "Family-owned property development and rentals on the Costa Blanca and in Madrid.",
    images: ["/images/villa-la-barraca/photo_070.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans text-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
