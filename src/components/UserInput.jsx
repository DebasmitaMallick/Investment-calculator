import React from "react";
import { InputField } from "./InputField";

export const UserInput = ({ userInput, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          name="initialInvestment"
          label="Initial Investment"
          value={userInput.initialInvestment}
          setter={onChange}
        />
        <InputField
          name="annualInvestment"
          label="Annual Investment"
          value={userInput.annualInvestment}
          setter={onChange}
        />
      </div>

      <div className="input-group">
        <InputField
          name="expectedReturn"
          label="Expected Return"
          value={userInput.expectedReturn}
          setter={onChange}
        />
        <InputField
          name="duration"
          label="Duration"
          value={userInput.duration}
          setter={onChange}
        />
      </div>
    </section>
  );
};
