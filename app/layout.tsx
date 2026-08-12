import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desa Sikayu — Kecamatan Comal, Kabupaten Pemalang",
  description:
    "Situs profil resmi Desa Sikayu, Kecamatan Comal, Kabupaten Pemalang, Jawa Tengah. Profil desa, potensi, pendidikan, fasilitas, dan kontak.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
