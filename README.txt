=====================================================
 INAMI STORE — Panduan Singkat
=====================================================

ISI PROYEK
----------
index.html          Struktur halaman (hero, katalog, cara order, dll.)
style.css           Seluruh tampilan, warna, dan animasi
script.js           Logika katalog, WhatsApp, bintang, parallax, dll.
assets/
  characters.png       Ilustrasi vektor 2 karakter maskot dengan latar transparan;
                       file ini yang dipakai pada bagian hero.
  characters.png       Pratinjau karakter berbentuk JPG (checkerboard transparansi
                       terlihat sebagai bagian gambar, jadi jangan dipakai di hero).
  hero-banner.png      Banner lengkap untuk pratinjau tautan (og:image) dan promosi.
  hero-banner.webp.png Salinan PNG banner dengan nama file lama; tidak dipakai oleh halaman.
  favicon.svg       Ikon tab browser
  products/         Gambar produk (SVG, ilustrasi lokal)

CARA MENJALANKAN
----------------
Cara 1 (paling mudah): klik dua kali index.html agar terbuka di browser.

Cara 2 (server lokal, disarankan saat mengedit):
  - Buka terminal di folder ini, lalu jalankan:
        python3 -m http.server 8000
  - Buka http://localhost:8000 di browser.

Catatan: font (Fredoka & Nunito) dimuat dari Google Fonts. Jika sedang offline,
website tetap tampil memakai font cadangan bawaan perangkat. Semua gambar bersifat lokal.

CARA MENGEDIT (semua ada di script.js, bagian paling atas)
---------------------------------------------------------
1. NOMOR WHATSAPP
   Edit CONFIG.whatsappNumbers. Tulis format lokal (08xxx); otomatis diubah ke +62
   saat membuat tautan wa.me. Tombol "Pesan Sekarang" membagi pesanan bergantian
   ke tiap nomor, dan bagian Kontak punya tombol langsung untuk setiap nomor.
   Penting: website hanya MEMBUKA WhatsApp dengan pesan yang sudah terisi.
   Pelanggan tetap harus menekan tombol kirim di WhatsApp.

2. PRODUK & HARGA
   Edit array PRODUCTS. Produk Robux via Username menggunakan HPP Rp14.500 per 100 Robux
   dan harga jual HPP + 7%: 100 = Rp15.515; 200 = Rp31.030; 300 = Rp46.545;
   500 = Rp77.575; 1.000 = Rp155.150. Harga dihitung tanpa pembulatan.
   Kategori Roblox Gamepass, Gift Item, dan Joki Roblox sudah tersedia sebagai subkategori,
   tetapi belum menampilkan produk sampai harga dan ketentuannya diisi.
   Produk Top Up Game/Jasa Game/Produk Digital yang masih ada merupakan contoh sementara;
   konfirmasi atau ganti harganya sebelum website dipublikasikan.

3. KATEGORI
   Edit array CATEGORIES (id harus sama dengan field category pada produk).
   Subkategori Roblox diatur melalui ROBLOX_SUBCATEGORIES dan field subcategory pada PRODUCTS.

4. GAMBAR PRODUK
   Taruh gambar baru (JPG/PNG/WebP/SVG) di assets/products/ lalu isi field image
   pada produk. Rasio 3:2 (mis. 600x400) paling pas.

5. INSTAGRAM
   Edit CONFIG.instagram.url (mis. https://www.instagram.com/akunmu/) dan label.
   Saat ini URL mengarah ke beranda Instagram sebagai placeholder.

6. TESTIMONI
   Kartu testimoni di index.html (id="testimoni") hanyalah PLACEHOLDER yang bertanda
   jelas. Ganti dengan ulasan asli pelanggan (dengan izin mereka), atau hapus bagian
   tersebut bila belum ada. Jangan memakai ulasan palsu.

7. FAQ
   Edit teks di index.html (id="faq"). Khususnya jawaban "metode pembayaran" —
   sesuaikan dengan metode yang benar-benar kamu terima.

8. WARNA
   Variabel warna ada di bagian :root pada style.css (--blue-500, --lav-400, dll.).

9. KARAKTER MASKOT
   assets/characters.png adalah ilustrasi vektor maskot yang dipakai langsung oleh hero.
   Kamu dapat mengubah warna rambut/baju di file SVG (cari kode warna seperti #bad7fb).
   Jangan mengubah ekstensi pada atribut src kecuali nama file juga diubah.

AKSESIBILITAS
-------------
Website menghormati pengaturan "prefers-reduced-motion": bagi pengguna yang
mematikan animasi di sistem mereka, animasi dikurangi dan konten tetap bisa dipakai.

MENAYANGKAN ONLINE (HOSTING)
----------------------------
Ini website statis (tanpa backend). Unggah seluruh folder ke Netlify, Vercel,
GitHub Pages, Cloudflare Pages, atau hosting biasa (public_html).

CATATAN
-------
- Nama game/merek pada katalog hanya sebagai keterangan produk; pastikan kamu
  berhak/mampu menjual produk tersebut sesuai ketentuan masing-masing platform.
- Toko ini independen dan tidak berafiliasi dengan pemilik merek yang disebutkan.
