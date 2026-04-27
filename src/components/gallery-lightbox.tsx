"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  /* mount guard so createPortal only runs client-side */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* sync index when opening */
  useEffect(() => {
    if (isOpen) setIndex(startIndex);
  }, [isOpen, startIndex]);

  /* keyboard: Escape to close, arrows to navigate */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setIndex((v) => (v - 1 + images.length) % images.length);
      if (e.key === "ArrowRight")
        setIndex((v) => (v + 1) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose, images.length]);

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const total = images.length;
  const current = images[index];

  const prev = () => setIndex((v) => (v - 1 + total) % total);
  const next = () => setIndex((v) => (v + 1) % total);

  const indicators = useMemo(
    () =>
      images.map((image, i) => (
        <button
          key={image.src}
          type="button"
          onClick={() => setIndex(i)}
          aria-label={`Foto ${i + 1}`}
          className={`h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition ${
            i === index
              ? "border-amber-500 opacity-100"
              : "border-transparent opacity-50 hover:opacity-80"
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [images, index]
  );

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          /* full-viewport overlay — rendered via portal so transform parents don't trap it */
          style={{ position: "fixed", inset: 0, zIndex: 9999 }}
          className="flex items-center justify-center bg-black/75 p-4 md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-3 md:px-6 md:py-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="shrink-0 rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-500">
                  {index + 1} / {total}
                </span>
                <h3 className="truncate text-sm font-semibold text-zinc-900 md:text-base">
                  {current?.alt}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup galeri"
                className="ml-3 shrink-0 rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main image area */}
            <div className="relative h-[280px] w-full bg-zinc-50 sm:h-[360px] md:h-[440px]">
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Foto berikutnya"
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={current?.src}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {current && (
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      className="object-contain"
                      priority
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail strip */}
            {total > 1 && (
              <div className="border-t border-zinc-100 px-5 py-3 md:px-6 md:py-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {indicators}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  /* render modal at document.body level to escape any transform stacking context */
  if (!mounted) return null;
  return createPortal(modal, document.body);
}
