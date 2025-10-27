import { bodyType } from "../../componets/contentBody";
import { JobDescriptionInput } from "./jobDescriptionInput";
import { ResumePreviewPanel } from "./resumePreviewPanel";
import { ControlPanel } from "./controlPanel";

export function OptimizeUI() {
    // Button click handlers
    const handleStart = () => {
        console.log("Start optimization");
        // Add your start logic here
    };

    const handleStop = () => {
        console.log("Stop optimization");
        // Add your stop logic here
    };

    const handlePreviewChanges = () => {
        console.log("Preview changes");
        // Add preview logic
    };

    const handleSaveResume = () => {
        console.log("Save resume");
        // Add save logic
    };

    const handleGenerateVariants = () => {
        console.log("Generate variants");
        // Add variant generation logic
    };

    const handleReset = () => {
        console.log("Reset");
        // Add reset logic
    };

    const handleExportPDF = () => {
        console.log("Export PDF");
        // Add PDF export logic
    };

    const actionHandlers = {
        'Preview Changes': handlePreviewChanges,
        'Save Resume': handleSaveResume,
        'Generate Variants': handleGenerateVariants,
        'Reset': handleReset,
        'Export PDF': handleExportPDF
    };

    return (
        <div className={bodyType}>
            <JobDescriptionInput />
            <ResumePreviewPanel />
            <ControlPanel 
                onStart={handleStart}
                onStop={handleStop}
                actionHandlers={actionHandlers}
            />
        </div>
    );
}