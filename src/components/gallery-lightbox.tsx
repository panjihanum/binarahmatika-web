"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryLightboxProps = {
  images: GalleryImage[];
  isOpen: boolean;
  startIndex?: number;
  onClose: () => void;
};

export function GalleryLightbox({
  images,
  isOpen,
  startIndex = 0,
  onClose,
}: GalleryLightboxProps) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (isOpen) setIndex(startIndex);
  }, [isOpen, startIndex]);

  const total = images.length;
  const current = images[index];

  const prev = () => setIndex((value) => (value - 1 + total) % total);
  const next = () => setIndex((value) => (value + 1) % total);

  const indicators = useMemo(
    () =>
      images.map((image, i) => (
        <button
          key={image.src}
          type="button"
          onClick={() => setIndex(i)}
          className={`h-12 w-16 overflow-hidden rounded-lg border transition ${
            i === index ? "border-amber-500" : "border-transparent"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={160}
            height={120}
            className="h-full w-full object-cover"
          />
        </button>
      )),
    [images, index]
  );

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
              <h3 className="text-base font-semibold text-zinc-900">
                {current?.alt}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative h-[320px] w-full bg-zinc-50 md:h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current?.src}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {current ? (
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      className="object-contain"
                      priority
                    />
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <div className="flex flex-wrap items-center gap-2">
                {indicators}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Sebelumnya
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700"
                >
                  Berikutnya
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
