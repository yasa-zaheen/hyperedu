function Divider({ text }) {
  return (
    <div className="w-full flex items-center justify-center text-xs">
      <hr className="flex-1 border-gray-300" />
      {text !== "" ? <p className="mx-2 text-gray-300">{text}</p> : null}
      <hr className="flex-1 border-gray-300" />
    </div>
  );
}

export default Divider;
