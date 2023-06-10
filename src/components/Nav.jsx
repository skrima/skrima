import React, { Fragment, useEffect, useState } from "react";
import "./Nav.css";
import SvgFullColored from "../assets/logo/FullColored";
import SvgFullWhite from "../assets/logo/FullWhite";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(""); 
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/").slice(-1)[0];
    setSelected(path);
  }, [location.pathname]);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Fragment>
      <div className="nav">
      <ul className="nav__list">
        <li className="nav__item logo__container">
          <Link to={"/"} className="nav__link">
            {selected === "" ? <SvgFullColored /> : <SvgFullWhite />}
          </Link>
        </li>
        <li className="nav__item nav__company">
          <Link to={"/company"} className={`nav__link nav__company ${selected === "company" ? "_selected" : ""}`}>
            Company
          </Link>
        </li>
        <li className="nav__item nav__products">
          <Link to={"/products"} className={`nav__link nav__products ${selected === "products" ? "_selected" : ""}`}>
            Products
          </Link>
        </li>
        <li className="nav__item nav__services">
          <Link to={"/services"} className={`nav__link nav__services ${selected === "services" ? "_selected" : ""}`}>
            Services
          </Link>
        </li>
        <li className="nav__item nav__events">
          <Link to={"/events"} className={`nav__link nav__events ${selected === "events" ? "_selected" : ""}`}>
            Events
          </Link>
        </li>
        <li className="nav__item nav__gallery">
          <Link to={"/gallery"} className={`nav__link nav__gallery ${selected === "gallery" ? "_selected" : ""}`}>
            Gallery
          </Link>
        </li>
        <li className="nav__item nav__community">
          <Link to={"/community"} className={`nav__link nav__community ${selected === "community" ? "_selected" : ""}`}>
            Community
          </Link>
        </li>
        <li className="nav__item nav__support">
          <Link to={"/support"} className={`nav__link nav__support ${selected === "support" ? "_selected" : ""}`}>
            Support
          </Link>
        </li>
        <li className="nav__item nav__exam">
          <Link to={"/exam"} className={`nav__link nav__exam ${selected === "exam" ? "_selected" : ""}`}>
            Exam Registration
          </Link>
        </li>
        <li className="nav__item nav__blog">
          <Link to={"/blog"} className={`nav__link nav__blog ${selected === "blog" ? "_selected" : ""}`}>
            Blog
          </Link>
        </li>
        <li
          className={`nav__item nav__menu ${menuOpen ? "_open" : ""}`}
          onClick={menuHandler}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </li>
        <li className={`nav__item nav__contact ${selected === "contact" ? "_selected" : ""}`}>
          <Link to={"/contact"} className="nav__link contact-us">
            Contact Us
          </Link>
        </li>
      </ul>
      <div className={`nav__menu__container ${menuOpen ? "_open" : ""}`}>
        <ul className="nav__menu">
          <li className="nav__menu__item">
            <Link to={"/company"} className={`nav__menu__link ${selected === "company" ? "_selected" : ""}`}>
              Company
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/products"} className={`nav__menu__link ${selected === "products" ? "_selected" : ""}`}>
              Products
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/services"} className={`nav__menu__link ${selected === "services" ? "_selected" : ""}`}>
              Services
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/events"} className={`nav__menu__link ${selected === "events" ? "_selected" : ""}`}>
              Events
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/gallery"} className={`nav__menu__link ${selected === "gallery" ? "_selected" : ""}`}>
              Gallery
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/community"} className={`nav__menu__link ${selected === "community" ? "_selected" : ""}`}>
              Community
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/support"} className={`nav__menu__link ${selected === "support" ? "_selected" : ""}`}>
              Support
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/exam"} className={`nav__menu__link ${selected === "exam" ? "_selected" : ""}`}>
              Exam Registration
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/blog"} className={`nav__menu__link ${selected === "blog" ? "_selected" : ""}`}>
              Blog
            </Link>
          </li>
          <li className="nav__menu__item">
            <Link to={"/contact"} className={`nav__menu__link ${selected === "contact" ? "_selected" : ""}`}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <Outlet />
    </Fragment>
  );
}

export default Nav;
