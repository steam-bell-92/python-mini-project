<strong>GSSoC Approved Repository</strong></p>

<div align="center">

# 🎮 Python Mini Projects Collection 🎯

### _Learn Python by Building Fun, Interactive Games & Tools!_

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

- [Repo Introduction](#-repo-introduction)
- [Repo Structure](#-repo-structure)
- [What's Inside](#-whats-inside)
- [Contributors](#contributors)
- [License](#-license)
- [Connect & Share](#-connect--share)

## 🎯 Repo Introduction

This repository is a collection of small Python games and utility projects built to make learning Python more practical and engaging. It includes both command-line projects and a browser-based web app for trying the projects online.

## 📂 Repo Structure

```text
python-mini-project/
|
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

<div align="right">

<button class="copy-btn" data-copy="clone-command">📋 Copy</button>

</div>

```bash
git clone https://github.com/steam-bell-92/python-mini-project.git
cd python-mini-project
```

#### 2. Create a Virtual Environment

For Linux/macOS:

<div align="right">

<button class="copy-btn" data-copy="linux-venv">📋 Copy</button>

</div>

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

<div align="right">

<button class="copy-btn" data-copy="install-command">📋 Copy</button>

</div>

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

<div align="right">

<button class="copy-btn" data-copy="web-command">📋 Copy</button>

</div>

```bash
cd web-app
npm install
npm start
```

The app will open at `http://localhost:3000` (or your configured port).

### Running Tests

To verify that the projects work correctly, run the test suite:

<div align="right">

<button class="copy-btn" data-copy="pytest-command">📋 Copy</button>

</div>

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

---

## 👥 Contributors

We appreciate all contributions to recode hive! Thank you to everyone who has helped make this project better.

<a href="https://github.com/steam-bell-92/python-mini-project/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=steam-bell-92/python-mini-project" />
</a>

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

_If you learned something new, don't forget to star the repo! ⭐_

[⬆ Back to Top](#-python-mini-projects-collection-)

</div>
