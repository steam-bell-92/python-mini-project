print("🐦‍🔥 PRODUCTIVITY PET 🐦‍🔥")
print("Track your tasks and hatch your pet!\n")

import random

while True:
    user = input("➡️ Did you complete your tasks today? (yes/no): ").lower().strip()

    if user in ["yes", "yeah", "yep"]:
        while True:
            count = input("📝 How many tasks were in your list? ").strip()

            if not count.isdigit() or int(count) <= 0:
                print("⚠️ Please enter a valid number.\n")
                continue

            count = int(count)
            tasks = []
            for i in range(count):

                while True:
                    task = input(f"   Task {i+1}: ").strip()

                    if not task:
                        print("⚠️ Task name cannot be empty.")
                        continue

                    tasks.append(task)
                    break
            
            while True:

                done = input("✅ How many did you complete? ").strip()

                if not done.isdigit():
                    print("⚠️ Please enter a valid number.\n")
                    continue

                done = int(done)

                if done < 0 or done > count:
                    print("⚠️ That doesn't seem right. Try again.\n")
                    continue

                break

            percentage = (done / count) * 100
            print(f"\n📊 Progress: {percentage:.1f}%")

            pets = ["🐦", "🐧", "🦇", "🦤", "🦆", "🦅"]
            pet = random.choice(pets)

            if percentage < 50:
                print("😔 The pet didn't hatch. Current stage: 🥚")
                print("💡 Try completing more tasks tomorrow!\n")
            elif percentage < 80:
                print("🐣 Getting there! Current stage: 🐣")
                print("💪 Almost hatched — keep going!\n")
            else:
                print(f"🎉 Congratulations! Your pet hatched: {pet}")
                print("🏆 Amazing work today!\n")

            break

    elif user in ["no", "nope", "nah"]:
        print("💬 No worries! Come back when you're done.\n")

    else:
        print("⚠️ Please answer yes or no.\n")
        continue

    again = input("🔄 Track another day? (y/n): ").lower().strip()
    if again != "y":
        break

print("\n👋 Thanks for using Productivity Pet! Keep hatching! 🐦‍🔥\n")
