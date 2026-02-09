# SCD Pixel Site - Student Community Day Website

A pixel art / Minecraft-inspired website for AWS Cloud Club's Student Community Day event.

## 🎮 Theme & Design System

**Visual Style:** Pixel Art + Minecraft-inspired UI

- Blocky, grid-based visuals with hard edges
- Flat colors, no gradients or blur
- NES/SNES/Minecraft aesthetic
- Game-like visual language

## 📁 Project Structure

```
scd-pixel-site/
├── src/
│   ├── components/
│   │   └── hero/
│   │       ├── HeroSection.jsx      # Hero landing component
│   │       └── HeroSection.css      # Hero-specific styles
│   ├── assets/
│   │   └── images/
│   │       └── characters/
│   │           └── CHARACTER_GENERATION.md  # Image generation prompts
│   ├── styles/
│   │   └── pixel-theme.css          # Global pixel theme styles
│   ├── App.jsx                      # Main app component
│   ├── App.css                      # App container styles
│   ├── main.jsx                     # App entry point
│   └── index.css                    # Global reset
├── package.json
└── vite.config.js
```

## 🎨 Design System

### Font

- **Primary Font:** Press Start 2P (Google Fonts)
- Blocky, pixel-perfect typography
- Used for all headings, buttons, and UI elements

### Color Palette

```css
--pixel-sky-blue: #47a3ff /* Primary background */ --pixel-sky-light: #6bb6ff
  /* Light sky accent */ --pixel-sky-dark: #2563eb /* Dark sky accent */
  --pixel-grass: #7bc943 /* Success/primary actions */ --pixel-yellow: #ffd700
  /* Highlights/accents */ --pixel-white: #ffffff /* Text/UI elements */
  --pixel-black: #000000 /* Borders/shadows */;
```

### Button Styles

- Square corners (no border-radius)
- Thick 4px borders
- Offset box shadows (pixel-style depth)
- Hover/active states with position translation

### Character System

9 semantic characters with specific roles:

1. **cloud_builder.png** - Primary builder mascot (Hero section)
2. **cloud_helper.png** - Helper companion (small floating accent)
3. **scd_event_mascot.png** - Event branding (navbar/footer)
4. **student_explorer.png** - Student representation
5. **cloud_sheep.png** - Friendly animal mascot
6. **cloud_bird.png** - Movement symbol
7. **cloud_golem.png** - Power/scale symbol
8. **workshop_guide_npc.png** - Mentor NPC
9. **cloud_explorer.png** - Advanced learner

See [`CHARACTER_GENERATION.md`](src/assets/images/characters/CHARACTER_GENERATION.md) for exact image generation prompts.

## ✅ Completed Components

### Hero Section

**Status:** ✅ Complete  
**Location:** `src/components/hero/HeroSection.jsx`

**Features:**

- Event title: "Student Community Day"
- Subtitle: "Build • Learn • Explore the Cloud"
- Date & location placeholders
- Primary CTA button: "Register Now"
- Animated pixel cloud decorations (CSS-based)
- Character placements:
  - `cloud_builder.png` - Main hero character (center-right)
  - `cloud_helper.png` - Floating companion (top-right)
  - `scd_event_mascot.png` - Event branding (top-left)

**Animations:**

- Floating animation for helper character
- Bouncing animation for builder character
- Pulsing animation for CTA button
- Drifting clouds background

## 🚀 Development

### Installation

```bash
cd scd-pixel-site
npm install
```

### Run Development Server

```bash
npm run dev
```

Server runs at: http://localhost:5173/

### Build for Production

```bash
npm run build
```

## 📋 Next Steps

### Immediate Actions

1. **Generate Character Images**
   - Follow prompts in `CHARACTER_GENERATION.md`
   - Use Nano Banana or similar pixel art generator
   - Save to `src/assets/images/characters/`

2. **Test Hero Section**
   - Verify pixel styling displays correctly
   - Check responsive behavior on mobile
   - Confirm animations work smoothly

### Future Sections (NOT BUILT YET)

- Navigation Bar
- About Section
- Workshops/Agenda Section
- Speakers Section
- Tracks & Themes Section
- Registration Section
- Footer Section

**⚠️ IMPORTANT:** Build sections ONE AT A TIME as instructed. Do not proceed to next sections until explicitly directed.

## 🎯 Design Constraints (NON-NEGOTIABLE)

### ✅ Required

- Pixel fonts only (Press Start 2P)
- Flat colors, no gradients
- Hard edges, no blur
- Blocky UI elements
- Game-like visual metaphors
- Image rendering: `pixelated` / `crisp-edges`

### ❌ Forbidden

- Modern smooth fonts
- Rounded UI (border-radius)
- Smooth icon libraries (Material, Lucide, Feather)
- Gradient backgrounds
- Drop shadows with blur
- Anti-aliased images
- Stock photos

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Plain CSS (no frameworks)
- **Language:** JavaScript (not TypeScript)
- **Fonts:** Google Fonts (Press Start 2P)

## 📝 Notes

- Character images are currently placeholders (see CHARACTER_GENERATION.md)
- All styling follows strict pixel art constraints
- Component is fully responsive (desktop → mobile)
- No external UI libraries used to maintain pixel aesthetic
- Development server may show Node.js version warning (safe to ignore if site runs)

---

**Project Status:** Phase 1 Complete (Hero Section)  
**Next Phase:** Awaiting instructions for next section  
**Last Updated:** February 10, 2026
