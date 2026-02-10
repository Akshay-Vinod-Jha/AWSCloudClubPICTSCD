import React, { useRef, useCallback, useEffect, useState } from "react";
import "./pixelWorld.css";

/*
NANO BANANA PROMPT (if you want to generate a terrain background image):

"Pixel art Minecraft-style overworld scene, large terrain map,
grass blocks, dirt layers, trees, and a central wooden house inspired
by Technoblade survival base, blocky voxel style, flat colors only,
no gradients, no blur, no characters, pixel-perfect edges,
NES/SNES/Minecraft style, designed for draggable world background"

Save as: assets/images/worlds/venue_pixel_world.png
*/

// World dimensions (virtual canvas)
const WORLD_W = 2000;
const WORLD_H = 1200;

// Pure CSS pixel world — no external images required
const PixelWorld = () => {
  const viewportRef = useRef(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: -400, y: -200 });
  const [pos, setPos] = useState({ x: -400, y: -200 });

  const clamp = useCallback((x, y) => {
    const vp = viewportRef.current;
    if (!vp) return { x, y };
    const vpW = vp.clientWidth;
    const vpH = vp.clientHeight;
    const minX = -(WORLD_W - vpW);
    const minY = -(WORLD_H - vpH);
    return {
      x: Math.round(Math.max(minX, Math.min(0, x))),
      y: Math.round(Math.max(minY, Math.min(0, y))),
    };
  }, []);

  const handleMouseDown = useCallback((e) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging.current) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      dragStart.current = { x: e.clientX, y: e.clientY };
      const newX = offset.current.x + dx;
      const newY = offset.current.y + dy;
      const clamped = clamp(newX, newY);
      offset.current = clamped;
      setPos(clamped);
    },
    [clamp],
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      const newY = offset.current.y - Math.round(e.deltaY * 0.5);
      const newX = offset.current.x - Math.round(e.deltaX * 0.5);
      const clamped = clamp(newX, newY);
      offset.current = clamped;
      setPos(clamped);
    },
    [clamp],
  );

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    vp.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      vp.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleWheel, handleMouseMove, handleMouseUp]);

  return (
    <div
      className="pw-viewport"
      ref={viewportRef}
      onMouseDown={handleMouseDown}
    >
      <div
        className="pw-world"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      >
        {/* ===== SKY ===== */}
        <div className="pw-sky">
          {/* Sun */}
          <div className="pw-sun"></div>
          {/* Clouds */}
          <div className="pw-cloud pw-cloud-1">
            <div className="pw-cloud-block"></div>
            <div className="pw-cloud-block"></div>
            <div className="pw-cloud-block pw-cloud-top"></div>
            <div className="pw-cloud-block"></div>
          </div>
          <div className="pw-cloud pw-cloud-2">
            <div className="pw-cloud-block"></div>
            <div className="pw-cloud-block pw-cloud-top"></div>
            <div className="pw-cloud-block"></div>
          </div>
          <div className="pw-cloud pw-cloud-3">
            <div className="pw-cloud-block"></div>
            <div className="pw-cloud-block"></div>
            <div className="pw-cloud-block pw-cloud-top"></div>
            <div className="pw-cloud-block"></div>
            <div className="pw-cloud-block"></div>
          </div>
        </div>

        {/* ===== TERRAIN ===== */}
        <div className="pw-terrain">
          {/* Trees - Left Forest */}
          <div className="pw-tree pw-tree-1">
            <div className="pw-leaves"></div>
            <div className="pw-leaves pw-leaves-top"></div>
            <div className="pw-trunk"></div>
          </div>
          <div className="pw-tree pw-tree-2">
            <div className="pw-leaves"></div>
            <div className="pw-leaves pw-leaves-top"></div>
            <div className="pw-trunk"></div>
          </div>
          <div className="pw-tree pw-tree-3">
            <div className="pw-leaves"></div>
            <div className="pw-leaves pw-leaves-top"></div>
            <div className="pw-trunk"></div>
          </div>

          {/* ===== HOUSE (Focal Point) ===== */}
          <div className="pw-house">
            {/* Roof */}
            <div className="pw-roof">
              <div className="pw-roof-peak"></div>
              <div className="pw-roof-mid"></div>
              <div className="pw-roof-base"></div>
            </div>
            {/* Walls */}
            <div className="pw-walls">
              {/* Door */}
              <div className="pw-door">
                <div className="pw-door-knob"></div>
              </div>
              {/* Window Left */}
              <div className="pw-window pw-window-left">
                <div className="pw-window-pane"></div>
                <div className="pw-window-pane"></div>
                <div className="pw-window-pane"></div>
                <div className="pw-window-pane"></div>
              </div>
              {/* Window Right */}
              <div className="pw-window pw-window-right">
                <div className="pw-window-pane"></div>
                <div className="pw-window-pane"></div>
                <div className="pw-window-pane"></div>
                <div className="pw-window-pane"></div>
              </div>
              {/* Chimney */}
              <div className="pw-chimney"></div>
            </div>
            {/* Foundation */}
            <div className="pw-foundation"></div>
          </div>

          {/* Trees - Right Forest */}
          <div className="pw-tree pw-tree-4">
            <div className="pw-leaves"></div>
            <div className="pw-leaves pw-leaves-top"></div>
            <div className="pw-trunk"></div>
          </div>
          <div className="pw-tree pw-tree-5">
            <div className="pw-leaves"></div>
            <div className="pw-leaves pw-leaves-top"></div>
            <div className="pw-trunk"></div>
          </div>
          <div className="pw-tree pw-tree-6">
            <div className="pw-leaves"></div>
            <div className="pw-leaves pw-leaves-top"></div>
            <div className="pw-trunk"></div>
          </div>
          <div className="pw-tree pw-tree-7">
            <div className="pw-leaves"></div>
            <div className="pw-leaves pw-leaves-top"></div>
            <div className="pw-trunk"></div>
          </div>

          {/* Flowers / Bushes */}
          <div className="pw-bush pw-bush-1"></div>
          <div className="pw-bush pw-bush-2"></div>
          <div className="pw-bush pw-bush-3"></div>
          <div className="pw-flower pw-flower-1"></div>
          <div className="pw-flower pw-flower-2"></div>
          <div className="pw-flower pw-flower-3"></div>

          {/* Path to house */}
          <div className="pw-path">
            <div className="pw-path-block"></div>
            <div className="pw-path-block"></div>
            <div className="pw-path-block"></div>
            <div className="pw-path-block"></div>
            <div className="pw-path-block"></div>
            <div className="pw-path-block"></div>
            <div className="pw-path-block"></div>
            <div className="pw-path-block"></div>
          </div>

          {/* Fence */}
          <div className="pw-fence">
            <div className="pw-fence-post"></div>
            <div className="pw-fence-rail"></div>
            <div className="pw-fence-post"></div>
            <div className="pw-fence-rail"></div>
            <div className="pw-fence-post"></div>
            <div className="pw-fence-rail"></div>
            <div className="pw-fence-post"></div>
          </div>
        </div>

        {/* ===== GROUND LAYERS ===== */}
        <div className="pw-ground">
          <div className="pw-grass-layer"></div>
          <div className="pw-dirt-layer"></div>
          <div className="pw-stone-layer"></div>
          <div className="pw-deep-stone-layer"></div>
        </div>
      </div>

      {/* Viewport UI Overlay */}
      <div className="pw-ui-hint">
        <span>☐ Drag to explore</span>
      </div>
    </div>
  );
};

export default PixelWorld;
