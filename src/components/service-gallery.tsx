"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Droplets,
  Flame,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { FadeUp } from "@/components/fade-up";
import { GalleryLightbox, type GalleryImage } from "@/components/gallery-lightbox";
import servicesData from "@/data/services.json";

const iconMap: Record<string, LucideIcon> = {
  Flame,
  ShieldCheck,
  Droplets,
  Wrench,
  Building2,
};

const services = servicesData;

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  images: GalleryImage[];
};

function ServiceCard({ title, description, icon, images }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const Icon = iconMap[icon] ?? ShieldCheck;

  const openAt = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Icon className="h-7 w-7 text-amber-600" />
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        {description}
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => openAt(index)}
            className="group relative h-20 overflow-hidden rounded-xl border border-zinc-100"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => openAt(0)}
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-700"
      >
        Lihat galeri jasa
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
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service, index) => (
        <FadeUp key={service.title} delay={0.05 * index}>
          <ServiceCard {...service} />
        </FadeUp>
      ))}
    </div>
  );
}
