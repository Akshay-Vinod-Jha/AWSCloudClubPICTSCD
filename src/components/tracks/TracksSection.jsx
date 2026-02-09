import React from "react";
import "./TracksSection.css";

// Character imports - According to characters_info.txt
// TracksSection uses:
// - cloud_explorer.png: Explorer/progression character (main)
// - cloud_bird.png: Motion/exploration accent (small floating)
import cloudExplorer from "../../assets/images/characters/cloud_explorer.png";
import cloudBird from "../../assets/images/characters/cloud_bird.png";

// Track icon imports - Pixel art icons
import cloudTrackIcon from "../../assets/images/icons/cloud_track_icon.jpg";
import computeTrackIcon from "../../assets/images/icons/compute_track_icon.jpg";
import devopsTrackIcon from "../../assets/images/icons/devops_track_icon.jpg";
import aiTrackIcon from "../../assets/images/icons/ai_track_icon.jpg";

const TracksSection = () => {
  const tracks = [
    {
      title: "Cloud Fundamentals",
      description:
        "Build a strong foundation in cloud computing concepts, AWS core services, and architecture basics.",
      icon: cloudTrackIcon,
    },
    {
      title: "Compute & Storage",
      description:
        "Master EC2, Lambda, S3, and storage solutions for scalable cloud infrastructure.",
      icon: computeTrackIcon,
    },
    {
      title: "DevOps & CI/CD",
      description:
        "Learn deployment automation, containerization, and continuous integration pipelines.",
      icon: devopsTrackIcon,
    },
    {
      title: "AI / ML & GenAI",
      description:
        "Explore machine learning services, generative AI, and intelligent cloud applications.",
      icon: aiTrackIcon,
    },
  ];

  return (
    <section className="tracks-section">
      {/* Decorative Bird - Top Corner */}
      <img
        src={cloudBird}
        alt="Flying Bird"
        className="tracks-bird pixel-crisp pixel-float"
      />

      <div className="tracks-container">
        {/* Section Heading */}
        <div className="tracks-header">
          <h2 className="tracks-title">Learning Tracks</h2>
          <p className="tracks-subtitle">Choose Your Cloud Adventure Path</p>
        </div>

        {/* Main Content Layout */}
        <div className="tracks-content">
          {/* Explorer Character - Left Side */}
          <div className="tracks-explorer">
            <img
              src={cloudExplorer}
              alt="Cloud Explorer"
              className="explorer-image pixel-crisp"
            />
          </div>

          {/* Tracks Grid */}
          <div className="tracks-grid">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="track-card reveal reveal--drop"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="track-symbol">
                  <img
                    src={track.icon}
                    alt={track.title}
                    className="track-icon-image pixel-crisp"
                  />
                </div>
                <h3 className="track-title">{track.title}</h3>
                <p className="track-description">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
