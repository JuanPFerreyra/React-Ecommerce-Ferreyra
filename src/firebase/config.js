import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6dczrRPYOmjDTZM73UjmAfAHsdmtV1uE",
  authDomain: "react-ecommerce-f7c23.firebaseapp.com",
  projectId: "react-ecommerce-f7c23",
  storageBucket: "react-ecommerce-f7c23.appspot.com",
  messagingSenderId: "369154367219",
  appId: "1:369154367219:web:845e0ab89b48b80d28a186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}