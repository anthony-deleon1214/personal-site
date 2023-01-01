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
                            B.S., Biochemistry and Molecular Biology (Graduated December 2018)
                        </li>
                        <li className="font-bold mx-4">Oregon State University</li>
                        <li className="mx-8">Post-bacc coursework in Computer Science</li>
                        <li className="mx-12 font-light text-sm">Courses include Data Structures, Computer Architecture and Assembly Language, Web Development</li>
                    </ul>
                </div>
                <div className="resume-section">
                    <h1 className="text-3xl underline p-4">Work Experience</h1>
                    <ul>
                        <li className="font-bold mx-4">File Specialist</li>
                        <li className="mx-4 font-light">File Focus LLC</li>
                        <li className="list-disc mx-12">Relocate files, books, and documents to allow for renovations</li>
                        <li className="font-bold mx-4">Writing Tutor</li>
                        <li className="mx-4 font-light">UMBC Writing Center</li>
                        <li className="font-light mx-12 list-disc">Discuss writing issues with students</li>
                        <li className="font-bold mx-4">Research Technologist</li>
                        <li className="mx-4 font-light">Johns Hopkins University</li>
                        <li className="font-light mx-12 list-disc">Maintain cultures of human stem cells for use in experiments</li>
                        <li className="font-light mx-12 list-disc">Perform various tests on cell samples, including flow cytometry and qPCR</li>
                    </ul>
                </div>
                <div className="resume-section">
                    <h1 className="text-3xl underline p-4">Projects</h1>
                    <ul className="list-disc mx-8">
                        <li className="font-light">Chip-8 Interpreter (Javascript)</li>
                        <li className="font-light">Hash Map Implementations (Python)</li>
                        <li className="font-light">Personal Website (Typescript using React and Next.js)</li>
                    </ul>
                </div>
                <div className="resume-section">
                    <h1 className="text-3xl underline p-4">Certifications</h1>
                    <ul className="list-disc mx-8">
                        <li className="font-light">College Reading and Learning Association Level 1</li>
                        <li className="font-light">Data Analytics and Visualization in Python (IBM program through Coursera)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;