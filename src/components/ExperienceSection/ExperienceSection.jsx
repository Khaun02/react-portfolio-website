import Experience from "./Experience"

function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="m-8">Experience</h1>
            <section>
                <Experience experience={{ website: "https://chouazyang.netlify.app/", date: "May 2025 - May 2025", description: "A clean, mobile-friendly portfolio built for a classmate to showcase their professional background. Designed using HTML, CSS, and JavaScript with a focus on structure, readability, and responsive layout." }} />
                <Experience experience={{ website: "https://crown-coffee-khang.netlify.app/", date: "February 2025 - March 2025", description: "A fictional coffee shop website created to practice front-end design and web accessibility. Implemented interactive UI components using vanilla JavaScript and styled with custom CSS animations." }} />
                <Experience experience={{ website: "https://shaunkhang.netlify.app/", date: "February 2025 - March 2025", description: "Vanilla HTML, CSS, and Javascript portfolio website I created for myself" }} />
            </section>
        </>
    )
}

export default ExperienceSection