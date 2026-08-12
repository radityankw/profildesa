import { client } from "../sanity/lib/client"; // Sesuaikan path jika perlu
import Image from "next/image";

// 1. Ubah 'tingkatan: number' menjadi 'kategori: string'
interface AparatData {
  _id: string;
  nama: string;
  jabatan: string;
  kategori: string; 
  fotoUrl: string | null;
}

function urutanKadus(jabatan: string) {
  const nomor = jabatan.match(/\b(?:kadus|kepala\s+dusun|staf)\s+([ivxlcdm]+|\d+)\b/i)?.[1];

  if (!nomor) return Number.MAX_SAFE_INTEGER;
  if (/^\d+$/.test(nomor)) return Number(nomor);

  const nilaiRomawi: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return nomor
    .toUpperCase()
    .split("")
    .reduce((total, karakter, indeks, angka) => {
      const nilai = nilaiRomawi[karakter];
      const nilaiBerikutnya = nilaiRomawi[angka[indeks + 1]] || 0;
      return total + (nilai < nilaiBerikutnya ? -nilai : nilai);
    }, 0);
}

// Komponen Avatar tetap sama
function Avatar({ src }: { src?: string | null }) {
  if (src) {
    return (
      // Mengubah rasio 1:1 menjadi rasio vertikal (mirip 3:4)
      <div className="relative h-28 w-20 md:h-32 md:w-24 rounded-2xl border border-line mx-auto mb-4 overflow-hidden bg-white shadow-sm">
        <Image 
          src={src} 
          alt="Foto Profil" 
          fill 
          className="object-cover object-top" 
          sizes="(max-width: 768px) 80px, 96px"
          quality={100} // Memaksa Next.js merender dengan ketajaman maksimal
        />
      </div>
    );
  }

  return (
    <div className="h-28 w-20 md:h-32 md:w-24 rounded-2xl bg-white border border-line flex items-center justify-center mx-auto mb-4 overflow-hidden">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="#2F5233" strokeWidth="1.6" />
        <path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke="#2F5233" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function urutanKasiKaur(jabatan: string) {
    const urutan = [
      "pemerintahan",
      "kesejahteraan",
      "pelayanan",
      "tata usaha",
      "keuangan",
      "perencanaan",
    ];

    const indeks = urutan.findIndex((item) =>
      jabatan.toLowerCase().includes(item)
    );

    return indeks === -1 ? Number.MAX_SAFE_INTEGER : indeks;
}

// Tambahkan opsi revalidate agar Next.js tidak nge-cache data lama
export const revalidate = 10; 

export default async function Pemerintahan() {
  // 2. Ubah query GROQ agar memanggil 'kategori'
  const query = `
    *[_type == "aparat"] | order(nama asc) {
      _id,
      nama,
      jabatan,
      kategori,
      "fotoUrl": foto.asset->url
    }
  `;

  const aparatList: AparatData[] = await client.fetch(query);

  // 3. Ubah logika pencarian menggunakan teks kategori
  // Pastikan teks "Kepala Desa", "Sekretaris Desa", dll sesuai dengan opsi di Sanity kamu
  const kades = aparatList.find((a) => a.kategori?.toLowerCase() === "kepala desa") || {
    nama: "Belum diisi",
    jabatan: "Kepala Desa",
    fotoUrl: null,
  };

  const sekdes = aparatList.find((a) => a.kategori?.toLowerCase() === "sekretaris desa") || {
    nama: "Belum diisi",
    jabatan: "Sekretaris Desa",
    fotoUrl: null,
  };

  // Gunakan include untuk mencocokkan jika tulisannya "Kasi/Kaur" atau "kasi / kaur"
  const kasiKaur = aparatList
    .filter(
      (a) =>
        a.kategori?.toLowerCase().includes("kasi") ||
        a.kategori?.toLowerCase().includes("kaur")
    )
    .sort((a, b) => {
      const urutan = urutanKasiKaur(a.jabatan) - urutanKasiKaur(b.jabatan);
      return urutan || a.jabatan.localeCompare(b.jabatan, "id");
    });
    
  const kadus = aparatList
    .filter((a) => a.kategori?.toLowerCase().includes("dusun"))
    .sort((a, b) => {
      const selisihUrutan = urutanKadus(a.jabatan) - urutanKadus(b.jabatan);
      return selisihUrutan || a.jabatan.localeCompare(b.jabatan, "id");
    });
  const staf = aparatList
    .filter((a) => a.kategori?.toLowerCase() === "staf")
    .sort((a, b) => {
      return a.nama.localeCompare(b.nama, "id");
    });

  return (
    <section id="pemerintahan" className="py-20 md:py-28 bg-paper">
      {/* ... Bagian HTML ke bawahnya biarkan SAMA PERSIS seperti sebelumnya ... */}
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="eyebrow text-sawah mb-3">Pemerintahan Desa</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink max-w-xl">
              Struktur Pemerintahan Desa Sikayu
            </h2>
          </div>
        </div>

        {/* --- KEPALA DESA --- */}
        <div className="flex justify-center mb-3">
          <div className="w-full max-w-xs rounded-2xl border-2 border-sawah bg-sawah text-paper p-6 text-center">
            <Avatar src={kades.fotoUrl} />
            <p className="font-display text-lg">{kades.nama}</p>
            <p className="text-xs uppercase tracking-wide text-gold-light mt-1">
              {kades.jabatan}
            </p>
          </div>
        </div>

        {/* --- SEKRETARIS DESA --- */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-xs rounded-2xl border border-sawah/40 bg-white/70 p-5 text-center">
            <Avatar src={sekdes.fotoUrl} />
            <p className="font-display text-base text-ink">{sekdes.nama}</p>
            <p className="text-xs uppercase tracking-wide text-ink/50 mt-1">
              {sekdes.jabatan}
            </p>
          </div>
        </div>

        {/* --- KASI & KAUR --- */}
        <p className="text-xs uppercase tracking-widest text-maroon font-semibold mb-4">
          Kepala Seksi &amp; Kepala Urusan
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {kasiKaur.length > 0 ? (
            kasiKaur.map((s) => (
              <div
                key={s._id}
                className="rounded-2xl border border-line bg-white/60 p-6 text-center hover:border-sawah/50 transition-colors"
              >
                <Avatar src={s.fotoUrl} />
                <p className="font-display text-base text-ink">{s.nama}</p>
                <p className="text-xs uppercase tracking-wide text-ink/50 mt-1">
                  {s.jabatan}
                </p>
              </div>
            ))
          ) : (
            <p className="text-ink/40 text-sm col-span-full">Data Kasi & Kaur belum ditambahkan.</p>
          )}
        </div>

        {/* --- KEPALA DUSUN --- */}
        <p className="text-xs uppercase tracking-widest text-maroon font-semibold mb-4">
          Kepala Dusun Wilayah Sikayu
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {kadus.length > 0 ? (
            kadus.map((d) => (
              <div
                key={d._id}
                className="rounded-2xl border border-line bg-white/60 p-6 text-center hover:border-gold/60 transition-colors"
              >
                <Avatar src={d.fotoUrl} />
                <p className="font-display text-base text-ink">{d.nama}</p>
                <p className="text-xs uppercase tracking-wide text-ink/50 mt-1">
                  {d.jabatan}
                </p>
              </div>
            ))
          ) : (
            <p className="text-ink/40 text-sm col-span-full">Data Kepala Dusun belum ditambahkan.</p>
          )}
        </div>

        {/* --- STAF --- */}
        <p className="text-xs uppercase tracking-widest text-maroon font-semibold mb-4">
          Staf
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {staf.length > 0 ? (
            staf.map((d) => (
              <div
                key={d._id}
                className="rounded-2xl border border-line bg-white/60 p-6 text-center hover:border-gold/60 transition-colors"
              >
                <Avatar src={d.fotoUrl} />
                <p className="font-display text-base text-ink">{d.nama}</p>
                <p className="text-xs uppercase tracking-wide text-ink/50 mt-1">
                  {d.jabatan}
                </p>
              </div>
            ))
          ) : (
            <p className="text-ink/40 text-sm col-span-full">Data Staf belum ditambahkan.</p>
          )}
        </div>
      </div>
    </section>
  );
}