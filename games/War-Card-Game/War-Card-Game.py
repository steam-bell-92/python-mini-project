import random

while True:
    print("\n===== Welcome to War Card Game =====\n")

    name1 = input("Enter Player 1 Name: ").strip() or "Player 1"
    name2 = input("Enter Player 2 Name: ").strip() or "Player 2"

    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    ranks = {
        "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
        "Jack": 11, "Queen": 12, "King": 13, "Ace": 14
    }

    deck = []
    for suit in suits:
        for rank_name, rank_value in ranks.items():
            deck.append({"suit": suit, "rank": rank_name, "value": rank_value})

    random.shuffle(deck)
    mid = len(deck) // 2
    cards1 = deck[:mid]
    cards2 = deck[mid:]

    score1 = 0
    score2 = 0

    print("\nDeck shuffled successfully!")
    print("Cards distributed equally to both players.\n")

    round_number = 1

    while cards1 and cards2:
        choice = input(f"\nDo you want to play Round {round_number}? (yes/no): ").lower().strip()
        
        if choice not in ["yes", "y"]:
            print("\nGame stopped by user.")
            break

        card1 = cards1.pop(0)
        card2 = cards2.pop(0)

        print(f"\n========== Round {round_number} ==========")
        print(f"{name1} draws: {card1['rank']} of {card1['suit']}")
        print(f"{name2} draws: {card2['rank']} of {card2['suit']}")

        if card1['value'] > card2['value']:
            score1 += 1
            print(f"🏆 Round Winner: {name1}")
        elif card2['value'] > card1['value']:
            score2 += 1
            print(f"🏆 Round Winner: {name2}")
        else:
            print("🤝 It's a Tie!")

        print(f"Current Score -> {name1}: {score1} | {name2}: {score2}")

        round_number += 1

    print("\n========== Final Result ==========")
    print(f"{name1}: {score1} points\n{name2}: {score2} points")

    if score1 > score2:
        print(f"\n🏆 {name1} wins the game!")
    elif score2 > score1:
        print(f"\n🏆 {name2} wins the game!")
    else:
        print("\n🤝 The game ends in a Tie!")

    while True:
        replay = input("\n🔄 Play again? (y/n): ").strip().lower()
        if replay in ['y', 'yes', 'n', 'no']:
            break
        print("⚠️ Invalid input. Enter 'y' or 'n'.")
    
    if replay in ['n', 'no']:
        print("👋 Thanks for playing War Card Game!")
        break