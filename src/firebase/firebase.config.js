// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlxIb68uzhw9MHW1SrXU3az65QewjgEOo",
    authDomain: "dragon-news-portal.firebaseapp.com",
    projectId: "dragon-news-portal",
    storageBucket: "dragon-news-portal.appspot.com",
    messagingSenderId: "593891329648",
    appId: "1:593891329648:web:2c6eadb4a5e38f8a7e96b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;