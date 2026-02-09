import React from "react";
import "./StatsSection.css";

// Character imports - According to characters_info.txt
// StatsSection uses:
// - cloud_golem.png: Guardian/Strength symbol representing scale & impact
import cloudGolem from "../../assets/images/characters/cloud_golem.png";

const StatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Students",
    },
    {
      number: "20+",
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
              src={cloudGolem}
              alt="Cloud Golem Guardian"
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
