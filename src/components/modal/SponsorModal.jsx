import React, { useEffect, useRef } from "react";
import "./SponsorModal.css";
import { addPixelBurst } from "../../utils/pixelBurst";
import cloudHelper from "../../assets/images/characters/cloud_helper.png";

const SponsorModal = ({ isOpen, onClose }) => {
  const downloadBtnRef = useRef(null);

  useEffect(() => {
    if (downloadBtnRef.current && isOpen) {
      return addPixelBurst(downloadBtnRef.current, cloudHelper);
    }
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AWS_Student_Community_Day_Pune_2026_Sponsorship_Brochure.pdf";
    link.download =
      "AWS_Student_Community_Day_Pune_2026_Sponsorship_Brochure.pdf";
    link.click();
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
          <h2 className="sponsor-modal-title">Sponsor Us!</h2>
        </div>

        {/* Modal Body */}
        <div className="sponsor-modal-body">
          <p className="sponsor-modal-text">
            Want to sponsor us? Contact us on
          </p>
          <p className="sponsor-modal-email">awscloudclubpict@gmail.com</p>
        </div>

        {/* Modal Footer */}
        <div className="sponsor-modal-footer">
          <button
            ref={downloadBtnRef}
            className="pixel-button sponsor-modal-download-btn"
            onClick={handleDownload}
          >
            Download the Sponsorship Deck
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorModal;
