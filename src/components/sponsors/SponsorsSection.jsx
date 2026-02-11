import React, { useRef, useEffect, useState } from "react";
import "./SponsorsSection.css";

// Character imports - According to characters_info.txt
// SponsorsSection uses:
// - cloud_helper.png: Friendly support character as accent
// - cloud_bird.png: Decorative life element
import cloudHelper from "../../assets/images/characters/cloud_helper.png";
import cloudBird from "../../assets/images/characters/cloud_bird.png";
import cloudBuilder from "../../assets/images/characters/cloud_builder.png";
import cloudSleep from "../../assets/images/characters/cloud_sleep.png";
import toBeAnnounced from "../../assets/images/tobeannounced.png";
import { triggerLandingBurst } from "../../utils/landingBurst";

const SponsorsSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const [dropped, setDropped] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDropped(true);
          // Fire cloud burst after drop (700ms) + vibrate (300ms)
          setTimeout(() => {
            if (imgRef.current) {
              triggerLandingBurst(imgRef.current, [
                cloudHelper,
                cloudBird,
                cloudBuilder,
                cloudSleep,
              ]);
            }
          }, 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

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
          <h2 className="sponsors-title">Our Sponsors & Partners</h2>
          <p className="sponsors-subtitle">Built with Community Support</p>
        </div>

        {/* Sponsors - To Be Announced */}
        <div className="sponsors-tba-container">
          <img
            ref={imgRef}
            src={toBeAnnounced}
            alt="Sponsors to be announced"
            className={`sponsors-tba-image pixel-crisp${
              dropped ? " pixel-drop-landed" : " pixel-drop-ready"
            }`}
          />
        </div>

        {/* Original sponsor tiers - hidden for now
        <div className="sponsors-tiers">
          {sponsorTiers.map((tierData, index) => (
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
        */}

        {/* Support Message */}
        <div className="sponsors-footer-message">
          <p>▶ Interested in sponsoring? Contact us to join our alliance!</p>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
