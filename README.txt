KroniMeney 3.2 — Gaya keahlian biasa (Flutter / Material 3)

BAHARU DALAM 3.2
- Semua unsur gaming dibuang: XP, level, tier (ROOKIE–MYTHIC), pencapaian, streak, bar kemajuan.
- Kad ahli tunggal (KroniMeney · AHLI), baki points, reward & voucher, sejarah pembelian.
- Tab "Aktiviti" ditukar kepada "Sejarah"; bonus selamat datang dipaparkan sebagai 50 points.
- Medan lama (xp, level, tier, streak) masih ditulis semasa daftar supaya skema data kekal sama,
  tetapi tidak dipaparkan dalam app.

(Nota 3.1)

BAHARU DALAM 3.1 (UI/UX & aliran, tanpa sambungan POS)
- Pengenalan 3 slaid untuk pengguna kali pertama.
- Daftar 2 langkah (Akaun -> Profil), meter kekuatan kata laluan, ralat di bawah setiap medan.
- Skrin "Kroni Pass anda sedia!" selepas aktifkan akaun.
- Butiran reward (sebelum tebus) dan butiran aktiviti dalam bottom sheet.
- Page "Cara ia berfungsi" (kumpul, tahap, tebus) dan "Soalan lazim".
- Butang Back Android/pelayar menutup sheet, dialog dan page; dari tab lain kembali ke Utama.
- Skeleton loading, penunjuk luar talian, butang Salin ID pada QR, getaran halus.
- Kad petua "Baru di sini?" di Utama untuk ahli baharu.

REKA BENTUK
- Material Design 3 penuh: tema cerah & gelap (ikut sistem atau pilih sendiri),
  NavigationBar, FAB "Kad Kroni", app bar, kesan ripple, kotak teks label terapung,
  segmented button, filter chip, bottom sheet, dialog dan snackbar.
- Jenama baharu: logo monogram "K" (kroni-icon-*.png, kroni-maskable-*.png).
  Logo/maskot Kront tidak lagi digunakan oleh KroniMeney.
- Tiada splash screen.

PAGE
- Utama: Kroni Pass (warna ikut tier), points + kemajuan XP, aksi pantas,
  voucher aktif, reward seterusnya, aktiviti terkini, produk baharu.
- Aktiviti: tapis Semua / Pembelian / XP & points / Reward, ikut bulan.
- Reward: Katalog & Voucher saya.
- Profil: tahap Kroni, pencapaian, kod referral, akaun, tema, log keluar.

KESELAMATAN DATA POS
- App hanya BACA data Kroni milik ahli sendiri + publicCatalogue (published sahaja).
- Satu-satunya tulisan: kroniMembers/{uid} dan kroniLedger/{uid}_welcome semasa aktifkan akaun
  (skema sama seperti versi sebelum, ikut Firestore rules sedia ada).
- Tiada koleksi POS disentuh. Tebus reward dibuat oleh staff di kaunter (imbas QR Kroni ID).

FAIL
KroniMeney.html, KroniMeney.webmanifest, sw-kroni.js, kroni-qrcode.js (QR, MIT),
kroni-icon-*.png, kroni-maskable-*.png, kroni-apple-touch-180.png, kroni-favicon-32.png
