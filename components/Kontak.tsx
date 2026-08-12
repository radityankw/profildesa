export default function Kontak() {
  return (
    <section id="kontak" className="py-20 md:py-28 bg-paper">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow text-sawah mb-3">Kontak</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-5">
            Sapa kami di Instagram
          </h2>
          <p className="text-ink/70 leading-relaxed mb-8">
            Untuk saat ini, cara tercepat menghubungi dan mengikuti kabar
            terbaru Desa Sikayu adalah lewat akun Instagram resmi desa —
            mulai dari kegiatan warga, prestasi olahraga, hingga pengumuman
            pemerintah desa.
          </p>

          <a
            href="https://instagram.com/desa.sikayu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-sawah px-7 py-3.5 text-sm font-semibold text-paper hover:bg-sawah-light transition-colors focus-ring"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @desa.sikayu di Instagram
          </a>

          <div className="mt-10 rounded-2xl border border-line bg-white/60 p-6">
            <p className="text-[11px] uppercase tracking-wide text-ink/50 mb-1">Alamat Balai Desa</p>
            <p className="text-ink font-medium mb-4">
              Kantor Kepala Desa Sikayu, Dusun Tunggul, Desa Sikayu,Kec. Comal, Kab. Pemalang, Jawa Tengah 52363
            </p>
            <p className="text-[11px] uppercase tracking-wide text-ink/50 mb-1">Jam layanan</p>
            <p className="text-ink font-medium mb-6">Senin–Jumat, 08.00–15.00 WIB</p>
            
            {/* Tautan Redirect ke Google Maps */}
            <a
              href="https://maps.app.goo.gl/CHHzuW8CcTBsMY6g6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sawah hover:text-sawah-light transition-colors"
            >
              Buka di Google Maps
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-line h-80 lg:h-96">
            <iframe
              title="Peta lokasi Kantor Kepala Desa Sikayu, Kecamatan Comal, Kabupaten Pemalang"
              src="https://www.google.com/maps?q=Kantor+Kepala+Desa+Sikayu,+Comal,+Pemalang&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}