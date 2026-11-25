KroniMeney v2.0 — Wallet redesign

- Splash screen dibuang; app terus buka (loader kecil semasa semak log masuk sahaja).
- UI gaya wallet: Kroni Pass (warna ikut tier), QR sebenar Kroni ID, voucher macam pass.
- Page: Wallet, Aktiviti (tapis + ikut bulan), Reward (katalog + voucher), Profil.
- Lupa/tukar kata laluan, log masuk Google, aktifkan Kroni Pass untuk akaun tanpa profil.
- Data palsu dibuang (Ranking "Top 8%", promo Double XP).

KESELAMATAN DATA POS
- App hanya BACA data Kroni milik ahli sendiri + publicCatalogue (published sahaja).
- Satu-satunya tulisan: kroniMembers/{uid} dan kroniLedger/{uid}_welcome semasa daftar
  (skema sama seperti v1, ikut Firestore rules sedia ada).
- Tiada koleksi POS (sales, products, customers, dll.) disentuh.
- Tebus reward dibuat oleh staff di kaunter (imbas QR Kroni ID).

Fail: KroniMeney.html, sw-kroni.js (skop /KroniMeney sahaja, network-first),
kroni-avatar.jpg, kroni-reward.jpg, KroniMeney.webmanifest.
