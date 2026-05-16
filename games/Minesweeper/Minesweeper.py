import random
import sys

# Ensure UTF-8 encoding for terminal output (important for Windows)
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except AttributeError:
        import io
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# ─────────────────────────────────────────
#  💣 Minesweeper — Python Mini Project
# ─────────────────────────────────────────

print("💣 MINESWEEPER 💣")
print("Find all the safe spots without hitting a mine!\n")

# 1. Game Configuration & Difficulty
print("Choose Difficulty:")
print("1️⃣ Easy (5x5, 4 mines)")
print("2️⃣ Medium (8x8, 10 mines)")
difficulty = input("➡️ Enter choice (1/2): ")

if difficulty == "2":
    ROWS, COLS = 8, 8
    MINES = 10
else:
    ROWS, COLS = 5, 5
    MINES = 4

# 2. Initialize Boards
# 'board' holds the actual data (mines and numbers)
# 'visible_board' is what the player sees
board = []
visible_board = []
for r in range(ROWS):
    board.append([0] * COLS)
    visible_board.append(["⬛"] * COLS)

# 3. Place Mines
mines_placed = 0
while mines_placed < MINES:
    r = random.randint(0, ROWS - 1)
    c = random.randint(0, COLS - 1)
    if board[r][c] != "💣":
        board[r][c] = "💣"
        mines_placed += 1

# 4. Calculate Numbers (Neighbors)
for r in range(ROWS):
    for c in range(COLS):
        if board[r][c] == "💣":
            continue
        
        # Check all 8 neighbors
        count = 0
        for dr in [-1, 0, 1]:
            for dc in [-1, 0, 1]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < ROWS and 0 <= nc < COLS:
                    if board[nr][nc] == "💣":
                        count += 1
        board[r][c] = count

# 5. Main Game Loop
game_over = False
won = False
revealed_count = 0

while not game_over:
    # Display the board
    print("\n   " + " ".join([str(i) for i in range(COLS)])) # Column headers
    print("  " + "—" * (COLS * 2 + 1))
    for r in range(ROWS):
        print(f"{r} | " + " ".join(visible_board[r]))
    
    print(f"\n🚩 Mines: {MINES} | ✅ Revealed: {revealed_count}/{ROWS * COLS - MINES}")
    
    # Get user input
    try:
        action = input("\n🎯 Action - Reveal(r) or Flag(f): ").lower()
        if action not in ['r', 'f']:
            print("⚠️ Invalid action! Use 'r' or 'f'.")
            continue
            
        pos = input("➡️ Enter position (row col, e.g., '0 2'): ").split()
        if len(pos) != 2:
            print("⚠️ Please enter both row and column.")
            continue
            
        r, c = int(pos[0]), int(pos[1])
        
        if not (0 <= r < ROWS and 0 <= c < COLS):
            print(f"⚠️ Position out of bounds! (0-{ROWS-1})")
            continue
            
    except ValueError:
        print("⚠️ Invalid input! Please enter numbers.")
        continue

    # Process Action
    if action == 'f':
        if visible_board[r][c] == "⬛":
            visible_board[r][c] = "🚩"
        elif visible_board[r][c] == "🚩":
            visible_board[r][c] = "⬛"
        else:
            print("⚠️ Cell already revealed!")
            
    elif action == 'r':
        if visible_board[r][c] != "⬛":
            print("⚠️ Cell already revealed or flagged!")
            continue
            
        if board[r][c] == "💣":
            game_over = True
            # Reveal all mines
            for row in range(ROWS):
                for col in range(COLS):
                    if board[row][col] == "💣":
                        visible_board[row][col] = "💥"
        else:
            # Simple Reveal using a stack (Flood fill)
            stack = [(r, c)]
            while stack:
                curr_r, curr_c = stack.pop()
                if visible_board[curr_r][curr_c] != "⬛":
                    continue
                
                val = board[curr_r][curr_c]
                emoji_map = {0: "⬜", 1: "1️⃣", 2: "2️⃣", 3: "3️⃣", 4: "4️⃣", 5: "5️⃣", 6: "6️⃣", 7: "7️⃣", 8: "8️⃣"}
                visible_board[curr_r][curr_c] = emoji_map.get(val, str(val))
                revealed_count += 1
                
                if val == 0:
                    for dr in [-1, 0, 1]:
                        for dc in [-1, 0, 1]:
                            nr, nc = curr_r + dr, curr_c + dc
                            if 0 <= nr < ROWS and 0 <= nc < COLS and visible_board[nr][nc] == "⬛":
                                stack.append((nr, nc))

            # Check for Win only if we didn't hit a mine
            if revealed_count == (ROWS * COLS - MINES):
                game_over = True
                won = True

# 6. Final Result
print("\n   " + " ".join([str(i) for i in range(COLS)]))
for r in range(ROWS):
    print(f"{r} | " + " ".join(visible_board[r]))

if won:
    print("\n🎉 CONGRATULATIONS! You cleared the field! 🏆")
else:
    print("\n💥 BOOM! You hit a mine. Game Over! 😔")

print("\n👋 Thanks for playing Minesweeper!\n")
