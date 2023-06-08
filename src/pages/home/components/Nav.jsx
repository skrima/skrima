import React from "react";
import "./Nav.css";
import SvgFullColored from "../../../assets/logo/FullColored";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item logo__container">
          <Link to={"/"} className="nav__link">
            <SvgFullColored className="logo" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/"} className="nav__link">
            Company
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/"} className="nav__link">
            Products
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/"} className="nav__link">
            Services
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/"} className="nav__link">
            Events
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/"} className="nav__link">
            Gallery
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/"} className="nav__link">
            Community
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/"} className="nav__link">
            Support
          </Link>
        </li>
        <li className="nav__item exam-reg">
          <Link to={"/"} className="nav__link">
            Exam Registration
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/"} className="nav__link">
            Blog
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/"} className="nav__link contact-us">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
