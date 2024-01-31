import React from "react";
import "./MobileNav.css";
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="../public/assets/technology.png" alt="" />

          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skils</a>
            </li>
            <li>
              <a className="menu-item">Projects</a>
            </li>
            <li>
              <a className="menu-item">Contact</a>
            </li>
            <a
              href="../public/assets/Amir's Resume.pdf"
              className="download-link"
              download
            >
              <button className="contact-btn">Download CV</button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};
export default MobileNav;
