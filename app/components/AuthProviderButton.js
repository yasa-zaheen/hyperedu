"use client";

import Image from "next/image";

function AuthProviderButton({ Icon, onClick }) {
  return (
    <button
      className="btn px-8 py-2 outline outline-1 outline-gray-300 hover:outline-blue-600"
      onClick={onClick}
      type="button"
    >
      <Image className="h-6 w-6" src={Icon} />
    </button>
  );
}

export default AuthProviderButton;
