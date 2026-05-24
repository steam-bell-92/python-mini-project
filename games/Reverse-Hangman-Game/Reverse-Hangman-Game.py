import random
import string

MAX_ATTEMPTS = 8

WORDS = [ "karate", "judo", "taekwondo", "aikido", "kungfu", "muaythai", "capoeira", "boxing", "python", "javascript", "algorithm", "compiler", "debugger", "recursion", "variable", "function", "database", "network", "kernel", "encryption", "github", "docker", "linux", "server", "cloud", "runtime", "binary", "pointer", "thread", "naruto", "sasuke", "goku", "luffy", "zoro", "gojo", "tanjiro", "levi", "eren", "light", "lelouch", "pikachu" ]

WORDS_BY_LENGTH = {}

for word in WORDS:
    length = len(word)
    if length not in WORDS_BY_LENGTH:
        WORDS_BY_LENGTH[length] = []
    WORDS_BY_LENGTH[length].append(word)


def display_intro():
    print("REVERSE HANGMAN")
    print("=" * 40)
    print("The computer will try to guess your word.")
    print("Choose any valid word from the dictionary.")
    print("The AI uses elimination logic and letter frequency.\n")


def get_secret_word():
    while True:
        word = input("Enter your secret word: ").lower().strip()
        if not word.isalpha():
            print("Invalid input. Please enter letters only.")
            continue
        if word not in WORDS:
            print("Word not found in the dictionary.")
            continue
        return word


def get_possible_words(pattern, guessed_letters, wrong_letters):
    possible_words = []

    for word in WORDS_BY_LENGTH[len(pattern)]:
        valid = True
        for i in range(len(word)):
            if pattern[i] != "_" and word[i] != pattern[i]:
                valid = False
                break

            if pattern[i] == "_" and word[i] in guessed_letters:
                valid = False
                break
        if valid:
            for letter in wrong_letters:
                if letter in word:
                    valid = False
                    break
        if valid:
            possible_words.append(word)
    return possible_words

def choose_best_letter(possible_words, guessed_letters):
    frequency = {}

    for word in possible_words:
        for letter in set(word):
            if letter not in guessed_letters:
                frequency[letter] = frequency.get(letter, 0) + 1
    if not frequency:
        remaining = [c for c in string.ascii_lowercase if c not in guessed_letters]
        return random.choice(remaining)
    return max(frequency, key=frequency.get)


def update_pattern(secret_word, pattern, guess):
    pattern = list(pattern)
    for i in range(len(secret_word)):
        if secret_word[i] == guess:
            pattern[i] = guess
    return "".join(pattern)


def play_game():
    print("\nREVERSE HANGMAN STARTED!!!\n")
    secret_word = get_secret_word()
    pattern = "_" * len(secret_word)
    guessed_letters = set()
    wrong_letters = set()
    attempts_left = MAX_ATTEMPTS
    print("Analyzing the word...\n")

    while attempts_left > 0 and "_" in pattern:
        possible_words = get_possible_words(pattern, guessed_letters, wrong_letters)
        guess = choose_best_letter(possible_words, guessed_letters)
        guessed_letters.add(guess)
        print("Computer guesses:", guess)

        if guess in secret_word:
            print("Correct guess")
            pattern = update_pattern(secret_word, pattern, guess)
        else:
            print("Wrong guess")
            wrong_letters.add(guess)
            attempts_left -= 1
        print("Current word:", " ".join(pattern))
        print("Attempts left:", attempts_left)
        print("\n")

    if "_" not in pattern:
        print("Computer successfully guessed your word!!!")
    else:
        print("Computer failed to guess the word.")
    print("Your secret word was:", secret_word)


while True:
    play_game()
    choice = input("Wanna play again? (y/n): ").lower().strip()
    if choice != "y":
        print("Thanks for playing Reverse Hangman!")
        break
