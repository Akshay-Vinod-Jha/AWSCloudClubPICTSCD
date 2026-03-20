import React, { useRef } from "react";
import "./SponsorsSection.css";

// Character imports - According to characters_info.txt
// SponsorsSection uses:
// - cloud_helper.png: Friendly support character as accent
// - cloud_bird.png: Decorative life element
const cloudHelper = "/images/characters/cloud_helper.png";
const cloudBird = "/images/characters/cloud_bird.png";

// Partner Logo Imports
const awsLogo = "/images/partner/Amazon_Web_Services_Logo.png";
const konfhubLogo = "/images/partner/konfhub.png";
const cncfnashikLogo = "/images/partner/cncfnashik.png";
const pictOssLogo = "/images/partner/pict_oss_community_logo.png";

const SponsorsSection = () => {
  const sectionRef = useRef(null);

  // Partner tiers data
  const partnerTiers = [
    {
      tier: "TITLE SPONSOR",
      tierColor: "#ffd700",
      partners: [
        {
          name: "AWS",
          logo: awsLogo,
        },
      ],
    },
    {
      tier: "PLATFORM SPONSOR",
      tierColor: "#ffa500",
      partners: [
        {
          name: "KonfHub",
          logo: konfhubLogo,
        },
      ],
    },
    {
      tier: "COMMUNITY PARTNER",
      tierColor: "#47a3ff",
      partners: [
        {
          name: "CNCF Nashik",
          logo: cncfnashikLogo,
        },
        {
          name: "PICT OSS",
          logo: pictOssLogo,
        },
      ],
    },
  ];

  return (
    <section className="sponsors-section" ref={sectionRef}>
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
          <h2 className="sponsors-title">Our Partners</h2>
          <p className="sponsors-subtitle">Building the Future Together</p>
        </div>

        {/* Partner Tiers Display */}
        <div className="sponsors-tiers">
          {partnerTiers.map((tierData, index) => (
            <div
              key={index}
              className="sponsor-tier-block reveal reveal--tile"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className="tier-header"
                style={{ borderLeftColor: tierData.tierColor }}
              >
                <h3 className="tier-title">{tierData.tier}</h3>
              </div>
              <div className="sponsor-logos-grid">
                {tierData.partners.map((partner, partnerIndex) => (
                  <div
                    key={partnerIndex}
                    className={`sponsor-logo-placeholder ${index === 2 ? "reveal reveal--slide-" + (partnerIndex % 2 === 0 ? "left" : "right") : ""}`}
                    style={
                      index === 2
                        ? { animationDelay: `${partnerIndex * 100}ms` }
                        : {}
                    }
                  >
                    <div className="sponsor-logo-frame">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="partner-logo pixel-crisp"
                      />
                    </div>
                    <p className="partner-name">{partner.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="sponsors-footer-message">
          <p>
            ▶ Interested in sponsoring? Contact us at
            awscloudclubpict@gmail.com!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
