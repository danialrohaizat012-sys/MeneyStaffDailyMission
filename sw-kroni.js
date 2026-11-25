// KroniMeney service worker — scoped to /KroniMeney* only.
// Network-first so members always get the latest app; cache is an offline fallback.
// Never caches Firebase / Firestore traffic.
const CACHE = "kronimeney-v2";
const CORE = [
  "./KroniMeney.html",
  "./KroniMeney.webmanifest",
  "./kroni-avatar.jpg",
  "./kront-hi.jpg",
  "./kront-go.jpg",
  "./kroni-reward.jpg",
  "./kront-sleep.jpg",
  "./kront-wake.jpg",
  "./kront-excited.jpg",
  "./kront-icon-192.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("kronimeney-v2") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Only handle same-origin files and the pinned QR library; let Firebase go straight to network.
  const sameOrigin = url.origin === self.location.origin;
  const cdn = url.hostname === "cdn.jsdelivr.net" || url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
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
