import React from "react";

const InputComponent = ({ value, onChange }: InputComponentProps) => {
  return (
    <input
      className="input-component"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};

export default InputComponent;
