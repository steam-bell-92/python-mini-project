"""
Hangman Game - Improved Version
================================
Changes from original:
- Replaced plain word list with a structured word bank (word + hint + category + difficulty)
- Added context display (category, hint, difficulty) before guessing begins
- Added optional one-time hint system that reveals a random unguessed letter
- Refactored into clean, named functions for readability and maintainability
- Improved UX: friendly messages, clear instructions, better formatting
- Added edge-case handling: invalid input, repeated guesses, hint misuse
"""

import random


# ---------------------------------------------------------------------------
# WORD BANK — each entry is a dict with word, hint, category, and difficulty
# ---------------------------------------------------------------------------
WORD_BANK = [
    {"word": "python",      "hint": "A popular programming language named after a snake", "category": "Technology",   "difficulty": "Easy"},
    {"word": "algorithm",   "hint": "A step-by-step procedure for solving a problem",     "category": "Technology",   "difficulty": "Medium"},
    {"word": "database",    "hint": "Organised collection of structured information",      "category": "Technology",   "difficulty": "Medium"},
    {"word": "function",    "hint": "A reusable block of code that performs a task",       "category": "Technology",   "difficulty": "Easy"},
    {"word": "variable",    "hint": "A named container that stores a value",               "category": "Technology",   "difficulty": "Easy"},
    {"word": "keyboard",    "hint": "You type on this device every day",                   "category": "Technology",   "difficulty": "Easy"},
    {"word": "network",     "hint": "Connects multiple computers together",                "category": "Technology",   "difficulty": "Easy"},
    {"word": "encryption",  "hint": "Process of encoding information to keep it secret",   "category": "Technology",   "difficulty": "Hard"},
    {"word": "recursion",   "hint": "A function that calls itself",                        "category": "Technology",   "difficulty": "Hard"},
    {"word": "eclipse",     "hint": "The Moon blocks the Sun during this event",           "category": "Science",      "difficulty": "Easy"},
    {"word": "gravity",     "hint": "The force that keeps you on the ground",              "category": "Science",      "difficulty": "Easy"},
    {"word": "photosynthesis", "hint": "How plants make food from sunlight",               "category": "Science",      "difficulty": "Hard"},
    {"word": "molecule",    "hint": "Two or more atoms bonded together",                   "category": "Science",      "difficulty": "Medium"},
    {"word": "telescope",   "hint": "Scientists use this to observe distant stars",        "category": "Science",      "difficulty": "Medium"},
    {"word": "marathon",    "hint": "A long-distance running race of 42 kilometres",       "category": "Sports",       "difficulty": "Medium"},
    {"word": "cricket",     "hint": "A bat-and-ball game popular in India and England",    "category": "Sports",       "difficulty": "Easy"},
    {"word": "olympics",    "hint": "International multi-sport event held every four years","category": "Sports",      "difficulty": "Easy"},
    {"word": "sonnet",      "hint": "A 14-line poem with a specific rhyme scheme",         "category": "Literature",   "difficulty": "Medium"},
    {"word": "metaphor",    "hint": "A figure of speech that compares two unlike things",  "category": "Literature",   "difficulty": "Hard"},
    {"word": "mystery",     "hint": "A genre of fiction focused on solving a crime",       "category": "Literature",   "difficulty": "Easy"},
]

MAX_ATTEMPTS = 6


# ---------------------------------------------------------------------------
# FUNCTIONS
# ---------------------------------------------------------------------------

def get_random_word() -> dict:
    """
    Randomly selects and returns one word-entry dict from WORD_BANK.
    Returns a dict with keys: word, hint, category, difficulty.
    """
    return random.choice(WORD_BANK)


def display_game_status(word: str, correct_letters: list, guessed_letters: list, attempts: int) -> None:
    """
    Prints the current state of the game:
    - The word with correctly guessed letters revealed and blanks for the rest
    - Attempts remaining
    - All letters guessed so far
    """
    # Build the display string, e.g. "p y _ h _ n"
    display = " ".join(letter if letter in correct_letters else "_" for letter in word)

    print(f"\n  Word:              {display}")
    print(f"  Attempts left:     {MAX_ATTEMPTS - attempts}  {'❤️ ' * (MAX_ATTEMPTS - attempts)}")
    print(f"  Guessed letters:   {', '.join(sorted(guessed_letters)) if guessed_letters else 'None'}")


def reveal_hint_letter(word: str, correct_letters: list) -> str | None:
    """
    Finds all letters in the word that have NOT been guessed yet,
    then randomly reveals one of them.

    Returns the revealed letter, or None if every letter is already guessed.
    """
    # Collect unique letters in the word that are still hidden
    unguessed = [letter for letter in set(word) if letter not in correct_letters]

    if not unguessed:
        return None  # Nothing left to reveal

    return random.choice(unguessed)


def process_guess(guess: str, word: str, correct_letters: list, guessed_letters: list, attempts: int) -> tuple[list, list, int]:
    """
    Processes a single letter guess.
    - If correct: adds to correct_letters (no penalty)
    - If wrong:   increments attempts

    Returns updated (correct_letters, guessed_letters, attempts).
    """
    guessed_letters.append(guess)

    if guess in word:
        print(f"\n  ✅ Nice! '{guess}' is in the word.")
        correct_letters.append(guess)
    else:
        print(f"\n  ❌ Nope! '{guess}' is not in the word.")
        attempts += 1

    return correct_letters, guessed_letters, attempts


def check_win(word: str, correct_letters: list) -> bool:
    """
    Returns True if every letter in the word has been guessed, False otherwise.
    """
    return all(letter in correct_letters for letter in word)


def play_game() -> None:
    """
    Main game loop. Orchestrates all the other functions.
    """
    # ── Welcome Banner ──────────────────────────────────────────────────────
    print("\n" + "=" * 55)
    print("          🎮  WELCOME TO HANGMAN  🎮")
    print("=" * 55)
    print("  Guess the hidden word one letter at a time.")
    print("  You have 6 attempts before the man is hanged.")
    print("  Type  'hint'  once per game to reveal a letter")
    print("  (costs you 1 attempt — use it wisely!).")
    print("=" * 55)

    # ── Pick a word ─────────────────────────────────────────────────────────
    entry = get_random_word()
    word        = entry["word"]
    hint_text   = entry["hint"]
    category    = entry["category"]
    difficulty  = entry["difficulty"]

    # ── Show context ────────────────────────────────────────────────────────
    print(f"\n  📂 Category:    {category}")
    print(f"  💡 Hint:        {hint_text}")
    print(f"  📏 Word length: {len(word)} letters")
    print(f"  ⚡ Difficulty:  {difficulty}")
    print("-" * 55)

    # ── Game state ──────────────────────────────────────────────────────────
    guessed_letters = []   # Every letter (and "hint") the player has entered
    correct_letters = []   # Only the letters found in the word
    attempts        = 0    # Number of wrong guesses
    hint_used       = False
    won             = False

    # ── Main loop ───────────────────────────────────────────────────────────
    while attempts < MAX_ATTEMPTS and not won:
        display_game_status(word, correct_letters, guessed_letters, attempts)

        guess = input("\n  Enter a letter (or 'hint'): ").strip().lower()

        print("-" * 55)

        # ── Hint request ────────────────────────────────────────────────────
        if guess == "hint":
            if hint_used:
                print("  ⚠️  You have already used your hint this game!")
                continue

            if attempts >= MAX_ATTEMPTS - 1:
                # Using the hint would end the game immediately — warn the player
                print("  ⚠️  Using a hint now would cost your last attempt and end the game!")
                confirm = input("  Are you sure? (yes/no): ").strip().lower()
                if confirm != "yes":
                    continue

            revealed = reveal_hint_letter(word, correct_letters)

            if revealed is None:
                print("  🤔 No letters left to reveal — you almost have it!")
                continue

            print(f"  🔍 Hint used! The letter  '{revealed}'  is in the word.")
            print(f"  ⚠️  This costs you 1 attempt as a penalty.")

            correct_letters.append(revealed)
            guessed_letters.append(f"[hint:{revealed}]")  # Mark it clearly in history
            hint_used = True
            attempts += 1       # Hint penalty

            won = check_win(word, correct_letters)
            continue

        # ── Validate input ──────────────────────────────────────────────────
        if len(guess) != 1 or not guess.isalpha():
            print("  ⚠️  Please enter a single letter (a–z) or type 'hint'.")
            continue

        if guess in guessed_letters:
            print(f"  ⚠️  You already guessed '{guess}'. Try a different letter!")
            continue

        # ── Process the guess ───────────────────────────────────────────────
        correct_letters, guessed_letters, attempts = process_guess(
            guess, word, correct_letters, guessed_letters, attempts
        )

        won = check_win(word, correct_letters)

    # ── End screen ──────────────────────────────────────────────────────────
    # Show the final board state before the result message
    display_game_status(word, correct_letters, guessed_letters, attempts)

    print("\n" + "=" * 55)
    if won:
        print("  🎉 CONGRATULATIONS — YOU WON! 🎉")
        print(f"  The word was: '{word}'")
        print(f"  Attempts remaining: {MAX_ATTEMPTS - attempts}")
    else:
        print("  😔 GAME OVER — Better luck next time!")
        print(f"  The word was: '{word}'")
        print(f"  Hint was:     '{hint_text}'")
    print("=" * 55 + "\n")


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    play_game()