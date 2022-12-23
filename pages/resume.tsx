import Sidebar from "../components/Sidebar";

function Resume() {
    return (
        // Placeholder so I don't flashbang myself
        <div className="flex h-screen w-screen dark:bg-slate-800">
            <Sidebar />
            <div className="header">
                <span className="nameplate">Anthony Deleon</span>
            </div>
        </div>
    )
}

export default Resume;