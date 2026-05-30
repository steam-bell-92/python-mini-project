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

while True:
    print("🤖 REVERSE HANGMAN 🤖")
    print("=" * 40)
    print("The computer will try to guess your word.")
    print("Choose any valid word from the dictionary.")
    print("The AI uses elimination logic and letter frequency.\n")

    print("DICTIONARY PREVIEW:", ", ".join(WORDS[:5]) + " ...")

    while True:
        target_word = input("\n📝 Enter your target word: ").lower().strip()
        if not target_word.isalpha():
            print("⚠️ Invalid input. Please enter letters only.")
            continue
        if target_word not in WORDS:
            print("⚠️ Word not found in the dictionary.")
            continue
        break

    print("\n🚀 REVERSE HANGMAN STARTED!!!\n")
    pattern = "_" * len(target_word)
    guessed_letters = set()
    wrong_letters = set()
    attempts_left = MAX_ATTEMPTS
    print("🔍 Analyzing the word...\n")

    while attempts_left > 0 and "_" in pattern:
        # Get possible words
        possible_words = []
        if len(target_word) in WORDS_BY_LENGTH:
            for word in WORDS_BY_LENGTH[len(target_word)]:
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

        # Choose best letter
        frequency = {}
        for word in possible_words:
            for letter in set(word):
                if letter not in guessed_letters:
                    frequency[letter] = frequency.get(letter, 0) + 1
        
        if not frequency:
            remaining = [c for c in string.ascii_lowercase if c not in guessed_letters]
            guess = random.choice(remaining) if remaining else 'a'
        else:
            guess = max(frequency, key=frequency.get)

        guessed_letters.add(guess)
        print(f"🤖 Computer guesses: {guess.upper()}")

        if guess in target_word:
            print("✅ Correct guess!")
            # Update pattern
            pattern_list = list(pattern)
            for i in range(len(target_word)):
                if target_word[i] == guess:
                    pattern_list[i] = guess
            pattern = "".join(pattern_list)
        else:
            print("❌ Wrong guess!")
            wrong_letters.add(guess)
            attempts_left -= 1
            
        print("🔤 Current word:", " ".join(pattern).upper())
        print("❤️ Attempts left:", attempts_left)
        print("\n" + "-"*30 + "\n")

    if "_" not in pattern:
        print("🎉 Computer successfully guessed your word!!!")
    else:
        print("💀 Computer failed to guess the word.")
        
    print(f"💡 Your target word was: {target_word.upper()}")

    while True:
        choice = input("\n🔄 Wanna play again? (y/n): ").lower().strip()
        if choice in ['y', 'yes', 'n', 'no']:
            break
        print("⚠️ Invalid choice. Enter 'y' or 'n'.")
        
    if choice in ['n', 'no']:
        print("👋 Thanks for playing Reverse Hangman!")
        break
