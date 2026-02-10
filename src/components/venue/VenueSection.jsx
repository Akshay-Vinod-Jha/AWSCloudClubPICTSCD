import React from "react";
import "./VenueSection.css";

// Character imports - According to characters_info.txt
// VenueSection uses:
// - cloud_explorer.png: Explorer/traveler representing journey to venue
// - cloud_bird.png: Environment life element for depth
import cloudExplorer from "../../assets/images/characters/cloud_explorer.png";
import cloudBird from "../../assets/images/characters/cloud_bird.png";
import groupPhoto from "../../assets/images/groupphoto.png";

const VenueSection = () => {
  return (
    <section className="venue-section">
      {/* Decorative Bird - Top Right */}
      <img
        src={cloudBird}
        alt="Bird"
        className="venue-bird-top pixel-crisp pixel-float-delayed"
      />

      <div className="venue-container">
        <div className="venue-header">
          <h2 className="venue-title">Event Venue</h2>
          <p className="venue-subtitle">Your Journey Begins Here</p>
        </div>

        <div className="venue-content">
          <div className="venue-info-column">
            <div className="venue-info-card reveal reveal--tile">
              <div className="venue-card-header">
                <h3 className="venue-card-title">Location Details</h3>
              </div>

              <div className="venue-details">
                <div className="venue-detail-item reveal reveal--slide">
                  <span className="venue-label">▶ Venue:</span>
                  <span className="venue-value">PICT Campus</span>
                </div>

                <div
                  className="venue-detail-item reveal reveal--slide"
                  style={{ animationDelay: "120ms" }}
                >
                  <span className="venue-label">▶ Address:</span>
                  <span className="venue-value">
                    Pune Institute of Computer Technology
                  </span>
                </div>

                <div
                  className="venue-detail-item reveal reveal--slide"
                  style={{ animationDelay: "240ms" }}
                >
                  <span className="venue-label">▶ Location:</span>
                  <span className="venue-value">
                    Survey No. 27, Near Trimurti Chowk
                  </span>
                </div>

                <div
                  className="venue-detail-item reveal reveal--slide"
                  style={{ animationDelay: "360ms" }}
                >
                  <span className="venue-label">▶ City:</span>
                  <span className="venue-value">Pune, Maharashtra 411043</span>
                </div>
              </div>

              <div className="venue-description">
                <p>
                  Join us at our campus venue for a full day of learning and
                  collaboration in the heart of Pune's tech community.
                </p>
              </div>
            </div>
          </div>

          <div className="venue-house-column">
            <img
              src={groupPhoto}
              alt="Group Photo"
              className="venue-group-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
