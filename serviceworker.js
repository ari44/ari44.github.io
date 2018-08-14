console.log('Service Worker is running.', self);

self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('push', function(event) {
    let json = event.data.json();
    event.waitUntil(
        self.registration.showNotification(json.notification.title, {
            body: json.notification.body,
            tag: 'push-notification-tag' 
        })
    );
});

self.addEventListener("notificationclick", function(event) {
    event.notification.close();
}, false);
