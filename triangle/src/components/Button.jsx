import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({
  children,
  size = 'medium',
  variant = 'primary',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  disabled,
  to,
  href,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (href) {
      window.open(href, '_blank');
    }
  };

  const buttonClassName = `button 
    ${size === 'small' ? 'button-small' : size === 'large' ? 'button-large' : 'button-medium'}
    ${variant === 'primary' ? 'button-primary' : variant === 'secondary' ? 'button-secondary' : 'button-outline'}
    ${(disabled || isLoading) ? 'button-disabled' : ''}
    ${fullWidth ? 'button-full-width' : ''}
    ${className || ''}`;

  return (
    <button
      className={buttonClassName}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? (
        <svg
          className="button-spinner"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : null}
      {!isLoading && leftIcon ? <span className="button-icon-left">{leftIcon}</span> : null}
      {children}
      {!isLoading && rightIcon ? <span className="button-icon-right">{rightIcon}</span> : null}
    </button>
  );
};

export default Button; 