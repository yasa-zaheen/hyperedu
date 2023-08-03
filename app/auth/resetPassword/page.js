"use client";

import { useEffect, useState } from "react";

// Components
import Input from "@/app/components/Input";
import ServerMessage from "@/app/components/ServerMessage";
import Button from "@/app/components/Button";

// Functions
import resetPassword from "../functions/resetPassword";

function page({ searchParams }) {
  const [password, setPassword] = useState("");
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
    resetPassword(searchParams.oobCode, password, setServerMessage);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white ring-1 ring-gray-300 p-8 rounded-lg flex flex-col items-center space-y-4 w-1/3"
      >
        {/* Message */}
        <div className="w-full text-center">
          <p className="title">Password Change</p>
          <p>Enter new password</p>
        </div>

        {/* Input */}
        <Input
          header={"New Password"}
          placeholder={"Enter new password here..."}
          value={password}
          setValue={setPassword}
          type={"password"}
        />

        {/* Server Message */}
        <ServerMessage serverMessage={serverMessage} />

        {/* Buttons */}
        <Button className={"btn-primary w-full"} submit loading={loading}>
          Confirm password change
        </Button>
      </form>
    </div>
  );
}

export default page;
