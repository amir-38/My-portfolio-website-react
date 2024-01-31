import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const smoothScrollTo = (targetY, duration) => {
    const startingY = window.pageYOffset;
    const diff = targetY - startingY;
    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      let percent = Math.min(time / duration, 1);

      window.scrollTo(0, startingY + diff * percent);

      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const scrollToSection = (sectionId) => () => {
    const section = document.getElementById(sectionId);
    const navbarHeight = 120;

    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      smoothScrollTo(sectionTop, 400);
    }
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./src/assets/logo.png" alt="logo" />

          <ul>
            <li>
              <a onClick={scrollToSection("home")} className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a onClick={scrollToSection("skills")} className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a onClick={scrollToSection("projects")} className="menu-item">
                Projects
              </a>
            </li>
            <li>
              <a onClick={scrollToSection("contact")} className="menu-item">
                Contact
              </a>
            </li>
            <a
              href="./src/assets/Amir's Resume.pdf"
              className="download-link"
              download
            >
              <button className="contact-btn" onClick={() => {}}>
                Download CV
              </button>
            </a>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
