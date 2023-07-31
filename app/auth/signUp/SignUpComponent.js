"use client";

import { useState } from "react";

// Assets
import GoogleLogo from "@/public/google.svg";
import AppleLogo from "@/public/apple.svg";

// Components
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import AuthProviderButton from "@/app/components/AuthProviderButton";
import Message from "@/app/components/Message";

// Next
import Link from "next/link";

// Functions
import signInWithGoogle from "../functions/signInWithGoogle";
import signUpWithEmailPassword from "../functions/signUpWithEmailPassword";

function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        signUpWithEmailPassword(
          email,
          password,
          setMessage,
          setMessageType,
          setLoading
        );
      }}
      className="w-full p-8 flex flex-col items-center space-y-4"
    >
      {/* Welcome Text */}
      <div className="w-full flex-col justify-center items-center text-center">
        <p className="text-2xl font-semibold">Welcome to Ptolemy</p>
        <p className="text-md">Let's make education inspiring.</p>
      </div>

      {/* Auth Providers */}
      <div className="flex space-x-4">
        <AuthProviderButton Icon={GoogleLogo} onClick={signInWithGoogle} />
        <AuthProviderButton Icon={AppleLogo} />
      </div>

      {/* Divider */}
      <div className="w-full flex items-center justify-center text-xs">
        <hr className="flex-1 border-gray-300" />
        <p className="mx-2 text-gray-300">OR</p>
        <hr className="flex-1 border-gray-300" />
      </div>

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
      <Message message={message} messageType={messageType} />

      {/* Sign in Button */}
      <Button className="w-full btn-primary" submit loading={loading}>
        Sign Up
      </Button>

      {/* End Message */}
      <p className="text-sm">
        Already have an account?{" "}
        <b>
          <Link href={"signIn"}>Sign In</Link>
        </b>
      </p>
    </form>
  );
}

export default SignUpComponent;
