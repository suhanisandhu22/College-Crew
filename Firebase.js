import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBliKBzqOY_c3j-0Ue_d1tmHkMHIlK71yU",
  authDomain: "uemhackathon.firebaseapp.com",
  databaseURL: "https://uemhackathon-default-rtdb.firebaseio.com",
  projectId: "uemhackathon",
  storageBucket: "uemhackathon.appspot.com",
  messagingSenderId: "650691025025",
  appId: "1:650691025025:web:4a2db26019ecac36951580",
  measurementId: "G-XDMFW5C4K6"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDbEQfXrl1rb5ajP3jFWLxmGG71FR7-BF0",
//   authDomain: "brain-boostai.firebaseapp.com",
//   projectId: "brain-boostai",
//   storageBucket: "brain-boostai.firebasestorage.app",
//   messagingSenderId: "865857118307",
//   appId: "1:865857118307:web:3ee113318a168952345856",
//   measurementId: "G-CX2RCP33DQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
