---
name: "Mateo's Baptism Invitation"
description: "A serene, intimate, and editorial invitation for Mateo's baptism"
colors:
  ivory-bg: "#eef2f7"
  ivory-surface: "#f6f8fb"
  ivory-ink: "#162033"
  ivory-muted: "#586a82"
  ivory-rule: "#cdd6e2"
  ivory-accent: "#3f6fa8"
  ivory-accentInk: "#23436b"
  
  sage-bg: "#e6ecec"
  sage-surface: "#f0f4f4"
  sage-ink: "#152025"
  sage-muted: "#566972"
  sage-rule: "#c3d0d2"
  sage-accent: "#5a8a9a"
  sage-accentInk: "#2e5562"
  
  blush-bg: "#f1ece4"
  blush-surface: "#f9f5ee"
  blush-ink: "#13192a"
  blush-muted: "#5b6478"
  blush-rule: "#d8d0c1"
  blush-accent: "#2a4a8a"
  blush-accentInk: "#1b3268"
  
  ink-bg: "#0f1726"
  ink-surface: "#16203a"
  ink-ink: "#eaf0fa"
  ink-muted: "#8a9cba"
  ink-rule: "#283556"
  ink-accent: "#a8c3e6"
  ink-accentInk: "#a8c3e6"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(80px, 16vw, 240px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.28em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "32px"
  xl: "48px"
  xxl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.blush-ink}"
    textColor: "{colors.blush-surface}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.blush-accent}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.blush-ink}"
    borderBottom: "1px solid {colors.blush-rule}"
    padding: "14px 0px"
---

# Design System: Mateo's Baptism Invitation

## 1. Overview

**Creative North Star: "Linen & Parchment"**

This system represents a tactile, print-editorial design inspired by physical, high-end paper stationery and warm, intimate celebrations. It emphasizes generous whitespace, elegant serif typography, clean divider lines, and a complete absence of modern app-like styling (no card shadows, no heavy borders, no rounded corners).

Visual layout feels open, calm, and serene, prioritizing readability and high-contrast typography so older family members can navigate details and submit their RSVPs with ease.

**Key Characteristics:**
- Muted, nature-inspired tonal palettes (Sage, Blush, Ivory) paired with a deep Midnight Blue theme.
- Elegant editorial pairings of serif display headings with highly readable sans-serif body text.
- Structuring layout using hair-thin rule lines and whitespace rather than container cards or visual depth.
- Completely flat design with zero drop shadows.
- Mobile-First Responsiveness: Fluid columns and flexible paddings that adapt the print-editorial look onto vertical handheld viewports.

## 2. Colors

Colors represent organic paper textures and natural tones, accented by classic ink colors.

### Primary
- **Cobalt Accent (Blush)** (#2a4a8a): Used for highlighted details and accents on warm linen backgrounds.
- **Seaglass Accent (Sage)** (#5a8a9a): Used for highlights on soft green-grey backgrounds.
- **Sky Accent (Ivory)** (#3f6fa8): Used for highlights on porcelain/sky blue backgrounds.
- **Ice Accent (Midnight Blue)** (#a8c3e6): High-contrast light accent on dark backgrounds.

### Neutral
- **Linen Base** (#f1ece4): Soft, warm neutral background for the Blush theme.
- **Linen Surface** (#f9f5ee): Lighter warm neutral container surface.
- **Seaglass Base** (#e6ecec): Muted, cool neutral background for the Sage theme.
- **Seaglass Surface** (#f0f4f4): Lighter green-grey container surface.
- **Porcelain Base** (#eef2f7): Light, clean neutral background for the Ivory theme.
- **Porcelain Surface** (#f6f8fb): Lighter blue-grey container surface.
- **Midnight Base** (#0f1726): Deep ink background for the dark theme.
- **Midnight Surface** (#16203a): Slightly lighter navy-ink surface.

### Named Rules
**The Editorial Contrast Rule.** Accent colors must only be used for meaningful emphasis (ornaments, active toggle buttons, key icons, primary CTAs) and must maintain a high contrast ratio against their respective theme backgrounds.
**The No-Gradient Rule.** Gradients are strictly prohibited. Backgrounds and text elements must remain solid to preserve the flat, paper-like aesthetic.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** Inter (with system sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with system monospace fallback)

### Hierarchy
- **Display** (400, clamp(80px, 16vw, 240px), 0.9): Reserved for the main guest name "Mateo" and major section dividers.
- **Headline** (400, clamp(32px, 6vw, 56px), 1.1): Used for main section titles and location headings.
- **Title** (400, 20px, 1.4): Used for important event subheadings.
- **Body** (400, 16px, 1.6): Used for event descriptions, address text, and user notes. Cap line lengths to ~65ch.
- **Label** (400, 11px, letter-spacing: 0.28em, uppercase): Used for eyebrows, dates, numbers, and inputs.

### Named Rules
**The Generous Leading Rule.** All body copy must maintain a high line-height (1.6) to guarantee absolute legibility and breathing room.
**The Monospace Eyebrow Rule.** All section subtitles and eyebrow headers must use JetBrains Mono in uppercase with wide letter spacing.

## 4. Elevation

The visual system is entirely flat to mimic traditional stationery. Depth is conveyed purely through typography scale and color separation.

### Named Rules
**The Flat-By-Default Rule.** Drop shadows and box-shadows are strictly forbidden. Interfaces must rely on hair-thin divider lines (1px) and solid contrast to represent structure.

## 5. Components

### Buttons
- **Shape:** Completely flat, square edges (0px radius).
- **Primary:** Solid dark ink color background with light surface text (`padding: 16px 32px`). Must maintain a minimum tap target height of 44px on mobile.
- **Hover / Focus:** Fades smoothly to the accent color on hover.
- **Active Toggles:** Inline selection buttons share the rule border color, turning solid ink on selection. Tap target must span at least 44px in height.

### Cards / Containers
- **Corner Style:** Square (0px radius).
- **Background:** Flat surface color.
- **Shadow Strategy:** Forbidden (no shadow).
- **Border:** 1px solid rule color.

### Inputs / Fields
- **Style:** Clean border-bottom only (1px solid rule color), transparent background. Height of input field must be at least 44px to prevent tap collision on mobile screens.
- **Focus:** No glow or offset ring. Highlights the bottom border to the accent color.

### Navigation
- **Style:** Minimalist text link list using JetBrains Mono, positioned at the top right header, fading slightly on hover.

## 6. Do's and Don'ts

### Do:
- **Do** use `Cormorant Garamond` for large display headings to capture the editorial feel.
- **Do** keep button and input corner radii at exactly `0px`.
- **Do** separate sections with thin, high-contrast rules (`1px` border using `{colors.rule}`).
- **Do** display clean, readable typography with high-contrast pairings (like Midnight Blue text on warm Linen background).
- **Do** optimize layouts for phone screens using fluid paddings (e.g. 16px left/right margins on mobile, scaling to 32px+ on desktop).
- **Do** ensure all interactive controls have a minimum touch target size of 44x44px for easy mobile usage.

### Don't:
- **Don't** use any card shadows or background blurs (glassmorphism is forbidden).
- **Don't** use flashy or loud animations; page entrances should feel quiet and gradual.
- **Don't** use side-stripe borders as card accents.
- **Don't** use gradient text under any circumstances.
