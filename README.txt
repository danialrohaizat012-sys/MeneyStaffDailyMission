KroniMeney V10 — A2HS FIX

Punca bug:
V9 start_url menunjuk ./index.html.
Dalam repo MeneyStaffDailyMission, index.html ialah Daily Mission.

Fix:
- KroniMeney.html menggunakan KroniMeney.webmanifest sendiri.
- start_url absolute = /MeneyStaffDailyMission/KroniMeney.html
- manifest ID unique.
- Package ini TIDAK mengandungi sw.js atau manifest.webmanifest,
  jadi ia tidak overwrite PWA Daily Mission.

DEPLOY
1. Upload SEMUA file V10 ini ke root repo MeneyStaffDailyMission.
2. Pastikan nama utama kekal KroniMeney.html.
3. Jangan delete/replace index.html Daily Mission.
4. Delete home-screen shortcut KroniMeney lama.
5. Safari: buka
   https://danialrohaizat012-sys.github.io/MeneyStaffDailyMission/KroniMeney.html
6. Refresh sekali.
7. Add to Home Screen semula.
