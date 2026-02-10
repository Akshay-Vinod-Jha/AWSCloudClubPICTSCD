import React from "react";
import "./TeamSection.css";

// Pixel avatar imports — generate via Nano Banana and place in:
// assets/images/team/avatar_01.png through avatar_06.png
// Uncomment imports once images are placed.
// import avatar01 from "../../assets/images/team/avatar_01.png";
// import avatar02 from "../../assets/images/team/avatar_02.png";
// import avatar03 from "../../assets/images/team/avatar_03.png";
// import avatar04 from "../../assets/images/team/avatar_04.png";
// import avatar05 from "../../assets/images/team/avatar_05.png";
// import avatar06 from "../../assets/images/team/avatar_06.png";

const teamMembers = [
  {
    id: 1,
    name: "Alex Storm",
    role: "Lead",
    club: "SCD AWS PICT",
    avatarLabel: "A",
    badgeColor: "#4CAF50",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Co-Lead",
    club: "SCD AWS PICT",
    avatarLabel: "P",
    badgeColor: "#4CAF50",
  },
  {
    id: 3,
    name: "Sam Chen",
    role: "Organizer",
    club: "Cloud Guild",
    avatarLabel: "S",
    badgeColor: "#47A3FF",
  },
  {
    id: 4,
    name: "Riya Patil",
    role: "Organizer",
    club: "Cloud Guild",
    avatarLabel: "R",
    badgeColor: "#47A3FF",
  },
  {
    id: 5,
    name: "Jordan Lee",
    role: "Contributor",
    club: "Dev Collective",
    avatarLabel: "J",
    badgeColor: "#47A3FF",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    role: "Contributor",
    club: "Dev Collective",
    avatarLabel: "N",
    badgeColor: "#47A3FF",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        {/* Section Header */}
        <div className="team-header">
          <h2 className="team-title">Meet the Team</h2>
          <p className="team-subtitle">The Guild Behind the Event</p>
        </div>

        {/* Team Roster Grid */}
        <div className="team-roster-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              {/* Avatar Frame */}
              <div className="team-avatar-frame">
                <div className="team-avatar-placeholder">
                  <span className="team-avatar-letter">
                    {member.avatarLabel}
                  </span>
                </div>
                {/* Once avatars are generated, replace the placeholder above with:
                <img
                  src={avatarXX}
                  alt={member.name}
                  className="team-avatar-img pixel-crisp"
                />
                */}
              </div>

              {/* Member Info */}
              <div className="team-card-info">
                <h3 className="team-member-name">{member.name}</h3>

                {/* Role Badge */}
                <div
                  className="team-role-badge"
                  style={{ backgroundColor: member.badgeColor }}
                >
                  <span className="team-role-text">{member.role}</span>
                </div>

                {/* Club Name */}
                <p className="team-club-name">{member.club}</p>
              </div>

              {/* Card Bottom Accent */}
              <div className="team-card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
