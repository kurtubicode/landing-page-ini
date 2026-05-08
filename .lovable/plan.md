## Landing Page SADESA — Sistem Informasi Desa

Single-page landing yang mereplikasi mockup, dalam Bahasa Indonesia, dengan palet **Hijau Desa Natural** (hijau zamrud + krem hangat).

### Palet & Tipografi
- Primary: hijau zamrud (~oklch 0.45 0.12 155)
- Background: krem hangat (~oklch 0.97 0.015 85)
- Aksen lembut: sage muted, terracotta tipis untuk kartu sekunder
- Font: sans-serif modern (Plus Jakarta Sans / Inter) via Google Fonts
- Token warna ditambahkan ke `src/styles.css` (light mode), semua oklch

### Struktur Halaman (semua di `src/routes/index.tsx`)
1. **Header sticky**: logo "SADESA" dengan ikon pilar, tombol Login (ghost) + Daftar (primary pill)
2. **Hero**: eyebrow "SISTEM INFORMASI DESA", judul besar "Digitalisasi Pelayanan Publik Terpadu.", paragraf deskripsi
3. **Grid Layanan** (3 kartu):
   - Persuratan Mandiri (kartu besar, ikon dokumen)
   - Aduan Warga (ikon megafon)
   - Tracking Status (ikon target, kartu beraksen warna berbeda)
4. **Kabar Desa**: heading + link "Lihat Semua", carousel/horizontal scroll 2–3 kartu artikel dengan gambar, badge kategori, judul, meta waktu
5. **Buku Tamu**: card form dengan input Nama Lengkap, textarea Pesan, tombol "Kirim Pesan" (pill primary). Form statis — submit menampilkan toast "Pesan terkirim" via sonner
6. **Footer**: logo + deskripsi, blok Kantor Desa & Email dengan ikon, ikon sosial, copyright

### Aset
- Ikon dari `lucide-react` (FileText, Megaphone, Target, MapPin, Mail, Globe, Share2, AtSign, Building2)
- Gambar Kabar Desa: 2–3 ilustrasi placeholder (generated, disimpan di `src/assets/`)

### Komponen UI
Pakai shadcn yang sudah ada: `Button`, `Card`, `Input`, `Textarea`, `Label`, `Badge`, `Sonner` (toaster di `__root.tsx`)

### SEO
`head()` di route index: title "SADESA — Sistem Informasi Desa", description Bahasa Indonesia, og:title/og:description.

### Responsif
Mobile-first sesuai mockup; di ≥md jadi layout 2 kolom (hero kiri, kartu layanan kanan) dan kartu Kabar Desa grid 3 kolom.

### Detail Teknis
- Tidak perlu Lovable Cloud (statis)
- Tambah `Toaster` dari `@/components/ui/sonner` di `RootComponent`
- Form Buku Tamu: state lokal + handler yang reset field & panggil `toast.success`
