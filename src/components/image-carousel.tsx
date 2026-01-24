"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const defaultImages = [
  {
    title: "Waterproofing Membrane Bakar",
    src: "/assets/legacy/optimized/images/membrane-bakar-sanded.webp",
  },
  {
    title: "Membrane Bakar Granule",
    src: "/assets/legacy/optimized/images/membrane-bakar-granule.webp",
  },
  {
    title: "Injeksi Grouting",
    src: "/assets/legacy/optimized/images/Injeksi-grouting.webp",
  },
  {
    title: "Injeksi Polyurethane",
    src: "/assets/legacy/optimized/images/injeksi-polyurethane6.webp",
  },
];

type CarouselImage = {
  title: string;
  src: string;
};

type ImageCarouselProps = {
  images?: CarouselImage[];
};

export function ImageCarousel({ images = defaultImages }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const current = images[index];
  const total = images.length;

  const prev = () => setIndex((value) => (value - 1 + total) % total);
  const next = () => setIndex((value) => (value + 1) % total);

  const indicators = useMemo(
    () =>
      images.map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Slide ${i + 1}`}
          onClick={() => setIndex(i)}
          className={`h-2.5 w-2.5 rounded-full transition ${
            i === index ? "bg-amber-500" : "bg-zinc-300"
          }`}
        />
      )),
    [images, index]
  );

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm">
      <div className="relative h-72 w-full md:h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
              <h3 className="text-lg font-semibold text-white">
                {current.title}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between gap-4 px-6 py-4">
        <button
          type="button"
          onClick={prev}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300"
        >
          <ChevronLeft className="h-4 w-4" />
          Sebelumnya
        </button>
        <div className="flex items-center gap-2">{indicators}</div>
        <button
          type="button"
          onClick={next}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300"
        >
          Berikutnya
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
