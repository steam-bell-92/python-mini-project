---
name: interview-prep
description: Build mock interview simulators with voice, case interviews, behavioral prep, and scorecards.
---

# Interview Prep Simulator

Instructions for building and improving AI-powered mock interview simulators that adapt dynamically to any company, role, industry, and market based on user input.

## Core Principle: Dynamic Adaptation

The simulator must NEVER be hardcoded to a specific company or market. Instead:

1. The user provides their **target company**, **role/position**, and **location/market** during the pre-interview setup
2. The AI interviewer uses this context to dynamically research and adapt: pulling in relevant company facts, industry dynamics, regional economic context, and role-specific technical questions

3. The system prompt instructs the AI to act as an informed interviewer at that specific company and tailor all questions, scenarios, and feedback accordingly

This means a single simulator can prep someone for a PE Principal role at Goldman Sachs in New York, a consulting Associate at McKinsey in London, or a VP of Finance at a regional bank in Santo Domingo — all driven by what the user enters.

## Pre-Interview Setup Screen

Before starting any interview, show a setup screen collecting:

### Required Inputs

1. **Company Name** — Text input with placeholder (e.g., "Goldman Sachs", "Banco Popular Dominicano")
2. **Role / Position** — Text input (e.g., "Private Equity Principal", "Senior Consultant", "VP of Finance")

3. **Interview Type Selector** — Card-based selection:

- **Structured Interview** (icon: Briefcase) — Behavioral + technical + firm knowledge, 8–10 questions
- **Consulting Case Interview** (icon: BarChart3) — Business case scenarios with quantitative analysis

- **Behavioral Only** (icon: MessageSquare) — Focused STAR-method practice, 8–10 behavioral questions

Each card shows title, brief description, estimated duration, and question count

1. **Language Selector** — Dropdown or pill-toggle:

- English (default), Spanish, French, Portuguese, German, Mandarin, Japanese, Arabic, Hindi
- Show language name in both English and native script (e.g., "Spanish — Español")

- Any language the AI model supports should be available

### Optional Inputs

1. **Industry** — Dropdown: Finance/Banking, Consulting, Technology, Healthcare, Energy, Real Estate, Other (with text input)
2. **Difficulty Level**:

- Standard: Constructive feedback, moderate follow-ups
- Challenging: Aggressive follow-ups, stress-test answers, shorter patience for vague responses

1. **Focus Areas** (checkboxes, structured interview only):

- Behavioral/STAR, Technical, Deal/Project Experience, Firm & Market Knowledge, Culture Fit

1. **Additional Context** — Optional textarea for the user to paste a job description, specific topics to focus on, or personal background the AI should consider
2. **"Begin Interview" CTA** — Prominent button at the bottom; disabled until company + role + type are filled

## Supported Interview Types

### 1. Structured Interview (Default)

Adapts question categories to the role and industry:

#### For finance/PE/banking roles

- Behavioral / STAR (2–3 questions)
- Technical (LBO, valuation, capital structure, accounting) (2–3 questions)

- Deal / Transaction Experience (1–2 questions)
- Firm & Market Knowledge (1–2 questions)

- Culture Fit (1 question)

##### For consulting roles

- Behavioral / STAR (2–3 questions)
- Problem Solving / Frameworks (2–3 questions)

- Client Experience / Engagement Stories (1–2 questions)
- Firm & Market Knowledge (1–2 questions)

- Culture Fit (1 question)

###### For technology roles

- Behavioral / STAR (2–3 questions)
- System Design / Architecture (2–3 questions)

- Past Projects / Technical Impact (1–2 questions)
- Company & Product Knowledge (1–2 questions)

- Culture Fit (1 question)

###### For general / other roles

- Behavioral / STAR (2–3 questions)
- Role-Specific Technical (2–3 questions)

- Experience & Accomplishments (1–2 questions)
- Company Knowledge (1–2 questions)

- Culture Fit (1 question)

### 2. Consulting Case Interview

Business-case-style interviews with quantitative and qualitative analysis:

- **Market Sizing**: Top-down / bottom-up estimation relevant to the target company's industry
- **Profitability Analysis**: Revenue/cost decomposition, margin drivers

- **Market Entry**: Go/no-go framework, competitive landscape, regulatory considerations
- **M&A / Due Diligence**: Synergy analysis, integration risk, valuation

- **Operations Optimization**: Process improvement, capacity planning, cost reduction

The AI selects a case scenario relevant to the target company and industry. For example:

- Banking company → "Should [Company] enter the digital payments market in [Region]?"
- Tech company → "A client's SaaS platform is losing enterprise customers — diagnose and recommend"

- Healthcare → "Evaluate the acquisition of a regional hospital chain"

Case flow: Scenario presentation → Clarifying questions → Framework building → Quantitative analysis → Recommendation → Evaluation

### 3. Behavioral-Only Interview

Focused STAR storytelling practice:

- 8–10 behavioral questions across: leadership, teamwork, failure/resilience, initiative, conflict resolution, influence without authority, ambiguity, time pressure
- Strict STAR-method feedback after every answer

- Scoring on: specificity, quantification, personal ownership ("I" vs "we"), structure, and relevance to the target role

## Multi-Language Support

### Implementation Rules

- Present the language selector on the setup screen before starting the session
- The system prompt must include an explicit language instruction at the TOP: `"Conduct this entire interview in [language_name]. All questions, feedback, and the final scorecard must be in [language_name]."`

- The UI chrome (buttons, labels, sidebar) remains in English unless the user explicitly requests full localization
- The AI should use professional, business-appropriate register in the selected language — not casual or overly academic

- For non-English interviews, the AI should still understand if the candidate mixes in English technical terms (e.g., "LBO", "IRR", "EBITDA") without penalizing them

## System Prompt Architecture

### Dynamic System Prompt Construction

Build the system prompt dynamically from the user's setup selections. The frontend constructs the full prompt and passes it to the backend via the `systemPrompt` field on conversation creation.

### System Prompt Template

```text

[LANGUAGE INSTRUCTION — if non-English]

You are a senior interviewer at {company_name} conducting a {interview_type} interview for the {role_name} position.

COMPANY CONTEXT:

Research and incorporate what you know about {company_name}:

- Industry position, key products/services, competitive advantages
- Recent news, strategic initiatives, financial performance

- Market/region: {location_context}
- Company culture, values, and what they look for in candidates

Use this knowledge to make questions specific and relevant. If the candidate mentions something about the company, validate or challenge their knowledge.

{INTERVIEW TYPE SPECIFIC INSTRUCTIONS}

INTERVIEW GUIDELINES:

- Ask ONE question at a time
- After each answer, provide brief constructive feedback (3–5 sentences max):

* For behavioral: STAR structure quality, specificity, quantification, ownership ("I" vs "we")

* For technical: accuracy, logical flow, assumptions stated

* For cases: framework quality, math accuracy, creativity, communication

- Rate each answer: Strong / Adequate / Needs Improvement
- Then ask the next question

- Be professional, direct, and constructive
- {difficulty_instruction}

FINAL SCORECARD:

After all questions are complete, provide a final scorecard with:

- Overall rating (Strong Hire / Hire / Lean Hire / No Hire)
- Category-by-category scores

- Top 3 strengths observed
- Top 3 areas for improvement

- Specific recommendations for interview day at {company_name}

Start by briefly introducing yourself as the interviewer at {company_name}, explaining the interview format, and asking the first question.

```

### Difficulty Instructions

- **Standard**: `"Be supportive and constructive. Give the candidate time to think. Provide helpful feedback."`
- **Challenging**: `"Be demanding. Push back on vague answers. Ask pointed follow-ups. Challenge assumptions. Simulate a high-pressure interview environment."`

## Response Timer

Add a visible timer in the chat area:

- Starts counting when the AI finishes asking a question (streaming ends)
- Displays elapsed time next to the input area (e.g., "Response time: 1:32")

- Stops when the user submits their answer
- Records per-question response times for the final scorecard

- Visual cue: Green < 2 min, Yellow 2–4 min, Red > 4 min
- Timer helps candidates practice pacing — real interviews penalize overly long or short answers

## End-of-Session Scorecard

When the AI sends the final scorecard, detect it and render a special scorecard UI:

- Parse the scorecard from the AI's markdown response
- Display as a styled card with:

- Overall rating (color-coded: green for Strong Hire/Hire, yellow for Lean Hire, red for No Hire)
- Category-by-category scores in a visual grid

- Top 3 strengths (green checkmarks)
- Top 3 areas for improvement (amber indicators)

- Response time summary (average, fastest, slowest)
- Specific recommendations for interview day

## Interview Progress Sidebar

The right sidebar dynamically reflects the interview type and adapts labels to the role:

**Structured Interview stages** (adapt labels to role/industry):

- Finance: Behavioral → Technical/LBO → Deal Experience → Firm Knowledge → Culture Fit
- Consulting: Behavioral → Problem Solving → Client Experience → Firm Knowledge → Culture Fit

- Tech: Behavioral → System Design → Past Projects → Company Knowledge → Culture Fit
- General: Behavioral → Technical → Experience → Company Knowledge → Culture Fit

### Consulting Case stages

1. Scenario Presentation → 2. Clarifying Questions → 3. Framework → 4. Analysis → 5. Recommendation

#### Behavioral stages

1. Leadership → 2. Teamwork → 3. Conflict → 4. Initiative → 5. Failure/Growth

Each stage shows: number badge, label, active/complete/upcoming state, and a contextual tip for the current stage.

## Technical Architecture

### Backend (API Server)

- `POST /api/openai/conversations`accepts optional`systemPrompt`,`interviewType`, and`language` fields
- If `systemPrompt` is provided, use it instead of any default; otherwise fall back to a generic interview prompt

- The streaming endpoint (`POST /api/openai/conversations/:id/messages`) remains unchanged — reads all messages including system message from DB
- Model: use the latest available model; `max_completion_tokens: 8192`

### Frontend (React + Vite)

- Setup screen is the default view (no conversation ID yet)
- On "Begin Interview," construct the dynamic system prompt from user inputs, create conversation, then start streaming

- The system prompt message is hidden from the chat display — filter by `m.role === "system"` or content-matching
- Use `cn()`from`@/lib/utils` for all dynamic classNames — avoid template literals in JSX className props (known design-subagent bug pattern)

- SSE parsing: `fetch`+`ReadableStream`reader; split chunks on`\n`, parse`data: {...}` lines
- Use `react-markdown`+`remark-gfm` for rendering AI responses

### Styling

- Use a professional, corporate design system — clean typography, muted palette, subtle shadows
- Card-based setup screen with clear visual hierarchy

- Adapt accent colors if desired, but default to a neutral professional palette

## File Structure Reference

```text

artifacts/mock-interview/src/

├── pages/

│ └── Interview.tsx \# Main interview page (setup + chat)

├── components/

│ ├── Layout.tsx \# App shell with sidebar navigation

│ ├── SetupScreen.tsx \# Pre-interview setup form

│ ├── ChatArea.tsx \# Message list + input + timer

│ ├── ProgressSidebar.tsx \# Interview stage tracker

│ └── Scorecard.tsx \# Final scorecard renderer

├── lib/

│ ├── prompts.ts \# System prompt builder (takes setup inputs, returns prompt string)

│ └── utils.ts \# cn() and helpers

└── App.tsx

artifacts/api-server/src/routes/openai/index.ts \# Streaming endpoint

lib/api-spec/openapi.yaml \# API contract

lib/db/src/schema/index.ts \# DB schema

```

## Improvement Checklist

When improving the simulator, prioritize in this order:

1. [ ] Pre-interview setup screen (company, role, type, language inputs)
2. [ ] Dynamic system prompt builder from user inputs

3. [ ] Consulting case interview support
4. [ ] Behavioral-only interview mode

5. [ ] Response timer
6. [ ] End-of-session scorecard UI

7. [ ] Difficulty level selector
8. [ ] Focus area filtering (structured interview only)

9. [ ] Session history / past interview review
10. [ ] PDF export of scorecard and transcript
