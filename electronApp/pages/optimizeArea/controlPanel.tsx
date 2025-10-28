import React from 'react';
import { PrimaryButton, SecondaryButton, ActionButton } from '../../componets/buttons';

interface ControlPanelProps {
    onStart: () => void;
    onStop: () => void;
    actionHandlers: {
        [key: string]: () => void;
    };
}

export function ControlPanel({ onStart, onStop, actionHandlers }: ControlPanelProps) {
    return (
        <div className="
            w-full h-auto 
            p-3 
            rounded-b-lg 
            bg-gray-50 
            shadow-lg 
            min-h-[400px]
            md:w-1/5 md:h-full 
            md:rounded-r-lg md:rounded-b-none"
        >
            {/* Settings Row - Checkboxes */}
            <div className="
                flex flex-col 
                gap-2 
                mb-4 pb-3 
                border-b border-gray-200
            ">
                <label className="
                    flex items-center 
                    gap-2 
                    text-sm font-medium text-gray-700 
                    cursor-pointer
                ">
                    <input 
                        type="checkbox" 
                        className="
                            rounded 
                            border-gray-300 
                            text-blue-600 
                            focus:ring-blue-500
                        " 
                    />
                    Sequential Mode
                </label>
                <label className="
                    flex items-center 
                    gap-2 
                    text-sm font-medium text-gray-700 
                    cursor-pointer
                ">
                    <input 
                        type="checkbox" 
                        className="
                            rounded 
                            border-gray-300 
                            text-blue-600 
                            focus:ring-blue-500
                        " 
                    />
                    Select Project
                </label>
            </div>
            
            {/* Control Buttons Row */}
            <div className="
                flex flex-row 
                gap-2 
                mb-4
            ">
                <PrimaryButton onClick={onStart}>Start</PrimaryButton>
                <SecondaryButton onClick={onStop}>Stop</SecondaryButton>
            </div>
            
            {/* Resume Optimizer Actions */}
            <div className="
                grid grid-cols-1 
                gap-2
            ">
                {Object.entries(actionHandlers).map(([label, handler]) => (
                    <ActionButton key={label} onClick={handler}>{label}</ActionButton>
                ))}
            </div>
        </div>
    );
}
