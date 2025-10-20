
import ProjectSection from "../components/ProjectSection/ProjectSection"
import useTitle from "../components/DynamicTitle/useTitle";

function Portfolio() {
    useTitle("My work");
    return (
        <main className="content">
            <h1 className="mb-0">My work</h1>
            <p className="mt-1 text-gray-400 m-4">Some websites that I've worked on.</p>
            <ProjectSection />
        </main>
    )
}

export default Portfolio