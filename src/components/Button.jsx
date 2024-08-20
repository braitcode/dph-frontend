import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, size, color, onClick, disabled, children }) => {
  // Define base styles
  const baseStyles = 'font-bold py-2 px-4 rounded focus:outline-none focus:ring';

  // Size variations
  const sizeStyles = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-5 w-full rounded-lg',
  };

  // Color variations
  const colorStyles = {
    darkGreen: 'bg-[#034D2B] text-white hover:bg-green-900',
    dark: 'bg-[#292D32] text-white hover:bg-black',
    success: 'bg-[#02864A] text-white hover:bg-green-800',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles} 
        ${sizeStyles[size]} 
        ${colorStyles[color]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {children}
    </button>
  );
};

// Default props
Button.defaultProps = {
  type: 'button',
  size: 'medium',
  color: 'primary',
  disabled: false,
};

// Prop types validation
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;