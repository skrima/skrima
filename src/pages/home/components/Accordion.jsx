import React, { Fragment, useState } from "react";
import "./Accordion.css";
import { FaSquare, FaPlus, FaMinus } from "react-icons/fa";

function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Fragment>
      <div className="accordion-item">
        <div
          className={expanded ? "accordion-title show" : "accordion-title"}
          onClick={() => setExpanded(!expanded)}
        >
          <h2>{title}</h2>
          {expanded ? <FaMinus /> : <FaPlus />}
        </div>
        <div className="accordion-item__line" />
        <div
          className={expanded ? "accordion-content show" : "accordion-content"}
        >
          {content.map((x, i) => {
            return (
              <div key={i} className="accordion-content__item">
                <FaSquare className="accordion-content__icon" />
                <p className="accordion-content__text">{x}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Accordion;
