---
name: Breach+
description: A stark, terminal-flavored operator console for daily CompTIA Network+ drilling.
colors:
  ink-black: "#000000"
  surface-raised: "#0a0a0a"
  surface-sunken: "#050505"
  surface-sunken-red: "#060000"
  hairline: "#0d0d0d"
  hairline-strong: "#1a1a1a"
  signal-red: "#dc3535"
  signal-red-dim: "#551515"
  signal-red-wash: "#1a0000"
  paper-white: "#ffffff"
  ink-100: "#e0e0e0"
  ink-200: "#c0c0c0"
  ink-300: "#888888"
  ink-500: "#555555"
  ink-600: "#444444"
  ink-700: "#333333"
  ink-800: "#2a2a2a"
  ink-900: "#1a1a1a"
  correct-green: "#3aaa3a"
  correct-green-dim: "#2a5a2a"
  correct-green-wash: "#060e06"
typography:
  display:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(2.5rem, 8vw, 6.25rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  body:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.02em"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.15em"
    fontFeature: "uppercase"
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "17px 20px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.paper-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-700}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 16px"
  button-ghost-hover:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink-200}"
---

# Design System: Breach+

## 1. Overview

**Creative North Star: "The Operator Console"**

Breach+ casts the learner as an operator logged into a professional ops console, not a student clicking through a quiz. Every screen is pure black, lit by a single signal-red accent and structured entirely in hairline rules — there is no chrome softness to hide behind, so hierarchy has to be earned through scale (oversized Bebas Neue numerals), restraint (one red, used deliberately), and precision (JetBrains Mono's fixed-width discipline down to the `// caption` level). This is the direct rebuild of a product that used to be a near-exact Duolingo palette clone; the whole point of Breach+ is that it could never be mistaken for that again.

Breach+ explicitly rejects two things: the **gamified language-app look** (rounded pill buttons, bouncy mascots, candy-bright greens/blues, emoji-forward copy) and the **corporate cert-platform look** (beige/light backgrounds, generic humanist sans, soft drop-shadow cards, HR-approved blandness). It leans instead on terminal and hacker-tool references — Hack The Box, TryHackMe, raw console UIs — where density and monospace precision read as competence, not clutter.

**Key Characteristics:**
- Pure black canvas; depth built from luminance steps and hairlines, never shadows
- One accent color (signal red) carrying activity, alerts, and correctness — never decorative
- Editorial-scale Bebas Neue numerals as the primary emotional payoff (rank, XP, "CORRECT")
- JetBrains Mono as the universal workhorse — body copy, labels, buttons, tables, all of it
- Locked/inactive states communicated through luminance dimming, not opacity fades or icons alone

## 2. Colors

The palette is almost monochrome by design — near-black surfaces stepped by luminance, one saturated red, and a second, rarer green reserved only for "you got it right" moments.

### Primary
- **Signal Red** (`#dc3535`): the only saturated color in the system. Used for the active zone/lesson, primary CTAs, streak counters, incorrect-answer states, and any "this needs your attention now" marker. If it's not the most important thing on screen, it isn't red.

### Neutral
- **Ink Black** (`#000000`): the base canvas for every screen, full bleed, no exceptions.
- **Surface Raised** (`#0a0a0a`) / **Surface Sunken** (`#050505`): one step up from black for panels, table rows, formula/example boxes — the only "elevation" the system has.
- **Surface Sunken Red** (`#060000`): the red-tinted version of Surface Sunken, used behind objective headers and active-state panels to imply "this section is live."
- **Hairline** (`#0d0d0d`) / **Hairline Strong** (`#1a1a1a`–`#1e1e1e`): the entire structural system. Every section break, card edge, and input border is one of these two values — never a shadow.
- **Signal Red Dim** (`#551515`) / **Signal Red Wash** (`#1a0000`): red pulled back for non-text emphasis (muted warning borders, toggle "on" backgrounds, hairline accents). **Do not use `#551515` as readable text on black** — there is no darker red that clears WCAG AA on `#000`; readable red captions use Signal Red (`#dc3535`) at label size, neutral captions use Ink 300 (`#888888`).
- **Ink ramp** (`#e0e0e0` → `#c0c0c0` → `#888888` → `#555555` → `#444444` → `#333333` → `#2a2a2a` → `#1a1a1a`): the entire text-hierarchy vocabulary, from "primary emphasis body copy" down to "locked and barely-there." See the Contrast Floor rule below — this ramp is where the current mockups drift out of spec, and where implementation must correct course.

### Secondary
- **Correct Green** (`#3aaa3a`) with dim (`#2a5a2a`) and wash (`#060e06`) variants: reserved exclusively for the correct-answer feedback moment and active-streak activity indicators. Its rarity is what makes it feel like a reward.

### Named Rules
**The One Red Rule.** Signal Red marks exactly one thing per screen: the active/current item, the primary action, or an alert. It is never used decoratively or for a second competing element on the same screen.

**The Contrast Floor Rule.** Any text the operator is expected to actually read — button labels, question/answer copy, section body text, toggle states — must clear WCAG AA (4.5:1 body, 3:1 large/bold). Only genuinely inert content (locked zones, disabled toggles, version stamps) may sit below that floor. This was broken more broadly than first thought: not just ink-ramp grays but two of the system's own canonical tokens (`correct-green-dim` at 2.59:1, and the original `signal-red` `#dc2626` at 4.35:1) failed as text. Corrected across all 11 mockups: `signal-red` moved to `#dc3535` (passes both on-black text use and white-on-red button use); any text-use of `correct-green-dim` promoted to bright `correct-green`; ink-ramp body/data text promoted to `#888888` or lighter. Reserve dim values strictly for locked/inert content going forward — do not reintroduce them for readable copy.

## 3. Typography

**Display Font:** Bebas Neue (fallback: sans-serif)
**Body/Label Font:** JetBrains Mono (fallback: monospace)

**Character:** One font does the emotional work (Bebas Neue: huge, condensed, all-caps energy for numbers and key terms) and one font does everything else (JetBrains Mono: fixed-width precision for anything you read line by line). There is no third "friendly" font anywhere in the system — DM Sans appears only in the design-canvas documentation layer, never inside an actual app screen.

### Hierarchy
- **Display** (400, `clamp(2.5rem, 8vw, 6.25rem)`, line-height 0.88): rank numerals, zone index numbers, key terms on teaching cards, result banners (CORRECT/WRONG). This is the system's one moment of scale-as-drama — reserve it for numbers and single words, never sentences.
- **Headline** (400, 28px, line-height 1): screen-level identity moments (wordmark, objective titles at large scale).
- **Body** (400, 13px, line-height 1.7): definitions, explanations, concept copy. Cap at 65–75ch even though most of this ships inside a 375px phone column — don't let table/formula callouts run wider than that measure on tablet/desktop.
- **Label** (700, 11px, letter-spacing 0.15em, uppercase): the `// SECTION CAPTION` convention, button text, table headers, meta chrome. This is the single most-repeated text style in the system.

### Named Rules
**The Comment-Caption Rule.** Every section, field, and state gets a `// LABEL` style caption before the content itself — it's the system's signature micro-pattern and should appear on every new screen, not just the ones already mocked up. **Readable caption colors:** neutral section captions use Ink 300 (`#888888`); red-accent captions use Signal Red (`#dc3535`). Reserve Signal Red Dim (`#551515`) for borders and washes, not caption text.

**The Type Floor Rule.** Nothing meant to be read (not just glanced at) renders smaller than 11px real. The 375×812 mockups render at literal device pixels, not poster scale, so a 6px value in source is a 6px value on a real phone — there is no "it's just proportional" excuse. The mockups originally shipped a 5–10px caption/table range that violated this; that range has been corrected to an 11–14px floor (0.6875rem/0.75rem/0.8125rem/0.875rem) across all 11 screens. Any new screen must start from that floor, not the old mockup sizes.

## 4. Elevation

Flat, categorically. There are no shadows anywhere in this system — depth is conveyed entirely through two mechanisms: luminance stepping (black → `#050505`/`#0a0a0a` → hairline border) and the single red divider that marks a primary section transition (e.g., under the wordmark, above a CTA block). Nothing should ever cast a shadow; if a component needs to feel "raised," give it a lighter background step and a hairline border instead.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` anywhere. "Elevated" means one luminance step lighter than its parent, full stop.

## 5. Components

### Buttons
- **Shape:** hard corners, `border-radius: 0` everywhere. Rounded buttons are the single most Duolingo-coded tell to avoid.
- **Primary:** Signal Red fill, white text, JetBrains Mono bold, uppercase, letter-spacing 0.15–0.2em, ~17px vertical padding, label wrapped in bracket notation (`[ LAUNCH ZONE 02 → ]`). Full width within its container.
- **Ghost/Secondary:** transparent fill, 1px Hairline Strong border, dim ink (`#333`–`#444`) text, same bracket + letter-spacing convention. Used for "Back," "Quit," and paired secondary actions.
- **Paired ghost buttons:** two ghost buttons side by side share a single divider (`border-right: none` on the first), never rendered as two fully separate boxes with a gap.
- **Hover/Focus:** ghost buttons lighten to Surface Raised background and brighten text one ink step; primary buttons need a visible focus ring (2px offset outline in Signal Red for keyboard focus). See **Interaction States** below for the full matrix.

### Interaction States (spec for implementation)

Static mockups show default states only; these are the required states when building the live app:

| Component | Default | Hover | Focus | Active/Pressed | Disabled | Loading |
|-----------|---------|-------|-------|----------------|----------|---------|
| **Primary button** | `#dc3535` fill, white text | Background `#c12f2f` (one step darker) | `outline: 2px solid #dc3535; outline-offset: 2px` | Background `#a82828` | Fill `#333`, text `#555`, no pointer | Text swaps to `// PROCESSING`, no click |
| **Ghost button** | Transparent, `#1a1a1a` border, `#888` text | Background `#0a0a0a`, text `#c0c0c0` | Same Signal Red focus ring | Background `#050505`, text `#e0e0e0` | Border `#111`, text `#333` | Dim label, no pointer |
| **Zone row** | Dim numeral `#1a1a1a`, no progress bar if locked | N/A (navigates on tap) | Hairline outline on row | Background `#060000` when active | Luminance-only dim, no opacity fade | Skeleton hairline where bar would be |
| **Toggle** | Off: `#1e1e1e` border, `#0a0a0a` fill, `#2a2a2a` dot | Cursor pointer | `outline: 2px solid #dc3535; outline-offset: 2px` | On: red border/wash/dot per spec | Border `#111`, dot `#1a1a1a`, no pointer | N/A |
| **Segmented cell** | Dim ink text | Background `#0a0a0a` | Focus ring on cell | Selected: red wash + red text | Text `#333`, no pointer | N/A |
| **Answer option (exam)** | `#888` text, hairline border | Border `#333`, background `#050505` | Focus ring | Selected: red wash + red border | Locked: luminance dim only | N/A |

**Motion:** 150ms ease-out (`cubic-bezier(0.22, 1, 0.36, 1)`) on background, border, and text color. Respect `prefers-reduced-motion: reduce` with instant state swaps.

### Zone / List Rows
- **Style:** leading oversized Bebas Neue index number (dims to `#1a1a1a` when locked, brightens to Signal Red when active), title + 1px progress hairline, trailing percentage. Active row gets a Surface Sunken Red background wash.
- **State:** locked rows drop the progress bar entirely rather than showing it at 0%.

### Stat Blocks
- **Style:** tiny label caption above, huge Bebas Neue numeral below (with a smaller-scale unit suffix inline, e.g. `48%`, `21d`, `4k20`), separated from siblings by a hairline vertical rule in a grid.

### Toggles
- **Style:** 36×14px rectangle, 1px border. Off = Hairline Strong border, Surface Sunken fill, dim square indicator. On = Signal Red border, Signal Red Wash fill, Signal Red square indicator.

### Segmented Selectors
- **Style:** equal-width cells in a single bordered row (Hairline Strong dividers between cells). Selected cell gets Signal Red Wash background and Signal Red text; unselected cells stay dim ink.

### Data Tables
- **Style:** borderless-collapse, 6px uppercase mono headers with wide letter-spacing, hairline row dividers, numeric cells right-aligned. The "row that matters" (last missed, current value) gets a Signal Red left border plus a Surface Sunken Red background — this is the one place a colored left-border is allowed, because it marks an actual table row, not a decorative card accent.

### Feedback Panels
- **Style:** full-bleed color-coded section — Correct Green Wash / Signal Red Wash background, a bordered highlight box holding the actual answer, and one giant Bebas Neue result word (CORRECT / WRONG). This is the system's biggest color+scale payoff and should stay rare and earned, never used for neutral states.

### Lesson Failure (Lives Depleted)
- **Hero:** lead with session progress (e.g. `4/10` in white + red), not punitive display copy (`NO LIVES`). Lives-depleted state belongs in a dim caption (`// LIVES: 0 / 5`), not the display numeral.
- **De-escalation:** surface what was earned (`// PROGRESS SECURED`, XP logged, question breakdown) before any monetization framing.
- **CTA hierarchy:** primary = free retry (`[ RETRY LESSON → ]`, Signal Red); secondary = `[ REVIEW ERRORS ]` ghost; tertiary = compact refill row (`// OR REFILL LIVES` + ghost `[ REFILL ]`). Never make refill the primary action on a bad day.

### Breadcrumbs
- **Style:** chevron (`›`)-separated trail in JetBrains Mono, ancestors dimmed, current step in Signal Red.

### Avatar (Signature Component)
- **Style:** square monogram (never circular), Hairline Strong border, Surface Sunken fill, initials set in Bebas Neue in Signal Red. The square shape is deliberate — circular avatars are a soft/friendly convention this system avoids.

## 6. Do's and Don'ts

### Do:
- **Do** keep every screen to two fonts only: Bebas Neue for display numerals/key terms, JetBrains Mono for everything else.
- **Do** use hard corners (`border-radius: 0`) on every component — buttons, cards, tables, toggles, avatars.
- **Do** reserve Signal Red for exactly one "this matters now" element per screen (per the One Red Rule).
- **Do** build all depth from luminance steps and hairlines; never a shadow.
- **Do** promote any must-read text to at least `#888888` on black (or brighter) and at least 11px real size, even where the mockup shows a dimmer/smaller value — per the Contrast Floor and Type Floor rules.
- **Do** use the `// LABEL` comment-caption convention consistently as the system's signature micro-pattern.

### Don't:
- **Don't** use rounded pill buttons, bouncy mascots, candy-bright greens/blues, or emoji-forward copy — that's the Duolingo-era look this system explicitly replaces.
- **Don't** use beige/light backgrounds, generic humanist sans-serif, or soft drop-shadow cards — that's the corporate cert-platform look this system explicitly rejects.
- **Don't** use `border-left`/`border-right` as a decorative accent stripe on cards or callouts — the one exception is the "row that matters" highlight in a real data table, where it marks an actual row, not a generic card.
- **Don't** let dim/locked-state ink values (`#2a2a2a`, `#333333` on `#000000`) leak into copy the operator is actually meant to read; those values are reserved for genuinely inert content.
- **Don't** ship a label caption below ~11px real rendered size on a phone, regardless of what the mockup canvas shows at art-board scale.
- **Don't** introduce a second saturated accent color. If something needs to stand out and it isn't correct/incorrect feedback or the single active/primary element, it stays in the ink ramp, not a new hue.
