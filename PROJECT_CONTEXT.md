# AI Creator Labs — konteks proyek

Terakhir diperbarui: 24 November 2026. Dokumen ini mencatat status prototipe lokal agar pekerjaan desain dan implementasi bisa dilanjutkan tanpa mengandalkan riwayat chat.

## Tujuan

Portal belajar AI untuk kebutuhan umum, bukan hanya pekerjaan kreatif. Pengunjung dapat menjelajahi video, artikel, resource, dan skill GitHub yang membantu membangun proyek. Hosting direncanakan memakai Vercel pada tahap berikutnya; belum dideploy.

## Struktur saat ini

- `index.html`, `styles.css`, `app.js`: kerangka situs, homepage, navigasi, pencarian hero, interaksi, dan footer.
- `library.js`, `library.css`: halaman Resources, Knowledges, Articles, serta detail skill GitHub di `/skills/<slug>`.
- `assets/ai-creator-labs-logo.webp`: logo ACL asli yang dipakai di navbar dan footer.
- `preview_server.py`: server preview lokal dengan fallback route SPA. Jalankan `python3 preview_server.py`, lalu buka `http://localhost:4173/`.
- `_redirects`: aturan fallback untuk hosting static yang mendukung format tersebut. Perlu verifikasi routing tersendiri saat konfigurasi Vercel.

## Keputusan desain dan konten

- Palet gelap hitam dan violet, tipografi sans serif, tombol membulat dengan gerak teks dan pergantian warna saat hover. Teks tombol memakai kapitalisasi biasa, bukan semua huruf besar.
- Navbar menampilkan RESOURCES, KNOWLEDGES, ARTICLES dalam huruf besar. Item aktif berwarna violet dan memiliki titik violet di tengah bawah teks. Header berubah menjadi panel kaca bersudut membulat saat halaman digulir.
- Hero memakai satu search bar besar. Saat input fokus, latar belakang blur dan form tetap tajam. Tombol Cari mengirim kata kunci ke halaman Resources.
- Statistik homepage: 15K Pembelajar, 200 Video Pembelajaran, 200 Skill Gratis, dengan animasi angka saat halaman dimuat.
- Di bawah statistik masih ada video pilihan Super AI Agent. Diikuti rak video, rak skill GitHub, rak artikel, CTA “Mau Belajar Apa Hari Ini?” dengan tombol “Eksplor Pembelajaran”, lalu footer.
- Rak video menampilkan kategori sebelum durasi; thumbnail zoom saat hover. Rak skill desktop memakai dua baris, masing-masing empat skill.
- Halaman skill menampilkan sidebar, pembuat/repo GitHub, jumlah stars yang dimuat dari GitHub, kegunaan, perintah instalasi `npx skills add ...` yang dapat disalin, dan catatan kompatibilitas agent.

## Pekerjaan terbuka dan batasan

1. Pengguna ingin pilihan kategori pencarian tampil **di bawah search bar** saat fokus, seperti referensi terakhir. Implementasi ini belum dilakukan karena pengguna meminta menunda eksekusi. Panel hasil pencarian besar yang sebelumnya pernah ada justru diminta untuk dihapus; jangan mengembalikannya.
2. Pengguna belum menentukan konten pengganti video pilihan tepat di bawah tiga statistik. Tunggu arahannya.
3. Login dan Sign Up saat ini hanya tampilan/tautan placeholder; belum ada backend autentikasi.
4. Sebagian artikel berupa konten awal prototipe. Tautan dan durasi video individual serta angka statistik belum diverifikasi sebagai data produksi. Jumlah GitHub stars bergantung pada respons API saat halaman dibuka.
5. Uji ulang pengalaman desktop dan mobile setelah perubahan berikutnya, terutama pencarian, hover, carousel, dan direct reload route.

## Status upload GitHub

Source, aset logo, dan dokumen konteks diunggah ke `https://github.com/illuminablvd/ACL-PublicDirectory` pada 24 November 2026 melalui koneksi GitHub App. Folder proyek lokal belum menjadi repo Git karena izin lingkungan membatasi penulisan direktori `.git`; perubahan berikutnya perlu disinkronkan secara eksplisit ke repo tersebut.
