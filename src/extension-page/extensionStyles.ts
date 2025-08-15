export const extensionBase:string = 
    `w-[300px] h-[calc(min(96vh,600px))] 
    bg-white rounded-md m-[2vh]
    flex flex-col items-center justify-start gap-2
    text-black p-2`;


export const inputArea:string = `
    w-full
    flex-1
    min-h-[40px]
    bg-gray-100
    rounded-md
    text-black
    p-2
    overflow-y-scroll
    overflow-x-none
`;
export const buttonGroup:string = `
    w-full h-[120px] 
    bg-gray-700 rounded-md
    grid grid-cols-2 grid-rows-[2fr,1fr]
    overflow-hidden
    min-h-[30px]
`;

export const eButton:string = `
    w-full h-full
    bg-gray-300
    hover:opacity-50
    flex items-center justify-center
    text-xl text-black
    active:opacity-20
`;
//extensionInputArea is the id
