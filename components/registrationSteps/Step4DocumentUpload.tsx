import React from 'react';
import Button from './ui/Button';
import FileUpload from './ui/FileUpload';

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

interface Step4DocumentUploadProps {
  onNext: () => void;
  onPrev: () => void;
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Step4DocumentUpload: React.FC<Step4DocumentUploadProps> = ({ onNext, onPrev, formData, updateFormData }) => {
  const handleDealershipProofUpload = (files: FileList | null) => {
    if (files && files[0]) {
      updateFormData({ dealershipProof: files[0] });
    }
  };

  const handlePanCardUpload = (files: FileList | null) => {
    if (files && files[0]) {
      updateFormData({ panCard: files[0] });
    }
  };

  const handleDealershipImagesUpload = (files: FileList | null) => {
    if (files) {
      updateFormData({ dealershipImages: Array.from(files) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    onNext();
  };

  return (
    <div className="min-h-[420px] flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-3xl md:text-4xl text-center mb-8 mt-0">
        Document Upload
      </h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 md:gap-8 mb-8">
          <FileUpload
            label="Dealership Proof"
            onChange={handleDealershipProofUpload}
            accept="image/*,.pdf"
          />
          <FileUpload
            label="Pan Card"
            onChange={handlePanCardUpload}
            accept="image/*,.pdf"
          />
          <FileUpload
            label="Dealership Images (min 10)"
            onChange={handleDealershipImagesUpload}
            multiple
            accept="image/*"
          />
          <div>
            <label className="text-white font-bold text-base md:text-lg">Address</label>
            <textarea
              placeholder="Enter complete address of the dealership"
              value={formData.address}
              onChange={(e) => updateFormData({ address: e.target.value })}
              className="w-full min-h-[60px] mt-2 rounded-xl border-none bg-white/10 text-white font-medium text-base md:text-lg p-4 outline-none resize-vertical box-border"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-3 mt-8 md:gap-6 md:mt-10 button-section">
          <Button variant="secondary" onClick={onPrev}>
            Prev
          </Button>
          <Button 
            variant="primary" 
            width="220px"
            onClick={onNext}
          >
            Become a Dealer
          </Button>
        </div>
      </form>
      <style jsx>{`
        @media (max-width: 768px) {
          .button-section {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .button-section button {
            width: 100% !important;
            max-width: none !important;
          }
        }
        @media (max-width: 480px) {
          .upload-section {
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Step4DocumentUpload;