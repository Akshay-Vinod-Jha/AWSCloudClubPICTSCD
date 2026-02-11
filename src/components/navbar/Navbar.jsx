import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { addPixelBurst } from "../../utils/pixelBurst";

// Brand logo
import awsCloudcraftLogo from "../../assets/images/logo/navlogo.png";
import cloudHelper from "../../assets/images/characters/cloud_helper.png";

const Navbar = () => {
  const registerBtnRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (registerBtnRef.current) {
      return addPixelBurst(registerBtnRef.current, cloudHelper);
    }
  }, []);

  // Close mobile menu on escape key or outside click
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Approximate navbar height
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      // Close mobile menu after navigation
      setMobileMenuOpen(false);
    }
  };

  // Handle register button click
  const handleRegisterClick = (e) => {
    e.preventDefault();
    // Add bright flash animation
    const btn = e.currentTarget;
    btn.style.transition = "filter 0.3s ease";
    btn.style.filter = "brightness(2) saturate(2)";

    // Wait for animation then redirect
    setTimeout(() => {
      window.open(
        "https://konfhub.com/aws-student-community-day-pict",
        "_blank",
        "noopener,noreferrer",
      );
      btn.style.filter = "";
    }, 600);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Brand identity */}
        <div
          className="navbar-brand"
          onClick={(e) => scrollToSection(e, "home")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={awsCloudcraftLogo}
            alt="AWS CloudCraft Logo"
            className="navbar-logo pixel-crisp"
          />
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="navbar-hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}
          ></span>
        </button>

        {/* Center/Right: Navigation menu */}
        <ul className={`navbar-menu ${mobileMenuOpen ? "mobile-active" : ""}`}>
          <li className="navbar-item">
            <a
              href="#about"
              className="navbar-link"
              onClick={(e) => scrollToSection(e, "about")}
            >
              About
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#agenda"
              className="navbar-link"
              onClick={(e) => scrollToSection(e, "agenda")}
            >
              Agenda
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#speakers"
              className="navbar-link"
              onClick={(e) => scrollToSection(e, "speakers")}
            >
              Speakers
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#sponsors"
              className="navbar-link"
              onClick={(e) => scrollToSection(e, "sponsors")}
            >
              Sponsors
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#venue"
              className="navbar-link"
              onClick={(e) => scrollToSection(e, "venue")}
            >
              Venue
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#connect"
              className="navbar-link"
              onClick={(e) => scrollToSection(e, "connect")}
            >
              Connect
            </a>
          </li>
          <li className="navbar-item mobile-register">
            <button
              className="pixel-button navbar-register-btn mobile-register-btn"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </li>
        </ul>

        {/* Right: Primary CTA */}
        <div className="navbar-cta">
          <button
            ref={registerBtnRef}
            className="pixel-button navbar-register-btn"
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
