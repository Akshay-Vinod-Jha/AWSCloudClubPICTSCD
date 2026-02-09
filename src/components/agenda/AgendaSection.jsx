import React from "react";
import "./AgendaSection.css";

// Character imports - According to characters_info.txt
// AgendaSection uses:
// - workshop_guide_npc.png: Guide/instructor NPC anchoring the timeline
// - cloud_helper.png: Assistant/pointer for visual flow
import workshopGuide from "../../assets/images/characters/workshop_guide__npc.png";
import cloudHelper from "../../assets/images/characters/cloud_helper.png";

const AgendaSection = () => {
  const agendaItems = [
    {
      time: "09:00",
      title: "Registration & Welcome",
      subtitle: "Check-in and morning coffee",
    },
    {
      time: "10:00",
      title: "Opening Keynote",
      subtitle: "Cloud computing in education",
    },
    {
      time: "11:00",
      title: "Cloud Fundamentals Session",
      subtitle: "AWS core services overview",
    },
    {
      time: "12:30",
      title: "Lunch Break",
      subtitle: "Networking and refreshments",
    },
    {
      time: "13:30",
      title: "Hands-on Workshops",
      subtitle: "Build your first cloud app",
    },
    {
      time: "15:30",
      title: "Advanced Cloud Talks",
      subtitle: "DevOps and AI/ML sessions",
    },
    {
      time: "17:00",
      title: "Community Networking",
      subtitle: "Meet speakers and peers",
    },
    {
      time: "18:00",
      title: "Closing Ceremony",
      subtitle: "Wrap-up and prizes",
    },
  ];

  return (
    <section className="agenda-section">
      <div className="agenda-container">
        {/* Section Heading */}
        <div className="agenda-header">
          <h2 className="agenda-title">Event Agenda</h2>
          <p className="agenda-subtitle">Your Day at a Glance</p>
        </div>

        {/* Main Content Layout */}
        <div className="agenda-content">
          {/* Workshop Guide Character - Left Side */}
          <div className="agenda-guide">
            <img
              src={workshopGuide}
              alt="Workshop Guide"
              className="guide-image pixel-crisp"
            />
          </div>

          {/* Timeline Structure */}
          <div className="agenda-timeline">
            {/* Timeline Line */}
            <div className="timeline-line"></div>

            {/* Agenda Items */}
            {agendaItems.map((item, index) => (
              <div
                key={index}
                className={`agenda-item reveal reveal--tile`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Timeline Node */}
                <div className="timeline-node">
                  <img
                    src={cloudHelper}
                    alt="Time marker"
                    className="node-helper pixel-crisp pixel-float-delayed"
                  />
                </div>

                {/* Agenda Card */}
                <div className="agenda-card">
                  <div className="agenda-time">{item.time}</div>
                  <div className="agenda-details">
                    <h3 className="agenda-item-title">{item.title}</h3>
                    <p className="agenda-item-subtitle">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
