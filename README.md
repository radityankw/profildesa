# Situs Profil Desa Sikayu

One-page website profil Desa Sikayu, Kecamatan Comal, Kabupaten Pemalang.
Dibangun dengan Next.js (App Router) + Tailwind CSS, form kontak tersambung
ke Neon Postgres via Server Action, siap deploy ke Vercel.

## 1. Instalasi lokal

```bash
npm install
cp .env.example .env.local
# isi DATABASE_URL di .env.local dengan connection string dari Neon
npm run dev
```

Buka http://localhost:3000

## 2. Menyiapkan database Neon

1. Buat project baru di https://console.neon.tech
2. Salin connection string (mode "pooled") ke `DATABASE_URL` pada `.env.local`
3. Jalankan query berikut di Neon SQL Editor untuk membuat tabel pesan kontak:

```sql
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Tanpa `DATABASE_URL`, situs tetap berjalan normal — form kontak hanya akan
mencatat pesan ke log server, tidak disimpan ke database.

## 3. Deploy ke Vercel

```bash
npm i -g vercel
vercel login
vercel
```

Atau lewat dashboard vercel.com:
1. Import repo GitHub proyek ini
2. Tambahkan Environment Variable `DATABASE_URL` (Production & Preview) di
   Project Settings > Environment Variables
3. Deploy

## 4. Yang masih perlu dilengkapi (placeholder)

- Logo Kabupaten Pemalang & logo Desa Sikayu (ganti lingkaran "LOGO" di
  `components/Navbar.tsx`, `components/Hero.tsx`, `components/Footer.tsx`)
- Foto asli desa (ganti URL Unsplash di `Hero.tsx`, `ProfilDesa.tsx`, `Galeri.tsx`)
- Data struktur pemerintahan (`components/StrukturPemerintah.tsx`)
- Redaksi Visi & Misi resmi (`components/VisiMisi.tsx`)
- Data UMKM, pertanian, sekolah, dan kontak resmi

## Struktur folder

```
app/
  layout.tsx        # Root layout, font, metadata
  page.tsx           # Merakit seluruh section jadi satu halaman
  actions.ts          # Server action form kontak -> Neon
  globals.css
components/
  Navbar.tsx
  Hero.tsx
  ProfilDesa.tsx
  VisiMisi.tsx
  StrukturPemerintah.tsx
  PotensiDesa.tsx
  Pendidikan.tsx
  Fasilitas.tsx
  Galeri.tsx
  Lokasi.tsx
  Kontak.tsx
  Footer.tsx
lib/
  db.ts              # Koneksi Neon (@neondatabase/serverless)
```
