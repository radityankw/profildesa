import { client } from "../sanity/lib/client"; // Sesuaikan path ini jika client.ts ada di folder src/sanity/
import Link from "next/link";
import Image from "next/image";

// Mendefinisikan bentuk data agar rapi dan mudah dibaca
interface ArtikelData {
  _id: string;
  judul: string;
  slug: string;
  kategori: string;
  tanggal: string;
  gambarUrl: string;
}

export default async function Artikel() {
  // Kueri GROQ: Mengambil 3 artikel terbaru dan merelasikan gambar utamanya
  const query = `
    *[_type == "artikel"] | order(tanggal desc)[0...3] {
      _id,
      judul,
      "slug": slug.current,
      kategori,
      tanggal,
      "gambarUrl": gambarUtama.asset->url
    }
  `;

  // Menarik data langsung dari Sanity saat halaman di-render di server
  const artikelList: ArtikelData[] = await client.fetch(query);

  return (
    <section id="artikel" className="py-20 md:py-28 bg-paper">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="eyebrow text-sawah mb-3">Kabar Desa</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink max-w-xl">
              Berita dan pengumuman terbaru
            </h2>
          </div>
          <Link
            href="/artikel"
            className="text-sm font-semibold text-sawah hover:text-sawah-light transition-colors border-b border-sawah pb-0.5"
          >
            Lihat semua artikel &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {artikelList.map((item) => (
            <Link key={item._id} href={`/artikel/${item.slug}`} className="group cursor-pointer block">
              <div className="relative h-56 rounded-2xl overflow-hidden mb-4 border border-line">
                {item.gambarUrl ? (
                  <Image
                    src={item.gambarUrl}
                    alt={item.judul}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-sawah/10 flex items-center justify-center text-sawah/50 text-sm">
                    Tanpa Gambar
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-wide mb-2">
                <span className="text-maroon font-semibold">{item.kategori || "Umum"}</span>
                <span className="text-ink/40">•</span>
                <span className="text-ink/60">
                  {item.tanggal 
                    ? new Date(item.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) 
                    : "Tanggal tidak tersedia"}
                </span>
              </div>
              <h3 className="font-display text-lg text-ink leading-snug group-hover:text-sawah transition-colors line-clamp-2">
                {item.judul}
              </h3>
            </Link>
          ))}

          {/* Fallback UI jika database Sanity masih kosong */}
          {artikelList.length === 0 && (
            <div className="col-span-3 text-center py-12 text-ink/50 border border-dashed border-line rounded-2xl">
              Belum ada artikel yang dipublikasikan oleh perangkat desa.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}