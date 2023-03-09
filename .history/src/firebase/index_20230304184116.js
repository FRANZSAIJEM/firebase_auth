// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm8yGVdz4sneeFof3ap-tepFHVz-rZPJU",
  authDomain: "authmejias.firebaseapp.com",
  projectId: "authmejias",
  storageBucket: "authmejias.appspot.com",
  messagingSenderId: "96076514003",
  appId: "1:96076514003:web:6674036afe1d865eef0a26",
  measurementId: "G-VK899MPQS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);