import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  auth.useDeviceLanguage();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("User signed in");
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default signInWithGoogle;
