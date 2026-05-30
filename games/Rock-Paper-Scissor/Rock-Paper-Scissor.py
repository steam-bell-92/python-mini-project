import random

user_score = 0
computer_score = 0
rounds_played = 0

choices = ["rock", "paper", "scissors"]
beaten_by = {"rock": "paper", "paper": "scissors", "scissors": "rock"}

player_history = []
HISTORY_CAP = 20
MIN_ADAPTIVE = 3
ADAPT_RATE = 0.70

print("Welcome to Rock, Paper, Scissors!")
print("The computer will learn your patterns and adapt — good luck! 🧠")

while True:
    rounds_played += 1
    print(f"\n--- Round {rounds_played} ---")

    # Get user move
    user_choice = ""
    while user_choice not in choices:
        user_choice = input("Enter your choice (rock, paper, or scissors): ").lower()
        if user_choice not in choices:
            print("Invalid choice. Please choose rock, paper, or scissors.")

    # AI decision logic
    n = len(player_history)
    predicted = None
    confidence = None
    mode = "learning"

    if n >= MIN_ADAPTIVE:
        # Get move frequencies
        freq = {"rock": 0, "paper": 0, "scissors": 0}
        for move in player_history:
            freq[move] += 1
        
        # Get markov transitions
        last_move = player_history[-1]
        trans = {"rock": 0, "paper": 0, "scissors": 0}
        for i in range(n - 1):
            if player_history[i] == last_move:
                trans[player_history[i + 1]] += 1
                
        total_trans = sum(trans.values())
        
        if total_trans > 0:
            blended = {}
            for c in choices:
                blended[c] = (0.6 * trans[c] / total_trans) + (0.4 * freq[c] / n)
            predicted = max(blended, key=blended.get)
            confidence = round(blended[predicted] * 100)
        else:
            predicted = max(freq, key=freq.get)
            confidence = round(freq[predicted] / n * 100)

    # Choose computer move
    if predicted is None:
        computer_choice = random.choice(choices)
        mode = "learning"
    else:
        if random.random() < ADAPT_RATE:
            computer_choice = beaten_by[predicted]
            mode = "adaptive"
        else:
            computer_choice = random.choice(choices)
            mode = "random"

    # Display AI Brain info
    if n >= MIN_ADAPTIVE and predicted is not None:
        # Get fav
        freq = {"rock": 0, "paper": 0, "scissors": 0}
        for move in player_history:
            freq[move] += 1
        fav = max(freq, key=freq.get)
        
        print(f"\n  🧠 Computer Brain [{mode.upper()}]")
        print(f"     Your favourite move  : {fav}")
        print(f"     Predicted your move  : {predicted} ({confidence}% confidence)")
        print(f"     Computer chose       : {computer_choice}")
    else:
        remaining = MIN_ADAPTIVE - n
        if remaining > 0:
            print(f"\n  🧠 Computer Brain [LEARNING] — observing for {remaining} more move(s)...")
        print(f"  Computer chose: {computer_choice}")

    # Record history
    player_history.append(user_choice)
    if len(player_history) > HISTORY_CAP:
        player_history.pop(0)

    # Determine winner
    if user_choice == computer_choice:
        print("It's a Tie! 🤝")
    elif beaten_by[computer_choice] == user_choice:
        print("You Win this round! 🎉")
        user_score += 1
    else:
        print("Computer Wins this round! 🤖")
        computer_score += 1

    # Display stats
    print("\n--- Game Statistics ---")
    print(f"Rounds Played  : {rounds_played}")
    print(f"Your Score     : {user_score}")
    print(f"Computer Score : {computer_score}")
    if player_history:
        freq = {"rock": 0, "paper": 0, "scissors": 0}
        for move in player_history:
            freq[move] += 1
        fav = max(freq, key=freq.get)
        pct = round(freq[fav] / len(player_history) * 100)
        print(f"Your Favourite : {fav} ({pct}% of plays)")

    play_again_input = input("Do you want to play again? (yes/no): ").lower()
    if play_again_input != "yes":
        print("\nThanks for playing! Final results:")
        print("\n--- Game Statistics ---")
        print(f"Rounds Played  : {rounds_played}")
        print(f"Your Score     : {user_score}")
        print(f"Computer Score : {computer_score}")
        if player_history:
            freq = {"rock": 0, "paper": 0, "scissors": 0}
            for move in player_history:
                freq[move] += 1
            fav = max(freq, key=freq.get)
            pct = round(freq[fav] / len(player_history) * 100)
            print(f"Your Favourite : {fav} ({pct}% of plays)")

        name = input("Enter your name to save the results (optional): ")
        if not name:
            name = "Anonymous"
        result_string = (
            f"Player: {name}, Final Score: {user_score} - {computer_score} "
            f"(User-Computer), Rounds: {rounds_played}\n"
        )
        try:
            with open("game_results.txt", "a") as f:
                f.write(result_string)
            print("Game results saved successfully.")
        except IOError:
            print("Error: Could not save game results to file.")
        break