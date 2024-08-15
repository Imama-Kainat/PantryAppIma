// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/firestore'
import 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLx50rpt95nsMHsGWox2hSrENjIu23gbc",
  authDomain: "inventory-management-477f0.firebaseapp.com",
  projectId: "inventory-management-477f0",
  storageBucket: "inventory-management-477f0.appspot.com",
  messagingSenderId: "1069941255984",
  appId: "1:1069941255984:web:6298694b834a7cc291e2f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore =getFirestore(app)

export {firestore}