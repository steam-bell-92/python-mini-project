import random
import time

# Colors
RESET = "\033[0m"
BLUE = "\033[94m"
RED = "\033[91m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
MAGENTA = "\033[95m"
BOLD = "\033[1m"

# Title
print(BOLD + CYAN)
print("=" * 70)
print("🔲        DOTS & BOXES AI - ADVANCED VERSION        🔲")
print("=" * 70)
print(RESET)

print(YELLOW + "🎮 GAME MODES" + RESET)
print("1. 👥 Player vs Player")
print("2. 🤖 Player vs AI")

mode = input("\n🎯 Select mode (1 or 2): ")

if mode not in ['1', '2']:
    print(RED + "\n❌ Invalid mode selected!" + RESET)
    exit()

# AI difficulty
ai_difficulty = "easy"

if mode == '2':
    print("\n🧠 AI LEVELS")
    print("1. 🟢 Easy")
    print("2. 🟡 Intermediate")
    print("3. 🔴 Hard")

    diff = input("\n🎯 Select AI difficulty: ")

    if diff == '1':
        ai_difficulty = 'easy'
    elif diff == '2':
        ai_difficulty = 'medium'
    elif diff == '3':
        ai_difficulty = 'hard'
    else:
        print(RED + "\n❌ Invalid difficulty!" + RESET)
        exit()

# Board size
size = input("\n📏 Enter board size (2-8): ")

if not size.isdigit():
    print(RED + "\n❌ Invalid size!" + RESET)
    exit()

size = int(size)

if size < 2 or size > 8:
    print(RED + "\n❌ Size must be between 2 and 8!" + RESET)
    exit()

# Board data
horizontal_lines = [[False for _ in range(size)] for _ in range(size + 1)]
vertical_lines = [[False for _ in range(size + 1)] for _ in range(size)]
boxes = [[' ' for _ in range(size)] for _ in range(size)]

player_score = 0
computer_score = 0
current_player = 1
total_boxes = size * size


def print_board():
    print("\n")
    for row in range(size):
        line = ""
        for col in range(size):
            line += "•"
            if horizontal_lines[row][col]:
                if boxes[row][col] == 'P':
                    line += BLUE + "━━" + RESET
                elif boxes[row][col] == 'A':
                    line += RED + "━━" + RESET
                else:
                    line += "━━"
            else:
                line += "  "
        line += "•"
        print(line)

        line = ""
        for col in range(size):
            if vertical_lines[row][col]:
                if boxes[row][col] == 'P':
                    line += BLUE + "┃" + RESET
                elif boxes[row][col] == 'A':
                    line += RED + "┃" + RESET
                else:
                    line += "┃"
            else:
                line += " "

            if boxes[row][col] == 'P':
                line += BLUE + "■ " + RESET
            elif boxes[row][col] == 'A':
                line += RED + "■ " + RESET
            else:
                line += "  "

        if vertical_lines[row][size]:
            line += "┃"
        print(line)

    line = ""
    for col in range(size):
        line += "•"
        line += "━━" if horizontal_lines[size][col] else "  "
    line += "•"
    print(line)
    print("\n")


def check_boxes(symbol):
    global player_score, computer_score
    completed = False
    for row in range(size):
        for col in range(size):
            if boxes[row][col] == ' ':
                top = horizontal_lines[row][col]
                bottom = horizontal_lines[row + 1][col]
                left = vertical_lines[row][col]
                right = vertical_lines[row][col + 1]
                if top and bottom and left and right:
                    boxes[row][col] = symbol
                    completed = True
                    if symbol == 'P':
                        player_score += 1
                    else:
                        computer_score += 1
    return completed


def get_available_moves():
    moves = []
    for row in range(size + 1):
        for col in range(size):
            if not horizontal_lines[row][col]:
                moves.append(('h', row, col))
    for row in range(size):
        for col in range(size + 1):
            if not vertical_lines[row][col]:
                moves.append(('v', row, col))
    return moves


def count_box_sides(row, col):
    count = 0
    if horizontal_lines[row][col]:
        count += 1
    if horizontal_lines[row + 1][col]:
        count += 1
    if vertical_lines[row][col]:
        count += 1
    if vertical_lines[row][col + 1]:
        count += 1
    return count


def simulate_move(move):
    direction, row, col = move
    if direction == 'h':
        horizontal_lines[row][col] = True
    else:
        vertical_lines[row][col] = True


def undo_move(move):
    direction, row, col = move
    if direction == 'h':
        horizontal_lines[row][col] = False
    else:
        vertical_lines[row][col] = False


def completes_box(move):
    simulate_move(move)
    for row in range(size):
        for col in range(size):
            if count_box_sides(row, col) == 4:
                undo_move(move)
                return True
    undo_move(move)
    return False


def creates_danger(move):
    simulate_move(move)
    for row in range(size):
        for col in range(size):
            if count_box_sides(row, col) == 3:
                undo_move(move)
                return True
    undo_move(move)
    return False


def ai_move():
    available_moves = get_available_moves()

    if ai_difficulty == 'easy':
        return random.choice(available_moves)

    elif ai_difficulty == 'medium':
        for move in available_moves:
            if completes_box(move):
                return move
        safe_moves = [m for m in available_moves if not creates_danger(m)]
        return random.choice(safe_moves) if safe_moves else random.choice(available_moves)

    else:  # hard
        best_move = None
        best_score = -999
        for move in available_moves:
            score = 0
            if completes_box(move):
                score += 100
            if creates_danger(move):
                score -= 50
            simulate_move(move)
            for row in range(size):
                for col in range(size):
                    sides = count_box_sides(row, col)
                    if sides == 2:
                        score += 2
                    elif sides == 1:
                        score += 1
            undo_move(move)
            if score > best_score:
                best_score = score
                best_move = move
        return best_move


# Main game loop
while player_score + computer_score < total_boxes:
    print_board()
    print(BOLD + "=" * 70 + RESET)
    print(BLUE + f"🔵 Player Score: {player_score}" + RESET)
    if mode == '2':
        print(RED + f"🤖 AI Score: {computer_score}" + RESET)
    else:
        print(RED + f"🔴 Player 2 Score: {computer_score}" + RESET)
    print(BOLD + "=" * 70 + RESET)

    if current_player == 1 or mode == '1':
        if current_player == 1:
            print(BLUE + "\n🔵 Player 1 Turn" + RESET)
        else:
            print(RED + "\n🔴 Player 2 Turn" + RESET)

        direction = input("➡️ Horizontal(h) or Vertical(v): ").lower()
        if direction not in ['h', 'v']:
            print(RED + "❌ Invalid direction!" + RESET)
            continue

        row = input("📍 Enter row: ")
        col = input("📍 Enter column: ")

        if not row.isdigit() or not col.isdigit():
            print(RED + "❌ Invalid position!" + RESET)
            continue

        row, col = int(row), int(col)

        try:
            if direction == 'h':
                if horizontal_lines[row][col]:
                    print(YELLOW + "⚠️ Line already taken!" + RESET)
                    continue
                horizontal_lines[row][col] = True
            else:
                if vertical_lines[row][col]:
                    print(YELLOW + "⚠️ Line already taken!" + RESET)
                    continue
                vertical_lines[row][col] = True
        except:
            print(RED + "❌ Position out of range!" + RESET)
            continue

        symbol = 'P' if current_player == 1 else 'A'
        got_box = check_boxes(symbol)
        if not got_box:
            current_player = 2 if current_player == 1 else 1

    else:
        print(RED + "\n🤖 AI is thinking..." + RESET)
        time.sleep(1)

        move = ai_move()
        direction, row, col = move
        print(CYAN + f"🎯 AI selected: {direction} ({row}, {col})" + RESET)

        if direction == 'h':
            horizontal_lines[row][col] = True
        else:
            vertical_lines[row][col] = True

        got_box = check_boxes('A')
        if not got_box:
            current_player = 1

# Game over
print_board()
print(BOLD + GREEN)
print("=" * 70)
print("🏁 GAME OVER 🏁")
print("=" * 70)
print(RESET)

print(BLUE + f"🔵 Player Score: {player_score}" + RESET)
if mode == '2':
    print(RED + f"🤖 AI Score: {computer_score}" + RESET)
else:
    print(RED + f"🔴 Player 2 Score: {computer_score}" + RESET)

print()

if player_score > computer_score:
    print(GREEN + BOLD + "🎉 PLAYER 1 WINS!" + RESET)
elif computer_score > player_score:
    if mode == '2':
        print(RED + BOLD + "🤖 AI WINS!" + RESET)
    else:
        print(RED + BOLD + "🎉 PLAYER 2 WINS!" + RESET)
else:
    print(YELLOW + BOLD + "🤝 IT'S A DRAW!" + RESET)

print(CYAN + "\n👋 Thanks for playing Dots & Boxes!\n" + RESET)