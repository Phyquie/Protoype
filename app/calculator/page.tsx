import React from "react";
import EmiCalculator from "@/components/emiCalculator";

export default function CalculatorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {/* EMI Calculator Component */}
      <EmiCalculator
        defaultCarPrice={720000}
        defaultDownPayment={320000}
        defaultYears={21}
        defaultInterestRate={13}
        defaultHeading="Home Loan Calculator"
      />

      {/* Content Section */}
      <div className="max-w-full bg-white  rounded-lg p-6 mt-10 text-gray-800 leading-relaxed space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-black">
          🏠 Home Loan EMI Calculator – Calculate Housing Loan EMI Online Instantly
        </h1>

        <p>
          Buying a home in India is a dream for many, but with rising real estate
          prices, it often becomes difficult to purchase property without financial
          assistance. This is where home loans come in. Today, thousands of home
          buyers are opting for housing finance, which is why housing credit in
          India has been growing steadily (over 16% in FY18).
        </p>

        <p>
          Before applying, every borrower must know their EMI (Equated Monthly
          Instalment) in advance to plan finances smartly. The easiest way to do
          this is by using a Home Loan EMI Calculator Online.
        </p>

        {/* Section: What is EMI */}
        <h2 className="text-xl font-semibold text-black">🔍 What is a Home Loan EMI?</h2>
        <p>
          A Home Loan EMI is the fixed monthly amount that you, as a borrower,
          need to pay to the lender. It includes both:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Principal repayment (the loan amount)</li>
          <li>Interest payment (charged by the bank/NBFC)</li>
        </ul>

        <p>
          At the beginning of the loan tenure, the interest component is higher,
          while the principal component is lower. With every EMI you pay, the
          interest portion reduces, and the principal portion increases.
        </p>

        {/* Section: Why use calculator */}
        <h2 className="text-xl font-semibold text-black">📊 Why Use a Home Loan EMI Calculator in India?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>✅ Accurate results instantly – no chance of errors</li>
          <li>✅ Time-saving – just enter loan amount, tenure & interest rate</li>
          <li>✅ Unlimited free usage – check EMIs for different loan amounts</li>
          <li>✅ Better financial planning – compare loan options</li>
          <li>✅ Loan-specific results – tailored formulas for home loans</li>
        </ul>

        {/* Section: Formula */}
        <h2 className="text-xl font-semibold text-black">📐 Formula Used by Home Loan EMI Calculator</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          E = [P × R × (1+R)^N] ÷ [(1+R)^N – 1]
        </pre>
        <p>
          Where:
          <br /> E = EMI amount
          <br /> P = Principal loan amount
          <br /> R = Rate of interest (monthly)
          <br /> N = Loan tenure (in months)
        </p>

        <p>
          <strong>Example:</strong> Suppose you take a ₹1 Crore home loan for 15
          years at 12% interest. Using the formula, your EMI will be{" "}
          <strong>₹1,10,108</strong> per month.
        </p>

        {/* Section: How to use */}
        <h2 className="text-xl font-semibold text-black">🖥 How to Use SIX Home Loan EMI Calculator Online?</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Enter your loan amount (₹).</li>
          <li>Add the interest rate (%) offered by your bank/NBFC.</li>
          <li>Select the loan tenure (years).</li>
        </ol>
        <p>👉 The calculator will display your exact EMI within seconds.</p>

        {/* Section: Advantages */}
        <h2 className="text-xl font-semibold text-black">⭐ Advantages of Using SIX Home Loan EMI Calculator</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Quick & Easy – Instant results</li>
          <li>Free to Use – No login/registration required</li>
          <li>Unlimited Checks – Compare multiple plans</li>
          <li>Accurate Planning – Helps you select the right loan</li>
        </ul>

        {/* Section: FAQs */}
        <h2 className="text-xl font-semibold text-black">❓ FAQs – Home Loan EMI Calculator</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Q1. What is EMI in a home loan?</p>
            <p>👉 EMI is the fixed monthly repayment including principal & interest.</p>
          </div>
          <div>
            <p className="font-semibold">Q2. How is home loan EMI calculated?</p>
            <p>👉 Using the standard EMI formula or a free online calculator.</p>
          </div>
          <div>
            <p className="font-semibold">Q3. Why should I use an EMI calculator?</p>
            <p>👉 It saves time, avoids errors, and helps with financial planning.</p>
          </div>
          <div>
            <p className="font-semibold">Q4. How many times can I use the EMI calculator?</p>
            <p>👉 Unlimited times!</p>
          </div>
          <div>
            <p className="font-semibold">Q5. Is the EMI fixed throughout the tenure?</p>
            <p>
              👉 Yes, for fixed-rate loans. For floating-rate, EMI may vary with
              interest changes.
            </p>
          </div>
        </div>

        {/* Final Word */}
        <h2 className="text-xl font-semibold text-black">📌 Final Word</h2>
        <p>
          A Home Loan EMI Calculator is the smartest tool for anyone planning to
          buy a house with financing. It helps you calculate EMIs in seconds,
          plan your budget, and choose the right loan without errors.
        </p>
      </div>
    </div>
  );
}
