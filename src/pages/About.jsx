import Experience from "../components/ExperienceSection/Experience";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import AboutMe from "../components/AboutMe/AboutMe";
import StorySection from "../components/StorySection/StorySection"
import useTitle from "../components/DynamicTitle/useTitle";

function About() {
    useTitle("About");
    return (
        <main className="content">
            <AboutMe />
            <ExperienceSection />
        </main>
    )
}

export default About