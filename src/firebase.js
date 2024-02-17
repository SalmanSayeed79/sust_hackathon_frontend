// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNxTS-7rUzy9EsZUF9sjZLyI6aVVmJeps",
    authDomain: "buldr-bangladesh.firebaseapp.com",
    projectId: "buldr-bangladesh",
    storageBucket: "buldr-bangladesh.appspot.com",
    messagingSenderId: "85350545268",
    appId: "1:85350545268:web:8626baa76a116cdf8d1e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app