import React from "react";
import "./AboutSection.css";

// Character imports - According to characters_info.txt
// AboutSection uses:
// - student_explorer.png: Student Participant Character (main)
// - cloud_sheep.png: Friendly companion (decorative accent)
import studentExplorer from "../../assets/images/characters/student_explorer.png";
import cloudSheep from "../../assets/images/characters/cloud_sleep.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Section Heading */}
        <div className="about-header">
          <h2 className="about-title">What is Student Community Day?</h2>
          {/* Decorative companion character */}
          <img
            src={cloudSheep}
            alt="Cloud Companion"
            className="about-companion pixel-crisp"
          />
        </div>

        {/* Main Content Area */}
        <div className="about-content">
          {/* Text Content Card */}
          <div className="about-card">
            <p className="about-description">
              Student Community Day is a student-led cloud learning event
              focused on building, learning, and exploring cloud technologies
              together through talks, workshops, and community interaction.
            </p>

            {/* Highlights */}
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">▶</span>
                <span className="highlight-text">Hands-on workshops</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">▶</span>
                <span className="highlight-text">
                  Student-friendly sessions
                </span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">▶</span>
                <span className="highlight-text">Community networking</span>
              </div>
            </div>
          </div>

          {/* Student Explorer Character */}
          <div className="about-character">
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
