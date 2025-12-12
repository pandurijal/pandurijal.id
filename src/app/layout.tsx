import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "pandurijal.id | Personal Blog",
    template: "%s | pandurijal.id",
  },
  description: "A modern blog platform built with Next.js 15",
  openGraph: {
    title: "pandurijal.id",
    description: "Personal Blog-nya Pandu Rijal",
    url: "https://pandurijal.id",
    siteName: "pandurijal.id",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "pandurijal.id",
    card: "summary_large_image",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <script
            defer
            src="https://umami-pr.up.railway.app/script.js"
            data-website-id="2242a1c2-ba9f-47d2-8b74-f1aedb5484a0"
          />
        )}
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
