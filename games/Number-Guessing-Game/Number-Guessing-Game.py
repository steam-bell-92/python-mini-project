import random


def choose_difficulty():
    print("🎯 Choose difficulty:")
    print("  1) 🟢 Easy   - 15 attempts")
    print("  2) 🟡 Medium - 10 attempts")
    print("  3) 🔴 Hard   - 5 attempts")
    while True:
        choice = input("Select 1, 2 or 3 (default 2): ").strip() or "2"
        if choice in ("1", "2", "3"):
            return {"1": 15, "2": 10, "3": 5}[choice]
        print("⚠️ Invalid selection. Please enter 1, 2 or 3.")


def play_round(max_attempts: int):
    number = random.randint(1, 100)
    attempts = 0
    print(f"I'm thinking of a number between 1 and 100. You have {max_attempts} attempts.")
    guess_history = []

    while attempts < max_attempts:
        remaining = max_attempts - attempts
        try:
            guess = input(f"Guess ({remaining} left): ").strip()
            guess_num = int(guess)
        except ValueError:
            print("⚠️ Invalid input — please enter an integer between 1 and 100.")
            continue

        if not (1 <= guess_num <= 100):
            print("🚫 Out of range — enter a number between 1 and 100.")
            continue

        attempts += 1
        guess_history.append(guess_num)

        if guess_num == number:
            print("🏆 Correct! You guessed the number!")
            print(f"✨ number: {number} — attempts: {attempts}/{max_attempts}")
            return True, attempts

        if guess_num > number:
            print("⬇️ High — try a smaller number.")
        else:
            print("⬆️ Low — try a larger number.")

        # proximity hint
        diff = abs(guess_num - number)
        if diff <= 3:
            print("🔥 Very close!")
        elif diff <= 10:
            print("🙂 Close — you're getting there.")
        elif diff <= 20:
            print("🧭 Not very close yet.")
        else:
            print("❄️ Far off — try a different range.")

    print("💥 Out of attempts — you lost this round.")
    print(f"The number was {number}.")
    if guess_history:
        print("Your guesses:", ", ".join(map(str, guess_history)))
    return False, attempts


def play_round_with_guesses(guesses, number, max_attempts: int):
    """Non-interactive helper useful for testing.

    guesses: iterable of ints to use as guesses in order
    number: target number (int)
    returns: (won: bool, attempts: int)
    """
    attempts = 0
    for g in guesses:
        if attempts >= max_attempts:
            break
        if not isinstance(g, int):
            continue
        if not (1 <= g <= 100):
            continue
        attempts += 1
        if g == number:
            return True, attempts
    return False, attempts


def main():
    print("🎮 Welcome to the Number Guessing Game! 🎮\n")
    while True:
        max_attempts = choose_difficulty()
        won, tries = play_round(max_attempts)

        if won:
            print(f"You solved it in {tries} guesses.")
        else:
            print(f"You used all {max_attempts} attempts.")

        again = input("Play again? (y/n): ").strip().lower()
        if again != "y":
            print("👋 Thanks for playing — goodbye!")
            break


if __name__ == "__main__":
    main()
