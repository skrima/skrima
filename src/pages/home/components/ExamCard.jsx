import React from 'react'
import './ExamCard.css'

function ExamCard({ title }) {
  return (
    <div className='exam-card__item'>
        <h2 className='exam-card__title'>{title}</h2>
    </div>
  )
}

export default ExamCard