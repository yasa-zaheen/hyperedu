"use client";

import { useEffect, useState } from "react";

// Components
import Input from "@/app/components/Input";
import ServerMessage from "@/app/components/ServerMessage";
import Divider from "@/app/components/Divider";
import Button from "@/app/components/Button";
import Link from "next/link";

// Firebase
import { auth } from "@/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

// Next
import Image from "next/image";

function page() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState({
    message: "",
    type: "",
  });

  useEffect(() => {
    setLoading(false);
  }, [serverMessage]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result);
        setServerMessage({
          message: "Success",
          type: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        setServerMessage({
          message: error.code,
          type: "error",
        });
      });
  };

  return (
    <div className="h-screen w-full flex bg-white items-center justify-center relative">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/hyperedu-8b477.appspot.com/o/admin%2FFirefly%20Modern%20UI%20white%20background%20with%20faint%20color%20gradients%20blurred%20in%20the%20background%20in%20a%20frosted.jpg?alt=media&token=d453f997-4b0e-425d-af65-3fd869e64375"
        fill
        priority
        className="object-cover absolute"
      />
      <form
        onSubmit={handleFormSubmit}
        className="bg-transparent backdrop-blur-lg backdrop-brightness-110 p-8 rounded-lg flex flex-col items-center space-y-4 w-1/3 z-10"
      >
        {/* Message */}
        <div className="w-full text-center">
          <p className="title">Reset Password</p>
          <p>Enter email for link</p>
        </div>

        {/* Input */}
        <Input
          header={"Email Address"}
          placeholder={"hello@ptolemy.com"}
          value={email}
          setValue={setEmail}
        />

        {/* Server Message */}
        <ServerMessage serverMessage={serverMessage} />

        {/* Buttons */}
        <Button className={"btn-primary w-full"} submit loading={loading}>
          Request password reset
        </Button>

        {/* Divider */}
        <Divider text={"OR"} />

        {/* Ending message */}
        <div>
          <p>
            Don't have an account yet?{" "}
            <b className="link">
              <Link href={"signUp"}>Sign up</Link>
            </b>
          </p>
        </div>
      </form>
    </div>
  );
}

export default page;
