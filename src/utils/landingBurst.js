/**
 * Landing Burst Effect
 *
 * Spawns pixel-art cloud/bird/icon particles that burst outward
 * from an element after it lands (pixel block drop-in).
 * Particles fly out in random directions and fade away.
 *
 * Usage:
 *   import { triggerLandingBurst } from '../utils/landingBurst';
 *   triggerLandingBurst(containerRef.current, [cloudImg, birdImg]);
 */

const PARTICLE_COUNT = 12;
const PARTICLES_PER_CORNER = PARTICLE_COUNT / 2;

/**
 * Spawns burst particles from bottom-left and bottom-right of targetEl.
 * @param {HTMLElement} containerEl - The positioned container to append particles into
 * @param {string[]} imageUrls - Array of resolved image URLs to randomly pick from
 */
export function triggerLandingBurst(containerEl, imageUrls) {
  if (!containerEl || !imageUrls.length) return;

  const rect = containerEl.getBoundingClientRect();
  const containerRect = containerEl.offsetParent
    ? containerEl.offsetParent.getBoundingClientRect()
    : rect;

  const parent = containerEl.offsetParent || containerEl;

  // Bottom-left corner
  const blX = rect.left - containerRect.left;
  const blY = rect.top - containerRect.top + rect.height;

  // Bottom-right corner
  const brX = rect.left - containerRect.left + rect.width;
  const brY = blY;

  for (let i = 0; i < PARTICLES_PER_CORNER; i++) {
    // Bottom-left: angles roughly upward-left (-90° to -180°, i.e. upper-left quadrant)
    const angleL = -Math.PI / 2 - Math.random() * (Math.PI / 2); // -90° to -180°
    spawnParticle(parent, blX, blY, imageUrls, angleL);

    // Bottom-right: angles roughly upward-right (-90° to 0°, i.e. upper-right quadrant)
    const angleR = -Math.PI / 2 + Math.random() * (Math.PI / 2); // -90° to 0°
    spawnParticle(parent, brX, brY, imageUrls, angleR);
  }
}

function spawnParticle(container, cx, cy, imageUrls, angle) {
  const particle = document.createElement("div");
  particle.className = "landing-burst-particle";

  // Random image from pool
  const img = document.createElement("img");
  img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  img.alt = "";
  particle.appendChild(img);

  const dist = 60 + Math.floor(Math.random() * 80); // 60–140px

  // End position offsets (integer px)
  const dx = Math.round(Math.cos(angle) * dist);
  const dy = Math.round(Math.sin(angle) * dist);

  // Random size 20-36px
  const size = 20 + Math.floor(Math.random() * 17);

  particle.style.cssText = `
    left: ${Math.round(cx)}px;
    top: ${Math.round(cy)}px;
    width: ${size}px;
    height: ${size}px;
    --burst-dx: ${dx}px;
    --burst-dy: ${dy}px;
    animation-delay: ${Math.floor(Math.random() * 80)}ms;
  `;

  container.appendChild(particle);

  // Remove after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 700);
}
