import React from 'react'
import './SectionBlock.css'

function SectionBlock({ title, content }) {
  return (
    <div className="company__section-block">
        <h3 className="company__section-block-title">{title}</h3>
        <p className="company__section-block-content">{content}</p>
    </div>
  )
}

export default SectionBlock