import React, { useState } from 'react';
import FormInput from '../ui/FormInput';
import Button from '../ui/Button';

interface Step1FormProps {
  onNext: () => void;
  name: string;
  setName: (name: string) => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ onNext, name, setName }) => {
  const [dealershipName, setDealershipName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
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
        onSubmit={handleSubmit}
      >
        <FormInput
          label="Name as per PAN"
          placeholder="Name as per PAN"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Dealership Name"
          placeholder="Dealership Name"
          value={dealershipName}
          onChange={(e) => setDealershipName(e.target.value)}
        />
        <FormInput
          label="Mobile NO."
          type="tel"
          placeholder="Mobile NO."
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <FormInput
          label="Email id"
          type="email"
          placeholder="Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={{ display: 'flex', gap: '12px' }}>
          <FormInput
            label="State"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            style={{ flex: 1 }}
          />
          <FormInput
            label="City"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ flex: 1 }}
          />
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <FormInput
            label="Area"
            placeholder="Area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            style={{ flex: 1 }}
          />
          <FormInput
            label="Pincode"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            style={{ flex: 1 }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
          <Button type="submit" variant="primary">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step1Form;