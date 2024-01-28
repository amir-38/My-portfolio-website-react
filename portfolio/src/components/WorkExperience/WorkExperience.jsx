import React, { useRef } from "react";
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";
const WorkExperience = () => {
  const sliderRef = useRef();
  const settigs = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="experience-container">
      <h5>Work Experience</h5>
      <div className="experince-content">
        <div className="arrow-right" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>
        <Slider ref={sliderRef} {...settigs}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
