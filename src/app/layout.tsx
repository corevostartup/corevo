import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Corevo | Core Evolution",
  description:
    "Startup de tecnologia que conecta inteligência, pessoas e negócios. Produtos digitais com experiência objetiva, performance e integração real.",
  keywords: [
    "Corevo",
    "startup",
    "tecnologia",
    "produtos digitais",
    "Locus",
    "PINEE",
    "Pollen",
  ],
  openGraph: {
    title: "COREVO — Core Evolution",
    description:
      "Ecossistemas digitais com propósito. Tecnologia aplicada com criatividade estratégica.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#050810",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-fine opacity-60" />
        {children}
      </body>
    </html>
  );
}
