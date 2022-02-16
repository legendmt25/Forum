/* eslint-disable */

self.importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
);
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('notificationclick', (ev) => {
  let notification = ev.notification;
  let primaryKey = notification.data.primaryKey;
  let action = ev.action;

  if (action == 'close') {
    notification.close();
  } else {
    clients.openWindow('http://www.example.com');
    notification.close();
  }
});

self.addEventListener('push', (ev) => {
  console.log(ev);
  const data = ev.data.json();
  self.registration.showNotification(data.title, {
    body: data.text,
    icon: data.imageSrc,
  });
});
