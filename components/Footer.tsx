import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-sawah-dark text-paper/70">
      <div className="container-page py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Grup Logo dan Teks */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 shrink-0">
              {/* Logo Desa */}
              <div className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden flex items-center justify-center">
                <Image
                  src="/logodesa.png"
                  alt="Logo Desa Sikayu"
                  fill
                  className="object-contain p-0.5"
                  sizes="(max-width: 768px) 64px, 80px"
                />
              </div>
              
              {/* Logo Kota */}
              <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden flex items-center justify-center">
                <Image
                  src="/logokota.png"
                  alt="Logo Kabupaten Pemalang"
                  fill
                  className="object-contain p-0.5"
                  sizes="(max-width: 768px) 48px, 56px"
                />
              </div>
            </div>

            {/* Teks Identitas */}
            <div>
              <p className="font-display text-paper text-lg">Desa Sikayu</p>
              <p className="text-xs text-paper/50">
                Kecamatan Comal · Kabupaten Pemalang · Jawa Tengah
              </p>
            </div>
          </div>

          {/* Tautan Navigasi */}
          <nav aria-label="Tautan cepat">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li><a href="#profil" className="hover:text-paper transition-colors">Profil Desa</a></li>
              <li><a href="#potensi" className="hover:text-paper transition-colors">Potensi</a></li>
              <li><a href="#fasilitas" className="hover:text-paper transition-colors">Fasilitas</a></li>
              <li><a href="#artikel" className="hover:text-paper transition-colors">Artikel</a></li>
              <li><a href="#kontak" className="hover:text-paper transition-colors">Kontak</a></li>
            </ul>
          </nav>
        </div>

      </div>
    </footer>
  );
}