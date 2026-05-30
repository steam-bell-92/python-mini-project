import random
import time

RESET = "\033[0m"
BLUE = "\033[94m"
RED = "\033[91m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
MAGENTA = "\033[95m"
BOLD = "\033[1m"

while True:
    print(BOLD + CYAN)
    print("=" * 70)
    print("🔲         DOTS & BOXES AI - ADVANCED VERSION        🔲")
    print("=" * 70)
    print(RESET)

    print(YELLOW + "🎮 GAME MODES" + RESET)
    print("1. 👥 Player vs Player")
    print("2. 🤖 Player vs AI")

    mode = input("\n🎯 Select mode (1 or 2): ").strip()
    if mode not in ['1', '2']:
        print(RED + "\n❌ Invalid mode selected!" + RESET)
        continue

    ai_difficulty = "easy"
    if mode == '2':
        print("\n🧠 AI LEVELS")
        print("1. 🟢 Easy")
        print("2. 🟡 Intermediate")
        print("3. 🔴 Hard")
        diff = input("\n🎯 Select AI difficulty: ").strip()
        if diff == '1': ai_difficulty = 'easy'
        elif diff == '2': ai_difficulty = 'medium'
        elif diff == '3': ai_difficulty = 'hard'
        else:
            print(RED + "\n❌ Invalid difficulty!" + RESET)
            continue

    size_input = input("\n📏 Enter board size (2-8): ").strip()
    if not size_input.isdigit() or not (2 <= int(size_input) <= 8):
        print(RED + "\n❌ Invalid size!" + RESET)
        continue
    size = int(size_input)

    horizontal_lines = [[False for _ in range(size)] for _ in range(size + 1)]
    vertical_lines = [[False for _ in range(size + 1)] for _ in range(size)]
    boxes = [[' ' for _ in range(size)] for _ in range(size)]

    player_score = 0
    computer_score = 0
    current_player = 1
    total_boxes = size * size

    while player_score + computer_score < total_boxes:
        # Print Board
        print("\n")
        for row in range(size):
            line = ""
            for col in range(size):
                line += "•"
                if horizontal_lines[row][col]:
                    if boxes[row][col] == 'P': line += BLUE + "━━" + RESET
                    elif boxes[row][col] == 'A': line += RED + "━━" + RESET
                    else: line += "━━"
                else: line += "  "
            line += "•"
            print(line)

            line = ""
            for col in range(size):
                if vertical_lines[row][col]:
                    if boxes[row][col] == 'P': line += BLUE + "┃" + RESET
                    elif boxes[row][col] == 'A': line += RED + "┃" + RESET
                    else: line += "┃"
                else: line += " "
                if boxes[row][col] == 'P': line += BLUE + "■ " + RESET
                elif boxes[row][col] == 'A': line += RED + "■ " + RESET
                else: line += "  "
            if vertical_lines[row][size]: line += "┃"
            print(line)

        line = ""
        for col in range(size):
            line += "•"
            line += "━━" if horizontal_lines[size][col] else "  "
        line += "•"
        print(line)
        print("\n")

        print(BOLD + "=" * 70 + RESET)
        print(BLUE + f"🔵 Player Score: {player_score}" + RESET)
        if mode == '2': print(RED + f"🤖 AI Score: {computer_score}" + RESET)
        else: print(RED + f"🔴 Player 2 Score: {computer_score}" + RESET)
        print(BOLD + "=" * 70 + RESET)

        if current_player == 1 or mode == '1':
            if current_player == 1: print(BLUE + "\n🔵 Player 1 Turn" + RESET)
            else: print(RED + "\n🔴 Player 2 Turn" + RESET)

            direction = input("➡️ Horizontal(h) or Vertical(v): ").strip().lower()
            if direction not in ['h', 'v']:
                print(RED + "❌ Invalid direction!" + RESET)
                continue

            row_in = input("📍 Enter row: ").strip()
            col_in = input("📍 Enter column: ").strip()

            if not row_in or not col_in or '-' in row_in or '-' in col_in or not row_in.isdigit() or not col_in.isdigit():
                print(RED + "❌ Invalid input! Rows and columns must be positive numbers." + RESET)
                continue

            row, col = int(row_in), int(col_in)

            if direction == 'h':
                if row < 0 or row >= (size + 1) or col < 0 or col >= size:
                    print(RED + f"❌ Position out of range! Row: 0-{size}, Col: 0-{size-1}." + RESET)
                    continue
                if horizontal_lines[row][col]:
                    print(YELLOW + "⚠️ Line already taken!" + RESET)
                    continue
                horizontal_lines[row][col] = True
            else:
                if row < 0 or row >= size or col < 0 or col >= (size + 1):
                    print(RED + f"❌ Position out of range! Row: 0-{size-1}, Col: 0-{size}." + RESET)
                    continue
                if vertical_lines[row][col]:
                    print(YELLOW + "⚠️ Line already taken!" + RESET)
                    continue
                vertical_lines[row][col] = True

            symbol = 'P' if current_player == 1 else 'A'
            
            # Check boxes
            completed = False
            for r in range(size):
                for c in range(size):
                    if boxes[r][c] == ' ':
                        top = horizontal_lines[r][c]
                        bottom = horizontal_lines[r + 1][c]
                        left = vertical_lines[r][c]
                        right = vertical_lines[r][c + 1]
                        if top and bottom and left and right:
                            boxes[r][c] = symbol
                            completed = True
                            if symbol == 'P': player_score += 1
                            else: computer_score += 1

            if not completed:
                current_player = 2 if current_player == 1 else 1

        else:
            print(RED + "\n🤖 AI is thinking..." + RESET)
            time.sleep(1)

            # Generate available moves
            available_moves = []
            for r in range(size + 1):
                for c in range(size):
                    if not horizontal_lines[r][c]:
                        available_moves.append(('h', r, c))
            for r in range(size):
                for c in range(size + 1):
                    if not vertical_lines[r][c]:
                        available_moves.append(('v', r, c))

            selected_move = None

            if ai_difficulty == 'easy':
                selected_move = random.choice(available_moves)
            elif ai_difficulty == 'medium':
                for move in available_moves:
                    d, r, c = move
                    if d == 'h': horizontal_lines[r][c] = True
                    else: vertical_lines[r][c] = True
                    
                    completes = False
                    for r_b in range(size):
                        for c_b in range(size):
                            sides = 0
                            if horizontal_lines[r_b][c_b]: sides += 1
                            if horizontal_lines[r_b + 1][c_b]: sides += 1
                            if vertical_lines[r_b][c_b]: sides += 1
                            if vertical_lines[r_b][c_b + 1]: sides += 1
                            if sides == 4:
                                completes = True
                                break
                        if completes: break
                    
                    if d == 'h': horizontal_lines[r][c] = False
                    else: vertical_lines[r][c] = False
                    
                    if completes:
                        selected_move = move
                        break
                
                if not selected_move:
                    safe_moves = []
                    for move in available_moves:
                        d, r, c = move
                        if d == 'h': horizontal_lines[r][c] = True
                        else: vertical_lines[r][c] = True
                        
                        danger = False
                        for r_b in range(size):
                            for c_b in range(size):
                                sides = 0
                                if horizontal_lines[r_b][c_b]: sides += 1
                                if horizontal_lines[r_b + 1][c_b]: sides += 1
                                if vertical_lines[r_b][c_b]: sides += 1
                                if vertical_lines[r_b][c_b + 1]: sides += 1
                                if sides == 3:
                                    danger = True
                                    break
                            if danger: break
                        
                        if d == 'h': horizontal_lines[r][c] = False
                        else: vertical_lines[r][c] = False
                        
                        if not danger:
                            safe_moves.append(move)
                            
                    selected_move = random.choice(safe_moves) if safe_moves else random.choice(available_moves)
            else: # hard
                best_move = None
                best_score = -999
                for move in available_moves:
                    d, r, c = move
                    score = 0
                    
                    if d == 'h': horizontal_lines[r][c] = True
                    else: vertical_lines[r][c] = True
                    
                    completes = False
                    danger = False
                    for r_b in range(size):
                        for c_b in range(size):
                            sides = 0
                            if horizontal_lines[r_b][c_b]: sides += 1
                            if horizontal_lines[r_b + 1][c_b]: sides += 1
                            if vertical_lines[r_b][c_b]: sides += 1
                            if vertical_lines[r_b][c_b + 1]: sides += 1
                            if sides == 4: completes = True
                            if sides == 3: danger = True
                            if sides == 2: score += 2
                            if sides == 1: score += 1
                            
                    if d == 'h': horizontal_lines[r][c] = False
                    else: vertical_lines[r][c] = False
                    
                    if completes: score += 100
                    if danger: score -= 50
                    
                    if score > best_score:
                        best_score = score
                        best_move = move
                selected_move = best_move

            direction, row, col = selected_move
            print(CYAN + f"🎯 AI selected: {direction} ({row}, {col})" + RESET)

            if direction == 'h': horizontal_lines[row][col] = True
            else: vertical_lines[row][col] = True

            completed = False
            for r in range(size):
                for c in range(size):
                    if boxes[r][c] == ' ':
                        top = horizontal_lines[r][c]
                        bottom = horizontal_lines[r + 1][c]
                        left = vertical_lines[r][c]
                        right = vertical_lines[r][c + 1]
                        if top and bottom and left and right:
                            boxes[r][c] = 'A'
                            completed = True
                            computer_score += 1
            if not completed:
                current_player = 1

    # Game over
    # Print final board
    print("\n")
    for row in range(size):
        line = ""
        for col in range(size):
            line += "•"
            if horizontal_lines[row][col]:
                if boxes[row][col] == 'P': line += BLUE + "━━" + RESET
                elif boxes[row][col] == 'A': line += RED + "━━" + RESET
                else: line += "━━"
            else: line += "  "
        line += "•"
        print(line)

        line = ""
        for col in range(size):
            if vertical_lines[row][col]:
                if boxes[row][col] == 'P': line += BLUE + "┃" + RESET
                elif boxes[row][col] == 'A': line += RED + "┃" + RESET
                else: line += "┃"
            else: line += " "
            if boxes[row][col] == 'P': line += BLUE + "■ " + RESET
            elif boxes[row][col] == 'A': line += RED + "■ " + RESET
            else: line += "  "
        if vertical_lines[row][size]: line += "┃"
        print(line)

    line = ""
    for col in range(size):
        line += "•"
        line += "━━" if horizontal_lines[size][col] else "  "
    line += "•"
    print(line)
    print("\n")

    print(BOLD + GREEN)
    print("=" * 70)
    print("🏁 GAME OVER 🏁")
    print("=" * 70)
    print(RESET)

    print(BLUE + f"🔵 Player Score: {player_score}" + RESET)
    if mode == '2': print(RED + f"🤖 AI Score: {computer_score}" + RESET)
    else: print(RED + f"🔴 Player 2 Score: {computer_score}" + RESET)

    print()
    if player_score > computer_score: print(GREEN + BOLD + "🎉 PLAYER 1 WINS!" + RESET)
    elif computer_score > player_score:
        if mode == '2': print(RED + BOLD + "🤖 AI WINS!" + RESET)
        else: print(RED + BOLD + "🎉 PLAYER 2 WINS!" + RESET)
    else: print(YELLOW + BOLD + "🤝 IT'S A DRAW!" + RESET)

    print(CYAN + "\n👋 Thanks for playing Dots & Boxes!\n" + RESET)

    while True:
        replay = input("🔄 Play again? [y/n]: ").strip().lower()
        if replay in ['y', 'yes', 'n', 'no']:
            break
        print(RED + "⚠️ Invalid input. Enter 'y' or 'n'." + RESET)
    if replay in ['n', 'no']:
        break