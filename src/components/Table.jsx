import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export const Table = ({ userInput }) => {
  const data =
    userInput.initialInvestment &&
    userInput.annualInvestment &&
    userInput.expectedReturn &&
    userInput.duration
      ? calculateInvestmentResults(userInput)
      : [];

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td>{item.year}</td>
            <td>{formatter.format(item.annualInvestment)}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
