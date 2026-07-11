import random
import time

def main():
    print("🪙 Coin Flip Game! 🪙\n")

    # Statistics Variables
    total_tosses = 0
    heads_count = 0
    tails_count = 0
    correct_predictions = 0

    while True:
        choice = input("Toss a coin? (y/n): ").lower().strip()

        if choice == "y":
            num = random.randint(1, 2)
            
            # Sub-loop for validating user prediction without resetting the game loop
            while True:
                prediction = input("Predict the result (H/T): ").lower().strip()

                if prediction in ["h", "t"]:
                    break
                print("❌ Invalid prediction!! Please enter 'H' or 'T'.\n")

            print("🪙 Flipping...")
            time.sleep(2)

            total_tosses += 1

            if num == 1:
                result = "h"
                heads_count += 1
                print("👑 Heads!!")
            else:
                result = "t"
                tails_count += 1
                print("🦅 Tails!!")

            # Check prediction
            if prediction == result:
                correct_predictions += 1
                print("🎉 Correct Prediction!\n")
            else:
                print("❌ Wrong Prediction!\n")

        elif choice == "n":
            print("👋 Thanks for playing! See you next time!\n")

            # Game Summary
            print("📊 GAME SUMMARY 📊")
            print(f"🪙 Total Tosses: {total_tosses}")
            print(f"👑 Heads Count: {heads_count}")
            print(f"🦅 Tails Count: {tails_count}")
            print(f"🎯 Correct Predictions: {correct_predictions}")

            # Prediction Accuracy
            if total_tosses > 0:
                accuracy = (correct_predictions / total_tosses) * 100
                print(f"📈 Prediction Accuracy: {accuracy:.2f}%")

            print("\n✨ Thanks for playing!")
            break

        else:
            print("❌ Invalid input!! Please enter 'y' or 'n'.\n")


if __name__ == '__main__':
    main()