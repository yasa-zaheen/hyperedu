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

// Next
import Link from "next/link";

// Functions
import signInWithGoogle from "../functions/signInWithGoogle";
import signInWithEmailPassword from "../functions/signInWithEmailPassword";

function SignInComponent() {
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
    signInWithEmailPassword(email, password, setServerMessage);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full p-8 flex flex-col items-center space-y-4"
    >
      {/* Welcome Text */}
      <div className="w-full flex-col justify-center items-center text-center">
        <p className="text-2xl font-semibold">Welcome back</p>
        <p className="text-md">Please enter your details to sign in.</p>
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
        <div className="flex items-center justify-between w-full font-semibold text-sm">
          <div className="flex items-center justify-center space-x-2">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <p className="link">Forgot Password?</p>
        </div>
      </div>

      {/* Server Message */}
      <ServerMessage serverMessage={serverMessage} />

      {/* Sign in Button */}
      <Button className="w-full btn-primary" submit loading={loading}>
        Sign In
      </Button>

      {/* End Message */}
      <p className="text-sm">
        Don't have an account yet?{" "}
        <b className="link">
          <Link href={"signUp"}>Sign Up</Link>
        </b>
      </p>
    </form>
  );
}

export default SignInComponent;
