import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  width?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  width = '160px',
  style = {}
}) => {
  const baseStyle = {
    width,
    padding: '12px 0',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 700,
    fontSize: '1.1rem',
    cursor: 'pointer',
    letterSpacing: '1px',
    ...style
  };

  const primaryStyle = {
    ...baseStyle,
    background: 'linear-gradient(90deg, #2D5BFF 60%, #1A2A4D 100%)',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(45,91,255,0.15)',
  };

  const secondaryStyle = {
    ...baseStyle,
    background: 'rgba(255,255,255,0.12)',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(45,91,255,0.10)',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={variant === 'primary' ? primaryStyle : secondaryStyle}
    >
      {children}
    </button>
  );
};

export default Button;