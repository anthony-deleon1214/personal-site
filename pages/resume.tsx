import Sidebar from "../components/Sidebar";

function Resume() {
    return (
        <div className="flex flex-col grow min-h-screen w-screen dark:bg-slate-800">
            <Sidebar />
            <div className="resume-grid-container">
                <div className="resume-section">
                    <h1 className="text-3xl underline p-4">Education</h1>
                    <ul className="list">
                        <li className="font-bold mx-4">
                            University of Maryland, Baltimore County
                        </li>
                        <li className="mx-8">
                            B.S., Biochemistry and Molecular Biology
                        </li>
                    </ul>
                </div>
                <div className="resume-section">
                    <h1 className="text-3xl underline p-4">Work Experience</h1>
                </div>
                <div className="resume-section">
                    <h1 className="text-3xl underline p-4">Projects</h1>
                </div>
                <div className="resume-section">
                    <h1 className="text-3xl underline p-4">Certifications</h1>
                </div>
            </div>
        </div>
    )
}

export default Resume;