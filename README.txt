KroniMeney V9 — PWA Identity Fix

Masalah yang dibaiki:
- Add to Home Screen / install PWA tersalah buka Meney DM.
- KroniMeney kini mempunyai unique manifest ID, start_url, app title,
  cache name dan service-worker scope sendiri.

Deploy:
1. Upload SEMUA file dalam folder ini ke root repo KroniMeney.
2. Replace file lama.
3. Buka URL KroniMeney di browser dan hard refresh.
4. DELETE shortcut/PWA KroniMeney lama yang tersalah buka DM.
5. Tutup browser sepenuhnya, buka semula URL KroniMeney.
6. Add to Home Screen / Install semula.

Semua file kekal flat/root. Tiada folder assets.
