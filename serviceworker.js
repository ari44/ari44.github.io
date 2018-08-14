console.log('Service Worker is running.', self);

self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('push', function(event) {
    const message = event.data ? event.data.text() : '(ÅEÅÕÅE)';
    event.waitUntil(
        self.registration.showNotification('Push Received', {
            body: message,
            tag: 'push-notification-tag' 
        })
    );
});

self.addEventListener("notificationclick", function(event) {
    event.notification.close();
}, false);
