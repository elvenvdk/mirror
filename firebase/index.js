import { initializeApp } from "firebase/app";
import firebase from "firebase";
import { firebaseConfig } from "./config";

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
