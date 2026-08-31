'use client';

import { useState, useEffect } from 'react';

type CarouselImage = {
  src: string;
  alt: string;
};

export default function ImageCarousel({
  images,
  className = '',
  intervalMs = 3500,
}: {
  images: CarouselImage[];
  className?: string;
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [images.length, intervalMs]);

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${active * (100 / images.length)}%)`,
          }}
        >
          {images.map((image) => (
            <div key={image.src} className="shrink-0" style={{ width: `${100 / images.length}%` }}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
