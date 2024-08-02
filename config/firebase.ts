// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQipVplmv1DNhSsxGyQG7NaGfFQl3ZmH4",
  authDomain: "hr-business-3ef42.firebaseapp.com",
  projectId: "hr-business-3ef42",
  storageBucket: "hr-business-3ef42.appspot.com",
  messagingSenderId: "162754085810",
  appId: "1:162754085810:web:7437f8262ed5ca8c8d9aab",
  measurementId: "G-Y5RQGKPC4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth= getAuth(app)
const db= getFirestore(app)
export{db,auth}