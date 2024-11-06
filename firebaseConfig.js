// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcEBuAyPK8jmiaR5hK2FeI23hJuxyw5Ic",
  authDomain: "materialdeapoio-f74de.firebaseapp.com",
  projectId: "materialdeapoio-f74de",
  storageBucket: "materialdeapoio-f74de.appspot.com",
  messagingSenderId: "162716861569",
  appId: "1:162716861569:web:11721851cd1f07e790b980",
  measurementId: "G-9QBX7ZP5DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export the initialized Firebase services
export { db, auth, storage };
