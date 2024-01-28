import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Buinding Digital Experiences That Inspire</h2>
          <p>
            Passionate Frontend Developer | Transforming Ideas Into Seamles and
            Visually Stunnig Web Solutions
          </p>
        </div>
        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img src="./public/assets/react.png" alt="" />
            </div>
            <img src="./public/assets/avatar.png" alt="anime portrait" />
          </div>

          <div>
            <div className="tech-icon">
              <img src="./public/assets/css.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./public/assets/html.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./public/assets/javascript.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
