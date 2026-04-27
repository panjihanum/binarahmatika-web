"use client";

import { useState } from "react";
import Image from "next/image";
import { Images, CheckCircle2 } from "lucide-react";

import { FadeUp } from "@/components/fade-up";
import { GalleryLightbox, type GalleryImage } from "@/components/gallery-lightbox";
import productsData from "@/data/products.json";

type Product = {
  title: string;
  bullets: string[];
  images: GalleryImage[];
};

const products = productsData as Product[];

const ACCENT_COLORS = [
  {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
    btn: "bg-amber-500 hover:bg-amber-600",
    ring: "ring-amber-400",
    number: "text-amber-500",
  },
  {
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    dot: "bg-sky-500",
    btn: "bg-sky-500 hover:bg-sky-600",
    ring: "ring-sky-400",
    number: "text-sky-500",
  },
  {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
    btn: "bg-emerald-500 hover:bg-emerald-600",
    ring: "ring-emerald-400",
    number: "text-emerald-500",
  },
];

type ProductCardProps = Product & {
  index: number;
};

function ProductCard({ title, bullets, images, index }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];

  const openAt = (i: number) => {
    setStartIndex(i);
    setIsOpen(true);
  };

  /* show at most 4 thumbnails in the strip */
  const thumbs = images.slice(0, 4);
  const remaining = images.length - 4;

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* ── Hero image ── */}
      <div className="relative h-52 overflow-hidden cursor-pointer" onClick={() => openAt(0)}>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        {/* number badge */}
        <span
          className={`absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold ${accent.badge}`}
        >
          {index + 1}
        </span>

        {/* gallery count pill */}
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <Images className="h-3.5 w-3.5" />
          {images.length} foto
        </span>

        {/* title overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-base font-bold leading-tight text-white drop-shadow">
            {title}
          </h3>
          <p className="mt-1 text-xs font-medium text-white/70">
            Klik untuk lihat galeri lengkap
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col p-5">
        {/* Bullet points */}
        <ul className="space-y-2.5">
          {bullets.map((line) => (
            <li key={line} className="flex items-start gap-2.5 text-sm text-zinc-600">
              <CheckCircle2
                className={`mt-0.5 h-4 w-4 shrink-0 ${accent.number}`}
                strokeWidth={2.5}
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        {/* Thumbnail strip */}
        <div className="mt-5 grid grid-cols-4 gap-2">
          {thumbs.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openAt(i)}
              className={`group/t relative h-14 overflow-hidden rounded-xl border border-zinc-100 transition ring-2 ring-transparent hover:ring-offset-1 hover:${accent.ring}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-300 group-hover/t:scale-110"
              />
              {/* "+N more" overlay on last thumb if there are more */}
              {i === 3 && remaining > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/55">
                  <span className="text-xs font-bold text-white">+{remaining}</span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* CTA button */}
        <button
          type="button"
          onClick={() => openAt(0)}
          className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl py-2.5 text-sm font-semibold text-white transition ${accent.btn}`}
        >
          <Images className="h-4 w-4" />
          Lihat Semua Foto
        </button>
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
        <FadeUp key={product.title} delay={0.07 * index}>
          <ProductCard {...product} index={index} />
        </FadeUp>
      ))}
    </div>
  );
}
