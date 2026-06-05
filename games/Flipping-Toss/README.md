# 🪙 Coin Flip Game (Flipping Toss)

A simple, interactive, and beginner-friendly command-line game written in Python where players can toss a coin, predict the outcome (Heads or Tails), and track their prediction accuracy with detailed real-time statistics.

---

## 🚀 Features

- 🪙 **Interactive Coin Tossing**: Play as many rounds as you like.
- 🎯 **Prediction System**: Predict the result (`H` for Heads, `T` for Tails) before each toss.
- ⏳ **Flipping Animation**: Simulated delay to add anticipation and excitement to the toss.
- 📊 **Detailed Game Summary**: View full statistics upon quitting the game, including:
  - Total tosses played
  - Number of Heads and Tails
  - Total correct predictions
  - Percentage accuracy of your predictions
- 🛡️ **Robust Input Handling**: Handles invalid inputs gracefully with helpful warnings.

---

## 🛠️ Requirements

- **Python 3.x**
- No external libraries are needed (uses standard Python library built-in modules: `random`, `time`).

---

## ▶️ How to Run

1. Navigate to the game directory:
   ```bash
   cd games/Flipping-Toss
   ```
2. Run the script:
   ```bash
   python Flipping-Toss.py
   ```

---

## 🎮 Gameplay Guide

1. Start the game, and you will be asked: `Toss a coin? (y/n): `.
2. Enter `y` to play, or `n` to quit and see your stats.
3. If playing, guess the outcome by entering `H` (Heads) or `T` (Tails).
4. Wait for the flipping simulation to finish, and see if your prediction was correct!
5. When you decide to stop (`n`), a beautifully formatted **Game Summary** and your **Prediction Accuracy** will be displayed.

---

## 📸 Sample Output

```text
🪙 Coin Flip Game! 🪙

Toss a coin? (y/n): y
Predict the result (H/T): h
🪙 Flipping...
👑 Heads!!
🎉 Correct Prediction!

Toss a coin? (y/n): y
Predict the result (H/T): t
🪙 Flipping...
👑 Heads!!
❌ Wrong Prediction!

Toss a coin? (y/n): n
👋 Thanks for playing! See you next time!

📊 GAME SUMMARY 📊
🪙 Total Tosses: 2
👑 Heads Count: 2
🦅 Tails Count: 0
🎯 Correct Predictions: 1
📈 Prediction Accuracy: 50.00%

✨ Thanks for playing!
```

---

## 📁 File Structure

```text
Flipping-Toss/
├── Flipping-Toss.py
└── README.md
```

---

## 👤 Author

Contributed as part of GSSoC (GirlScript Summer of Code).  
Repository: [python-mini-project](https://github.com/steam-bell-92/python-mini-project)
