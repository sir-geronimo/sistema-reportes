 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyACan7b7VE-vmJwDl8fsQznbI9d9hJ4hDY",
    authDomain: "sistema-reportes.firebaseapp.com",
    databaseURL: "https://sistema-reportes.firebaseio.com",
    projectId: "sistema-reportes",
    storageBucket: "sistema-reportes.appspot.com",
    messagingSenderId: "873908911986"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });