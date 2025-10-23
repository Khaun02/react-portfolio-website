import ProjectCard from '../ProjectCard/ProjectCard';
import "./ProjectSection.css"
import proj1 from '../../assets/project-images/proj1.png';
import proj2 from '../../assets/project-images/proj2.png';
import proj3 from '../../assets/project-images/proj3.png';
import software1 from '../../assets/project-images/software1.png';




function ProjectSection({ pageType }) {

    const projects = [
        { id: 1, title: "Shaun's Portfolio Website (Archived)", description: "Archived portfolio website for myself.", image_url: proj1, website_link: "https://skhang.dev/" },
        { id: 2, title: "Crown Coffee Website", description: "Website created for fictious company called Crown Coffee.", image_url: proj2, website_link: "https://chouazyang.netlify.app/" },
        { id: 3, title: " Choua's Portfolio Website", description: "Portfolio website created for Choua.", image_url: proj3, website_link: "https://crown-coffee-khang.netlify.app/" }
    ]

    const software = [
        { id: 1, title: "Python Teacher Contact Information Scraper", description: "Scraped 300+ teacher contacts using Python for the NSF S-STEM Scholarship outreach.", image_url: software1, website_link: "https://github.com/Khaun02/python-staff-web-scraper" }
    ]

    const itemsToDisplay = pageType === 'portfolio' ? projects : software;

    return (
        <div className="flex flex-col gap-4">
            {itemsToDisplay.map(item => <ProjectCard project={item} key={item.id} />)}
        </div>
    )
}

export default ProjectSection