import random
from pathlib import Path

RESULTS_FILE = Path(__file__).parent / "game_results.txt"
RESULTS_FILE.parent.mkdir(parents=True, exist_ok=True)


def parse_results():
    """Read game_results.txt and return a list of result dicts."""
    records = []
    if not RESULTS_FILE.exists():
        return records
    try:
        with open(RESULTS_FILE, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                # Expected format:
                # Player: <name>, Final Score: <wins> - <losses> (User-Computer), Rounds: <rounds>
                try:
                    player_part, rest = line.split(", Final Score: ", 1)
                    name = player_part.replace("Player: ", "").strip()
                    score_part, rounds_part = rest.split(" (User-Computer), Rounds: ", 1)
                    wins, losses = score_part.split(" - ", 1)
                    records.append({
                        "name": name,
                        "wins": int(wins.strip()),
                        "losses": int(losses.strip()),
                        "rounds": int(rounds_part.strip()),
                    })
                except (ValueError, KeyError):
                    # Skip malformed lines
                    continue
    except IOError:
        pass
    return records


def view_leaderboard():
    """Display the top 5 sessions sorted by user wins."""
    records = parse_results()
    print("\n" + "=" * 44)
    print("🏆  LEADERBOARD (Top 5)")
    print("=" * 44)
    if not records:
        print("  No records found. Play your first game!")
        print("=" * 44)
        return
    # Sort by wins descending, then losses ascending as tiebreaker
    top5 = sorted(records, key=lambda r: (-r["wins"], r["losses"]))[:5]
    print(f"  {'Rank':<5} {'Player':<14} {'Win':<5} {'Loss':<6} {'Rounds'}")
    print("  " + "-" * 40)
    for rank, rec in enumerate(top5, start=1):
        print(
            f"  {rank:<5} {rec['name']:<14} {rec['wins']:<5} {rec['losses']:<6} {rec['rounds']}"
        )
    print("=" * 44)


def main():
    global ADAPT_RATE, HISTORY_CAP, MIN_ADAPTIVE, beaten_by, blended, c, choices, computer_choice, computer_score, confidence, fav, freq, i, last_move, mode, move, n, name, pct, play_again_input, player_history, predicted, remaining, result_string, rounds_played, total_trans, trans, user_choice, user_score

    print("Welcome to Rock, Paper, Scissors!")
    print("The computer will learn your patterns and adapt — good luck! 🧠")

    # ── Leaderboard / Play prompt ──────────────────────────────────────────────
    while True:
        action = input("\nPress L to view Leaderboard, or P to Play: ").strip().lower()
        if action == "l":
            view_leaderboard()
        elif action == "p":
            break
        else:
            print("Invalid input. Please enter L or P.")
    # ──────────────────────────────────────────────────────────────────────────

    user_score = 0
    computer_score = 0
    rounds_played = 0

    choices = ["rock", "paper", "scissors"]
    beaten_by = {"rock": "paper", "paper": "scissors", "scissors": "rock"}

    player_history = []
    HISTORY_CAP = 20
    MIN_ADAPTIVE = 3
    ADAPT_RATE = 0.70

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
                with RESULTS_FILE.open("a", encoding="utf-8") as f:
                    f.write(result_string)
                print("Game results saved successfully.")
            except OSError as e:
                print(f"Error: Could not save game results: {e}")
            break


if __name__ == '__main__':
    main()

