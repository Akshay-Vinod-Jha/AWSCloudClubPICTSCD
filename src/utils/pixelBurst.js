/**
 * Pixel Burst Effect Utility
 *
 * Creates Minecraft-style particle burst on button click
 * Generates 8 cloud particles that burst outward in all directions
 *
 * Usage:
 * import { addPixelBurst } from './utils/pixelBurst';
 *
 * In component:
 * const buttonRef = useRef(null);
 * useEffect(() => {
 *   addPixelBurst(buttonRef.current);
 * }, []);
 */

// Cloud particle image URL (set by caller)
let cloudImageUrl = "";

// 8 cardinal directions for particle burst
const DIRECTIONS = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];

/**
 * Creates pixel burst particles on click
 * @param {HTMLElement} button - The button element to attach burst effect to
 * @param {string} imageUrl - Resolved import URL for cloud image
 */
export function addPixelBurst(button, imageUrl) {
  if (!button) return;
  if (imageUrl) cloudImageUrl = imageUrl;

  const handleClick = (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Create 8 particles (one per direction)
    DIRECTIONS.forEach((direction, index) => {
      createParticle(button, x, y, direction, index);
    });
  };

  button.addEventListener("click", handleClick);

  // Return cleanup function
  return () => {
    button.removeEventListener("click", handleClick);
  };
}

/**
 * Creates a single particle element
 * @param {HTMLElement} container - Parent container
 * @param {number} x - X position relative to container
 * @param {number} y - Y position relative to container
 * @param {string} direction - Burst direction (n, ne, e, se, s, sw, w, nw)
 * @param {number} index - Particle index
 */
function createParticle(container, x, y, direction, index) {
  const particle = document.createElement("div");
  particle.className = "pixel-burst-particle";
  particle.setAttribute("data-direction", direction);

  // Create cloud image element
  const cloudImg = document.createElement("img");
  cloudImg.src = cloudImageUrl;
  cloudImg.alt = "";
  cloudImg.style.width = "100%";
  cloudImg.style.height = "100%";
  particle.appendChild(cloudImg);

  // Position at click point
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Add to container
  container.appendChild(particle);

  // Remove after animation completes
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 250);
}

/**
 * React hook for pixel burst effect
 * @param {React.RefObject} buttonRef - Ref to button element
 */
export function usePixelBurst(buttonRef) {
  if (typeof window === "undefined") return; // SSR safety

  const React = require("react");
  const { useEffect } = React;

  useEffect(() => {
    if (buttonRef.current) {
      return addPixelBurst(buttonRef.current);
    }
  }, [buttonRef]);
}
