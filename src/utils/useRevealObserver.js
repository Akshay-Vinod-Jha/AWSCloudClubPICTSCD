import { useEffect } from "react";

/**
 * useRevealObserver
 *
 * Global IntersectionObserver hook for triggering reveal animations
 * when elements enter the viewport.
 *
 * Usage:
 * - Add .reveal class to any element that should animate on scroll
 * - Add modifier classes for animation type:
 *   .reveal--pixel (heading reveals)
 *   .reveal--tile (block assembly)
 *   .reveal--drop (cards dropping in)
 * - Add .reveal--stagger-{n} for sequential delays
 *
 * Observer adds .is-visible class when element intersects viewport
 * CSS handles animation (see pixel-theme.css)
 */

const useRevealObserver = () => {
  useEffect(() => {
    // Select all elements with .reveal class
    const revealElements = document.querySelectorAll(".reveal");

    // Create IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to trigger CSS animation
            entry.target.classList.add("is-visible");

            // Unobserve element (trigger animation only once)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: "0px 0px -10% 0px", // Trigger slightly before element fully enters
      },
    );

    // Observe all reveal elements
    revealElements.forEach((element) => {
      // Check if element is already in viewport on init
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport) {
        // Immediately add visible class for elements already in view
        element.classList.add("is-visible");
      } else {
        // Observe elements not yet in viewport
        observer.observe(element);
      }
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useRevealObserver;
