// Define the cache name
const CACHE_NAME = 'pwa-task-manager';

const urlsToCache = [
  '/'
  // ...
]

// Install a service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    // Open the cache
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Add all URLs to the cache
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch((error) => console.log('Failed to cache', error))
  )
})

// Activate the service worker and remove old data from the cache
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]

  event.waitUntil(
    caches.keys()
      // Resolve when old caches have been removed
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1)
              return caches.delete(cacheName)
          })
        )
      })
      // Enable newly installed service worker
      .then(() => self.clients.claim())
  )
})

// Intercept requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // Use cached data if available
    caches.match(event.request)
      .then((response) => {
        if (response)
          return response
        return fetch(event.request)
      })
  )
})
