import React from 'react'
import { pictures } from "../data/picture-data";
import PicturePreview from '../components/PicturePreview'
import '../styles/Grid.css'

function Grid() {
  return (
    <div className='gallery-grid__container'>
        <main className='gallery-grid__main'>
        {
            pictures.map((picture, index) => {
                return <PicturePreview key={index} picture={picture} />
            })
        }
        </main>
    </div>
  )
}

export default Grid