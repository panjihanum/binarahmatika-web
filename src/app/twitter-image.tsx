import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(130deg, #111827 0%, #1f2937 45%, #0f172a 100%)",
          color: "#f9fafb",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "9999px",
            background: "rgba(245,158,11,0.18)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span
            style={{
              display: "flex",
              alignSelf: "flex-start",
              borderRadius: "9999px",
              border: "1px solid rgba(248,250,252,0.4)",
              padding: "8px 16px",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Bina Rahmatika Group
          </span>
          <div style={{ fontSize: "68px", lineHeight: 1.02, fontWeight: 800 }}>
            Spesialis Waterproofing Sejak 1991
          </div>
          <div style={{ fontSize: "30px", lineHeight: 1.25, color: "#e5e7eb" }}>
            Membrane Bakar, Aspal Emulsi, Injeksi Beton, Grouting,
            Polyurethane, dan Epoxy Flooring.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "22px",
            borderTop: "1px solid rgba(248,250,252,0.3)",
            paddingTop: "18px",
          }}
        >
          <span>binarahmatika.com</span>
          <span>Kontraktor + Distributor</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
