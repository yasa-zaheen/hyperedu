"use client";

import { useEffect, useState } from "react";

// Assets
import GoogleLogo from "@/public/google.svg";
import AppleLogo from "@/public/apple.svg";

// Components
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import AuthProviderButton from "@/app/components/AuthProviderButton";
import ServerMessage from "@/app/components/ServerMessage";
import Divider from "@/app/components/Divider";

// Next
import Link from "next/link";

// Functions
import signInWithGoogle from "../functions/signInWithGoogle";
import signUpWithEmailPassword from "../functions/signUpWithEmailPassword";

function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState({ message: "", type: "" });

  useEffect(() => {
    setLoading(false);
  }, [serverMessage]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signUpWithEmailPassword(email, password, setServerMessage);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full p-8 flex flex-col items-center space-y-4"
    >
      {/* Welcome Text */}
      <div className="w-full flex-col justify-center items-center text-center">
        <p className="title">Welcome to Ptolemy</p>
        <p>Let's make education inspiring.</p>
      </div>

      {/* Auth Providers */}
      <div className="flex space-x-4">
        <AuthProviderButton
          Icon={GoogleLogo}
          onClick={() => {
            signInWithGoogle(setServerMessage);
          }}
        />
        <AuthProviderButton Icon={AppleLogo} />
      </div>

      {/* Divider */}
      <Divider text={"OR"} />

      {/* Input Area */}
      <div className="w-full flex flex-col space-y-4">
        <Input
          type="Email"
          placeholder="Enter your email..."
          header="Email Address"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="Password"
          placeholder="Enter your password..."
          header="Password"
          value={password}
          setValue={setPassword}
        />
      </div>

      {/* Server Message */}
      <ServerMessage serverMessage={serverMessage} />

      {/* Sign in Button */}
      <Button className="w-full btn-primary" submit loading={loading}>
        Sign Up
      </Button>

      {/* End Message */}
      <p className="text-sm">
        Already have an account?{" "}
        <b className="link">
          <Link href={"signIn"}>Sign In</Link>
        </b>
      </p>
    </form>
  );
}

export default SignUpComponent;
