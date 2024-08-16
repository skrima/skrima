import React from "react";
import Accordion from "../components/Accordion";
import { overviewData } from "../data/overview-data";
import Button from "../components/Button";

function Overview() {
  return (
    <section className="overview-section">
      <div className="accordion">
        {overviewData.content.map((x, i) => {
          return (
            <Accordion
              key={i}
              title={overviewData.titles[i]}
              content={x.map((x) => x.title)}
            />
          );
        })}
      </div>

      {/* <Button text="Contact Us" /> */}
    </section>
  );
}

export default Overview;
