import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcEBuAyPK8jmiaR5hK2FeI23hJuxyw5Ic",
    authDomain: "materialdeapoio-f74de.firebaseapp.com",
    projectId: "materialdeapoio-f74de",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };