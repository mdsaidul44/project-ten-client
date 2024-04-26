// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS5cSHQjWZ10JD25x5geoeJO5FwaozYPk",
  authDomain: "art-and-craft-2ea64.firebaseapp.com",
  projectId: "art-and-craft-2ea64",
  storageBucket: "art-and-craft-2ea64.appspot.com",
  messagingSenderId: "885720827971",
  appId: "1:885720827971:web:c3bbe43dc84b43efe3acf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth