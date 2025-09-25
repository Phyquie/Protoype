'use client'
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ProgressBar from '../../components/ui/ProgressBar';
import Step1Form from '../../components/steps/Step1Form';
import Step2ThankYou from '../../components/steps/Step2ThankYou';
import Step3Terms from '../../components/steps/Step3Terms';
import Step4DocumentUpload from '../../components/steps/Step4DocumentUpload';
import Step5DealerConfirmation from '../../components/steps/Step5DealerConfirmation';

const RegistrationPage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('Arya Utkarsh');
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

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1Form onNext={handleNext} name={name} setName={setName} />;
      case 2:
        return <Step2ThankYou name={name} onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <Step3Terms onNext={handleNext} onPrev={handlePrev} />;
      case 4:
        return <Step4DocumentUpload onNext={handleNext} onPrev={handlePrev} />;
      case 5:
        return <Step5DealerConfirmation />;
      default:
        return <Step1Form onNext={handleNext} name={name} setName={setName} />;
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: 'url(/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.85)',
          borderRadius: '32px',
          padding: '48px 64px 48px 64px',
          maxWidth: '1000px',
          minWidth: '600px',
          width: '90vw',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          position: 'relative',
          transition: 'max-width 0.3s',
        }}
        ref={stepRef}
      >
        <ProgressBar step={step} />
        {renderStep()}
      </div>
    </div>
  );
};

export default RegistrationPage;