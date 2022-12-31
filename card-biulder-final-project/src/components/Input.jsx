import React from "react";

const Input = ({
  label,
  type,
  onChange,
  id,
  error,
  spanClass,
  inputClass,
  ...rest
}) => {
  return (
    <>
      <div className="input-group mb-3">
        <span
          style={{ width: "150px" }}
          className={spanClass}
          id="inputGroup-sizing-default"
        >
          {label}
        </span>
        <input
          {...rest}
          onChange={onChange}
          type={type}
          className={inputClass}
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          id={id}
        />
      </div>
      <p>{error}</p>
    </>
  );
};

export default Input;
