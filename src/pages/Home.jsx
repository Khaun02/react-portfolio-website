import ProjectCard from "../components/ProjectCard/ProjectCard"
import ProfileCard from "../components/ProfileCard/ProfileCard"

function Home() {

    const projects = [
        { id: 1, title: "Shaun's Portfolio Webiste (Archived)", description: "My old portfolio website created with vanilla HTML, CSS, and Javascript." },
        { id: 2, title: "Choua's Portfolio Website", description: "Website that showcases Choua's skills, experience, and contact information." },
        { id: 3, title: "Crown Coffee Website", description: "Final project created for Website Development course for a ficticious coffee website." }
    ]

    return (
        <main className="content">
            <ProfileCard />
            <div className="movies-row">
                {projects.map(project => <ProjectCard project={project} key={project.id} />)}
            </div>
        </main>
    )
}

export default Home