import {
  Inter,
  Quicksand,
  Roboto,
  Barlow_Condensed,
  Roboto_Mono,
} from "next/font/google";

// Fonte padrão
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Fonte para os textos, menu e subtítulos
export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

// Fonte para as cifras
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

// Fonte bolder, para títulos em destaque
export const barlow = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

// Fonte monospace
export const robotomono = Roboto_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-robotomono",
});
