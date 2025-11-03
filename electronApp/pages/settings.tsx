import React from 'react';

//dry principles employed
const INPUT_STYLE = 'w-full p-2 border border-gray-300 rounded text-sm';
const SECTION_STYLE = 'w-full max-w-md space-y-3';
const LABEL_STYLE = 'block text-sm font-semibold mb-1';

//visual heirarchy. Big -> small
//constraint based layout
//interative states
export function Settings() {
    return (
        <div className='w-full h-full bg-gray-200 flex flex-col items-center p-4 space-y-6'>
            <div className={SECTION_STYLE}>
                <h2 className='text-lg font-bold mb-4'>API Keys</h2>
                <div>
                    <label className={LABEL_STYLE}>Claude API Key</label>
                    <input type='text' className={INPUT_STYLE} placeholder='Enter Claude API key' />
                </div>
                <div>
                    <label className={LABEL_STYLE}>GPT API Key</label>
                    <input type='text' className={INPUT_STYLE} placeholder='Enter GPT API key' />
                </div>
                <div>
                    <label className={LABEL_STYLE}>Arli API Key</label>
                    <input type='text' className={INPUT_STYLE} placeholder='Enter Arli API key' />
                </div>
            </div>

            <div className={SECTION_STYLE}>
                <h2 className='text-lg font-bold mb-4'>Output Locations</h2>
                <div>
                    <label className={LABEL_STYLE}>PDF Output</label>
                    <input type='file' className={INPUT_STYLE} />
                </div>
                <div>
                    <label className={LABEL_STYLE}>Permutation Output File</label>
                    <input type='file' className={INPUT_STYLE} />
                </div>
            </div>

            <div className='mt-auto'>
                <a href='https://example.com' className='text-blue-600 hover:text-blue-800 underline text-sm'>
                    Report Feedback or Inquiries
                </a>
            </div>
        </div>
    );
}
