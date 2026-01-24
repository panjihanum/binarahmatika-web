"use client";

import { useState } from "react";
import Image from "next/image";

import { FadeUp } from "@/components/fade-up";
import { GalleryLightbox, type GalleryImage } from "@/components/gallery-lightbox";
import productsData from "@/data/products.json";

const products = productsData;

type ProductCardProps = {
  title: string;
  description: string;
  images: GalleryImage[];
};

function ProductCard({ title, description, images }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openAt = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={() => openAt(0)}
          className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 text-left text-sm font-semibold text-white"
        >
          Preview galeri
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{description}</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openAt(index)}
              className="group/thumb relative h-16 overflow-hidden rounded-xl border border-zinc-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-300 group-hover/thumb:scale-105"
              />
            </button>
          ))}
        </div>
      </div>
      <GalleryLightbox
        images={images}
        isOpen={isOpen}
        startIndex={startIndex}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export function ProductGallery() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <FadeUp key={product.title} delay={0.04 * index}>
          <ProductCard {...product} />
        </FadeUp>
      ))}
    </div>
  );
}
