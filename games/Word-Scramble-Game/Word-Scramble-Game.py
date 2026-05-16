import random


WORDS = [
    ("python", "A friendly programming language used across this project."),
    ("variable", "A named place where a program stores a value."),
    ("function", "Reusable code that performs one clear task."),
    ("keyboard", "The device you use to type your answers."),
    ("algorithm", "A step-by-step method for solving a problem."),
    ("database", "An organized collection of information."),
    ("developer", "Someone who builds software."),
    ("network", "Connected computers that can share data."),
    ("software", "Programs and apps that run on a computer."),
    ("internet", "The global network that connects websites and services."),
]


def scramble_word(word):
    letters = list(word)
    scrambled = word

    while scrambled == word and len(word) > 3:
        random.shuffle(letters)
        scrambled = "".join(letters)

    return scrambled


def play_round(word, hint, score, streak):
    attempts = 3
    scrambled = scramble_word(word)

    print("\n" + "-" * 50)
    print(f"Scrambled word: {scrambled.upper()}")
    print(f"Hint: {hint}")
    print(f"Attempts: {attempts}")

    while attempts > 0:
        guess = input("\nYour guess: ").strip().lower()

        if not guess.isalpha():
            print("Please enter letters only.")
            continue

        if guess == word:
            points = attempts * 10 + streak * 5
            print(f"Correct! The word was {word.upper()}.")
            print(f"You earned {points} points.")
            return score + points, streak + 1

        attempts -= 1
        if attempts > 0:
            print(f"Not quite. Attempts left: {attempts}")

    print(f"Out of attempts! The word was {word.upper()}.")
    return score, 0


def main():
    print("=" * 50)
    print("WELCOME TO WORD SCRAMBLE GAME")
    print("=" * 50)
    print("Unscramble each word. You get 3 attempts per round.")
    print("Type 'quit' between rounds to stop playing.")

    score = 0
    streak = 0
    words = WORDS[:]
    random.shuffle(words)

    while True:
        if not words:
            words = WORDS[:]
            random.shuffle(words)

        word, hint = words.pop()
        score, streak = play_round(word, hint, score, streak)

        print("\n" + "=" * 50)
        print(f"Score: {score}")
        print(f"Current streak: {streak}")
        print("=" * 50)

        choice = input("\nPress Enter for next word or type 'quit': ").strip().lower()
        if choice == "quit":
            break

    print("\nThanks for playing Word Scramble!")
    print(f"Final score: {score}")


if __name__ == "__main__":
    main()
