
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, set, ref, push, onValue, onChildAdded, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP6NLOB2H7AA3WWABd0JJeLwza6fCpPKI",
  authDomain: "moon-fmp-quiz-app.firebaseapp.com",
  projectId: "moon-fmp-quiz-app",
  storageBucket: "moon-fmp-quiz-app.appspot.com",
  messagingSenderId: "59152237583",
  appId: "1:59152237583:web:442bbbbdeede8defe00f7a",
  measurementId: "G-0S21KGM3RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

export { database, getDatabase, ref, set, push, onValue, onChildAdded, onChildChanged, onChildRemoved }