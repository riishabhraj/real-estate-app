// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-app-5c916.firebaseapp.com",
  projectId: "mern-estate-app-5c916",
  storageBucket: "mern-estate-app-5c916.appspot.com",
  messagingSenderId: "362434610918",
  appId: "1:362434610918:web:ed76daa6b2f1438945dd27",
};

export const app = initializeApp(firebaseConfig);
