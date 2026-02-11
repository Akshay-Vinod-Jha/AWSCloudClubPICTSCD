import React, { useRef, useEffect, useCallback } from "react";
import "./CommunityJourneySection.css";

// Character imports
import cloudExplorer from "../../assets/images/characters/cloud_explorer.png";
import cloudHelmetWarrior from "../../assets/images/characters/cloud_helmet_warrior.png";

// Background image (applied via CSS)

const journeySteps = [
  {
    number: 1,
    title: "Discover Cloud",
    description:
      "Begin your adventure — explore what cloud computing is all about.",
  },
  {
    number: 2,
    title: "Learn Fundamentals",
    description: "Master core concepts like compute, storage, and networking.",
  },
  {
    number: 3,
    title: "Build Projects",
    description: "Create real-world cloud solutions and level up your skills.",
  },
  {
    number: 4,
    title: "Lead & Contribute",
    description: "Mentor others, speak at events, and shape the community.",
  },
];

const CommunityJourneySection = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

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
          <h2 className="journey-title">Your Community Journey</h2>
          <p className="journey-subtitle">Level Up Your Cloud Skills</p>
        </div>

        {/* Progression Path */}
        <div className="journey-path">
          {journeySteps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step Card */}
              <div ref={assignRef} className="journey-step-card quest-hidden">
                <div className="journey-step-number-badge">
                  <span className="journey-step-number">LV.{step.number}</span>
                </div>
                <div className="journey-step-content">
                  <h3 className="journey-step-title">{step.title}</h3>
                  <p className="journey-step-desc">{step.description}</p>
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
            <span>Quest Complete!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityJourneySection;
