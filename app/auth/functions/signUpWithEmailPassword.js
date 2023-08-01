import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function signUpWithEmailPassword(email, password, setServerMessage) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      setServerMessage({ message: "Sign up successful!", type: "success" });
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          setServerMessage({
            message:
              "An account already exists under this email. Please sign in.",
            type: "error",
          });
          break;
        case "auth/invalid-email":
          setServerMessage({
            message: "Please enter a valid email.",
            type: "error",
          });
          break;
        case "auth/weak-password":
          setServerMessage({
            message:
              "Invalid password. Password must contain atleast 6 characters.",
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
export default signUpWithEmailPassword;
