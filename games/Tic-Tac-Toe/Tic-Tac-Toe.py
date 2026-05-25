import random
import math
import time
import os
import json
import copy

# ═══════════════════════════════════════════════
#   🎮  TIC TAC TOE  —  Full Featured Edition
# ═══════════════════════════════════════════════

EMPTY = " "
X = "X"
O = "O"

SAVE_FILE = "tic_tac_toe_save.json"

WINS = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),
    (0, 3, 6), (1, 4, 7), (2, 5, 8),
    (0, 4, 8), (2, 4, 6)
]


# ───────────────────────────────────────────────
# DISPLAY
# ───────────────────────────────────────────────

def clear():
    os.system("cls" if os.name == "nt" else "clear")


def color(text, code):
    return f"\033[{code}m{text}\033[0m"


def RED(t): return color(t, "91")
def BLUE(t): return color(t, "94")
def GREEN(t): return color(t, "92")
def YELLOW(t): return color(t, "93")
def BOLD(t): return color(t, "1")
def DIM(t): return color(t, "2")
def CYAN(t): return color(t, "96")


def banner():
    print(BOLD(CYAN("""
╔══════════════════════════════════════╗
║       🎮  TIC  TAC  TOE  🎮          ║
╚══════════════════════════════════════╝
""")))


def fmt_cell(val, pos):
    if val == X:
        return BOLD(RED(f" {X} "))
    elif val == O:
        return BOLD(BLUE(f" {O} "))
    else:
        return DIM(f" {pos} ")


def display_board(board):
    sep = "───┼───┼───"

    print()
    print(f"  {fmt_cell(board[0],1)}│{fmt_cell(board[1],2)}│{fmt_cell(board[2],3)}")
    print(f"  {sep}")
    print(f"  {fmt_cell(board[3],4)}│{fmt_cell(board[4],5)}│{fmt_cell(board[5],6)}")
    print(f"  {sep}")
    print(f"  {fmt_cell(board[6],7)}│{fmt_cell(board[7],8)}│{fmt_cell(board[8],9)}")
    print()


def display_scoreboard(scores, names):
    p1, p2 = names

    print(BOLD("  ┌─── SCOREBOARD ───────────────┐"))
    print(f"  │  {RED(p1):<20} {BOLD(str(scores['p1'])):>3}  │")
    print(f"  │  {BLUE(p2):<20} {BOLD(str(scores['p2'])):>3}  │")
    print(f"  │  {'Draws':<20} {BOLD(str(scores['draws'])):>3}  │")
    print(BOLD("  └───────────────────────────────┘"))
    print()


def display_commands():
    print(DIM("  Commands:"))
    print(DIM("  u → undo"))
    print(DIM("  r → redo"))
    print(DIM("  s → save"))
    print(DIM("  l → load"))
    print(DIM("  h → history"))
    print(DIM("  p → replay"))
    print(DIM("  Enter → continue normally\n"))


# ───────────────────────────────────────────────
# GAME LOGIC
# ───────────────────────────────────────────────

def create_board():
    return [EMPTY] * 9


def available_moves(board):
    return [i for i, c in enumerate(board) if c == EMPTY]


def check_winner(board, symbol):
    return any(
        board[a] == board[b] == board[c] == symbol
        for a, b, c in WINS
    )


def check_draw(board):
    return EMPTY not in board


# ───────────────────────────────────────────────
# SAVE / LOAD SYSTEM
# ───────────────────────────────────────────────

def save_game(board, scores, move_history, turn):

    data = {
        "board": board,
        "scores": scores,
        "move_history": move_history,
        "turn": turn
    }

    with open(SAVE_FILE, "w") as file:
        json.dump(data, file, indent=4)

    print(GREEN(BOLD("\n  💾 Game saved successfully!\n")))


def load_game():

    if not os.path.exists(SAVE_FILE):
        print(YELLOW(BOLD("\n  ⚠ No saved game found.\n")))
        return None

    with open(SAVE_FILE, "r") as file:
        data = json.load(file)

    print(GREEN(BOLD("\n  ✅ Saved game loaded!\n")))

    return data


# ───────────────────────────────────────────────
# HISTORY / REPLAY
# ───────────────────────────────────────────────

def show_move_history(move_history):

    print(BOLD("\n  📜 MATCH HISTORY\n"))

    if not move_history:
        print(YELLOW("  ⚠ No moves recorded.\n"))
        return

    for idx, move in enumerate(move_history, start=1):

        print(
            f"  {idx}. "
            f"{move['player']} "
            f"→ position "
            f"{move['position']}"
        )

    print()


def replay_game(move_history):

    replay_board = create_board()

    print(BOLD("\n  🎬 REPLAY STARTING...\n"))

    time.sleep(1)

    for idx, move in enumerate(move_history, start=1):

        clear()
        banner()

        replay_board[move["position"] - 1] = move["player"]

        print(BOLD(f"  ▶ Turn {idx}"))
        print(
            f"  {move['player']} "
            f"played position "
            f"{move['position']}\n"
        )

        display_board(replay_board)

        time.sleep(1)

    print(GREEN(BOLD("\n  🏁 Replay Finished!\n")))


# ───────────────────────────────────────────────
# AI ENGINES
# ───────────────────────────────────────────────

def easy_ai(board, _symbol):
    return random.choice(available_moves(board))


def medium_ai(board, symbol):

    opponent = X if symbol == O else O

    # WIN
    for move in available_moves(board):

        board[move] = symbol

        if check_winner(board, symbol):
            board[move] = EMPTY
            return move

        board[move] = EMPTY

    # BLOCK
    for move in available_moves(board):

        board[move] = opponent

        if check_winner(board, opponent):
            board[move] = EMPTY
            return move

        board[move] = EMPTY

    # PRIORITY POSITIONS
    for preferred in [4, 0, 2, 6, 8, 1, 3, 5, 7]:

        if board[preferred] == EMPTY:
            return preferred

    return random.choice(available_moves(board))


def minimax(board, depth, is_max, symbol, opponent, alpha, beta):

    if check_winner(board, symbol):
        return 10 - depth

    if check_winner(board, opponent):
        return depth - 10

    if check_draw(board):
        return 0

    if is_max:

        best = -math.inf

        for move in available_moves(board):

            board[move] = symbol

            best = max(
                best,
                minimax(
                    board,
                    depth + 1,
                    False,
                    symbol,
                    opponent,
                    alpha,
                    beta
                )
            )

            board[move] = EMPTY

            alpha = max(alpha, best)

            if beta <= alpha:
                break

        return best

    else:

        best = math.inf

        for move in available_moves(board):

            board[move] = opponent

            best = min(
                best,
                minimax(
                    board,
                    depth + 1,
                    True,
                    symbol,
                    opponent,
                    alpha,
                    beta
                )
            )

            board[move] = EMPTY

            beta = min(beta, best)

            if beta <= alpha:
                break

        return best


def hard_ai(board, symbol):

    opponent = X if symbol == O else O

    best_score = -math.inf
    best_move = None

    for move in available_moves(board):

        board[move] = symbol

        score = minimax(
            board,
            0,
            False,
            symbol,
            opponent,
            -math.inf,
            math.inf
        )

        board[move] = EMPTY

        if score > best_score:
            best_score = score
            best_move = move

    return best_move


AI_ENGINES = {
    "easy": easy_ai,
    "medium": medium_ai,
    "hard": hard_ai,
}


# ───────────────────────────────────────────────
# INPUT HELPERS
# ───────────────────────────────────────────────

def get_player_move(board, symbol, name):

    sym_colored = RED(symbol) if symbol == X else BLUE(symbol)

    while True:

        try:
            raw = input(
                f"  {sym_colored} "
                f"{BOLD(name)} "
                f"→ enter position (1-9): "
            ).strip()

            pos = int(raw)

            if not 1 <= pos <= 9:
                print(YELLOW("  ⚠ Enter number from 1 to 9.\n"))

            elif board[pos - 1] != EMPTY:
                print(YELLOW("  ⚠ Cell already occupied.\n"))

            else:
                return pos - 1

        except ValueError:
            print(YELLOW("  ⚠ Please enter valid number.\n"))


def prompt(msg, valid):

    while True:

        ans = input(msg).strip().lower()

        if ans in valid:
            return ans

        print(YELLOW(f"  ⚠ Enter one of: {', '.join(valid)}\n"))


# ───────────────────────────────────────────────
# MENUS
# ───────────────────────────────────────────────

def menu_mode():

    print(BOLD("\n  Choose Game Mode:"))
    print("  1 → Two Players")
    print("  2 → vs Computer")

    return prompt(
        "\n  ➜ Your choice (1/2): ",
        {"1", "2"}
    )


def menu_difficulty():

    print(BOLD("\n  Choose Difficulty:"))
    print("  1 → Easy")
    print("  2 → Medium")
    print("  3 → Hard")

    choice = prompt(
        "\n  ➜ Your choice (1/2/3): ",
        {"1", "2", "3"}
    )

    return {
        "1": "easy",
        "2": "medium",
        "3": "hard"
    }[choice]


# ───────────────────────────────────────────────
# CORE GAME ROUND
# ───────────────────────────────────────────────

def play_round(players, scores, mode, difficulty=None):

    board = create_board()

    turn = 0

    undo_stack = []
    redo_stack = []

    move_history = []

    while True:

        clear()
        banner()

        display_scoreboard(
            scores,
            [p["name"] for p in players]
        )

        display_board(board)

        current = players[turn % 2]

        # COMMANDS
        if current["is_human"]:

            display_commands()

            command = input(
                DIM("  Optional command: ")
            ).strip().lower()

            # UNDO
            if command == "u":

                if undo_stack:

                    redo_stack.append(copy.deepcopy(board))

                    board = undo_stack.pop()

                    if move_history:
                        move_history.pop()

                    turn -= 1

                    continue

                else:
                    print(YELLOW("\n  ⚠ Nothing to undo.\n"))
                    time.sleep(1.2)
                    continue

            # REDO
            elif command == "r":

                if redo_stack:

                    undo_stack.append(copy.deepcopy(board))

                    board = redo_stack.pop()

                    turn += 1

                    continue

                else:
                    print(YELLOW("\n  ⚠ Nothing to redo.\n"))
                    time.sleep(1.2)
                    continue

            # SAVE
            elif command == "s":

                save_game(
                    board,
                    scores,
                    move_history,
                    turn
                )

                time.sleep(1.2)
                continue

            # LOAD
            elif command == "l":

                data = load_game()

                if data:

                    board = data["board"]
                    scores.update(data["scores"])
                    move_history = data["move_history"]
                    turn = data["turn"]

                time.sleep(1.2)
                continue

            # HISTORY
            elif command == "h":

                show_move_history(move_history)

                input("\n  Press Enter to continue...")

                continue

            # REPLAY
            elif command == "p":

                replay_game(move_history)

                input("\n  Press Enter to continue...")

                continue

        # PLAYER MOVE
        if current["is_human"]:

            move = get_player_move(
                board,
                current["symbol"],
                current["name"]
            )

        else:

            print(
                f"  🤖 {BOLD(current['name'])} is thinking",
                end="",
                flush=True
            )

            for _ in range(3):
                time.sleep(0.35)
                print(".", end="", flush=True)

            print()

            time.sleep(0.2)

            move = AI_ENGINES[difficulty](
                board,
                current["symbol"]
            )

            print(
                f"  🤖 "
                f"{current['name']} "
                f"chose position "
                f"{BOLD(str(move + 1))}\n"
            )

            time.sleep(0.5)

        # STORE FOR UNDO
        undo_stack.append(copy.deepcopy(board))

        redo_stack.clear()

        # APPLY MOVE
        board[move] = current["symbol"]

        # STORE HISTORY
        move_history.append({
            "player": current["symbol"],
            "position": move + 1
        })

        # WIN CHECK
        if check_winner(board, current["symbol"]):

            clear()
            banner()

            display_scoreboard(
                scores,
                [p["name"] for p in players]
            )

            display_board(board)

            print(
                GREEN(
                    BOLD(
                        f"  🏆 "
                        f"{current['name']} "
                        f"wins this round!\n"
                    )
                )
            )

            show_move_history(move_history)

            watch = prompt(
                "  🎬 Watch replay? (y/n): ",
                {"y", "n"}
            )

            if watch == "y":
                replay_game(move_history)

            time.sleep(1.5)

            return "p1" if turn % 2 == 0 else "p2"

        # DRAW CHECK
        if check_draw(board):

            clear()
            banner()

            display_scoreboard(
                scores,
                [p["name"] for p in players]
            )

            display_board(board)

            print(
                YELLOW(
                    BOLD("  🤝 It's a draw!\n")
                )
            )

            show_move_history(move_history)

            watch = prompt(
                "  🎬 Watch replay? (y/n): ",
                {"y", "n"}
            )

            if watch == "y":
                replay_game(move_history)

            time.sleep(1.5)

            return "draw"

        turn += 1


# ───────────────────────────────────────────────
# FULL MATCH
# ───────────────────────────────────────────────

def play_match(mode, difficulty=None):

    clear()
    banner()

    if mode == "1":

        p1_name = input(BOLD("  Player 1 name: ")).strip() or "Player 1"

        p2_name = input(BOLD("  Player 2 name: ")).strip() or "Player 2"

        players = [
            {"name": p1_name, "symbol": X, "is_human": True},
            {"name": p2_name, "symbol": O, "is_human": True},
        ]

    else:

        p1_name = input(BOLD("  Your name: ")).strip() or "You"

        players = [
            {"name": p1_name, "symbol": X, "is_human": True},
            {"name": "Computer", "symbol": O, "is_human": False},
        ]

    scores = {
        "p1": 0,
        "p2": 0,
        "draws": 0
    }

    print(BOLD("\n  Best of how many rounds?"))
    print("  1 → 1 round")
    print("  2 → Best of 3")
    print("  3 → Best of 5")

    rc = prompt(
        "\n  ➜ Your choice (1/2/3): ",
        {"1", "2", "3"}
    )

    max_rounds = {
        "1": 1,
        "2": 3,
        "3": 5
    }[rc]

    rounds_played = 0

    while rounds_played < max_rounds:

        winner = play_round(
            players,
            scores,
            mode,
            difficulty
        )

        if winner == "p1":
            scores["p1"] += 1

        elif winner == "p2":
            scores["p2"] += 1

        else:
            scores["draws"] += 1

        rounds_played += 1

    clear()
    banner()

    display_scoreboard(
        scores,
        [players[0]["name"], players[1]["name"]]
    )

    if scores["p1"] > scores["p2"]:

        print(
            GREEN(
                BOLD(
                    f"  🏆 "
                    f"{players[0]['name']} "
                    f"wins the match!\n"
                )
            )
        )

    elif scores["p2"] > scores["p1"]:

        print(
            GREEN(
                BOLD(
                    f"  🏆 "
                    f"{players[1]['name']} "
                    f"wins the match!\n"
                )
            )
        )

    else:

        print(
            YELLOW(
                BOLD("  🤝 Match tied!\n")
            )
        )


# ───────────────────────────────────────────────
# MAIN
# ───────────────────────────────────────────────

def main():

    while True:

        clear()
        banner()

        mode = menu_mode()

        difficulty = None

        if mode == "2":
            difficulty = menu_difficulty()

        play_match(mode, difficulty)

        again = prompt(
            "  ➜ Play again? (y/n): ",
            {"y", "n"}
        )

        if again == "n":

            clear()

            print(
                CYAN(
                    BOLD(
                        "\n  👋 Thanks for playing!\n"
                    )
                )
            )

            break


if __name__ == "__main__":
    main()