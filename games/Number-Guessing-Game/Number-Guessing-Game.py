import sys
import os
import random

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))
from utils.validation import get_choice, get_int

# Game constants
MIN_NUMBER = 1
MAX_NUMBER = 100

# Proximity hint thresholds
VERY_CLOSE_THRESHOLD = 3
CLOSE_THRESHOLD = 10
NOT_CLOSE_THRESHOLD = 20

def main() -> None:
    print("🎯 Welcome to the Number Guessing Game!\n")

    while True:
        print("Choose difficulty:")
        print("  1) Easy   - 15 attempts 🟢")
        print("  2) Medium - 10 attempts 🟡")
        print("  3) Hard   - 5 attempts  🔴")

        choice = get_choice(
            prompt="Select 1, 2 or 3 (default 2): ",
            choices=["1", "2", "3"],
            default="2",
            error_invalid="⚠️ Invalid selection. Please enter 1, 2 or 3."
        )

        if choice == "1":
            max_attempts = 15
        elif choice == "3":
            max_attempts = 5
        else:
            max_attempts = 10

        number = random.randint(MIN_NUMBER, MAX_NUMBER)
        attempts = 0
        guess_history = []
        won = False

        print(f"\n🤔 I'm thinking of a number between {MIN_NUMBER} and {MAX_NUMBER}.")
        print(f"You have {max_attempts} attempts.")

        while attempts < max_attempts:
            remaining = max_attempts - attempts
            
            guess_num = get_int(
                prompt=f"\n👉 Guess ({remaining} left): ",
                error_empty="⚠️ Input cannot be empty.",
                error_invalid="⚠️ Invalid input. Please enter a whole number."
            )
            
            if not (MIN_NUMBER <= guess_num <= MAX_NUMBER):
                print(f"⚠️ Enter a number between {MIN_NUMBER} and {MAX_NUMBER}.")
                continue

            attempts += 1
            guess_history.append(guess_num)

            if guess_num == number:
                print("\n🎉 Correct! You guessed the number.")
                print(f"✅ Number: {number}")
                print(f"🎯 Attempts: {attempts}/{max_attempts}")
                print("📜 Guesses:", ", ".join(map(str, guess_history)))
                won = True
                break

            if guess_num > number:
                print("📉 Too high.")
            else:
                print("📈 Too low.")

            # Show proximity hint
            diff = abs(guess_num - number)
            if diff <= VERY_CLOSE_THRESHOLD:
                print("🔥 Very close!")
            elif diff <= CLOSE_THRESHOLD:
                print("😊 Close.")
            elif diff <= NOT_CLOSE_THRESHOLD:
                print("😐 Not very close.")
            else:
                print("❄️ Far off.")

        if not won:
            print("\n💀 Out of attempts.")
            print(f"The number was {number}.")
            if guess_history:
                print("📜 Your guesses:", ", ".join(map(str, guess_history)))
            print(f"❌ You used all {max_attempts} attempts.")
        else:
            print(f"🏆 You solved it in {attempts} guesses.")

        again = get_choice(
            prompt="\n🔄 Play again? (y/n): ",
            choices=['y', 'yes', 'n', 'no'],
            error_invalid="⚠️ Invalid choice. Please enter 'y' or 'n'."
        )

        if again in ['n', 'no']:
            print("👋 Goodbye.")
            break

if __name__ == "__main__":
    main()