const FACTS = [
  { label: "Kecamatan", value: "Comal" },
  { label: "Kabupaten", value: "Pemalang" },
  { label: "Provinsi", value: "Jawa Tengah" },
  { label: "Luas wilayah", value: "±1,03 km²" },
  { label: "Kode pos", value: "52363" },
  { label: "Kode wilayah", value: "33.27.12.2003" },
];

const LUAS_WILAYAH = [
  { label: "Pemukiman", value: "40,50 Ha", percentage: 39, color: "bg-gold" },
  { label: "Pertanian sawah", value: "61,50 Ha", percentage: 60, color: "bg-sawah" },
  { label: "Lapangan", value: "1,00 Ha", percentage: 1, color: "bg-ink/60" },
];

const DUSUN_LIST = [
  { id: "Dusun I", nama: "Dusun Tunggul" },
  { id: "Dusun II", nama: "Dusun Setikung" },
  { id: "Dusun III", nama: "Dusun Sikayu" },
  { id: "Dusun IV", nama: "Dusun Lawang" },
];

export default function ProfilDesa() {
  return (
    <section id="profil" className="py-20 md:py-28 bg-paper">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-start">
        
        {/* --- KOLOM KIRI (7/12) --- */}
        <div className="lg:col-span-7">
          <p className="eyebrow text-sawah mb-3">Profil Desa</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
            Mengenal Desa Sikayu lebih dekat
          </h2>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            <p>
              Desa Sikayu merupakan salah satu dari 12 desa/kelurahan di
              Kecamatan Comal, Kabupaten Pemalang, Provinsi Jawa Tengah.
              Meski tergolong sebagai desa dengan wilayah yang mungil,
              Sikayu dikenal padat penduduk dan hidup dengan semangat
              kebersamaan yang kuat antarwarganya.
            </p>
            <p>
              Sebagai bagian dari kawasan pesisir utara Jawa Tengah, letak
              Sikayu yang berdekatan dengan pusat Kecamatan Comal menjadikan
              desa ini mudah diakses dan cukup dinamis dari sisi sosial
              maupun ekonomi warganya.
            </p>
            <p>
              Desa Sikayu turut menyandang predikat{" "}
              <strong className="text-ink">Desa Penggerak Pancasila</strong>,
              mencerminkan komitmen warga dalam menjaga nilai kebangsaan,
              gotong royong, dan kerukunan dalam kehidupan bermasyarakat.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold text-ink mb-4">
              Pembagian wilayah dusun
            </p>
            <div className="grid grid-cols-2 gap-4">
              {DUSUN_LIST.map((d) => (
                <div key={d.id} className="rounded-2xl border border-line bg-white/40 p-5 hover:bg-white/70 transition-colors">
                  <p className="text-[10px] uppercase tracking-widest text-sawah font-semibold mb-1">
                    {d.id}
                  </p>
                  <p className="font-display text-lg text-ink">
                    {d.nama}
                  </p>
                </div>
              ))}
            </div>
          </div>

          
        </div>

        {/* --- KOLOM KANAN (5/12) --- */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-line">
            <div className="p-6 bg-sawah text-paper">
              <p className="eyebrow text-gold-light mb-4">Data singkat</p>
              <dl className="grid grid-cols-2 gap-y-4 gap-x-4">
                {FACTS.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[11px] uppercase tracking-wide text-paper/60">
                      {f.label}
                    </dt>
                    <dd className="font-display text-lg">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-line p-6">
            <p className="text-sm font-semibold text-ink mb-2">
              Batas wilayah
            </p>
            <ul className="text-sm text-ink/70 space-y-1.5">
              <li className="flex justify-between border-b border-dashed border-line pb-1.5">
                <span>Utara</span>
                <span className="text-ink font-medium">Desa Sidorejo</span>
              </li>
              <li className="flex justify-between border-b border-dashed border-line pb-1.5">
                <span>Timur</span>
                <span className="text-ink font-medium text-right">Desa Sukorejo, Kec. Ulujami</span>
              </li>
              <li className="flex justify-between border-b border-dashed border-line pb-1.5">
                <span>Selatan</span>
                <span className="text-ink font-medium">Desa Purwosari</span>
              </li>
              <li className="flex justify-between">
                <span>Barat</span>
                <span className="text-ink font-medium">Desa Purwosari</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-white/60 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-ink">Rincian luas wilayah</p>
                <p className="mt-1 text-xs text-ink/60">Total area Desa Sikayu</p>
              </div>
              <div className="rounded-xl bg-gold-light/40 px-3 py-2 text-right">
                <span className="block text-[10px] uppercase tracking-wider text-ink/60">Total</span>
                <span className="font-display text-lg leading-none text-ink">103 Ha</span>
              </div>
            </div>
            <div className="space-y-5">
              {LUAS_WILAYAH.map((l) => (
                <div key={l.label}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-ink/80">{l.label}</span>
                    <span className="font-semibold text-ink">{l.value}</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-paper ring-1 ring-inset ring-line" role="progressbar">
                    <div className={`h-full rounded-full ${l.color}`} style={{ width: `${l.percentage}%` }} />
                  </div>
                  <p className="mt-1.5 text-right text-xs text-ink/55">{l.percentage}% dari luas desa</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* --- BLOK PETA (DI LUAR GRID 12 KOLOM) --- */}
      <div className="container-page mt-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-line bg-white/60 shadow-sm">
          <div className="p-6 pb-4 border-b border-line/50">
            <p className="text-base font-semibold text-ink">Peta Administrasi Desa Sikayu</p>
          </div>
          <img
            src="/peta.jpg"
            alt="Peta Desa Sikayu"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      
    </section>
  );
}