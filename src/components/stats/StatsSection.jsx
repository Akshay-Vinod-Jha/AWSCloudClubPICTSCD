import React from "react";
import "./StatsSection.css";

// Character imports - According to characters_info.txt
// StatsSection uses:
// - cloud_eagle_warrior.png: Warrior/Strength symbol representing scale & impact
import cloudEagleWarrior from "../../assets/images/characters/cloud_eagle_warrior.png";

const StatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Students",
    },
    {
      number: "10+",
      label: "Speakers",
    },
    {
      number: "10+",
      label: "Sessions",
    },
    {
      number: "1",
      label: "Full Day",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* Section Heading */}
        <div className="stats-header">
          <h2 className="stats-title">Event Highlights</h2>
        </div>

        {/* Stats Grid + Guardian Character */}
        <div className="stats-content">
          {/* Guardian Character - Left Side */}
          <div className="stats-guardian">
            <img
              src={cloudEagleWarrior}
              alt="Cloud Eagle Warrior"
              className="golem-image pixel-crisp"
            />
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`stat-card reveal reveal--tile reveal--stagger-${index + 1}`}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
