const OFFLINE_URL = 'offline.html';
const CACHE_NAME = 'v1';

this.addEventListener('install', (event)=> {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll([
                    'css/style.css',
                    'imgs/logo.png',
                    'imgs/icon-128.png',
                    'imgs/icon-256.png',
                    'imgs/offline.png',
                    'offline.html',
                    'manifest.json'
                ]);
            })
    );

    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
    })());
});

this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                console.log("Retorna a responsa da rede")
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match(OFFLINE_URL);
            })
    );
});