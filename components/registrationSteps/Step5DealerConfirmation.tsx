import React from 'react';

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

interface Step5DealerConfirmationProps {
  formData: FormData;
}

const Step5DealerConfirmation: React.FC<Step5DealerConfirmationProps> = ({ formData }) => {
  return (
    <div className="min-h-[420px] flex flex-col items-center justify-center bg-slate-800/85 rounded-3xl shadow-2xl p-9 md:p-5 sm:p-4 border-2 border-blue-600 relative mt-3 sm:mt-2">
      <h1 className="text-white font-bold text-3xl lg:text-4xl text-center mb-6 mt-0 tracking-wide">
        Welcome Aboard, {formData.name}!
      </h1>
      <div className="bg-black/35 rounded-2xl p-6 mb-8 w-full max-w-lg shadow-lg">
        <div className="text-white font-normal text-xs lg:text-base leading-relaxed">
          Your documents have been successfully submitted and our team is now reviewing your application.
          <br /><br />
          Please wait while our team carefully verifies the details you have provided. Verification is an important step to ensure accuracy, authenticity, and smooth processing of your request. This process may take some time, but we assure you that our team is working diligently to complete it at the earliest.
          <br /><br />
          Once the verification is done, you will be notified immediately. In case you have any queries or require further assistance during this period, you can contact us directly at <span className="font-semibold text-blue-500">8877772277</span>.
          <br />
          We are here to help and support you throughout the process.
        </div>
      </div>
    </div>
  );
};

export default Step5DealerConfirmation;