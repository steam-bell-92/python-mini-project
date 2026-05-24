import random

# ─────────────────────────────────────────
#  🎮 Tic Tac Toe — SahiDawa Python Projects
# ─────────────────────────────────────────

EMPTY = "⬜"
X     = "❌"
O     = "⭕"


def create_board():
    """Return a fresh 3×3 board (list of 9 cells)."""
    return [EMPTY] * 9


def display_board(board):
    """Print the board in a 3×3 emoji grid."""
    print()
    for i in range(0, 9, 3):
        print(f"  {board[i]}  {board[i+1]}  {board[i+2]}")
    print()


def display_position_guide():
    """Show the position reference grid (1-9)."""
    print("\n  📌 Position guide:")
    for i in range(1, 10, 3):
        print(f"  {i}  {i+1}  {i+2}")
    print()


def check_winner(board, symbol):
    """Return True if the given symbol has won."""
    wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # columns
        [0, 4, 8], [2, 4, 6],              # diagonals
    ]
    return any(board[a] == board[b] == board[c] == symbol for a, b, c in wins)


def check_draw(board):
    """Return True if the board is full and no winner."""
    return all(cell != EMPTY for cell in board)


def get_player_move(board, symbol, name):
    """Prompt the player for a valid position (1-9)."""
    while True:
        try:
            pos = int(input(f"  {symbol} {name}'s turn!\n  ➡️  Enter position (1-9): "))
            if pos < 1 or pos > 9:
                print("  ⚠️  Please enter a number between 1 and 9.\n")
            elif board[pos - 1] != EMPTY:
                print("  ⚠️  That position is already taken! Try another.\n")
            else:
                return pos - 1  # convert to 0-indexed
        except ValueError:
            print("  ⚠️  Invalid input. Please enter a number between 1 and 9.\n")


def get_computer_move(board):
    """Return a random available position for the computer."""
    available = [i for i, cell in enumerate(board) if cell == EMPTY]
    return random.choice(available)


def play_two_players():
    """Run a full 2-player game loop."""
    board = create_board()
    players = [
        {"name": "Player 1", "symbol": X},
        {"name": "Player 2", "symbol": O},
    ]
    print(f"\n  👤 Player 1 = {X}  |  Player 2 = {O}")
    display_position_guide()

    turn = 0
    while True:
        display_board(board)
        player = players[turn % 2]
        move = get_player_move(board, player["symbol"], player["name"])
        board[move] = player["symbol"]

        if check_winner(board, player["symbol"]):
            display_board(board)
            print(f"  🎉 {player['name']} wins! Congratulations! 🏆\n")
            return

        if check_draw(board):
            display_board(board)
            print("  🤝 It's a draw! Well played both!\n")
            return

        turn += 1


def play_vs_computer():
    """Run a player vs computer game loop."""
    board = create_board()
    print(f"\n  👤 You = {X}  |  🤖 Computer = {O}")
    display_position_guide()

    while True:
        # Player turn
        display_board(board)
        move = get_player_move(board, X, "You")
        board[move] = X

        if check_winner(board, X):
            display_board(board)
            print("  🎉 You win! Congratulations! 🏆\n")
            return

        if check_draw(board):
            display_board(board)
            print("  🤝 It's a draw!\n")
            return

        # Computer turn
        print("  🤖 Computer is thinking...")
        comp_move = get_computer_move(board)
        board[comp_move] = O
        print(f"  🤖 Computer chose position {comp_move + 1}")

        if check_winner(board, O):
            display_board(board)
            print("  😔 Computer wins! Better luck next time!\n")
            return

        if check_draw(board):
            display_board(board)
            print("  🤝 It's a draw!\n")
            return


def choose_mode():
    """Prompt the user to choose game mode."""
    while True:
        print("  Choose mode:")
        print("  1️⃣  2 Players")
        print("  2️⃣  vs Computer")
        choice = input("  ➡️  Enter choice (1/2): ").strip()
        if choice == "1":
            return "two"
        elif choice == "2":
            return "computer"
        else:
            print("  ⚠️  Invalid choice. Please enter 1 or 2.\n")


def play_again():
    """Ask if the player wants to play again."""
    while True:
        answer = input("  🔄 Play again? (y/n): ").strip().lower()
        if answer in ("y", "yes"):
            return True
        elif answer in ("n", "no"):
            return False
        else:
            print("  ⚠️  Please enter y or n.\n")


def main():
    print("\n" + "=" * 40)
    print("       🎮  Tic Tac Toe  🎮")
    print("    A classic game of X's and O's!")
    print("=" * 40)

    while True:
        print()
        mode = choose_mode()

        if mode == "two":
            play_two_players()
        else:
            play_vs_computer()

        if not play_again():
            print("\n  👋 Thanks for playing! See you next time!\n")
            break


if __name__ == "__main__":
    main()
