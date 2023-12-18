import React from "react";

export const InputField = ({ name, label, value, setter }) => {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type="number" value={value} onChange={(e) => setter(name, e.target.value)} required />
    </p>
  );
};
