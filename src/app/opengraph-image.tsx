import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
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
            "radial-gradient(circle at 20% 15%, #f59e0b 0%, rgba(245, 158, 11, 0.08) 32%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1f2937 50%, #374151 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "9999px",
                background: "#f59e0b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#111827",
                fontWeight: 800,
                fontSize: "24px",
              }}
            >
              BRG
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "26px", fontWeight: 700 }}>
                Bina Rahmatika Group
              </span>
              <span style={{ fontSize: "18px", opacity: 0.9 }}>
                Since 1991
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "9999px",
              border: "1px solid rgba(248,250,252,0.35)",
              padding: "8px 18px",
              fontSize: "20px",
              fontWeight: 600,
              background: "rgba(15,23,42,0.25)",
            }}
          >
            Kontraktor + Distributor
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "64px", lineHeight: 1.05, fontWeight: 800 }}>
            Waterproofing, Injeksi Beton, dan Epoxy Flooring
          </div>
          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.3,
              color: "#e5e7eb",
              maxWidth: "95%",
            }}
          >
            Solusi chemical construction untuk proyek industri, komersial, dan
            residensial di seluruh Indonesia.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(248,250,252,0.28)",
            paddingTop: "20px",
            fontSize: "22px",
            color: "#f3f4f6",
          }}
        >
          <span>binarahmatika-group.com</span>
          <span>Waterproofing Membrane, Aspal Emulsi, Grouting, PU</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
