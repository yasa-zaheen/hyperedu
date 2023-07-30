"use client";

function Button({ children, type, className, submit }) {
  return (
    <button
      className={`btn ${type == "primary" ? "btn-primary" : ""} ${className}`}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

export default Button;
