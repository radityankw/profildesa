const SEKOLAH = [
  { jenjang: "TK", nama: "TK Pertiwi" },
  { jenjang: "PAUD / SPS", nama: "SPS Sejahtera" },
  { jenjang: "SD", nama: "SDN 1 Sikayu" },
  { jenjang: "SD", nama: "SDN 2 Sikayu" },
];

const FASILITAS = [
  { name: "Balai Desa", icon: "balai" },
  { name: "Masjid & Mushola", icon: "masjid" },
  { name: "Posyandu", icon: "posyandu" },
  { name: "Pos Kamling", icon: "pos" },
  { name: "Lapangan / GOR", icon: "lapangan" },
];

function Icon({ id }: { id: string }) {
  const common = { stroke: "#2F5233", strokeWidth: 1.5, fill: "none" } as const;
  switch (id) {
    case "bulu":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M12 10v9M9 22h6" strokeLinecap="round" />
        </svg>
      );
    case "masjid":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <path d="M4 21V11l8-6 8 6v10" strokeLinejoin="round" />
          <path d="M9 21v-6h6v6" strokeLinejoin="round" />
          <circle cx="12" cy="4" r="1" />
        </svg>
      );
    case "posyandu":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <path d="M12 21s-7-4.35-9-8.5C1.5 8.5 4 5 7.5 5c2 0 3.5 1 4.5 2.3C13 6 14.5 5 16.5 5 20 5 22.5 8.5 21 12.5 19 16.65 12 21 12 21z" strokeLinejoin="round" />
        </svg>
      );
    case "pos":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <path d="M5 21V9l7-5 7 5v12" strokeLinejoin="round" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "pkk":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <path d="M2 21c0-3.3 2.7-6 6-6s6 2.7 6 6M10 21c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
        </svg>
      );
    case "lapangan":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <rect x="3" y="6" width="18" height="12" rx="1.5" />
          <path d="M12 6v12M3 12h18" />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <path d="M4 21V10l8-6 8 6v11" strokeLinejoin="round" />
          <path d="M9 21v-7h6v7" />
        </svg>
      );
  }
}

export default function Fasilitas() {
  return (
    <section id="fasilitas" className="py-20 md:py-32 bg-sawah-dark text-paper relative overflow-hidden">
      
      {/* Elemen Cahaya Dekoratif (Background Glow) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-light/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-paper/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container-page relative z-10">
        <div className="mb-16">
          <p className="eyebrow text-gold-light mb-3 flex items-center gap-2">
            <span className="h-px w-6 bg-gold-light/50" />
            Fasilitas &amp; Pendidikan
          </p>
          <h2 className="font-display text-4xl md:text-5xl max-w-xl leading-tight">
            Sarana penunjang <br/> kehidupan warga
          </h2>
        </div>

        {/* --- Pendidikan --- */}
        <div className="mb-20">
          <div className="flex items-center justify-between border-b border-paper/10 pb-3 mb-6">
            <p className="text-sm uppercase tracking-widest text-gold-light font-semibold">
              Satuan Pendidikan
            </p>
            <span className="text-xs text-paper/40">{SEKOLAH.length} Unit</span>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {SEKOLAH.map((s) => (
              <div
                key={s.nama}
                className="group relative rounded-2xl border border-paper/10 bg-gradient-to-br from-paper/5 to-transparent p-5 sm:p-6 hover:border-gold/40 hover:bg-paper/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
              >
                <div className="h-12 w-12 rounded-full bg-paper flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F5233" strokeWidth="1.5">
                    <path d="M2 8l10-5 10 5-10 5-10-5z" strokeLinejoin="round" />
                    <path d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[11px] uppercase tracking-widest text-gold-light/80 font-medium mb-1">{s.jenjang}</p>
                <p className="text-base font-medium text-paper/95 leading-snug">
                  {s.nama}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Fasilitas Umum --- */}
        <div>
          <div className="flex items-center justify-between border-b border-paper/10 pb-3 mb-6">
            <p className="text-sm uppercase tracking-widest text-gold-light font-semibold">
              Fasilitas Umum
            </p>
            {/*<span className="text-xs text-paper/40">{FASILITAS.length} Unit</span>*/}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {FASILITAS.map((f) => (
              <div
                key={f.name}
                className="group relative rounded-2xl border border-paper/10 bg-gradient-to-br from-paper/5 to-transparent p-5 sm:p-6 hover:border-paper/30 hover:bg-paper/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
              >
                <div className="h-12 w-12 rounded-full bg-paper flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <Icon id={f.icon} />
                </div>
                <p className="text-base font-medium text-paper/95 leading-snug">
                  {f.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}