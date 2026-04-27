import Image from "next/image";
import { Sparkles } from "lucide-react";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { FadeUp } from "@/components/fade-up";
import { ProductGallery } from "@/components/product-gallery";
import { ServiceGallery } from "@/components/service-gallery";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { VideoSection } from "@/components/video-section";

const WA_PRIMARY = "6287897553952";
const WA_SECONDARY = "6281295211826";

const highlights = [
  "Berpengalaman menangani proyek bocor & retak sejak 1991",
  "Spesialis waterproofing, injeksi beton, dan epoxy flooring",
  "Distributor resmi produk waterproofing berkualitas",
  "Melayani proyek di seluruh Indonesia",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Bina Rahmatika Group",
      url: "https://binarahmatika.com",
      logo: "https://binarahmatika.com/assets/legacy/optimized/logos/logo-bin.webp",
      email: "binarahmatika.waterproofing@gmail.com",
      sameAs: [
        `https://wa.me/${WA_PRIMARY}`,
        `https://wa.me/${WA_SECONDARY}`,
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Bina Rahmatika Group",
      url: "https://binarahmatika.com",
      image: "https://binarahmatika.com/assets/images/hero-home-spesialis.png",
      description:
        "Spesialis waterproofing, injeksi beton, grouting, polyurethane, dan epoxy flooring untuk proyek industri, komersial, dan residensial.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Raya Setu Bekasi Timur Regency Blok D1/12A",
        addressLocality: "Bekasi",
        addressCountry: "ID",
      },
      telephone: ["0878-9755-3952", "0812-9521-1826"],
      areaServed: "Indonesia",
      serviceType: [
        "Waterproofing Membrane Bakar",
        "Injeksi Beton",
        "Grouting",
        "Epoxy Flooring",
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_45%)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/legacy/optimized/logos/logo-bin.webp"
              alt="Bina Rahmatika Group"
              width={140}
              height={28}
              priority
            />
            <span className="text-xs font-semibold text-zinc-500">
              Since 1991
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
            <a href="#layanan" className="hover:text-zinc-900">
              Layanan
            </a>
            <a href="#produk" className="hover:text-zinc-900">
              Produk
            </a>
            <a href="#project" className="hover:text-zinc-900">
              Portfolio
            </a>
            <a href="#video" className="hover:text-zinc-900">
              Video
            </a>
            <a href="#kontak" className="hover:text-zinc-900">
              Kontak
            </a>
          </nav>
          <a
            href={`https://wa.me/${WA_PRIMARY}`}
            className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Hubungi Admin
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <FadeUp>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold text-amber-700">
                <Sparkles className="h-4 w-4" />
                Distributor & Kontraktor Waterproofing
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-5xl">
                Spesialis Waterproofing, Injeksi Beton & Epoxy Flooring Sejak 1991
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg leading-relaxed text-zinc-600">
                Bina Rahmatika Group merupakan Solusi lengkap pekerjaan chemical
                construction untuk mengatasi kebocoran, perbaikan struktur beton,
                hingga finishing lantai industri dengan hasil tahan lama &
                professional.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${WA_PRIMARY}`}
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  Konsultasi Gratis
                </a>
                <a
                  href="#layanan"
                  className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400"
                >
                  Lihat Layanan
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="grid gap-3 text-sm text-zinc-600 md:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white p-4 shadow-xl">
              <Image
                src="/assets/images/hero-home-spesialis.png"
                alt="Tim teknis memeriksa dinding beton dan denah di lokasi industrial — waterproofing, injeksi beton, epoxy flooring"
                width={720}
                height={480}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </FadeUp>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 md:grid-cols-[1.2fr_0.8fr]">
          <FadeUp>
            <div className="rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-amber-600">Tentang Kami</p>
              <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                Spesialis Chemical Construction untuk Solusi Waterproofing,
                Injeksi Beton & Flooring
              </h2>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-zinc-600">
                <p>
                  Bina Rahmatika Group adalah kontraktor dan distributor yang
                  berfokus pada solusi chemical construction untuk berbagai
                  kebutuhan proyek.
                </p>
                <p>
                  Kami menangani waterproofing, injeksi beton, grouting, hingga
                  epoxy flooring dengan standar kerja profesional dan hasil yang
                  tahan lama.
                </p>
                <p>
                  Berpengalaman sejak 1991, kami telah dipercaya dalam berbagai
                  proyek industrial, komersial, hingga residensial di seluruh
                  Indonesia.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-600">
                <span className="rounded-full border border-zinc-200 px-4 py-2">
                  Distributor Resmi Produk Berkualitas
                </span>
                <span className="rounded-full border border-zinc-200 px-4 py-2">
                  Tim Aplikator Berpengalaman
                </span>
                <span className="rounded-full border border-zinc-200 px-4 py-2">
                  Jangkauan Proyek Nasional
                </span>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm">
              <Image
                src="/assets/images/tentang-kami-proyek.png"
                alt="Kolase dokumentasi pekerjaan waterproofing, epoxy flooring, dan proyek industrial Bina Rahmatika Group"
                width={720}
                height={720}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="mt-4 text-sm leading-relaxed text-zinc-600">
                Menangani berbagai proyek industrial, komersial, hingga residensial
                dengan metode kerja yang rapi, terukur, dan bergaransi.
              </div>
            </div>
          </FadeUp>
        </section>

        <section
          id="layanan"
          className="relative overflow-hidden bg-white py-16"
        >
          <div
            className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-zinc-300/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl space-y-10 px-6">
            <FadeUp>
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-amber-600">
                  Layanan Kami
                </p>
              </div>
            </FadeUp>
            <ServiceGallery />
          </div>
        </section>

        <section id="produk" className="py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <FadeUp>
              <div>
                <p className="text-sm font-semibold text-amber-600">
                  Produk Unggulan
                </p>
                <h2 className="text-3xl font-semibold text-zinc-900">
                  Material &amp; Produk yang Kami Distribusikan
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600">
                  Kami menyediakan material berkualitas untuk mendukung berbagai
                  kebutuhan waterproofing, injeksi beton, dan epoxy flooring, baik
                  untuk supply maupun aplikasi langsung.
                </p>
              </div>
            </FadeUp>
            <ProductGallery />
          </div>
        </section>

        <section id="project" className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <FadeUp>
              <div>
                <p className="text-sm font-semibold text-amber-600">
                  Project Experience
                </p>
                <h2 className="text-3xl font-semibold text-zinc-900">
                  Portofolio Proyek Berjalan & Selesai
                </h2>
                <p className="mt-3 max-w-3xl text-sm text-zinc-600">
                  Pilih tahun pada dropdown untuk menampilkan daftar proyek
                  berjalan dan selesai sesuai periode data.
                </p>
              </div>
            </FadeUp>
            <ProjectPortfolio />
          </div>
        </section>

        <VideoSection />

        <section id="kontak" className="bg-zinc-900 py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <FadeUp>
              <div>
                <h2 className="text-3xl font-semibold">
                  Konsultasikan Kebutuhan Anda Sekarang
                </h2>
                <p className="mt-3 text-zinc-300">
                  Tim kami siap membantu Anda menentukan Solusi terbaik untuk
                  kebutuhan waterproofing, injeksi beton, hingga epoxy flooring.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                    <FaWhatsapp className="h-5 w-5 shrink-0 text-emerald-400" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                        Hubungi via WhatsApp
                      </p>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        <a
                          href={`https://wa.me/${WA_PRIMARY}`}
                          className="text-sm font-semibold text-white underline decoration-white/30 underline-offset-2 transition hover:decoration-white"
                        >
                          0878-9755-3952
                        </a>
                        <a
                          href={`https://wa.me/${WA_SECONDARY}`}
                          className="text-sm font-semibold text-white underline decoration-white/30 underline-offset-2 transition hover:decoration-white"
                        >
                          0812-9521-1826
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <FiMail className="h-5 w-5 text-amber-300" />
                    <div>
                      <p className="text-xs uppercase text-zinc-400">Email</p>
                      <p className="text-sm font-semibold">
                        binarahmatika.waterproofing@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <FiMapPin className="h-5 w-5 text-amber-300" />
                    <div>
                      <p className="text-xs uppercase text-zinc-400">Alamat</p>
                      <p className="text-sm font-semibold">
                        Jl. Raya Setu Bekasi Timur Regency Blok D1/12A, Bekasi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">Kontak Cepat</h3>
                <p className="mt-2 text-sm text-zinc-300">
                  Pilih kanal komunikasi yang paling nyaman.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${WA_PRIMARY}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp 0878-9755-3952
                  </a>
                  <a
                    href={`https://wa.me/${WA_SECONDARY}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp 0812-9521-1826
                  </a>
                  <a
                    href="mailto:binarahmatika.waterproofing@gmail.com"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Email
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>© 1991-2026 Bina Rahmatika Group. All rights reserved.</span>
          <span>Jl. Raya Setu Bekasi Timur Regency Blok D1/12A, Bekasi.</span>
        </div>
      </footer>
    </div>
  );
}
