# SmartGuard AI by GXBank

**AI-Powered Active Spending Enforcement for Malaysian Gen-Z**

> Built for the GXBank x UPM Hackathon — Case Study 2.

SmartGuard AI is a banking guardrail layer that moves beyond passive spend tracking into **Active Enforcement**. Using real-time context (GPS, MCC codes, DuitNow QR, and online cart-link parsing), our Need-vs-Want engine scores every transaction 0–100 and **hard-blocks impulse purchases** before they hit the payment gateway — protecting Malaysian youth from the BNPL debt trap.

---

## The Problem

Malaysia's Gen-Z is being trapped by the *Impulse Economy*: TikTok Shop, Shopee Live, Atome, and SPayLater have normalised spending money you don't have. AKPK reports record-high youth bankruptcies, and 47% of Gen-Z actively use BNPL. Awareness-only apps (MAE, Wallet, etc.) show you the damage **after** it's done. SmartGuard AI prevents the regret before it happens.

## The Solution

A friction-based intervention layer that sits between the user and the payment rail:

- **Contextual AI Categorisation** — GPS geofencing + MCC codes + merchant NLP + cart-link parsing → Need/Want score (0–100)
- **Hard-Block Algorithm** — `SurvivalMinimum = Rent + Utilities + Groceries + Transport + Σ(DebtMinimums)`; blocks when `NecessityIndex < 60 AND (Amount > DiscretionaryBuffer OR DTI_after > 40%)`
- **Emergency Override / Safety Net** — Whitelisted MCCs (hospital 8062, pharmacy 5912, petrol 5541, auto-repair 7538) + Face ID + 3-min cooldown + post-event AI audit
- **Unified Debt Dashboard** — Open Banking aggregation of BNPL, credit cards, PTPTN, and personal loans into one DTI gauge
- **Goal Buckets + AutoPilot** — Auto-split income into Needs / Wants / Save, lock goals with early-exit fees
- **Streaks & Leaderboard** — Gamified savings discipline for Gen-Z retention
- **Persistent Widgets** — Home-screen "Safe-to-Spend Today" + Financial Health Score (0–850)

## Tech Stack

| Layer | Stack |
|---|---|
| Frontend | TanStack Start v1, React 19, TypeScript, Tailwind CSS v4, Vite 7 |
| UI Kit | shadcn/ui, Radix, Lucide, Recharts |
| AI / ML | Vertex AI (Gemini 2.5 Flash, <200 ms inference) + custom XGBoost Need/Want classifier; on-device TFLite fallback |
| Backend | Microservices on Google Cloud Run (Auth, Ledger, Decision Engine, Aggregator) |
| Data | PostgreSQL (transactional) + BigQuery (analytics) + Redis (policy cache, <100 ms gateway response) |
| Integrations | Open Banking MY (BNM POSI), DuitNow QR, Mastercard MCC feed, Google Maps Places API |
| Security | Zero-knowledge GPS (on-device), AES-256, BNM RMiT + PDPA compliant |

## Architecture

```
 Mobile Client ──▶ Payment Gateway ──▶ Decision Engine (Redis cache, <100 ms)
                                            │
                                            ├─▶ XGBoost (deterministic block)
                                            └─▶ Vertex AI Gemini 2.5 Flash (async re-score)
                                            │
                                            ▼
                                    Allow / Block / Friction Override
```

Total blocking budget: **<200 ms** — well within the Visa/Mastercard ~1.5 s authorisation window.

## Prototype

This repository ships a **33-screen high-fidelity mobile prototype** covering onboarding, dashboard, buckets, transactions, goals, AutoPilot, streaks, leaderboard, AI assistant, Guardian Hub, hard-block flow, liabilities, widget, and the Need-vs-Want demo screen.

Live preview: <https://smart-guard-upm.lovable.app>

## Getting Started

```bash
bun install
bun run dev      # http://localhost:5173
bun run build    # production build
```

Requires Bun ≥ 1.0 (or swap for `npm` / `pnpm`).

## Team

| Member | Role | Claimed Skills |
|---|---|---|
| **Muhammad Dhiyauddin** | Builder / Developer | Frontend Development (React / TypeScript) · UI/UX Design (Mobile Fintech) · Product Architecture & System Design |
| **Adam Safwan** | Presenter / Ideator | Product Ideation & Innovation · Pitching & Public Speaking · Market Research & Business Strategy |

## Documentation

- `SmartGuard_AI_PRD.pdf` — full Product Requirement Document
- `SmartGuard_AI_Pitch_Script.pdf` — 5-minute video pitch script
- `SmartGuard_AI_Architecture.mmd` — Mermaid architecture diagram

## License

MIT — built for hackathon demonstration purposes.

---

*"We don't track spending. We prevent regret."*
