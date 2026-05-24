---
name: ai-recruiter
description: Source and evaluate candidates with job analysis, CV screening, and pipeline tracking.
---

# AI Recruiter

Help source and evaluate candidates for open roles. Analyze job descriptions, build search strategies, find specific candidate profiles, draft outreach messages, screen uploaded CVs/resumes against job descriptions, design full recruitment processes (stages, aptitude tests, scorecards, question banks), and send emails to candidates at every stage via Gmail integration.

## When to Use

### Hiring & sourcing strategy

- User needs to hire for a role and wants sourcing strategy
- User wants to find specific candidate profiles for a role

- User asks about the talent landscape or market for a role
- User wants to know who to source from or which competitors to target

- User asks where to find candidates beyond LinkedIn (GitHub, conferences, HN, etc.)
- User wants to search for engineers/designers/PMs on GitHub, Stack Overflow, or other platforms

#### Job descriptions & postings

- User wants to improve, review, or optimize a job description
- User asks if their job posting is biased or wants it checked for inclusive language

- User wants to understand why they're not getting enough applicants

##### CV/resume screening & candidate evaluation

- User uploads CVs/resumes and wants them screened against a job description
- User wants candidate evaluation criteria

- User wants to compare two or more candidates side-by-side
- User asks who to advance, hold, or reject from a candidate pool

- User wants candidates ranked from strongest to weakest

###### Interview process & assessment design

- User needs interview questions for a specific role
- User wants to design a full recruitment process (stages, questions, tests, scorecards, timelines)

- User wants to create a scorecard or evaluation rubric for interviews
- User wants to design a take-home assignment, coding challenge, or skills test

- User asks what to look for in a portfolio review or case study presentation
- User asks about ideal interview-to-offer timelines or how to reduce candidate drop-off

###### Outreach & candidate communication

- User wants to send emails (confirmation, rejection, next steps) to candidates
- User wants to write cold outreach messages to passive candidates

- User asks how to get better response rates on outreach
- User wants to draft a follow-up for a candidate who hasn't replied

- User wants to send offer letters, rejection emails, or hold/waitlist notifications

###### Compensation & market intelligence

- User asks what companies are paying for a specific role
- User wants comp benchmarks for salary negotiation or offer planning

###### Pipeline tracking & scheduling

- User wants to track candidates in a shared pipeline (Google Sheets)
- User wants to add candidates to a tracking spreadsheet or update their status

- User wants to schedule interviews (Google Calendar)
- User wants to put an interview on their calendar or check interviewer availability

###### Follow-ups & reminders

- User needs follow-up reminders for candidate actions
- User wants to set a reminder to collect interview feedback from the team

- User wants to be reminded to follow up with a candidate after a set period

###### Hiring metrics & process improvement

- User asks how long it should take to fill a role
- User wants to know what metrics to track for their hiring process

- User asks about hiring funnel conversion rates or benchmarks

## When NOT to Use

- Sales prospecting (use find-customers skill)
- General market research (use deep-research skill)

- Writing job-related content (use content-machine skill)

## Proactive Email Communication — Always Offer This

At every key decision point in the recruiting workflow, proactively inform the user that you can draft and send emails on their behalf via Gmail. Do not wait for them to ask — surface this capability yourself.

### When to offer email drafting and sending

- After completing CV screening — offer to send advancement, rejection, or hold emails to each candidate
- After sourcing candidates — offer to draft and send cold outreach emails

- When the user discusses interview scheduling — offer to send interview invitation emails with logistics
- When the user makes a hiring decision — offer to send congratulations/offer emails or final rejection emails

- At any stage transition — offer to send process update emails to keep candidates informed

#### How to offer it

When presenting results (e.g., after screening CVs), always include a line like:

> "I can also draft and send personalized emails to each candidate — advancement confirmations, rejections, or interview invitations — directly from your Gmail. Want me to prepare those?"

##### Types of emails you can send

| Email Type | When to Offer |

|------------|--------------|

| **Cold outreach** | After sourcing candidates (Step 6) |

| **Application received** | When a user mentions receiving applications |

| **Advancement / next steps** | After CV screening recommends advancing a candidate |

| **Interview invitation** | When scheduling interviews — include date, time, format, interviewer names |

| **Interview follow-up** | After interviews — thank the candidate, outline next steps and timeline |

| **Rejection** | After CV screening or interview rounds — respectful, brief, no detailed feedback |

| **Hold / waitlist** | When a candidate is strong but timing isn't right |

| **Offer / congratulations** | When a hiring decision is made |

| **Process update** | When there are delays or timeline changes — keep candidates in the loop |

| **Reference request** | When moving to reference checks — polite request to the candidate or referee |

**Gmail setup:** If the user agrees to send emails and Gmail is not yet connected, immediately guide them through the Gmail integration setup (see Step 8 for details). Do not skip this — getting Gmail connected early makes the entire workflow smoother.

###### Also proactively offer these integration-powered capabilities

- **"Want me to set up a shared tracking sheet for this role?"** — Google Sheets pipeline tracker (see Step 11). Offer at the start of any hiring process or after CV screening.
- **"I can schedule interviews directly on your calendar."** — Google Calendar integration (see Step 12). Offer when advancing candidates to interview stages.

- **"Should I set a follow-up reminder for this?"** — Offer the user their choice of notification channel: email (Gmail), messaging (Slack or Discord), or task creation (Asana, Linear, Jira, or Notion). See Step 13. Ask the user once which channel they prefer, then use it consistently.

## Workflow — Follow This Order

### Step 0: Research First, Then Ask Questions

Before producing any output, always do two things in this order:

#### 0a. Search for the role and company

If the user names a company or role, use `webSearch` to find:

- The actual job posting (check Ashby, Lever, Greenhouse, the company careers page)
- Latest company details: funding, valuation, headcount, ARR, recent news

- Competitor landscape for the role

This gives you the context to ask smart questions instead of generic ones.

##### 0b. Ask the user clarifying questions

Do not assume details. Ask about:

- Which specific role (if the company has multiple open positions, list them as choices)
- Seniority level

- Location / remote policy
- What candidate background matters most (domain-specific vs. open to adjacent backgrounds)

- Whether competitors are fair game for sourcing
- Any specific gaps on the team they're trying to fill (e.g., growth, technical, enterprise, design)

- Any other preferences (e.g., founder background, specific skills)

Only proceed to output after you have answers.

### Step 1: Calibrate the Role

Split requirements into three buckets — be ruthless, most JDs list nice-to-haves as must-haves and shrink the pool 80%:

- **Must-have** (3-4 max): Deal-breakers. Can't do the job without these on day one.
- **Learnable in 90 days**: Most "required" skills belong here.

- **Pedigree signals**: School, FAANG experience, etc. — these filter for bias, not ability. Drop them unless there's a specific reason.

**Comp research:** `webSearch: "levels.fyi [role] [company tier]"`or`"[role] salary [city] site:glassdoor.com"`. For startups,`webSearch: "Pave [role] equity benchmarks"`. Keep comp in the internal strategy doc for reference but do NOT include it in outreach templates by default.

### Step 2: Build Boolean Search Strings

Boolean-savvy recruiters fill roles ~23% faster (LinkedIn 2023 data). LinkedIn Recruiter caps each field at ~300 chars — split across Title and Keywords rather than cramming one field.

#### Core pattern — put role in Title, skills in Keywords

```text

Title: ("staff engineer" OR "senior engineer" OR "tech lead" OR "principal")

Keywords: (Rust OR Go OR "distributed systems") AND (Kubernetes OR k8s) NOT (manager OR director OR intern)

```

**Synonym rings — the \#1 missed tactic.** Titles fragment massively across companies:

```text

("product manager" OR "product owner" OR "PM" OR "program manager" OR "product lead")

("data scientist" OR "ML engineer" OR "machine learning engineer" OR "applied scientist" OR "research scientist")

("SRE" OR "site reliability" OR "devops engineer" OR "platform engineer" OR "infrastructure engineer")

```

**Impact-verb trick** — surface doers, not title-holders:

```text

("built" OR "shipped" OR "launched" OR "scaled" OR "led migration" OR "0 to 1")

```

##### X-ray search (Google, bypasses LinkedIn limits)

```text

site:linkedin.com/in ("staff engineer" OR "principal engineer") "rust" "san francisco" -recruiter -hiring

```

### Step 3: Provide Direct LinkedIn Search Links

Always generate at least 5 clickable LinkedIn search URLs that the user can open directly in their browser. These should be pre-built with URL-encoded keywords, location filters, and relevant company/skill terms.

#### URL format

```text

https://www.linkedin.com/search/results/people/?keywords=URL_ENCODED_KEYWORDS&geoUrn=%5B%22GEO_ID%22%5D&origin=FACETED_SEARCH

```

##### Common geo IDs

- SF Bay Area: `102095887`
- New York: `103644278`

- US: `103644278`
- London: `90009496`

Create separate links for different search angles:

1. Candidates at direct competitors
2. Candidates with the specific skill/background the user prioritized

3. Candidates at adjacent companies in the space
4. Candidates at tier 2/3 companies (bigger pool)

5. Broader keyword search for passive candidates

### Step 4: Find Specific Candidate Profiles

Always use `webSearch`with`site:linkedin.com/in` queries to find specific named candidates. Search multiple angles:

- PMs/engineers at competitor companies
- People with the specific background the user asked for (e.g., founder experience, UI expertise)

- People at adjacent companies in the same space

Present candidates in a table with:

- Name
- Current role

- Why they fit (1 sentence)
- Hyperlinked LinkedIn profile URL

Aim for 10-15 specific profiles, organized into tiers (e.g., direct competitors, adjacent companies, broader pool).

### Step 5: Source Beyond LinkedIn

LinkedIn InMail response rates have dropped from 30%+ to 10-13% over 5 years as the platform saturated. Diversify:

| Channel | Best for | Tactic |

|---------|----------|--------|

| **GitHub** | Engineers | `webFetch` their profile — check contribution graph (consistent > spiky), pinned repos, languages bar, PR review quality on public projects. |

| **GitHub Search** | Niche skills | `site:github.com "location: [city]" language:Rust` or search commits/issues in relevant OSS projects |

| **Stack Overflow** | Deep specialists | Top answerers on niche tags — check profile for contact info |

| **Conference talks** | Senior/staff+ | `webSearch: "[conference name] speakers 2025"` — speakers are pre-vetted for communication skills |

| **Papers/Google Scholar** | ML/research | Co-authors on relevant papers, often with .edu emails |

| **HN "Who wants to be hired"** | Startup-minded | Monthly thread, candidates self-describe, `site:news.ycombinator.com "who wants to be hired"` |

| **Product Hunt** | Builder-types | Makers of top products in the relevant category |

| **Twitter/X** | Thought leaders | Search for people posting about the relevant domain |

| **YC Alumni** | Founder-PMs | Founders whose startups ended and moved into PM/leadership roles |

| **Paid aggregators** | Volume | SeekOut, HireEZ (45+ platforms), Gem, Juicebox/PeopleGPT |

### Step 6: Outreach That Gets Replies

**2025 benchmarks:** Cold InMail averages 10-13% response. Personalized outreach with a specific hook hits 20%+. 86% of candidates ignore generic messages entirely (TalentBoard 2024).

#### Structure — 4 sentences max

1. **Hook** (why *them*, specifically): "Saw your PR on the Tokio scheduler — the approach to work-stealing was clean."
2. **Why this role matters** (to them, not to you): "We're 12 engineers, pre-Series-B, and the entire storage layer is unowned."

3. **One concrete detail**: Remote policy, a tech problem they'd find interesting, team size, or growth metrics. Avoid listing comp — save that for when they respond.
4. **Low-friction CTA**: "Worth 15 min to hear more?" — not "Let me know if you're open to opportunities."

**Do NOT include compensation in outreach templates.** Comp details belong in the internal strategy section. If a candidate responds, share comp on the first call. Leading with comp in cold outreach can anchor low or signal desperation.

**Subject lines:** Use their project name or the specific tech, not "Opportunity at [Company]." Lowercase, short, looks like a peer wrote it.

**Follow-up:** One bump at day 5 with a *new* piece of info (funding news, a blog post, the hiring manager's name). Never "just following up."

**Generate 3 outreach templates** tailored to different candidate segments (e.g., competitors, adjacent companies, career-changers). Customize the angle for each.

### Step 7: CV/Resume Screening

When the user uploads CVs/resumes and provides a job description, evaluate each candidate systematically.

#### For each CV, assess

1. **Must-have match** — Does the candidate meet the must-have requirements from Step 1? Score each as Met / Partial / Not Met.
2. **Experience relevance** — How closely does their work history align with the role? Look for domain experience, comparable company stage, and scope of responsibility.

3. **Skills match** — Technical and soft skills alignment with the JD. Distinguish between demonstrated skills (backed by examples) and claimed skills (just listed).
4. **Career trajectory** — Are they on an upward path? Look for progression in title, scope, or impact. Lateral moves into the role's domain are a positive signal.

5. **Red flags** — Unexplained gaps, frequent short stints (< 1 year at multiple companies), title inflation without substance, or misalignment between stated role and described responsibilities.
6. **Standout factors** — Anything that makes them notably strong: open-source contributions, published work, relevant side projects, public speaking, or domain-specific achievements.

##### Output per candidate

| Field | Details |

|-------|---------|

| **Name** | Full name from CV |

| **Current/Last Role** | Title @ Company |

| **Overall Fit** | Strong Fit / Partial Fit / Weak Fit |

| **Must-Have Score** | X/Y met |

| **Key Strengths** | 2-3 bullet points |

| **Key Gaps** | 1-2 bullet points |

| **Recommendation** | Advance to interview / Hold / Reject |

| **Notes** | Any context (e.g., "strong technical but no leadership experience yet") |

###### After screening all candidates

- Rank candidates from strongest to weakest fit
- Provide a summary comparison table

- Recommend which candidates to advance, hold, or reject
- If the user wants, draft personalized emails for each decision (see Step 8)

### Step 8: Send Candidate Emails via Gmail

When the user wants to communicate decisions to candidates (confirmations, rejections, next steps, interview invitations), use the Gmail integration to send emails directly.

#### Prerequisites

- The Gmail integration must be connected. Use `searchIntegrations("gmail")` to check availability.
- If not connected, guide the user through setup: use `proposeIntegration`with the Gmail connector ID to trigger OAuth. After the user authorizes, use`addIntegration`to wire it to the project, then`proposeIntegration` again to establish the token.

- Use `listConnections('google-mail')` to get credentials once connected.

##### Email workflow

1. **Draft first, send second.** Always show the user the email content before sending. Use `confirm_connector_operation` to get explicit approval before each send.
2. **Personalize every email.** Reference the candidate's name, the specific role, and at least one detail from their CV (e.g., "your experience leading the migration at Acme Corp").

3. **Match tone to decision:**

- **Advancing:** Warm, specific about why they stood out, clear next steps with timeline
- **Rejection:** Respectful, brief, encouraging. Thank them for their time. Do NOT give detailed feedback on why they were rejected (legal risk). Keep it to 3-4 sentences.

- **Hold/Waitlist:** Honest about timeline, express genuine interest, set expectations for when they'll hear back

###### Email templates by type

###### Advancing to interview

- Subject: `Next steps — [Role Title] at [Company]`
- Body: Thank them, mention 1 specific thing from their background, explain the next step (phone screen / technical / panel), propose 2-3 time slots or link to scheduling tool, sign off warmly

###### Rejection

- Subject: `Update on your application — [Company]`
- Body: Thank them for applying, note the role was competitive, wish them well, 3-4 sentences max. No detailed feedback unless the user explicitly requests it.

###### Hold/Waitlist

- Subject: `Update on [Role Title] — [Company]`
- Body: Thank them, explain the timeline honestly, express continued interest, set expectation for next contact

###### Sending via Gmail integration

```javascript

const conns = await listConnections('google-mail');

if (conns.length === 0) {

// No Gmail connection — guide user through setup

const results = await searchIntegrations("gmail");

// Use proposeIntegration with the connector ID

}

const settings = conns[0].settings;

// Use the Gmail API to send emails

// Always use confirm_connector_operation before sending

```

###### Rules

- Never send emails without explicit user approval via `confirm_connector_operation`
- Always show the draft to the user first and let them edit if needed

- Send one email at a time, confirming each with the user (unless they explicitly approve batch sending)
- Include the user's name/signature in the from field, not the AI's

- Log all sent emails (recipient, subject, timestamp, decision type) for the user's records

### Step 9: Suggested Interview Questions

Include a short section of suggested interview questions at the bottom of the output. Use behavioral questions (STAR format) over hypothetical ones. Organize by the key criteria identified in Step 1.

Keep it lightweight — 2 questions per criterion, 3-4 criteria max. No scoring rubrics or evaluation matrices unless the user specifically asks for one.

### Step 10: Design a Full Recruitment Process

When the user asks to design a recruitment process, build a complete end-to-end hiring pipeline tailored to the specific role, company size, and seniority level. Use `webSearch` to research current best practices for the role type (e.g., "best interview process for senior backend engineer 2025").

#### Always ask the user first

- How many stages do they want? (Lean startups may want 3; enterprises may need 5-6)
- Any existing process they want to improve or replace?

- Time constraint — how fast do they need to hire?
- Who is available to participate as interviewers?

- Any specific skills or traits they want to test heavily?

##### Process design output — include all of the following

#### 1. Process Overview & Timeline

A visual stage-by-stage pipeline with estimated duration for each stage and total time-to-hire target.

| Stage | Duration | Owner | Pass Rate |

|-------|----------|-------|-----------|

| Application / CV Screen | 1-2 days | Recruiter / AI | ~20-30% advance |

| Phone Screen | 30 min | Recruiter / Hiring Manager | ~50% advance |

| Aptitude / Skills Test | 2-3 days (take-home) or 1 hour (live) | Candidate | ~40-60% advance |

| Technical / Domain Interview | 60 min | Team members | ~50% advance |

| Culture / Values Interview | 45 min | Cross-functional | ~70% advance |

| Final / Hiring Manager Interview | 45 min | Hiring Manager | ~80% advance |

| Reference Checks | 2-3 days | Recruiter | ~90% advance |

| Offer | 1-2 days | Hiring Manager + HR | — |

Adjust the number and type of stages based on the role. Junior roles may skip the take-home; senior/leadership roles may add a presentation or case study stage.

#### 2. Aptitude & Skills Tests

Design role-specific assessments. These should be practical, time-boxed, and relevant to actual job tasks — never trivia or gotcha questions.

##### By role type

| Role Type | Test Format | Duration | What It Measures |

|-----------|------------|----------|-----------------|

| **Engineering** | Take-home coding challenge OR live pair programming | 2-3 hrs (take-home) or 60 min (live) | Code quality, problem-solving, system design thinking |

| **Product Management** | Product case study (written or presented) | 2 hrs (take-home) or 45 min (live) | Prioritization, user empathy, analytical thinking, communication |

| **Design** | Design challenge with constraints | 3-4 hrs (take-home) or 60 min (live whiteboard) | Visual thinking, UX reasoning, craft quality |

| **Data Science / ML** | Data analysis challenge with real dataset | 2-3 hrs | Statistical reasoning, tool proficiency, communication of findings |

| **Sales / BD** | Mock sales pitch or objection-handling roleplay | 30-45 min (live) | Persuasion, product knowledge, listening skills |

| **Marketing** | Campaign brief or content strategy exercise | 2 hrs (take-home) | Strategic thinking, creativity, channel knowledge |

| **Operations** | Process improvement case study | 1-2 hrs | Systems thinking, prioritization, attention to detail |

| **Leadership / Management** | Leadership scenario or team-building exercise | 45 min (live) | Decision-making, conflict resolution, delegation |

###### Test design principles

- Mirror real work the candidate would do in the role — not abstract puzzles
- Time-box strictly — respect the candidate's time. Max 3 hours for take-homes

- Provide clear evaluation criteria to assessors before they review submissions
- Offer alternative formats when possible (e.g., "bring your own project" as an option alongside a take-home)

- For take-homes, always give at least 5 days to complete (candidates have jobs)

**Include a sample test for the specific role** with:

- The prompt / instructions candidates receive
- Evaluation rubric (what good, average, and poor looks like)

- Time limit
- Submission format

#### 3. Interview Question Bank

For each interview stage, provide a structured question set. Organize by competency area.

##### Format per stage

###### [Stage Name] — [Interviewer Role]

| Competency | Question | What to Listen For | Red Flag |

|------------|----------|-------------------|----------|

| [e.g., Problem Solving] | "Tell me about a time you had to solve a problem with incomplete information." | Structured approach, comfort with ambiguity, outcome focus | Waited for perfect info, blamed others, no clear outcome |

| [e.g., Collaboration] | "Describe a project where you had to work with a difficult stakeholder." | Empathy, communication strategy, resolution | Avoided the person, escalated immediately, us-vs-them framing |

Provide 3-4 questions per stage, covering different competencies. Include the "What to Listen For" and "Red Flag" columns so interviewers know what good and bad answers look like without needing training.

#### 4. Evaluation Scorecards

For each interview stage, provide a simple scorecard interviewers fill out immediately after the interview.

##### Scorecard format

```text

Candidate: _______________

Interviewer: _______________

Stage: _______________

Date: _______________

| Criteria | 1 (Below) | 2 (Meets) | 3 (Exceeds) | Score | Notes |

|----------|-----------|-----------|-------------|-------|-------|

| [Criterion 1] | [what "below" looks like] | [what "meets" looks like] | [what "exceeds" looks like] | ___ | ___ |

| [Criterion 2] | ... | ... | ... | ___ | ___ |

| [Criterion 3] | ... | ... | ... | ___ | ___ |

Overall recommendation: [ ] Strong Advance [ ] Advance [ ] Hold [ ] Reject

Key observations (2-3 sentences):

```

Keep it to 3-5 criteria per scorecard. Interviewers should complete it within 5 minutes of the interview ending — before discussing with other interviewers (prevents anchoring bias).

#### 5. Candidate Communication Plan

Map out every touchpoint with the candidate throughout the process. For each, note the timing, channel, and purpose. Offer to draft and send each of these via Gmail (see Step 8).

| Touchpoint | Timing | Channel | Purpose |

|------------|--------|---------|---------|

| Application received | Within 24 hours | Email | Confirm receipt, set expectations for timeline |

| Phone screen invite | Within 3 days of application | Email | Schedule the call |

| Post-phone-screen update | Within 24 hours | Email | Advance or reject |

| Test/assignment sent | Same day as advancement | Email | Instructions, deadline, support contact |

| Interview invite | Within 2 days of test review | Email | Schedule, prep materials, interviewer names |

| Post-interview update | Within 48 hours | Email | Advance, hold, or reject |

| Offer | Within 24 hours of final decision | Phone call + email | Verbal first, written follow-up |

| Rejection (final round) | Within 48 hours | Email or phone | Respectful, brief, encouraging |

#### 6. Process Metrics & Targets

Define what success looks like for the hiring process itself:

| Metric | Target | How to Measure |

|--------|--------|---------------|

| Time-to-fill | [role-appropriate target] | Days from posting to accepted offer |

| Candidate experience score | 4+/5 | Post-process survey (send to all candidates, including rejected) |

| Offer acceptance rate | >80% | Offers accepted / offers extended |

| Stage drop-off | <20% per stage | Candidates who withdraw at each stage |

| Interviewer calibration | <1 point spread | Variance in scorecard ratings across interviewers for same candidate |

| Diversity of pipeline | [user-defined target] | Demographics at each funnel stage |

### Step 11: Candidate Pipeline Tracking via Google Sheets

Use Google Sheets as the central tracking system for the entire hiring pipeline. This is where candidate data, evaluations, and stage history live — accessible to the full hiring team.

#### Prerequisites (2)

- Google Sheets integration must be connected. Use `searchIntegrations("google sheets")` to check availability.
- If not connected, guide the user through setup: use `proposeIntegration`with connector ID`connector:ccfg_google-sheet_E42A9F6CA62546F68A1FECA0E8`.

- Use `listConnections('google-sheet')` to get credentials once connected.

##### When to create a tracking sheet

- At the start of any hiring process — offer to set one up immediately
- After CV screening — populate it with all screened candidates and their evaluations

- Whenever the user mentions wanting to track or share candidate status with their team

###### Sheet structure — create one spreadsheet per role with these tabs

###### Tab 1: Pipeline Overview

| Column | Description |

|--------|------------|

| Candidate Name | Full name |

| Email | Contact email |

| Current Stage | Application / Phone Screen / Test / Interview / Offer / Rejected / Hired |

| Stage Entry Date | When they entered the current stage |

| Days in Stage | Auto-calculated |

| Overall Rating | Strong / Partial / Weak (from CV screening or interviews) |

| Next Action | What needs to happen next |

| Next Action Due | Date the next action is due |

| Assigned To | Who owns the next action |

| Notes | Free-form notes |

###### Tab 2: Candidate Evaluations

Running evaluation that compounds insights as candidates progress. Update this after each stage.

| Column | Description |

|--------|------------|

| Candidate Name | Full name |

| CV Screen Score | Must-have score (X/Y) and overall fit |

| CV Screen Notes | Key strengths, gaps, and red flags from initial screening |

| Phone Screen Score | 1-3 rating |

| Phone Screen Notes | Interviewer observations |

| Test Score | Assessment results and rubric scores |

| Test Notes | Evaluator comments |

| Interview 1 Score | Scorecard results |

| Interview 1 Notes | Key observations |

| Interview 2 Score | Scorecard results |

| Interview 2 Notes | Key observations |

| Final Recommendation | Hire / Strong Hold / Reject |

| Comparative Notes | How this candidate compares to others in the pipeline |

###### Tab 3: Communication Log

| Column | Description |

|--------|------------|

| Date | When the email was sent |

| Candidate | Recipient name |

| Email Type | Outreach / Confirmation / Interview Invite / Rejection / Offer / Follow-up |

| Subject Line | Email subject |

| Status | Sent / Opened / Replied (if tracking available) |

| Follow-up Due | When to follow up if no response |

###### Tab 4: Funnel Metrics

| Column | Description |

|--------|------------|

| Stage | Pipeline stage name |

| Entered | Count of candidates who entered this stage |

| Advanced | Count who moved to the next stage |

| Rejected | Count who were rejected at this stage |

| Withdrew | Count who dropped out |

| Conversion Rate | Advanced / Entered |

| Avg Days in Stage | Average time spent in this stage |

###### Keeping the sheet updated

- After every action (CV screen, email sent, interview completed, decision made), offer to update the tracking sheet
- When the user shares interview feedback, update the evaluation tab and comparative notes

- At regular intervals, offer to generate a funnel report from the metrics tab

```javascript

const conns = await listConnections('google-sheet');

if (conns.length === 0) {

const results = await searchIntegrations("google sheets");

// Use proposeIntegration with the connector ID

}

const settings = conns[0].settings;

// Use the Google Sheets API to create and update the tracking spreadsheet

// Always use confirm_connector_operation before write operations

```

### Step 12: Interview Scheduling via Google Calendar

Use Google Calendar to schedule interviews directly, rather than just proposing times via email. This eliminates back-and-forth and ensures calendar conflicts are checked.

#### Prerequisites (3)

- Google Calendar integration must be connected. Use `searchIntegrations("google calendar")` to check availability.
- If not connected, guide the user through setup: use `proposeIntegration`with connector ID`connector:ccfg_google-calendar_DDDBAC03DE404369B74F32E78D`.

- Use `listConnections('google-calendar')` to get credentials once connected.

##### When to offer calendar scheduling

- When advancing a candidate to an interview stage
- When the user mentions needing to schedule a call or meeting with a candidate

- During process design, when mapping out the communication plan

###### Scheduling workflow

1. **Check interviewer availability** — Query the calendar for free/busy times for the relevant interviewers
2. **Propose time slots** — Present 3-5 available slots to the user for approval

3. **Create the calendar event** — Include:

- Title: `[Interview Type] — [Candidate Name] for [Role Title]`
- Duration: Based on the stage (30 min phone screen, 60 min technical, 45 min culture fit)

- Attendees: Interviewer(s) + candidate email (if available)
- Description: Include the candidate's CV summary, the questions/scorecard for this stage, and any prep notes

- Video link: If the user uses Google Meet, include a Meet link automatically

1. **Send interview invitation email** — Via Gmail, send the candidate a personalized invite with the confirmed time, format (video/phone/in-person), interviewer name(s), and any prep materials
2. **Set a follow-up reminder** — Create a calendar event for the interviewer 24 hours after the interview titled `[ACTION] Submit scorecard — [Candidate Name]` to prompt timely feedback

```javascript

const conns = await listConnections('google-calendar');

if (conns.length === 0) {

const results = await searchIntegrations("google calendar");

// Use proposeIntegration with the connector ID

}

const settings = conns[0].settings;

// Use the Google Calendar API to check availability and create events

// Always use confirm_connector_operation before creating events

```

### Step 13: Follow-Up Reminders

When the user opts in to follow-up reminders, offer three categories of delivery channels — let them choose their preferred method (or combine multiple).

**At the start of any hiring workflow, ask:** "Would you like me to send you follow-up reminders as we go through this process? I can notify you via email, Slack, Discord, or create tasks in Asana, Linear, Jira, or Notion — whichever you already use."

Once the user opts in and chooses a channel, use it consistently for all reminders without asking again each time.

#### Option A: Email notifications via Gmail

- Send an email from the user's Gmail to themselves
- Subject: `[Hiring Reminder] [Action needed] — [Candidate Name] for [Role]`

- Body: Full context — what happened, what to do next, a link to the tracking sheet, and any deadlines
- Examples:

- `[Hiring Reminder] Send follow-up to Sarah Chen — no response after 5 days`
- `[Hiring Reminder] Collect interview feedback from team — Alex Rivera`

- `[Hiring Reminder] Send offer letter to Jordan Park — deadline: Friday`

##### Option B: Messaging app notifications (Slack or Discord)

Send a message to the user via their preferred messaging platform. Ideal for teams who want real-time visibility.

- Use a consistent, scannable format:

```text

*Hiring Reminder*

*Candidate:* Sarah Chen

*Role:* Senior Backend Engineer

*Action needed:* Send follow-up email — no response after 5 days

*Due:* Today

*Context:* Initial outreach sent on March 20. No reply yet. Suggested: bump with new info (recent funding announcement).

*Tracking sheet:* [link]

```

- Can post to a shared channel (e.g., `#hiring`) so the whole team sees what needs attention, or send as a DM to the specific person responsible
- Ask the user which channel/server to post to on first setup

| Platform | Connector ID | Connection Name |

|----------|-------------|-----------------|

| **Slack** | `connector:ccfg_slack_01KH7W1T1D6TGP3BJGNQ2N9PEH`|`slack` |

| **Discord** | `connector:ccfg_discord_72DFF975D4C5460D83A3A5FD12`|`discord` |

###### Option C: Task/project management app notifications (Asana, Linear, Jira, or Notion)

Create tasks or items in the user's project management tool, so follow-ups appear alongside their other work. Each follow-up becomes a trackable task with a due date and assignee.

- **Asana** — Create a task in a designated hiring project. Set the due date, assignee, and description with full context.
- **Linear** — Create an issue in a hiring project. Tag it with a label like `hiring`or`recruiting`. Set priority and assignee.

- **Jira** — Create a ticket in a hiring board. Set the due date, assignee, and description.
- **Notion** — Add an entry to a hiring database page. Include candidate name, action needed, due date, and context.

Task format (adapt to the platform):

- **Title:** `[FOLLOW-UP] [Action needed] — [Candidate Name]`
- **Description:** Full context — what happened, what to do, deadline, link to tracking sheet

- **Due date:** The follow-up date
- **Assignee:** The person responsible (ask the user on first setup)

| Platform | Connector ID | Connection Name |

|----------|-------------|-----------------|

| **Asana** | `connector:ccfg_asana_17D6AEDD454A41BA8870C2542E`|`asana` |

| **Linear** | `connector:ccfg_linear_01K4B3DCSR7JEAJK400V1HTJAK`|`linear` |

| **Jira** | `connector:ccfg_jira_8D0B4B1730F64429A4FC3ACB88`|`jira` |

| **Notion** | `connector:ccfg_notion_01K49R392Z3CSNMXCPWSV67AF4`|`notion` |

###### Setup for any notification channel

1. Use `searchIntegrations("[platform name]")` to check availability
2. If not connected, guide the user through setup with `proposeIntegration` using the connector ID from the table above

3. Use `listConnections('[connection name]')` to get credentials once connected
4. Ask the user where to send notifications (channel, project, board, or database)

5. Always use `confirm_connector_operation` before creating tasks or sending messages

```javascript

// Example for any platform — adapt the connection name

const conns = await listConnections('[connection-name]');

if (conns.length === 0) {

const results = await searchIntegrations("[platform name]");

// Use proposeIntegration with the connector ID

}

const settings = conns[0].settings;

// Use the platform's API to send messages or create tasks

// Always use confirm_connector_operation before write operations

```

###### When to create reminders

- After sending any candidate email — set a follow-up for 5 business days if no response
- After an interview — remind the interviewer to submit their scorecard within 24 hours

- After advancing a candidate — remind to schedule the next stage within 2-3 business days
- After making an offer — remind to check for acceptance within the deadline

- After placing a candidate on hold — remind to re-engage after the specified waiting period
- After receiving a CV/application — remind to review within 1-2 business days

## Hiring Benchmarks

- **Time-to-fill**: 44 days US average (SHRM 2025); tech roles run longer
- **Cost-per-hire**: $6-7k standard tech roles; $12k+ for ML/security/staff+ (Deloitte 2024)

- **Funnel**: Tech roles see ~110 applicants/opening, ~5% get interviews
- **Speed matters**: Top candidates are off-market in 10 days. The interview-to-offer stage is where most teams lose — compressing it cuts time-to-hire by ~26%.

- **LinkedIn Recruiter cost**: $1.6k/yr (Lite) to $10.8k+/yr (Corporate, 150+ InMails/mo)

## Bias Reduction

- Strip unnecessary degree requirements — they filter for socioeconomic background, not skill
- Run JD through `webSearch: "gender decoder job description"` tools — "rockstar," "ninja," "aggressive" skew male applicant pools

- Same questions, same order for every candidate
- Score immediately after each interview, before discussing with other interviewers (anchoring bias)

- Source from non-traditional channels (HN, PH, YC alumni, blogs) to avoid LinkedIn-only pool bias

## Output Structure

The final deliverable should follow this order. Include sections based on what the user requested — not every section is needed for every interaction (e.g., CV screening may skip sourcing steps, email sending may skip sourcing entirely).

### For sourcing workflows

1. **Company Snapshot** — latest funding, valuation, headcount, ARR, key news (from web search)
2. **Role Details** — title, posting link, focus area, seniority, location, key needs (from user answers)

3. **Estimated Comp Range** — internal reference only, not for outreach
4. **Requirements** — must-haves / learnable / pedigree signals to drop

5. **Specific Candidate Profiles** — table with name, role, fit summary, hyperlinked LinkedIn URL (10-15 candidates)
6. **LinkedIn Search Links** — at least 5 clickable URLs the user can open directly

7. **Boolean Search Strings** — for LinkedIn Recruiter and Google X-ray
8. **Sourcing Channels** — beyond LinkedIn (table format)

9. **Outreach Templates** — 3 templates for different segments, no comp included
10. **Sourcing Action Plan** — 2-week day-by-day plan with target funnel

11. **Bias Reduction Checklist**
12. **Suggested Interview Questions** — lightweight, behavioral, organized by key criteria

#### For CV screening workflows

1. **Role Requirements Summary** — must-haves and key criteria extracted from the JD
2. **Individual Candidate Assessments** — detailed evaluation per candidate (see Step 7 format)

3. **Ranking & Comparison Table** — all candidates ranked with key metrics side-by-side
4. **Recommendations** — who to advance, hold, or reject

5. **Draft Emails** (if requested) — personalized emails for each decision, ready for user review and Gmail sending (see Step 8)

##### For recruitment process design workflows

1. **Process Overview & Timeline** — stage-by-stage pipeline with durations, owners, and expected pass rates
2. **Aptitude & Skills Tests** — role-specific assessments with prompts, rubrics, and time limits

3. **Interview Question Bank** — structured questions per stage with "what to listen for" and red flags
4. **Evaluation Scorecards** — ready-to-use templates for interviewers to fill out after each stage

5. **Candidate Communication Plan** — every touchpoint mapped with timing, channel, and purpose (with Gmail sending offered)
6. **Process Metrics & Targets** — success criteria for the hiring process itself

## Integrations Summary

The skill can leverage multiple integrations. Proactively offer to set up the relevant ones at the start of any hiring workflow.

### Core integrations (always offer)

| Integration | Connector ID | Connection Name | Purpose |

|-------------|-------------|-----------------|---------|

| **Gmail** | `connector:ccfg_google-mail_B959E7249792448ABBA58D46AF`|`google-mail` | Send candidate emails (outreach, confirmations, rejections, follow-ups, self-reminder notifications) |

| **Google Sheets** | `connector:ccfg_google-sheet_E42A9F6CA62546F68A1FECA0E8`|`google-sheet` | Pipeline tracking, candidate evaluations, communication logs, funnel metrics |

| **Google Calendar** | `connector:ccfg_google-calendar_DDDBAC03DE404369B74F32E78D`|`google-calendar` | Schedule interviews, check interviewer availability |

#### Notification channel integrations (offer based on user preference — ask which they use)

| Integration | Connector ID | Connection Name | Best For |

|-------------|-------------|-----------------|----------|

| **Slack** | `connector:ccfg_slack_01KH7W1T1D6TGP3BJGNQ2N9PEH`|`slack` | Team messaging — reminders via DMs or shared channels |

| **Discord** | `connector:ccfg_discord_72DFF975D4C5460D83A3A5FD12`|`discord` | Team messaging — reminders via DMs or server channels |

| **Asana** | `connector:ccfg_asana_17D6AEDD454A41BA8870C2542E`|`asana` | Task management — follow-ups as tasks with due dates |

| **Linear** | `connector:ccfg_linear_01K4B3DCSR7JEAJK400V1HTJAK`|`linear` | Task management — follow-ups as issues with priorities |

| **Jira** | `connector:ccfg_jira_8D0B4B1730F64429A4FC3ACB88`|`jira` | Task management — follow-ups as tickets with due dates |

| **Notion** | `connector:ccfg_notion_01K49R392Z3CSNMXCPWSV67AF4`|`notion` | Knowledge management — follow-ups as database entries |

**Setup guidance:** Gmail is the most critical — it powers candidate communication. Google Sheets and Calendar are strongly recommended for tracking and scheduling. For notifications, ask the user: "Where does your team usually communicate and track tasks? I can send follow-up reminders to Slack, Discord, Asana, Linear, Jira, or Notion — whichever you already use." Connect only the platforms they actually use.

## Limitations

- Cannot log into LinkedIn Recruiter, SeekOut, Gem, or HireEZ — builds search strings the user pastes in
- Cannot send LinkedIn InMails — but CAN send emails via Gmail integration (requires user to connect Gmail)

- Cannot verify employment history or run background checks
- GitHub analysis via `webFetch` only works for public profiles/repos

- LinkedIn search URLs use public search — results may vary based on the user's LinkedIn account tier
- CV screening depends on the quality and format of uploaded documents — PDFs with text content work best; scanned image-only PDFs may not be readable

- All integrations require the user to authorize their accounts via the respective Replit connectors
- Calendar scheduling requires interviewer email addresses to check availability and send invites

- Follow-up reminders are delivered via the user's chosen channel (email, Slack, Discord, Asana, Linear, Jira, or Notion) — not real-time push notifications
- Messaging integrations (Slack, Discord) require a channel or user ID to post to; task integrations (Asana, Linear, Jira, Notion) require a project, board, or database to create items in
