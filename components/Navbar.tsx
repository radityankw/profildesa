"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil Desa" },
  { href: "#pemerintahan", label: "Pemerintahan" },
  { href: "#potensi", label: "Potensi Desa" },
  { href: "#fasilitas", label: "Fasilitas" },
  { href: "#artikel", label: "Artikel" },
  //{ href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between gap-2 h-16 md:h-20">
        {/* Link branding diperbarui untuk jarak yang lebih bersih */}
        <a href="#beranda" className="flex min-w-0 items-center gap-2 md:gap-4 focus-ring rounded">
          
          {/* Kontainer grup logo diperbesar dan TANPA border */}
          <div className="flex items-center gap-1 shrink-0">
            {/* Logo Desa diperbesar ke h-16 (64px) dan tanpa border */}
            <div className="relative h-12 w-12 md:h-20 md:w-20 overflow-hidden flex items-center justify-center">
              <Image
                src="/logodesa.png"
                alt="Logo Desa Sikayu"
                fill
                className="object-contain p-0.5"
                sizes="(max-width: 767px) 48px, 80px"
              />
            </div>
            
            {/* Logo Kota diperbesar ke h-14 (56px) dan tanpa border */}
            <div className="relative h-10 w-10 md:h-14 md:w-14 overflow-hidden flex items-center justify-center">
              <Image
                src="/logokota.png"
                alt="Logo Kabupaten Pemalang"
                fill
                className="object-contain p-0.5"
                sizes="(max-width: 767px) 40px, 56px"
              />
            </div>
          </div>

          {/* Teks dengan sedikit penyesuaian padding atas */}
          <div className="min-w-0 leading-tight pt-1">
            <p className="font-display font-semibold text-sm md:text-base text-ink">
              Desa Sikayu
            </p>
            <p className="hidden sm:block text-[10px] md:text-xs text-ink/60 tracking-wide">
              Kec. Comal · Kab. Pemalang
            </p>
          </div>
        </a>

        {/* Sisa navigasi tetap sama */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-ink/80">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-sawah transition-colors focus-ring rounded"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5 focus-ring rounded"
          aria-label="Buka menu navigasi"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Sisa menu mobile tetap sama */}
      {open && (
        <div className="lg:hidden bg-paper border-t border-line">
          <ul className="container-page py-4 grid gap-1 text-sm font-medium sm:grid-cols-2 sm:gap-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block min-h-11 py-2.5 text-ink/80 hover:text-sawah focus-ring rounded"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}