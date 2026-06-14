import random

def main():
    # Cleaned up global variables (not strictly necessary unless modifying in nested scopes, but kept for your structure)
    global all_guessed, attempts, correct_letters, display, guess, guessed_letters, hint, letter, max_attempts, selected, won, word, word_data, word_length
    
    print("=" * 50)
    print("WELCOME TO HANGMAN GAME")
    print("=" * 50)

    word_data = [
        {"word": "python", "hint": "Programming language 🐍"},
        {"word": "java", "hint": "Popular object-oriented programming language"},
        {"word": "computer", "hint": "Electronic machine that processes data"},
        {"word": "keyboard", "hint": "Used to type input ⌨️"},
        {"word": "monitor", "hint": "Displays output on screen 🖥️"},
        {"word": "mouse", "hint": "Pointing device 🖱️"},
        {"word": "internet", "hint": "Global network 🌐"},
        {"word": "network", "hint": "Connected computers"},
        {"word": "database", "hint": "Stores structured data"},
        {"word": "algorithm", "hint": "Step-by-step problem-solving method"},
        {"word": "tiger", "hint": "Animal 🐾 with stripes"},
        {"word": "elephant", "hint": "Largest land animal"},
        {"word": "giraffe", "hint": "Tall animal with long neck"},
        {"word": "lion", "hint": "King of jungle"},
        {"word": "zebra", "hint": "Black and white striped animal"},
        {"word": "apple", "hint": "Fruit 🍎 keeps doctor away"},
        {"word": "banana", "hint": "Yellow fruit 🍌"},
        {"word": "mango", "hint": "King of fruits 🥭"},
        {"word": "grapes", "hint": "Small round fruit 🍇"},
        {"word": "orange", "hint": "Citrus fruit 🍊"},
        {"word": "india", "hint": "Country 🇮🇳 in South Asia"},
        {"word": "china", "hint": "Most populated country"},
        {"word": "brazil", "hint": "Country famous for Amazon rainforest"},
        {"word": "canada", "hint": "Country with maple leaf 🍁"},
        {"word": "japan", "hint": "Land of rising sun 🌅"},
        {"word": "school", "hint": "Place to study 📚"},
        {"word": "teacher", "hint": "Person who teaches"},
        {"word": "student", "hint": "Person who learns"},
        {"word": "library", "hint": "Place with books"},
        {"word": "college", "hint": "Higher education institute"},
        {"word": "football", "hint": "Sport ⚽ played worldwide"},
        {"word": "cricket", "hint": "Popular sport in India 🏏"},
        {"word": "tennis", "hint": "Played with racket 🎾"},
        {"word": "hockey", "hint": "India's national sport"},
        {"word": "badminton", "hint": "Played with shuttlecock"},
        {"word": "doctor", "hint": "Treats patients 🩺"},
        {"word": "engineer", "hint": "Builds and designs systems"},
        {"word": "artist", "hint": "Creates paintings 🎨"},
        {"word": "lawyer", "hint": "Works with law ⚖️"},
        {"word": "chef", "hint": "Cooks food 👨‍🍳"},
        {"word": "mobile", "hint": "Used for calling 📱"},
        {"word": "laptop", "hint": "Portable computer 💻"},
        {"word": "camera", "hint": "Used to take photos 📷"},
        {"word": "speaker", "hint": "Outputs sound 🔊"},
        {"word": "battery", "hint": "Stores power 🔋"},
        {"word": "rain", "hint": "Water falling from sky 🌧️"},
        {"word": "summer", "hint": "Hot season ☀️"},
        {"word": "winter", "hint": "Cold season ❄️"},
        {"word": "cloud", "hint": "White thing in sky ☁️"},
        {"word": "storm", "hint": "Strong wind and rain"}
    ]

    selected = random.choice(word_data)
    word = selected["word"]
    hint = selected["hint"]
    word_length = len(word)

    guessed_letters = []
    correct_letters = []
    max_attempts = 6
    attempts = 0
    won = False

    print(f"\nThe word has {word_length} letters.")
    print(f"Hint: {hint}")
    print(f"You have {max_attempts} attempts to guess the word.\n")

    while attempts < max_attempts and not won:
        # 1. Update and show the current word progress
        display = ""
        for letter in word:
            if letter in correct_letters:
                display += letter + " "
            else:
                display += "_ "
    
        print(f"Word: {display}")
        
        # 2. CHECK WIN CONDITION HERE BEFORE ASKING FOR A NEW GUESS
        # If there are no more underscores left, the player has won!
        if "_" not in display:
            won = True
            break

        print(f"Attempts remaining: {max_attempts - attempts}")
        print(f"Guessed letters: {', '.join(guessed_letters) if guessed_letters else 'None'}")
    
        guess = input("\nGuess a letter: ").lower()
    
        if len(guess) != 1 or not guess.isalpha():
            print("Please enter a single letter!")
            print("-" * 50)
            continue
    
        if guess in guessed_letters:
            print("You already guessed that letter!")
            print("-" * 50)
            continue
    
        guessed_letters.append(guess)
    
        if guess in word:
            print(f"✓ Correct! '{guess}' is in the word.")
            correct_letters.append(guess)
        else:
            print(f"✗ Wrong! '{guess}' is not in the word.")
            attempts += 1
    
        print("-" * 50)

    # Endgame sequence
    print("\n" + "=" * 50)
    if won:
        print("🎉 CONGRATULATIONS! YOU WON LIGHTNING FAST!")
        print(f"The word was: {word}")
        print(f"You guessed it with {max_attempts - attempts} attempts remaining!")
    else:
        print("😔 GAME OVER! YOU LOST!")
        print(f"The word was: {word}")
    print("=" * 50)

if __name__ == '__main__':
    main()