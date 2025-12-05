// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD9V3etpi09P-55jkq79wVDQwbILGgr7Ck",
  authDomain: "netflix-clone-add9e.firebaseapp.com",
  projectId: "netflix-clone-add9e",
  storageBucket: "netflix-clone-add9e.firebasestorage.app",
  messagingSenderId: "999354426024",
  appId: "1:999354426024:web:b9c0fc82b994337fd7589d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authprovider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join("  "));
  }
};
const signin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join("  "));
  }
};

const logout = () => {
  signOut(auth);
};
export { auth, db, logout, signin, signup };
