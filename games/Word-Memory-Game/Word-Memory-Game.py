import json
import os
import random
import sys
import time

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
WORDS_FILE = os.path.join(BASE_DIR, "words.json")

DISPLAY_TIME = 2


def load_words():
    """Load words from the JSON file."""
    with open(WORDS_FILE, "r") as file:
        return json.load(file)


def clear_screen():
    """Clear the console screen."""
    os.system("cls" if os.name == "nt" else "clear")


def display_menu(highest_scores, last_game):
    """Display the main menu."""

    print("=" * 40)
    print("        WORD MEMORY GAME")
    print("=" * 40)

    if highest_scores:
        print("\nHighest Scores")
        for level in ["easy", "medium", "hard"]:
            if level in highest_scores:
                print(f"🏆 {level.title():<7}: {highest_scores[level]}")

    if last_game["difficulty"]:
        print("\n" + "-" * 40)
        print("You Scored")
        print(
            f"{last_game['difficulty'].title():<7}: {last_game['score']}"
        )

    print("\n" + "-" * 40)
    print("1. Easy")
    print("2. Medium")
    print("3. Hard")
    print("4. Exit")
    print()


def get_difficulty(highest_scores, last_game):
    """Get the difficulty from the user."""

    difficulty_map = {
        "1": "easy",
        "2": "medium",
        "3": "hard"
    }

    while True:

        clear_screen()

        display_menu(highest_scores, last_game)

        choice = input("Choose an option: ").strip()

        if choice == "4":

            clear_screen()

            print("=" * 40)
            print("      YOUR HIGHEST SCORES")
            print("=" * 40)

            if highest_scores:
                for level in ["easy", "medium", "hard"]:
                    if level in highest_scores:
                        print(f"🏆 {level.title():<7}: {highest_scores[level]}")
            else:
                print("No games played.")

            print("\n" + "-" * 40)
            print("\nThanks for playing! 👋")

            sys.exit()

        if choice in difficulty_map:
            return difficulty_map[choice]

        print("\nInvalid choice!")
        time.sleep(1)


def get_random_word(words, difficulty, previous_word):
    """Return a random word different from the previous one."""

    word = random.choice(words[difficulty])

    while previous_word is not None and word == previous_word:
        word = random.choice(words[difficulty])

    return word


def play_game(words, difficulty, highest_scores, last_game):

    score = 0
    previous_word = None

    while True:

        word = get_random_word(
            words,
            difficulty,
            previous_word
        )

        previous_word = word

        clear_screen()

        print("=" * 40)
        print(f"    WORD MEMORY GAME ({difficulty.upper()})")
        print("=" * 40)

        print("\nRemember this word:\n")
        print(f"        {word.upper()}")

        print(f"\nYou have {DISPLAY_TIME} seconds...")

        time.sleep(DISPLAY_TIME)

        clear_screen()

        print("=" * 40)
        print(f"    WORD MEMORY GAME ({difficulty.upper()})")
        print("=" * 40)

        answer = input("\nEnter the word: ").strip()

        if answer.lower() == word.lower():
            score += 1
            print("\n✅ Correct!")
        else:
            print("\n❌ Incorrect!")
            print(f"Correct Word : {word.upper()}")

        print(f"\nCurrent Score : {score}")

        while True:

            print("\n" + "-" * 40)
            print("1. Continue")
            print("2. Main Menu")
            print("3. Exit")

            choice = input("\nChoose an option: ").strip()

            if choice == "1":
                break

            last_game["difficulty"] = difficulty
            last_game["score"] = score

            highest_scores[difficulty] = max(
                highest_scores.get(difficulty, 0),
                score
            )

            if choice == "2":
                return
            elif choice == "3":

                clear_screen()

                print("=" * 40)
                print("      YOUR HIGHEST SCORES")
                print("=" * 40)

                if highest_scores:
                    for level in ["easy", "medium", "hard"]:
                        if level in highest_scores:
                            print(
                                f"🏆 {level.title():<7}: {highest_scores[level]}"
                            )
                else:
                    print("No games played.")

                print("\n" + "-" * 40)
                print("\nThanks for playing! 👋")

                sys.exit()

            print("\nInvalid choice! Please enter 1, 2 or 3.")
            time.sleep(1)


def main():
    """Main function."""

    words = load_words()

    highest_scores = {}

    last_game = {
        "difficulty": None,
        "score": 0
    }

    while True:

        difficulty = get_difficulty(
            highest_scores,
            last_game
        )

        play_game(
            words,
            difficulty,
            highest_scores,
            last_game
        )


if __name__ == "__main__":
    main()