import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
import { firebaseConfig  } from "./firebaseConfig";
import { getDatabase } from "firebase/database";

initializeApp(firebaseConfig);

//export const db = getFirestore();
export const db = getDatabase();