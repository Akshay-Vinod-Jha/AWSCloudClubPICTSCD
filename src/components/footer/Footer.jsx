import React, { useRef, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);
  const stepsRef = useRef([]);

  const assignRef = (el) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    window.open(
      "https://konfhub.com/aws-student-community-day-pict",
      "_blank",
      "noopener,noreferrer",
    );
  };

  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stepsRef.current.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("footer-slide-revealed");
            }, i * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      {/* Footer Card — matches Hero style */}
      <div className="footer-card">
        {/* Event Info */}
        <div ref={assignRef} className="footer-block footer-slide-hidden-left">
          <h4 className="footer-block-title">Event Info</h4>
          <p className="footer-event-name">Student Community Day</p>
          <p className="footer-event-desc">
            A full-day cloud community event bringing together students,
            developers, and cloud enthusiasts.
          </p>
        </div>

        {/* Quick Links */}
        <div ref={assignRef} className="footer-block footer-slide-hidden-right">
          <h4 className="footer-block-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#agenda">Agenda</a>
            </li>
            <li>
              <a href="#register" onClick={handleRegisterClick}>
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div ref={assignRef} className="footer-block footer-slide-hidden-left">
          <h4 className="footer-block-title">Community</h4>
          <p className="footer-community-name">AWS Cloud Club — PICT</p>
          <p className="footer-college-name">
            Pune Institute of Computer Technology, Pune
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div
        ref={assignRef}
        className="footer-copyright-bar footer-slide-hidden-right"
      >
        <p className="footer-copyright-text">
          © 2026 AWS Student Community Day Pune - All rights reserved.
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
