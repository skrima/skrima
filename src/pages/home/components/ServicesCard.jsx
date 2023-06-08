import React from 'react'
import './ServicesCard.css'

function ServicesCard({ title, selected, setSelected }) {

    const clickHandler = () => {
        setSelected(title)
    }

  return (
    <div className={`services-card__item ${title === selected ? 'active' : ''}`} onClick={clickHandler}>
        <p className='services-card__text'>{title}</p>
    </div>
  )
}

export default ServicesCard