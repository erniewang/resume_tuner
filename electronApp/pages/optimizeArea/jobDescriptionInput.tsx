import React from 'react';

export function JobDescriptionInput() {
    return (
        <textarea 
            className="
                w-full h-[90px] 
                p-2 
                resize-none 
                rounded-t-lg 
                bg-gray-50 
                shadow-lg 
                border-r border-gray-300
                md:w-[140px] md:h-full 
                md:rounded-l-lg md:rounded-t-none"
            placeholder="Paste job description here..."
        >
        </textarea>
    );
}
