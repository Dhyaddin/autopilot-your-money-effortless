## SmartGuard AI — PRD & Pitch Deck Deliverable Plan

I'll generate a single comprehensive document covering everything you asked for, optimized for your hackathon rubric (Intro/Problem, Demo, Marketing, Tech Architecture, Video).

### Deliverables (saved to `/mnt/documents/`)

1. **`SmartGuard_AI_PRD.pdf`** — Full Product Requirement Document (~15–20 pages)
2. **`SmartGuard_AI_PRD.md`** — Editable markdown source
3. **`SmartGuard_AI_Architecture.mmd`** — Mermaid architecture diagram (client → gateway → AI inference → decision)
4. **`SmartGuard_AI_Pitch_Script.pdf`** — Standalone 5-minute video script with timing cues, on-screen text, and B-roll notes

### Document Structure

**1. Executive Summary & Problem Statement**
- The "Impulse Economy": TikTok Shop, Shopee Live, Atome/SPayLater normalization
- BNPL debt trap stats (Malaysia AKPK youth bankruptcy data, 47% Gen-Z BNPL usage)
- Reframe: *Awareness apps* (passive — MAE, Wallet) vs. *Enforced Discipline* (SmartGuard's friction-based intervention)
- Why cognitive load reduction beats willpower

**2. Solution & Features (Deep Dive)**
- **Contextual AI Categorization**: GPS geofencing + MCC codes + merchant NLP + cart-link parsing → Need/Want score (0–100)
- **Hard-Block Algorithm**: Survival Minimum formula = `Rent + Utilities + Groceries + Transport + Debt Minimums`; Discretionary Buffer = `Income − Survival − Goal Auto-save`; block triggers when `(Want score > 60) AND (Buffer < amount OR DTI > 40%)`
- **Emergency Override / Safety Net**: Whitelisted MCCs (hospital 8062, pharmacy 5912, auto-repair 7538, petrol 5541) + Face ID + 3-min cooldown + post-event AI audit
- **Unified Debt Dashboard**: Open Banking aggregation of BNPL (Atome, SPayLater, Grab PayLater), credit cards, PTPTN, personal loans → single DTI gauge
- **Persistent Widgets**: iOS/Android home-screen "Safe-to-Spend Today" + Financial Health Score (0–850)

**3. Technical Architecture**
- **Frontend**: React Native + TanStack Query, Apple/Google Wallet integration for widgets
- **Backend**: Microservices on Google Cloud Run (Auth, Ledger, Decision Engine, Aggregator)
- **AI Layer**: Vertex AI (Gemini 2.5 Flash for sub-200ms inference) + custom XGBoost classifier for Need/Want scoring; on-device TFLite fallback
- **Data**: Postgres (transactional) + BigQuery (analytics) + Redis (decision cache for <100ms gateway response)
- **APIs**: Open Banking MY (BNM POSI), DuitNow QR, Mastercard MCC feed, Google Maps Places API
- **Sub-second inference**: Edge cache of user policy → Decision Engine evaluates locally → async AI re-score
- **Security**: GPS processed on-device only (zero-knowledge), tokenized merchant IDs, AES-256, BNM RMiT compliant, PDPA consent layer

**4. Market Fit & Commercial Potential**
- **TAM/SAM/SOM** for Malaysia Gen-Z (5.8M, 18–28)
- **Personas**: "Aiman, Y2 CS student RM 1,200 PTPTN/month"; "Sarah, fresh grad RM 3,500 + 3 BNPL"
- **Business Model**: B2B2C — license to GXBank/AEON Bank/Boost Bank; revenue share on default-rate reduction (target 18% drop = RM ~120/customer/yr saved); freemium widget tier
- **Moat**: Proprietary Need/Want training data + bank partnership lock-in

**5. 5-Minute Video Script** (minute-by-minute)
- 0:00–0:30 **Hook**: Live screen recording — user tries to checkout RM 280 Shopee cart, phone vibrates, transaction BLOCKED
- 0:30–1:15 **Problem**: AKPK stats, BNPL debt, "the bank says yes when it should say no"
- 1:15–2:30 **Solution Walkthrough**: Buckets, Guardian Hub, Need/Want engine demo
- 2:30–3:30 **The Block (Hero Demo)**: Real-time enforcement at QR gateway + Safety Net override flow
- 3:30–4:15 **Technology**: Architecture diagram, sub-second inference, Open Banking integration
- 4:15–5:00 **Visionary Close**: "We don't track spending. We prevent regret." + ask (pilot with GXBank)

### Generation Approach

- Write content with the Lovable AI Gateway script (`/tmp/lovable_ai.py`) using GPT-5 for fintech-grade prose
- Render PRD to PDF via `markdown-pdf` (Pandoc/WeasyPrint) with branded GXBank-style cover
- Render Mermaid architecture diagram as artifact
- QA: open the PDF, screenshot pages, check formatting and citations before delivery

No code changes to the prototype app — this is a documentation deliverable only.

Approve and I'll generate everything in one pass.
