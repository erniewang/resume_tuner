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
            className={`flex-1 px-2 py-2 text-sm font-medium text-white rounded-md bg-blue-600 transition-colors hover:bg-blue-700 ${className}`}
        >
            {children}
        </button>
    );
}

export function SecondaryButton({ children, onClick, className = "" }: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`flex-1 px-2 py-2 text-sm font-medium text-blue-800 rounded-md bg-blue-100 transition-colors hover:bg-blue-200 ${className}`}
        >
            {children}
        </button>
    );
}

export function ActionButton({ children, onClick, className = "" }: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`px-3 py-2 text-sm font-medium text-blue-800 rounded-md bg-blue-50 transition-colors hover:bg-blue-100 ${className}`}
        >
            {children}
        </button>
    );
}