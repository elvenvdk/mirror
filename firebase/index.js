import firebase from "firebase";
import { firebaseConfig } from "./config";
import { connectEmulator } from "./emulator";

import "firebase/firestore";
import "firebase/auth";

// if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

connectEmulator(db);
