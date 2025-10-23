import ProjectSection from "../components/ProjectSection/ProjectSection.jsx";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import TechStack from "../components/TechStack/TechStack.jsx"
import ExperienceSection from "../components/ExperienceSection/ExperienceSection.jsx"
import useTitle from "../components/DynamicTitle/useTitle.jsx";

function Home() {
    useTitle("");
    return (
        <main className="content">
            <ProfileCard />
            <TechStack />
            <ExperienceSection />
            <h1 className="m-8">My work</h1>
            <ProjectSection pageType="portfolio" />
            <h1 className="m-8">My personal projects</h1>
            <ProjectSection pageType="software" />
        </main>
    )
}

export default Home