import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'default',
  className = ''
}) => {
  const baseClasses = 'font-poppins font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gold-premium/30';
  
  const variantClasses = {
    primary: 'bg-gold-premium text-black-deep hover:bg-yellow-400 shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border-2 border-gold-premium text-gold-premium hover:bg-gold-premium hover:text-black-deep'
  };

  const sizeClasses = {
    default: 'px-8 py-3 text-base',
    large: 'px-12 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;