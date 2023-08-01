import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function signInWithEmailPassword(email, password, setServerMessage) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      setServerMessage({ message: "Sign in successful", type: "success" });
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/too-many-requests":
          setServerMessage({
            message: "Too many requests. Please try again after a while.",
            type: "error",
          });
          break;
        case "auth/wrong-password":
          setServerMessage({
            message: "Password Incorrect. Please try again.",
            type: "error",
          });
          break;
        case "auth/user-not-found":
          setServerMessage({
            message: "There is no account under this email. Please sign up.",
            type: "error",
          });
          break;
        default:
          setServerMessage({
            message: error.code,
            type: "error",
          });
          break;
      }
    });
}
export default signInWithEmailPassword;
