const POTENSI = [
  {
    tag: "Prestasi & Olahraga",
    title: "Kampung juara porseni",
    desc:
      "Sikayu dikenal sebagai lumbung bibit olahraga di Kecamatan Comal. Warganya, dari anak-anak hingga dewasa, gemar bulu tangkis — lapangan dan gang-gang kampung kerap jadi arena latihan sore hari. Piala-piala Porseni antarsekolah dan antardesa jadi bukti nyata semangat berprestasi ini.",
    points: [
      "Komunitas bulu tangkis warga aktif berlatih rutin",
      "Langganan juara Porseni tingkat kecamatan/kabupaten",
      "Bibit atlet muda dari tingkat SD hingga remaja",
    ],
  },
  {
    tag: "Organisasi Kepemudaan",
    title: "IPNU–IPPNU yang aktif",
    desc:
      "Pelajar dan pemuda Sikayu tergabung aktif dalam IPNU (Ikatan Pelajar Nahdlatul Ulama) dan IPPNU, rutin mengadakan kegiatan keagamaan, sosial, dan kaderisasi.",
    points: [
      "Kegiatan rutin IPNU & IPPNU ranting Sikayu",
      "Kaderisasi dan kegiatan sosial-keagamaan pemuda",
    ],
  },
  {
    tag: "Ekonomi Warga",
    title: "UMKM & usaha rumahan",
    desc:
      "Sikayu punya ragam UMKM rumahan yang jadi tulang punggung ekonomi warga, dari olahan kerupuk, tempe, hingga konveksi. Potensi ini terbuka untuk terus dikembangkan lewat promosi dan pemasaran yang lebih luas.",
    points: [
      "Olahan Kerupuk",
      "Pengrajin Tempe & Keripik Tempe",
      "Telur Asin",
      "Konveksi",
      "DLL",
    ],
  },
];

export default function PotensiDesa() {
  return (
    <section id="potensi" className="py-20 md:py-28 bg-paper">
      <div className="container-page">
        <p className="eyebrow text-sawah mb-3">Potensi Desa</p>
        <h2 className="font-display text-3xl md:text-4xl text-ink max-w-2xl mb-4">
          Yang membuat Sikayu istimewa
        </h2>
        <p className="text-ink/65 max-w-2xl mb-14">
          Kekuatan Desa Sikayu terletak pada semangat warganya — terutama di
          bidang olahraga dan kepemudaan — yang bisa terus dikembangkan
          menjadi identitas desa.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {POTENSI.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-line bg-white/60 p-7 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2l2.4 6.6L21 9l-5 4.4L17.4 21 12 17.2 6.6 21 8 13.4 3 9l6.6-.4L12 2z" stroke="#C9971F" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="eyebrow text-maroon">{p.tag}</span>
              </div>
              <h3 className="font-display text-xl text-ink mb-2">{p.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed mb-5">{p.desc}</p>
              <ul className="mt-auto space-y-2 pt-4 border-t border-dashed border-line">
                {p.points.map((pt) => (
                  <li key={pt} className="text-sm text-ink/65 flex gap-2">
                    <span className="text-gold mt-0.5">✦</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
