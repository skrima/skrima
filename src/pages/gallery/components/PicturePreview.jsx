import React from 'react'
import './PicturePreview.css'

function PicturePreview({ picture }) {
  return (
    <div className='gallery-pic'>
        <img src={picture.src} alt={picture.alt} />
    </div>
  )
}

export default PicturePreview