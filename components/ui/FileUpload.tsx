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
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <label style={{ color: '#fff', fontWeight: 700 }}>{label}</label>
      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#fff', fontWeight: 600 }}>
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
    </div>
  );
};

export default FileUpload;