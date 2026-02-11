import React from "react";
import "./AboutSection.css";

// Character imports - According to characters_info.txt
// AboutSection uses:
// - student_explorer.png: Student Participant Character (main)
// - cloud_jadugar.png: Magical companion (decorative accent)
import studentExplorer from "../../assets/images/characters/student_explorer.png";
import cloudJadugar from "../../assets/images/characters/cloud_jadugar.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">What is Student Community Day?</h2>
          <img
            src={cloudJadugar}
            alt="Cloud Jadugar"
            className="about-companion pixel-crisp"
          />
        </div>

        <div className="about-content">
          <div className="about-card reveal reveal--fade">
            <p className="about-description">
              Student Community Day is a student-led cloud learning event
              focused on building, learning, and exploring cloud technologies
              together through talks, workshops, and community interaction.
            </p>

            <div className="about-highlights">
              <div className="highlight-item reveal reveal--slide">
                <span className="highlight-icon">●</span>
                <span className="highlight-text">Hands-on workshops</span>
              </div>
              <div
                className="highlight-item reveal reveal--slide"
                style={{ animationDelay: "120ms" }}
              >
                <span className="highlight-icon">●</span>
                <span className="highlight-text">
                  Student-friendly sessions
                </span>
              </div>
              <div
                className="highlight-item reveal reveal--slide"
                style={{ animationDelay: "240ms" }}
              >
                <span className="highlight-icon">●</span>
                <span className="highlight-text">Community networking</span>
              </div>
            </div>
          </div>

          <div
            className="about-character reveal reveal--drop"
            style={{ animationDelay: "150ms" }}
          >
            <img
              src={studentExplorer}
              alt="Student Explorer"
              className="student-explorer-image pixel-crisp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
