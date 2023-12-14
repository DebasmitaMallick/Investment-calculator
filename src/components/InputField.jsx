import React from "react";

export const InputField = ({ name, label, value, setter }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type="number" value={value} onChange={(e) => setter(e.target.value)} />
    </div>
  );
};
