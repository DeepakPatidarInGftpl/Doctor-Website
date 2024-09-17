importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAMZ7MNsXmMdsb2J5iwMkYYBkp9yi6ndY8",
  authDomain: "pv-erp.firebaseapp.com",
  projectId: "pv-erp",
  storageBucket: "pv-erp.appspot.com",
  messagingSenderId: "648178498256",
  appId: "1:648178498256:web:9599ce978d745f29217cd5",
  measurementId: "G-CHE1V2WE20"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
