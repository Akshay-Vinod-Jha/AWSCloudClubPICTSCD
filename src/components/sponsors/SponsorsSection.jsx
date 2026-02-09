import React from "react";
import "./SponsorsSection.css";

// Character imports - According to characters_info.txt
// SponsorsSection uses:
// - cloud_helper.png: Friendly support character as accent
// - cloud_bird.png: Decorative life element
import cloudHelper from "../../assets/images/characters/cloud_helper.png";
import cloudBird from "../../assets/images/characters/cloud_bird.png";

const SponsorsSection = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      tierColor: "#FFD93D",
      sponsors: [
        "Platinum Sponsor 1",
        "Platinum Sponsor 2",
        "Platinum Sponsor 3",
      ],
    },
    {
      tier: "Gold Sponsors",
      tierColor: "#FFA500",
      sponsors: [
        "Gold Sponsor 1",
        "Gold Sponsor 2",
        "Gold Sponsor 3",
        "Gold Sponsor 4",
        "Gold Sponsor 5",
      ],
    },
    {
      tier: "Community Partners",
      tierColor: "#47A3FF",
      sponsors: [
        "Partner 1",
        "Partner 2",
        "Partner 3",
        "Partner 4",
        "Partner 5",
        "Partner 6",
      ],
    },
  ];

  return (
    <section className="sponsors-section">
      {/* Decorative Helper - Top Left */}
      <img
        src={cloudHelper}
        alt="Helper"
        className="sponsors-helper pixel-crisp pixel-float"
      />

      {/* Decorative Bird - Bottom Right */}
      <img
        src={cloudBird}
        alt="Bird"
        className="sponsors-bird pixel-crisp pixel-float-delayed"
      />

      <div className="sponsors-container">
        {/* Section Heading */}
        <div className="sponsors-header">
          <h2 className="sponsors-title">Our Sponsors & Partners</h2>
          <p className="sponsors-subtitle">Built with Community Support</p>
        </div>

        {/* Sponsor Tiers */}
        <div className="sponsors-tiers">
          {sponsorTiers.map((tierData, index) => (
            <div
              key={index}
              className="sponsor-tier-block reveal reveal--tile"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Tier Header */}
              <div
                className="tier-header"
                style={{ borderLeftColor: tierData.tierColor }}
              >
                <h3 className="tier-title">{tierData.tier}</h3>
              </div>

              {/* Sponsor Logo Grid */}
              <div className="sponsor-logos-grid">
                {tierData.sponsors.map((sponsor, sponsorIndex) => (
                  <div key={sponsorIndex} className="sponsor-logo-placeholder">
                    <div className="sponsor-logo-frame">
                      <span className="sponsor-logo-text">{sponsor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Message */}
        <div className="sponsors-footer-message">
          <p>▶ Interested in sponsoring? Contact us to join our alliance!</p>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
