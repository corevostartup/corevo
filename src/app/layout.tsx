import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteContentProvider } from "@/components/SiteContentProvider";
import { readSiteContent } from "@/lib/site-content";
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
    "Startup de tecnologia: apps e plataformas em mobile, desktop e web. Software próprio e projetos sob medida com foco em gestão e usabilidade.",
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
      "Apps e plataformas digitais: do mobile ao painel de gestão. Corevo desenvolve e opera software próprio e projetos alinhados à operação do cliente.",
    type: "website",
    locale: "pt_BR",
  },
};

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  themeColor: "#0E1015",
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
        <SiteContentProvider content={readSiteContent()}>{children}</SiteContentProvider>
      </body>
    </html>
  );
}
