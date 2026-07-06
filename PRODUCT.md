# Product

## Register

product

## Users

Solo learners studying for the CompTIA Network+ (N10-009) certification, primarily on mobile, fitting study into daily pockets of time (commute, break, before bed). They're doing spaced-repetition daily lessons to build long-term retention, occasionally drilling weak areas, and periodically taking full-length practice exams to gauge exam readiness. They want a habit-forming daily trainer, not a passive reference — the streak/hearts/XP loop is what gets them to open the app every day.

## Product Purpose

Breach+ (in-repo: "NetPlus Duo") is a gamified, spaced-repetition daily trainer for the CompTIA Network+ cert. Core loops:

- **Daily lesson**: 10-question SRS-scheduled sessions, hearts/streak/XP mechanics
- **Weak area drill**: targets objectives the learner is missing most
- **Practice exam**: full 90-question, 90-minute timed simulation across all 5 domains, with domain-weighted question selection and a pass/fail readiness score
- **Study guide**: reference material organized by domain → objective → concept (tables, mnemonics, key-point lists)
- **Stats**: streak, level/XP, accuracy, per-domain mastery, activity history

Success = the learner keeps their daily streak alive and their domain mastery % climbs toward exam-ready before their test date.

## Brand Personality

Underground, rebellious, raw. Breach+ is a deliberate break from the Duolingo-style gamified-language-app mold the product started as (matching Duolingo's own green/rounded/mascot palette almost exactly) — it now casts the learner as an "operator" running drills in a stark, terminal-flavored console, not a student clicking through a candy-colored quiz. Visual identity (already designed, see DESIGN.md): pure black backgrounds, one red accent, Bebas Neue for oversized editorial numerals (ranks, scores, key terms), JetBrains Mono for chrome/labels/`// comment`-style captions. Reference feel: terminal/hacker tools (Hack The Box, TryHackMe, raw console UIs) — not a cert-platform aesthetic borrowed from a marketing deck.

## Anti-references

- **Duolingo / gamified language-app clones**: cute mascots, bouncy rounded shapes, candy colors, friendly owl energy. This is precisely what's being rebranded away from.
- **Corporate cert-prep platforms** (Pluralsight, LinkedIn Learning, etc.): safe, beige, enterprise-training blandness. Breach+ should never read as HR-approved.

## Design Principles

1. **Operator, not student.** Copy and structure frame the learner as someone running drills and missions ("zones," "operator rank"), not taking a class. Avoid language or components that infantilize.
2. **Density is a feature.** Data-dense screens (readiness %, domain weighting, per-topic accuracy) are core product value, not decoration — don't strip them down to look "cleaner" at the cost of information.
3. **One consistent operator-console vocabulary everywhere.** Every screen — lesson, exam, stats, settings — speaks the same visual language (mono chrome, editorial numerals, red accent, `//` captions). No screen gets to look like a different app.
4. **Tension needs release.** The stark black/red tone must still pay off daily use — correct answers, streak growth, and level-ups need a real, felt reward moment, or the habit loop breaks down into grim monotony.
5. **Contrast discipline even in the dark.** Locked/dimmed/inactive states are a legitimate hierarchy tool, but active body copy, labels a user must actually read, and interactive elements must clear real contrast minimums — "moody" is not an excuse for illegible.

## Accessibility & Inclusion

WCAG AA minimum: body text ≥4.5:1 contrast, large/bold text ≥3:1. This is a known gap in the current mockups (dense 6-9px mono captions, very low-luminance grays like `#222`/`#333` directly on `#000`) — treat as a required pass before shipping, not optional polish.
