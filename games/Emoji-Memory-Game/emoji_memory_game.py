import random
import time
import os

emojis = ["🍎", "🚗", "⚽", "🐍", "🎧", "🔥", "🌈", "🚀"]

HIGH_SCORE_FILE = "highscore.txt"


def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')


def generate_sequence(level):
    return random.choices(emojis, k=level + 2)


def load_high_score():
    if not os.path.exists(HIGH_SCORE_FILE):
        with open(HIGH_SCORE_FILE, "w") as file:
            file.write("0")

    with open(HIGH_SCORE_FILE, "r") as file:
        return int(file.read())


def save_high_score(score):
    with open(HIGH_SCORE_FILE, "w") as file:
        file.write(str(score))


def show_countdown():
    print("⏳ Get Ready!")
    for i in range(3, 0, -1):
        print(i)
        time.sleep(1)
    clear_screen()

def get_difficulty():
    print("🎯 Select Difficulty")
    print("1. Easy (5 sec)")
    print("2. Medium (4 sec)")
    print("3. Hard (2 sec)")

    choice = input("Enter choice (1/2/3): ").strip()

    if choice == "1":
        return 5
    elif choice == "3":
        return 2
    else:
        return 4

def play_game():
    score = 0
    level = 1
    high_score = load_high_score()

    print("🎮 Welcome to Emoji Memory Game!")
    print(f"🏅 High Score: {high_score}\n")

    # Added difficulty mode
    display_time = get_difficulty()

    show_countdown()

    while True:
        sequence = generate_sequence(level)

        print("🧠 MEMORIZE THESE EMOJIS:")
        print(" ".join(sequence))

        # difficulty-based timing
        time.sleep(display_time)
        clear_screen()

        # Improved input validation
        user_input = input("Type the emojis in order:\n> ").strip().split()

        # normalize input
        user_input = [emoji.strip() for emoji in user_input]

        if not user_input:
            print("⚠️ Empty input detected!")
            continue

        if user_input == sequence:
            score += level * 10
            print("✅ Correct!")
            level += 1
        else:
            print("❌ Wrong!")
            print("Correct sequence was:", " ".join(sequence))
            break

        print(f"🏆 Score: {score}\n")

    print("\n🎯 Game Over!")
    print(f"🏆 Final Score: {score}")

    if score > high_score:
        print("🔥 NEW HIGH SCORE!")
        save_high_score(score)
    else:
        print(f"🏅 High Score remains: {high_score}")


if __name__ == "__main__":
    while True:
        play_game()

        # Replay option
        choice = input("\nPlay again? (y/n): ").strip().lower()

        if choice != "y":
            print("👋 Thanks for playing!")
            break
