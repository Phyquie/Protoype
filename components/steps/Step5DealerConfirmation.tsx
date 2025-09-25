import React from 'react';

const Step5DealerConfirmation: React.FC = () => {
  return (
    <div style={{
      minHeight: 420,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(20, 22, 30, 0.85)',
      borderRadius: '28px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      padding: '36px 32px 32px 32px',
      border: '2px solid #2D5BFF',
      position: 'relative',
      marginTop: 12,
    }}>
      <h1 style={{
        color: '#fff',
        fontWeight: 700,
        fontSize: '2.1rem',
        textAlign: 'center',
        marginBottom: 24,
        marginTop: 0,
        letterSpacing: 1,
      }}>
        Now a Dealer
      </h1>
      
      <div style={{
        background: 'rgba(0,0,0,0.35)',
        borderRadius: 18,
        padding: '24px 24px',
        marginBottom: 32,
        width: '100%',
        maxWidth: 540,
        boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
      }}>
        <div style={{ 
          color: '#fff', 
          fontWeight: 700, 
          fontSize: '1.15rem', 
          marginBottom: 12 
        }}>
          Your documents have been successfully submitted.
        </div>
        
        <div style={{ 
          color: '#fff', 
          fontWeight: 400, 
          fontSize: '1.05rem', 
          lineHeight: 1.6 
        }}>
          Please wait while our team carefully verifies the details you have provided.<br />
          Verification is an important step to ensure accuracy, authenticity, and smooth processing of your request. This process may take some time, but we assure you that our team is working diligently to complete it at the earliest. Once the verification is done, you will be notified immediately. In case you have any queries or require further assistance during this period, you can contact us directly at <span style={{ fontWeight: 600 }}>8877772277</span>.<br />
          We are here to help and support you throughout the process.
        </div>
      </div>
    </div>
  );
};

export default Step5DealerConfirmation;