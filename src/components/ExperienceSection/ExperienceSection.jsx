import Experience from "./Experience"

function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="m-8">Experience</h1>
            <section>
                <Experience experience={{ website: "https://chouazyang.netlify.app/", date: "May 2025 - May 2025", description: "Vanilla HTML, CSS, and Javascript portfolio website I created for myself" }} />
                <Experience experience={{ website: "https://crown-coffee-khang.netlify.app/", date: "February 2025 - March 2025", description: "Vanilla HTML, CSS, and Javascript portfolio website I created for myself" }} />
                <Experience experience={{ website: "https://skhang.dev", date: "February 2025 - March 2025", description: "Vanilla HTML, CSS, and Javascript portfolio website I created for myself" }} />
            </section>
        </>
    )
}

export default ExperienceSection