<div align="center">

# 🤖 NeuralChat AI — Futuristic AI Chatbot Platform

### *A Premium, Glassmorphism-Styled AI Chatbot Website + Python Mini Projects Collection*

[![Python Version](https://img.shields.io/badge/python-3.10%2B-blue.svg)](https://www.python.org/downloads/)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Projects](https://img.shields.io/badge/mini--projects-24-orange.svg)]()
[![Code Scanning](https://img.shields.io/badge/CodeQL-enabled-brightgreen.svg)]()

**🚀 Premium AI UI | 💎 Glassmorphism Design | 🌈 Neon Effects | ⚡ Zero Config | 🤖 Built-in Smart Chatbot**

[🚀 Live Demo](#-live-demo) • [🤖 AI Chatbot](#-ai-chatbot-ui) • [✨ Features](#-features) • [🎮 Projects](#-python-mini-projects) • [📦 Installation](#-installation--setup) • [🤝 Contributing](#-contributing)

---

</div>

## 🌟 What is NeuralChat AI?

> **A startup-level, production-quality AI chatbot platform — designed to WOW from the first glance.**

**NeuralChat AI** is a modern, full-featured frontend AI chatbot website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It combines a stunning landing page with a fully functional AI-style chatbot interface powered by smart predefined responses.

This repository also contains the original **Python Mini Projects Collection** — 24 beginner-friendly interactive projects covering games, math, and utilities.

---

## 🎨 Design Philosophy

| Principle | Implementation |
|-----------|---------------|
| 🌌 **Futuristic Dark Mode** | Deep space-inspired dark backgrounds (`#050508`, `#0a0a1a`) |
| 💜 **Neon Color Palette** | Electric violet `#8B5CF6`, cyan `#06B6D4`, pink `#EC4899` |
| 🪟 **Glassmorphism** | `backdrop-filter: blur(20px)` with translucent card surfaces |
| ✨ **Micro-animations** | Framer Motion spring physics on every interactive element |
| 🖱️ **Cursor Effects** | Custom glow that tracks mouse position across the viewport |
| 🌊 **Smooth Scrolling** | Scroll-triggered reveal animations using Intersection Observer |

---

## 🖥️ Live Demo

```
🌐 Web App:  http://localhost:3000
🐍 Python:   python games/Rock-Paper-Scissor/Rock-Paper-Scissor.py
```

---

## 🏗️ Project Structure

```
python-mini-project/
├── 🤖 neuralchat-ai/               ← AI Chatbot Website (Next.js)
│   ├── app/
│   │   ├── layout.tsx              ← Root layout with SEO metadata
│   │   ├── page.tsx                ← Landing page entry point
│   │   └── chat/
│   │       └── page.tsx            ← Full chatbot interface page
│   ├── components/
│   │   ├── Navbar.tsx              ← Responsive navbar with hamburger
│   │   ├── HeroSection.tsx         ← Animated hero with particle BG
│   │   ├── FeaturesSection.tsx     ← Glassmorphism feature cards
│   │   ├── AboutSection.tsx        ← About + roadmap timeline
│   │   ├── PricingSection.tsx      ← Free / Pro / Enterprise cards
│   │   ├── TestimonialsSection.tsx ← Animated review carousel
│   │   ├── ContactSection.tsx      ← Form + social links + footer
│   │   ├── ChatBot/
│   │   │   ├── ChatWindow.tsx      ← Main chat interface
│   │   │   ├── MessageBubble.tsx   ← User & AI message bubbles
│   │   │   ├── TypingIndicator.tsx ← AI "thinking" animation
│   │   │   ├── ChatInput.tsx       ← Input box + emoji + send btn
│   │   │   ├── WelcomeScreen.tsx   ← Empty state / onboarding
│   │   │   └── responses.ts        ← All predefined AI responses
│   │   └── ui/
│   │       ├── GradientButton.tsx
│   │       ├── GlassCard.tsx
│   │       └── ParticleBackground.tsx
│   ├── hooks/
│   │   ├── useChatBot.ts           ← Chat logic + state management
│   │   ├── useCursorGlow.ts        ← Mouse-tracking cursor effect
│   │   └── useScrollAnimation.ts   ← Scroll reveal hook
│   ├── lib/
│   │   └── chatEngine.ts           ← Intent matching + response logic
│   ├── styles/
│   │   └── globals.css             ← Design tokens + animations
│   ├── public/
│   │   └── assets/                 ← Icons, avatars, og-image
│   ├── tailwind.config.ts
│   ├── next.config.ts
│   └── package.json
│
├── 🎮 games/                       ← Python game projects
├── 🔢 math/                        ← Python math projects
├── 🔧 utilities/                   ← Python utility projects
├── 🌐 web-app/                     ← Vanilla JS web app
├── requirements.txt
└── README.md
```

---

## 🤖 AI Chatbot UI

The crown jewel of NeuralChat AI — a **beautiful, fully interactive chatbot interface** with smart predefined responses and premium animations.

### 💬 Chat Interface Features

| Feature | Description |
|---------|-------------|
| 🫧 **Chat Bubbles** | Distinct styling for user vs AI messages with gradient borders |
| ⏰ **Timestamps** | Real-time message timestamps on every bubble |
| 🤔 **Typing Indicator** | Three-dot pulse animation while AI "thinks" |
| 📜 **Scrollable Chat** | Auto-scrolls to latest message with smooth easing |
| 😊 **Emoji Picker** | Inline emoji support in the input box |
| 📱 **Responsive Layout** | Full-screen on mobile, sidebar on desktop |
| 🕐 **Chat History** | Persistent sidebar showing previous conversations |
| 👋 **Welcome Screen** | Beautiful empty state with quick-start suggestions |
| 🎙️ **Sound Placeholder** | Sound effect hooks ready for audio integration |

### 🧠 Smart Response Engine

The chatbot handles **50+ conversation patterns** across multiple categories:

#### 👋 Greetings & Casual
```
"Hi" / "Hello" / "Hey" / "Hola" / "Namaste"
→ "Hey there! 👋 I'm NeuralChat, your AI companion. How can I light up your day?"

"Kaise ho?" / "How are you?"
→ "Main bilkul theek hoon, shukriya poochne ke liye! 😊 Aap batao, main kya help kar sakta hoon?"

"Good morning" / "Good night"
→ "Good morning! ☀️ Ready to make today amazing? What can I help you with?"
```

#### 🤖 AI Identity
```
"What is your name?" / "Who are you?"
→ "I'm NeuralChat AI 🤖 — a futuristic intelligence designed to assist, guide, and inspire!"

"What can you do?" / "Help me"
→ "I can answer questions, guide projects, explain concepts, support your learning journey, and have great conversations! 🚀"
```

#### 💡 Help & Support
```
"Help" / "I need help" / "Support"
→ "Of course! Tell me what you're working on and I'll guide you step by step. 💪"

"Explain this" / "Guide me" / "How does X work?"
→ "Great question! Let me break it down for you in simple, clear steps... 📖"
```

#### 🐍 Project-Specific (Python Mini Projects)
```
"Which project should I start with?"
→ "For beginners, I'd recommend starting with Coin Flip 🪙 or Dice Rolling 🎲 — simple, fun, and great for learning!"

"How do I run a project?"
→ "Easy! Open terminal, navigate to the project folder, and type: python filename.py 🚀"
```

#### ❓ FAQ & General
```
"What is AI?" / "Tell me about AI"
→ "AI (Artificial Intelligence) enables machines to learn, reason, and solve problems — like me! 🧠✨"

"Goodbye" / "Bye" / "See you"
→ "Goodbye! 👋 It was great chatting. Come back anytime — I'm always here! 🌟"
```

---

## 🌐 Landing Page Sections

### 🦸 Hero Section
- **Animated gradient background** — shifting purple-to-cyan mesh gradient
- **Floating 3D elements** — orbiting orbs with parallax depth
- **Particle field** — 80+ interactive canvas particles that react to mouse
- **Headline animation** — typewriter effect on the main tagline
- **Dual CTA buttons** — "Start Chatting" (gradient) + "View Projects" (ghost)
- **Scroll indicator** — animated bouncing chevron

### 🧭 Navbar
- Logo with animated AI pulse icon
- Links: **Home | Features | About | Pricing | Contact**
- **Login button** with gradient border effect
- **Hamburger menu** on mobile with slide-in drawer animation
- Blur-on-scroll: navbar gains `backdrop-filter` when page scrolls

### ✨ Features Section

> 7 premium glassmorphism feature cards with hover lift + glow effects:

| Icon | Feature | Description |
|------|---------|-------------|
| 🤖 | **AI Assistance** | Context-aware responses powered by intent matching |
| ⚡ | **Fast Responses** | Sub-100ms reply generation with zero latency |
| 💡 | **Smart Suggestions** | Proactive hints based on conversation context |
| 🔴 | **Real-time Support** | Live chat with typing indicators and instant feedback |
| 🔒 | **Secure System** | End-to-end encrypted conversations, zero data logging |
| 🎯 | **Personalized Experience** | Adapts tone and responses to your conversation style |
| 🕐 | **24/7 Availability** | Always online, never sleeps — your tireless AI companion |

### 📖 About Section
- **Mission statement** with animated counter stats
- **How it works** — 3-step visual flow diagram
- **Use cases** — Education, Development, Customer Support, Personal Assistant
- **Future roadmap** timeline:
  - Q1 2025 → Launch MVP chatbot
  - Q2 2025 → GPT-4 API Integration
  - Q3 2025 → Voice Chat Support
  - Q4 2025 → Multi-language AI (10+ languages)
  - 2026 → Autonomous Agent Mode

### 💳 Pricing Section

| Plan | Price | Features |
|------|-------|---------|
| 🆓 **Free** | $0/mo | 50 msgs/day, Basic AI, Web UI |
| 🚀 **Pro** | $9/mo | Unlimited msgs, GPT-4, History, Emoji, Priority support |
| 🏢 **Enterprise** | Custom | White-label, API access, Custom training, SLA, Dedicated support |

> *Pro plan highlighted with animated "Most Popular" badge*

### 💬 Testimonials Section

> Animated card carousel with 6 user reviews:

- **Aryan Sharma** ⭐⭐⭐⭐⭐ — *"The UI is absolutely stunning. Feels like talking to a real AI from the future!"*
- **Priya Mehta** ⭐⭐⭐⭐⭐ — *"Used it for my final year project guidance. Saved me hours of research!"*
- **James Wilson** ⭐⭐⭐⭐⭐ — *"The glassmorphism design is premium. My students love using this in class."*
- **Sara Kim** ⭐⭐⭐⭐⭐ — *"The chatbot answers feel so natural. It understood 'kaise ho' perfectly! 😂"*
- **Dev Patel** ⭐⭐⭐⭐⭐ — *"Competitors charge 10x more for this quality. NeuralChat is a gem."*
- **Ananya Roy** ⭐⭐⭐⭐⭐ — *"The typing animation and particle background are chef's kiss 💜"*

### 📬 Contact Section
- Contact form with name, email, and message fields (with validation)
- **Social links** — GitHub, Twitter/X, LinkedIn, Discord
- **Email** — support@neuralchat.ai
- Full footer with links, copyright, and back-to-top button

---

## 🎆 Premium UI/UX Features

### 🖱️ Cursor Glow Effect
```typescript
// Custom hook — tracks mouse and renders a radial glow
const { x, y } = useCursorGlow();
// CSS: background: radial-gradient(circle at {x}px {y}px, #8B5CF640 0%, transparent 60%)
```

### 🌊 Scroll Animations
- Every section fades + slides in on scroll using `Intersection Observer`
- Staggered children animations with Framer Motion `staggerChildren`
- Number counters animate from 0 to target when entering viewport

### 🔮 AI Loading Animation
```
[●] Initializing neural pathways...
[●●] Processing your query...
[●●●] Generating response...
```
Three-stage loading sequence before each AI reply

### 🎇 Particle Background
- 80 canvas-rendered particles with random velocities
- Mouse proximity repulsion effect
- Connected by lines when within 120px distance
- Color-coded: violet, cyan, and pink nodes

### 🃏 Interactive Feature Cards
- 3D tilt on mouse hover using `perspective` transform
- Neon border glow on `:hover` using `box-shadow`
- Icon floats up 4px with spring animation on hover

---

## 🛠️ Tech Stack

### AI Chatbot Website
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 14 | App router, SSR, routing |
| **React** | 18 | Component architecture |
| **TypeScript** | 5.0 | Type safety |
| **Tailwind CSS** | 3.4 | Utility-first styling |
| **Framer Motion** | 11 | Animations & transitions |
| **Lucide React** | Latest | Icon library |
| **Canvas API** | Native | Particle background |

### Python Mini Projects
| Technology | Purpose |
|-----------|---------|
| **Python 3.10+** | Core runtime |
| **Matplotlib** | Projectile motion visualization |
| **Standard Library** | All other projects (zero dependencies!) |

---

## 📦 Installation & Setup

### 🤖 AI Chatbot Website (Next.js)

```bash
# 1. Clone the repository
git clone https://github.com/steam-bell-92/python-mini-project.git
cd python-mini-project/neuralchat-ai

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

**Production Build:**
```bash
npm run build
npm start
```

### 🌐 Vanilla Web App (Existing)

```bash
cd python-mini-project/web-app
python -m http.server 8000
# → http://localhost:8000
```

### 🐍 Python Mini Projects

```bash
# No installation needed!
cd python-mini-project

# Run any project directly
python games/Rock-Paper-Scissor/Rock-Paper-Scissor.py
python games/Hangman-Game/Hangman-Game.py
python math/Fibonacci-Series/Fibonacci-Series.py
```

**Prerequisites:** Python 3.10+ ([Download](https://www.python.org/downloads/))

---

## 🎮 Python Mini Projects

The original 24 beginner-friendly Python projects — still here and better documented than ever!

### 🎲 Games

| Project | Description | Command |
|---------|-------------|---------|
| 🪨 **Rock, Paper, Scissors** | Battle the AI in this classic | `python games/Rock-Paper-Scissor/Rock-Paper-Scissor.py` |
| 🎲 **Dice Rolling** | Roll two dice and track fortune | `python games/Roling-Dice/Roling-Dice.py` |
| 🪙 **Coin Flip** | Heads or tails — instant decision | `python games/Flipping-toss/Flipping-toss.py` |
| 🎯 **Number Guessing** | Read the computer's mind | `python games/Number-Guessing-Game/Number-Guessing-Game.py` |
| 🎮 **Hangman** | Classic word-guessing with 6 lives | `python games/Hangman-Game/Hangman-Game.py` |
| 💖 **FLAMES** | Discover your relationship fate | `python games/FLAMES-Game/FLAMES-Game.py` |
| 🔐 **Password Forge** | Survive evolving firewall rules | `python games/Password-Forge/Password-Forge.py` |
| 🧩 **Tic-Tac-Toe** | Classic X vs O strategy | `python games/Tic-Tac-Toe/Tic-Tac-Toe.py` |
| 🧠 **Emoji Memory** | Match emojis before time runs out | `python games/Emoji-Memory-Game/emoji_memory_game.py` |
| 🗣️ **Simon Says** | Repeat the growing color sequence | `python games/Simon-Says/Simon-Says.py` |

### 🔢 Mathematics

| Project | Description | Command |
|---------|-------------|---------|
| 🚀 **Projectile Motion** | Launch & visualize trajectories | `python math/Projectile-Motion-Game/Projectile-Motion-Game.py` |
| ✨ **Fibonacci Series** | Generate mathematical sequences | `python math/Fibonacci-Series/Fibonacci-Series.py` |
| 🔺 **Pascal's Triangle** | Discover triangular beauty | `python math/Pascal-Triangle/Pascal-Triangle.py` |
| 💎 **Armstrong Numbers** | Find special digit-power numbers | `python math/Armstrong-Number/Armstrong-Number.py` |
| 🧮 **Simple Calculator** | All basic + advanced operations | `python math/Simple-Calculator/Simple-Calculator.py` |
| 🔢 **Collatz Conjecture** | Explore the famous 3n+1 problem | `python math/Collatz-Conjecture/Collatz-Conjecture.py` |
| 🔱 **Prime Analyzer** | Check, generate, and factorize primes | `python math/Prime-Number-Analyzer/Prime-Number-Analyzer.py` |
| 🧭 **Coordinate to Polar** | Convert Cartesian → polar | `python math/Coordinate-to-Polar-Transformation/Coordinate-to-Polar-Transformation.py` |
| ∂ **Derivative Calculator** | Polynomial derivatives made easy | `python math/Derivative-Calculator/Derivative-Calculator.py` |
| 📐 **AP/GP/AGP/HP Recognizer** | Identify number progression types | `python math/AP-GP-AGP-HP-Recognizer/AP-GP-AGP-HP-Recognizer.py` |

### 🔧 Utilities

| Project | Description | Command |
|---------|-------------|---------|
| 📻 **Morse Code Translator** | Text ↔ dots and dashes | `python utilities/Text-to-Morse/Text-to-Morse.py` |
| 🗼 **Tower of Hanoi** | Solve the classic disk puzzle | `python utilities/Tower-of-Hanoi/Tower-of-Hanoi.py` |
| 🔢 **Number System Converter** | Decimal ↔ Binary ↔ Hex ↔ Octal | `python utilities/Number-System-Converter/Number-System-Converter.py` |
| ⌨️ **Typing Speed Tester** | WPM + accuracy measurement | `python utilities/Typing-Speed-Tester/Typing-Speed-Tester.py` |
| 🐾 **Productivity Pet** | Stay productive to keep pet happy | `python utilities/Productivity-Pet/Productivity-Pet.py` |

---

## 🎓 What You'll Learn

### From the AI Chatbot Website
- ⚛️ **Next.js 14 App Router** — Modern React server components
- 🎨 **Advanced Tailwind CSS** — Custom design systems and tokens
- 🎞️ **Framer Motion** — Spring physics, layout animations, gesture detection
- 🧠 **Intent Matching** — Building rule-based NLP response engines
- 🖱️ **Canvas API** — Particle systems and interactive animations
- 📱 **Mobile-First Design** — Responsive layouts that work everywhere
- 🪟 **Glassmorphism** — Modern CSS blur + transparency effects

### From Python Mini Projects
- ✅ **User Input & Output** — Interactive console apps
- ✅ **Control Flow** — if/elif/else, while/for loops
- ✅ **Data Structures** — Lists, dicts, sets, tuples
- ✅ **Randomization** — `random` module mastery
- ✅ **String Manipulation** — Text processing and formatting
- ✅ **Math & Algorithms** — Real computational problems
- ✅ **Logic & Problem Solving** — Think like a programmer

---

## 🤝 Contributing

We love contributions from the community! 🎉

### 🤖 Contributing to the AI Chatbot

```bash
# 1. Fork & clone
git clone https://github.com/YOUR_USERNAME/python-mini-project.git
cd python-mini-project/neuralchat-ai

# 2. Create a feature branch
git checkout -b feature/add-voice-chat

# 3. Make your changes and test
npm run dev

# 4. Commit with a descriptive message
git commit -m "feat: add voice input support to ChatInput component"

# 5. Push and open a Pull Request
git push origin feature/add-voice-chat
```

**Chatbot Contribution Ideas:**
- 🗣️ Add more language support (Hindi, Spanish, French...)
- 🎙️ Integrate Web Speech API for voice input
- 🧠 Connect to OpenAI / Gemini API for real AI responses
- 📊 Add chat analytics dashboard
- 🎨 Create additional color themes

### 🐍 Contributing Python Projects

1. 🍴 **Fork** the repository
2. 🌟 **Create** a new branch (`git checkout -b feature/AmazingProject`)
3. 💻 **Add** your mini project in the correct folder:
   - Games → `games/Project-Name/Project-Name.py`
   - Math → `math/Project-Name/Project-Name.py`
   - Utilities → `utilities/Project-Name/Project-Name.py`
4. ✅ **Follow** project guidelines (emojis, no external deps, beginner-friendly)
5. 📤 **Commit** and open a Pull Request

**Python Project Guidelines:**
- Use emojis for visual appeal 🎨
- Keep code simple and well-commented 📚
- Zero external dependencies 💯
- Include clear run instructions ✅
- Add docstrings to all functions 📝

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details.

---

## 🔐 Security

Please review our [SECURITY.md](SECURITY.md) for responsible disclosure guidelines.

---

## 📝 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

## 💬 Connect & Share

Found NeuralChat AI useful? Show some love! 💜

- ⭐ **Star this repo** if it impressed you
- 🐛 **Report issues** via [GitHub Issues](../../issues)
- 💬 **Share** with friends building AI projects
- 🎓 **Use** in your classroom, hackathon, or portfolio
- 🐦 **Tweet** about it — tag us `@NeuralChatAI`

---

<div align="center">

## 🚀 Built with 💜 for the AI Generation

**NeuralChat AI** — *Where Code Meets Intelligence*

[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-black?logo=next.js)](https://nextjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Animated with Framer](https://img.shields.io/badge/Animated%20with-Framer%20Motion-0055FF?logo=framer)](https://www.framer.com/motion/)

*If this helped you, don't forget to ⭐ star the repo!*

[⬆ Back to Top](#-neuralchat-ai--futuristic-ai-chatbot-platform)

</div>
