KroniMeney 3.0 — Bina semula dari awal (gaya Flutter / Material 3)

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
