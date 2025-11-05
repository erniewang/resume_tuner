import { useState, useEffect } from "react";
import fs from 'fs';
import YAML from 'yaml';

const file = fs.readFileSync('../input/tempProj.yaml', 'utf8');
var yamlRawData = YAML.parse(file);

function RenderCVSection(props: any) {
    const [key, value] = Object.entries(props)[0] as [string, any];
    
    // Helper to create props object from key-value pair
    // Instead of the fucked up syntax: {...{[key]: value}}
    const createProps = (k: string | number, v: any) => ({ [k]: v });

    //pass a function that updates the state of the main div
    const [descriptions, setDescriptions] = useState<string[]>([]);
    //[] alone would be treated as never[] by typescript

    if (value === undefined) return "";

    useEffect(() => {
        if (Array.isArray(value) && value.length > 1 && typeof value[0] == "string") {
            setDescriptions(value);
        }
    }, []); 

    useEffect(() => {
        //console.log(descriptions);
    }, [descriptions]); 

    return (
        <div className="w-full mb-2 bg-gray-100 rounded border p-2">
            {key.length > 1 && <h3 className="font-semibold mb-2 text-lg">
                {key.charAt(0).toUpperCase() + key.slice(1)}
            </h3>}
            {typeof value === "object" ? 
                <>
                <div className="w-full">
                    {(Array.isArray(value) && value.length > 1 && typeof value[0] == "string") ? 
                        descriptions.map((desc, index) => <RenderCVSection key={index} {...createProps(index, desc)} />) :
                        Object.entries(value).map(([entryKey, entryValue]) => <RenderCVSection key={entryKey} {...createProps(entryKey, entryValue)} />)
                    }
                </div>
                {(Array.isArray(value) && value.length > 1 && typeof value[0] == "string") && 
                <button className="w-[70px] h-[40px] bg-gray-200 rounded-lg text-xl shadow-md"
                onClick={() => setDescriptions(descriptions.concat([""]))}
                >
                    Add
                </button>}
                </> : 
                (value.length > 100 ? 
                    <textarea 
                        rows={3} 
                        className='w-full border rounded p-1' 
                        defaultValue={value}
                    />
                    : <input 
                        type='text' 
                        className='w-full border rounded p-1' 
                        defaultValue={value}
                    />
                )
            }
        </div>
    );
}

export function ResumeTweaks() {
    const [resumeInfo, setResumeInfo] = useState(yamlRawData.cv);
    
    // Helper to create props - same as the one in RenderCVSection
    // Instead of the fucked up syntax: {...{[key]: value}}
    const createProps = (k: string, v: any) => ({ [k]: v });
    
    return (
        <div className='w-full h-full p-4 overflow-y-auto'>
            {Object.entries(yamlRawData.cv).map(([key, value]) => 
                <RenderCVSection key={key} {...createProps(key, value)} />
            )}
            <button className="fixed bottom-4 right-4 px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 z-50">
                Save
            </button>
        </div>
    );
}
