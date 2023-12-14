import React from 'react';
import { calculateInvestmentResults } from '../util/investment';

export const Table = ({ initialInvestment, annualInvestment, expectedReturn, duration }) => {
    const data = calculateInvestmentResults( {
        initialInvestment, annualInvestment, expectedReturn, duration
    } );
  return (
    <div>Table</div>
  )
}
