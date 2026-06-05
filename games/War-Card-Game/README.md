# ⚔️ War Card Game

A classic two-player card game implemented in Python as an interactive command-line application. The game programmatically generates a standard 52-card deck, shuffles it, distributes it equally between two players, and pits their drawn cards against each other round-by-round.

---

## 🚀 Features

- 👥 **Multiplayer Experience**: Supports custom player names (or defaults to Player 1 and Player 2).
- 🎴 **Standard 52-Card Deck**: Fully represented with suits (Hearts, Diamonds, Clubs, Spades) and ranks (2 to Ace).
- 🔀 **Randomized Card Shuffling**: Utilizes Python's `random.shuffle` to ensure every game has unique card distributions.
- ⏱️ **Turn-by-Turn Control**: Players can choose to play round-by-round or stop mid-game.
- 📊 **Real-time Scoring**: Automatically tracks and updates scores after every round, displaying drawn cards and current standings.
- ⚖️ **Tie Handling**: Gracefully handles matching ranks (Tie) and continues standard gameplay.
- 🔁 **Replay System**: Option to play another game immediately without restarting the script.

---

## 🛠️ Requirements

- **Python 3.x**
- No external libraries are needed (uses standard Python library built-in modules: `random`).

---

## ▶️ How to Run

1. Navigate to the game directory:
   ```bash
   cd games/War-Card-Game
   ```
2. Run the script:
   ```bash
   python War-Card-Game.py
   ```

---

## 🎮 Gameplay Guide

1. Run the game and enter custom names for **Player 1** and **Player 2**.
2. The game will shuffle and distribute the cards.
3. For each round, enter `yes` (or `y`) to draw a card, or `no` (or `n`) to stop the game.
4. The player who draws the higher rank card wins the round and earns 1 point (Aces are high, numeric cards are their value).
5. The game continues until either player runs out of cards or a player chooses to stop.
6. A beautiful **Final Result** panel will declare the winner and display final scores.

---

## 📸 Sample Output

```text
===== Welcome to War Card Game =====

Enter Player 1 Name: Nishtha
Enter Player 2 Name: Antigravity

Deck shuffled successfully!
Cards distributed equally to both players.


Do you want to play Round 1? (yes/no): y

========== Round 1 ==========
Nishtha draws: King of Hearts
Antigravity draws: 4 of Spades
🏆 Round Winner: Nishtha
Current Score -> Nishtha: 1 | Antigravity: 0

Do you want to play Round 2? (yes/no): y

========== Round 2 ==========
Nishtha draws: 8 of Diamonds
Antigravity draws: Jack of Clubs
🏆 Round Winner: Antigravity
Current Score -> Nishtha: 1 | Antigravity: 1

Do you want to play Round 3? (yes/no): no

Game stopped by user.

========== Final Result ==========
Nishtha: 1 points
Antigravity: 1 points

🤝 The game ends in a Tie!

🔄 Play again? (y/n): n
👋 Thanks for playing War Card Game!
```

---

## 📁 File Structure

```text
War-Card-Game/
├── War-Card-Game.py
└── README.md
```

---

## 👤 Author

Contributed as part of GSSoC (GirlScript Summer of Code).  
Repository: [python-mini-project](https://github.com/steam-bell-92/python-mini-project)
