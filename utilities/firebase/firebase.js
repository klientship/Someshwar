import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOvUepwDy29V6o4y6J1asn7aX_LEaeAvo",
  authDomain: "yamuna-website.firebaseapp.com",
  projectId: "yamuna-website",
  storageBucket: "yamuna-website.appspot.com",
  messagingSenderId: "380517357905",
  appId: "1:380517357905:web:7eb529c349d3184603db70"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage();
