const GALERI = [
  { src: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop", caption: "Kegiatan warga (placeholder)" },
  { src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=800&auto=format&fit=crop", caption: "Suasana sawah Sikayu (placeholder)" },
  { src: "https://images.unsplash.com/photo-1593766787879-e8e2e0e7e6e4?q=80&w=800&auto=format&fit=crop", caption: "Turnamen bulu tangkis (placeholder)" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", caption: "Gotong royong warga (placeholder)" },
  { src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop", caption: "Kegiatan IPNU–IPPNU (placeholder)" },
  { src: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop", caption: "Balai desa (placeholder)" },
];

export default function Galeri() {
  return (
    <section id="galeri" className="py-20 md:py-28 bg-paper">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="eyebrow text-sawah mb-3">Galeri</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink max-w-xl">
              Momen dari kampung kami
            </h2>
          </div>
          <span className="text-xs rounded-full border border-line px-4 py-1.5 text-ink/50">
            Foto placeholder — ganti dengan dokumentasi asli
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALERI.map((g, i) => (
            <figure
              key={g.caption}
              className={`relative rounded-2xl overflow-hidden border border-line group ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div
                className={`bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? "h-full min-h-[280px]" : "h-40 md:h-44"
                }`}
                style={{ backgroundImage: `url('${g.src}')` }}
                role="img"
                aria-label={g.caption}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent text-paper text-xs px-3 py-2">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
