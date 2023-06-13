import React from 'react'
import { Link } from 'react-router-dom'
import './Legal.css'

function Copyright() {
  return (
    <div className="footer-legal">
      <small>
        © 2023 SKRIMA. All rights reserved. <div className="legal__break" />
        <span className="legal__pipe">|</span>{" "}
        <Link to={"/privacy-policy"}>Privacy Policy</Link> |{" "}
        <Link to={"/terms"}>Terms of Service</Link> |{" "}
        <Link to={"/credits"}>Image Credits</Link>
      </small>
    </div>
  )
}

export default Copyright