import React from 'react';
import EmiCalculator from '@/components/emiCalculator';

export default function CalculatorPage() {
  return (
    <div>
      <EmiCalculator 
        defaultCarPrice={720000}
        defaultDownPayment={320000}
        defaultYears={21}
        defaultInterestRate={13}
        defaultHeading="Used Bike Loan Calculator"
      />
    </div>
    
  );
}