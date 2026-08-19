import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F7F1E8",
};

export const metadata: Metadata = {
  title: "Keli Zeferino | Nutricionista em Cacoal - RO",
  description:
    "Acompanhamento nutricional individualizado, humano e cuidadoso para mulheres em Cacoal - RO. Escuta, respeito e acolhimento em cada etapa da sua jornada de saúde.",
  keywords: [
    "nutricionista",
    "Cacoal",
    "Rondônia",
    "nutrição feminina",
    "saúde da mulher",
    "acompanhamento nutricional",
  ],
  authors: [{ name: "Keli Zeferino" }],
  creator: "Keli Zeferino",
  metadataBase: new URL("https://kelizeferino.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Keli Zeferino | Nutricionista em Cacoal - RO",
    description:
      "Acompanhamento nutricional individualizado, humano e cuidadoso para mulheres em Cacoal - RO.",
    type: "website",
    locale: "pt_BR",
    siteName: "Keli Zeferino",
    url: "https://kelizeferino.com.br",
  },
  twitter: {
    card: "summary",
    title: "Keli Zeferino | Nutricionista em Cacoal - RO",
    description:
      "Acompanhamento nutricional individualizado, humano e cuidadoso para mulheres em Cacoal - RO.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fraunces.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}