import React from "react";
import "./SpeakersSection.css";

// Character imports - According to characters_info.txt
// SpeakersSection uses:
// - cloud_helper.png: Friendly guide as floating accent
// - cloud_sleep.png: Decorative life element (subtle)
import cloudHelper from "../../assets/images/characters/cloud_helper.png";
import cloudSleep from "../../assets/images/characters/cloud_sleep.png";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Alex Chen",
      role: "Cloud Architect",
      organization: "AWS Solutions",
    },
    {
      name: "Sarah Kumar",
      role: "DevOps Lead",
      organization: "Tech Innovators",
    },
    {
      name: "Michael Torres",
      role: "ML Engineer",
      organization: "AI Labs",
    },
    {
      name: "Emily Watson",
      role: "Security Expert",
      organization: "CloudSec Pro",
    },
    {
      name: "James Rodriguez",
      role: "Serverless Specialist",
      organization: "Lambda Works",
    },
    {
      name: "Priya Patel",
      role: "Data Engineer",
      organization: "BigData Corp",
    },
  ];

  return (
    <section className="speakers-section">
      {/* Decorative Helper - Top Left */}
      <img
        src={cloudHelper}
        alt="Helper"
        className="speakers-helper-left pixel-crisp pixel-float"
      />

      {/* Decorative Sheep - Bottom Right */}
      <img
        src={cloudSleep}
        alt="Companion"
        className="speakers-companion-right pixel-crisp"
      />

      <div className="speakers-container">
        {/* Section Heading */}
        <div className="speakers-header">
          <h2 className="speakers-title">Meet the Speakers</h2>
          <p className="speakers-subtitle">Learn from the Best</p>
        </div>

        {/* Speakers Grid */}
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="speaker-card reveal reveal--slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Pixel Frame Photo Placeholder */}
              <div className="speaker-photo-frame">
                <div className="speaker-photo-placeholder">
                  <span className="photo-icon">👤</span>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-organization">{speaker.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
