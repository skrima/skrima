import React from 'react'
import { Link } from 'react-router-dom'
import './FooterSocial.css'

function FooterSocial({ Icon, text, link }) {
  return (
    <Link to={link} className='social__link'>
        <Icon className='social__icon' />
        <p className='social__text'>{text}</p>
    </Link>
  )
}

export default FooterSocial