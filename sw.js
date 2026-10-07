// STAR LIGHT COMICS CARD service worker: works offline after the first visit.
const VERSION = "cc-v109";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-180.png", "rubber-duck.jpg", "atlas-prime.jpg", "nova-mae.jpg", "skyline-sentinel.jpg", "queen-quasar.jpg", "thunder-hound.jpg", "atomic-bee.jpg", "radio-ranger.jpg", "mirror-max.jpg", "velvet-comet.jpg", "doctor-fuse.jpg", "neon-noodle.jpg", "jukebox-jane.jpg", "skate-saint.jpg", "diner-dynamo.jpg", "tornado-tess.jpg", "captain-cactus.jpg", "glitter-gator.jpg", "gumball-kid.jpg", "traffic-cone.jpg", "lunchbox-larry.jpg", "static-sally.jpg", "paper-boy.jpg", "star-velvet.jpg", "night-janitor.jpg", "hot-dog-man.jpg", "mailbox-mike.jpg", "coin-op.jpg", "solar-sovereign.jpg", "omega-paragon.jpg", "echo-valkyrie.jpg", "professor-prism.jpg", "crimson-kite.jpg", "granite-grizzly.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Page itself: try the network first so updates arrive, fall back to the cached copy offline.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req, { cache: "no-cache" }).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put("index.html", copy)); return res; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }

  // Google Fonts and our own files: serve from cache, fill the cache on first use.
  if (url.origin === location.origin || url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(
      caches.match(req, { ignoreSearch: url.origin === location.origin && /\.(jpg|png)$/.test(url.pathname) }).then(hit => (hit && !url.search) ? hit : fetch(req).then(res => {
        if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => hit))
    );
  }
});
