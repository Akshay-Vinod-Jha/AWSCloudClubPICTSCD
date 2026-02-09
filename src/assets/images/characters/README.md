# CHARACTER ASSETS - AVAILABLE

✅ **STATUS: All character images have been imported from the parent Characters folder.**

All characters follow the pixel art / Minecraft aesthetic and are ready to use.

---

## AVAILABLE CHARACTERS

All character PNG files are now located in this directory and ready to use in components.

### Character List:

1. ✅ **cloud_builder.png** - Primary Builder Mascot
2. ✅ **cloud_helper.png** - Helper/Companion Mob
3. ✅ **scd_event_mascot.png** - Official Event Mascot
4. ✅ **student_explorer.png** - Student Participant Character
5. ✅ **cloud_sleep.png** - Friendly Pixel Animal (Note: named "sleep" not "sheep")
6. ✅ **cloud_bird.png** - Movement/Exploration Symbol
7. ✅ **cloud_golem.png** - Guardian/Power Symbol
8. ✅ **workshop_guide\_\_npc.png** - Mentor/Instructor NPC (Note: double underscore)
9. ✅ **cloud_explorer.png** - Advanced Learner/Explorer

---

## USAGE RULES (from characters_info.txt)

### Hero Section (CURRENTLY IMPLEMENTED)

- **cloud_builder.png**: Main hero character (center/right, large size)
- **cloud_helper.png**: Floating companion near CTA (small, animated)
- **scd_event_mascot.png**: Branding element (top corner, icon-sized)

### Future Sections (Reference for upcoming implementation)

**About/Student Community Day Section:**

- student_explorer.png

**Break Sections:**

- cloud_sleep.png (friendliness element)

**Section Transitions:**

- cloud_bird.png (motion/flow indicator)

**Tracks & Themes / "Why Attend" Section:**

- cloud_golem.png (scale and power)

**Workshops/Agenda Section:**

- workshop_guide\_\_npc.png (mentor/instructor)

**Career Growth/Advanced Tracks:**

- cloud_explorer.png (progression/growth)

**Navigation/Footer:**

- scd_event_mascot.png (branding moments)

---

## IMPORT PATTERN

When using characters in React components, import them as ES6 modules:

```jsx
import cloudBuilder from "../../assets/images/characters/cloud_builder.png";
import cloudHelper from "../../assets/images/characters/cloud_helper.png";

// Then use in JSX:
<img src={cloudBuilder} alt="Cloud Builder" />;
```

---

## DESIGN CONSTRAINTS

All character images follow:

- ✅ Pixel art / Minecraft voxel style
- ✅ Blocky, cubic aesthetics
- ✅ Flat colors, no gradients
- ✅ Hard edges, no anti-aliasing
- ✅ Transparent backgrounds (PNG format)
- ✅ Consistent visual style across all characters

---

## NOTES

- Character files were copied from: `d:\PersonalProjects\Club\AWSPICT\SCD_AWS_PICT\Characters\`
- Original semantic rules maintained from `characters_info.txt`
- Images use pixelated rendering in CSS: `image-rendering: pixelated`
- Each character has a specific semantic role - do not use outside defined purpose
- Max 1-2 characters per section to avoid visual clutter

---

**Last Updated:** February 10, 2026  
**Status:** ✅ All assets available and imported
