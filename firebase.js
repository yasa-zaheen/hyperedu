import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlFNKfgIgLWoDTH7ORMsqEO7oYgeRiMs4",
  authDomain: "hyperedu-8b477.firebaseapp.com",
  projectId: "hyperedu-8b477",
  storageBucket: "hyperedu-8b477.appspot.com",
  messagingSenderId: "201362258972",
  appId: "1:201362258972:web:3b74e9af8cd550de4ff3d9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
