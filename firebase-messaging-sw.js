importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBQJTukRLYxJDLopHRkpwRnmfhUz1x3hHw",
  authDomain: "star-loans-a1038.firebaseapp.com",
  projectId: "star-loans-a1038",
  storageBucket: "star-loans-a1038.firebasestorage.app",
  messagingSenderId: "630019859941",
  appId: "1:630019859941:web:c50b1b1a64ac69459fbb0c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico' // এখানে আপনার অ্যাপের লোগোর লিংক দিতে পারেন
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
