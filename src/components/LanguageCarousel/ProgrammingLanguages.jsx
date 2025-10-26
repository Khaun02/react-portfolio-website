import "./ProgrammingLanguage.css"
import SVGProg from "../SVGComponents/SVGProg"

function ProgrammingLanguages({ type }) {
  const frontEnd = ["HTML", "CSS", "JavaScript", "React"]
  const backEnd = ["NodeJS", "Git", "Java", "Python", "MySQL"]

  const itemsToDisplay = type === "frontend" ? frontEnd : backEnd

  return (
    <div className="carousel mt-8">
      <div className="card-group">
        {itemsToDisplay.map((lang) => (
          <SVGProg key={lang} language={lang} className="cards" />
        ))}
      </div>
    </div>
  )
}

export default ProgrammingLanguages
