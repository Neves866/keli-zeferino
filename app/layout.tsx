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
  title: "Keli Zeferino | Nutricionista Especialista em Fertilidade",
  description:
    "Acompanhamento nutricional online para fertilidade, voltado a mulheres e casais em todo o Brasil, com estratégias individualizadas e baseadas em evidências.",
  keywords: [
    "nutricionista fertilidade",
    "nutricionista de fertilidade",
    "nutricionista fertilidade online",
    "nutrição e fertilidade",
    "nutrição para tentantes",
    "preparação nutricional para gestação",
    "fertilidade feminina",
    "fertilidade do casal",
    "acompanhamento nutricional online",
  ],
  authors: [{ name: "Keli Zeferino" }],
  creator: "Keli Zeferino",
  metadataBase: new URL("https://kelizeferino.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Keli Zeferino | Nutricionista Especialista em Fertilidade",
    description:
      "Acompanhamento nutricional online para fertilidade, voltado a mulheres e casais em todo o Brasil, com estratégias individualizadas e baseadas em evidências.",
    type: "website",
    locale: "pt_BR",
    siteName: "Keli Zeferino",
    url: "https://kelizeferino.com.br",
  },
  twitter: {
    card: "summary",
    title: "Keli Zeferino | Nutricionista Especialista em Fertilidade",
    description:
      "Acompanhamento nutricional online para fertilidade, voltado a mulheres e casais em todo o Brasil, com estratégias individualizadas e baseadas em evidências.",
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