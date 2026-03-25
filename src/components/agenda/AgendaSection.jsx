import React from "react";
import "./AgendaSection.css";

// Character imports
const workshopGuide = "/images/characters/workshop_guide__npc.png";
const cloudHelper = "/images/characters/cloud_helper.png";

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
      title: "Roadmap to Golden Jacket and Certifications  move to First",
      subtitle: "Abhinivesh Jain",
    },
    {
      time: "10:30",
      title:
        "Engineering for Efficiency: How Enterprise  Architects Drive Cost Optimized Architecture on  AWS",
      subtitle: "Anand Mehta",
    },
    {
      time: "11:00",
      title: "Getting Started with Spec-Driven Development  on AWS with Kiro",
      subtitle: "Sankalp Sandeep Paranjpe",
    },
    {
      time: "11:30",
      title: "Amazon QuickSuit ",
      subtitle: "Saurabh Agrawal",
    },
    {
      time: "12:00",
      title: "Lunch Break",
      subtitle: "Networking and refreshments provided",
    },
    {
      time: "13:00",
      title: "Intelligent Event Agent",
      subtitle: "Ramandeep Chandna",
    },
    {
      time: "13:30",
      title: "Scaling Kubernetes on AWS: Smart Autoscaling  with Karpenter",
      subtitle: "Akshay Ithape",
    },
    {
      time: "14:00",
      title: "Designing Scalable Event-Driven Web  Applications on AWS",
      subtitle: "Rahul Shivalkar",
    },
    {
      time: "14:30",
      title: "Building Devops for agentic AI ",
      subtitle: "Shubham Londhe",
    },
    {
      time: "15:00",
      title: "Activity",
      subtitle: "Interactive Activity",
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
