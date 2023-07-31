import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function signUpWithEmailPassword(
  email,
  password,
  setMessage,
  setMessageType,
  setLoading
) {
  setLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      setMessage("Sign up successful!");
      setMessageType("success");
      setLoading(false);
    })
    .catch((error) => {
      console.log(error.code);
      setLoading(false);

      if (error.code === "auth/email-already-in-use") {
        setMessage(
          "An account already exists under this email. Please sign in."
        );
      }

      if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email.");
      }

      if (error.code === "auth/weak-password") {
        setMessage(
          "Invalid password. Password must contain atleast 6 characters."
        );
      }

      setMessageType("error");
    });
}
export default signUpWithEmailPassword;
