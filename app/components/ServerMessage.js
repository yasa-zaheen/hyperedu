import { useRef, useEffect } from "react";

function ServerMessage({ className, serverMessage }) {
  const reference = useRef();

  let message = serverMessage.message;
  let messageType = serverMessage.type;

  useEffect(() => {
    const messageElement = reference.current;

    if (messageType === "error") {
      messageElement.classList.remove("bg-green-100", "text-green-500");
      messageElement.classList.add("bg-red-100", "text-red-500");
    }
    if (messageType === "success") {
      messageElement.classList.remove("bg-red-100", "text-red-500");
      messageElement.classList.add("bg-green-100", "text-green-500");
    }

    if (message !== "") {
      messageElement.classList.add("p-2", "h-fit", "text-md");
      messageElement.classList.remove("p-0", "h-0", "text-[0px]");
    } else {
      messageElement.classList.remove("p-2", "h-fit", "text-md");
      messageElement.classList.add("p-0", "h-0", "text-[0px]");
    }
  }, [serverMessage]);

  return (
    <div
      ref={reference}
      className={`p-0 h-0 text-[0px] ease-in-out w-full rounded-lg flex items-center justify-center text-sm text-center duration-300 ${className}`}
    >
      {message}
    </div>
  );
}

export default ServerMessage;
