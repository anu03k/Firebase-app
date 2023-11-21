// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfX2lx_-b3cVTPQrDCKuX_nqJtVdPc5WU",
    authDomain: "vite-contact-676a2.firebaseapp.com",
    projectId: "vite-contact-676a2",
    storageBucket: "vite-contact-676a2.appspot.com",
    messagingSenderId: "401974556033",
    appId: "1:401974556033:web:64ae8f1ac490ace7846480",
    measurementId: "G-ZEVJ31GSGK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);