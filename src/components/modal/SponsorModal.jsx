import React, { useEffect, useRef } from "react";
import "./SponsorModal.css";
import { addPixelBurst } from "../../utils/pixelBurst";
const cloudHelper = "/images/characters/cloud_helper.png";

const SponsorModal = ({ isOpen, onClose }) => {
  const downloadBtnRef = useRef(null);

  useEffect(() => {
    if (downloadBtnRef.current && isOpen) {
      return addPixelBurst(downloadBtnRef.current, cloudHelper);
    }
  }, [isOpen]);

  const handleDownloadBadge = () => {
    onClose();
    // Scroll to badge section smoothly
    setTimeout(() => {
      const badgeSection = document.getElementById("badge");
      if (badgeSection) {
        badgeSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="sponsor-modal-overlay" onClick={onClose}>
      <div
        className="sponsor-modal-content pixel-shake"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="sponsor-modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Modal Header */}
        <div className="sponsor-modal-header">
          <img
            src={cloudHelper}
            alt="Cloud Helper"
            className="sponsor-modal-mascot pixel-crisp pixel-float"
          />
          <h2 className="sponsor-modal-title">Get Your Badge!</h2>
        </div>

        {/* Modal Body */}
        <div className="sponsor-modal-body">
          <p className="sponsor-modal-text">
            Create your personalized AWS SCD badge and make it your own!
          </p>
          <p className="sponsor-modal-email">
            Upload your photo and download your digital badge
          </p>
        </div>

        {/* Modal Footer */}
        <div className="sponsor-modal-footer">
          <button
            ref={downloadBtnRef}
            className="pixel-button sponsor-modal-download-btn"
            onClick={handleDownloadBadge}
          >
            Download Your Badge
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorModal;
