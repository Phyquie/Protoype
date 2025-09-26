import React from 'react';

interface FileUploadProps {
  label: string;
  onChange: (files: FileList | null) => void;
  multiple?: boolean;
  accept?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  onChange,
  multiple = false,
  accept
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files);
  };

  return (
    <div className="file-upload" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
      <label style={{ 
        color: '#fff', 
        fontWeight: 700,
        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
        flex: 1,
        minWidth: '120px'
      }}>
        {label}
      </label>
      <label style={{ 
        display: 'flex', 
        alignItems: 'center', 
        cursor: 'pointer', 
        color: '#fff', 
        fontWeight: 600,
        fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
        background: 'rgba(255,255,255,0.12)',
        padding: '8px 16px',
        borderRadius: '8px',
        minHeight: '40px',
        boxSizing: 'border-box',
      }}>
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          multiple={multiple}
          accept={accept}
        />
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path 
              d="M12 16V4m0 0l-4 4m4-4l4 4" 
              stroke="#fff" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <rect x="4" y="16" width="16" height="4" rx="2" fill="#fff" fillOpacity=".1"/>
          </svg>
          Upload
        </span>
      </label>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .file-upload {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
          .file-upload label:last-child {
            align-self: stretch !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FileUpload;