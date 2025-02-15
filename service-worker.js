const CACHE_NAME = 'login-cache-v1';
const urlsToCache = [
    'index.html',
    'calendario.html',
    'horario1.html',
    'livros.html',
    'styles.css',
    'script.js',
    'icon-192x192.png',
    'icon-512x512.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});
