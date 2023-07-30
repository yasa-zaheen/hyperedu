import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function signUpWithEmailPassword(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error);
    });
}
export default signUpWithEmailPassword;
