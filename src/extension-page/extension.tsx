import { useRef, useEffect, useState } from "react"
import { extensionBase, inputArea, eButton, buttonGroup } from "./extensionStyles";
export default function Extension() {
    const userInput = useRef<HTMLTextAreaElement>(null);
    const [resumeSelect, setResumeSelect] = useState(false);
    useEffect(() => {
        //need to specify, because getElementByID returns generic HTML type.
        userInput.current = document.getElementById("extensionInputArea") as HTMLTextAreaElement;
    }, []); 

    return (
        !resumeSelect ? 
        <div className={extensionBase}>
            <p><b>Extension</b></p>
            <textarea 
                className={inputArea} id="extensionInputArea"></textarea>
            <div className={buttonGroup}>
                <button 
                    onClick={() => {
                        //Done
                        if (userInput.current) userInput.current.value = "";
                    }}
                    style={{background: "rgb(214, 214, 206)"}}
                    className={eButton}>Clear Form</button>
                <button 
                    style={{background: "rgb(221, 221, 221)"}}
                    onClick={() => {
                        console.log("sending info to server my man");
                        //Calls the server
                    }}
                    className={eButton}>Optimize</button>
                <button 
                    style={{background: "rgb(182, 182, 177)"}}
                    onClick={() => {
                        //goes to the resume header page, which will also be client side
                        window.open('http://localhost:5173', '_blank');
                    }}
                    className={eButton}><small>Resume Editor</small></button>
                <button 
                    onClick={() => {
                        //should reveal a list of resumes that can be selected. so you can have different people's resumes and use the application. 
                        setResumeSelect(true);
                    }}
                    className={eButton}><small>Select Resume</small></button>
            </div>
        </div> : 
        <div className={extensionBase}>
            worry about later type shit
        </div>
    )
}

