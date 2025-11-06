import { useState, useEffect } from "react";
import fs from 'fs';
import YAML from 'yaml';

const file = fs.readFileSync('../input/tempProj.yaml', 'utf8');
var yamlRawData = YAML.parse(file);
let colorCounter = 0;
console.log(yamlRawData);

interface SectionProps {
    fieldKey: string | number;
    value: any;
    combinedPath?: string | number;
    onDelete?: () => void;
}

function RenderCVSection(props: SectionProps) {
    const { fieldKey, value, combinedPath, onDelete } = props;
    
    // Increment counter and calculate background color - 0.5% darker each time
    colorCounter++;
    const bgIntensity = Math.max(255 - (colorCounter * 1), 100);
    const bgColor = `rgb(${bgIntensity}, ${bgIntensity}, ${bgIntensity})`;
    const [descriptions, setDescriptions] = useState<string[]>([]);
    const isList = Array.isArray(value) && value.length > 1 && typeof value[0] == "string";

    useEffect(() => {
        if (isList) {
            setDescriptions(value);
        }
    }, []); 

    useEffect(() => {}, [descriptions]);

    return (
        <div className="w-full mb-2 rounded border p-2" style={{ backgroundColor: bgColor }}>
            {fieldKey.toString().length > 1 && <h3 className="font-semibold mb-2 text-lg">
                {fieldKey.toString().charAt(0).toUpperCase() + fieldKey.toString().slice(1)}
            </h3>}

            {typeof value === "object" ? 
                <>
                <div className="w-full">
                    {isList ? 
                        <>
                            {descriptions.map((desc, index) => <RenderCVSection 
                                fieldKey={index} 
                                combinedPath={combinedPath+"["+index+"]"} 
                                key={index} 
                                value={desc}
                                onDelete={() => setDescriptions(descriptions.filter((_, idx) => idx !== index))} 
                            />)}
                            <button className="w-[70px] h-[40px] bg-gray-200 rounded-lg text-xl shadow-md"
                            onClick={() => setDescriptions(descriptions.concat(["                                                                                                                                                                "]))}>
                                Add
                            </button>
                        </> :
                        Object.entries(value).map(([entryKey, entryValue]) => <RenderCVSection 
                        fieldKey={entryKey} 
                        combinedPath={isNaN(Number(entryKey)) ? (entryKey.includes(" ") ? combinedPath+`["${entryKey}"]` : combinedPath+"."+entryKey) : combinedPath+"["+entryKey+"]"} 
                        key={entryKey} 
                        value={entryValue} />)
                    }
                </div>
                </> : 
                (value.length > 100 ? 
                    <span className="w-full flex flex-row">
                    <textarea 
                        rows={2} 
                        className='w-auto flex-1 border rounded p-1' 
                        defaultValue={value}
                    />
                    {onDelete && (
                        <button className="w-[60px] h-[30px] ml-2 bg-gray-200 rounded-lg text-md shadow-md"
                            onClick={onDelete}
                        >
                            Delete
                        </button>
                    )}
                    </span>
                    : 
                    <span className="w-full flex flex-row">
                    <input 
                        type='text' 
                        className='w-auto flex-1 border rounded p-1' 
                        defaultValue={value}
                    />
                    </span>
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