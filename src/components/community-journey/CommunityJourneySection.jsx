import React, { useRef, useEffect, useCallback } from "react";
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
    displayLink: "meetup.com/aws-cloud-club-at-pict",
  },
  {
    number: 2,
    icon: "👉🏻",
    title: "LinkedIn Handle",
    link: "https://www.linkedin.com/company/aws-cloud-club-pict/",
    displayLink: "linkedin.com/company/aws-cloud-club-pict",
  },
  {
    number: 3,
    icon: "👉🏻",
    title: "Instagram Handle",
    link: "https://www.instagram.com/awscloudclubs.pict?igsh=ZGhkeGkxbTUxZnM4",
    displayLink: "@awscloudclubs.pict",
  },
  {
    number: 4,
    icon: "👉🏻",
    title: "WhatsApp Handle",
    link: "https://whatsapp.com/channel/0029Vb6eEa0C1Fu7wpFTta0a",
    displayLink: "WhatsApp Channel",
  },
];

const CommunityJourneySection = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const cardRefs = useRef([]);

  // Total 7 elements: box0, conn0, box1, conn1, box2, conn2, box3
  const STEP_DELAY = 200; // ms between each reveal

  const runSequence = useCallback(() => {
    const els = stepsRef.current;
    els.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.remove("quest-hidden");
        el.classList.add("quest-revealed");
      }, i * STEP_DELAY);
    });
  }, []);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runSequence();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, [runSequence]);

  // Collect refs for the 7 sequential elements
  let stepIndex = 0;
  const assignRef = (el) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  return (
    <section className="journey-section" ref={sectionRef}>
      {/* Journey Path Background — CSS pattern fallback */}
      <div className="journey-path-bg"></div>

      {/* Decorative Warrior - Near path edge top-left */}
      <img
        src={cloudHelmetWarrior}
        alt="Cloud Helmet Warrior"
        className="journey-bird pixel-crisp"
      />

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
                ref={(el) => {
                  assignRef(el);
                  if (el && !cardRefs.current.includes(el)) {
                    cardRefs.current.push(el);
                  }
                }}
                className="journey-step-card quest-hidden"
              >
                <div className="journey-step-content">
                  <h3 className="journey-step-title">{step.title}</h3>
                  <p className="journey-step-desc">{step.displayLink}</p>
                </div>
                {/* Checkpoint Indicator */}
                <div className="journey-checkpoint">
                  <span className="journey-checkpoint-diamond">◆</span>
                </div>
              </div>

              {/* Connector Block (between steps) */}
              {index < journeySteps.length - 1 && (
                <div ref={assignRef} className="journey-connector quest-hidden">
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
