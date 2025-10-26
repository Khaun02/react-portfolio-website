import React from 'react'
import { SVG_MAP } from '../svg'

import "./SVGProg.css";

function SVGProg({ language }) {
  const Icon = SVG_MAP[language]

  if (!Icon) return null // if language doesn’t exist

  return (
    <div className="prog-card custom">
      <Icon className="custom"/>
      <span className="custom">{language}</span>
    </div>
  )
}

export default SVGProg
