"use client";

import { useState } from "react";

interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <div className="relative">
      <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-gray-200 text-gray-500">
        {photos[index]}
      </div>
      <button
        type="button"
        onClick={goPrev}
        aria-label="Foto anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 shadow"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Foto siguiente"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 shadow"
      >
        ›
      </button>
      <p className="mt-2 text-center text-sm text-gray-500">
        {index + 1} / {photos.length}
      </p>
    </div>
  );
};

export default PhotoGallery;