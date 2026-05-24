import random
import math
import time
import os

# ═══════════════════════════════════════════════
#   🎮  TIC TAC TOE  —  Full Featured Edition
# ═══════════════════════════════════════════════

EMPTY = " "
X = "X"
O = "O"

WINS = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),   # rows
    (0, 3, 6), (1, 4, 7), (2, 5, 8),   # cols
    (0, 4, 8), (2, 4, 6)               # diagonals
]


# ───────────────────────────────────────────────
# DISPLAY
# ───────────────────────────────────────────────

def clear():
    os.system("cls" if os.name == "nt" else "clear")


def color(text, code):
    """ANSI color wrapper."""
    return f"\033[{code}m{text}\033[0m"


def RED(t):    return color(t, "91")
def BLUE(t):   return color(t, "94")
def GREEN(t):  return color(t, "92")
def YELLOW(t): return color(t, "93")
def BOLD(t):   return color(t, "1")
def DIM(t):    return color(t, "2")
def CYAN(t):   return color(t, "96")


def banner():
    print(BOLD(CYAN("""
╔══════════════════════════════════════╗
║       🎮  TIC  TAC  TOE  🎮          ║
╚══════════════════════════════════════╝""")))


def fmt_cell(val, pos):
    """Color X red, O blue, empty show position number."""
    if val == X:
        return BOLD(RED(f" {X} "))
    elif val == O:
        return BOLD(BLUE(f" {O} "))
    else:
        return DIM(f" {pos} ")


def display_board(board):
    b = board
    sep = "───┼───┼───"
    print()
    print(f"  {fmt_cell(b[0],1)}│{fmt_cell(b[1],2)}│{fmt_cell(b[2],3)}")
    print(f"  {sep}")
    print(f"  {fmt_cell(b[3],4)}│{fmt_cell(b[4],5)}│{fmt_cell(b[5],6)}")
    print(f"  {sep}")
    print(f"  {fmt_cell(b[6],7)}│{fmt_cell(b[7],8)}│{fmt_cell(b[8],9)}")
    print()


def display_scoreboard(scores, names):
    p1, p2 = names
    s1, s2, draws = scores["p1"], scores["p2"], scores["draws"]
    print(BOLD("  ┌─── SCOREBOARD ───────────────┐"))
    print(f"  │  {RED(p1):<20} {BOLD(str(s1)):>3}  │")
    print(f"  │  {BLUE(p2):<20} {BOLD(str(s2)):>3}  │")
    print(f"  │  {'Draws':<20} {BOLD(str(draws)):>3}  │")
    print(BOLD("  └───────────────────────────────┘"))
    print()


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


def get_winning_cells(board, symbol):
    for a, b, c in WINS:
        if board[a] == board[b] == board[c] == symbol:
            return (a, b, c)
    return None


def check_draw(board):
    return EMPTY not in board


# ───────────────────────────────────────────────
# AI ENGINES
# ───────────────────────────────────────────────

def easy_ai(board, _symbol):
    return random.choice(available_moves(board))


def medium_ai(board, symbol):
    opponent = X if symbol == O else O

    # 1. Win if possible
    for move in available_moves(board):
        board[move] = symbol
        if check_winner(board, symbol):
            board[move] = EMPTY
            return move
        board[move] = EMPTY

    # 2. Block opponent win
    for move in available_moves(board):
        board[move] = opponent
        if check_winner(board, opponent):
            board[move] = EMPTY
            return move
        board[move] = EMPTY

    # 3. Prefer center, then corners, then sides
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
            best = max(best, minimax(board, depth+1, False, symbol, opponent, alpha, beta))
            board[move] = EMPTY
            alpha = max(alpha, best)
            if beta <= alpha:
                break
        return best
    else:
        best = math.inf
        for move in available_moves(board):
            board[move] = opponent
            best = min(best, minimax(board, depth+1, True, symbol, opponent, alpha, beta))
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
        score = minimax(board, 0, False, symbol, opponent, -math.inf, math.inf)
        board[move] = EMPTY
        if score > best_score:
            best_score = score
            best_move = move

    return best_move


AI_ENGINES = {
    "easy":   easy_ai,
    "medium": medium_ai,
    "hard":   hard_ai,
}


# ───────────────────────────────────────────────
# INPUT HELPERS
# ───────────────────────────────────────────────

def get_player_move(board, symbol, name):
    sym_colored = RED(symbol) if symbol == X else BLUE(symbol)
    while True:
        try:
            raw = input(f"  {sym_colored} {BOLD(name)} → enter position (1-9): ").strip()
            pos = int(raw)
            if not 1 <= pos <= 9:
                print(YELLOW("  ⚠  Enter a number from 1 to 9.\n"))
            elif board[pos - 1] != EMPTY:
                print(YELLOW("  ⚠  That cell is already taken.\n"))
            else:
                return pos - 1
        except ValueError:
            print(YELLOW("  ⚠  Please enter a valid number.\n"))


def prompt(msg, valid):
    while True:
        ans = input(msg).strip().lower()
        if ans in valid:
            return ans
        print(YELLOW(f"  ⚠  Enter one of: {', '.join(valid)}\n"))


# ───────────────────────────────────────────────
# MENUS
# ───────────────────────────────────────────────

def menu_mode():
    print(BOLD("\n  Choose Game Mode:"))
    print("  1  →  Two Players (local)")
    print("  2  →  vs Computer (AI)")
    return prompt("\n  ➜ Your choice (1/2): ", {"1", "2"})


def menu_difficulty():
    print(BOLD("\n  Choose Difficulty:"))
    print("  1  →  Easy    (random moves)")
    print("  2  →  Medium  (smart blocking)")
    print("  3  →  Hard    (unbeatable AI)")
    choice = prompt("\n  ➜ Your choice (1/2/3): ", {"1", "2", "3"})
    return {"1": "easy", "2": "medium", "3": "hard"}[choice]


def menu_first_turn(p1_name, p2_name):
    print(BOLD("\n  Who goes first?"))
    print(f"  1  →  {p1_name}")
    print(f"  2  →  {p2_name}")
    print(f"  3  →  Random")
    choice = prompt("\n  ➜ Your choice (1/2/3): ", {"1", "2", "3"})
    if choice == "3":
        return random.choice(["1", "2"])
    return choice


# ───────────────────────────────────────────────
# CORE GAME ROUND
# ───────────────────────────────────────────────

def play_round(players, scores, mode, difficulty=None):
    """
    players: list of dicts with keys: name, symbol, is_human
    Returns: "p1", "p2", or "draw"
    """
    board = create_board()
    turn = 0

    while True:
        clear()
        banner()
        display_scoreboard(scores, [p["name"] for p in players])
        display_board(board)

        current = players[turn % 2]
        other   = players[(turn + 1) % 2]

        sym_label = RED(current["symbol"]) if current["symbol"] == X else BLUE(current["symbol"])

        # ── Get move ──
        if current["is_human"]:
            move = get_player_move(board, current["symbol"], current["name"])
        else:
            print(f"  🤖 {BOLD(current['name'])} is thinking", end="", flush=True)
            for _ in range(3):
                time.sleep(0.35)
                print(".", end="", flush=True)
            print()
            time.sleep(0.2)
            move = AI_ENGINES[difficulty](board, current["symbol"])
            print(f"  🤖 {current['name']} chose position {BOLD(str(move + 1))}\n")
            time.sleep(0.5)

        board[move] = current["symbol"]

        # ── Check result ──
        if check_winner(board, current["symbol"]):
            clear()
            banner()
            display_scoreboard(scores, [p["name"] for p in players])
            display_board(board)
            win_sym = "🏆"
            print(GREEN(BOLD(f"  {win_sym}  {current['name']} wins this round!  {win_sym}\n")))
            time.sleep(1.5)
            return "p1" if turn % 2 == 0 else "p2"

        if check_draw(board):
            clear()
            banner()
            display_scoreboard(scores, [p["name"] for p in players])
            display_board(board)
            print(YELLOW(BOLD("  🤝  It's a draw!\n")))
            time.sleep(1.5)
            return "draw"

        turn += 1


# ───────────────────────────────────────────────
# FULL MATCH (BEST OF N)
# ───────────────────────────────────────────────

def play_match(mode, difficulty=None):
    clear()
    banner()

    # Names
    if mode == "1":
        p1_name = input(BOLD("  Player 1 name: ")).strip() or "Player 1"
        p2_name = input(BOLD("  Player 2 name: ")).strip() or "Player 2"
        players = [
            {"name": p1_name, "symbol": X, "is_human": True},
            {"name": p2_name, "symbol": O, "is_human": True},
        ]
    else:
        p1_name = input(BOLD("  Your name: ")).strip() or "You"
        p2_name = "Computer"
        players = [
            {"name": p1_name, "symbol": X, "is_human": True},
            {"name": p2_name, "symbol": O, "is_human": False},
        ]

    # First turn
    first = menu_first_turn(players[0]["name"], players[1]["name"])
    if first == "2":
        players.reverse()
        # Keep X always first to move; reassign symbols
        players[0]["symbol"] = X
        players[1]["symbol"] = O

    scores = {"p1": 0, "p2": 0, "draws": 0}

    # Rounds
    print(BOLD("\n  Best of how many rounds?"))
    print("  1  →  1 round")
    print("  2  →  3 rounds (best of 3)")
    print("  3  →  5 rounds (best of 5)")
    rc = prompt("\n  ➜ Your choice (1/2/3): ", {"1", "2", "3"})
    max_rounds = {"1": 1, "2": 3, "3": 5}[rc]
    rounds_played = 0

    while rounds_played < max_rounds:
        remaining = max_rounds - rounds_played
        winner = play_round(players, scores, mode, difficulty)

        if winner == "p1":
            scores["p1"] += 1
        elif winner == "p2":
            scores["p2"] += 1
        else:
            scores["draws"] += 1

        rounds_played += 1

        # Early exit if someone has won majority
        majority = (max_rounds // 2) + 1
        if scores["p1"] >= majority or scores["p2"] >= majority:
            break

        if rounds_played < max_rounds:
            cont = prompt(f"  ➜ Next round? (y/n): ", {"y", "n"})
            if cont == "n":
                break

    # Final result
    clear()
    banner()
    p1_name_display = players[0]["name"] if first == "1" else players[1]["name"]
    p2_name_display = players[1]["name"] if first == "1" else players[0]["name"]
    display_scoreboard(scores, [players[0]["name"], players[1]["name"]])

    if scores["p1"] > scores["p2"]:
        print(GREEN(BOLD(f"  🏆  {players[0]['name']} wins the match!\n")))
    elif scores["p2"] > scores["p1"]:
        print(GREEN(BOLD(f"  🏆  {players[1]['name']} wins the match!\n")))
    else:
        print(YELLOW(BOLD("  🤝  The match is a tie!\n")))


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

        again = prompt("  ➜ Play again? (y/n): ", {"y", "n"})
        if again == "n":
            clear()
            print(CYAN(BOLD("\n  👋  Thanks for playing! See you next time.\n")))
            break


if __name__ == "__main__":
    main()