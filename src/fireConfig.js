import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgh2ktMYDasT2kJoxAIui74611KsnvWH4",
  authDomain: "ecommerce-firebase-f135a.firebaseapp.com",
  projectId: "ecommerce-firebase-f135a",
  storageBucket: "ecommerce-firebase-f135a.appspot.com",
  messagingSenderId: "127679260068",
  appId: "1:127679260068:web:3f109469ece2b060db8d31",
  measurementId: "G-CHY336BC7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const fireDB = getFirestore(app)

export default fireDB;