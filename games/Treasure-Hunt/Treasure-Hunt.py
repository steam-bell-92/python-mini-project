import random

print("🏴‍☠️ TREASURE HUNT 🏴‍☠️")
print("Find the hidden treasure before you run out of attempts!\n")

treasure = random.randint(1, 5)

attempts = 3

while attempts > 0:

    print(f"🗺️ Locations: 1  2  3  4  5")
    choice = input("📍 Choose a location (1-5): ")

    if not choice.isdigit():
        print("❌ Please enter a number!\n")
        continue

    choice = int(choice)

    if choice < 1 or choice > 5:
        print("⚠️ Choose a number between 1 and 5!\n")
        continue

    if choice == treasure:
        print("\n💰 YOU FOUND THE TREASURE! 💰")
        print("🏆 Congratulations, Captain!\n")
        break

    attempts -= 1

    if attempts > 0:
        print(f"❌ No treasure here!")
        print(f"❤️ Attempts left: {attempts}\n")

else:
    print("\n☠️ Game Over!")
    print(f"💎 The treasure was hidden at location {treasure}")

print("\n👋 Thanks for playing Treasure Hunt!")