## SmartGuard AI / AutoPilot README

A concise, professional GitHub README.md for the hackathon project.

### Sections

1. **Header & Badges** — Project title "SmartGuard AI by GXBank", subtitle "AI-Powered Active Spending Enforcement for Malaysian Gen-Z", hackathon event tag.

2. **Problem Statement** — 2-3 sentences on BNPL debt trap, impulse spending, and why passive tracking fails.

3. **Solution Overview** — What SmartGuard AI does: real-time Need vs. Want scoring, hard-block at payment gateway, unified liabilities dashboard, goal buckets with auto-save.

4. **Key Features** — Bullet list: Contextual AI Categorization (GPS + MCC + cart parsing), Hard-Block Algorithm, Emergency Override (whitelisted MCCs + Face ID), Unified Debt Dashboard, Goal Buckets & AutoPilot, Streaks & Leaderboard, Persistent Widgets.

5. **Tech Stack** — Frontend (TanStack Start v1, React 19, TypeScript, Tailwind CSS v4), AI/ML (Vertex AI Gemini 2.5 Flash, XGBoost classifier), Backend (Cloud Run microservices, Redis, PostgreSQL), APIs (Open Banking MY, DuitNow QR, Google Maps Places).

6. **Prototype** — Note that this repo contains a 33-screen high-fidelity mobile prototype built for demo/hackathon purposes.

7. **Architecture** — Brief mention of client → gateway → AI inference → decision flow, sub-200ms blocking latency.

8. **Getting Started** — Install (bun install), dev (bun run dev), build (bun run build) commands.

9. **Team** — 2-person team breakdown with claimed skills.

10. **License** — MIT or placeholder.

### Deliverable

A single `README.md` at the repo root, written in clean Markdown with no emojis, professional fintech tone.