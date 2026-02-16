import React, { useRef, useEffect, useState } from "react";
import "./SpeakersSection.css";
import { addPixelBurst } from "../../utils/pixelBurst";

// Character imports - According to characters_info.txt
// SpeakersSection uses:
// - cloud_helper.png: Friendly guide as floating accent
// - cloud_sleep.png: Decorative life element (subtle)
import cloudHelper from "../../assets/images/characters/cloud_helper.png";
import cloudSleep from "../../assets/images/characters/cloud_sleep.png";
import cloudBird from "../../assets/images/characters/cloud_bird.png";
import cloudBuilder from "../../assets/images/characters/cloud_builder.png";
import toBeAnnounced from "../../assets/images/tobeannounced.png";
import { triggerLandingBurst } from "../../utils/landingBurst";

const SpeakersSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const speakBtnRef = useRef(null);
  const [dropped, setDropped] = useState(false);
  const [sparklingBtn, setSparklingBtn] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
                cloudSleep,
                cloudBird,
                cloudBuilder,
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

  useEffect(() => {
    if (speakBtnRef.current) {
      return addPixelBurst(speakBtnRef.current, cloudHelper);
    }
  }, []);

  const handleSpeakClick = (e) => {
    e.preventDefault();
    const btn = e.currentTarget;

    // Add sparkle animation
    setSparklingBtn("speak");
    btn.style.transition = "filter 0.3s ease";
    btn.style.filter = "brightness(2) saturate(2)";

    setTimeout(() => {
      window.open(
        "https://sessionize.com/aws-student-community-day-pune-2026",
        "_blank",
        "noopener,noreferrer",
      );
      btn.style.filter = "";
      setSparklingBtn(null);
    }, 600);
  };

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
    <section className="speakers-section" ref={sectionRef}>
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

        {/* Speakers - To Be Announced */}
        <div className="speakers-tba-container">
          <img
            ref={imgRef}
            src={toBeAnnounced}
            alt="Speakers to be announced"
            className={`speakers-tba-image pixel-crisp${
              dropped ? " pixel-drop-landed" : " pixel-drop-ready"
            }`}
          />

          {/* Want to Speak Button */}
          <div className="speakers-cta-wrapper">
            <button
              ref={speakBtnRef}
              className={`speakers-cta-button ${sparklingBtn === "speak" ? "speakers-sparkle-animate" : ""}`}
              type="button"
              onClick={handleSpeakClick}
            >
              {isMobile ? "Want to Speak?" : "Want to Speak at SCD Pune 2026?"}
            </button>
          </div>
        </div>

        {/* Original speakers grid - hidden for now
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="speaker-card reveal reveal--slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="speaker-photo-frame">
                <div className="speaker-photo-placeholder">
                  <span className="photo-icon">👤</span>
                </div>
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-organization">{speaker.organization}</p>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default SpeakersSection;
