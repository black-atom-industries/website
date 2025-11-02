# Brutalist Landing Page Design

## Overview

A clean, minimalistic brutalist landing page for black-atom.industries inspired by 1970s corporate research facilities (Darpa from Lost, Lumen Industries from Severance). The design emphasizes raw utility, formal structure, and technical aesthetics.

## Design Goals

- **Primary purpose**: Informational landing page explaining Black Atom Industries with links to resources
- **Aesthetic**: 70s corporate technical documentation - formal, structured, utilitarian
- **Typography**: TX-02 (Berkeley Mono v2) throughout for authentic technical feel
- **Color scheme**: Pure monochrome - black text on white background

## Visual Language

### Typography
- **Font**: TX-02 (Berkeley Mono v2) for all text
- **Hierarchy**: Size and weight variations only (no font mixing)
- **Header**: ALL CAPS for main title
- **Sections**: Mixed case for section headers
- **Line height**: Generous for readability (`var(--font-lineheight-3)`)
- **Rendering**: `optimizeLegibility` for crisp monospace

### Layout Structure
- **Style**: Sectioned document with clear rectangular blocks
- **Borders**: Thick black borders (2px solid) around sections
- **Corners**: No border-radius (sharp corners)
- **Shadows**: None - completely flat
- **Spacing**: Open Props spacing scale for consistency
- **Grid**: Formal, structured layout like technical specifications

### Visual Elements
- Heavy borders creating "boxed" document feel
- Generous but structured whitespace
- No decorative elements - function first
- Flat, direct visual hierarchy

## Content Structure

### 1. Header/Title Block
```
┌─────────────────────────────────────┐
│ BLACK ATOM INDUSTRIES               │
│ COHESIVE THEME SYSTEMS              │
│ EST. 2024                           │
└─────────────────────────────────────┘
```

- Company name in all caps
- Tagline
- Established year
- Thicker border (3px) to distinguish from other sections

### 2. Overview Section
- Brief project description (2-3 paragraphs)
- Explains what Black Atom Industries is
- Core philosophy of theme collections
- Formal, technical tone

### 3. Supported Platforms Section
- List of supported platforms:
  - Neovim
  - Ghostty
  - Zed Editor
  - Additional platforms
- Simple bulleted or specification table format

### 4. Resources Section
- GitHub Organization link
- Documentation link
- Core repository link
- Each clearly labeled with resource type and URL

### 5. Footer
- Simple copyright/year line
- Smaller text size

## Technical Implementation

### Stack
- **Framework**: TanStack Start with React 19
- **Styling**: CSS Modules + Open Props + CVA
- **Typography**: TX-02 font files at project root

### Component Architecture

**Components:**
- `index.tsx` - Main landing page
- `Section.tsx` - Reusable bordered section component
- `Section.module.css` - Section styling

**Section Component (CVA):**
```tsx
const sectionVariants = cva(styles.section, {
  variants: {
    spacing: {
      normal: styles.spacingNormal,
      compact: styles.spacingCompact,
    }
  }
})
```

### CSS Architecture

**Global Typography Setup** (`styles.css`):
```css
@font-face {
  font-family: 'TX-02';
  src: url('/TX-02.woff2') format('woff2');
}

:root {
  --font-mono: 'TX-02', monospace;
  --font-sans: 'TX-02', monospace;
  --border-thick: 2px solid black;
  --border-thicker: 3px solid black;
}
```

**Open Props Usage:**
- Spacing: `var(--size-3)`, `var(--size-5)` for padding/margins
- Font sizes: `var(--font-size-3)` for body, `var(--font-size-6)` for headers
- Responsive: Open Props responsive utilities for mobile/desktop

### Interaction Design

**Links:**
- Default: Black text, underlined
- Hover: Increase underline thickness (2px → 3px)
- Visited: Same as default (maintain monochrome)
- Active: Brief invert effect (white on black)

**Animations:**
- None or minimal (optional subtle fade-in on load)
- Brutalism favors instant, direct interactions
- No fancy transitions

**Focus States:**
- Thick outline matching border style
- High contrast for accessibility

### Responsive Approach
- Sections stack naturally on mobile
- Maintain structured layout on desktop
- Brutalist aesthetic works well on all screen sizes
- Use Open Props breakpoints

## Accessibility

- Semantic HTML (`h1`, `h2`, `nav`, `main`, `footer`)
- Excellent color contrast (black on white)
- Underlined links by default
- Proper focus indicators
- Text rendering optimized for legibility

## Design Principles

1. **Function over form**: Every element serves a purpose
2. **Structural honesty**: Visible, clear structure
3. **Minimal decoration**: No unnecessary visual elements
4. **Technical authenticity**: True to 70s corporate aesthetic
5. **Monochrome discipline**: Pure black and white only
6. **Typography as design**: Berkeley Mono does the heavy lifting
