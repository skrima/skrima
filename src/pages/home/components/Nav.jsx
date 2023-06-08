import React, { useState } from "react";
import "./Nav.css";
import SvgFullColored from "../../../assets/logo/FullColored";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item logo__container">
          <Link to={"/"} className="nav__link">
            <SvgFullColored className="logo" />
          </Link>
        </li>
        <li className="nav__item nav__company">
          <Link to={"/"} className="nav__link">
            Company
          </Link>
        </li>
        <li className="nav__item nav__products">
          <Link to={"/"} className="nav__link">
            Products
          </Link>
        </li>
        <li className="nav__item nav__services">
          <Link to={"/"} className="nav__link">
            Services
          </Link>
        </li>
        <li className="nav__item nav__events">
          <Link to={"/"} className="nav__link">
            Events
          </Link>
        </li>
        <li className="nav__item nav__gallery">
          <Link to={"/"} className="nav__link">
            Gallery
          </Link>
        </li>
        <li className="nav__item nav__community">
          <Link to={"/"} className="nav__link">
            Community
          </Link>
        </li>
        <li className="nav__item nav__support">
          <Link to={"/"} className="nav__link">
            Support
          </Link>
        </li>
        <li className="nav__item nav__exam">
          <Link to={"/"} className="nav__link">
            Exam Registration
          </Link>
        </li>
        <li className="nav__item nav__blog">
          <Link to={"/"} className="nav__link">
            Blog
          </Link>
        </li>
        <li className={`nav__item nav__menu ${menuOpen ? "_open" : ""}`} onClick={menuHandler}>
          { menuOpen ? <FaTimes /> : <FaBars /> }
        </li>
        <li className="nav__item nav__contact">
          <Link to={"/"} className="nav__link contact-us">
            Contact Us
          </Link>
        </li>
      </ul>
      <div className={`nav__menu__container ${menuOpen ? "_open" : ""}`}>
        <ul className="nav__menu">
          <li className="nav__menu__item">
            <Link to={"/"} className="nav__menu__link">
              Company
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/"} className="nav__menu__link">
              Products
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/"} className="nav__menu__link">
              Services
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/"} className="nav__menu__link">
              Events
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/"} className="nav__menu__link">
              Gallery
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/"} className="nav__menu__link">
              Community
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/"} className="nav__menu__link">
              Support
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/"} className="nav__menu__link">
              Exam Registration
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/"} className="nav__menu__link">
              Blog
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/"} className="nav__menu__link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
