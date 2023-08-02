import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function signInWithGoogle(setServerMessage) {
  const provider = new GoogleAuthProvider();
  auth.useDeviceLanguage();

  signInWithPopup(auth, provider)
    .then(() => {
      setServerMessage({ message: "Sign in successful!", type: "success" });
    })
    .catch((error) => {
      setServerMessage({
        message: error.code,
        type: "error",
      });
    });
}

export default signInWithGoogle;
