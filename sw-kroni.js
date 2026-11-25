// KroniMeney service worker — scoped to /KroniMeney* only.
// Network-first so members always get the latest app; cache is an offline fallback.
// Never caches Firebase / Firestore traffic.
const CACHE = "kronimeney-v3";
const CORE = [
  "./KroniMeney.html",
  "./KroniMeney.webmanifest",
  "./kroni-qrcode.js",
  "./kroni-icon-192.png",
  "./kroni-favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => /^kronimeney-v[23]$/.test(k) && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Only handle same-origin files and Google Fonts; let Firebase go straight to network.
  const sameOrigin = url.origin === self.location.origin;
  const cdn = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!sameOrigin && !cdn) return;

  e.respondWith(
    fetch(req)
      .then(resp => {
        if (resp && (resp.ok || resp.type === "opaque")) {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return resp;
      })
      .catch(() => caches.match(req).then(r => r || (req.mode === "navigate" ? caches.match("./KroniMeney.html") : undefined)))
  );
});
