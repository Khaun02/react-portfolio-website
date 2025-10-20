import "./ExperienceSection.css"

function Experience({ experience }) {
    return (
        <div className="experience_card">
            <a href={experience.website} className="font-medium mb-1 sm:mb-0">{experience.website}</a>
            <p className="text-xl font-bold text-slate-100">Full Stack Web Developer</p>
            <p className="text-sm text-slate-400">{experience.date}</p>
            <p className="text-slate-300 timeline-content">{experience.description}</p>
        </div>
    )
}

export default Experience