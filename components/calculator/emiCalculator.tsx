'use client';

import React, { useState, useEffect } from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';
import Link from 'next/link';

interface EmiCalculatorProps {
  defaultCarPrice?: number;
  defaultDownPayment?: number;
  defaultYears?: number;
  defaultInterestRate?: number;
  defaultHeading?: string;
}
const EmiCalculator: React.FC<EmiCalculatorProps> = ({
  defaultCarPrice = 720000,
  defaultDownPayment = 320000,
  defaultYears = 21,
  defaultInterestRate = 13,
  defaultHeading = "Used Bike Loan Calculator"
}) => {
  const [carPrice, setCarPrice] = useState<number>(defaultCarPrice);
  const [downPayment, setDownPayment] = useState<number>(defaultDownPayment);
  const [years, setYears] = useState<number>(defaultYears);
  const [interestRate, setInterestRate] = useState<number>(defaultInterestRate);
  const [heading, setHeading] = useState<string>(defaultHeading);

  // Calculated values
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [monthlyEmi, setMonthlyEmi] = useState<number>(0);

  // Advanced label rendering with connecting lines for all segments
  const renderCustomizedLabel = (props: any) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      value,
      name,
      fill
    } = props;

    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * (midAngle ?? 1));
    const cos = Math.cos(-RADIAN * (midAngle ?? 1));
    const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
    const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
    const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
    const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" strokeWidth={1} />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text 
          x={ex + (cos >= 0 ? 1 : -1) * 12} 
          y={ey} 
          textAnchor={textAnchor} 
          fill="#333" 
          fontSize="12" 
          fontWeight="bold"
        >
          {`${formatCurrencyShort(value)}`}
        </text>
        <text 
          x={ex + (cos >= 0 ? 1 : -1) * 12} 
          y={ey} 
          dy={18} 
          textAnchor={textAnchor} 
          fill="#999" 
          fontSize="10"
        >
          {`${name} (${((percent ?? 1) * 100).toFixed(1)}%)`}
        </text>
      </g>
    );
  };

  // Update state when props change
  useEffect(() => {
    setCarPrice(defaultCarPrice);
    setDownPayment(defaultDownPayment);
    setYears(defaultYears);
    setInterestRate(defaultInterestRate);
  }, [defaultCarPrice, defaultDownPayment, defaultYears, defaultInterestRate]);

  // Calculate EMI and other values
  useEffect(() => {
    const principal = carPrice - downPayment;
    const monthlyRate = interestRate / (12 * 100);
    const totalMonths = years * 12;

    let emi = 0;
    if (monthlyRate > 0) {
      emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
            (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else {
      emi = principal / totalMonths;
    }

    const totalAmountPayable = emi * totalMonths;
    const totalInterestPayable = totalAmountPayable - principal;

    setLoanAmount(principal);
    setMonthlyEmi(emi);
    setTotalInterest(totalInterestPayable);
    setTotalAmount(totalAmountPayable);
  }, [carPrice, downPayment, years, interestRate]);

  // Prepare data for the pie chart
  const chartData = [
    {
      name: 'Down Payment',
      value: downPayment,
      color: '#FF6B47'
    },
    {
      name: 'Total EMI',
      value: totalAmount,
      color: '#333333'
    }
  ];

  const formatCurrencyShort = (amount: number): string => {
    return `₹ ${Math.floor(amount).toLocaleString("en-IN")}`;
  };

  return (
    <div className="bg-white min-h-screen  font-sans">
      {/* Header */}
      <div className="text-center py-6 bg-white">
        <h1 className="text-3xl font-bold text-black">
            {heading}
        </h1>
      </div>

      {/* Main Calculator Container */}
      <div className="mx-auto px-4">
        
        {/* Mobile Layout: Results Table First */}
        <div className="lg:hidden mb-6">
          <div className="bg-gray-50 border-2 border-blue-400 rounded-2xl p-4 mx-4">
            <div className="bg-white p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="text-gray-600 text-sm">Principal Loan</span>
                <span className="font-bold text-gray-900 text-sm">
                  {formatCurrencyShort(loanAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="text-gray-600 text-sm">Total Interest</span>
                <span className="font-bold text-gray-900 text-sm">
                  {formatCurrencyShort(totalInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 bg-blue-100 px-4 -mx-4 rounded-lg">
                <span className="text-gray-600 text-sm font-medium">Total Amount Payable</span>
                <span className="font-bold text-blue-700 text-sm">
                  {formatCurrencyShort(totalAmount)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Chart Second */}
        <div className="md:hidden  flex justify-center">
          <div className="relative w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  innerRadius={40}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
         <div className="lg:hidden md:block hidden mb-6  justify-center">
          <div className="relative w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          
          {/* Left Side - Input Controls */}
          <div className="bg-gray-50 rounded-2xl p-6 col-span-1  space-y-6 max-w-lg">
            
            {/* Car Price Input */}
            <div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-3">
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-3">₹</span>
                  <input
                    type="text"
                    value={carPrice.toLocaleString('en-IN')}
                    onChange={(e) => {
                      const value = parseInt(e.target.value.replace(/,/g, ''));
                      if (!isNaN(value)) setCarPrice(value);
                    }}
                    className="text-2xl font-bold bg-transparent border-0 w-full focus:outline-none text-black"
                  />
                </div>
              </div>
              <p className="text-black text-lg font-medium">
                Entered Car Price : <span className="text-orange-500"> {formatCurrencyShort(carPrice)}</span>
              </p>
            </div>

            {/* Down Payment Section */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-black font-semibold text-lg">Down Payment :</span>
                <span className="text-orange-500 font-semibold text-lg">
                   {formatCurrencyShort(downPayment)}
                </span>
              </div>
              
              <div className="relative mb-4">
                <input
                  type="range"
                  min="100000"
                  max="1000000"
                  step="10000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none slider cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #FF6B47 0%, #FF6B47 ${((downPayment - 100000) / (1000000 - 100000)) * 100}%, #E5E7EB ${((downPayment - 100000) / (1000000 - 100000)) * 100}%, #E5E7EB 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹ 1,00,00</span>
                  <span>₹ 10,00,00</span>
                </div>
              </div>

              <p className="text-black text-lg font-medium">
                Your loan Amount : <span className="text-orange-500"> {formatCurrencyShort(loanAmount)}</span>
              </p>
            </div>

            {/* Years and Interest Rate Section */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                
                {/* Years Slider */}
                <div>
                  <div className="relative mb-4">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={years}
                      onChange={(e) => setYears(parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-full appearance-none slider cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FF6B47 0%, #FF6B47 ${((years - 1) / (30 - 1)) * 100}%, #E5E7EB ${((years - 1) / (30 - 1)) * 100}%, #E5E7EB 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>1</span>
                      <span>30</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-black font-semibold text-lg mb-1">Years</p>
                    <p className="text-black text-sm">{years} years</p>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div>
                  <div className="relative mb-4">
                    <input
                      type="range"
                      min="8"
                      max="20"
                      value={interestRate}
                      onChange={(e) => setInterestRate(parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-full appearance-none slider cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FF6B47 0%, #FF6B47 ${((interestRate - 8) / (20 - 8)) * 100}%, #E5E7EB ${((interestRate - 8) / (20 - 8)) * 100}%, #E5E7EB 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>8 %</span>
                      <span>20 %</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-black font-semibold text-lg mb-1">Interest</p>
                    <p className="text-black text-sm">{interestRate} %</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Chart and Results */}
          <div className="flex items-center justify-center col-span-2">
            <div className="flex items-center gap-32">
              
              {/* Chart Container */}
              <div className="relative w-[450px] h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      innerRadius={70}
                      outerRadius={140}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Results Table - Positioned to the right */}
              <div className="flex flex-col items-center">
              <div className="bg-gray-50 border-2 flex py-4 px-9 w-80 rounded-2xl min-w-max shadow-sm">
                <div className="space-y-4 flex flex-col bg-white p-6 min-w-max rounded-2xl">
                  <div className="flex justify-between items-center py-3 border-b border-gray-300">
                    <span className="text-gray-600 text-sm">Principal Loan</span>
                    <span className="font-bold text-gray-900 text-sm">
                      {formatCurrencyShort(loanAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-300">
                    <span className="text-gray-600 text-sm">Total Interest</span>
                    <span className="font-bold text-gray-900 text-sm">
                      {formatCurrencyShort(totalInterest)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center min-w-max py-4 bg-blue-100 px-4 -mx-4 rounded-lg">
                    <span className="text-gray-600 text-sm font-medium">Total Amount Payable</span>
                    <span className="font-bold text-blue-700 text-sm ml-8">
                      {formatCurrencyShort(totalAmount)}
                    </span>
                  </div>
                 
                </div>
              </div>
               <div className='flex flex-col items-center mt-4'>
                   <Link href="/applyforloan" className="mt-4 text-white bg-black px-4 py-2 rounded-xl hover:bg-black/80 transition">
        Apply for a Loan
      </Link></div>
        </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Input Controls Last */}
        <div className="lg:hidden">
          <div className="bg-gray-50 rounded-2xl p-6 mx-4 space-y-6">
            
            {/* Car Price Input - Mobile */}
            <div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-3">
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-3">₹</span>
                  <input
                    type="text"
                    value={carPrice.toLocaleString('en-IN')}
                    onChange={(e) => {
                      const value = parseInt(e.target.value.replace(/,/g, ''));
                      if (!isNaN(value)) setCarPrice(value);
                    }}
                    className="text-2xl font-bold bg-transparent border-0 w-full focus:outline-none text-black"
                  />
                </div>
              </div>
              <p className="text-black text-lg font-medium text-center">
                Entered Car Price : <span className="text-orange-500">{formatCurrencyShort(carPrice)}</span>
              </p>
            </div>

            {/* Down Payment Section - Mobile */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-black font-semibold text-lg">Down Payment :</span>
                <span className="text-orange-500 font-semibold text-lg">
                  {formatCurrencyShort(downPayment)}
                </span>
              </div>
              
              <div className="relative mb-4">
                <input
                  type="range"
                  min="100000"
                  max="1000000"
                  step="10000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none slider cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #FF6B47 0%, #FF6B47 ${((downPayment - 100000) / (1000000 - 100000)) * 100}%, #E5E7EB ${((downPayment - 100000) / (1000000 - 100000)) * 100}%, #E5E7EB 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹ 1,00,00</span>
                  <span>₹ 10,00,00</span>
                </div>
              </div>

              <p className="text-black text-lg font-medium text-center">
                Your loan Amount : <span className="text-orange-500">{formatCurrencyShort(loanAmount)}</span>
              </p>
            </div>
            

            {/* Years and Interest Rate Section - Mobile */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                
                {/* Years Slider */}
                <div>
                  <div className="relative mb-4">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={years}
                      onChange={(e) => setYears(parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-full appearance-none slider cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FF6B47 0%, #FF6B47 ${((years - 1) / (30 - 1)) * 100}%, #E5E7EB ${((years - 1) / (30 - 1)) * 100}%, #E5E7EB 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>1</span>
                      <span>30</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-black font-semibold text-lg mb-1">Years</p>
                    <p className="text-black text-sm">{years} years</p>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div>
                  <div className="relative mb-4">
                    <input
                      type="range"
                      min="8"
                      max="20"
                      value={interestRate}
                      onChange={(e) => setInterestRate(parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-full appearance-none slider cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FF6B47 0%, #FF6B47 ${((interestRate - 8) / (20 - 8)) * 100}%, #E5E7EB ${((interestRate - 8) / (20 - 8)) * 100}%, #E5E7EB 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>8 %</span>
                      <span>20 %</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-black font-semibold text-lg mb-1">Interest</p>
                    <p className="text-black text-sm">{interestRate} %</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center mt-4 md:hidden'>
                   <Link href="/applyforloan" className="mt-4 text-white bg-black px-4 py-2 rounded-xl hover:bg-black/80 transition">
        Apply for a Loan
      </Link></div>
        </div>
      </div>

    
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #FF6B47;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #FF6B47;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default EmiCalculator;
