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
    default: "Bina Rahmatika Group | Waterproofing & Injeksi Beton",
    template: "%s | Bina Rahmatika Group",
  },
  description:
    "Kontraktor khusus jasa dan distributor waterproofing membrane bakar, coating, primer aspal emulsi, injeksi beton, grouting, polyurethane, dan epoxy flooring.",
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
    "waterproofing",
    "membrane bakar",
    "injeksi beton",
    "grouting",
    "polyurethane",
    "epoxy flooring",
    "kontraktor waterproofing",
    "primer aspal emulsi",
  ],
  category: "construction",
  authors: [{ name: "Bina Rahmatika Group", url: "https://binarahmatika.com" }],
  creator: "Bina Rahmatika Group",
  publisher: "Bina Rahmatika Group",
  alternates: {
    canonical: "/",
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
    title: "Bina Rahmatika Group | Waterproofing & Injeksi Beton",
    description:
      "Kontraktor khusus jasa dan distributor waterproofing membrane bakar, coating, primer aspal emulsi, injeksi beton, grouting, polyurethane, dan epoxy flooring.",
    type: "website",
    url: "/",
    siteName: "Bina Rahmatika Group",
    locale: "id_ID",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bina Rahmatika Group - Spesialis Waterproofing, Injeksi Beton, dan Epoxy Flooring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@binarahmatika",
    creator: "@binarahmatika",
    title: "Bina Rahmatika Group | Waterproofing & Injeksi Beton",
    description:
      "Kontraktor khusus jasa dan distributor waterproofing membrane bakar, coating, primer aspal emulsi, injeksi beton, grouting, polyurethane, dan epoxy flooring.",
    images: ["/twitter-image"],
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
