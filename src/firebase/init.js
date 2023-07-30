// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBePNBxODXZAxgBnblf-BVvOo6MJTZyr4",
  authDomain: "basic-firebase-web-930ce.firebaseapp.com",
  projectId: "basic-firebase-web-930ce",
  storageBucket: "basic-firebase-web-930ce.appspot.com",
  messagingSenderId: "650748726154",
  appId: "1:650748726154:web:8dffbd495c658f5b381673",
  measurementId: "G-0PD5LC7H0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);