import React from 'react'
import './SectionBlock.css'

function SectionBlock({ title, content }) {
  return (
    <div className="company__section-block">
        <h3 className="company__section-block-title">{title}</h3>
        <div className="company__section-block-content__container">
            {
                content.map((item) => (
                    <p className="company__section-block-content">{item}</p>
                ))
            }
        </div>
    </div>
  )
}

export default SectionBlock