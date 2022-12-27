import Link from "next/link";

function ProjectInfo({title, description, link}) {
    return (
        <div className="project-info">
            <h1 className="ml-2 text-3xl font-semibold underline">{title}</h1>
            <p className="ml-2 text-2xl font-light">{description}</p>
            <div className="ml-2 bg-gray-600 rounded-xl max-w-fit px-2 py-0.5 hover:bg-gray-800 hover:text-white">
                <Link href={link}>Source</Link>
            </div>
        </div>
    )
}

export default ProjectInfo;