import React from "react";
import "./Hero.css";

const Hero = ({ id }) => {
  return (
    <>
      <section id={id} className="hero-container">
        <div className="hero-content">
          <h2>Welcome, I'm Amir Sarukhanov</h2>
          <p>
            I'am an innovative web developer dedicated to creating inspiring,
            user-friendly, and intuitively designed digital interfaces that
            enhance user experience.
          </p>
        </div>
        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img src="./src/assets/react.png" alt="" />
            </div>
            <img src="./src/assets/avatar.png" alt="anime portrait" />
          </div>

          <div>
            <div className="tech-icon">
              <img src="./src/assets/css.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./src/assets/html.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./src/assets/javascript.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
