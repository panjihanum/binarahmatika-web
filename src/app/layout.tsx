import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

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
  title: {
    default:
      "Bina Rahmatika Group | Spesialis Waterproofing, Injeksi Beton & Epoxy Flooring Bekasi",
    template: "%s | Bina Rahmatika Group",
  },
  description:
    "Bina Rahmatika Group — kontraktor & distributor resmi waterproofing membrane bakar, injeksi beton, grouting, polyurethane, dan epoxy flooring. Berpengalaman sejak 1991, melayani proyek industri, komersial, dan residensial di seluruh Indonesia.",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "Bina Rahmatika Group",
  keywords: [
    "bina rahmatika",
    "binarahmatika",
    "waterproofing bekasi",
    "waterproofing jakarta",
    "waterproofing indonesia",
    "kontraktor waterproofing",
    "distributor waterproofing",
    "membrane bakar",
    "waterproofing membrane",
    "injeksi beton",
    "grouting beton",
    "polyurethane injection",
    "epoxy flooring",
    "lantai epoxy",
    "primer aspal emulsi",
    "waterproofing coating",
    "perbaikan bocor",
    "atap bocor",
    "dak bocor",
    "chemical construction",
    "kontraktor bekasi",
    "kontraktor jakarta",
    "waterproofing murah berkualitas",
    "jasa waterproofing",
    "aplikator epoxy",
  ],
  category: "construction",
  authors: [{ name: "Bina Rahmatika Group", url: "https://binarahmatika.com" }],
  creator: "Bina Rahmatika Group",
  publisher: "Bina Rahmatika Group",
  alternates: {
    canonical: "https://binarahmatika.com",
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: ["/icon.png"],
    apple: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "Bina Rahmatika Group | Spesialis Waterproofing, Injeksi Beton & Epoxy Flooring",
    description:
      "Kontraktor & distributor resmi waterproofing membrane bakar, injeksi beton, grouting, polyurethane, dan epoxy flooring. Berpengalaman sejak 1991, melayani seluruh Indonesia.",
    type: "website",
    url: "https://binarahmatika.com",
    siteName: "Bina Rahmatika Group",
    locale: "id_ID",
    images: [
      {
        url: "https://binarahmatika.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bina Rahmatika Group - Spesialis Waterproofing, Injeksi Beton, dan Epoxy Flooring sejak 1991",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@binarahmatika",
    creator: "@binarahmatika",
    title:
      "Bina Rahmatika Group | Spesialis Waterproofing, Injeksi Beton & Epoxy Flooring",
    description:
      "Kontraktor & distributor resmi waterproofing membrane bakar, injeksi beton, grouting, polyurethane, dan epoxy flooring. Berpengalaman sejak 1991, melayani seluruh Indonesia.",
    images: [
      {
        url: "https://binarahmatika.com/twitter-image",
        width: 1200,
        height: 630,
        alt: "Bina Rahmatika Group - Spesialis Waterproofing, Injeksi Beton, dan Epoxy Flooring",
      },
    ],
  },
  other: {
    "geo.region": "ID-JB",
    "geo.placename": "Bekasi, Jawa Barat, Indonesia",
    "geo.position": "-6.2382;107.0016",
    ICBM: "-6.2382, 107.0016",
    "og:phone_number": "+6287765698279",
    "og:email": "binarahmatikagroup@gmail.com",
    "og:street-address": "Jl. Raya Setu Bekasi Timur Regency Blok D1/12A",
    "og:locality": "Bekasi",
    "og:region": "Jawa Barat",
    "og:country-name": "Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E5M6E3WQFD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E5M6E3WQFD');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="binarahmatika-theme">
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
