// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRCXTaHxSBTrKwyiqYZar5IRZIiZ4R2tA",
  authDomain: "campusgo-endgame.firebaseapp.com",
  projectId: "campusgo-endgame",
  storageBucket: "campusgo-endgame.appspot.com",
  messagingSenderId: "586778697390",
  appId: "1:586778697390:web:35f935d006aab7a34cd73f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;