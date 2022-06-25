import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEus4kGFAq-I9aPrNaA3SwfzDMR1PRV8Q",
  authDomain: "nk-foods-restaurant.firebaseapp.com",
  databaseURL: "https://nk-foods-restaurant-default-rtdb.firebaseio.com",
  projectId: "nk-foods-restaurant",
  storageBucket: "nk-foods-restaurant.appspot.com",
  messagingSenderId: "447288951365",
  appId: "1:447288951365:web:45d69a41b56b11dba3d92c",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
