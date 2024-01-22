// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';

import 'firebase/compat/analytics';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC0wmZ2zUdYbVZgyACTWBBGZCKR2-O5QdE',
  authDomain: 'danloctravel-8dc01.firebaseapp.com',
  projectId: 'danloctravel-8dc01',
  storageBucket: 'danloctravel-8dc01.appspot.com',
  messagingSenderId: '929490657503',
  appId: '1:929490657503:web:763d5d300c7d9636e7896a',
  measurementId: 'G-FRPYQQ53HR',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const storage = getStorage(app);
export { db, storage };
export default firebase;
