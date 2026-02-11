import React, { useRef, useEffect, useState } from "react";
import "./VenueSection.css";

// Character imports - According to characters_info.txt
// VenueSection uses:
// - cloud_explorer.png: Explorer/traveler representing journey to venue
// - cloud_bird.png: Environment life element for depth
import cloudExplorer from "../../assets/images/characters/cloud_explorer.png";
import cloudBird from "../../assets/images/characters/cloud_bird.png";
import groupPhoto from "../../assets/images/groupphoto.png";

const VenueSection = () => {
  const sectionRef = useRef(null);
  const [slid, setSlid] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSlid(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="venue-section" ref={sectionRef}>
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
                  <span className="venue-value">Cloud 99 Banquet</span>
                </div>

                <div
                  className="venue-detail-item reveal reveal--slide"
                  style={{ animationDelay: "120ms" }}
                >
                  <span className="venue-label">▶ Address:</span>
                  <span className="venue-value">
                    Vinode Nagar, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park
                  </span>
                </div>

                <div
                  className="venue-detail-item reveal reveal--slide"
                  style={{ animationDelay: "240ms" }}
                >
                  <span className="venue-label">▶ Location:</span>
                  <span className="venue-value">Hinjawadi, Pune</span>
                </div>

                <div
                  className="venue-detail-item reveal reveal--slide"
                  style={{ animationDelay: "360ms" }}
                >
                  <span className="venue-label">▶ City:</span>
                  <span className="venue-value">
                    Pimpri-Chinchwad, Maharashtra 411057
                  </span>
                </div>
              </div>

              <div className="venue-description">
                <p>
                  Join us at Cloud 99 Banquet for a full day of learning and
                  collaboration in Hinjawadi's premier event venue.
                </p>
              </div>
            </div>
          </div>

          <div className="venue-house-column">
            <img
              src={groupPhoto}
              alt="Group Photo"
              className={`venue-group-photo${
                slid ? " venue-slide-in-done" : " venue-slide-in-ready"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
