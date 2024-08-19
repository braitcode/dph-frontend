import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, size, color, onClick, disabled, children }) => {
  // Define base styles
  const baseStyles = 'font-bold py-2 px-4 rounded focus:outline-none focus:ring';
  
  // Size variations
  const sizeStyles = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-5',
  };

  // Color variations
  const colorStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
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
