import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
import {getStorage}  from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUBprT8uyrpPWvheRZv-1LGc-s2NEjBEM",
    authDomain: "olxdemo-b8a41.firebaseapp.com",
    projectId: "olxdemo-b8a41",
    storageBucket: "olxdemo-b8a41.appspot.com",
    messagingSenderId: "867448882377",
    appId: "1:867448882377:web:b1c3de317643e7b7857918",
    measurementId: "G-GLTTQHT8W4"
  };

  const Firebase = initializeApp(firebaseConfig)

 export const db = getFirestore(Firebase)
export const storage = getStorage(Firebase)