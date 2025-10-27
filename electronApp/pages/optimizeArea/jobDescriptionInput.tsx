import React from 'react';

export function JobDescriptionInput() {
    return (
        <textarea 
            className="md:w-[140px] md:h-full
                h-[90px] w-full
                bg-gray-50
                resize-none
                p-2
                rounded-t-lg
                md:rounded-l-lg md:rounded-t-none
                shadow-lg
                border-r border-gray-300"
            placeholder="Paste job description here..."
        >
        </textarea>
    );
}
