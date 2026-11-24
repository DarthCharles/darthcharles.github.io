---
name: Carlos Contreras Portfolio
description: A personal software engineering portfolio with the visual language of an IDE.
colors:
  primary: 'hsl(36.575 100% 71.373%)'
  gold-hover: 'hsl(36.585 100% 83.922%)'
  apricot-keyword: 'hsl(27 78% 72%)'
  lavender-type: 'hsl(276 66% 82%)'
  surface-primary: 'hsl(214.286 31.111% 17.647%)'
  surface-secondary: 'hsl(214 28% 27%)'
  surface-hover: 'hsl(214 25% 31%)'
  text-primary: 'hsl(215 45% 96%)'
  text-secondary: 'hsl(215 29% 78%)'
  border-primary: 'hsl(214 22% 65%)'
  on-primary: 'hsl(216 33% 13%)'
typography:
  display:
    fontFamily: 'Poppins, system-ui, sans-serif'
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: '-0.04em'
  headline:
    fontFamily: 'Source Code Pro, ui-monospace, Menlo, Consolas, monospace'
    fontSize: '2.5rem'
    fontWeight: 500
    lineHeight: 1.25
  title:
    fontFamily: 'Poppins, system-ui, sans-serif'
    fontWeight: 500
    lineHeight: 1.2
  code-marker:
    fontFamily: 'Source Code Pro, ui-monospace, Menlo, Consolas, monospace'
    fontSize: '1.25rem'
    fontWeight: 400
    lineHeight: 1.5
  card-title:
    fontFamily: 'Poppins, system-ui, sans-serif'
    fontSize: '1.375rem'
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: 'Poppins, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.7
  card-body:
    fontFamily: 'Poppins, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.6
  card-link:
    fontFamily: 'Poppins, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: 'Poppins, system-ui, sans-serif'
    fontSize: '0.8125rem'
    fontWeight: 500
    lineHeight: 1.5
  caption:
    fontFamily: 'Poppins, system-ui, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 400
    lineHeight: 1.5
  skill-label:
    fontFamily: 'Poppins, system-ui, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 600
    lineHeight: 1.5
rounded:
  md: '0.5rem'
  lg: '0.75rem'
spacing:
  3xs: '0.125rem'
  2xs: '0.25rem'
  xs: '0.5rem'
  sm: '0.75rem'
  md: '1rem'
  card-inset: '1.25rem'
  lg: '1.5rem'
  xl: '2rem'
  2xl: '3rem'
  3xl: '4rem'
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label}'
    rounded: '{rounded.md}'
    padding: '0 2rem'
    height: '{spacing.2xl}'
  button-primary-hover:
    backgroundColor: '{colors.gold-hover}'
  button-ghost:
    backgroundColor: 'transparent'
    textColor: '{colors.text-primary}'
    typography: '{typography.label}'
    rounded: '{rounded.md}'
    padding: '0.5rem'
    height: '44px'
  button-ghost-hover:
    backgroundColor: '{colors.surface-hover}'
  nav-link:
    backgroundColor: 'transparent'
    textColor: '{colors.text-secondary}'
    typography: '{typography.label}'
    rounded: '{rounded.md}'
    padding: '0 0.5rem'
    height: '44px'
  nav-link-current:
    backgroundColor: '{colors.surface-primary}'
    textColor: '{colors.primary}'
  card:
    backgroundColor: '{colors.surface-secondary}'
    textColor: '{colors.text-primary}'
    rounded: '{rounded.lg}'
  card-link:
    textColor: '{colors.primary}'
    typography: '{typography.card-link}'
    height: '{spacing.xl}'
  card-link-hover:
    textColor: '{colors.gold-hover}'
  skill-badge:
    backgroundColor: '{colors.surface-secondary}'
    textColor: '{colors.text-primary}'
    typography: '{typography.skill-label}'
    rounded: '{rounded.md}'
    padding: '0.125rem 0.5rem'
---

# Design System: Carlos Contreras Portfolio

## Overview

**Creative North Star: "Inside an IDE"**

The portfolio makes Carlos’s role, résumé, and work easy to find. The dark Workbench theme brings the experience of an IDE to that structure through syntax color, a function-shaped introduction, and dotted route titles that evoke an API.

Quiet reading surfaces and low-profile controls keep the site clear and approachable. Left-aligned Poppins gives the prose room to breathe, while Source Code Pro marks the places where the IDE reference is most visible.

**Key Characteristics**

- Dark navy canvas with slate navigation, cards, and skill labels.
- Gold for actions and code-style headings, apricot for syntax punctuation and keywords, and lavender for type-like names.
- A fluid name display, readable prose columns, and labeled controls.

Greda’s Workbench dark theme is the source of truth. The CSS entry point in `@src/workbench.css` loads Greda’s component styles, semantic tokens, and Workbench theme in that order. `@gatsby-ssr.js` selects Workbench and the dark color scheme on the root HTML element. The values in this guide record that configuration.

## Colors

The cool surfaces give the warm syntax accents room to stand out. Use Greda’s semantic surface, text, action, and border utilities in site code. Apply the Workbench keyword and type colors through the local utilities that read the theme’s syntax tokens.

### Primary

- **Gold action** colors the main call to action, focus rings, card links, current navigation, and code-style heading text.
- **Pale gold** is the hover color for the filled action and card links. **Deep ink** provides the label and icon color on the filled gold button.

### Secondary

- **Apricot keyword** marks `def` and `end` on Home and the trailing period in route and résumé section headings.

### Tertiary

- **Lavender type** highlights the surname in the homepage display and the organization names on the résumé.

### Neutral

- **Workbench navy** is the page canvas and the background for hovered or current navigation links.
- **Slate surface** fills the navigation bar, cards, skill badges, and navigation wipe. Greda’s secondary and raised surface roles resolve to this same color in Workbench dark.
- **Hover slate** fills ghost actions on hover.
- **Cool white** is the default foreground. **Muted blue-gray** covers secondary prose, captions, and idle navigation. **Steel border** draws the app bar divider and the homepage’s vertical indent guide.

## Typography

Use Greda’s display, title, body, label, and caption roles for the home display, human-readable headings, prose, and controls. The Workbench theme supplies Poppins for these roles and Source Code Pro for the signature function markers, route headings, and résumé section headings. Both stacks include system fallbacks.

- **Home display** uses `clamp(2.125rem, 5.6vw, 4.5rem)` with medium weight, tight leading, and negative tracking.
- **Route headline** uses a 40px monospace heading with an apricot period. The homepage markers are smaller at 20px, so the name remains the main focal point.
- **Title** uses `clamp(1.25rem, 3vw, 1.75rem)` for the homepage role, résumé headings and organization names, and the 404 heading. Résumé section headings apply the same scale in monospace. Card titles use a fixed 22px.
- **Body** is 16px with 1.7 line height in the profile and résumé. Card descriptions use 1.6. The global 20px body baseline also supports the homepage’s code markers.
- **Small text** uses 14px for card links, 13px for medium-weight navigation and button labels, and 12px for résumé metadata and skill badges.

## Layout

- Center the app bar, home, and 404 layouts within 72rem. Use 16px horizontal gutters, increasing to 24px at 640px. Projects, Blog, and Résumé use a 71.25rem outer container with 16px horizontal gutters.
- Use 48px of vertical page padding. Home increases to 64px at 768px. Use a 65ch measure for the home bio and résumé summary. The résumé’s reading column caps at 48rem.
- The home actions stack below 640px and become a wrapping row at 640px. The contact group and top navigation wrap as needed, keeping each label together.
- The Projects and Blog grid uses one column below 768px and two from 768px, with 24px gaps. The cards stretch to a shared row height and their action rows sit near the bottom.
- The spacing scale is built on 4px with a 2px half-step. The 20px card inset is shared by both collections.

## Elevation & Depth

Workbench uses flat layers for the app bar, cards, and skill badges. A change in surface tone and a thin divider establish structure. The filled primary action uses Greda’s ambient shadow (`0 8px 24px hsl(216 33% 13% / 0.12)`). Keyboard focus uses a gold ring where the control defines one. Card links keep a 2px outline with a 3px offset.

## Shapes

Use 8px corners for buttons, navigation links, and skill badges, and 12px corners for collection cards. Clip each card’s full-width 1200:630 image to its top corners and use cover cropping. Use 1px rules for the app bar divider and homepage indent guide.

## Components

### Primary and ghost actions

The large Greda primary action is 48px tall with 32px side padding. It uses pale gold on hover. Contact actions use the ghost variant with 44px minimum height, 8px vertical padding, and 8px horizontal padding that grows to 12px at 640px. Ghost actions inherit the foreground and fill with Hover slate on hover. Both variants use a 2px gold focus ring and a 1px downward press offset, with the press movement suppressed for reduced motion. Use 16px line icons beside visible labels.

### App bar

The slate bar holds a centered row of links with an 8px vertical inset and a 1px bottom rule. Link targets are at least 44px high. Hover and the current page both use gold text over navy. Current-page state is exposed through `aria-current="page"`. Keyboard focus adds a 2px gold outline with a 2px offset.

For an eligible app bar click, a slate cover moves in from the right, holds until the route is ready and the minimum hold has elapsed, then exits left. The nominal sequence lasts one second, with about 417ms per slide and a minimum hold of about 167ms. The wipe is bypassed when reduced motion is requested. The behavior lives in `@src/navigation-transition.js`.

### Project and article cards

Compose Greda’s `Card` and `CardContent` with a native image, heading, description, and links. Use a full-width preview above a slate body with 20px padding. Follow the heading and muted description with a wrapping row of underlined, destination-specific links. Keep actions at least 32px high and allow a second source link when applicable. The preview image is supplementary to the title and description. The shared pattern lives in `@src/components/card.js`.

### Skill badges

Use Greda’s secondary `Badge` variant with the Workbench secondary surface and primary text roles for skill names. Use cool-white 12px semibold labels, 8px horizontal padding, and 2px vertical padding. Let the non-interactive badge list wrap with 8px gaps.

### About block and dotted headings

Frame the home intro with `def about` and `end`, then inset the prose against a thin vertical guide between those markers. Keep the markers hidden from assistive technology and give the person’s name and role clear typographic priority. Carry the same syntax cues into standalone route and résumé section headings using a gold word and an apricot trailing period.

## Do's and Don'ts

- Do use the existing Workbench surface and text roles for new sections.
- Do compose Greda’s shared components and use its named typography, spacing, and radius tokens where they fit the layout.
- Do keep the résumé, work samples, and contact destinations easy to scan by their visible labels.
- Do keep content left-aligned and let navigation, action rows, and badges wrap at narrower widths.
- Don't extend monospace into biographies, project descriptions, or résumé bullets.
- Don't add decorative shadows to the app bar, collection cards, or skill badges.
