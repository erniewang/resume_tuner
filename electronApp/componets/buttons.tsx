import React from 'react';

export interface CustomButtonProps {
    children: string;
    height?: string;
    bgColor?: string;
    textColor?: string;
}

export function CustomBotton({children, height, bgColor, textColor} : CustomButtonProps) {
    const buttonHeight = height ? height : "h-auto";
    const bg = bgColor ? bgColor : "bg-blue-500 hover:bg-blue-600";
    const text = textColor ? textColor : "text-white";
    return <div className={`w-full px-3 py-2 ${bg} ${text} flex flex-row 
    justify-center items-center 
    ${buttonHeight}
    active:scale-95
    transition-all duration-100
    cursor-pointer
    rounded-md
    shadow-sm
    font-medium
    text-sm
    `}>{children}</div>
}

export function CustomCheckBox({children, height, bgColor, textColor} : CustomButtonProps) {
    const buttonHeight = height ? height : "h-auto";
    const bg = bgColor ? bgColor : "bg-gray-100 hover:bg-gray-200";
    const text = textColor ? textColor : "text-gray-800";
    return <label className={`w-full px-3 py-2 ${bg} ${text} flex flex-row 
    items-center gap-2 
    ${buttonHeight}
    cursor-pointer
    rounded-md
    shadow-sm
    text-sm
    transition-all duration-100
    `}>
        <input
            type="checkbox"
            name="test"
            className="cursor-pointer"
        />
        {children}</label>
}