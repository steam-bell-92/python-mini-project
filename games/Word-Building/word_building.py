import random, time, enchant
import data

def WordCheck(word):
    d = enchant.Dict('en_US')
    if d.check(word):
        return True
    else:
        return False
    
def botTurn(letter, used_words):
    import data
    word = None
    try:
        available = [w for w in data.words.get(letter, []) if w not in used_words]
        if available:
            word = random.choice(available)
    except (AttributeError, KeyError) as e:
        print(f"⚠️ Warning: Bot encountered a dictionary matching issue: {e}")
    return word

def Main():
    # Welcome message and instructions
    print("🎮 Welcome to Word Building! 🎮")
    print('''🪙 bot(computer) will start with a word, you will give a word that starts with the last letter of bot's word, 
and bot will have to give a word that starts with the last letter of your word. 
The game will continue until one of you can't think of a word or gives an invalid word. You should not repeat words. \n''')
    time.sleep(5)

    user_word = None
    bot_word = None
    used_words = set()
    win = False

    # Game loop
    while True:
        # User input and validation
        user_word = input("Your word: ")
        if (bot_word is not None) and (user_word[0].lower() != bot_word[-1].lower()):
            print("\nInvalid word! Your word must start with the last letter of bot's word.")
            win = False
            break
        if not WordCheck(user_word):
            print("\nInvalid word! Your word is not a valid English word.")
            win = False
            break
        if user_word in used_words:
            print("\nInvalid word! You have already used this word.")
            win = False
            break
        used_words.add(user_word)
        
        # Add user's word to the data if it's not already there
        if user_word not in data.words[user_word[0]]:
            data.DataAdding(user_word)
        time.sleep(1)

        # Bot's turn
        bot_word = botTurn(user_word[-1].lower(), used_words)
        if bot_word is None:
            print("\nBot can't think of a word!")
            win = True
            break
        used_words.add(bot_word)
        print(f"Bot's word: {bot_word}")


    # End of game message
    if win:
        print("\nCongratulations! You win! 🎉")
    else:
        print("\nGame over! Bot wins! 🤖")

if __name__ == "__main__":
    Main()