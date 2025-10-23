import ProjectSection from "../components/ProjectSection/ProjectSection"
import useTitle from "../components/DynamicTitle/useTitle";

function Projects() {
    useTitle("Projects");
    return (
        <main className="content">
            <h1 className="mb-0">Projects</h1>
            <p className="mt-1 text-gray-400 mb-4">These are my projects on which I try to work actively.</p>
            <h1 className="mt-4">Archived projects</h1>
            <p className="mt-1 text-gray-400 mb-4">These are projects that have been finished or that I'm not working on anymore</p>
            <ProjectSection pageType="software" />
        </main>
    )
}

export default Projects