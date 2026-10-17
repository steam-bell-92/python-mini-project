<div align="center">

# 🎮 Python Mini Projects Collection 🎯

### _Learn Python by Building Fun, Interactive Games & Tools!_

[![Python Version](https://img.shields.io/badge/python-3.10--3.12-blue.svg)](https://www.python.org/downloads/)
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
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Security](#-security)
- [What's Inside](#-whats-inside)
- [Contributors](#-contributors)
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
├── security/            # security helpers and the password manager
├── expression_parser/
├── tests/               # pytest suite
├── web-app/
│   ├── css/
│   ├── js/
│   └── assets/
├── main.py              # interactive launcher (Textual TUI)
├── search_projects.py   # search/filter projects from the terminal
├── projects_registry.json
├── README.md
└── requirements.txt
```

## 🚀 Getting Started

**Prerequisites:** Python 3.10–3.12. The Word-Building game also needs the system
[Enchant](https://abiword.github.io/enchant/) library (used by `pyenchant`).

```bash
git clone https://github.com/steam-bell-92/python-mini-project.git
cd python-mini-project
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Run a project in one of three ways:

```bash
python main.py                                  # interactive launcher menu
python search_projects.py                       # search by keyword, category or difficulty
python games/Snake-Game/Snake-Game.py           # run any project directly
```

Every project is listed with its path in [`projects_registry.json`](projects_registry.json).
Some projects (pygame, tkinter, turtle, matplotlib) open a window and need a desktop environment.

## 🛠 Development

```bash
pytest tests/             # run the test suite
ruff check .              # lint (configured in pyproject.toml)
pip-audit -r requirements.txt   # check dependencies for known vulnerabilities
```

On a headless machine set `SDL_VIDEODRIVER=dummy SDL_AUDIODRIVER=dummy MPLBACKEND=Agg`
before running the tests. These checks also run in GitHub Actions on every pull request.
See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.

## 🔒 Security

Please do not post exploit details in a public issue. Report suspected
vulnerabilities privately to the repository maintainer through their GitHub profile.

## 🧩 What’s Inside

- Games for quick interactive fun
- Math projects for learning logic and problem solving
- Utility tools for practical use cases
- A web app version for browser-based access

---

## 👥 Contributors

We appreciate all contributions to the Python Mini Projects Collection! Thank you to everyone who has helped make this project better.

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
