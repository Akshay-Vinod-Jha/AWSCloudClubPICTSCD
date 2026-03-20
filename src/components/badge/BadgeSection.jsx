import React, { useRef, useState } from "react";
import "./BadgeSection.css";

const cloudHelper = "/images/characters/cloud_helper.png";
const attendingTemplate = "/images/Attending_Template.jpeg";

const BadgeSection = () => {
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const handlePhotoSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedPhoto(event.target.result);
        generatePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePreview = (photoData) => {
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = 816;
      canvas.height = 1024;

      const ctx = canvas.getContext("2d");

      // Draw template
      const templateImg = new Image();
      templateImg.src = attendingTemplate;
      templateImg.onload = () => {
        ctx.drawImage(templateImg, 0, 0, 816, 1024);

        // Photo box positioned to the left of "AWS STUDENT COMMUNITY DAY PUNE 2026"
        const photoSize = 215; // Width and height of square photo
        const photoX = 72; // Left edge position
        const photoY = 390; // Top edge position
        const borderWidth = 6; // Pixel art border thickness

        // Draw photo with cover fill (stretch and crop)
        ctx.save();
        ctx.beginPath();
        ctx.rect(photoX, photoY, photoSize, photoSize);
        ctx.clip();

        // Calculate aspect ratio
        const imgAspect = img.width / img.height;
        const frameAspect = 1; // Square frame

        let drawWidth = photoSize;
        let drawHeight = photoSize;
        let offsetX = photoX;
        let offsetY = photoY;

        if (imgAspect > frameAspect) {
          // Image is wider - stretch to fill height, crop sides
          drawHeight = photoSize;
          drawWidth = photoSize * imgAspect;
          offsetX = photoX - (drawWidth - photoSize) / 2;
          offsetY = photoY;
        } else {
          // Image is taller - stretch to fill width, crop top/bottom
          drawWidth = photoSize;
          drawHeight = photoSize / imgAspect;
          offsetX = photoX;
          offsetY = photoY - (drawHeight - photoSize) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        ctx.restore();

        // Draw pixel art border around photo
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = borderWidth;
        ctx.strokeRect(
          photoX + borderWidth / 2,
          photoY + borderWidth / 2,
          photoSize - borderWidth,
          photoSize - borderWidth,
        );

        // Draw shadow effect (pixel style) - 6px offset
        ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
        ctx.lineWidth = 2;
        ctx.strokeRect(
          photoX + borderWidth + 6,
          photoY + borderWidth + 6,
          photoSize - borderWidth,
          photoSize - borderWidth,
        );

        // Convert canvas to image for preview
        const previewUrl = canvas.toDataURL("image/jpeg", 0.95);
        setPreview(previewUrl);
      };
    };
    img.src = photoData;
  };

  const handleDownload = () => {
    if (!preview) {
      alert("Please select a photo first!");
      return;
    }

    const link = document.createElement("a");
    link.href = preview;
    link.download = "AWS_Community_Day_Badge.jpeg";
    link.click();
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="badge-section">
      {/* Decorative Character */}
      <img
        src={cloudHelper}
        alt="Badge Helper"
        className="badge-helper pixel-crisp pixel-float"
      />

      <div className="badge-container">
        {/* Section Heading */}
        <div className="badge-header">
          <h2 className="badge-title">
            Download Your
            <br />
            <span className="badge-highlight">Participation Badge</span>
          </h2>
          <p className="badge-subtitle">Customize Your Badge with Your Photo</p>
        </div>

        {/* Main Content */}
        <div className="badge-content">
          {/* Template Display */}
          <div className="badge-template-wrapper">
            <div className="badge-template-container">
              {preview && (
                <img
                  src={preview}
                  alt="Badge Preview"
                  className="badge-preview-image pixel-crisp"
                />
              )}
              {!preview && (
                <>
                  <img
                    src={attendingTemplate}
                    alt="Attending Template"
                    className="badge-template-image pixel-crisp"
                  />
                  <div className="badge-placeholder-text">
                    <p>▶ Choose a photo to preview</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Controls Section */}
          <div className="badge-controls">
            {/* Photo Selection */}
            <div className="badge-control-group">
              <h3 className="control-title">Step 1: Select Your Photo</h3>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoSelect}
                className="hidden-file-input"
              />
              <button
                className="pixel-button badge-choose-btn"
                onClick={handleChooseFile}
              >
                Choose File
              </button>
              {selectedPhoto && (
                <div className="badge-file-selected">
                  <p className="select-status">✓ Photo Selected</p>
                </div>
              )}
            </div>

            {/* Download Button */}
            <div className="badge-control-group">
              <h3 className="control-title">Step 2: Download Badge</h3>
              <button
                className="pixel-button badge-download-btn"
                onClick={handleDownload}
                disabled={!preview}
              >
                Download Badge
              </button>
            </div>

            {/* Instructions */}
            <div className="badge-instructions">
              <p className="instruction-title">▶ Tips:</p>
              <ul className="instruction-list">
                <li>Use a clear, face-forward photo</li>
                <li>Square or portrait photos work best</li>
                <li>Minimum 500px width recommended</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hidden Canvas for Processing */}
        <canvas
          ref={canvasRef}
          className="hidden-canvas"
          style={{ display: "none" }}
        ></canvas>
      </div>
    </section>
  );
};

export default BadgeSection;
