import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import { addPixelBurst } from "../../utils/pixelBurst";

// Character imports - According to characters_info.txt semantic rules
// Hero Section uses:
// - cloud_builder.png: Primary Builder Mascot (main hero character)
// - cloud_helper.png: Helper/Companion Mob (floating support near CTA)
import cloudBuilder from "../../assets/images/characters/cloud_builder.png";
import cloudHelper from "../../assets/images/characters/cloud_helper.png";

// Pixel icon imports
import calendarIcon from "../../assets/images/icons/calendar_pixel.jpg";
import locationIcon from "../../assets/images/icons/location_pixel.jpg";

// Background image
import heroBackground from "../../assets/images/background/background_1.jpg";

// Club logo
import clubLogo from "../../assets/images/logo/aws cloudcraft logo.png";

const HeroSection = () => {
  const ctaBtnRef = useRef(null);

  useEffect(() => {
    if (ctaBtnRef.current) {
      return addPixelBurst(ctaBtnRef.current, cloudHelper);
    }
  }, []);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    const btn = e.currentTarget;
    btn.style.transition = "filter 0.3s ease";
    btn.style.filter = "brightness(2) saturate(2)";

    setTimeout(() => {
      window.open(
        "https://konfhub.com/aws-student-community-day-pict",
        "_blank",
        "noopener,noreferrer",
      );
      btn.style.filter = "";
    }, 600);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Main Content Area */}
        <div className="hero-content">
          {/* Floating Helper Character */}
          <div className="hero-helper">
            <img
              src={cloudHelper}
              alt="Cloud Helper"
              className="helper-image pixel-crisp pixel-float"
            />
          </div>

          {/* Text Content */}
          <div className="hero-text">
            <div className="hero-logo-wrapper">
              <img
                src={clubLogo}
                alt="AWS Cloud Club PICT"
                className="hero-logo pixel-crisp"
              />
              <p className="hero-presents">Presents</p>
              <h1 className="hero-title">Student Community Day</h1>
            </div>

            <p className="hero-subtitle">Build • Innovate • Scale</p>

            <div className="hero-info">
              <div className="info-item">
                <img
                  src={calendarIcon}
                  alt=""
                  className="info-icon pixel-crisp"
                />
                <span>4th April, 2026</span>
              </div>
            </div>

            <button
              ref={ctaBtnRef}
              className="pixel-button hero-cta"
              onClick={handleRegisterClick}
            >
              Register Now
            </button>
          </div>

          {/* Main Builder Character */}
          <div className="hero-character">
            <img
              src={cloudBuilder}
              alt="Cloud Builder"
              className="builder-image pixel-crisp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
