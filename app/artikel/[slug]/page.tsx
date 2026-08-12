import { client } from "../../../sanity/lib/client"; 
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 10;

export default async function HalamanArtikel({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const query = `
    *[_type == "artikel" && slug.current == $slug][0] {
      judul,
      kategori,
      tanggal,
      "gambarUrl": gambarUtama.asset->url,
      konten
    }
  `;

  const artikel = await client.fetch(query, { slug });

  if (!artikel) {
    return notFound();
  }

  return (
    <main className="pt-32 pb-20 md:pb-28 bg-paper min-h-screen">
      <div className="container-page max-w-3xl mx-auto">
        
        <Link 
          href="/#artikel" 
          className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-sawah transition-colors mb-10"
        >
          &larr; Kembali ke Beranda
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 text-sm uppercase tracking-wide mb-4">
            <span className="text-maroon font-semibold">{artikel.kategori || "Umum"}</span>
            <span className="text-ink/40">•</span>
            <span className="text-ink/60">
              {artikel.tanggal 
                ? new Date(artikel.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) 
                : "Tanggal tidak tersedia"}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-6">
            {artikel.judul}
          </h1>
        </div>

        {artikel.gambarUrl && (
          <div className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden mb-12 border border-line">
            <Image
              src={artikel.gambarUrl}
              alt={artikel.judul}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        <div className="text-ink/80 leading-relaxed text-justify [&>p]:indent-8 [&>p]:mb-4">
          {artikel.konten ? (
            <PortableText value={artikel.konten} />
          ) : (
            <p className="italic text-ink/50">Isi artikel belum tersedia.</p>
          )}
        </div>

      </div>
    </main>
  );
}