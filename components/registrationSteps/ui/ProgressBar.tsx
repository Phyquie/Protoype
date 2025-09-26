import React from 'react';

interface ProgressBarProps {
  step: number;
  totalSteps?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps = 5 }) => {
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '8px',
      background: 'rgba(255,255,255,0.08)',
      borderTopLeftRadius: '32px',
      borderTopRightRadius: '32px',
      overflow: 'hidden',
    }}>
      <div style={{
        width: `${progressPercentage}%`,
        height: '100%',
        background: 'linear-gradient(90deg, #2D5BFF 60%, #1A2A4D 100%)',
        borderTopLeftRadius: '32px',
        borderTopRightRadius: step === totalSteps ? '32px' : 0,
        transition: 'width 0.4s',
      }} />
    </div>
  );
};

export default ProgressBar;