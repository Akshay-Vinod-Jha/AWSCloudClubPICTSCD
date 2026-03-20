import React, { useRef, useCallback, useState } from "react";
import "./VenueHouse360.css";

// 16 house angle imports (every 22.5°)
const house000 = "/images/venue-house/house_000.jpg";
const house022 = "/images/venue-house/house_022.jpg";
const house045 = "/images/venue-house/house_045.jpg";
const house067 = "/images/venue-house/house_067.jpg";
const house090 = "/images/venue-house/house_090.jpg";
const house112 = "/images/venue-house/house_112.jpg";
const house135 = "/images/venue-house/house_135.jpg";
const house157 = "/images/venue-house/house_157.jpg";
const house180 = "/images/venue-house/house_180.jpg";
const house202 = "/images/venue-house/house_202.jpg";
const house225 = "/images/venue-house/house_225.jpg";
const house247 = "/images/venue-house/house_247.jpg";
const house270 = "/images/venue-house/house_270.jpg";
const house292 = "/images/venue-house/house_292.jpg";
const house315 = "/images/venue-house/house_315.jpg";
const house337 = "/images/venue-house/house_337.jpg";

const FRAMES = [
  house000,
  house022,
  house045,
  house067,
  house090,
  house112,
  house135,
  house157,
  house180,
  house202,
  house225,
  house247,
  house270,
  house292,
  house315,
  house337,
];

const TOTAL_FRAMES = FRAMES.length; // 16

// Vertical tilt clamp
const TILT_MIN = -30;
const TILT_MAX = 30;

const VenueHouse360 = () => {
  const containerRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = useCallback((e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();

    // Normalized position 0..1
    const normX = (e.clientX - rect.left) / rect.width;
    const normY = (e.clientY - rect.top) / rect.height;

    // Horizontal: map 0..1 → frame index (full 360°)
    const newIndex = Math.round(normX * (TOTAL_FRAMES - 1)) % TOTAL_FRAMES;
    setFrameIndex(newIndex < 0 ? newIndex + TOTAL_FRAMES : newIndex);

    // Vertical: map 0..1 → TILT_MIN..TILT_MAX, snapped to integer
    const rawTilt = TILT_MIN + normY * (TILT_MAX - TILT_MIN);
    const clampedTilt = Math.max(TILT_MIN, Math.min(TILT_MAX, rawTilt));
    setTiltY(Math.round(clampedTilt));
  }, []);

  return (
    <div
      className="vh360-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Frame label */}
      <div className="vh360-label-top">
        <span className="vh360-label-star">★</span>
        <span className="vh360-label-text">360° Venue View</span>
        <span className="vh360-label-star">★</span>
      </div>

      {/* House viewport */}
      <div className="vh360-viewport">
        <div
          className="vh360-frame-wrapper"
          style={{
            transform: `perspective(600px) rotateX(${tiltY}deg)`,
          }}
        >
          <img
            src={FRAMES[frameIndex]}
            alt={`House at ${frameIndex * 22.5}°`}
            className="vh360-house-image pixel-crisp"
            draggable={false}
          />
        </div>

        {/* Ground base */}
        <div className="vh360-ground">
          <div className="vh360-grass"></div>
          <div className="vh360-dirt"></div>
        </div>
      </div>

      {/* Hint */}
      <div className="vh360-hint">
        <span>▶ Move mouse to rotate</span>
      </div>
    </div>
  );
};

export default VenueHouse360;
