import Sidebar from "../components/Sidebar";

function Resume() {
    return (
        <div className="flex h-screen w-screen dark:bg-slate-800 scroll:min-h-screen overscroll-contain">
            <Sidebar />
            <div className="resume-grid-container">
                <div className="resume-section">
                    <h1 className="text-3xl underline p-4">Work Experience</h1>
                </div>
                <div className="resume-section"></div>
                <div className="resume-section"></div>
                <div className="resume-section"></div>
            </div>
        </div>
    )
}

export default Resume;