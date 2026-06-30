import json
import random
import time
import os

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


def display_menu():
    """Display the main menu."""
    print("=" * 40)
    print("        WORD MEMORY GAME")
    print("=" * 40)
    print("1. Easy")
    print("2. Medium")
    print("3. Hard")
    print("4. Exit")
    print()


def get_difficulty():
    """Get the difficulty selected by the user."""
    difficulty_map = {
        "1": "easy",
        "2": "medium",
        "3": "hard"
    }

    while True:
        display_menu()
        choice = input("Choose an option: ").strip()

        if choice == "4":
            print("\nThanks for playing!")
            exit()

        if choice in difficulty_map:
            return difficulty_map[choice]

        print("\nInvalid choice! Please try again.\n")


def get_random_word(words, difficulty, previous_word=None):
    """Return a random word different from the previous one."""
    word = random.choice(words[difficulty])

    while previous_word is not None and word == previous_word:
        word = random.choice(words[difficulty])

    return word


def play_game(words, difficulty):
    """Play one difficulty until the user changes it or exits."""
    score = 0
    previous_word = None

    while True:
        word = get_random_word(words, difficulty, previous_word)
        previous_word = word

        clear_screen()

        print("=" * 40)
        print(f"    WORD MEMORY GAME ({difficulty.upper()})")
        print("=" * 40)
        print("\nRemember the following word:\n")
        print(f"\t{word.upper()}")
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
            print(f"The correct word was: {word.upper()}")

        print(f"\nCurrent Score: {score}")

        print("\nWhat would you like to do?")
        print("1. Continue")
        print("2. Main Menu")
        print("3. Exit")

        choice = input("\nChoose an option: ").strip()

        if choice == "1":
            continue
        elif choice == "2":
            break
        elif choice == "3":
            print(f"\nFinal Score ({difficulty.title()}): {score}")
            print("Thanks for playing!")
            exit()
        else:
            print("\nInvalid choice. Returning to Main Menu...")
            time.sleep(1)
            break


def main():
    words = load_words()

    while True:
        clear_screen()
        difficulty = get_difficulty()
        play_game(words, difficulty)


if __name__ == "__main__":
    main()