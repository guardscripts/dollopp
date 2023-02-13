importScripts('./uv/uv.sw.js');

const UV = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith(location.origin + '/service/go/')) event.respondWith(UV.fetch(event));
});