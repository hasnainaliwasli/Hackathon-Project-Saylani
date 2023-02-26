import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyC8dhnXla7gv_svAiUpwRHor93KmLkcwX8",
  authDomain: "hackathon-project-f8b27.firebaseapp.com",
  projectId: "hackathon-project-f8b27",
  storageBucket: "hackathon-project-f8b27.appspot.com",
  messagingSenderId: "201043430158",
  appId: "1:201043430158:web:cb5bcd62594968eeee655f",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
let auth = getAuth(app);

const db = getFirestore(app);
export { app, db, auth };

export const firebaseApp = initializeApp(firebaseConfig);
