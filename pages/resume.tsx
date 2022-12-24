import Sidebar from "../components/Sidebar";

function Resume() {
    return (
        // TODO: Implement as a CSS grid
        <div className="flex h-screen w-screen dark:bg-slate-800 -z-0">
            <Sidebar />
            <div className="header">
                <span className="nameplate">Anthony Deleon</span>
            </div>
            <div className="resume-content">

            </div>
        </div>
    )
}

export default Resume;