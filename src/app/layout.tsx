import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://binarahmatika.com"),
  title: "Bina Rahmatika Group | Waterproofing & Injeksi Beton",
  description:
    "Kontraktor khusus jasa dan distributor waterproofing membrane bakar, coating, primer aspal emulsi, injeksi beton, grouting, polyurethane, dan epoxy flooring.",
  openGraph: {
    title: "Bina Rahmatika Group | Waterproofing & Injeksi Beton",
    description:
      "Kontraktor khusus jasa dan distributor waterproofing membrane bakar, coating, primer aspal emulsi, injeksi beton, grouting, polyurethane, dan epoxy flooring.",
    type: "website",
    url: "https://binarahmatika.com",
  },
  alternates: {
    canonical: "https://binarahmatika.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
