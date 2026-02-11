import React, { useEffect, useRef, useCallback, useState } from "react";
import "./RegistrationSection.css";
import { addPixelBurst } from "../../utils/pixelBurst";

// Character imports
import scdMascot from "../../assets/images/characters/scd_event_mascot.png";
import cloudBuilder from "../../assets/images/characters/cloud_helmet_warrior.png";
import cloudHelper from "../../assets/images/characters/cloud_helper.png";

// Background image (applied via CSS — pixel_final_cta_bg.jpg)

const RegistrationSection = () => {
  const ctaBtnRef = useRef(null);
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);
  const [sparklingBtn, setSparklingBtn] = useState(null);

  const assignBlockRef = (el) => {
    if (el && !blocksRef.current.includes(el)) {
      blocksRef.current.push(el);
    }
  };

  useEffect(() => {
    if (ctaBtnRef.current) {
      return addPixelBurst(ctaBtnRef.current, cloudHelper);
    }
  }, []);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    const btn = e.currentTarget;
    
    // Add sparkle animation
    setSparklingBtn("register");
    btn.style.transition = "filter 0.3s ease";
    btn.style.filter = "brightness(2) saturate(2)";

    setTimeout(() => {
      window.open(
        "https://konfhub.com/aws-student-community-day-pict",
        "_blank",
        "noopener,noreferrer",
      );
      btn.style.filter = "";
      setSparklingBtn(null);
    }, 600);
  };

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blocksRef.current.forEach((block) => {
            const delay = Math.floor(Math.random() * 800);
            setTimeout(() => {
              block.classList.remove("reg-block-hidden");
              block.classList.add("reg-block-drop");
            }, delay);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="registration-section" ref={sectionRef}>
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
            <button
              ref={ctaBtnRef}
              className={`registration-cta-button ${sparklingBtn === "register" ? "sparkle-animate" : ""}`}
              type="button"
              onClick={handleRegisterClick}
            >
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
            <div
              ref={assignBlockRef}
              className="registration-block reg-block-hidden"
            ></div>
            <div
              ref={assignBlockRef}
              className="registration-block reg-block-hidden"
            ></div>
            <div
              ref={assignBlockRef}
              className="registration-block reg-block-hidden"
            ></div>
            <div
              ref={assignBlockRef}
              className="registration-block reg-block-hidden"
            ></div>
            <div
              ref={assignBlockRef}
              className="registration-block reg-block-hidden"
            ></div>
            <div
              ref={assignBlockRef}
              className="registration-block reg-block-hidden"
            ></div>
            <div
              ref={assignBlockRef}
              className="registration-block reg-block-hidden"
            ></div>
            <div
              ref={assignBlockRef}
              className="registration-block reg-block-hidden"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
