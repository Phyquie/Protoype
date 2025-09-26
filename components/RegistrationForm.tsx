'use client'
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ProgressBar from './registrationSteps/ui/ProgressBar';
import Step1Form from './registrationSteps/Step1Form';
import Step2ThankYou from './registrationSteps/Step2ThankYou';
import Step3Terms from './registrationSteps/Step3Terms';
import Step4DocumentUpload from './registrationSteps/Step4DocumentUpload';
import Step5DealerConfirmation from './registrationSteps/Step5DealerConfirmation';

interface FormData {
  name: string;
  dealershipName: string;
  mobile: string;
  email: string;
  state: string;
  city: string;
  area: string;
  pincode: string;
  // Step 4 Data
  dealershipProof: File | null;
  panCard: File | null;
  dealershipImages: File[];
  address: string;
}

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: 'Arya Utkarsh',
    dealershipName: '',
    mobile: '',
    email: '',
    state: '',
    city: '',
    area: '',
    pincode: '',
    dealershipProof: null,
    panCard: null,
    dealershipImages: [],
    address: '',
  });
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stepRef.current) {
      gsap.fromTo(
        stepRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [step]);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleFormSubmit = async () => {
    console.log('Form data to submit:', formData);
    // Here you can add your API call to submit the form data
    // Example: await submitDealerApplication(formData);
    setStep(5);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1Form onNext={handleNext} formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Step2ThankYou name={formData.name} onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <Step3Terms onNext={handleNext} onPrev={handlePrev} />;
      case 4:
        return <Step4DocumentUpload onNext={handleFormSubmit} onPrev={handlePrev} formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <Step5DealerConfirmation formData={formData} />;
      default:
        return <Step1Form onNext={handleNext} formData={formData} updateFormData={updateFormData} />;
    }
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center p-5"
      style={{
        backgroundImage: 'url(/bg.png)',
      }}
    >
      <div
        className="bg-black/85 rounded-3xl p-12 lg:p-16 max-w-4xl w-[90vw] shadow-2xl relative transition-all duration-300 md:p-8 md:rounded-2xl md:w-[95vw] sm:p-6 sm:rounded-xl sm:w-[98vw]"
        ref={stepRef}
      >
        <ProgressBar step={step} />
        {renderStep()}
      </div>
    </div>
  );
};

export default RegistrationForm;