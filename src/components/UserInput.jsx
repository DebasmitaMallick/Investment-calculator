import React from "react";
import { InputField } from "./InputField";

export const UserInput = (
    { 
        initialInvestment, setInitialInvestment, 
        annualInvestment, setAnnualInvestment, 
        expectedReturn, setExpectedReturn,
        duration, setDuration
    }) => {

  return (
    <div id="user-input">
      <div className="input-group" style={{marginBottom: "1.5rem"}}>
        <InputField name="initialInvestment" label="Initial Investment" value={initialInvestment} setter={setInitialInvestment} />
        <InputField name="annualInvestment" label="Annual Investment" value={annualInvestment} setter={setAnnualInvestment} />
      </div>

      <div className="input-group">
        <InputField name="return" label="Expected Return" value={expectedReturn} setter={setExpectedReturn} />
        <InputField name="duration" label="Duration" value={duration} setter={setDuration} />
      </div>
    </div>
  );
};
