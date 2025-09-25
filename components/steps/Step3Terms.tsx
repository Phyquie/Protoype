import React, { useState } from 'react';
import Button from '../ui/Button';

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
    <div style={{ 
      minHeight: 420, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <h1 style={{ 
        color: '#fff', 
        fontWeight: 700, 
        fontSize: '2.2rem', 
        textAlign: 'center', 
        marginBottom: 32, 
        marginTop: 0 
      }}>
        Terms & Condition
      </h1>
      
      <div style={{ 
        background: '#111', 
        borderRadius: 12, 
        padding: '24px 24px', 
        marginBottom: 32, 
        width: '100%' 
      }}>
        <div style={{ color: '#fff', fontWeight: 700, marginBottom: 12 }}>
          Read the terms and conditions
        </div>
        <div style={{ 
          color: '#fff', 
          fontWeight: 500, 
          fontSize: '1rem', 
          marginBottom: 10 
        }}>
          1. carefully before proceeding. The following is dummy text for placeholder use only:<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br /><br />
          2. carefully before proceeding. The following is dummy text for placeholder use only:<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </div>
      </div>
      
      <form style={{ width: '100%' }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
          <input
            type="checkbox"
            id="terms"
            checked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <label htmlFor="terms" style={{ 
            color: '#fff', 
            fontWeight: 500, 
            fontSize: '1.05rem', 
            cursor: 'pointer' 
          }}>
            I agree to the terms & condition carefully before proceeding
          </label>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ 
            background: '#fff', 
            color: '#2D5BFF', 
            fontWeight: 700, 
            fontSize: '1.2rem', 
            borderRadius: 6, 
            padding: '6px 18px', 
            letterSpacing: 1 
          }}>
            19+16
          </div>
          <input
            type="text"
            placeholder="Captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            style={{
              width: 120,
              padding: '10px 16px',
              borderRadius: '8px',
              border: 'none',
              background: 'rgba(255,255,255,0.95)',
              color: '#222',
              fontWeight: 600,
              fontSize: '1rem',
              outline: 'none',
            }}
          />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
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