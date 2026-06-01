import random

while True:
    print("\n" + "="*40)
    print("🃏 WELCOME TO BLACKJACK 21 🃏")
    print("="*40 + "\n")

    deck = [
        "A♠️", "2♠️", "3♠️", "4♠️", "5♠️", "6♠️", "7♠️", "8♠️", "9♠️", "10♠️", "J♠️", "Q♠️", "K♠️",
        "A♥️", "2♥️", "3♥️", "4♥️", "5♥️", "6♥️", "7♥️", "8♥️", "9♥️", "10♥️", "J♥️", "Q♥️", "K♥️",
        "A♦️", "2♦️", "3♦️", "4♦️", "5♦️", "6♦️", "7♦️", "8♦️", "9♦️", "10♦️", "J♦️", "Q♦️", "K♦️",
        "A♣️", "2♣️", "3♣️", "4♣️", "5♣️", "6♣️", "7♣️", "8♣️", "9♣️", "10♣️", "J♣️", "Q♣️", "K♣️"
    ]
    random.shuffle(deck)

    player_cards = []
    player_hand = []
    dealer_cards = []
    dealer_hand = []

    # Initial Draw
    for _ in range(2):
        # Player draw
        card = deck.pop()
        player_cards.append(card)
        rank = card[:-2]
        if rank in ['Q','K','J']:
            player_hand.append(10)
        elif rank == 'A':
            player_hand.append(1)
        else:
            player_hand.append(int(rank))

        # Dealer draw
        card = deck.pop()
        dealer_cards.append(card)
        rank = card[:-2]
        if rank in ['Q','K','J']:
            dealer_hand.append(10)
        elif rank == 'A':
            dealer_hand.append(1)
        else:
            dealer_hand.append(int(rank))

    # Calculate player score initially
    player_count = sum(player_hand)
    aces = player_hand.count(1)
    while aces > 0 and player_count + 10 <= 21:
        player_count += 10
        aces -= 1

    # Main Player Loop
    player_bust = False
    while True:
        print(f"🃏 Dealer's visible card: {dealer_cards[0]}")
        print(f"🃏 Your cards: {', '.join(player_cards)} (Score: {player_count})")
        
        choice = input("👉 Hit or Stand? [h/s]: ").strip().lower()

        if choice in ['h', 'hit']:
            card = deck.pop()
            player_cards.append(card)
            rank = card[:-2]
            if rank in ['Q','K','J']:
                player_hand.append(10)
            elif rank == 'A':
                player_hand.append(1)
            else:
                player_hand.append(int(rank))
            
            player_count = sum(player_hand)
            aces = player_hand.count(1)
            while aces > 0 and player_count + 10 <= 21:
                player_count += 10
                aces -= 1
                
            if player_count > 21:
                print(f"🃏 Your cards: {', '.join(player_cards)} (Score: {player_count})")
                print("💥 BUST! You went over 21. Dealer wins!")
                player_bust = True
                break
        elif choice in ['s', 'stand']:
            print("🛑 You chose to stand.")
            break
        else:
            print("⚠️ Invalid choice. Please enter 'hit' or 'stand'.")

    # Dealer Turn
    if not player_bust:
        dealer_count = sum(dealer_hand)
        aces = dealer_hand.count(1)
        while aces > 0 and dealer_count + 10 <= 21:
            dealer_count += 10
            aces -= 1
            
        print(f"\n🃏 Dealer's full cards: {', '.join(dealer_cards)} (Score: {dealer_count})")
        
        while dealer_count < 17:
            print("🃏 Dealer hits...")
            card = deck.pop()
            dealer_cards.append(card)
            rank = card[:-2]
            if rank in ['Q','K','J']:
                dealer_hand.append(10)
            elif rank == 'A':
                dealer_hand.append(1)
            else:
                dealer_hand.append(int(rank))
                
            dealer_count = sum(dealer_hand)
            aces = dealer_hand.count(1)
            while aces > 0 and dealer_count + 10 <= 21:
                dealer_count += 10
                aces -= 1
            print(f"🃏 Dealer's cards: {', '.join(dealer_cards)} (Score: {dealer_count})")

        # Determine Winner
        print("\n" + "-"*30)
        print("🎯 FINAL RESULTS 🎯")
        print(f"🧑 Your Score: {player_count}")
        print(f"🤖 Dealer Score: {dealer_count}")
        print("-"*30)

        if dealer_count > 21:
            print("🎉 DEALER BUSTED! YOU WIN! 🎉")
        elif player_count == dealer_count:
            print("🤝 IT'S A DRAW! 🤝")
        elif player_count > dealer_count:
            print("🏆 YOU WIN! 🏆")
        else:
            print("💸 DEALER WINS! 💸")

    # Replay loop
    while True:
        replay = input("\n🔄 Play again? [y/n]: ").strip().lower()
        if replay in ['y', 'yes', 'n', 'no']:
            break
        print("⚠️ Invalid input. Please enter 'y' or 'n'.")
    
    if replay in ['n', 'no']:
        print("👋 Thanks for playing! Goodbye!")
        break
