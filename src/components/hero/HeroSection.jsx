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

const HeroSection = () => {
  const ctaBtnRef = useRef(null);

  useEffect(() => {
    if (ctaBtnRef.current) {
      return addPixelBurst(ctaBtnRef.current, cloudHelper);
    }
  }, []);

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
            <h1 className="hero-title">
              Student
              <br />
              Community
              <br />
              Day
            </h1>

            <p className="hero-subtitle">Build • Learn • Explore the Cloud</p>

            <div className="hero-info">
              <div className="info-item">
                <img
                  src={calendarIcon}
                  alt=""
                  className="info-icon pixel-crisp"
                />
                <span>Coming Soon</span>
              </div>
              <div className="info-item">
                <img
                  src={locationIcon}
                  alt=""
                  className="info-icon pixel-crisp"
                />
                <span>Campus Location TBA</span>
              </div>
            </div>

            <button ref={ctaBtnRef} className="pixel-button hero-cta">
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
