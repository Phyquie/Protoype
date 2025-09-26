'use client'
import Link from 'next/link';
import React, { useState } from 'react';

interface LoanFormData {
  employmentType: 'Self-Employed' | 'Salaried';
  pan: string;
  firstName: string;
  middleName: string;
  lastName: string;
  mobileNumber: string;
  otp: string[];
  email: string;
  gender: 'Female' | 'Male' | 'Others';
  dateOfBirth: string;
  netMonthlyIncome: string;
  purposeOfLoan: 'Purchase of Used Car' | 'Loan on Existing Car' | 'Balance Transfer on Car';
  residentialAddress: string;
  pincode: string;
  city: string;
  state: string;
  agreeToTerms: boolean;
}

const LoanForm: React.FC = () => {
  const [formData, setFormData] = useState<LoanFormData>({
    employmentType: 'Self-Employed',
    pan: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    otp: ['', '', '', '', '', ''],
    email: '',
    gender: 'Female',
    dateOfBirth: '',
    netMonthlyIncome: '',
    purposeOfLoan: 'Purchase of Used Car',
    residentialAddress: '',
    pincode: '',
    city: '',
    state: '',
    agreeToTerms: false,
  });

  const [showOtpSection, setShowOtpSection] = useState(false);

  const updateFormData = (field: keyof LoanFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateOtp = (index: number, value: string) => {
    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData(prev => ({ ...prev, otp: newOtp }));

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleGetOtp = () => {
    if (formData.mobileNumber.length === 10) {
      setShowOtpSection(true);
      console.log('Sending OTP to:', formData.mobileNumber);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data for API:', formData);
    // Here you can integrate with your API
    alert('Form submitted successfully! Check console for form data.');
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-5 bg-gray-50  min-h-screen font-sans">
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <Link href="/calculator" className="text-blue-600 underline mb-4 inline-block">
          Back
        </Link>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-left">
          Enter your Details
        </h2>
        
        <p className="text-base text-gray-600 mb-8 text-right font-medium">
          For used car loan
        </p>

        <form onSubmit={handleSubmit}>
          {/* Employment Type */}
          <div className="mb-6">
            <label className="block text-base font-medium text-gray-800 mb-3">
              Employment type
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => updateFormData('employmentType', 'Self-Employed')}
                className={`px-5 py-2.5 rounded-full border-none text-sm font-medium cursor-pointer ${
                  formData.employmentType === 'Self-Employed' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                Self - Employed ⌄
              </button>
              <button
                type="button"
                onClick={() => updateFormData('employmentType', 'Salaried')}
                className={`px-5 py-2.5 rounded-full border-none text-sm font-medium cursor-pointer ${
                  formData.employmentType === 'Salaried' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                Salaried
              </button>
            </div>
          </div>

          {/* PAN */}
          <input
            type="text"
            placeholder="PAN*"
            value={formData.pan}
            onChange={(e) => updateFormData('pan', e.target.value.toUpperCase())}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-4 outline-none bg-gray-100 box-border text-gray-800"
            maxLength={10}
          />

          {/* First Name */}
          <input
            type="text"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-4 outline-none bg-gray-100 box-border  text-gray-800"
          />

          {/* Middle Name */}
          <input
            type="text"
            placeholder="Middle Name*"
            value={formData.middleName}
            onChange={(e) => updateFormData('middleName', e.target.value)}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-4 outline-none bg-gray-100 box-border  text-gray-800 "
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-4 outline-none bg-gray-100 box-border  text-gray-800"
          />

          {/* Mobile Number */}
          <div className="relative mb-4">
            <input
              type="tel"
              placeholder="Mobile Number*"
              value={formData.mobileNumber}
              onChange={(e) => updateFormData('mobileNumber', e.target.value)}
              className="w-full px-5 py-4 pr-24 rounded-3xl border border-gray-300 text-base outline-none bg-gray-100 box-border  text-gray-800"
              maxLength={10}
            />
            <button
              type="button"
              onClick={handleGetOtp}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-600 text-white border-none rounded-full text-xs font-medium cursor-pointer"
            >
              GET OTP
            </button>
          </div>

          {/* OTP Section */}
          {showOtpSection && (
            <div className="mb-6">
              <label className="block text-base font-medium text-gray-800 mb-3">
                Enter OTP
              </label>
              <div className="flex gap-2 justify-center">
                {formData.otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => updateOtp(index, e.target.value)}
                    className="w-12 h-12 text-center rounded-lg border border-gray-300 text-lg font-medium outline-none bg-gray-100  text-gray-800"
                    maxLength={1}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email ID*"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-6 outline-none bg-gray-100 box-border  text-gray-800"
          />

          {/* Gender */}
          <div className="mb-6">
            <label className="block text-base font-medium text-gray-800 mb-3">
              Gender
            </label>
            <div className="flex gap-3">
              {(['Female', 'Male', 'Others'] as const).map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => updateFormData('gender', gender)}
                  className={`px-5 py-2.5 rounded-full border-none text-sm font-medium cursor-pointer ${
                    formData.gender === gender 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>

          {/* Date of Birth */}
          <input
            type="text"
            placeholder="Date of birth*"
            value={formData.dateOfBirth}
            onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
            onFocus={(e) => e.target.type = 'date'}
            onBlur={(e) => e.target.type = 'text'}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-4 outline-none bg-gray-100 box-border  text-gray-800"
          />

          {/* Net Monthly Income */}
          <input
            type="text"
            placeholder="Net monthly Income*"
            value={formData.netMonthlyIncome}
            onChange={(e) => updateFormData('netMonthlyIncome', e.target.value)}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-4 outline-none bg-gray-100 box-border  text-gray-800"
          />

          {/* Purpose of Loan */}
          <div className="relative mb-4">
            <select
              value={formData.purposeOfLoan}
              onChange={(e) => updateFormData('purposeOfLoan', e.target.value as any)}
              className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base outline-none bg-gray-100 box-border appearance-none cursor-pointer  text-black"
            >
              <option value="Purchase of Used Car">Purchase of Used Car</option>
              <option value="Loan on Existing Car">Loan on Existing Car</option>
              <option value="Balance Transfer on Car">Balance Transfer on Car</option>
            </select>
            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-xs text-gray-600">
              ⌄
            </div>
          </div>

          {/* Residential Address */}
          <input
            type="text"
            placeholder="Residential Address*"
            value={formData.residentialAddress}
            onChange={(e) => updateFormData('residentialAddress', e.target.value)}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-4 outline-none bg-gray-100 box-border  text-gray-800"
          />

          {/* Pincode */}
          <input
            type="text"
            placeholder="Pincode*"
            value={formData.pincode}
            onChange={(e) => updateFormData('pincode', e.target.value)}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-4 outline-none bg-gray-100 box-border  text-gray-800"
            maxLength={6}
          />

          {/* City */}
          <input
            type="text"
            placeholder="City*"
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-4 outline-none bg-gray-100 box-border  text-gray-800"
          />

          {/* State */}
          <input
            type="text"
            placeholder="State*"
            value={formData.state}
            onChange={(e) => updateFormData('state', e.target.value)}
            className="w-full px-5 py-4 rounded-3xl border border-gray-300 text-base mb-6 outline-none bg-gray-100 box-border  text-gray-800"
          />

          {/* Terms and Conditions */}
          <div className="bg-blue-50 p-5 rounded-lg mb-6">
            <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
                className="mt-0.5 w-4 h-4"
              />
              <span>
                By proceeding I agree to{' '}
                <a href="#" className="text-blue-600 underline">
                  Terms and Conditions
                </a>{' '}
                and have read/understood{' '}
                <a href="#" className="text-blue-600 underline">
                  approach for gradation of risk
                </a>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.agreeToTerms}
            className={`w-full py-4 border-none rounded-lg text-base font-medium transition-colors duration-300 ${
              formData.agreeToTerms 
                ? 'bg-blue-500 text-white cursor-pointer hover:bg-blue-600' 
                : 'bg-gray-300 text-white cursor-not-allowed'
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanForm;
