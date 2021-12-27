// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD37OEloJ83Ol8sVqqPshrE3oUOWynoQFc",
    authDomain: "webapp-7e5b2.firebaseapp.com",
    projectId: "webapp-7e5b2",
    storageBucket: "webapp-7e5b2.appspot.com",
    messagingSenderId: "532209671665",
    appId: "1:532209671665:web:363863a1d390529053b850",
    measurementId: "G-PQXTQR7W0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
