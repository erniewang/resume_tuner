import { useState } from "react";
import fs from 'fs';
import YAML from 'yaml';

const file = fs.readFileSync('../input/tempProj.yaml', 'utf8');
var yamlRawData = YAML.parse(file);

// Optional: You can keep this or remove it — no effect on React
for (const child of Object.values(yamlRawData.cv)) {
    console.log(child);
}

// 🔁 Moved mapping function here
function renderCVSection([key, value]: [string, any]) {
    if (value === undefined) return "";
    return (
        <div key={key} className="w-full md:w-[80vw] lg:w-[65vw] h-auto flex flex-col p-1 pl-3 rounded-sm">
            {key.length > 1 && <h1 className="text-2xl font-medium">{key.charAt(0).toUpperCase() +key.slice(1)}</h1>}
            {typeof value == "object" ? Object.entries(value).map(renderCVSection) : 
            (value.length > 100 ? 
                <textarea rows={3} className='w-auto p-1 rounded-md resize-none' placeholder='write content here...;' value={value}/> 
                : <input type='text' className='w-auto p-1 rounded-md' placeholder='write content here...;' value={value}/>)
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
