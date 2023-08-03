// Firebase
import { auth } from "@/firebase";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";

function resetPassword(actionCode, password, setServerMessage) {
  verifyPasswordResetCode(auth, actionCode)
    .then(() => {
      confirmPasswordReset(auth, actionCode, password)
        .then(() => {
          setServerMessage({
            message: "Password has been changed successfull.",
            type: "success",
          });
        })
        .catch((error) => {
          console.log(error);
          setServerMessage({ message: error.code, type: "error" });
        });
    })
    .catch((error) => {
      console.log(error);
      setServerMessage({ message: error.code, type: "error" });
    });
}
export default resetPassword;
