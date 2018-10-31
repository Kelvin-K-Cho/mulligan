import firebaseConfig from "./keys.js";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

firebase.initializeApp(firebaseConfig);

export default firebase;
