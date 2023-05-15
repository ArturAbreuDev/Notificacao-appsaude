import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getMessaging, isSupported } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE2bpANizuLIQcP7-ZNgR0aul9gxfWseY",
  authDomain: "saudeapp-4a696.firebaseapp.com",
  projectId: "saudeapp-4a696",
  storageBucket: "saudeapp-4a696.appspot.com",
  messagingSenderId: "67259028887",
  appId: "1:67259028887:web:ffe285c3e4f5f73fe6e0d2",
  measurementId: "G-T4ST1YSMZ3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
// Initialize Firebase Cloud Messaging and get a reference to the service
//Call bt await messaging () everytime a msg is needed!
const messaging = async () => await isSupported() && getMessaging(app);

export { app, db, auth, messaging }