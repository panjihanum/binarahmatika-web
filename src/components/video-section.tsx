"use client";

import { useState } from "react";

import { FadeUp } from "@/components/fade-up";
import { VideoModal } from "@/components/video-modal";
import videos from "@/data/videos.json";

export function VideoSection() {
  const [active, setActive] = useState<null | {
    id: string;
    title: string;
  }>(null);

  return (
    <section id="video" className="py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <FadeUp>
          <div>
            <p className="text-sm font-semibold text-amber-600">Video YouTube</p>
            <h2 className="text-3xl font-semibold text-zinc-900">
              Dokumentasi Aplikasi & Produk
            </h2>
            <p className="mt-3 text-sm text-zinc-600">
              Klik untuk menonton video langsung di dalam website.
            </p>
          </div>
        </FadeUp>
        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((video, index) => (
            <FadeUp key={video.id} delay={0.04 * index}>
              <button
                type="button"
                onClick={() => setActive({ id: video.id, title: video.title })}
                className="flex h-full flex-col justify-between rounded-2xl border border-zinc-100 bg-white p-6 text-left shadow-sm transition hover:border-zinc-200"
              >
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    {video.description}
                  </p>
                </div>
                <span className="mt-6 text-sm font-semibold text-amber-600">
                  Tonton Video →
                </span>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>
      <VideoModal
        isOpen={Boolean(active)}
        videoId={active?.id ?? ""}
        title={active?.title ?? ""}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
