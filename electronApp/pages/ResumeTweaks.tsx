import { useState } from "react";
import fs from 'fs';
import YAML from 'yaml';

const file = fs.readFileSync('../input/tempProj.yaml', 'utf8');
var yamlRawData = YAML.parse(file);

for (const child of Object.values(yamlRawData.cv)) {
    console.log(child);
}

// Background gradient map for progressive darkening with consistent right side
const backgroundMap: { [key: number]: string } = {
    0: 'linear-gradient(to right, rgb(249, 250, 251), rgb(229, 231, 235))', // from-gray-50 to-gray-200
    1: 'linear-gradient(to right, rgb(243, 244, 246), rgb(229, 231, 235))', // from-gray-100 to-gray-200
    2: 'linear-gradient(to right, rgb(238, 240, 242), rgb(229, 231, 235))', // slightly darker custom gray
    3: 'linear-gradient(to right, rgb(229, 231, 235), rgb(229, 231, 235))', // from-gray-200 to-gray-200
    4: 'linear-gradient(to right, rgb(215, 218, 222), rgb(229, 231, 235))', // slightly darker custom gray
    5: 'linear-gradient(to right, rgb(209, 213, 219), rgb(229, 231, 235))', // from-gray-300 to-gray-200
};

function renderCVSection([key, value]: [string, any], depth: number = 0) {
    if (value === undefined) return "";
    
    const bgClass = backgroundMap[Math.min(depth, 5)] || 'bg-gradient-to-r from-gray-500 to-gray-200';
    
    return (
        <div key={key} className="w-full md:w-[80vw] lg:w-[65vw] h-auto flex flex-col rounded-lg mb-2 mt-1 pl-2 p-1" style={{ background: bgClass }}>
            {key.length > 1 && <h1 className="text-2xl font-semibold mb-1">{key.charAt(0).toUpperCase() +key.slice(1)}</h1>}
            {typeof value == "object" ? Object.entries(value).map(entry => renderCVSection(entry, depth + 1)) : 
            (value.length > 100 ? 
                <textarea rows={3} 
                className='w-full p-2  pl-3
                bg-gradient-to-r from-slate-50 to-gray-200
                rounded-md resize-none' placeholder='write content here...;' defaultValue={value}/>
                : <input type='text' 
                className='w-full p-1 rounded-md pl-3
                bg-gradient-to-r from-slate-50 to-gray-200' 
                placeholder='write content here...;' defaultValue={value}/>)
            }
        </div>
    );
}

export function ResumeTweaks() {
    const [resumeInfo, setResumeInfo] = useState({});
    return (
        <div className='w-full h-full bg-gray-200 flex flex-col items-center p-4 space-y-4 overflow-y-scroll rounded-sm'>
            {Object.entries(yamlRawData.cv).map(renderCVSection)}
        </div>
    );
}
