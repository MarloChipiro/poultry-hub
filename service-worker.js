const CACHE='henhouse-pwa-v102-location-contact';
const CORE=[
  './',
  './index.html',
  './manifest.json',
  './js/supabase-config.js',
  './pages/farm-management.html',
  './pages/seller.html',
  './pages/buyer.html',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(
    fetch(e.request).then(r=>{
      const cp=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});
      return r;
    }).catch(()=>caches.match(e.request).then(hit=>hit || (e.request.mode==='navigate'
      ? caches.match('./index.html')
      : new Response('Offline',{status:503}))))
  );
});
