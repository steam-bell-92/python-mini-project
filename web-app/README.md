# 🌐 Python Mini Projects - Web Edition

An interactive web application showcasing Python mini projects with beautiful visualizations and animations.

## ✨ Features

- 🎮 **Fully Interactive** - All projects work directly in your browser
- 🎨 **Beautiful UI** - Modern design with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes
- 📱 **Responsive** - Works on desktop, tablet, and mobile
- 🎲 **Random Project Generator** - Discover random projects with a single click!
- 🚀 **Zero Setup** - Just open index.html and play!

## 🎯 Included Projects

### 🎮 Games
- **Rock Paper Scissors** - Animated hand gestures with score tracking
- **Dice Rolling** - 3D rolling animation with realistic dice faces
- **Coin Flip** - Spinning coin with heads/tails statistics
- **Number Guessing** - Interactive guessing with smart hints
- **Hangman** - Classic word game with onscreen keyboard
- **Word Scramble** - Unscramble shuffled words with hints and score tracking
- **FLAMES** - Relationship calculator

### 🔢 Math Tools
- **Fibonacci Series** - Visual sequence with golden spiral
- **AP/GP/AGP/HP Recognizer** - Detect progression types from a sequence
- **Coordinate to Polar Transformation** - Convert Cartesian (x, y) to polar (r, theta)
- **Derivative Calculator** - Compute polynomial derivatives and evaluate at x
- **Pascal's Triangle** - Beautiful hexagon grid visualization
- **Projectile Motion** - Calculate TOF, Hmax, and Range
- **Armstrong Numbers** - Check special number properties (Coming Soon)
- **Calculator** - Full-featured calculator with power operations
- **Collatz Conjecture** - Explore the 3n+1 problem (Coming Soon)
- **Prime Analyzer** - Comprehensive prime number toolkit (Coming Soon)

### 🔐 Utilities
- **Morse Code** - Text to Morse with lights & sound (Coming Soon)
- **Tower of Hanoi** - Visual puzzle solver (Coming Soon)

## 🚀 Quick Start

### Option 1: Local
```bash
# Navigate to web-app folder
cd web-app

# Open in browser (double-click or use a local server)
# Recommended: Use Live Server extension in VS Code
```

### Option 2: GitHub Pages
Deploy to GitHub Pages for free hosting:
1. Push to GitHub
2. Go to Settings → Pages
3. Select main branch and /web-app folder
4. Your site will be live at `https://steam-bell-92.github.io/python-mini-project/` (replace `steam-bell-92` with your GitHub username if you fork)

### Option 3: Python HTTP Server
```bash
cd web-app
python -m http.server 8000

# Visit http://localhost:8000
```

## 📁 Project Structure

```
web-app/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles and animations
├── js/
│   ├── main.js             # Core functionality (theme, navigation, modal)
│   ├── projects.js         # First set of project implementations
│   └── projects-extended.js # Additional project implementations
└── assets/                 # Images and other assets (if needed)
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #6366f1;  /* Main theme color */
    --secondary-color: #8b5cf6; /* Accent color */
    /* ... more variables */
}
```

### Add New Projects
1. Add HTML template function in `js/projects.js`
2. Add initialization function
3. Add card in `index.html` projects grid
4. Link functions in `getProjectHTML()` and `initializeProject()`

## 🔧 Technologies Used

- **HTML5** - Structure and canvas elements
- **CSS3** - Animations, gradients, and modern layouts
- **JavaScript (ES6+)** - All logic and interactivity
- **Font Awesome** - Icons
- **No frameworks** - Pure vanilla JavaScript!

## 🌟 Key Features

### Visual Highlights
- **Pascal's Triangle** - Hexagon grid with numbers
- **Fibonacci** - Golden spiral visualization
- **Dice Rolling** - 3D rolling animation
- **Coin Flip** - Realistic flipping physics
- **Calculator** - Modern button interface

### UX Features
- Smooth transitions and animations
- Category filtering (All, Games, Math, Utilities)
- **Random Project Generator** - Shuffles through projects based on current category
- Modal system for focused project interaction
- Responsive design for all screen sizes
- Theme persistence with localStorage

## 🎲 Random Project Generator

### Overview
Can't decide which project to try? Use the **Random Project 🎲** button to instantly discover a random project!

### Features
- **Smart Selection** - Only picks from projects in your current category filter
- **Smooth Animation** - Button shuffles with a fun dice-roll animation
- **Instant Discovery** - Opens the selected project automatically
- **Fair Randomization** - Equal chance for all available projects
- **Category-Aware** - Respects your current filter (Games, Math, Utilities, or All)

### How to Use
1. Click the **Random Project 🎲** button in the top navigation
2. Watch the shuffle animation
3. The project modal opens automatically with your randomly selected project
4. Enjoy exploring something new!

### Implementation Details
- **Location**: Top navigation bar, next to category filters
- **Animation**: Custom CSS shuffle animation (0.6s duration)
- **Logic**: JavaScript function `selectRandomProject()` in `main.js`
- **Selection**: Uses `Math.random()` for fair distribution
- **Filtering**: Gets all visible project cards based on current category

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🤝 Contributing

Want to add more visualizations or complete the "Coming Soon" projects?

1. Fork the repository
2. Create your feature branch
3. Implement the project in `js/projects-extended.js`
4. Test thoroughly
5. Submit a pull request

## 📝 License

Same as parent project - MIT License

## 🎉 Credits

Web adaptation of the [Python Mini Projects](https://github.com/steam-bell-92/python-mini-project) collection.

Made with ❤️ for learners everywhere!

---

**Enjoy exploring Python concepts through interactive web visualizations!** 🚀
