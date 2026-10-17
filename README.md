# Website siro_gane (Next.js)

## Cara menjalankan
1. Pasang Node.js (versi 18.18 atau lebih baru) dari https://nodejs.org
2. Buka folder ini di VS Code, lalu buka Terminal (Ctrl + `)
3. Jalankan:
   ```
   npm install
   npm run dev
   ```
4. Buka http://localhost:3000 di browser. Setiap file yang disimpan langsung tampil di browser.

## Struktur folder
- `app/page.js` : halaman depan (Welcome)
- `app/gallery/page.js` : halaman Gallery
- `app/contact/page.js` : halaman Contact
- `app/layout.js` : kerangka semua halaman (font, menu, ikon sosial media)
- `app/globals.css` : semua gaya tampilan (warna, ukuran grid, dll.)
- `components/` : bagian-bagian halaman (Header, Gallery + pop up, ContactForm, Social)
- `data/site.js` : judul, email, link Instagram dan X
- `data/pictures.js` : daftar gambar galeri
- `public/images/` : file gambar

## Menambah gambar galeri
1. Simpan gambar di `public/images/` (misalnya `baru.jpg`, dan versi kecilnya `baru-thumb.jpg`).
2. Tambahkan satu baris di `data/pictures.js`.

## Publikasi
Cara termudah: unggah folder ini ke GitHub, lalu impor di https://vercel.com (gratis).
Untuk build manual: `npm run build` lalu `npm start`.
