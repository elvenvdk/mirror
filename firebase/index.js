import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firebase-firestore";
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage(firebaseApp);
