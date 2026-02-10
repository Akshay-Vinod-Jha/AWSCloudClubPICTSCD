import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Card — matches Hero style */}
      <div className="footer-card">
        {/* Event Info */}
        <div className="footer-block">
          <h4 className="footer-block-title">Event Info</h4>
          <p className="footer-event-name">Student Community Day</p>
          <p className="footer-event-desc">
            A full-day cloud community event bringing together students,
            developers, and cloud enthusiasts.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-block">
          <h4 className="footer-block-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#tracks">Tracks</a>
            </li>
            <li>
              <a href="#agenda">Agenda</a>
            </li>
            <li>
              <a href="#register">Register</a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div className="footer-block">
          <h4 className="footer-block-title">Community</h4>
          <p className="footer-community-name">AWS Cloud Club — PICT</p>
          <p className="footer-college-name">
            Pune Institute of Computer Technology, Pune
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright-bar">
        <p className="footer-copyright-text">
          © 2025 Student Community Day — All rights reserved.
        </p>
      </div>

      {/* Ground Layers */}
      <div className="footer-ground">
        <div className="footer-grass"></div>
        <div className="footer-dirt"></div>
        <div className="footer-bedrock"></div>
      </div>
    </footer>
  );
};

export default Footer;
