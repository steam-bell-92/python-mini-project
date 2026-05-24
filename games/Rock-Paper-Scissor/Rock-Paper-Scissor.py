import random

class Rock_Paper_Scissors:
    def __init__(self):
        """Initializes the game state without blocking execution."""
        self.user_score = 0
        self.computer_score = 0
        self.rounds_played = 0
        # Perfectly mirrors the JS choices array ['rock', 'paper', 'scissors']
        self.choices = ["rock", "paper", "scissors"]
        # Counter look-up: what beats each move
        self.beaten_by = {"rock": "paper", "paper": "scissors", "scissors": "rock"}
        # Player history for adaptive AI (capped at recent 20 moves)
        self.player_history = []
        self.HISTORY_CAP  = 20
        self.MIN_ADAPTIVE = 3     # rounds before adaptive mode activates
        self.ADAPT_RATE   = 0.70  # probability of playing counter vs random

    # ── Adaptive AI logic ────────────────────────────────────────────────
    def _get_move_frequencies(self):
        """Returns overall frequency dict for player history."""
        freq = {"rock": 0, "paper": 0, "scissors": 0}
        for move in self.player_history:
            freq[move] += 1
        return freq

    def _get_markov_transitions(self, last_move):
        """Returns transition counts from last_move to the next move in history."""
        transitions = {"rock": 0, "paper": 0, "scissors": 0}
        for i in range(len(self.player_history) - 1):
            if self.player_history[i] == last_move:
                transitions[self.player_history[i + 1]] += 1
        return transitions

    def _predict_player_move(self):
        """
        Uses a blended Markov-chain + frequency model to predict the player's
        next move. Returns (predicted_move, confidence_pct) or (None, None)
        if there is not enough data.
        """
        n = len(self.player_history)
        if n < self.MIN_ADAPTIVE:
            return None, None

        freq  = self._get_move_frequencies()
        last  = self.player_history[-1]
        trans = self._get_markov_transitions(last)
        total = sum(trans.values())

        if total > 0:
            # Blend: 60 % Markov, 40 % frequency
            blended = {}
            for c in self.choices:
                blended[c] = (0.6 * trans[c] / total) + (0.4 * freq[c] / n)
            predicted  = max(blended, key=blended.get)
            confidence = round(blended[predicted] * 100)
        else:
            # Fallback to pure frequency
            predicted  = max(freq, key=freq.get)
            confidence = round(freq[predicted] / n * 100)

        return predicted, confidence

    def get_adaptive_computer_choice(self):
        """
        Returns (computer_choice, predicted_player_move, confidence_pct, mode).
        Plays the counter-move 70 % of the time; random otherwise for balance.
        """
        predicted, confidence = self._predict_player_move()

        if predicted is None:
            return random.choice(self.choices), None, None, "learning"

        if random.random() < self.ADAPT_RATE:
            computer_choice = self.beaten_by[predicted]
            mode = "adaptive"
        else:
            computer_choice = random.choice(self.choices)
            mode = "random"

        return computer_choice, predicted, confidence, mode

    # ── Stats helpers ────────────────────────────────────────────────────
    def _most_frequent_choice(self):
        if not self.player_history:
            return None
        freq = self._get_move_frequencies()
        return max(freq, key=freq.get)

    # ── Gameplay ─────────────────────────────────────────────────────────
    def users_play(self):
        """Handles a single round of interaction with adaptive computer logic."""
        user_choice = ""
        while user_choice not in self.choices:
            user_choice = input("Enter your choice (rock, paper, or scissors): ").lower()
            if user_choice not in self.choices:
                print("Invalid choice. Please choose rock, paper, or scissors.")

        # AI decides BEFORE we record the player's move (prediction is based on prior history)
        computer_choice, predicted, confidence, mode = self.get_adaptive_computer_choice()

        # Print AI brain info after first MIN_ADAPTIVE rounds
        if len(self.player_history) >= self.MIN_ADAPTIVE and predicted is not None:
            fav = self._most_frequent_choice()
            print(f"\n  🧠 Computer Brain [{mode.upper()}]")
            print(f"     Your favourite move  : {fav}")
            print(f"     Predicted your move  : {predicted} ({confidence}% confidence)")
            print(f"     Computer chose       : {computer_choice}")
        else:
            remaining = self.MIN_ADAPTIVE - len(self.player_history)
            if remaining > 0:
                print(f"\n  🧠 Computer Brain [LEARNING] — observing for {remaining} more move(s)...")
            print(f"  Computer chose: {computer_choice}")

        # Record player move after AI has decided
        self.player_history.append(user_choice)
        if len(self.player_history) > self.HISTORY_CAP:
            self.player_history.pop(0)

        # Determine round winner
        if user_choice == computer_choice:
            print("It's a Tie! 🤝")
            return "tie"
        elif self.beaten_by[computer_choice] == user_choice:
            print("You Win this round! 🎉")
            return "user"
        else:
            print("Computer Wins this round! 🤖")
            return "computer"

    def statistics(self):
        """Displays performance statistics matching the web dashboard metrics."""
        print("\n--- Game Statistics ---")
        print(f"Rounds Played  : {self.rounds_played}")
        print(f"Your Score     : {self.user_score}")
        print(f"Computer Score : {self.computer_score}")
        fav = self._most_frequent_choice()
        if fav:
            freq = self._get_move_frequencies()
            pct  = round(freq[fav] / len(self.player_history) * 100)
            print(f"Your Favourite : {fav} ({pct}% of plays)")

    def save_game(self):
        """Appends the final game results to a local tracking log."""
        name = input("Enter your name to save the results (optional): ")
        if not name:
            name = "Anonymous"
        result_string = (
            f"Player: {name}, Final Score: {self.user_score} - {self.computer_score} "
            f"(User-Computer), Rounds: {self.rounds_played}\n"
        )
        try:
            with open("game_results.txt", "a") as f:
                f.write(result_string)
            print("Game results saved successfully.")
        except IOError:
            print("Error: Could not save game results to file.")

    def play_game(self):
        """Launches the primary interactive gameplay loop."""
        print("Welcome to Rock, Paper, Scissors!")
        print("The computer will learn your patterns and adapt — good luck! 🧠")
        while True:
            self.rounds_played += 1
            print(f"\n--- Round {self.rounds_played} ---")

            round_winner = self.users_play()

            if round_winner == "user":
                self.user_score += 1
            elif round_winner == "computer":
                self.computer_score += 1

            self.statistics()
            play_again_input = input("Do you want to play again? (yes/no): ").lower()
            if play_again_input != "yes":
                print("\nThanks for playing! Final results:")
                self.statistics()
                self.save_game()
                break


# Standard execution block ensuring clean instantiation
if __name__ == "__main__":
    game = Rock_Paper_Scissors()
    game.play_game()