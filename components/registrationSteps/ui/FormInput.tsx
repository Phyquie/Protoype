import React from 'react';

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  style?: React.CSSProperties;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  style = {}
}) => {
  return (
    <div style={style}>
      <label style={{ 
        color: '#fff', 
        fontWeight: 700,
        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
        display: 'block',
        marginBottom: '4px'
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: '100%',
          padding: '10px 16px',
          borderRadius: '8px',
          border: 'none',
          background: 'rgba(255,255,255,0.25)',
          color: '#fff',
          fontWeight: 600,
          outline: 'none',
          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          boxSizing: 'border-box',
          minHeight: '44px', // Better touch target for mobile
        }}
      />
    </div>
  );
};

export default FormInput;