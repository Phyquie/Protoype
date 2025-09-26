import React, { useState } from 'react';
import Button from './ui/Button';

interface Step3TermsProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step3Terms: React.FC<Step3TermsProps> = ({ onNext, onPrev }) => {
  const [termsChecked, setTermsChecked] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const captchaValue = 35; // 19 + 16

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (termsChecked && captchaInput === String(captchaValue)) {
      onNext();
    }
  };

  return (
    <div className="min-h-[420px] flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-3xl lg:text-4xl text-center mb-8 mt-0">
        Terms & Condition
      </h1>
      
      <div className="bg-gray-900 rounded-xl p-6 mb-8 w-full">
        <div className="text-white font-bold mb-3 text-sm lg:text-lg">
          Read the terms and conditions
        </div>
        <div className="text-white font-medium text-xs lg:text-base mb-2.5 leading-relaxed">
          1. carefully before proceeding. The following is dummy text for placeholder use only:<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br /><br />
          2. carefully before proceeding. The following is dummy text for placeholder use only:<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </div>
      </div>
      
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex items-center mb-5 md:items-start">
          <input
            type="checkbox"
            id="terms"
            checked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
            className="w-5 h-5 mr-2.5 min-w-5"
          />
          <label htmlFor="terms" className="text-white font-medium text-xs lg:text-base cursor-pointer">
            I agree to the terms & condition carefully before proceeding
          </label>
        </div>
        
        <div className="flex items-center gap-3 mb-6 md:flex-col md:items-start">
          <div className="bg-white text-blue-600 font-bold text-base lg:text-xl rounded-md px-5 py-1.5 tracking-wider">
            19+16
          </div>
          <input
            type="text"
            placeholder="Captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            className="w-30 max-w-full px-4 py-2.5 rounded-lg border-none bg-white/95 text-gray-800 font-semibold text-sm lg:text-base outline-none box-border md:w-full md:max-w-48"
          />
        </div>
        
        <div className="flex justify-between gap-3 md:flex-row flex-col md:gap-4">
          <Button variant="secondary" onClick={onPrev}>
            Prev
          </Button>
          <Button type="submit" variant="primary">
            I accept
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step3Terms;