import Image from "next/image";

const STATS = [
  { value: "1,03", unit: "km²", label: "Luas wilayah" },
  { value: "±4.100", unit: "jiwa", label: "Penduduk" },
  { value: "52363", unit: "", label: "Kode pos" },
  { value: "33.27.12", unit: "", label: "Kode wilayah" },
];

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-16 md:pt-20">
      {/* 1. Tinggi dikurangi menjadi 70vh agar kotak statistik ikut naik */}
      <div className="relative h-[70vh] min-h-[500px] md:min-h-[520px] w-full overflow-hidden bg-sawah-dark">
        {/* Background images */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/background.jpeg')",
          }}
          role="img"
          aria-label="Pemandangan sawah dan permukiman khas Desa Sikayu (foto placeholder)"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sawah-dark via-sawah-dark/55 to-sawah-dark/20" />
        <div className="absolute inset-0 bg-grain opacity-30 [background-size:14px_14px]" />

        {/* 2. Ubah flex layout menjadi justify-start, dan dorong manual dari atas menggunakan pt-16 md:pt-24 */}
        <div className="relative h-full container-page flex flex-col justify-start pt-16 md:pt-24 pb-32">
          <div className="animate-rise">
            
            <div className="flex items-center gap-2 sm:gap-3 mb-6 md:mb-8">
              <div className="relative h-10 w-10 sm:h-16 sm:w-16 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src="/logodesa.png"
                  alt="Logo Desa Sikayu"
                  fill
                  className="object-contain"
                  sizes="(max-width: 639px) 40px, 64px"
                />
              </div>
              
              <div className="relative h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src="/logokota.png"
                  alt="Logo Kabupaten Pemalang"
                  fill
                  className="object-contain"
                  sizes="(max-width: 639px) 32px, 48px"
                />
              </div>
              
              <span className="eyebrow text-paper text-[9px] sm:text-[11px] font-extrabold leading-relaxed drop-shadow-md tracking-wide sm:tracking-wider">
                Pemerintah Desa Sikayu · Kecamatan Comal · Kabupaten Pemalang
              </span>
            </div>

            <h1 className="font-garamond text-4xl sm:text-5xl md:text-6xl text-paper leading-[0.98] max-w-3xl drop-shadow-sm">
              Jelajah Sikayu
            </h1>
            <p className="mt-5 max-w-xl text-paper/85 text-sm md:text-base leading-relaxed drop-shadow-sm">
              Desa Sikayu merupakan salah satu desa di Kecamatan Comal, Kabupaten Pemalang, yang memiliki potensi di bidang konveksi, pertanian, serta semangat gotong royong masyarakat dalam mendukung pembangunan desa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#profil"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink hover:bg-gold-light transition-colors focus-ring shadow-sm"
              >
                Kenali Desa Kami
              </a>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="container-page">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-paper/20 rounded-t-2xl bg-ink/40 backdrop-blur-sm border border-b-0 border-paper/15">
              {STATS.map((s) => (
                <div key={s.label} className="px-3 py-3 sm:px-4 sm:py-3.5">
                  <p className="font-display text-lg sm:text-xl md:text-2xl text-paper">
                    {s.value}
                    <span className="text-xs text-gold-light ml-1">{s.unit}</span>
                  </p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-paper/70 mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ribbon-edge" aria-hidden="true" />
    </section>
  );
}