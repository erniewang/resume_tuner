import React from 'react';

const BUTTON_STYLE = 'font-bold py-2 px-3 rounded text-sm transition-opacity opacity-100 hover:opacity-70 text-black';
const CHECKBOX_STYLE = 'flex items-center gap-2 text-sm font-semibold';
const BUTTONS = [
    { label: 'Start', color: 'bg-green-300', action: 'start' },
    { label: 'Stop', color: 'bg-red-300', action: 'stop' },
    { label: 'Export', color: 'bg-gray-300', action: 'export' },
    { label: 'Settings', color: 'bg-gray-300', action: 'settings' },
    { label: 'Help', color: 'bg-gray-300', action: 'help' },
];
const CHECKBOXES = [
    { label: 'Sequential', id: 'sequential' },
    { label: 'Enable Preview', id: 'preview' },
];

export function Home() {
    return (
        <div className='w-full h-full bg-gray-200 flex flex-col md:flex-row'>
            <div className='flex-1 w-full md:w-5/6 overflow-y-scroll bg-black text-white'>

            </div>
            <div className='flex-none min-h-[100px] max-h-[200px] w-full md:h-full md:w-1/6 grid grid-cols-2 md:grid-cols-1 gap-3 p-3'>
                {BUTTONS.map((btn) => (
                    <button 
                        key={btn.action}
                        className={`${BUTTON_STYLE} ${btn.color}`}
                    >
                        {btn.label}
                    </button>
                ))}
                <div className='col-span-2 md:col-span-1 flex gap-2 md:flex-col'>
                    {CHECKBOXES.map((checkbox) => (
                        <label key={checkbox.id} className={CHECKBOX_STYLE}>
                            <input 
                                type='checkbox' 
                                className='w-4 h-4'
                            />
                            {checkbox.label}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

//flex-1 fills the leftover space
//flex-none same height no matter what

//scroll: constrained height, and more content than space

//