const MISI = [
  {
    misi: "Mewujudkan pemerintahan desa yang tertib dan berwibawa",
    tujuan: [
      {
        nama: "Terwujudnya kegiatan pemerintahan desa yang tertib dan lancar",
        sasaran: [
          "Tersedianya aparatur yang siap melayani masyarakat",
          "Tersedianya sarana prasarana desa yang mendukung pelayanan masyarakat desa",
          "Tersedianya layanan kepada masyarakat desa yang memuaskan",
        ],
      },
      {
        nama: "Terwujudnya tata perencaaan desa yang baik",
        sasaran: [
          "Tersedianya data dan informasi desa",
          "Tersedianya perencanaan pembangunan desa",
        ],
      },
    ],
  },
  {
    misi: "Mewujudkan Keamanan dan Kesejahteraan warga desa",
    tujuan: [
      {
        nama: "Meningkatkan usaha ekonomi produktif warga",
        sasaran: [
          "Terselenggaranya pelatihan usaha produksi rumah tangga desa",
          "Terbinanya kelompok usaha industri rumah tangga desa",
        ],
      },
      {
        nama: "Meningkatkan taraf pendidikan warga desa",
        sasaran: [
          "Tersedianya sarana pendidikan yang memadai",
          "Lancarnya kegiatan belajar mengajar",
        ],
      },
      {
        nama: "Meningkatkan ketertiban dan keamanan desa",
        sasaran: [
          "Terciptanya keamanan desa yang kondusif",
        ],
      },
      {
        nama: "Meningkatkan tingkat kesehatan masyarakat",
        sasaran: [
          "Meningkatnya kesadaran masyarakat akan kesehatan",
          "Ketersediaan sarana prasarana pelayanan kesehatan yang memadai",
        ],
      },
    ],
  },
];

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="py-20 md:py-28 bg-sawah-dark text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.08] [background-size:16px_16px]" aria-hidden="true" />
      <div className="container-page relative">
        <p className="eyebrow text-gold-light mb-3">Visi &amp; Misi</p>
        <h2 className="font-display text-3xl md:text-4xl mb-14 max-w-2xl">
          Arah pembangunan Desa Sikayu
        </h2>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-widest text-gold-light font-semibold mb-4">
              Visi
            </p>
            <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-paper/95 border-l-2 border-gold pl-6">
              “Terwujudnya Pemerintahan Desa yang Jujur, Amanah,
              Religius, Maju, Demokratis, dan Sejahtera.”
            </blockquote>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-widest text-gold-light font-semibold mb-4">
              Misi
            </p>
            <ol className="space-y-10">
              {MISI.map((item, i) => (
                <li key={i} className="flex gap-4 md:gap-5">
                  <span className="font-display text-2xl text-gold-light/80 w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  
                  <div className="pt-1 w-full">
                    {/* Judul Misi */}
                    <p className="text-paper font-semibold text-lg md:text-xl leading-relaxed mb-5">
                      {item.misi}
                    </p>
                    
                    {/* List Tujuan & Sasaran */}
                    {item.tujuan && (
                      <div className="space-y-6">
                        {item.tujuan.map((t, j) => (
                          <div key={j} className="space-y-2">
                            {/* Tujuan */}
                            <div className="flex gap-2 text-paper/90">
                              <span className="font-medium">{String.fromCharCode(97 + j)}.</span>
                              <p className="font-medium leading-relaxed">{t.nama}</p>
                            </div>
                            
                            {/* Sasaran */}
                            <div className="pl-6 pt-1">
                              <p className="text-[10px] uppercase tracking-widest text-gold-light/60 font-semibold mb-2">
                                Sasaran:
                              </p>
                              <ul className="list-disc list-outside pl-4 space-y-1.5 text-paper/75 text-sm md:text-base">
                                {t.sasaran.map((s, k) => (
                                  <li key={k} className="leading-relaxed">{s}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}