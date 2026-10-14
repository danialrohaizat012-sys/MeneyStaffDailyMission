# Meney POS: isolated subdomain deployment checklist

Target: `pos.meney.my`. **Do not change existing live POS or Firestore data.**

## Files required in a dedicated deployment repository
- Copy `pos.html` to `index.html` (keep an optional duplicate `pos.html` for legacy compatibility).
- Copy `manifest-pos.json`, then change `start_url` to `./`.
- Copy `sw-pos.js` and the entire `icons/` directory (including apple-touch-icon.png, icon-192.png, icon-512.png, icon-maskable-512.png).
- Check that all Firebase SDK imports, assets and PWA paths load without 404.
- Do not copy other apps, backups, or customer exports.
- Do not include service account keys or secrets in the static site.

## Security release gates
1. Confirm Firestore rules for products, sales, inventory, expenses and users deny unauthenticated access, and role permissions are enforced server-side. Browser UI hiding is insufficient.
2. Test inactive user, staff, manager and owner accounts using Firebase Emulator (including denied writes).
3. Add `pos.meney.my` under Firebase Authentication > Settings > Authorized domains when required by auth flows.
4. Test login, read-only dashboards and logout in staging before a test sale. Never run trial transactions on production data.
5. Ensure dedicated GitHub repository contains only the POS deployable files; GitHub Pages assets are public.

## GitHub Pages and Hostinger
1. Create a dedicated repository (e.g. `meney-pos-web`), enable GitHub Pages on main/root after files are copied and verified.
2. GitHub Pages Settings > Custom domain: `pos.meney.my`.
3. Hostinger DNS for meney.my: CNAME name `pos`, target `danialrohaizat012-sys.github.io`, TTL 300. **Do not modify existing @ A records or www CNAME**, and do not alter email records.
4. Wait for DNS verification, then enable Enforce HTTPS.
5. Verify `https://pos.meney.my` login, Firebase connectivity, PWA icons, and that `https://meney.my` still works.

## Rollback
Delete only the `pos` CNAME or revert GitHub Pages custom domain; original POS URL and database remain unchanged.

Status: deployment plan only. Domain is NOT connected until separate repo, Pages, DNS and auth verification are completed.
