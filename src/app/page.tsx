import Image from "next/image";
import { Sparkles } from "lucide-react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import { FadeUp } from "@/components/fade-up";
import { ImageCarousel } from "@/components/image-carousel";
import { ProductGallery } from "@/components/product-gallery";
import { ServiceGallery } from "@/components/service-gallery";
import { projectExperienceSections } from "@/data/project-experience";
import { VideoSection } from "@/components/video-section";

const products = [
  {
    title: "Membrane Bakar Sanded",
    image: "/assets/legacy/optimized/images/membrane-bakar-sanded.webp",
  },
  {
    title: "Membrane Bakar Granule",
    image: "/assets/legacy/optimized/images/membrane-bakar-granule.webp",
  },
  {
    title: "Injeksi Grouting",
    image: "/assets/legacy/optimized/images/Injeksi-grouting.webp",
  },
];

const highlights = [
  "Distributor resmi produk membrane bakar INSUTEC BITUMAX.",
  "Tim berpengalaman menangani proyek bocor, retak, dan kebocoran basement.",
  "Layanan mencakup waterproofing, injeksi polyurethane, epoxy flooring, dan coating.",
  "Melayani order pembelian dan applicator di seluruh Indonesia.",
];

const workflow = [
  {
    step: "Persiapan lokasi",
    detail: "Survey area, identifikasi titik bocor, dan rencana kerja yang jelas.",
  },
  {
    step: "Pemasangan titik injeksi",
    detail: "Bobok/cutting V, pemasangan packer, lalu sealing awal.",
  },
  {
    step: "Pelaksanaan injeksi",
    detail: "Injeksi material sesuai kebutuhan hingga titik bocor tertutup sempurna.",
  },
  {
    step: "Finishing & perapihan",
    detail: "Pengeringan, pemotongan titik injeksi, dan kebersihan area kerja.",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_45%)]">
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
            <a href="#video" className="hover:text-zinc-900">
              Video
            </a>
            <a href="#kontak" className="hover:text-zinc-900">
              Kontak
            </a>
          </nav>
          <a
            href="https://wa.me/6281298128370"
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
                Solusi Waterproofing & Injeksi Beton Terpercaya Sejak 1991
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg leading-relaxed text-zinc-600">
                Bina Rahmatika Group melayani pemasangan waterproofing membrane
                bakar, coating system, injeksi beton, grouting, hingga epoxy
                flooring dengan tim berpengalaman dan standar pekerjaan terbaik.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/6281298128370"
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  Konsultasi Gratis
                </a>
                <a
                  href="#produk"
                  className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400"
                >
                  Lihat Produk
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
                src="/assets/legacy/optimized/images/bina-rahmatika-group.webp"
                alt="Tim Bina Rahmatika"
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
                Kontraktor Khusus Waterproofing & Injeksi Beton
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                Bina Rahmatika Group adalah kontraktor khusus jasa dan distributor
                waterproofing membrane bakar, coating, primer aspal emulsi,
                injeksi beton, grouting, polyurethane, hingga epoxy flooring.
                Berpengalaman sejak 1991 dengan jangkauan layanan nasional.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-600">
                <span className="rounded-full border border-zinc-200 px-4 py-2">
                  Distributor resmi
                </span>
                <span className="rounded-full border border-zinc-200 px-4 py-2">
                  Tim applicator
                </span>
                <span className="rounded-full border border-zinc-200 px-4 py-2">
                  Support nasional
                </span>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm">
              <Image
                src="/assets/legacy/optimized/images/binarahmatika49.webp"
                alt="Pekerjaan lapangan"
                width={420}
                height={320}
                className="h-56 w-full rounded-2xl object-cover"
              />
              <div className="mt-4 text-sm text-zinc-600">
                Melayani proyek industrial, komersial, hingga residensial dengan
                metode kerja yang rapi dan terukur.
              </div>
            </div>
          </FadeUp>
        </section>

        <section id="layanan" className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <FadeUp>
              <div>
                <p className="text-sm font-semibold text-amber-600">
                  Layanan Kami
                </p>
                <h2 className="text-3xl font-semibold text-zinc-900">
                  Layanan Terpadu untuk Proyek Anda
                </h2>
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
                  Produk Berkualitas untuk Proteksi Maksimal
                </h2>
              </div>
            </FadeUp>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <FadeUp>
                <ImageCarousel />
              </FadeUp>
              <div className="grid gap-6">
                {products.map((product, index) => (
                  <FadeUp key={product.title} delay={0.05 * index}>
                    <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={420}
                        height={280}
                        className="h-40 w-full object-cover"
                      />
                      <div className="p-5">
                        <h3 className="text-base font-semibold text-zinc-900">
                          {product.title}
                        </h3>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
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
                  Seluruh data proyek dari halaman Project Experience telah
                  dipindahkan ke website ini dan dikelompokkan berdasarkan
                  periode tahun.
                </p>
              </div>
            </FadeUp>
            <div className="space-y-6">
              {projectExperienceSections.map((section, sectionIndex) => (
                <FadeUp key={section.title} delay={0.02 * sectionIndex}>
                  <details className="group rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
                    <summary className="cursor-pointer list-none text-base font-semibold text-zinc-900">
                      {section.title}
                      <span className="ml-2 text-sm font-medium text-amber-600">
                        ({section.items.length} proyek)
                      </span>
                    </summary>
                    <div className="mt-4 overflow-x-auto">
                      <table className="min-w-full text-left text-sm text-zinc-600">
                        <thead className="text-xs uppercase text-zinc-500">
                          <tr>
                            <th className="py-2 pr-4">No</th>
                            <th className="py-2 pr-4">Nama Proyek</th>
                            <th className="hidden py-2 pr-4 md:table-cell">
                              Instansi/Perusahaan
                            </th>
                            <th className="hidden py-2 pr-4 lg:table-cell">
                              Alamat
                            </th>
                            <th className="py-2 pr-4">Pekerjaan</th>
                            <th className="py-2">Volume</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.items.map((item) => (
                            <tr
                              key={`${section.title}-${item.no}-${item.name}`}
                              className="border-t border-zinc-200/60"
                            >
                              <td className="py-2 pr-4 font-medium text-zinc-900">
                                {item.no}
                              </td>
                              <td className="py-2 pr-4 text-zinc-900">
                                {item.name}
                              </td>
                              <td className="hidden py-2 pr-4 md:table-cell">
                                {item.client}
                              </td>
                              <td className="hidden py-2 pr-4 lg:table-cell">
                                {item.location}
                              </td>
                              <td className="py-2 pr-4">{item.scope}</td>
                              <td className="py-2 text-amber-700">
                                {item.volume}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </details>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <FadeUp>
              <div>
                <p className="text-sm font-semibold text-amber-600">
                  Metode Kerja
                </p>
                <h2 className="text-3xl font-semibold text-zinc-900">
                  Alur Pekerjaan Injeksi Beton
                </h2>
              </div>
            </FadeUp>
            <div className="grid gap-6 md:grid-cols-2">
              {workflow.map((item, index) => (
                <FadeUp key={item.step} delay={0.05 * index}>
                  <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6">
                    <h3 className="text-base font-semibold text-zinc-900">
                      {item.step}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {item.detail}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <VideoSection />

        <section id="kontak" className="bg-zinc-900 py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <FadeUp>
              <div>
                <h2 className="text-3xl font-semibold">Siap Mulai Proyek?</h2>
                <p className="mt-3 text-zinc-300">
                  Hubungi tim kami untuk konsultasi, survey, dan penawaran terbaik.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <FiPhone className="h-5 w-5 text-amber-300" />
                    <div>
                      <p className="text-xs uppercase text-zinc-400">Telepon</p>
                      <p className="text-sm font-semibold">0812-9812-8370</p>
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
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
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
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="tel:+6281298128370"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900"
                  >
                    Telepon
                  </a>
                  <a
                    href="mailto:binarahmatika.waterproofing@gmail.com"
                    className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
                  >
                    Email
                  </a>
                  <a
                    href="https://wa.me/6281298128370"
                    className="rounded-full border border-amber-300/60 px-6 py-3 text-sm font-semibold text-amber-200"
                  >
                    WhatsApp
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
