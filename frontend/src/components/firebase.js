// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIkTnAg1IP--qwQXjbIcANgOizPeS0TkU",
  authDomain: "e-commercegroupproject.firebaseapp.com",
  projectId: "e-commercegroupproject",
  storageBucket: "e-commercegroupproject.appspot.com",
  messagingSenderId: "1092588329442",
  appId: "1:1092588329442:web:7eda71366992030e26c1bb",
  measurementId: "G-5DE7MGCDK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };