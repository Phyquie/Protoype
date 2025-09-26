import React from 'react';
import Button from './ui/Button';

interface Step2ThankYouProps {
  name: string;
  onNext: () => void;
  onPrev: () => void;
}

const Step2ThankYou: React.FC<Step2ThankYouProps> = ({ name, onNext, onPrev }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[420px]">
      {/* Checkmark SVG */}
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="mb-6">
        <circle cx="60" cy="60" r="54" stroke="#2D5BFF" strokeWidth="8" fill="none" />
        <path 
          d="M40 65L56 81L84 49" 
          stroke="#2D5BFF" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none" 
        />
      </svg>
      
      <h1 className="text-white font-bold text-4xl lg:text-5xl text-center mb-0">
        Thank you
      </h1>
      
      <h2 className="text-white font-bold text-xl lg:text-2xl text-center my-2 mb-5">
        {name}
      </h2>
      
      <p className="text-white font-semibold text-center mb-8 text-sm lg:text-lg leading-6 px-4 max-w-2xl">
        Thanks for connecting with us! We truly appreciate your interest and look forward to moving ahead together. Our team is excited to understand your needs better and provide the right solutions.<br />
        Let&apos;s stay connected and take the next steps toward building a successful and long-term collaboration.
      </p>
      
      <div className="flex flex-col md:flex-row md:justify-between gap-3 mt-2  md:gap-4 md:w-full">
        <Button variant="secondary" onClick={onPrev}>
          Prev
        </Button>
        <Button variant="primary" onClick={onNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2ThankYou;