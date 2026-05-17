import random


num1 = random.randint(1, 100)

print("🎮 Welcome to the Number Guessing Game! 🎮")
print("I'm thinking of a number between 1 and 100...\n")

while True:
    try:
        num = int(input("🤔 Guess the Number (1 - 100): "))
    except ValueError:
        print("⚠️ Oops! That doesn't look like a valid number. Please try again.\n")
        continue

    if (num >= 1) and (num <= 100):
        if num > num1:
            print("📈 Too High!! Try lower...\n")
        elif num < num1:
            print("📉 Too Low!! Try higher...\n")
        elif num == num1:
            print("🎉🎊 BINGO! You guessed the correct number! 🎊🎉")
            print(f"✨ The number was {num1} ✨")
            break
    else:
        print("❌ INVALID INPUT!! Please enter a number between 1 and 100.\n")