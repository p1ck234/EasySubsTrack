// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWUp-RDctKFZIpHVf6gcnDVcblWSDEZIc",
  authDomain: "easysubstrack.firebaseapp.com",
  projectId: "easysubstrack",
  storageBucket: "easysubstrack.appspot.com",
  messagingSenderId: "1002611626482",
  appId: "1:1002611626482:web:20984fc78c2319ca6ddb6b",
  measurementId: "G-HXYF6FF639",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
