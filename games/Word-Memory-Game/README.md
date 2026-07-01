# Word Memory Game

## Overview

Word Memory Game is a beginner-friendly command-line Python game that tests your short-term memory and concentration. The game displays a random word for a few seconds, clears the screen, and challenges you to recall and type the word correctly. As you play, your score increases for every correct answer, making it a fun way to improve memory and focus.

## Features

* 🎮 Interactive command-line gameplay
* 📝 Randomly selected words from a JSON file
* 📊 Three difficulty levels:

  * Easy
  * Medium
  * Hard
* ⏱️ Fixed 2-second word display before the screen clears
* ✅ Case-insensitive answer checking
* 🔄 Continuous gameplay until you choose to return to the main menu or exit
* 📈 Tracks your current score during each game
* 🏆 Displays the highest score achieved for each difficulty during the current session
* 📌 Shows the score from your most recently completed game
* 🚫 Prevents the same word from appearing consecutively
* 📂 Easy to customize by simply editing the `words.json` file to add, remove, or modify words
* 💻 Built entirely using Python's standard library with no external dependencies

## How to Play

1. Launch the game.
2. Select a difficulty level (Easy, Medium, or Hard).
3. Memorize the displayed word before it disappears.
4. Type the word exactly as you remember it.
5. Earn one point for every correct answer.
6. Continue playing, return to the main menu, or exit whenever you like.
7. View your highest session scores and your most recent game score from the main menu.

## Difficulty Levels

* **Easy:** Short and simple words
* **Medium:** Moderately challenging words
* **Hard:** Longer and more difficult words

## Game Objectives

* Improve short-term memory
* Enhance concentration and observation skills
* Practice quick recall in a fun and interactive way

## Technologies Used

* Python 3
* JSON
* Python Standard Library (`json`, `random`, `time`, `os`, and `sys`)
