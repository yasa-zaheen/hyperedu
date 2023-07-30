"use client";

import { useState } from "react";

// Assets
import GoogleLogo from "@/public/google.svg";
import AppleLogo from "@/public/apple.svg";

// Components
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import AuthProviderButton from "@/app/components/AuthProviderButton";

// Next
import Link from "next/link";

// Functions
import signInWithGoogle from "../functions/signInWithGoogle";
import signInWithEmailPassword from "../functions/signInWithEmailPassword";

function SignInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signInWithEmailPassword(email, password);
      }}
      className="w-full p-8 flex flex-col items-center"
    >
      <p className="text-2xl font-semibold">Welcome back</p>
      <p className="text-md">Please enter your details to sign in.</p>

      {/* Auth Providers */}
      <div className="flex my-4 space-x-4">
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
      <div className="w-full my-4 flex flex-col space-y-4">
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
            <input type="checkbox" name="" id="" />
            <p>Remember Me</p>
          </div>
          <p>Forgot Password?</p>
        </div>
      </div>

      <Button type="primary" className="w-full" submit>
        Sign In
      </Button>

      <p className="mt-4 text-sm">
        Don't have an account yet?{" "}
        <b>
          <Link href={"signUp"}>Sign Up</Link>
        </b>
      </p>
    </form>
  );
}

export default SignInComponent;
