"use client";

function Input({ type, placeholder, header, value, setValue }) {
  return (
    <div className="group w-full flex flex-col-reverse">
      <input
        className="outline outline-1 outline-gray-300 p-2 rounded-lg text-sm w-full font-normal focus:outline-blue-500 focus:outline-2 peer duration-100 ease-in-out"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {header != "" ? (
        <p className="font-semibold text-sm text-black peer-focus:text-blue-500">
          {header}
        </p>
      ) : null}
    </div>
  );
}

export default Input;
