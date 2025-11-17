import React from 'react';

const Spinner = ({ size = 'md', color = 'blue' }) => {
    const sizeStyles = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    };

    const colorStyles = {
        blue: 'border-blue-500',
        green: 'border-green-500',
        red: 'border-red-500',
    };

    return (
        <div className="flex justify-center items-center">
            <div className={`${sizeStyles[size]} border-4 border-gray-200 ${colorStyles[color]} border-t-4 rounded-full animate-spin`}></div>
        </div>
    );
};

export default Spinner;