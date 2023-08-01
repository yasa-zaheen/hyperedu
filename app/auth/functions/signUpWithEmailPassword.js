import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function signUpWithEmailPassword(email, password, setServerMessage) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      setServerMessage({ message: "Sign up successful!", type: "success" });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        setServerMessage({
          message:
            "An account already exists under this email. Please sign in.",
          type: "error",
        });
      }

      if (error.code === "auth/invalid-email") {
        setServerMessage({
          message: "Please enter a valid email.",
          type: "error",
        });
      }

      if (error.code === "auth/weak-password") {
        setServerMessage({
          message:
            "Invalid password. Password must contain atleast 6 characters.",
          type: "error",
        });
      }
    });
}
export default signUpWithEmailPassword;
