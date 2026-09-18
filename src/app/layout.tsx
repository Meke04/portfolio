import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Hamburgue from "@/components/ButtonMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PortfólioMeke ",
  description: "Meu portfólio que demonstra minhas habilidades e aplicações delas",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.className} h-full antialiased`}
    >
      <body className="relative min-h-full bg-black">
        {children}
        <Hamburgue/>
      </body>
    </html>
  );
}
