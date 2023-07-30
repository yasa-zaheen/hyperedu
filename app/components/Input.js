"use client";

function Input({ type, placeholder, header, value, setValue }) {
  return (
    <div className="w-full">
      {header != "" ? <p className="font-semibold text-sm">{header}</p> : null}
      <input
        className="outline outline-1 outline-gray-300 p-2 rounded-lg text-sm w-full font-normal"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
