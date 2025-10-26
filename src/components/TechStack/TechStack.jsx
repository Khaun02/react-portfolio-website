import ProgrammingLanguages from "../LanguageCarousel/ProgrammingLanguages"

function TechStack() {
    return (
        <div className="mt-16">
            <h1 id="what-i-work-wth" className="m-8">What I work with</h1>
            <ProgrammingLanguages type="frontend"/>
            <ProgrammingLanguages type="backend"/>
        </div>
    )
}

export default TechStack