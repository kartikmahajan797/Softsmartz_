// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsC_K31hCCCz_5QGDpkwci9Emiod1O7iY",
  authDomain: "softsmartz-88685.firebaseapp.com",
  projectId: "softsmartz-88685",
  storageBucket: "softsmartz-88685.appspot.com",
  messagingSenderId: "632333337618",
  appId: "1:632333337618:web:719ae37e0c644018de84cb",
  measurementId: "G-T894FYPQTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize analytics in the browser and guard errors

export const db = getFirestore(app);
export default app;