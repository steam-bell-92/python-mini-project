---
name: skill-finder
description: Recommend the right Replit skill based on the user's goal.
---

# Skill Finder

Help users find the right Replit skill for their objective. When the user describes what they want to accomplish, match their goal to one or more skills from the catalog below and explain why each is a good fit.

## Process

1. **Discover available skills dynamically.** Before matching, run `skillSearch(query)`via code execution with the user's objective as the query. This searches all currently installed skills — including any new ones added since this file was last updated. Also scan`.local/skills/`and`.local/secondary_skills/` directories for any skills not yet in the catalog below.
2. Listen to the user's objective or question.

3. Match their goal against both the dynamic results and the catalog below.
4. Recommend 1-3 skills, ranked by relevance. For each recommendation:

- Name the skill
- Explain in plain language what it does and why it fits their goal

- Mention any prerequisites or related skills they might also need

1. If no skill matches, say so honestly and suggest alternatives (custom skill creation, web search, or manual approach).

## Keeping the Catalog Current

The catalog below is a snapshot. New skills may be added to the platform at any time. To stay current:

- Always use `skillSearch()` as the primary discovery mechanism — it reflects the latest installed skills.
- If you discover a skill that is not in the catalog below, still recommend it and mention that it is a newer addition.

- Periodically, the user or agent can refresh the catalog by scanning `.local/skills/*/SKILL.md`and`.local/secondary_skills/*/SKILL.md` for names and descriptions, then updating this file.

## Matching Guidelines

- Match based on the user's intent, not just keywords. A user asking "how do I make my app live?" needs the **deployment** skill, even though they didn't say "deploy."
- When multiple skills could apply, recommend the most specific one first. For example, if the user wants to build a dashboard, recommend **data-visualization**over the general**react-vite** skill.

- If a task naturally involves multiple skills, list them in the order the user would use them (e.g., **database**first, then**react-vite** for a data-driven web app).
- Some skills work together frequently. Call out common pairings when relevant.

## Skill Catalog

### Building Apps

| Skill | What It Does |

|-------|-------------|

| **react-vite** | Build React + Vite web apps (dashboards, CRUD apps, landing pages, portfolios) |

| **expo** | Build mobile apps using Expo/React Native (camera, location, file uploads) |

| **data-visualization** | Build data dashboards with charts and tables (Recharts, PapaParse, TanStack Table) |

| **streamlit** | Build interactive Python web apps with Streamlit |

| **gamestack-js** | Build 2D/3D games using React Three Fiber (physics, controls, textures) |

| **slides** | Build presentation slide decks |

| **video-js** | Create short animated videos (marketing clips, explainers, motion graphics) |

### Design and UI

| Skill | What It Does |

|-------|-------------|

| **design** | Delegate frontend design work to a specialized design subagent |

| **design-exploration** | Explore multiple design alternatives and compare variants side-by-side |

| **mockup-sandbox** | Prototype UI components on the canvas with live previews |

| **mockup-extract** | Pull an existing component from the main app onto the canvas for redesign |

| **mockup-graduate** | Move an approved canvas mockup into the main app |

| **canvas** | Create and manipulate shapes, text, notes, and embeds on the workspace canvas |

| **mobile-ui** | Improve UI and functionality for mobile apps |

### Backend and Data

| Skill | What It Does |

|-------|-------------|

| **database** | Create and manage PostgreSQL databases, run SQL queries (dev and production) |

| **integrations** | Connect to third-party services (Stripe, GitHub, Google, Linear, Notion, etc.) |

| **rayfin** | Scaffold, run, and deploy Rayfin apps — Microsoft's Backend-as-a-Service (auth, database, storage) deployed to Microsoft Fabric. Gated behind the Replit <> Microsoft partnership flag |

| **query-integration-data** | Query and modify data in connected integrations or data warehouses |

| **replit-auth** | Add user authentication (login, sign-up, accounts) using Replit Auth |

| **pnpm-workspace** | Understand and work with the monorepo structure, dependencies, and codegen |

| **environment-secrets** | Manage environment variables and API keys/secrets |

### AI Integrations

| Skill | What It Does |

|-------|-------------|

| **ai-integrations-openai** | Use OpenAI models via Replit's proxy (no API key needed) |

| **ai-integrations-anthropic** | Use Anthropic/Claude models via Replit's proxy (no API key needed) |

| **ai-integrations-gemini** | Use Gemini models via Replit's proxy (no API key needed) |

| **ai-integrations-openrouter** | Use OpenRouter models via Replit's proxy (no API key needed) |

### Payments

| Skill | What It Does |

|-------|-------------|

| **stripe** | Integrate Stripe payments into apps |

| **revenuecat** | Integrate RevenueCat payments into mobile apps |

### Media and Content

| Skill | What It Does |

|-------|-------------|

| **media-generation** | Generate AI images. For AI video clips, read `media-generation/video_generation.md` |

| **photo-editor** | Edit, resize, crop, filter, and optimize images |

| **podcast-generator** | Turn topics into podcast scripts and audio |

| **website-cloning** | Clone an existing website as a deployable React app |

### DevOps and Quality

| Skill | What It Does |

|-------|-------------|

| **deployment** | Publish apps, configure deployment settings, debug production issues |

| **testing** | Run automated UI tests with Playwright |

| **security_scan** | Scan for dependency vulnerabilities and code security issues |

| **threat_modeling** | Perform structured threat modeling for a project |

| **validation** | Register shell commands as CI-style validation checks |

| **diagnostics** | Access LSP diagnostics and suggest project rollback |

| **workflows** | Manage application workflows (configure, restart, remove) |

### Project Management

| Skill | What It Does |

|-------|-------------|

| **project_tasks** | Create and manage persistent project tasks |

| **code_review** | Spawn a code review subagent for deep analysis and debugging |

| **delegation** | Delegate tasks to specialized subagents |

| **post_merge_setup** | Maintain the post-merge setup script for task merges |

### Research and Productivity

| Skill | What It Does |

|-------|-------------|

| **deep-research** | Conduct multi-source research on complex topics with citations |

| **web-search** | Search the web and fetch content from URLs |

| **product-manager** | Create PRDs, user stories, and product roadmaps |

| **competitive-analysis** | Perform competitive market analysis |

| **design-thinker** | Apply design thinking methodology to solve problems |

### Documents and Files

| Skill | What It Does |

|-------|-------------|

| **excel-generator** | Create professional Excel spreadsheets with formatting and formulas |

| **file-converter** | Convert files between formats (CSV, JSON, YAML, XML, Markdown, images) |

| **invoice-generator** | Generate professional invoices with PDF export |

| **resume-maker** | Build a resume with web preview and downloadable PDF/DOCX |

| **legal-contract** | Draft and review legal documents (NDAs, contracts, leases) |

| **flashcard-generator** | Generate flashcards and study materials |

### SEO and Marketing

| Skill | What It Does |

|-------|-------------|

| **repl-seo-optimizer** | Fix SEO issues in your app's code before launch |

| **seo-auditor** | Audit websites for SEO issues |

| **programmatic-seo** | Build SEO-optimized pages at scale using templates and data |

| **ad-creative** | Design static ad creatives for social media and display advertising |

| **content-machine** | Create social media posts, newsletters, and marketing content |

| **storyboard** | Create storyboards for social media and short-form video campaigns |

| **branding-generator** | Create brand identity kits (colors, typography, logo concepts, guidelines) |

### Business Tools

| Skill | What It Does |

|-------|-------------|

| **find-customers** | Find companies and leads for B2B sales |

| **ai-recruiter** | Source and evaluate candidates for hiring |

| **ai-secretary** | Draft emails, manage scheduling, prepare meeting agendas |

| **supplier-research** | Research and compare suppliers for procurement |

| **insurance-optimizer** | Review insurance coverage and optimize premiums |

| **tax-reviewer** | Review tax returns and identify missed deductions |

| **stock-analyzer** | Analyze stocks with fundamental and technical analysis |

| **real-estate-analyzer** | Evaluate properties and investment returns |

### Personal

| Skill | What It Does |

|-------|-------------|

| **travel-assistant** | Plan trips, create itineraries, estimate budgets |

| **meal-planner** | Create personalized meal plans with macros and shopping lists |

| **recipe-creator** | Create recipes and suggest meals from available ingredients |

| **personal-shopper** | Research products, compare options, find gifts |

| **interview-prep** | Prepare for job interviews with tailored questions and practice |

### Meta

| Skill | What It Does |

|-------|-------------|

| **skill-authoring** | Create new reusable skills (platform-provided instructions) |

| **skill-creator** | Create new reusable skills (enhanced project-specific workflow) |

| **replit-docs** | Search Replit documentation for platform features |

| **artifacts** | Bootstrap and register new artifacts in the monorepo |

| **repl_setup** | Configure web apps in the Replit environment (hosts, connectivity, caching) |

| **external_apis** | Access external APIs through Replit-managed billing |

| **agent-inbox** | List and manage user feedback items from the agent inbox |

## Common Pairings

- **Web app with data**: database + react-vite (or data-visualization) + deployment
- **Mobile app**: expo + database + replit-auth + deployment

- **Landing page**: react-vite + media-generation + design
- **AI-powered app**: ai-integrations-openai (or anthropic/gemini) + react-vite + database

- **Full publish flow**: testing + security_scan + deployment
- **Design iteration**: mockup-sandbox + design-exploration + mockup-graduate

- **SEO launch**: repl-seo-optimizer + programmatic-seo + deployment
