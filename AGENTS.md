# AGENTS.md

## Agent instructions

### What this repo is
A single product — **"NetPlus Duo / Breach+"**, a Duolingo-style spaced-repetition study trainer for the CompTIA Network+ (N10-009) exam. All user state (hearts, XP, streak, SRS) lives client-side in `localStorage`; there is **no backend database or API**.

The live product is the **React + TypeScript + Vite SPA in `frontend/`**. `templates/` + `static/` are a legacy vanilla-JS version that `app.py` no longer serves — ignore them for new work.

### Services
- **React frontend (`frontend/`)** — the entire product. Dev server: `npm run dev` (Vite, http://localhost:5173). This is what you run for development and E2E testing.
- **Flask server (`app.py`)** — optional; only a thin static-file server for the *built* SPA (`frontend/dist/`). Run `python3 app.py` (port 5000) after `npm run build`, or use `scripts/run.sh` for the full build+serve flow. Not needed for dev.

### Lint / test / build (run from `frontend/`)
Package manager: TODO(verify) (no lockfile recorded); if npm (`frontend/package.json`), it deviates from the pnpm default — keep until David decides.
Standard scripts in `frontend/package.json`, mirrored by `.github/workflows/ci.yml`:
- Lint: `npm run lint` (oxlint)
- Test: `npm test` (vitest)
- Build: `npm run build` (`tsc -b && vite build`)

### Non-obvious notes
- `scripts/import_content.py` / `scripts/import_study.py` regenerate the question/study JSON from an external repo at a hardcoded path (`/mnt/more-extra/Repos/network-rpg`) that is **absent** here. Do not run them — the generated data is already committed under `frontend/src/data/`.
- Flask serves `frontend/dist/`; if you edit the frontend you must `npm run build` again before Flask reflects changes (it does not proxy the Vite dev server).
- CI uses Node 22 and Python 3.12.

## Ports

Dormant on colliding defaults (5000); 5173 belongs to weekend-watts. Do not start servers until David assigns a block in `~/.agents/PORTS.md`.
