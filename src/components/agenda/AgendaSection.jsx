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
      time: "08:00",
      title: "Registration & Welcome",
      subtitle: "Check-in and morning coffee",
    },
    {
      time: "09:00",
      title: "Opening Keynote",
      subtitle: "Cloud computing in education",
    },
    {
      time: "09:30",
      title: "Panel Discussion",
      subtitle: "Discussing the future of cloud in learning",
    },
    {
      time: "10:00",
      title: "Speaker Sessions",
      subtitle: "Expert talks on cloud technologies and trends",
    },
    {
      time: "12:00",
      title: "Lunch Break",
      subtitle: "Networking and refreshments provided",
    },
    {
      time: "13:00",
      title: "AI/ML ARC",
      subtitle: "AI/ML in cloud computing",
    },
    {
      time: "13:30",
      title: "DevOps ARC",
      subtitle: "DevOps in cloud computing",
    },
    {
      time: "14:00",
      title: "Serverless ARC",
      subtitle: "Serverless computing in the cloud",
    },
      {
      time: "14:30",
      title: "Activity",
      subtitle: "Interactive Activity",
    },
    {
      time: "15:00",
      title: "Lightning Talks",
      subtitle: "Quick presentations from community members",
    },
     {
      time: "15:30",
      title: "Fireside Chat with cloud captains",
      subtitle: "Informal discussion with cloud leaders and closing remarks",
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
