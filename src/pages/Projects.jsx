import ProjectSection from "../components/ProjectSection/ProjectSection"
import useTitle from "../components/DynamicTitle/useTitle";

function Projects() {
    useTitle("Projects");
    return (
        <main className="content">
            <h1 className="mb-0">Projects</h1>
            <p className="mt-1 text-gray-400 mb-4">These are my projects on which I try to work actively.</p>
        </main>
    )
}

export default Projects