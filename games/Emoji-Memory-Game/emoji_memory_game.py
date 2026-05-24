import random
import time
import os

emojis = ["🍎", "🚗", "⚽", "🐍", "🎧", "🔥", "🌈", "🚀"]

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def generate_sequence(level):
    return random.choices(emojis, k=level + 2)

def play_game():
    score = 0
    level = 1

    print("🎮 Welcome to Emoji Memory Game!\n")

    while True:
        sequence = generate_sequence(level)

        print("🧠 MEMORIZE THESE EMOJIS:")
        print(" ".join(sequence))
        time.sleep(4)
        clear_screen()

        user_input = input("Type the emojis in order:\n> ").split()

        if user_input == sequence:
            score += level * 10
            print("✅ Correct!")
            level += 1
        else:
            print("❌ Wrong!")
            print("Correct sequence was:", " ".join(sequence))
            break

        print(f"🏆 Score: {score}\n")

    print("\n🎯 Game Over! Final Score:", score)

if __name__ == "__main__":
    play_game()
