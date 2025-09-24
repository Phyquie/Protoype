

'use client'
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const RegistrationPage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('Arya Utkarsh');
  const [termsChecked, setTermsChecked] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [dealershipProof, setDealershipProof] = useState<File | null>(null);
  const [panCard, setPanCard] = useState<File | null>(null);
  const [dealershipImages, setDealershipImages] = useState<File[]>([]);
  const [address, setAddress] = useState('');
  const captchaValue = 35; // 19 + 16
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
        {/* Progress Bar */}
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
            width:
              step === 1 ? '20%'
              : step === 2 ? '40%'
              : step === 3 ? '60%'
              : step === 4 ? '80%'
              : '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #2D5BFF 60%, #1A2A4D 100%)',
            borderTopLeftRadius: '32px',
            borderTopRightRadius: step === 5 ? '32px' : 0,
            transition: 'width 0.4s',
          }} />
        </div>

        {/* Step 1: Form */}
        {step === 1 && (
          <div>
            <h1 style={{
              color: '#fff',
              fontWeight: 700,
              fontSize: '2.2rem',
              textAlign: 'center',
              marginBottom: '8px',
              marginTop: '16px',
            }}>
              Welcome Dealers
            </h1>
            <p style={{
              color: '#fff',
              fontWeight: 500,
              textAlign: 'center',
              marginBottom: '32px',
            }}>
              Lets get a step closer and close deals together
            </p>
            <form
              style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
              onSubmit={e => {
                e.preventDefault();
                setStep(2);
              }}
            >
              <div>
                <label style={{ color: '#fff', fontWeight: 700 }}>Name as per PAN</label>
                <input
                  type="text"
                  placeholder="Name as per PAN"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'rgba(255,255,255,0.25)',
                    color: '#fff',
                    fontWeight: 600,
                    marginTop: '4px',
                    outline: 'none',
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div>
                <label style={{ color: '#fff', fontWeight: 700 }}>Dealership Name</label>
                <input type="text" placeholder="Dealership Name" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, marginTop: '4px', outline: 'none', fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ color: '#fff', fontWeight: 700 }}>Mobile NO.</label>
                <input type="tel" placeholder="Mobile NO." style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, marginTop: '4px', outline: 'none', fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ color: '#fff', fontWeight: 700 }}>Email id</label>
                <input type="email" placeholder="Email id" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, marginTop: '4px', outline: 'none', fontSize: '1rem' }} />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ color: '#fff', fontWeight: 700 }}>State</label>
                  <input type="text" placeholder="State" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, marginTop: '4px', outline: 'none', fontSize: '1rem' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ color: '#fff', fontWeight: 700 }}>City</label>
                  <input type="text" placeholder="City" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, marginTop: '4px', outline: 'none', fontSize: '1rem' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ color: '#fff', fontWeight: 700 }}>Area</label>
                  <input type="text" placeholder="Area" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, marginTop: '4px', outline: 'none', fontSize: '1rem' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ color: '#fff', fontWeight: 700 }}>Pincode</label>
                  <input type="text" placeholder="Pincode" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, marginTop: '4px', outline: 'none', fontSize: '1rem' }} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
                {/* No Prev button on first step */}
                <button
                  type="submit"
                  style={{
                    width: '160px',
                    padding: '12px 0',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(90deg, #2D5BFF 60%, #1A2A4D 100%)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    letterSpacing: '1px',
                    boxShadow: '0 2px 8px rgba(45,91,255,0.15)',
                  }}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {/* Step 5: Now a Dealer Confirmation */}
        {step === 5 && (
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
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.15rem', marginBottom: 12 }}>
                Your documents have been successfully submitted.
              </div>
              <div style={{ color: '#fff', fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.6 }}>
                Please wait while our team carefully verifies the details you have provided.<br />
                Verification is an important step to ensure accuracy, authenticity, and smooth processing of your request. This process may take some time, but we assure you that our team is working diligently to complete it at the earliest. Once the verification is done, you will be notified immediately. In case you have any queries or require further assistance during this period, you can contact us directly at <span style={{ fontWeight: 600 }}>8877772277</span>.<br />
                We are here to help and support you throughout the process.
              </div>
            </div>
          </div>
        )}


        {/* Step 2: Thank You */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '420px' }}>
            {/* Checkmark SVG */}
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ marginBottom: 24 }}>
              <circle cx="60" cy="60" r="54" stroke="#2D5BFF" strokeWidth="8" fill="none" />
              <path d="M40 65L56 81L84 49" stroke="#2D5BFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <h1 style={{ color: '#fff', fontWeight: 700, fontSize: '2.2rem', textAlign: 'center', marginBottom: 0 }}>Thank you</h1>
            <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.4rem', textAlign: 'center', margin: '8px 0 18px 0' }}>{name}</h2>
            <p style={{ color: '#fff', fontWeight: 600, textAlign: 'center', marginBottom: 32, fontSize: '1.05rem', lineHeight: 1.5 }}>
              Thanks for connecting with us! We truly appreciate your interest and look forward to moving ahead together. Our team is excited to understand your needs better and provide the right solutions.<br />
              Let’s stay connected and take the next steps toward building a successful and long-term collaboration.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 8 }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 36px',
                  cursor: 'pointer',
                  letterSpacing: '1px',
                  boxShadow: '0 2px 8px rgba(45,91,255,0.10)',
                }}
              >
                Prev
              </button>
              <button
                onClick={() => setStep(3)}
                style={{
                  background: 'linear-gradient(90deg, #2D5BFF 60%, #1A2A4D 100%)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 36px',
                  cursor: 'pointer',
                  letterSpacing: '1px',
                  boxShadow: '0 2px 8px rgba(45,91,255,0.15)',
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Terms & Condition */}
        {step === 3 && (
          <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ color: '#fff', fontWeight: 700, fontSize: '2.2rem', textAlign: 'center', marginBottom: 32, marginTop: 0 }}>Terms & Condition</h1>
            <div style={{ background: '#111', borderRadius: 12, padding: '24px 24px', marginBottom: 32, width: '100%' }}>
              <div style={{ color: '#fff', fontWeight: 700, marginBottom: 12 }}>Read the terms and conditions</div>
              <div style={{ color: '#fff', fontWeight: 500, fontSize: '1rem', marginBottom: 10 }}>
                1. carefully before proceeding. The following is dummy text for placeholder use only:<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br /><br />
                2. carefully before proceeding. The following is dummy text for placeholder use only:<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </div>
            </div>
            <form style={{ width: '100%' }} onSubmit={e => {
              e.preventDefault();
              if (termsChecked && captchaInput === String(captchaValue)) setStep(4);
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsChecked}
                  onChange={e => setTermsChecked(e.target.checked)}
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
                <label htmlFor="terms" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem', cursor: 'pointer' }}>
                  I agree to the terms & condition carefully before proceeding
                </label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ background: '#fff', color: '#2D5BFF', fontWeight: 700, fontSize: '1.2rem', borderRadius: 6, padding: '6px 18px', letterSpacing: 1 }}>
                  19+16
                </div>
                <input
                  type="text"
                  placeholder="Captcha"
                  value={captchaInput}
                  onChange={e => setCaptchaInput(e.target.value)}
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
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  style={{
                    width: '160px',
                    padding: '12px 0',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'rgba(255,255,255,0.12)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    letterSpacing: '1px',
                    boxShadow: '0 2px 8px rgba(45,91,255,0.10)',
                  }}
                >
                  Prev
                </button>
                <button
                  type="submit"
                  style={{
                    width: '160px',
                    padding: '12px 0',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(90deg, #2D5BFF 60%, #1A2A4D 100%)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    letterSpacing: '1px',
                    boxShadow: '0 2px 8px rgba(45,91,255,0.15)',
                  }}
                >
                  I accept
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 4: Document Upload */}
        {step === 4 && (
          <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ color: '#fff', fontWeight: 700, fontSize: '2.2rem', textAlign: 'center', marginBottom: 32, marginTop: 0 }}>Document Upload</h1>
            <form style={{ width: '100%' }} onSubmit={e => { e.preventDefault(); /* handle submit */ }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ color: '#fff', fontWeight: 700 }}>Dealership Proof</label>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#fff', fontWeight: 600 }}>
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      onChange={e => {
                        const files = e.target.files;
                        if (files && files[0]) setDealershipProof(files[0]);
                      }}
                    />
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="16" width="16" height="4" rx="2" fill="#fff" fillOpacity=".1"/></svg>
                      Upload
                    </span>
                  </label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ color: '#fff', fontWeight: 700 }}>Pan Card</label>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#fff', fontWeight: 600 }}>
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      onChange={e => {
                        const files = e.target.files;
                        if (files && files[0]) setPanCard(files[0]);
                      }}
                    />
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="16" width="16" height="4" rx="2" fill="#fff" fillOpacity=".1"/></svg>
                      Upload
                    </span>
                  </label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ color: '#fff', fontWeight: 700 }}>Dealership Images (min 10)</label>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#fff', fontWeight: 600 }}>
                    <input
                      type="file"
                      multiple
                      style={{ display: 'none' }}
                      onChange={e => {
                        const files = e.target.files;
                        if (files) setDealershipImages(Array.from(files));
                      }}
                    />
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="16" width="16" height="4" rx="2" fill="#fff" fillOpacity=".1"/></svg>
                      Upload
                    </span>
                  </label>
                </div>
                <div>
                  <label style={{ color: '#fff', fontWeight: 700 }}>Adress</label>
                  <textarea
                    placeholder="Enter complete address of the dealership"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    style={{
                      width: '100%',
                      minHeight: 60,
                      marginTop: 8,
                      borderRadius: 10,
                      border: 'none',
                      background: 'rgba(255,255,255,0.08)',
                      color: '#fff',
                      fontWeight: 500,
                      fontSize: '1.1rem',
                      padding: '14px 18px',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginTop: 32 }}>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  style={{
                    width: '160px',
                    padding: '12px 0',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'rgba(255,255,255,0.12)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    letterSpacing: '1px',
                    boxShadow: '0 2px 8px rgba(45,91,255,0.10)',
                  }}
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setStep(5)}
                  style={{
                    width: '220px',
                    padding: '12px 0',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'rgba(255,255,255,0.18)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    letterSpacing: '1px',
                    boxShadow: '0 2px 8px rgba(45,91,255,0.10)',
                  }}
                >
                  Become a Dealer
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;