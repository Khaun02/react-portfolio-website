import "./ProjectCard.css";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.url} alt={project.title} />
            </div>
            <div className="project-title">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
