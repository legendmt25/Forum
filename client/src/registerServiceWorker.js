/* eslint-disable no-console */
import { register } from 'register-service-worker';

const displayNotification = () => {
  navigator.serviceWorker.getRegistration().then((reg) => {
    var options = {
      body: 'Here is a notification body!',
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
    };
    reg.showNotification('Hello world', options);
  });
};

async function subscribeUser() {
  if ('serviceWorker' in navigator) {
    let reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.subscribe({
      applicationServerKey: urlBase64ToUint8Array(
        'BDAcBc4t71bK5Zir7-d2YqkGBhuEs0YEFwa5gu4QUbYxsQrh9cCdrq1dfeffFjnHj_KIjHwjAWSZ55ABzY8-52k'
      ),
      userVisibleOnly: true,
    });
    return sub;
  }
}

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    async ready() {
      Notification.requestPermission((status) =>
        console.log(`notification permission status ${status}`)
      );
      if (Notification.permission == 'granted') {
        displayNotification();
      }

      console.log((await subscribeUser()).endpoint);

      let reg = await navigator.serviceWorker.getRegistration();
      let sub = await reg.pushManager.getSubscription();
      console.log(sub);

      await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sub),
      });

      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB'
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}

function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
