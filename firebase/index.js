import firebase from "firebase";
import { firebaseConfig } from "./config";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
