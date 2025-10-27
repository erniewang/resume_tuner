import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

// Styled button components that only handle presentation
export function PrimaryButton({ children, onClick, className = "" }: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`flex-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-md text-sm font-medium transition-colors ${className}`}
        >
            {children}
        </button>
    );
}

export function SecondaryButton({ children, onClick, className = "" }: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`flex-1 bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-2 rounded-md text-sm font-medium transition-colors ${className}`}
        >
            {children}
        </button>
    );
}

export function ActionButton({ children, onClick, className = "" }: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`bg-blue-50 hover:bg-blue-100 text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors ${className}`}
        >
            {children}
        </button>
    );
}