import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function signInWithEmailPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error);
    });
}
export default signInWithEmailPassword;
