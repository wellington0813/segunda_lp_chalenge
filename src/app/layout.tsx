import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const Exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Segunda LP",
  description: "Desafio uma Landing Page por semana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Exo2.className}>{children}</body>
    </html>
  );
}
