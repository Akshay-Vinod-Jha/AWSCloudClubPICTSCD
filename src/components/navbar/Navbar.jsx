import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { addPixelBurst } from "../../utils/pixelBurst";

// Event mascot - branding identifier
import scdEventMascot from "../../assets/images/characters/scd_event_mascot.png";
import cloudHelper from "../../assets/images/characters/cloud_helper.png";

const Navbar = () => {
  const registerBtnRef = useRef(null);

  useEffect(() => {
    if (registerBtnRef.current) {
      return addPixelBurst(registerBtnRef.current, cloudHelper);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Brand identity with mascot */}
        <div className="navbar-brand">
          <img
            src={scdEventMascot}
            alt="SCD Mascot"
            className="navbar-mascot pixel-crisp"
          />
          <span className="navbar-title">Student Community Day</span>
        </div>

        {/* Center/Right: Navigation menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#agenda" className="navbar-link">
              Agenda
            </a>
          </li>
          <li className="navbar-item">
            <a href="#speakers" className="navbar-link">
              Speakers
            </a>
          </li>
          <li className="navbar-item">
            <a href="#sponsors" className="navbar-link">
              Sponsors
            </a>
          </li>
        </ul>

        {/* Right: Primary CTA */}
        <div className="navbar-cta">
          <button
            ref={registerBtnRef}
            className="pixel-button navbar-register-btn"
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
