import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function signInWithEmailPassword(email, password, setMessage, setMessageType) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      setMessage("Sign in successful!");
      setMessageType("success");
    })
    .catch((error) => {
      console.log(error.code);

      if (error.code === "auth/too-many-requests") {
        setMessage("Too many requests. Please try again after a while.");
      }

      if (error.code === "auth/wrong-password") {
        setMessage("Password Incorrect. Please try again.");
      }

      if (error.code === "auth/user-not-found") {
        setMessage("There is no account under this email. Please sign up.");
      }

      setMessageType("error");
    });
}
export default signInWithEmailPassword;
