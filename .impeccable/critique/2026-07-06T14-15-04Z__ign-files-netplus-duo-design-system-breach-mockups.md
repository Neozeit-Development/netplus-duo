---
target: Breach+ mockups (claude_design_files/NetPlus Duo Design System)
total_score: 28
p0_count: 2
p1_count: 2
timestamp: 2026-07-06T14-15-04Z
slug: ign-files-netplus-duo-design-system-breach-mockups
---
Method: dual-agent (A: design-review sub-agent · B: detector/evidence sub-agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hearts/streak/XP/timer always visible, but flag/answered counts render at contrast levels that are functionally invisible. |
| 2 | Match System / Real World | 3 | "Zone/operator/mission" language lands; "hearts" (♥ emoji) and "GEMS" are unreconciled literal Duolingo-mechanic carryovers. |
| 3 | User Control and Freedom | 2 | No visible quit/back on the question screen; no save-and-resume shown anywhere despite a stated "steal 5-10 min" usage pattern. |
| 4 | Consistency and Standards | 3 | Strong type/color/shape system, undercut by two incompatible dim/locked mechanisms and two different "correct/pass" greens across files. |
| 5 | Error Prevention | 3 | "NOT EXAM-READY — PROCEED ANYWAY?" shows real prevention intent but doesn't resolve into a clear gate vs. warning. |
| 6 | Recognition Rather Than Recall | 3 | Breadcrumbs and consistent domain color-coding aid orientation. |
| 7 | Flexibility and Efficiency | 3 | Segmented selectors, flagging, "schedule later" show some accommodation of different use patterns. |
| 8 | Aesthetic and Minimalist Design | 2 | Objective Detail and Practice Exam intro stack many same-weight blocks with no prioritization — in tension with the stated "density is a feature" principle. |
| 9 | Error Recovery | 4 | Genuinely strong: wrong-answer screen shows correct answer + explanation; exam results name the specific weak domain and next action. |
| 10 | Help and Documentation | 2 | No onboarding/tutorial screen exists among the 11 mockups; only contextual mini-explainers. |
| **Total** | | **28/40** | **Good — solid foundation, real weak areas to close before build** |

## Anti-Patterns Verdict

**Does this look AI-generated?** Partially, and in a specific way: the *concept* (pure black, one red, Bebas Neue + JetBrains Mono, hard corners, terminal captions) is genuinely committed and not templated — this doesn't read as generic SaaS-dashboard AI output. What reads as AI-assembled is the **execution discipline underneath the skin**:

- The `// LABEL` micro-pattern is applied mechanically to nearly every element rather than with the restraint real terminal UIs use.
- Two incompatible mechanisms represent "locked/inactive" (opacity fades in some screens vs. luminance-stepped hex values in others) — despite DESIGN.md's own written rule banning opacity fades for this. A sign the files were produced independently without cross-referencing each other.
- Two different greens (`#3aaa3a` vs `#22c55e`) represent the same "correct/pass" semantic in different files — classic token drift.
- Compulsive hairline-divider-between-everything, segmenting via borders rather than whitespace/grouping.

**Deterministic scan** (`detect.mjs`, scoped to the 11 Breach+ files, exit code 2 / 11 findings): mostly **em-dash-overuse** (7 files) and **numbered-section-markers** (4 files). Verified line-by-line against source:
- **5 of 7 em-dash findings are false positives** — driven by the design-canvas annotation layer (`<title>`, header captions, `.row-label` divs, state-legend footers) and non-prose "—" placeholder glyphs, not real in-app copy. Real prose alone falls *below* the rule's threshold in Objective Detail, Objective List, Study Guide, and Practice Exam - In Progress.
- **2 of 7 are genuine**: **Design System.html** (4 real prose em-dashes) and **Practice Exam.html** (3 real prose em-dashes) — an actual AI-writing-cadence tell worth a copy pass, not an artifact.
- **All 4 numbered-marker findings are likely false positives**: the "01/02/03" sequences are a single recurring, deliberate component — numbered badges over genuinely ordered content (the 5 real CompTIA domains, ranked weak-area targets), not decorative section eyebrows. One instance was a straight regex over-match (a "Q 04/10" question-progress fraction misread as a sequence member). Lower confidence than the em-dash calls, since numbered domain badges can independently read as generic even when functionally justified.
- **Notable gap**: the detector's `low-contrast` rule did not fire on any file. Assessment A independently hand-computed WCAG contrast ratios and found real failures (see Priority Issues below) — this is the detector missing something the manual review caught, not evidence the mockups are clean. `tiny-text` correctly did not fire, because the tool explicitly exempts `label`/`caption`/uppercase text classes — by design, not a gap.

**Visual overlays**: not available this run. Browser automation cannot reach this sandbox's localhost or filesystem (confirmed: a local static server returned HTTP 200 via `curl` but every attempt to navigate the browser tool to it failed with a frame error, in a fresh tab and otherwise). Both assessments worked from source markup only; no user-visible overlay exists to point you to.

## Overall Impression

Breach+ is a genuinely distinctive, well-committed identity — it could not be mistaken for the Duolingo-style app it's replacing, and the core "operator console" concept is coherent across all 11 mockups. But two things are keeping it from being build-ready: **accessibility math that doesn't hold up** (contrast and type-size floors both fail in ways broader than DESIGN.md's own draft already flagged), and **cross-file execution drift** (two dimming mechanisms, two greens) that suggests the 11 screens weren't checked against each other before being called a system. The single biggest opportunity: the one moment this product most needs to feel human — a bad day, hearts gone, accuracy low — currently pairs maximum visual severity with an immediate monetization ask and no softening, which is the opposite of what a daily-habit product needs on its worst day.

## What's Working

1. **The Practice Exam Results diagnosis callout** ("D2 score (39%) dragged overall below pass threshold. Focus drill on VLANs, routing protocols, and wireless standards before retaking.") is specific and actionable, and it directly serves the product's real success metric — domain mastery climbing toward exam-ready — independent of the visual skin.
2. **Oversized Bebas Neue at result/rank moments** (CORRECT/WRONG, PASS/FAIL, L04, XP totals) is the one place the system fully commits to scale-as-drama; it reads instantly without needing color to carry the message.
3. **The reference-table "last missed row" pattern** in Objective Detail (a dim table with one red-highlighted row) is a disciplined, correct application of DESIGN.md's One Red Rule — red marks the pedagogically relevant row, not a decorative accent.

## Priority Issues

**[P0] Contrast Floor fails more broadly than DESIGN.md's own account, and the detector didn't catch it either.**
*Why it matters*: Concept-card definitions (`#555`, 2.82:1), the entire non-highlighted CIDR reference table (`#2a2a2a`–`#444`, 1.46–2.16:1), Exam Traps explanations (`#3a1a1a`, ~1.3:1), and the exam-readiness warning (`#7a2020`, ~2.06:1) are all real study content and warnings, not decoration — and all fail WCAG AA. The detector's `low-contrast` rule also didn't flag any of this, so tooling can't be relied on here either.
*Fix*: Audit every text color against its actual background (not just the two hexes DESIGN.md names) and promote all must-read copy to ≥`#888888` (verified 5.93:1) or brighter; keep dim values strictly for genuinely inert/locked content.
*Suggested command*: `/impeccable audit` to catalog every instance across all 11 screens, then `/impeccable harden`.

**[P0] Type Floor is already broken worse than documented.**
*Why it matters*: An explicit `font-size:5px` exists (Practice Exam - In Progress, "22 ANSWERED"/"67 LEFT"), and 6px is the dominant caption/table-header size across four files — including the actual CIDR/mask data being studied, not just chrome. None of this clears an 11px real-device floor.
*Fix*: Build a real type scale with a hard minimum for informational text; this will force re-flowing the densest layouts (Objective Detail, Practice Exam Results, Stats), not just bumping `font-size` in place.
*Suggested command*: `/impeccable typeset`, then `/impeccable layout` on those three screens.

**[P1] The lesson-failure state pairs maximum severity with an immediate monetization ask, with no de-escalation.**
*Why it matters*: A 92px all-red "NO LIVES" state, 0/5 hearts, flows straight into a "Refill all lives — 350 GEMS" paywall box with only a dim ghost "RETRY" as the free path. For a daily-habit product, this is precisely the moment (a bad day) where the habit loop is most fragile — and it directly contradicts DESIGN.md's own Principle 4 ("tension needs release... or the habit loop breaks down into grim monotony").
*Fix*: Insert a de-escalation beat (surface progress actually made this session, foreground the free retry path) before any paywall framing.
*Suggested command*: `/impeccable delight`, paired with `/impeccable clarify` for the CTA hierarchy on that screen.

**[P1] Locked/inactive states use two incompatible mechanisms, contradicting DESIGN.md's own written rule.**
*Why it matters*: Some screens (Home, Practice Exam In Progress) dim locked items via `opacity`; others (Objective List, Stats) use luminance-stepped hex values. DESIGN.md explicitly specifies luminance dimming, not opacity fades — this is real drift between files, not a stylistic choice.
*Fix*: Standardize on luminance stepping only across all 11 screens; strip opacity-based dimming.
*Suggested command*: `/impeccable harden`.

**[P2] Cross-file token drift: two different "correct/pass" greens.**
*Why it matters*: `#3aaa3a` (Design System.html) and `#22c55e` (Practice Exam Results.html) represent the identical semantic. Left unresolved, this will fork into two real CSS custom properties at implementation time.
*Fix*: Pick one, update DESIGN.md and both source files.
*Suggested command*: `/impeccable audit` to catch any other drifts before implementation locks them in.

**[P2] Genuine em-dash-heavy writing cadence in two files.**
*Why it matters*: Design System.html (4 real prose em-dashes) and Practice Exam.html (3) show an actual AI-flavored copy tic, not a detector artifact — confirmed by tracing each instance back to real in-app prose.
*Fix*: A copy pass on teaching-card and exam-intro prose to vary sentence construction.
*Suggested command*: `/impeccable clarify`.

## Persona Red Flags

**Sam (accessibility-dependent)**: Core instructional copy fails AA outright — concept-card definitions at `#555` (2.82:1), Exam Traps descriptions at `#3a1a1a` (~1.3:1). The Settings toggle communicates state through color plus an 8×8px dot shift inside a 36×14px track, and its own textual "OFF" label renders at `#2a2a2a` (~1.46:1) — the one textual confirmation a low-vision user would rely on is itself unreadable.

**Casey (distracted mobile user, short pockets of time)**: The Objective Detail reference table (6-8px cells) would require pinch-zoom on a real 375px phone to read a `/28` mask value at a glance. Practice Exam - In Progress states "Timer runs continuously. No pause once started" with no save-and-resume affordance shown anywhere — directly at odds with Casey's stated usage pattern.

**Jordan (first-timer)**: None of the 11 screens is an onboarding/tutorial screen, yet copy assumes simultaneous fluency in both exam content and app mechanics ("ZONE 02 · LESSON 3," "N10-009," "// TARGETING ENABLED" all appear unexplained). The exam intro's "NOT EXAM-READY — PROCEED ANYWAY?" doesn't clarify whether starting is blocked or merely discouraged.

## Minor Observations

- Hearts (♥) and "GEMS" currency are mechanically identical to Duolingo's loop, just recolored — no gems balance is shown anywhere except the failure-state refill prompt, so its sudden appearance is confusing.
- Objective Detail's reference table sets Bebas Neue (a display face meant for "numbers and single words... never sentences" per DESIGN.md) inside dense 12-14px table cells, compounding the legibility problem.
- "Readiness" is used for two different-scoped numbers (68% in Practice Exam intro vs. 38% in Study Guide) with no visible distinction in labeling.
- The 30-day activity heatmap (Stats) uses ~9 near-identical dark grays, likely illegible without a hover/legend affordance.
- Settings' "RESET PROGRESS" (irreversible, wipes XP) gets the same visual weight/position pattern as routine settings, distinguished only by dim red text — no visible confirmation-dialog affordance in the mockup.
- The 4 numbered-marker detector findings are confirmed non-issues (legitimate ordered-content badges, not decorative section eyebrows) — no action needed there.

## Questions to Consider

1. If hearts and gems stay mechanically identical to Duolingo's loop just recolored, is this a rebrand of the *experience* or only of the *skin*?
2. Is the current density on Objective Detail and Practice Exam intro actually earned (prioritized, competence-signaling) or just unsorted (everything shown, nothing collapsed)? Would progressive disclosure keep the data while making the first-glance experience faster?
3. The system's strongest emotional beat (giant Bebas CORRECT/PASS) only fires on success — what would it look like to give effort itself, not just the win, a felt moment, so a bad session doesn't read as pure red/gray punishment?
