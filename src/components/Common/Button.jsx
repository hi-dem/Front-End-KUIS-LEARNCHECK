import React from 'react';
const Button = ({ children, onClick, variant = 'primary', size = 'md', disabled = false, className = '', type = 'button' }) => {
    const baseStyles = 'font-semibold rounded-lg transition-colors duration-200';
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
        secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400 disabled:bg-gray-200',
        success: 'bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400',
        danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400',
    };
    const sizeStyles = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}> 
            {children} 
        </button>
    );
};
export default Button;