import React from "react";
import "./PastEventsSection.css";

// Event thumbnail imports
import event01 from "../../assets/images/past-events/event_01.jpg";
import event02 from "../../assets/images/past-events/event_02.jpg";
import event03 from "../../assets/images/past-events/event_03.jpg";
import event04 from "../../assets/images/past-events/event_04.jpg";

const pastEvents = [
  {
    id: 1,
    name: "Cloud Day 2023",
    year: "2023",
    description: "Our first community meetup exploring cloud essentials.",
    thumbnail: event01,
  },
  {
    id: 2,
    name: "Hack the Cloud",
    year: "2023",
    description: "A 24-hour hackathon building cloud-native solutions.",
    thumbnail: event02,
  },
  {
    id: 3,
    name: "AWS Workshop Series",
    year: "2024",
    description: "Hands-on workshops covering AWS core services.",
    thumbnail: event03,
  },
  {
    id: 4,
    name: "Cloud Summit 2024",
    year: "2024",
    description: "Full-day summit with speakers, demos, and networking.",
    thumbnail: event04,
  },
];

const PastEventsSection = () => {
  return (
    <section className="past-events-section">
      <div className="past-events-container">
        {/* Section Header */}
        <div className="past-events-header">
          <h2 className="past-events-title">Past Events</h2>
          <p className="past-events-subtitle">Our Community Archive</p>
        </div>

        {/* Events Gallery Grid */}
        <div className="past-events-grid">
          {pastEvents.map((event) => (
            <div key={event.id} className="past-event-card">
              {/* Thumbnail Area */}
              <div className="past-event-thumbnail">
                <img
                  src={event.thumbnail}
                  alt={event.name}
                  className="past-event-thumb-img pixel-crisp"
                />
              </div>

              {/* Event Info Panel */}
              <div className="past-event-info">
                {/* Year Badge */}
                <div className="past-event-year-badge">
                  <span className="past-event-year">{event.year}</span>
                </div>

                {/* Event Name */}
                <h3 className="past-event-name">{event.name}</h3>

                {/* Description */}
                <p className="past-event-desc">{event.description}</p>
              </div>

              {/* Card Bottom Accent */}
              <div className="past-event-card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
