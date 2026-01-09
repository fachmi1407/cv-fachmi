const CACHE_NAME = 'cv-fachmi-v3';
const OFFLINE_URL = 'offline.html';
const ASSETS = ['.', 'index.html', 'manifest.json', 'offline.html'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request) || caches.match(OFFLINE_URL)));
});
