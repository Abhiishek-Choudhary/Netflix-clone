import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCcHL6IXcG3tTLZs-bBvtlxqRdqkbSSJIA",
  authDomain: "netflix-a1.firebaseapp.com",
  projectId: "netflix-a1",
  storageBucket: "netflix-a1.appspot.com",
  messagingSenderId: "369868183571",
  appId: "1:369868183571:web:06aed5d8508ce3216fc7e6",
  measurementId: "G-Y8QQ4LRYGQ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)