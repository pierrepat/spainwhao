"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const HERO_IMAGES = [
  "/images/villa-la-barraca/photo_078.jpg",
  "/images/villa-la-barraca/hero_02.jpg",
  "/images/villa-la-barraca/hero_03.jpg",
];

const INTERVAL = 6000;

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <>
      {HERO_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Villa La Barraca"
          fill
          className={`object-cover transition-opacity duration-[1800ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}
    </>
  );
}