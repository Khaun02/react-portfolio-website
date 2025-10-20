import "./ProjectCard.css";

function ProjectCard({ project }) {
    return (
        <a href={project.website_link} className="block w-full pcard">
            <div className="group relative w-full col-span-3 flex flex-col justify-between overflow-hidden rounded-xl transform-gpu bg-background [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] custom">
                <div className="project-image">
                    <img src={project.image_url} alt={project.title} className="absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-cover" />
                </div>
                <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 custom">
                    <h2 className="text-xl font-semibold m-0 custom">{project.title}</h2>
                    <p className="max-w-lg text-neutral-400 m-0 custom">{project.description}</p>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
