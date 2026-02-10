import React from "react";
import "./RegistrationSection.css";

// Character imports
import scdMascot from "../../assets/images/characters/scd_event_mascot.png";
import cloudBuilder from "../../assets/images/characters/cloud_builder.png";

// Background image (applied via CSS — pixel_final_cta_bg.jpg)

const RegistrationSection = () => {
  return (
    <section className="registration-section">
      {/* Cloud Builder Character - Left Side */}
      <img
        src={cloudBuilder}
        alt="Cloud Builder"
        className="registration-builder pixel-crisp"
      />

      {/* Main CTA Container */}
      <div className="registration-container">
        {/* Top Pixel Panel */}
        <div className="registration-top-panel">
          <div className="registration-panel-border">
            <span className="registration-panel-star">★</span>
            <span className="registration-panel-label">Final Quest</span>
            <span className="registration-panel-star">★</span>
          </div>
        </div>

        {/* Main Content Panel */}
        <div className="registration-main-panel">
          {/* Mascot Near Heading */}
          <div className="registration-mascot-wrapper">
            <img
              src={scdMascot}
              alt="SCD Event Mascot"
              className="registration-mascot pixel-crisp"
            />
          </div>

          {/* Heading */}
          <h2 className="registration-title">
            Ready to Join Student Community Day?
          </h2>

          {/* Subtext */}
          <p className="registration-subtext">
            Register now and be part of a student-driven cloud learning
            experience.
          </p>

          {/* CTA Button */}
          <div className="registration-cta-wrapper">
            <button className="registration-cta-button" type="button">
              Register Now
            </button>
          </div>

          {/* Limited Seats Notice */}
          <div className="registration-notice">
            <span className="registration-notice-icon">⚠</span>
            <span className="registration-notice-text">
              Limited seats available
            </span>
          </div>
        </div>

        {/* Bottom Pixel Panel */}
        <div className="registration-bottom-panel">
          <div className="registration-block-row">
            <div className="registration-block"></div>
            <div className="registration-block"></div>
            <div className="registration-block"></div>
            <div className="registration-block"></div>
            <div className="registration-block"></div>
            <div className="registration-block"></div>
            <div className="registration-block"></div>
            <div className="registration-block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
