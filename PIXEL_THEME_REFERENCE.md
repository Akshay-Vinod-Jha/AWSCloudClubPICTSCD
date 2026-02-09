# PIXEL THEME QUICK REFERENCE

Quick reference guide for maintaining pixel art consistency across all components.

## 🎨 Color Variables Usage

```css
/* Backgrounds */
background-color: var(--pixel-sky-blue); /* Primary background */
background-color: var(--pixel-grass); /* Success/CTA backgrounds */
background-color: var(--pixel-white); /* Content blocks */

/* Text Colors */
color: var(--pixel-white); /* Primary text */
color: var(--pixel-yellow); /* Accent text */
color: var(--pixel-black); /* Dark text on light bg */

/* Borders & Shadows */
border: 4px solid var(--pixel-black); /* Standard border */
box-shadow: 8px 8px 0 var(--pixel-black); /* Large shadow */
box-shadow: 4px 4px 0 var(--pixel-black); /* Medium shadow */
text-shadow: 4px 4px 0 var(--pixel-black); /* Text depth */
```

## 🔲 Utility Classes

```css
/* Apply to any element */
.pixel-button        /* Pre-styled pixel button */
.pixel-border        /* 4px black border */
.pixel-shadow        /* 8px offset shadow */
.pixel-shadow-small  /* 4px offset shadow */
.pixel-block         /* Background + border combo */
.pixel-crisp         /* Force pixelated rendering */
```

## 📐 Layout Patterns

### Section Container

```jsx
<section className="section-name">
  <div className="container">{/* Content */}</div>
</section>
```

### Pixel Box

```jsx
<div className="pixel-block pixel-shadow">
  <h3>Title</h3>
  <p>Content</p>
</div>
```

## 🎯 Button Usage

```jsx
/* Primary CTA */
<button className="pixel-button">
  Register Now
</button>

/* With custom styling */
<button
  className="pixel-button"
  style={{backgroundColor: 'var(--pixel-yellow)'}}
>
  Learn More
</button>
```

## 🖼️ Image Handling

```jsx
/* Always include pixel-crisp class */
<img
  src="/path/to/character.png"
  alt="Character Name"
  className="pixel-crisp"
/>

/* With size constraints */
<img
  src="/path/to/character.png"
  alt="Character Name"
  className="pixel-crisp"
  style={{width: '200px', height: 'auto'}}
/>
```

## ✨ Common Animations

### Float

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
animation: float 3s ease-in-out infinite;
```

### Bounce

```css
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
animation: bounce 4s ease-in-out infinite;
```

### Pulse

```css
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
animation: pulse 2s ease-in-out infinite;
```

## 📱 Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 968px) {
  /* Adjust grid, font sizes */
}

/* Mobile */
@media (max-width: 640px) {
  /* Stack elements, reduce sizes */
}
```

## ⚠️ DON'Ts

```css
/* NEVER use these */
border-radius: 8px; /* No rounded corners */
box-shadow: 0 4px 6px rgba(); /* No blur shadows */
background: linear-gradient(); /* Avoid gradients (only sky bg exception) */
filter: blur(); /* No blur */
transition: all 0.3s; /* Minimize smooth transitions */
font-family: "Inter", sans; /* Only pixel fonts */
```

## ✅ DOs

```css
/* Always use these */
border: 4px solid var(--pixel-black);
box-shadow: 8px 8px 0 var(--pixel-black);
font-family: "Press Start 2P", cursive;
image-rendering: pixelated;
transition: none; /* Or very specific properties */
```

## 🎮 Character Placement Guidelines

1. **Max 1-2 characters per section**
2. **Characters should support content, not distract**
3. **Use semantic roles** (refer to character documentation)
4. **Size hierarchy:**
   - Main character: 300-400px
   - Supporting: 100-150px
   - Accent/helper: 50-80px
5. **Always add:** `className="pixel-crisp"`
6. **Always add:** `filter: drop-shadow()` for depth

## 🔧 Component Template

```jsx
import React from "react";
import "./ComponentName.css";

const ComponentName = () => {
  return (
    <section className="component-section">
      <div className="container">
        <h2>Section Title</h2>
        <p>Section content</p>
        <button className="pixel-button">Call to Action</button>
      </div>
    </section>
  );
};

export default ComponentName;
```

---

**Keep this reference handy when building new sections!**
