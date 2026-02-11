import React, { useRef, useState } from "react";
import "./CommunityJourneySection.css";

// Character imports
import cloudExplorer from "../../assets/images/characters/cloud_explorer.png";
import cloudHelmetWarrior from "../../assets/images/characters/cloud_helmet_warrior.png";

// Background image (applied via CSS)

const journeySteps = [
  {
    number: 1,
    icon: "🔗",
    title: "Meetup Handle",
    link: "https://www.meetup.com/aws-cloud-club-at-pict",
  },
  {
    number: 2,
    icon: "👉🏻",
    title: "LinkedIn Handle",
    link: "https://www.linkedin.com/company/aws-cloud-club-pict/",
  },
  {
    number: 3,
    icon: "👉🏻",
    title: "Instagram Handle",
    link: "https://www.instagram.com/awscloudclubs.pict?igsh=ZGhkeGkxbTUxZnM4",
  },
  {
    number: 4,
    icon: "👉🏻",
    title: "WhatsApp Handle",
    link: "https://whatsapp.com/channel/0029Vb6eEa0C1Fu7wpFTta0a",
  },
];

const CommunityJourneySection = () => {
  const sectionRef = useRef(null);
  const [sparkling, setSparkling] = useState(null);

  const handleCardClick = (link, index) => {
    setSparkling(index);
    window.open(link, "_blank");
    setTimeout(() => {
      setSparkling(null);
    }, 500);
  };

  return (
    <section className="journey-section" ref={sectionRef}>
      {/* Journey Path Background — CSS pattern fallback */}
      <div className="journey-path-bg"></div>

      {/* Decorative Warrior - Near path edge top-left */}
      
      <div className="journey-container">
        {/* Section Heading */}
        <div className="journey-header">
          <h2 className="journey-title">Connect With Us</h2>
          <p className="journey-subtitle">
            Join Our Community Across Platforms
          </p>
        </div>

        {/* Progression Path */}
        <div className="journey-path">
          {journeySteps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step Card */}
              <div
                className={`journey-step-card ${sparkling === index ? "sparkle-animate" : ""}`}
                onClick={() => handleCardClick(step.link, index)}
                style={{ cursor: "pointer" }}
              >
                <div className="journey-step-content">
                  <h3 className="journey-step-title">{step.title}</h3>
                </div>
                {/* Checkpoint Indicator */}
                <div className="journey-checkpoint">
                  <span className="journey-checkpoint-diamond">◆</span>
                </div>
              </div>

              {/* Connector Block (between steps) */}
              {index < journeySteps.length - 1 && (
                <div className="journey-connector">
                  <div className="journey-connector-block"></div>
                  <div className="journey-connector-block"></div>
                  <div className="journey-connector-block"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Cloud Explorer Character - near final step */}
        <div className="journey-explorer-wrapper">
          <img
            src={cloudExplorer}
            alt="Cloud Explorer"
            className="journey-explorer pixel-crisp"
          />
          <div className="journey-explorer-speech">
            <span>Follow Us!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityJourneySection;
