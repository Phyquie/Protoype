import React from 'react';
import Button from '../ui/Button';

interface Step2ThankYouProps {
  name: string;
  onNext: () => void;
  onPrev: () => void;
}

const Step2ThankYou: React.FC<Step2ThankYouProps> = ({ name, onNext, onPrev }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '420px' 
    }}>
      {/* Checkmark SVG */}
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ marginBottom: 24 }}>
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
      
      <h1 style={{ 
        color: '#fff', 
        fontWeight: 700, 
        fontSize: '2.2rem', 
        textAlign: 'center', 
        marginBottom: 0 
      }}>
        Thank you
      </h1>
      
      <h2 style={{ 
        color: '#fff', 
        fontWeight: 700, 
        fontSize: '1.4rem', 
        textAlign: 'center', 
        margin: '8px 0 18px 0' 
      }}>
        {name}
      </h2>
      
      <p style={{ 
        color: '#fff', 
        fontWeight: 600, 
        textAlign: 'center', 
        marginBottom: 32, 
        fontSize: '1.05rem', 
        lineHeight: 1.5 
      }}>
        Thanks for connecting with us! We truly appreciate your interest and look forward to moving ahead together. Our team is excited to understand your needs better and provide the right solutions.<br />
        Let's stay connected and take the next steps toward building a successful and long-term collaboration.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 8 }}>
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