import random


print("🪙 Coin Flip Game! 🪙\n")

while True:
    choice = input("Toss a coin? (y/n): ").lower()
    num = random.randint(1, 2)

    if choice == "y":
        print("🪙 Flipping...")
        if num == 1:
            print("👑 Heads!!\n")
        else:
            print("🦅 Tails!!\n")

    elif choice == "n":
        print("👋 Thanks for playing! See you next time!\n")
        break

    else:
        print("❌ Invalid input!! Please enter 'y' or 'n'.\n")