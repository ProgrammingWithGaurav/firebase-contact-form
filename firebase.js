const firebaseConfig = {
    apiKey: "AIzaSyCqMJ-9MqdpQzeIPeQd7zKIjnwpbtaiG_0",
    authDomain: "web-projects-3fb41.firebaseapp.com",
    projectId: "web-projects-3fb41",
    storageBucket: "web-projects-3fb41.appspot.com",
    messagingSenderId: "647354201985",
    appId: "1:647354201985:web:c9d21c439ccb19e0c55a80",
    measurementId: "G-6X5SCSGGN7"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();