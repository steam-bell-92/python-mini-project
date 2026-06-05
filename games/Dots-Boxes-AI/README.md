# 🔲 Dots & Boxes AI - Advanced Version

An advanced, beautifully colorized terminal-based implementation of the classic **Dots & Boxes** pen-and-paper game. Written in pure Python, it supports both local two-player matches and matches against a smart heuristic AI with three distinct difficulty levels.

---

## 🚀 Features

- 🎨 **Vibrant Terminal Styling**: Uses ANSI color escape codes for rendering player blocks, lines, points, and turns in eye-catching colors (Blue, Red, Yellow, Cyan, Green).
- 👥 **Multiple Game Modes**:
  - **Player vs Player**: Battle locally against a friend.
  - **Player vs AI**: Pit your skills against a computer opponent.
- 🧠 **Smart AI Opponent**: Features three AI levels utilizing custom decision-making heuristics:
  - 🟢 **Easy**: Makes completely random moves.
  - 🟡 **Intermediate**: Prioritizes completing a box and avoids leaving dangerous 3-sided boxes that would allow the player to score.
  - 🔴 **Hard**: Scores all available moves dynamically, prioritizing game winning configurations, blocking player gains, and positioning itself strategically.
- 📏 **Custom Board Sizes**: Play on boards ranging from `2x2` up to `8x8` dots.
- ⚙️ **Accurate Ruleset**: Completing a box grants the scoring player an immediate **extra turn**!
- 🛡️ **Robust Validation**: Built-in protections against out-of-bounds coordinates, duplicate moves, invalid choices, and negative inputs.

---

## 🛠️ Requirements

- **Python 3.x**
- No external libraries are needed (uses standard Python library built-in modules: `random`, `time`).
- *Note: Works best in terminal environments that support ANSI color output.*

---

## ▶️ How to Run

1. Navigate to the game directory:
   ```bash
   cd games/Dots-Boxes-AI
   ```
2. Run the script:
   ```bash
   python Dots-Boxes-AI.py
   ```

---

## 🎮 Gameplay Guide

### Objective
Draw lines between adjacent dots on the grid. When a player draws the fourth line closing a `1x1` box, they score a point and earn another turn. The player with the most boxes filled when no more lines can be drawn wins!

### Playing a Turn
1. The board is printed showing dots (`•`), drawn horizontal lines (`━━`), drawn vertical lines (`┃`), and completed boxes (`■`).
2. Input the line direction: `h` for horizontal or `v` for vertical.
3. Input the **Row** and **Column** coordinates of the line:
   - For **Horizontal** lines: Row range is `0 to size`, Col range is `0 to size-1`.
   - For **Vertical** lines: Row range is `0 to size-1`, Col range is `0 to size`.

---

## 📸 Sample Board Render

```text
•  •  •
┃■ ┃  
•━━•  •
   ┃  
•  •━━•
```

*Note: In the actual terminal, the dots, lines, and boxes are dynamically colored blue for Player 1 and red for Player 2/AI.*

---

## 📁 File Structure

```text
Dots-Boxes-AI/
├── Dots-Boxes-AI.py
└── README.md
```

---

## 👤 Author

Contributed as part of GSSoC (GirlScript Summer of Code).  
Repository: [python-mini-project](https://github.com/steam-bell-92/python-mini-project)
