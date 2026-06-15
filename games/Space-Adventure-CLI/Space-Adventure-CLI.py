import random

print("🚀 SPACE ADVENTURE CLI 🚀")
print("Explore planets, survive dangers, and find treasure!\n")

health = 100
fuel = 100
score = 0

while True:

    print("\n" + "=" * 40)
    print(f"❤️ Health : {health}")
    print(f"⛽ Fuel   : {fuel}")
    print(f"🏆 Score  : {score}")
    print("=" * 40)

    if health <= 0:
        print("\n💀 Your ship was destroyed!")
        break

    if fuel <= 0:
        print("\n⛽ You ran out of fuel!")
        break

    print("\nChoose an action:")
    print("1. 🌍 Explore Planet")
    print("2. 🔍 Scan Space")
    print("3. 🚪 Exit Game")

    choice = input("\n🎯 Enter your choice: ")

    if choice == "1":

        fuel -= 10

        print("\n🚀 Traveling to a new planet...")

        event = random.randint(1, 4)

        if event == 1:
            print("👾 Alien Attack!")
            damage = random.randint(10, 25)
            health -= damage
            print(f"❌ Lost {damage} health.")

        elif event == 2:
            print("💎 You found a treasure chest!")
            points = random.randint(10, 30)
            score += points
            print(f"🏆 Gained {points} points.")

        elif event == 3:
            print("✨ You discovered energy crystals!")
            health += 10

            if health > 100:
                health = 100

            print("❤️ Health restored by 10.")

        else:
            print("🌌 The planet was empty.")

    elif choice == "2":

        discoveries = [
            "☄️ Asteroid field detected.",
            "🛰️ Abandoned satellite found.",
            "🪐 New planet discovered.",
            "📡 Strange signal received."
        ]

        print("\n🔍 Scanning space...")
        print(random.choice(discoveries))

    elif choice == "3":
        print("\n👋 Thanks for playing!")
        break

    else:
        print("❌ Invalid choice.")

print(f"\n🏆 Final Score: {score}")
print("🚀 Mission Complete!")