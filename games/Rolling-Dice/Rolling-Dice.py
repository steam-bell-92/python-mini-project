import random


def main():
    print("🎲 Dice Rolling Game! 🎲")
    print("Roll two dice and see what you get!\n")

    dice_emoji = {
        1: '⚀',
        2: '⚁',
        3: '⚂',
        4: '⚃',
        5: '⚄',
        6: '⚅'
    }


    while True:
        choice = input("🎲 Roll the dice? (y/n): ").lower()

        if choice == "y":
            num1 = random.randint(1, 6)
            num2 = random.randint(1, 6)
            print(f"\n🎲 Rolling...")
            print(f"Dice 1: {num1} {dice_emoji[num1]}")
            print(f"Dice 2: {num2} {dice_emoji[num2]}")
            print(f"📊 Total: {num1 + num2}\n")

        elif choice == "n":
            print("\n👋 Thanks for playing! See you next time!\n")
            break

        else:
            print("❌ Invalid input!! Please enter 'y' or 'n'.\n")

if __name__ == '__main__':
    main()
