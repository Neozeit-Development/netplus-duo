# Handoff: Breach+ redesign — design-file polish in progress

Written by Claude Code (using the `impeccable` skill) for continuation by another
assistant (Cursor Composer or similar). Read this in full before touching anything.

## 1. What this project is

`netplus-duo` is a Flask + vanilla-JS study app for the CompTIA Network+ (N10-009)
cert — spaced-repetition daily lessons, weak-area drills, practice exams, a study
guide, and stats, with Duolingo-style gamification (hearts, streak, XP, levels).

**The live app today** (`templates/index.html`, `static/style.css`, `static/app.js`,
`static/questions.js`, `static/study_content.js`) is styled as a near-exact
Duolingo palette clone (`--green: #58cc02` etc.) — this is the OLD look.

**"Breach+"** is a from-scratch visual rebrand: a stark black/red, terminal-flavored
"operator console" aesthetic (Bebas Neue for oversized editorial numerals, JetBrains
Mono for everything else, hard corners, zero shadows). It exists ONLY as static
design mockups right now, not yet wired into the live app. That rebrand — and
specifically *fixing real problems found in the mockups* — is what this whole
session has been about. **The live app has NOT been touched.**

## 2. Where everything lives

- `PRODUCT.md` (project root) — strategic brief: register=product, users, brand
  personality ("underground, rebellious, raw"), anti-references (Duolingo clones +
  corporate cert platforms), design principles, WCAG AA requirement. Read this first.
- `DESIGN.md` (project root) — the visual system spec for Breach+, extracted from
  the mockups (not from the old `static/style.css`). Tokens, typography, components,
  named rules ("The One Red Rule," "The Contrast Floor Rule," "The Type Floor Rule,"
  "The Flat-By-Default Rule," "The Comment-Caption Rule"). **This is normative —
  any further mockup work or eventual implementation should conform to it.**
- `.impeccable/design.json` — machine-readable sidecar to DESIGN.md (component
  HTML/CSS snippets, tonal ramps, narrative). Keep in sync with DESIGN.md if you
  change tokens again.
- `.impeccable/critique/2026-07-06T14-15-04Z__ign-files-netplus-duo-design-system-breach-mockups.md`
  — the persisted critique snapshot (score 28/40 at the time, 2 P0s + 2 P1s + 2 P2s).
  Storage slug: `ign-files-netplus-duo-design-system-breach-mockups`.
- `claude_design_files/NetPlus Duo Design System/` — the actual mockup files.
  **The 11 in-scope Breach+ files** (all edited this session):
  - `Breach+ Design System.html` (canonical component reference sheet)
  - `Breach+ Objective Detail.html`
  - `Breach+ Objective List.html`
  - `Breach+ Practice Exam.html` (the exam intro screen)
  - `Breach+ Practice Exam - In Progress.html`
  - `Breach+ Practice Exam Results.html`
  - `Breach+ Settings.html`
  - `Breach+ Stats.html`
  - `Breach+ Study Guide.html`
  - `Breach+ Weak Area Drill.html`
  - `Breach+ Lesson Summary.html`

  **Explicitly out of scope, do not touch / do not assume fixed**:
  - `NetPlus Redesign - 3 Directions.html` — the earlier 4-direction (A/B/C/D)
    comparison doc, superseded once "Breach+" (direction D) was chosen. Still has
    the old `#dc2626` red and old opacity-based dimming. This is a historical
    artifact, not a live spec — leave it as-is unless the user asks otherwise.
  - `previews/*.html` and the `style.css` sitting inside that same folder — these
    are snapshots of the **old** (current, live) Duolingo-clone app design, not
    Breach+. Confirmed byte-identical to `static/style.css` at session start.

## 3. What's been done, in order (all via a from-scratch dual-agent critique →
   audit → typeset → layout → harden pipeline modeled on the `impeccable` skill)

1. **Init**: wrote `PRODUCT.md` and `DESIGN.md` (see §2) after a short interview
   with the user, confirming Breach+ as final, "underground/rebellious/raw"
   personality, WCAG AA required, Hack The Box/TryHackMe as references.

2. **Critique** (dual sub-agent: independent design review + independent
   deterministic-detector/evidence scan, synthesized): Health score 28/40
   ("Good"). Found and later confirmed via hand-computed WCAG ratios:
   - Contrast Floor Rule violated broader than initially assumed (concept-card
     body text, reference-table data, Exam Traps text, readiness/weak-spot
     warnings all failing 4.5:1)
   - Type Floor Rule broken (an explicit `font-size:5px`, 6px dominant caption size)
   - Lesson-failure state pairs maximum severity with an immediate monetization
     ask ("350 GEMS" paywall) and no de-escalation — flagged as P1, **NOT YET
     ADDRESSED** (see §4)
   - Locked/inactive states used two incompatible mechanisms (opacity fades vs.
     luminance-stepped hex) — since fixed
   - Cross-file token drift: two different "correct/pass" greens — since fixed
   - Detector found real em-dash-overuse in `Breach+ Design System.html` (4 real
     instances) and `Breach+ Practice Exam.html` (3, now down to 2 after an
     unrelated copy edit) — confirmed genuine (not annotation-layer noise),
     **NOT YET FIXED**, deferred to a copy pass (`/impeccable clarify` or manual)
   - Numbered zone/domain badges (01/02/03…) flagged by the detector but
     confirmed **false positive** — they're numbered badges over real ordered
     content (the 5 CompTIA domains), not decorative section eyebrows. No action
     needed; don't re-flag this.

3. **Audit** (5-dimension technical pass: A11y/Performance/Theming/
   Responsive/Anti-Patterns): Score 4/20 ("Critical") at the time — much worse
   than the critique alone because it evaluated the mockups as literal code
   (zero ARIA/roles/tabindex/focus-visible anywhere, zero CSS custom properties,
   ~1,653 inline styles, zero media queries). **Two of the system's own
   canonical DESIGN.md color tokens failed contrast as text**, not just
   implementation drift — `correct-green-dim` at 2.59:1 and the original
   `signal-red` (`#dc2626`) at 4.35:1 (needs 4.5:1). Both fixed (see step 5).

4. **Typeset fix** (P0 — Type Floor Rule): converted every sub-11px inline
   `font-size` across all 11 files (~400+ instances) to a clean rem-based floor:
   `5px/6px → 0.6875rem (11px)`, `7px/8px → 0.75rem (12px)`, `9px → 0.8125rem
   (13px)`, `10px → 0.875rem (14px)`. Also fixed the `<style>`-block `.ref-table
   th/td` rules in Objective Detail.html (the sed pass only caught inline
   styles, not stylesheet rules). Left the `.row-label`/canvas-header
   annotation-layer text alone (that's the design-board documentation chrome,
   not real in-app UI — same distinction the critique used). Updated DESIGN.md's
   `label` typography token (8px→11px) and rewrote the Type Floor Rule prose to
   state the corrected floor as fact.

5. **Layout fix** (P0, cognitive-load failures on the 3 densest screens):
   - **Objective Detail.html**: split the 12-row CIDR reference table into an
     always-visible core (5 rows around the active `/28`) plus a native
     `<details>/<summary>` disclosure for the full `/8`–`/32` range (real
     progressive disclosure, no JS needed); added `scope="col"` + a visually-
     hidden `<caption>` to both tables; widened section-header padding to 24px
     top for clearer grouping; made the primary CTA `position: sticky; bottom: 0`
     inside `.phone-scroll` so it's reachable without scrolling to the very end.
   - **Practice Exam.html** (the exam intro): consolidated the two genuinely-
     locked domains (D4/D5, both 0%) into one compact row instead of two full
     ones; rewrote the dangling rhetorical "NOT EXAM-READY — PROCEED ANYWAY?"
     into a declarative "// NOT YET EXAM-READY" status resolved by the existing
     "BEGIN EXAM" CTA below it; widened section-divider spacing at 4 transition
     points to 22px.
   - **Stats.html**: **found and fixed a real bug** — this file was missing the
     `.phone-scroll` wrapper entirely (unlike its siblings), so with
     `overflow:hidden` and no scroll mechanism, content past 812px (including
     the CTA) was being silently clipped. Restructured the 30-day activity
     heatmap from one unreadable row of 30 near-identical grays into a real
     7-column weekly grid with a "LESS → MORE" legend. Fixed the "Drill Targets"
     cards' `border-left` accent stripes (anti-pattern leak — DESIGN.md sanctions
     that pattern in exactly one place, the reference-table row) to full
     borders + luminance backgrounds. Widened all divider margins to 22px.

6. **Harden pass** (P0 contrast fix + P1 locked-state consistency):
   - **Global**: `signal-red` moved from `#dc2626` → **`#dc3535`** everywhere
     (all 11 files, DESIGN.md, sidecar). This was hand-derived to satisfy BOTH
     constraints at once (they pull in opposite directions): text-on-black
     needs the red bright enough (≥4.5:1), white-text-on-red-button needs the
     red dark enough (≥4.5:1 for white on it). `#dc3535` computes to ~4.6:1 on
     black and ~4.57:1 for white-on-it — passes both, narrowly. **If you need to
     re-derive this, the WCAG relative-luminance formula and the exact
     constraint math are in the conversation history; don't just eyeball a
     "brighter red," it can break the button-text direction.**
   - **Global**: every text-use of `correct-green-dim` (`#2a5a2a`, 2.59:1) →
     promoted to the bright canonical `correct-green` (`#3aaa3a`, ~7:1) — 24
     instances across 5 files. `correct-green-dim` is still fine for
     backgrounds/borders (non-text), just not as text color.
   - **File-specific contrast fixes** (all confirmed via hand-computed WCAG
     ratios, not guessed): Objective Detail's concept-card body text, both
     reference tables' data cells, and the Exam Traps section; the readiness
     warning in Practice Exam.html and the matching weak-spot callout in
     Objective List.html; the exam answer-option text (both letter badges and
     body copy) in Practice Exam - In Progress.html; Settings' toggle "OFF"
     labels and the "Sound Effects // MUTED" caption; the Drill Targets
     accuracy numbers in Stats.html and the error-tag chips in Weak Area
     Drill.html (three different dim tiers, all promoted).
   - **Objective List.html's undocumented amber "needs review" tier** (a second
     saturated accent color — explicitly against DESIGN.md's Do's/Don'ts) was
     folded into the existing red/ink vocabulary, fixing the hue violation and
     the contrast failure in one move.
   - **Practice Exam Results.html's PASS state** had invented an entirely
     separate off-brand green family (`#22c55e`, `#1a4400`, `#2a5a00`, several
     near-black washes) instead of reusing the canonical green tokens — all
     reconciled onto `#3aaa3a` / `#060e06` / etc. The FAIL-state diagnosis text
     (`#7a1515`, the single most important sentence on that screen) was also
     failing contrast and is now fixed.
   - **Locked-state mechanism standardized to luminance-only** (removed
     opacity-based dimming from `Breach+ Design System.html`'s Home-screen
     locked zones and `Breach+ Practice Exam - In Progress.html`'s unselected
     answer options, plus a regression I'd introduced myself during the layout
     step in `Breach+ Practice Exam.html` — all now match DESIGN.md's explicit
     "luminance dimming, not opacity fades" rule). Left the drag-handle "grip
     line" icon opacity in Design System.html alone — that's decorative icon
     weight, a different semantic, not a locked-state indicator.
   - DESIGN.md and the sidecar were updated throughout to match (Contrast Floor
     Rule prose now states the corrected values as fact, not an open problem).

## 4. What's explicitly NOT done yet — this is your punch list

1. **Polish pass** — never started. I was mid-way through asking the user a
   scope-clarifying question (MVP vs. flagship quality bar) when the session
   ran out of budget. My recommendation, which the user hadn't yet confirmed:
   since these are still **static design-canvas mockups, not live interactive
   code**, most of the standard polish checklist doesn't apply yet (no real
   hover/focus/loading/error states to polish, no live device testing). Scope
   polish to: (a) a final cross-file consistency check on everything fixed in
   steps 4-6 above — are section-spacing values, contrast values, and the
   locked-state convention now actually uniform across all 11 files, not just
   the ones I touched directly; (b) re-run the detector
   (`node .claude/skills/impeccable/scripts/detect.mjs --json <files>` if the
   `impeccable` skill is available in your environment, or manually re-check
   for the specific issues named in §3) to confirm no regressions were
   introduced; (c) fix any small drift found. **Ask the user directly if they
   want more than that** (e.g., do they want you to also spec out interaction
   states in DESIGN.md/the sidecar now, even though they can't be demonstrated
   in static HTML yet).

2. **The lesson-failure/monetization P1 is still unaddressed.** From the
   critique: the "no lives" state in `Breach+ Lesson Summary.html` pairs a 92px
   all-red "NO LIVES" with an immediate "Refill all lives — 350 GEMS" paywall
   box and only a dim ghost "RETRY" as the free path — no de-escalation, no
   surfaced progress. This directly contradicts DESIGN.md's own Principle 4
   ("tension needs release... or the habit loop breaks down into grim
   monotony"). **This was in the original approved P0+P1 scope but never got
   done** — it's the next real fix to make, in `Breach+ Lesson Summary.html`.

3. **Em-dash copy cleanup (P2, confirmed genuine, deferred by explicit scope
   decision)**: real prose em-dash overuse in `Breach+ Design System.html` (4
   instances) and `Breach+ Practice Exam.html` (2 remaining after an unrelated
   edit removed one). Needs a copy pass, not a mechanical fix — vary sentence
   construction (commas/colons/parentheses instead of em-dashes).

4. **Deliberately out of scope, flag to the user before touching**: the
   `// LABEL` caption color system (mostly `#551515`, used for short section
   captions/chrome throughout — NOT the substantive content already fixed in
   step 6) is still technically sub-AA (4.5:1) in many places system-wide. I
   did NOT blanket-fix this because it's a much bigger, more visible aesthetic
   decision than what was scoped (changing it changes the whole system's "dim
   chrome" signature) — it deserves its own `colorize`-style conversation with
   the user, not a silent global find-replace.

5. **Never visually verified in an actual browser.** The browser automation
   tool available in my session could not reach this sandbox's localhost or
   filesystem (confirmed: a local static server returned HTTP 200 via curl, but
   every navigation attempt from the browser tool failed with a frame error).
   **Every fix in steps 4-6 was verified by reading source + hand-computing
   WCAG contrast ratios, never by looking at a rendered screenshot.** If your
   environment can actually open these files in a real browser, **do that
   first** — specifically sanity-check: the `<details>` collapsible table in
   Objective Detail.html renders and expands correctly; the restructured 7-col
   heatmap grid in Stats.html looks like a sensible weekly calendar, not broken
   CSS grid math; the consolidated D4/D5 row in Practice Exam.html reads
   cleanly; and spot-check a few of the hand-computed contrast fixes with an
   actual contrast checker/eyedropper instead of trusting my arithmetic blindly.

6. **No implementation work into the live app has started.** `templates/
   index.html`, `static/style.css`, `static/app.js`, `static/questions.js`,
   `static/study_content.js` are all still the OLD Duolingo-clone styling.
   Turning the (now-fixed) Breach+ mockups into the actual live app is a much
   larger follow-on task — don't start it without the user explicitly asking,
   since polish + the lesson-failure fix should land first.

## 5. The `impeccable` skill IS available here — use it, don't reinvent it

The user has `impeccable` installed in this environment too and will type
`/impeccable` as the first message in this chat before handing you anything
else. When that happens:

- `/impeccable` with no arguments runs its context-gathering step first. It
  will find `PRODUCT.md` and `DESIGN.md` already at the project root (both
  written this session) and should NOT re-run init or re-interview the user —
  both files exist and are current. If it offers to regenerate either, decline
  on the user's behalf and say they already exist and are current as of this
  handoff.
- It will likely also find the persisted critique snapshot at
  `.impeccable/critique/2026-07-06T14-15-04Z__ign-files-netplus-duo-design-system-breach-mockups.md`
  (slug `ign-files-netplus-duo-design-system-breach-mockups`) and may suggest
  `/impeccable polish` as a next step based on that. That's the right instinct,
  but **read this HANDOFF.md file yourself first** — the skill's own
  context-gathering has no way to know about the mid-session state, the
  lesson-summary fix still owed, or the "never browser-verified" caveat below.
- Once you've read HANDOFF.md, run the actual next commands yourself in this
  order:
  1. **`/impeccable harden` or a manual fix targeted at `Breach+ Lesson
     Summary.html`** — the lesson-failure/monetization pairing (§4.2). This was
     approved scope that never got done; do it before polish.
  2. **`/impeccable polish "claude_design_files/NetPlus Duo Design System"`** —
     the consistency + regression check described in §4.1. Tell the polish
     flow explicitly that this is a static-mockup pass (no live interaction
     states to polish yet) so it doesn't go looking for hover/loading/error
     states that can't exist in plain HTML/CSS files.
  3. Only after both of those: ask the user whether they want the em-dash copy
     pass (§4.3, `/impeccable clarify`) or the `// LABEL` caption-color
     conversation (§4.4) — both are explicitly deferred, not silently skipped.
- If for some reason `/impeccable` isn't actually wired up in this session
  despite the user's expectation, don't block on it — everything the skill
  would tell you is already captured in this document, PRODUCT.md, and
  DESIGN.md. Say so and proceed manually from HANDOFF.md.

## 6. Suggested first message back to the user

After the user's `/impeccable` message loads context, and after you've read
this HANDOFF.md, PRODUCT.md, and DESIGN.md in full, reply with something like:
"Picked up the handoff. Two things are approved and outstanding: the
lesson-failure/monetization fix in `Breach+ Lesson Summary.html`, and a
polish/consistency pass across all 11 mockup files. I'll do the lesson-summary
fix first since it's concrete and already scoped, then move to polish — say
so now if you'd rather reorder that. Also: nothing in this project has been
visually verified in a real browser yet, only source-read and hand-computed
contrast math — I'd like to actually open these files and look at them if my
environment can do that, before making further changes."
