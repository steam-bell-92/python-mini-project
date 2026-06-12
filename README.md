<strong>GSSoC Approved Repository</strong></p>

<div align="center">

# 🎮 Python Mini Projects Collection 🎯

### *Learn Python by Building Fun, Interactive Games & Tools!*

[![Python Version](https://img.shields.io/badge/python-3.10%2B-blue.svg)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<p align="center">
  <a href="https://python-mini-project-lovat.vercel.app/">
    <img src="https://img.shields.io/badge/live_demo-View%20App-22c55e?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/steam-bell-92/python-mini-project">
    <img src="https://visitor-badge.laobi.icu/badge?page_id=steam-bell-92.python-mini-project" alt="Visitors" />
  </a>
  <a href="https://github.com/steam-bell-92/python-mini-project/stargazers">
    <img src="https://img.shields.io/github/stars/steam-bell-92/python-mini-project?style=flat&logo=github" alt="Stars" />
  </a>
  <a href="https://github.com/steam-bell-92/python-mini-project/network/members">
    <img src="https://img.shields.io/github/forks/steam-bell-92/python-mini-project?style=flat&logo=github" alt="Forks" />
  </a>
  <a href="https://github.com/steam-bell-92/python-mini-project/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/steam-bell-92/python-mini-project?style=flat&logo=github" alt="Contributors" />
  </a>
</p>

**🚀 Beginner-friendly projects | 💡 Learn by doing | 🎨 Clean UI | ⚡ Live demo available**

[Live Demo](https://python-mini-project-lovat.vercel.app/) • [Contributors](#-contributors)

---

</div>

## 📚 Table of Contents

- [🎯 Repo Introduction](#-repo-introduction)
- [🌐 Live Demo](#-live-demo)
- [📂 Repo Structure](#-repo-structure)
- [🧩 What's Inside](#-whats-inside)
- [🌐 Web App Catalog](#-web-app-catalog)
  - [Games](#games)
  - [Math](#math)
  - [Utilities](#utilities)
- [🧭 Python Projects Without a Web App Yet](#-python-projects-without-a-web-app-yet)
- [Contributors](#contributors)
- [📝 License](#-license)
- [💬 Connect & Share](#-connect--share)


## 🎯 Repo Introduction

This repository is a collection of small Python games and utility projects built to make learning Python more practical and engaging. It includes both command-line projects and a browser-based web app for trying the projects online.

## 🌐 Live Demo

Try the web app here: https://python-mini-project-lovat.vercel.app/

## 📂 Repo Structure

```text
python-mini-project/
├── games/
│   ├── Snake-Game/
│   ├── Rock-Paper-Scissor/
│   └── ...
├── math/
│   ├── Fibonacci-Series/
│   ├── Prime-Number-Analyzer/
│   └── ...
├── utilities/
│   ├── Text-to-Morse/
│   ├── Typing-Speed-Tester/
│   └── ...
├── tests/
│   ├── test_armstrong.py
│   ├── test_fibonacci.py
│   └── ...
├── web-app/
│   ├── css/
│   ├── js/
│   └── assets/
├── README.md
└── requirements.txt
```

## 🚀 Getting Started

### Prerequisites

- Python 3.10 or higher
- Git (for cloning the repository)
- pip (Python package manager)

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/steam-bell-92/python-mini-project.git
cd python-mini-project
```

#### 2. Create a Virtual Environment

For Linux/macOS:
```bash
python3 -m venv venv
source venv/bin/activate
```

For Windows (Command Prompt):
```bash
python -m venv venv
venv\Scripts\activate
```

For Windows (PowerShell):
```bash
python -m venv venv
venv\Scripts\Activate.ps1
```

#### 3. Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### Running Command-Line Projects

Each Python project in `games/`, `math/`, and `utilities/` folders can be run independently.

#### Example: Running a Game

```bash
cd games/Snake-Game
python Snake-Game.py
```

#### Example: Running a Math Project

```bash
cd math/Fibonacci-Series
python Fibonacci-Series.py
```

#### Example: Running a Utility

```bash
cd utilities/Text-to-Morse
python Text-to-Morse.py
```

### Running the Web App

The web application provides a browser-based interface for all projects.

#### Prerequisites for Web App

The web app requires Node.js and npm:
- Download from https://nodejs.org/ (v16 or higher recommended)
- Verify installation: `node --version && npm --version`

#### Steps to Run Web App

```bash
cd web-app
npm install
npm start
```

The app will open at `http://localhost:3000` (or your configured port).

### Running Tests

To verify that the projects work correctly, run the test suite:

```bash
pytest tests/ -v
```

For specific test file:
```bash
pytest tests/test_armstrong.py -v
```

### Development Workflow

#### Creating a New Project

1. Choose appropriate directory: `games/`, `math/`, or `utilities/`
2. Create a new folder with your project name (use PascalCase)
3. Add your `.py` file with the same name as the folder
4. Include a `README.md` in your project folder with usage instructions
5. Add tests in `tests/` directory with prefix `test_`

#### Code Guidelines

- Follow PEP 8 style guide
- Write docstrings for functions and classes
- Add unit tests for your code
- Test your project before submitting a PR

#### Virtual Environment Reminder

Always activate your virtual environment before working:
```bash
# Linux/macOS
source venv/bin/activate

# Windows
venv\Scripts\activate
```

Deactivate when done:
```bash
deactivate
```

## 🧩 What’s Inside

- Games for quick interactive fun
- Math projects for learning logic and problem solving
- Utility tools for practical use cases
- A web app version for browser-based access

## 🌐 Web App Catalog

The browser app currently exposes 38 projects:

### Games
- 2048 Game
- BlackJack21
- Coin Flip
- Dice Rolling
- Dots & Boxes AI
- Emoji Memory Game
- FLAMES Game
- Flappy Game
- Hangman
- Math Quiz
- Number Guessing
- Password Forge
- Rock Paper Scissors
- Simon Says
- Snake Game
- Whack-a-Mole
- Word Scramble
- Spot the Difference

### Math
- AP/GP/AGP/HP Recognizer
- Armstrong Numbers
- Binary Search
- Bubble Sort
- Calculator
- Collatz Conjecture
- Coordinate to Polar
- Derivative Calculator
- Fibonacci Series
- Pascal's Triangle
- Prime Analyzer
- Projectile Motion
- Progress Tracker

### Utilities
- AI Resume Analyzer
- Color Palette Suggestor
- Morse Code
- Number Converter
- Productive Pet
- Tower of Hanoi
- Typing Speed Tester

## 🧭 Python Projects Without a Web App Yet

These standalone Python project files do not have a browser counterpart yet and are good future-port candidates:

- [games/Number-Sliding-Puzzle/Number-Sliding-Puzzle.py](games/Number-Sliding-Puzzle/Number-Sliding-Puzzle.py)
- [games/Reverse-Hangman-Game/Reverse-Hangman-Game.py](games/Reverse-Hangman-Game/Reverse-Hangman-Game.py)
- [games/War-Card-Game/War-Card-Game.py](games/War-Card-Game/War-Card-Game.py)
- [math/Happy-Number/Happy-Number.py](math/Happy-Number/Happy-Number.py)
- [math/Matrix-Calculator/Matrix-Calculator.py](math/Matrix-Calculator/Matrix-Calculator.py)
- [math/Quadratic-Solver/Quadratic-Solver.py](math/Quadratic-Solver/Quadratic-Solver.py)
- [utilities/Budget-Tracker/budget_tracker.py](utilities/Budget-Tracker/budget_tracker.py)
- [utilities/Caesar-Cipher/Caesar-Cipher.py](utilities/Caesar-Cipher/Caesar-Cipher.py)
- [utilities/Fake-News-Headline-Generator/Fake-News-Headline-Generator.py](utilities/Fake-News-Headline-Generator/Fake-News-Headline-Generator.py)

---

## Contributors

<!-- CONTRIBUTORS_START -->
<table border="0">
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/01mayankk">
        <img src="https://github.com/01mayankk.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="01mayankk" /><br />
        <sub><b>@01mayankk</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/AQUA1310">
        <img src="https://github.com/AQUA1310.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="AQUA1310" /><br />
        <sub><b>@AQUA1310</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Aayuiiitmg">
        <img src="https://github.com/Aayuiiitmg.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Aayuiiitmg" /><br />
        <sub><b>@Aayuiiitmg</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Abhishek-Satyarum">
        <img src="https://github.com/Abhishek-Satyarum.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Abhishek-Satyarum" /><br />
        <sub><b>@Abhishek-Satyarum</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Akhileswar6">
        <img src="https://github.com/Akhileswar6.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Akhileswar6" /><br />
        <sub><b>@Akhileswar6</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Alvi24-hub">
        <img src="https://github.com/Alvi24-hub.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Alvi24-hub" /><br />
        <sub><b>@Alvi24-hub</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/AnushkaJagtap22">
        <img src="https://github.com/AnushkaJagtap22.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="AnushkaJagtap22" /><br />
        <sub><b>@AnushkaJagtap22</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Aqifcodes">
        <img src="https://github.com/Aqifcodes.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Aqifcodes" /><br />
        <sub><b>@Aqifcodes</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Arpitawork24">
        <img src="https://github.com/Arpitawork24.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Arpitawork24" /><br />
        <sub><b>@Arpitawork24</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/ArshiBansal">
        <img src="https://github.com/ArshiBansal.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="ArshiBansal" /><br />
        <sub><b>@ArshiBansal</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Arun35-wolf">
        <img src="https://github.com/Arun35-wolf.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Arun35-wolf" /><br />
        <sub><b>@Arun35-wolf</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Ashvin-KS">
        <img src="https://github.com/Ashvin-KS.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Ashvin-KS" /><br />
        <sub><b>@Ashvin-KS</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/Avneesh95">
        <img src="https://github.com/Avneesh95.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Avneesh95" /><br />
        <sub><b>@Avneesh95</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Bhairavi-28">
        <img src="https://github.com/Bhairavi-28.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Bhairavi-28" /><br />
        <sub><b>@Bhairavi-28</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Bhavikapatel06">
        <img src="https://github.com/Bhavikapatel06.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Bhavikapatel06" /><br />
        <sub><b>@Bhavikapatel06</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/C4aZy">
        <img src="https://github.com/C4aZy.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="C4aZy" /><br />
        <sub><b>@C4aZy</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Devexhhh">
        <img src="https://github.com/Devexhhh.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Devexhhh" /><br />
        <sub><b>@Devexhhh</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Diksha57-git">
        <img src="https://github.com/Diksha57-git.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Diksha57-git" /><br />
        <sub><b>@Diksha57-git</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/Facelessism">
        <img src="https://github.com/Facelessism.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Facelessism" /><br />
        <sub><b>@Facelessism</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Grihika">
        <img src="https://github.com/Grihika.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Grihika" /><br />
        <sub><b>@Grihika</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/HARSHP-16">
        <img src="https://github.com/HARSHP-16.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="HARSHP-16" /><br />
        <sub><b>@HARSHP-16</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/HarshitaShakya">
        <img src="https://github.com/HarshitaShakya.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="HarshitaShakya" /><br />
        <sub><b>@HarshitaShakya</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Indrayani11-15">
        <img src="https://github.com/Indrayani11-15.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Indrayani11-15" /><br />
        <sub><b>@Indrayani11-15</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Ishita-varshney">
        <img src="https://github.com/Ishita-varshney.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Ishita-varshney" /><br />
        <sub><b>@Ishita-varshney</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/Juhi4433">
        <img src="https://github.com/Juhi4433.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Juhi4433" /><br />
        <sub><b>@Juhi4433</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Kartikeyji17">
        <img src="https://github.com/Kartikeyji17.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Kartikeyji17" /><br />
        <sub><b>@Kartikeyji17</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/KhushiVadadoriya">
        <img src="https://github.com/KhushiVadadoriya.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="KhushiVadadoriya" /><br />
        <sub><b>@KhushiVadadoriya</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Krasper707">
        <img src="https://github.com/Krasper707.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Krasper707" /><br />
        <sub><b>@Krasper707</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Kunal241207">
        <img src="https://github.com/Kunal241207.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Kunal241207" /><br />
        <sub><b>@Kunal241207</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Lalitya31">
        <img src="https://github.com/Lalitya31.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Lalitya31" /><br />
        <sub><b>@Lalitya31</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/Lavanya-Talele">
        <img src="https://github.com/Lavanya-Talele.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Lavanya-Talele" /><br />
        <sub><b>@Lavanya-Talele</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Mayank251125">
        <img src="https://github.com/Mayank251125.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Mayank251125" /><br />
        <sub><b>@Mayank251125</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Mounika-39">
        <img src="https://github.com/Mounika-39.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Mounika-39" /><br />
        <sub><b>@Mounika-39</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Mudita-Singh">
        <img src="https://github.com/Mudita-Singh.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Mudita-Singh" /><br />
        <sub><b>@Mudita-Singh</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Naina123kashyap">
        <img src="https://github.com/Naina123kashyap.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Naina123kashyap" /><br />
        <sub><b>@Naina123kashyap</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Naveen-Boddepalli">
        <img src="https://github.com/Naveen-Boddepalli.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Naveen-Boddepalli" /><br />
        <sub><b>@Naveen-Boddepalli</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/NehaP1706">
        <img src="https://github.com/NehaP1706.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="NehaP1706" /><br />
        <sub><b>@NehaP1706</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Nencypatel21">
        <img src="https://github.com/Nencypatel21.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Nencypatel21" /><br />
        <sub><b>@Nencypatel21</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/NidhiS-7">
        <img src="https://github.com/NidhiS-7.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="NidhiS-7" /><br />
        <sub><b>@NidhiS-7</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/PIYUSH-NEXTGEN">
        <img src="https://github.com/PIYUSH-NEXTGEN.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="PIYUSH-NEXTGEN" /><br />
        <sub><b>@PIYUSH-NEXTGEN</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/PRODHOSH">
        <img src="https://github.com/PRODHOSH.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="PRODHOSH" /><br />
        <sub><b>@PRODHOSH</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Papia-tech">
        <img src="https://github.com/Papia-tech.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Papia-tech" /><br />
        <sub><b>@Papia-tech</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/Pavithra-git162">
        <img src="https://github.com/Pavithra-git162.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Pavithra-git162" /><br />
        <sub><b>@Pavithra-git162</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/PragatiNigam29">
        <img src="https://github.com/PragatiNigam29.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="PragatiNigam29" /><br />
        <sub><b>@PragatiNigam29</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Pratikshya32">
        <img src="https://github.com/Pratikshya32.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Pratikshya32" /><br />
        <sub><b>@Pratikshya32</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Quantum3600">
        <img src="https://github.com/Quantum3600.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Quantum3600" /><br />
        <sub><b>@Quantum3600</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/RaghuveerSingh05">
        <img src="https://github.com/RaghuveerSingh05.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="RaghuveerSingh05" /><br />
        <sub><b>@RaghuveerSingh05</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Ranjanmaiti6">
        <img src="https://github.com/Ranjanmaiti6.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Ranjanmaiti6" /><br />
        <sub><b>@Ranjanmaiti6</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/Reaper-ai">
        <img src="https://github.com/Reaper-ai.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Reaper-ai" /><br />
        <sub><b>@Reaper-ai</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Ridima28">
        <img src="https://github.com/Ridima28.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Ridima28" /><br />
        <sub><b>@Ridima28</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Saloni885">
        <img src="https://github.com/Saloni885.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Saloni885" /><br />
        <sub><b>@Saloni885</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Sanjhivvarshan-b-s">
        <img src="https://github.com/Sanjhivvarshan-b-s.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Sanjhivvarshan-b-s" /><br />
        <sub><b>@Sanjhivvarshan-b-s</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/SathvikaTalari">
        <img src="https://github.com/SathvikaTalari.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="SathvikaTalari" /><br />
        <sub><b>@SathvikaTalari</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Shashank-8p">
        <img src="https://github.com/Shashank-8p.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Shashank-8p" /><br />
        <sub><b>@Shashank-8p</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/Shital861">
        <img src="https://github.com/Shital861.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Shital861" /><br />
        <sub><b>@Shital861</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Shivi-Srivastava-4444">
        <img src="https://github.com/Shivi-Srivastava-4444.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Shivi-Srivastava-4444" /><br />
        <sub><b>@Shivi-Srivastava-4444</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Siddh2024">
        <img src="https://github.com/Siddh2024.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Siddh2024" /><br />
        <sub><b>@Siddh2024</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Sparshjoshi-iit">
        <img src="https://github.com/Sparshjoshi-iit.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Sparshjoshi-iit" /><br />
        <sub><b>@Sparshjoshi-iit</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Sreekuttan-007">
        <img src="https://github.com/Sreekuttan-007.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Sreekuttan-007" /><br />
        <sub><b>@Sreekuttan-007</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Suhani-ai-dev">
        <img src="https://github.com/Suhani-ai-dev.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Suhani-ai-dev" /><br />
        <sub><b>@Suhani-ai-dev</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/Tech4Aditya">
        <img src="https://github.com/Tech4Aditya.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Tech4Aditya" /><br />
        <sub><b>@Tech4Aditya</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/TheBinaryAVA">
        <img src="https://github.com/TheBinaryAVA.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="TheBinaryAVA" /><br />
        <sub><b>@TheBinaryAVA</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Tiago-Vier-Preto">
        <img src="https://github.com/Tiago-Vier-Preto.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Tiago-Vier-Preto" /><br />
        <sub><b>@Tiago-Vier-Preto</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Vaishnavisatle2105">
        <img src="https://github.com/Vaishnavisatle2105.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Vaishnavisatle2105" /><br />
        <sub><b>@Vaishnavisatle2105</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Vanshikakhasat">
        <img src="https://github.com/Vanshikakhasat.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Vanshikakhasat" /><br />
        <sub><b>@Vanshikakhasat</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/Vinanthi07">
        <img src="https://github.com/Vinanthi07.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Vinanthi07" /><br />
        <sub><b>@Vinanthi07</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/Yogender-verma">
        <img src="https://github.com/Yogender-verma.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="Yogender-verma" /><br />
        <sub><b>@Yogender-verma</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/abdullahxyz85">
        <img src="https://github.com/abdullahxyz85.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="abdullahxyz85" /><br />
        <sub><b>@abdullahxyz85</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/abhi-nav-25">
        <img src="https://github.com/abhi-nav-25.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="abhi-nav-25" /><br />
        <sub><b>@abhi-nav-25</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/advikdivekar">
        <img src="https://github.com/advikdivekar.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="advikdivekar" /><br />
        <sub><b>@advikdivekar</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/anshul23102">
        <img src="https://github.com/anshul23102.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="anshul23102" /><br />
        <sub><b>@anshul23102</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/anujsharma8d">
        <img src="https://github.com/anujsharma8d.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="anujsharma8d" /><br />
        <sub><b>@anujsharma8d</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/artic2702">
        <img src="https://github.com/artic2702.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="artic2702" /><br />
        <sub><b>@artic2702</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/ash-heinz">
        <img src="https://github.com/ash-heinz.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="ash-heinz" /><br />
        <sub><b>@ash-heinz</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/aspartic-gthb">
        <img src="https://github.com/aspartic-gthb.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="aspartic-gthb" /><br />
        <sub><b>@aspartic-gthb</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/avzuha">
        <img src="https://github.com/avzuha.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="avzuha" /><br />
        <sub><b>@avzuha</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/ayushyadav0707">
        <img src="https://github.com/ayushyadav0707.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="ayushyadav0707" /><br />
        <sub><b>@ayushyadav0707</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/basantnema31">
        <img src="https://github.com/basantnema31.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="basantnema31" /><br />
        <sub><b>@basantnema31</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/bhavyapandiya29">
        <img src="https://github.com/bhavyapandiya29.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="bhavyapandiya29" /><br />
        <sub><b>@bhavyapandiya29</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/codewithakshyaaa">
        <img src="https://github.com/codewithakshyaaa.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="codewithakshyaaa" /><br />
        <sub><b>@codewithakshyaaa</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/developer-yash03">
        <img src="https://github.com/developer-yash03.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="developer-yash03" /><br />
        <sub><b>@developer-yash03</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/dhanushrajvr">
        <img src="https://github.com/dhanushrajvr.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="dhanushrajvr" /><br />
        <sub><b>@dhanushrajvr</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/dhruvpatel16120">
        <img src="https://github.com/dhruvpatel16120.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="dhruvpatel16120" /><br />
        <sub><b>@dhruvpatel16120</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/dikshajha13">
        <img src="https://github.com/dikshajha13.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="dikshajha13" /><br />
        <sub><b>@dikshajha13</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/gatiksolanki13-netizen">
        <img src="https://github.com/gatiksolanki13-netizen.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="gatiksolanki13-netizen" /><br />
        <sub><b>@gatiksolanki13-netizen</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/iamprasoon2006-cell">
        <img src="https://github.com/iamprasoon2006-cell.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="iamprasoon2006-cell" /><br />
        <sub><b>@iamprasoon2006-cell</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/itsdakshjain">
        <img src="https://github.com/itsdakshjain.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="itsdakshjain" /><br />
        <sub><b>@itsdakshjain</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/jbkun069">
        <img src="https://github.com/jbkun069.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="jbkun069" /><br />
        <sub><b>@jbkun069</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/jeetrouth">
        <img src="https://github.com/jeetrouth.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="jeetrouth" /><br />
        <sub><b>@jeetrouth</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/jyotish6699">
        <img src="https://github.com/jyotish6699.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="jyotish6699" /><br />
        <sub><b>@jyotish6699</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/knoxiboy">
        <img src="https://github.com/knoxiboy.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="knoxiboy" /><br />
        <sub><b>@knoxiboy</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/kumudasrip">
        <img src="https://github.com/kumudasrip.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="kumudasrip" /><br />
        <sub><b>@kumudasrip</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/madhavcodes25">
        <img src="https://github.com/madhavcodes25.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="madhavcodes25" /><br />
        <sub><b>@madhavcodes25</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/mahi-8758">
        <img src="https://github.com/mahi-8758.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="mahi-8758" /><br />
        <sub><b>@mahi-8758</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/mrdeyroy">
        <img src="https://github.com/mrdeyroy.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="mrdeyroy" /><br />
        <sub><b>@mrdeyroy</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/mrinmoyChakraborty-mrinox">
        <img src="https://github.com/mrinmoyChakraborty-mrinox.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="mrinmoyChakraborty-mrinox" /><br />
        <sub><b>@mrinmoyChakraborty-mrinox</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/n1o5">
        <img src="https://github.com/n1o5.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="n1o5" /><br />
        <sub><b>@n1o5</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/nene-hana">
        <img src="https://github.com/nene-hana.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="nene-hana" /><br />
        <sub><b>@nene-hana</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/nimkarprachi17">
        <img src="https://github.com/nimkarprachi17.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="nimkarprachi17" /><br />
        <sub><b>@nimkarprachi17</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/nishtha-agarwal-211">
        <img src="https://github.com/nishtha-agarwal-211.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="nishtha-agarwal-211" /><br />
        <sub><b>@nishtha-agarwal-211</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/nyxsky404">
        <img src="https://github.com/nyxsky404.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="nyxsky404" /><br />
        <sub><b>@nyxsky404</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/palak-paliwal11">
        <img src="https://github.com/palak-paliwal11.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="palak-paliwal11" /><br />
        <sub><b>@palak-paliwal11</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/parasmani-dev">
        <img src="https://github.com/parasmani-dev.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="parasmani-dev" /><br />
        <sub><b>@parasmani-dev</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/parulpaliwal01">
        <img src="https://github.com/parulpaliwal01.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="parulpaliwal01" /><br />
        <sub><b>@parulpaliwal01</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/pragya-manna">
        <img src="https://github.com/pragya-manna.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="pragya-manna" /><br />
        <sub><b>@pragya-manna</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/prasad-0007">
        <img src="https://github.com/prasad-0007.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="prasad-0007" /><br />
        <sub><b>@prasad-0007</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/priya05-git">
        <img src="https://github.com/priya05-git.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="priya05-git" /><br />
        <sub><b>@priya05-git</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/r-sushanth08">
        <img src="https://github.com/r-sushanth08.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="r-sushanth08" /><br />
        <sub><b>@r-sushanth08</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/rashiaggarwal06">
        <img src="https://github.com/rashiaggarwal06.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="rashiaggarwal06" /><br />
        <sub><b>@rashiaggarwal06</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/rishit537">
        <img src="https://github.com/rishit537.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="rishit537" /><br />
        <sub><b>@rishit537</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/sakshicoded1111">
        <img src="https://github.com/sakshicoded1111.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="sakshicoded1111" /><br />
        <sub><b>@sakshicoded1111</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/samarthchawla2005">
        <img src="https://github.com/samarthchawla2005.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="samarthchawla2005" /><br />
        <sub><b>@samarthchawla2005</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/sangitabera">
        <img src="https://github.com/sangitabera.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="sangitabera" /><br />
        <sub><b>@sangitabera</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/sanzzzz-g">
        <img src="https://github.com/sanzzzz-g.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="sanzzzz-g" /><br />
        <sub><b>@sanzzzz-g</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/shaktipy">
        <img src="https://github.com/shaktipy.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="shaktipy" /><br />
        <sub><b>@shaktipy</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/shimonenator">
        <img src="https://github.com/shimonenator.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="shimonenator" /><br />
        <sub><b>@shimonenator</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/shreyasarote7717-cyber">
        <img src="https://github.com/shreyasarote7717-cyber.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="shreyasarote7717-cyber" /><br />
        <sub><b>@shreyasarote7717-cyber</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/shreyasgawande19">
        <img src="https://github.com/shreyasgawande19.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="shreyasgawande19" /><br />
        <sub><b>@shreyasgawande19</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/siri-004">
        <img src="https://github.com/siri-004.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="siri-004" /><br />
        <sub><b>@siri-004</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/snehacodes-2906">
        <img src="https://github.com/snehacodes-2906.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="snehacodes-2906" /><br />
        <sub><b>@snehacodes-2906</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/snehanair-486">
        <img src="https://github.com/snehanair-486.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="snehanair-486" /><br />
        <sub><b>@snehanair-486</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/steam-bell-92">
        <img src="https://github.com/steam-bell-92.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="steam-bell-92" /><br />
        <sub><b>@steam-bell-92</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/sujitsingh8">
        <img src="https://github.com/sujitsingh8.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="sujitsingh8" /><br />
        <sub><b>@sujitsingh8</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/tanishkakora">
        <img src="https://github.com/tanishkakora.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="tanishkakora" /><br />
        <sub><b>@tanishkakora</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/twinkle0tech">
        <img src="https://github.com/twinkle0tech.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="twinkle0tech" /><br />
        <sub><b>@twinkle0tech</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/unknown-tech-ui">
        <img src="https://github.com/unknown-tech-ui.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="unknown-tech-ui" /><br />
        <sub><b>@unknown-tech-ui</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/vedansht2211">
        <img src="https://github.com/vedansht2211.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="vedansht2211" /><br />
        <sub><b>@vedansht2211</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/vedika76">
        <img src="https://github.com/vedika76.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="vedika76" /><br />
        <sub><b>@vedika76</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/vedikabajaj05">
        <img src="https://github.com/vedikabajaj05.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="vedikabajaj05" /><br />
        <sub><b>@vedikabajaj05</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/vivekCS007">
        <img src="https://github.com/vivekCS007.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="vivekCS007" /><br />
        <sub><b>@vivekCS007</b></sub>
      </a>
    </td>
    <td align="center" width="120">
      <a href="https://github.com/yuvraj-k-singh">
        <img src="https://github.com/yuvraj-k-singh.png?size=100" width="100" height="100" style="border-radius:50%; border:2px solid #555;" alt="yuvraj-k-singh" /><br />
        <sub><b>@yuvraj-k-singh</b></sub>
      </a>
    </td>
    <td width="120"></td>
  </tr>
</table>
<!-- CONTRIBUTORS_END -->

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Connect & Share

Found this helpful? Show some love!

- ⭐ **Star this repo** if you found it useful
- 🐛 **Report bugs** or suggest features via [Issues](../../issues)
- 💬 **Share** with friends learning Python
- 🎓 **Use** in your classroom or coding club

---

<div align="center">

### 🎉 Happy Coding! 🎉

**Made with ❤️ for Python learners everywhere**

*If you learned something new, don't forget to star the repo! ⭐*

[⬆ Back to Top](#-python-mini-projects-collection-)

</div>
