import React from "react";

const Name = ({ placeholder, changeFunc, required }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={changeFunc}
      required={required}
    ></input>
  );
};

export default Name;
