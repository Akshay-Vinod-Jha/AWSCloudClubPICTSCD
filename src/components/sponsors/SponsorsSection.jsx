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
import { triggerLandingBurst } from "../../utils/landingBurst";
import { addPixelBurst } from "../../utils/pixelBurst";

// Import PDF from both locations for deployment safety
import sponsorshipPDF from "../../assets/pdfs/AWS_Student_Community_Day_Pune_2026_Sponsorship_Brochure.pdf";

const SponsorsSection = () => {
  const sectionRef = useRef(null);
  const pdfContainerRef = useRef(null);
  const downloadBtnRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (downloadBtnRef.current) {
      return addPixelBurst(downloadBtnRef.current, cloudHelper);
    }
  }, []);

  const handleDownloadClick = () => {
    // Use public folder PDF for download
    const link = document.createElement("a");
    link.href = "/AWS_Student_Community_Day_Pune_2026_Sponsorship_Brochure.pdf";
    link.download =
      "AWS_Student_Community_Day_Pune_2026_Sponsorship_Brochure.pdf";
    link.click();
  };

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
          <h2 className="sponsors-title">Partner With Us</h2>
          <p className="sponsors-subtitle">Built with Community Support</p>
        </div>

        {/* PDF Instruction Text */}
        <div
          className={`sponsors-instruction-text reveal reveal--fade ${revealed ? "is-visible" : ""}`}
        >
          <p>Download our sponsorship prospectus or preview it below.</p>
        </div>

        {/* PDF Viewer */}
        <div
          ref={pdfContainerRef}
          className={`sponsors-pdf-viewer reveal reveal--tile ${revealed ? "is-visible" : ""}`}
          style={{ animationDelay: "200ms" }}
        >
          <iframe
            src={sponsorshipPDF}
            title="Sponsorship Prospectus"
            className="pdf-iframe"
          />
        </div>

        {/* Download Button */}
        <div className="sponsors-download-wrapper">
          <button
            ref={downloadBtnRef}
            className="pixel-button sponsors-download-btn"
            onClick={handleDownloadClick}
          >
            Download Sponsorship Prospectus
          </button>
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
          <p>▶ Interested in sponsoring? Contact us at team@awsugpune.org!</p>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
