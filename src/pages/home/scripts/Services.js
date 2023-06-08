import React, { useState } from "react";
import SvgTriangle from "../components/Triangle";
import "../styles/index.css";
import { whatwedo } from "../data/overview-data";
import ServicesCard from "../components/ServicesCard";
import { exams } from "../data/services-data";
import ExamCard from "../components/ExamCard";
import Button from "../components/Button";

function Services() {
  const [selected, setSelected] = useState(whatwedo[0].title);

  return (
    <section className="services-section">
      <div className="services-background">
        <SvgTriangle />
      </div>
      <div className="services-container">
        <div className="services-line" />
        <div className="services-line2" />
        <div className="services-title">
          <h2>Our Services</h2>
          <p>
            SKRIMA offers transformative services for individuals, businesses,
            and educational institutions. From website development to
            automation, design, social media, AI integration, and international
            exam registration, our tailored solutions drive results.
            Collaborating closely with clients, we streamline processes, enhance
            online presence, and navigate exam registrations. Experience
            SKRIMA's expertise and unlock your full potential.
          </p>
        </div>
        <div className="services-content">
          <div className="services-content__left">
            <div className="services-content__left__item">
              <div className="services-card__container">
                {whatwedo.map((item, index) => {
                  return (
                    <ServicesCard
                      key={index}
                      title={item.title}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="services-content__right">
            <div className="services-content__right__item">
              <img
                src={whatwedo.find((item) => item.title === selected).img}
                alt="services"
              />
              <div className="services-content__right__item__text">
                <p>
                  {whatwedo.find((item) => item.title === selected).content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="exam-container">
          <h3 className="exam-container__title">Exams</h3>
          <div className="exam-card__container">
            {exams.map((item, index) => {
              return <ExamCard key={index} title={item.title} />;
            })}
          </div>
          <Button text={"Register"} type={1} />
        </div>
      </div>
    </section>
  );
}

export default Services;
