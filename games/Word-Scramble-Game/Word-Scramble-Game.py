import random
import time
import os

WORD_BANK = {
    "🐾 Animals": [
        "elephant", "penguin", "dolphin", "cheetah", "giraffe",
        "kangaroo", "crocodile", "flamingo", "panther", "squirrel",
    ],
    "🍎 Fruits": [
        "mango", "papaya", "cherry", "apricot", "banana",
        "guava", "lychee", "peach", "plum", "strawberry",
    ],
    "🌍 Countries": [
        "brazil", "france", "canada", "japan", "kenya",
        "norway", "mexico", "india", "egypt", "sweden",
    ],
    "🔬 Science": [
        "gravity", "nucleus", "photon", "proton", "molecule",
        "quantum", "enzyme", "plasma", "neuron", "voltage",
    ],
    "🎵 Music": [
        "rhythm", "melody", "chorus", "octave", "guitar",
        "violin", "harmony", "trumpet", "bassoon", "symphony",
    ],
    "🏅 Sports": [
        "cricket", "tennis", "hockey", "soccer", "rowing",
        "karate", "boxing", "cycling", "archery", "fencing",
    ],
}

DIFFICULTY_LEVELS = {
    "easy": {"min_length": 1, "max_length": 5, "points": 5},
    "medium": {"min_length": 6, "max_length": 8, "points": 10},
    "hard": {"min_length": 9, "max_length": 100, "points": 20},
}

while True:
    os.system("cls" if os.name == "nt" else "clear")
    print("\n  ╔══════════════════════════════════════════════╗")
    print("  ║       🔤  W O R D  S C R A M B L E  🔤        ║")
    print("  ╚══════════════════════════════════════════════╝\n")
    print("  Unscramble the letters to guess the hidden word!\n")
    print("  📋  Rules:")
    print("      • 3 lives per game — lose one each time you run out of attempts")
    print("      • 3 attempts per word before losing a life")
    print("      • Type 'hint' to reveal the word's category")
    print("      • Type 'skip' to skip a word with no penalty")
    print("      • Type 'quit' to end the game at any time")
    print("      • Difficulty affects word complexity and score rewards\n")
    input("  Press Enter to start… ")

    print("\n  🎯 Select Difficulty:")
    print("      • Easy")
    print("      • Medium")
    print("      • Hard\n")

    while True:
        difficulty = input("  ➤  Enter difficulty: ").strip().lower()
        if difficulty in DIFFICULTY_LEVELS:
            break
        print("  ❌ Invalid difficulty! Choose easy, medium, or hard.\n")

    score = 0
    lives = 3
    round_num = 1
    still_playing = True

    while lives > 0 and still_playing:
        settings = DIFFICULTY_LEVELS[difficulty]
        valid_words = []
        for category, words in WORD_BANK.items():
            filtered_words = [w for w in words if settings["min_length"] <= len(w) <= settings["max_length"]]
            if filtered_words:
                valid_words.append((category, filtered_words))

        category, words = random.choice(valid_words)
        word = random.choice(words)

        letters = list(word)
        scrambled = ""
        for _ in range(100):
            random.shuffle(letters)
            scrambled = "".join(letters)
            if scrambled != word:
                break
        
        fancy_scrambled = "  ".join(scrambled.upper())

        hint_used = False
        attempts = 0
        max_attempts = 3

        while attempts < max_attempts:
            os.system("cls" if os.name == "nt" else "clear")
            print("╔══════════════════════════════════════════════╗")
            print("║          🔤  W O R D  S C R A M B L E  🔤         ║")
            print("╠══════════════════════════════════════════════╣")
            lives_str = "❤️ " * lives + "🖤 " * (3 - lives)
            print(f"║  Round: {round_num:<5}  Score: {score:<6}  Lives: {lives_str:<14}║")
            print(f"║  Difficulty: {difficulty.capitalize():<31}║")
            print("╚══════════════════════════════════════════════╝\n")

            print(f"  🔀  Unscramble this word:\n")
            print(f"      ✨  {fancy_scrambled}  ✨\n")
            print(f"  Letters: {len(word)}   |   Attempts left this round: {max_attempts - attempts}")

            if hint_used:
                print(f"  💡 Hint: {category}")

            print("\n  Commands: [answer] · 'hint' · 'skip' · 'quit'\n")

            try:
                raw = input("  ➤  Your guess: ").strip().lower()
            except (EOFError, KeyboardInterrupt):
                still_playing = False
                break

            if raw == "quit":
                still_playing = False
                break

            if raw == "skip":
                print(f"\n  ⏭️  Skipped! The word was: {word.upper()}")
                time.sleep(1.5)
                break

            if raw == "hint":
                if not hint_used:
                    hint_used = True
                    print(f"\n  💡 Hint unlocked: {category}")
                else:
                    print("\n  💡 You already used your hint!")
                time.sleep(1)
                continue

            attempts += 1

            if raw == word:
                base_points = DIFFICULTY_LEVELS[difficulty]["points"]
                bonus = base_points if not hint_used else base_points // 2
                score += bonus

                os.system("cls" if os.name == "nt" else "clear")
                print("╔══════════════════════════════════════════════╗")
                print("║          🔤  W O R D  S C R A M B L E  🔤         ║")
                print("╠══════════════════════════════════════════════╣")
                print(f"║  Round: {round_num:<5}  Score: {score:<6}  Lives: {lives_str:<14}║")
                print(f"║  Difficulty: {difficulty.capitalize():<31}║")
                print("╚══════════════════════════════════════════════╝\n")
                
                print(f"\n  🎉 Correct! +{bonus} points {'(hint used: half points)' if hint_used else ''}\n")
                time.sleep(1.5)
                break
            else:
                remaining = max_attempts - attempts
                if remaining > 0:
                    print(f"\n  ❌ Nope! Try again. ({remaining} attempt{'s' if remaining != 1 else ''} left)")
                    time.sleep(1)
                else:
                    lives -= 1
                    os.system("cls" if os.name == "nt" else "clear")
                    print("╔══════════════════════════════════════════════╗")
                    print("║          🔤  W O R D  S C R A M B L E  🔤         ║")
                    print("╠══════════════════════════════════════════════╣")
                    lives_str = "❤️ " * lives + "🖤 " * (3 - lives)
                    print(f"║  Round: {round_num:<5}  Score: {score:<6}  Lives: {lives_str:<14}║")
                    print(f"║  Difficulty: {difficulty.capitalize():<31}║")
                    print("╚══════════════════════════════════════════════╝\n")
                    
                    print(f"\n  💔 Out of attempts! The word was: {word.upper()}\n")
                    time.sleep(2)
                    break

        if still_playing:
            round_num += 1

    os.system("cls" if os.name == "nt" else "clear")
    print("\n  ╔══════════════════════════════════╗")
    print("  ║         💀  GAME  OVER  💀          ║")
    print("  ╚══════════════════════════════════╝\n")
    print(f"  You survived {round_num} round{'s' if round_num != 1 else ''}.")
    print(f"  Final score: {score} points\n")

    grade = (
        "🏆 Wordsmith Supreme!" if score >= 80 else
        "🥇 Excellent!" if score >= 60 else
        "🥈 Good effort!" if score >= 40 else
        "🥉 Keep practising!" if score >= 20 else
        "📚 Hit the dictionary!"
    )
    print(f"  {grade}\n")

    try:
        again = input("  Play again? (y/n): ").strip().lower()
    except (EOFError, KeyboardInterrupt):
        again = "n"

    if again != "y":
        print("\n  Thanks for playing! 👋\n")
        break
