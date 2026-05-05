"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

export function PhotoGallery({ photos, alt }: { photos: string[]; alt: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);

  const prev = useCallback(() => {
    setSelected((s) => (s !== null ? (s > 0 ? s - 1 : photos.length - 1) : null));
  }, [photos.length]);

  const next = useCallback(() => {
    setSelected((s) => (s !== null ? (s < photos.length - 1 ? s + 1 : 0) : null));
  }, [photos.length]);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev();
      else next();
    }
    touchStart.current = null;
  };

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2 md:grid-cols-4">
        {photos.map((src, i) => (
          <button
            key={src}
            onClick={() => setSelected(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded bg-line"
          >
            <Image
              src={src}
              alt={`${alt} — photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              loading={i < 8 ? "eager" : "lazy"}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          onClick={() => setSelected(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Close — larger on mobile */}
          <button
            onClick={() => setSelected(null)}
            className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
            aria-label="Close"
          >
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10m0-10L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Previous — hidden on mobile (use swipe) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex sm:left-4 sm:h-10 sm:w-10"
            aria-label="Previous photo"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative h-[75vh] w-[95vw] max-w-5xl sm:h-[80vh] sm:w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selected]}
              alt={`${alt} — photo ${selected + 1}`}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>

          {/* Next — hidden on mobile (use swipe) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex sm:right-4 sm:h-10 sm:w-10"
            aria-label="Next photo"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Counter + swipe hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-sm text-white/60">
              {selected + 1} / {photos.length}
            </p>
            <p className="mt-1 text-xs text-white/30 sm:hidden">
              Swipe to navigate
            </p>
          </div>
        </div>
      )}
    </>
  );
}
