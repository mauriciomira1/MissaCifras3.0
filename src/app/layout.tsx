// ------ Components ------
import Menu from "@/components/Menu/Menu";

// ------ CSS global ------
import "./globals.css";

// ------ Fonts ------
import { inter, quicksand, roboto, barlow } from "./fonts";
import Footer from "@/components/Footer/Footer";
import MenuMobile from "@/components/Menu/MenuMobile";
import { NextAuthProvider } from "@/providers/auth";

export const metadata = {
  title: "Missa Cifras - Música católica do jeito certo!",
  description: "Música católica do jeito certo!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${quicksand.variable} ${roboto.variable} ${barlow.variable}`}
      >
        <NextAuthProvider>
          <MenuMobile />
          <Menu />
          <div className="flex flex-col items-center">{children}</div>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
