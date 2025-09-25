import React, { useState } from 'react';
import Button from '../ui/Button';
import FileUpload from '../ui/FileUpload';

interface Step4DocumentUploadProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step4DocumentUpload: React.FC<Step4DocumentUploadProps> = ({ onNext, onPrev }) => {
  const [dealershipProof, setDealershipProof] = useState<File | null>(null);
  const [panCard, setPanCard] = useState<File | null>(null);
  const [dealershipImages, setDealershipImages] = useState<File[]>([]);
  const [address, setAddress] = useState('');

  const handleDealershipProofUpload = (files: FileList | null) => {
    if (files && files[0]) {
      setDealershipProof(files[0]);
    }
  };

  const handlePanCardUpload = (files: FileList | null) => {
    if (files && files[0]) {
      setPanCard(files[0]);
    }
  };

  const handleDealershipImagesUpload = (files: FileList | null) => {
    if (files) {
      setDealershipImages(Array.from(files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    onNext();
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
        Document Upload
      </h1>
      
      <form style={{ width: '100%' }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
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
            <label style={{ color: '#fff', fontWeight: 700 }}>Address</label>
            <textarea
              placeholder="Enter complete address of the dealership"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
          <Button variant="secondary" onClick={onPrev}>
            Prev
          </Button>
          <Button 
            variant="secondary" 
            width="220px"
            onClick={onNext}
            style={{ background: 'rgba(255,255,255,0.18)' }}
          >
            Become a Dealer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step4DocumentUpload;