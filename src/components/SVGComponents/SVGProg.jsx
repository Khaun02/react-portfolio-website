import React from 'react'
import { SVG_MAP } from '../svg'
import "./SVGProg.css"

function SVGProg({ language, showLanguage = true }) {
  const Icon = SVG_MAP[language]

  if (!Icon) return null

  return (
    <div className="prog-card custom">
      <Icon className="custom" />
      {showLanguage && <span className="custom">{language}</span>}
    </div>
  )
}

export default SVGProg
