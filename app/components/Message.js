function Message({ className, message, messageType }) {
  return (
    <div
      className={`${
        messageType === "error"
          ? "bg-red-100 text-red-500 p-2"
          : messageType === "success"
          ? "bg-green-100 text-green-500 p-2"
          : ""
      } w-full rounded-lg flex items-center justify-center text-sm text-center ${className}`}
    >
      {message}
    </div>
  );
}

export default Message;
