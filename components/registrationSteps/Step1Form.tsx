import React from 'react';
import FormInput from './ui/FormInput';
import Button from './ui/Button';
import Link from 'next/link';

interface FormData {
  name: string;
  dealershipName: string;
  mobile: string;
  email: string;
  state: string;
  city: string;
  area: string;
  pincode: string;
  dealershipProof: File | null;
  panCard: File | null;
  dealershipImages: File[];
  address: string;
}

interface Step1FormProps {
  onNext: () => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ onNext, formData, updateFormData }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      <h1 className="text-white font-bold text-3xl md:text-4xl text-center mb-2 mt-4">
        Welcome Dealers
      </h1>
      <p className="text-white font-medium text-base md:text-lg text-center mb-8">
        Lets get a step closer and close deals together
      </p>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <FormInput
          label="Name as per PAN"
          placeholder="Name as per PAN"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
        />
        <FormInput
          label="Dealership Name"
          placeholder="Dealership Name"
          value={formData.dealershipName}
          onChange={(e) => updateFormData({ dealershipName: e.target.value })}
        />
        <FormInput
          label="Mobile NO."
          type="tel"
          placeholder="Mobile NO."
          value={formData.mobile}
          onChange={(e) => updateFormData({ mobile: e.target.value })}
        />
        <FormInput
          label="Email id"
          type="email"
          placeholder="Email id"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
        />
        <div className="flex gap-3 md:gap-4">
          <FormInput
            label="State"
            placeholder="State"
            value={formData.state}
            onChange={(e) => updateFormData({ state: e.target.value })}
            style={{ flex: 1 }}
          />
          <FormInput
            label="City"
            placeholder="City"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
            style={{ flex: 1 }}
          />
        </div>
        <div className="flex gap-3 md:gap-4">
          <FormInput
            label="Area"
            placeholder="Area"
            value={formData.area}
            onChange={(e) => updateFormData({ area: e.target.value })}
            style={{ flex: 1 }}
          />
          <FormInput
            label="Pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={(e) => updateFormData({ pincode: e.target.value })}
            style={{ flex: 1 }}
          />
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <Link href="/newdealer" className="flex items-center text-blue-500 hover:text-blue-700 font-medium px-4 py-2 rounded-lg transition-colors duration-200 bg-white/10 hover:bg-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </Link>
          <Button type="submit" variant="primary">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step1Form;