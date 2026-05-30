import random
import time
import os

while True:
    print("\n" + "=" * 50)
    print("🔥 FLAMES GAME - FIND YOUR RELATIONSHIP STATUS! 🔥")
    print("=" * 50)
    print("\nF - Friends 🤝")
    print("L - Love ❤️")
    print("A - Affection 😊")
    print("M - Marriage 💍")
    print("E - Enemies 😈")
    print("S - Siblings 🏠")
    print("=" * 50)

    # Get first name
    while True:
        name1 = input("\nEnter first name: ").strip().lower().replace(" ", "")
        if name1.isalpha():
            break
        print("⚠️ Error: Name must contain only alphabets and cannot be empty! Please try again.")

    # Get second name
    while True:
        name2 = input("Enter second name: ").strip().lower().replace(" ", "")
        if name2.isalpha():
            break
        print("⚠️ Error: Name must contain only alphabets and cannot be empty! Please try again.")

    original_name1 = name1
    original_name2 = name2

    name1_list = list(name1)
    name2_list = list(name2)

    for char in name1_list[:]:
        if char in name2_list:
            name1_list.remove(char)
            name2_list.remove(char)

    count = len(name1_list) + len(name2_list)

    # FIX: Use a flag to track if we should calculate the game results
    valid_game = True

    if count == 0:
        print("\n" + "=" * 50)
        print("🚨 DEGENERATE CASE DETECTED! 🚨")
        print("=" * 50)
        print("\nThese names share all letters! FLAMES is undefined.")
        print("Please try with different names for a meaningful result.")
        print("=" * 50)
        valid_game = False  # Set flag to False so we skip the game calculation

    # Only run game calculations if it's a valid match
    if valid_game:
        total_len = len(original_name1) + len(original_name2)
        matched_chars = total_len - count
        score = 30 + round((matched_chars / total_len) * 70) if total_len > 0 else 0

        print(f"\nAfter removing common letters:")
        print(f"Remaining letters: {count}")

        flames = ['F', 'L', 'A', 'M', 'E', 'S']
        index = 0
        while len(flames) > 1:
            index = (index + count - 1) % len(flames)
            flames.pop(index)

        result = flames[0]

        mapping = {
            'F': {"rel": "Friends", "emoji": "🤝", "metric": "Bond Strength"},
            'L': {"rel": "Love", "emoji": "❤️", "metric": "Compatibility Score"},
            'A': {"rel": "Affection", "emoji": "😊", "metric": "Crush Intensity"},
            'M': {"rel": "Marriage", "emoji": "💍", "metric": "Marital Bliss"},
            'E': {"rel": "Enemies", "emoji": "😈", "metric": "Rivalry Quotient"},
            'S': {"rel": "Siblings", "emoji": "🏠", "metric": "Nuisance Factor"}
        }
        final = mapping[result]

        print("\n" + "=" * 50)
        print("📝 MATCH REPORT CARD")
        print("=" * 50)
        print(f"\nNames: {original_name1.capitalize()} & {original_name2.capitalize()}")
        print(f"Status: {final['emoji']} {final['rel'].upper()} {final['emoji']}")
        print(f"{final['metric']}: {score}%")
        print("\n" + "=" * 50)
        
        share_text = (f"✨ FLAMES Match Report ✨\n"
                      f"{original_name1.capitalize()} + {original_name2.capitalize()}\n"
                      f"Result: {final['rel']} {final['emoji']}\n"
                      f"{final['metric']}: {score}%")

        print("📋 COPY TO SHARE:")
        print(share_text)
        print("=" * 50)

    # The loop safely lands here now, even for degenerate cases!
    while True:
        choice = input("\n🔄 Do you want to play again? (y/n): ").lower().strip()
        if choice in ('y', 'yes', 'n', 'no'):
            break
        print("⚠️ Invalid choice. Please enter 'y' or 'n'.")

    if choice in ('n', 'no'):
        print("\n👋 Thanks for playing FLAMES! Goodbye!")
        break