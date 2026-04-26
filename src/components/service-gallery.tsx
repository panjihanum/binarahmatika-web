"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2, Droplets, Wrench, type LucideIcon } from "lucide-react";

import { FadeUp } from "@/components/fade-up";
import { GalleryLightbox, type GalleryImage } from "@/components/gallery-lightbox";
import servicesData from "@/data/services.json";

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Wrench,
  Building2,
};

const services = servicesData;

type ServiceCardProps = {
  title: string;
  description: string;
  bullets?: string[];
  icon: string;
  images: GalleryImage[];
};

function ServiceCard({ title, description, bullets, icon, images }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const Icon = iconMap[icon] ?? Droplets;

  const openAt = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="group/card relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-b from-white via-white to-zinc-50/90 p-6 shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(0,0,0,0.08)] ring-1 ring-zinc-100/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(245,158,11,0.15)] md:p-7">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
        aria-hidden
      />
      <div className="flex gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 text-amber-700 shadow-inner ring-4 ring-amber-500/10">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-900">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            {description}
          </p>
        </div>
      </div>
      {bullets && bullets.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {bullets.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/70 bg-amber-50/80 px-3 py-1 text-xs font-medium text-amber-900/90"
            >
              <span className="h-1 w-1 rounded-full bg-amber-500" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-5 flex-1 grid grid-cols-2 gap-2 sm:gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => openAt(index)}
            className={`group relative w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100 shadow-inner ${
              images.length === 3 && index === 2
                ? "col-span-2 aspect-[21/9] sm:aspect-[24/9]"
                : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => openAt(0)}
        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-zinc-800"
      >
        Lihat galeri foto
      </button>
      <GalleryLightbox
        images={images}
        isOpen={isOpen}
        startIndex={startIndex}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export function ServiceGallery() {
  const lastOdd = services.length % 2 === 1;

  return (
    <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-2">
      {services.map((service, index) => (
        <FadeUp key={service.title} delay={0.05 * index}>
          <div
            className={
              lastOdd && index === services.length - 1
                ? "lg:col-span-2 lg:flex lg:justify-center"
                : undefined
            }
          >
            <div
              className={
                lastOdd && index === services.length - 1
                  ? "w-full max-w-3xl"
                  : "h-full"
              }
            >
              <ServiceCard {...service} />
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
