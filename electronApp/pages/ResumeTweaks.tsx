import { useState, useEffect } from "react";
import fs from 'fs';
import YAML from 'yaml';
import { SessionData } from "react-router-dom";

const file = fs.readFileSync('../input/tempProj.yaml', 'utf8');
var yamlRawData = YAML.parse(file);
console.log(yamlRawData);

interface SectionProps {
    fieldKey: string | number;
    value: any;
    combinedPath?: string | number;

}

function RenderCVSection(props: SectionProps) {
    const { fieldKey, value, combinedPath } = props;

    //fix quote spaces
    console.log(combinedPath);

    const [descriptions, setDescriptions] = useState<string[]>([]);
    const isList = Array.isArray(value) && value.length > 1 && typeof value[0] == "string";

    useEffect(() => {
        if (isList) {
            setDescriptions(value);
        }
    }, []); 

    useEffect(() => {}, [descriptions]);

    return (
        <div className="w-full mb-2 bg-gray-100 rounded border p-2">
            {fieldKey.toString().length > 1 && <h3 className="font-semibold mb-2 text-lg">
                {fieldKey.toString().charAt(0).toUpperCase() + fieldKey.toString().slice(1)}
            </h3>}

            {typeof value === "object" ? 
                <>
                <div className="w-full">
                    {isList ? 
                        <>
                            {descriptions.map((desc, index) => <RenderCVSection fieldKey={index} combinedPath={combinedPath+"."+fieldKey+"["+index+"]"} key={index} value={desc} />)}
                            <button className="w-[70px] h-[40px] bg-gray-200 rounded-lg text-xl shadow-md"
                            onClick={() => setDescriptions(descriptions.concat([""]))}>
                                Add
                            </button>
                        </> :
                        Object.entries(value).map(([entryKey, entryValue]) => <RenderCVSection fieldKey={entryKey} combinedPath={combinedPath+"."+entryKey} key={entryKey} value={entryValue} />)
                    }
                </div>
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
    return (
        <div className='w-full h-full p-4 overflow-y-auto'>
            {Object.entries(yamlRawData.cv).map(([key, value]) => 
                <RenderCVSection fieldKey={key} combinedPath={"yamlRawData.cv."+key} key={key} value={value} />
            )}
            <button className="fixed bottom-4 right-4 px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 z-50">
                Save
            </button>
        </div>
    );
}