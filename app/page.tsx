import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfilDesa from "@/components/ProfilDesa";
import VisiMisi from "@/components/VisiMisi";
import Pemerintahan from "@/components/Pemerintahan";
import PotensiDesa from "@/components/PotensiDesa";
import Fasilitas from "@/components/Fasilitas";
import Galeri from "@/components/Galeri";
import Artikel from "@/components/Artikel";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProfilDesa />
      <VisiMisi />
      <Pemerintahan />
      <PotensiDesa />
      <Fasilitas />
      <Artikel />
      <Kontak />
      <Footer />
    </main>
  );
}
