import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBF6DHnpClv7a57EpeYU2_T3AvBkyszRMI',
  authDomain: "movies-chat-web-app.firebaseapp.com",
  projectId: "movies-chat-web-app",
  storageBucket: "movies-chat-web-app.appspot.com",
  messagingSenderId: "162065155700",
  appId: "1:162065155700:web:1cfd137e8a9db2f39bb321",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)