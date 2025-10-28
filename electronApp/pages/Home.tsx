import React from 'react';
import { CustomBotton, CustomCheckBox } from '../componets/buttons';

export function Home() {
    return (
        <div className='w-full h-full bg-black flex flex-col md:flex-row'>
            <textarea
            name='paste your job description here'
            className='w-full h-[100px] md:h-full md:w-[15vw] rouned-md bg-white resize-none'></textarea>
            <div className='w-full h-[800px] md:h-full md:w-[63vw] rouned-md bg-gradient-to-b from-slate-200 to-zinc-300'></div>
            
            {/* Toolbox Panel */}
            <div className='w-full pr-5 md:pr-2 md:w-[22vw] h-auto md:h-full rouned-md bg-slate-50 flex flex-col p-2 gap-2 overflow-y-auto no-scrollbar'>
                
                {/* Playback Controls - Two buttons in a row */}
                <div className='flex flex-row gap-2'>
                    <CustomBotton bgColor="bg-green-500 hover:bg-green-600">Start</CustomBotton>
                    <CustomBotton bgColor="bg-red-500 hover:bg-red-600">Stop</CustomBotton>
                </div>
                
                {/* Continuous Mode */}
                <CustomCheckBox>Continuous</CustomCheckBox>
                
                {/* Divider */}
                <div className='border-t border-gray-300 my-1'></div>
                
                {/* Export Options */}
                <CustomBotton bgColor="bg-purple-500 hover:bg-purple-600">Export PDF</CustomBotton>
                
                {/* Save Options - Two buttons in a row */}
                <div className='flex flex-row gap-2'>
                    <CustomBotton bgColor="bg-indigo-500 hover:bg-indigo-600">Save</CustomBotton>
                    <CustomBotton bgColor="bg-indigo-400 hover:bg-indigo-500">Load</CustomBotton>
                </div>
                
                {/* Settings */}
                <CustomCheckBox>Autosave Run</CustomCheckBox>
                <CustomCheckBox>Debug Mode</CustomCheckBox>
                
            </div>
        </div>
    );
}
