"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import Loader from "@/public/loader.svg";

function Button({ className, submit, loading, children }) {
  const reference = useRef();

  useEffect(() => {
    const btn = reference.current;
    const text = btn.childNodes[1];
    const img = btn.childNodes[0];

    if (loading) {
      // Handling text
      text.classList.add("opacity-0");
      text.classList.remove("opacity-1");

      // Handling loader
      img.classList.add("opacity-1");
      img.classList.remove("opacity-0");

      // Handling button
      reference.current.classList.add("btn-disabled");
    } else {
      // Handling text
      text.classList.add("opacity-1");
      text.classList.remove("opacity-0");

      // Handling loader
      img.classList.add("opacity-0");
      img.classList.remove("opacity-1");

      // Handling button
      reference.current.classList.remove("btn-disabled");
    }
  }, [loading]);

  return (
    <button
      ref={reference}
      className={`btn ${className}`}
      type={submit ? "submit" : "button"}
    >
      <Image
        className="opacity-0 duration-300 ease-in-out animate-spin absolute"
        src={Loader}
        height={20}
        width={20}
      />
      <p className="opacity-1 duration-300 ease-in-out">{children}</p>
    </button>
  );
}

export default Button;
