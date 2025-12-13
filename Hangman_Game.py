import random

print("=" * 50)
print("WELCOME TO HANGMAN GAME")
print("=" * 50)

words = ['python', 'programming', 'computer', 'algorithm', 'keyboard', 
         'monitor', 'software', 'hardware', 'database', 'network',
         'internet', 'developer', 'variable', 'function', 'application']

word = random.choice(words)
word_length = len(word)

guessed_letters = []
correct_letters = []
max_attempts = 6
attempts = 0
won = False

print(f"\nThe word has {word_length} letters.")
print(f"You have {max_attempts} attempts to guess the word.\n")

while attempts < max_attempts and not won:
    display = ""
    for letter in word:
        if letter in correct_letters:
            display += letter + " "
        else:
            display += "_ "
    
    print(f"Word: {display}")
    print(f"Attempts remaining: {max_attempts - attempts}")
    print(f"Guessed letters: {', '.join(guessed_letters) if guessed_letters else 'None'}")
    
    guess = input("\nGuess a letter: ").lower()
    
    if len(guess) != 1 or not guess.isalpha():
        print("Please enter a single letter!")
        continue
    
    if guess in guessed_letters:
        print("You already guessed that letter!")
        continue
    
    guessed_letters.append(guess)
    
    if guess in word:
        print(f"✓ Correct! '{guess}' is in the word.")
        correct_letters.append(guess)
        
        all_guessed = True
        for letter in word:
            if letter not in correct_letters:
                all_guessed = False
                break
        
        if all_guessed:
            won = True
    else:
        print(f"✗ Wrong! '{guess}' is not in the word.")
        attempts += 1
    
    print("-" * 50)

print("\n" + "=" * 50)
if won:
    print("🎉 CONGRATULATIONS! YOU WON!")
    print(f"The word was: {word}")
    print(f"You guessed it with {max_attempts - attempts} attempts remaining!")
else:
    print("😔 GAME OVER! YOU LOST!")
    print(f"The word was: {word}")
print("=" * 50)
