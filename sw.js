// sw.js

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('test').then(function(cache) {
            return cache.addAll([
                "/biometrics.html",
                "/camera.html",
                "/index.html",
                "/image.png",
                "/location.html",
                "/performance.html",
                "/notifications.html",
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
