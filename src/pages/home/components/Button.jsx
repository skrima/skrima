import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button({text, type, link}) {
    let variation = "";
    if (type === 1) {
        variation = "yellow";
    }
    else if (type === 2) {
        variation = "green";
    }

  return (
    <Link className={`home-page__button ${variation}`}>
        {text}
    </Link>
  )
}

export default Button