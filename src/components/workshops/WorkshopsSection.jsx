import React from "react";
import "./WorkshopsSection.css";

// Character imports - According to characters_info.txt
// WorkshopsSection uses:
// - workshop_guide_npc.png: Instructor/mentor NPC anchor
// - cloud_helper.png: Assistant/helper decorative accents
import workshopGuide from "../../assets/images/characters/workshop_guide__npc.png";
import cloudHelper from "../../assets/images/characters/cloud_helper.png";

const WorkshopsSection = () => {
  const workshops = [
    {
      title: "Build Your First Cloud App",
      description:
        "Learn to deploy a full-stack application on AWS using fundamental cloud services and best practices.",
      duration: "90 mins",
      level: "Beginner",
    },
    {
      title: "Deploy with Docker & CI/CD",
      description:
        "Master containerization and continuous integration pipelines for automated cloud deployments.",
      duration: "120 mins",
      level: "Intermediate",
    },
    {
      title: "Intro to Serverless",
      description:
        "Discover serverless architecture with Lambda functions and event-driven cloud applications.",
      duration: "90 mins",
      level: "Beginner",
    },
    {
      title: "Cloud Security Basics",
      description:
        "Essential security practices for protecting cloud infrastructure and managing access controls.",
      duration: "60 mins",
      level: "Beginner",
    },
  ];

  return (
    <section className="workshops-section">
      <div className="workshops-container">
        {/* Section Heading */}
        <div className="workshops-header">
          <h2 className="workshops-title">Hands-on Workshops</h2>
          <p className="workshops-subtitle">Practice Makes Perfect</p>
        </div>

        {/* Main Content Layout */}
        <div className="workshops-content">
          {/* Workshop Guide Character - Left Anchor */}
          <div className="workshops-guide">
            <img
              src={workshopGuide}
              alt="Workshop Guide"
              className="guide-instructor pixel-crisp"
            />
          </div>

          {/* Workshops Grid */}
          <div className="workshops-grid">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="workshop-card reveal reveal--drop"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Helper Icon Accent */}
                <div className="workshop-helper-icon">
                  <img
                    src={cloudHelper}
                    alt="Helper"
                    className="helper-accent pixel-crisp pixel-float-delayed"
                  />
                </div>

                {/* Workshop Header */}
                <div className="workshop-header">
                  <h3 className="workshop-title">{workshop.title}</h3>
                </div>

                {/* Workshop Description */}
                <p className="workshop-description">{workshop.description}</p>

                {/* Workshop Metadata */}
                <div className="workshop-metadata">
                  <div className="workshop-duration">
                    <span className="metadata-label">▶</span>
                    <span className="metadata-value">{workshop.duration}</span>
                  </div>
                  <div
                    className={`workshop-level level-${workshop.level.toLowerCase()}`}
                  >
                    {workshop.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
