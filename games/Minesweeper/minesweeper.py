import random
import sys

# Emojis for cell states
UNOPENED = "⬜"
FLAGGED = "🚩"
MINE_EXPLODED = "💥"
MINE = "💣"

NUMBERS = {
    0: "⬛",
    1: "1️⃣",
    2: "2️⃣",
    3: "3️⃣",
    4: "4️⃣",
    5: "5️⃣",
    6: "6️⃣",
    7: "7️⃣",
    8: "8️⃣"
}

class Minesweeper:
    def __init__(self, size, num_mines):
        self.size = size
        self.num_mines = num_mines
        self.grid = [[0 for _ in range(size)] for _ in range(size)]
        self.visible = [[False for _ in range(size)] for _ in range(size)]
        self.flags = [[False for _ in range(size)] for _ in range(size)]
        self.first_click = True
        self.game_over = False
        self.victory = False

    def place_mines(self, safe_r, safe_c):
        mines_placed = 0
        while mines_placed < self.num_mines:
            r = random.randint(0, self.size - 1)
            c = random.randint(0, self.size - 1)
            # Ensure not the first clicked cell and not already a mine
            if (r, c) != (safe_r, safe_c) and self.grid[r][c] != -1:
                self.grid[r][c] = -1
                mines_placed += 1
                
        # Calculate numbers
        for r in range(self.size):
            for c in range(self.size):
                if self.grid[r][c] == -1:
                    continue
                count = 0
                for dr in [-1, 0, 1]:
                    for dc in [-1, 0, 1]:
                        if dr == 0 and dc == 0:
                            continue
                        nr, nc = r + dr, c + dc
                        if 0 <= nr < self.size and 0 <= nc < self.size and self.grid[nr][nc] == -1:
                            count += 1
                self.grid[r][c] = count

    def print_board(self, show_all=False):
        # Print column headers
        header = "   "
        for c in range(self.size):
            if c < 10:
                header += f"{c}  "
            else:
                header += f"{c} "
        print(header)

        for r in range(self.size):
            row_str = f"{r:2} "
            for c in range(self.size):
                if show_all:
                    if self.grid[r][c] == -1:
                        if self.visible[r][c] and self.game_over:
                            row_str += MINE_EXPLODED + " "
                        else:
                            row_str += MINE + " "
                    else:
                        row_str += NUMBERS[self.grid[r][c]] + " "
                else:
                    if self.visible[r][c]:
                        if self.grid[r][c] == -1:
                            row_str += MINE_EXPLODED + " "
                        else:
                            row_str += NUMBERS[self.grid[r][c]] + " "
                    elif self.flags[r][c]:
                        row_str += FLAGGED + " "
                    else:
                        row_str += UNOPENED + " "
            print(row_str)

    def dig(self, r, c):
        if self.flags[r][c] or self.visible[r][c]:
            return
            
        if self.first_click:
            self.place_mines(r, c)
            self.first_click = False

        self.visible[r][c] = True

        if self.grid[r][c] == -1:
            self.game_over = True
            return

        if self.grid[r][c] == 0:
            for dr in [-1, 0, 1]:
                for dc in [-1, 0, 1]:
                    if dr == 0 and dc == 0:
                        continue
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < self.size and 0 <= nc < self.size:
                        if not self.visible[nr][nc]:
                            self.dig(nr, nc)

    def flag(self, r, c):
        if not self.visible[r][c]:
            self.flags[r][c] = not self.flags[r][c]

    def check_victory(self):
        for r in range(self.size):
            for c in range(self.size):
                if self.grid[r][c] != -1 and not self.visible[r][c]:
                    return False
        return True


def play_game():
    print("Welcome to CLI Minesweeper! 💣💥")
    print("Select Difficulty:")
    print("1. Easy (9x9, 10 mines)")
    print("2. Medium (16x16, 40 mines)")
    
    while True:
        choice = input("Enter 1 or 2: ").strip()
        if choice == "1":
            size = 9
            mines = 10
            break
        elif choice == "2":
            size = 16
            mines = 40
            break
        else:
            print("Invalid choice.")

    game = Minesweeper(size, mines)

    while not game.game_over and not game.victory:
        print("\n" + "="*40 + "\n")
        game.print_board()
        print("\nCommands: d <row> <col> to Dig, f <row> <col> to Flag (e.g. 'd 0 5' or 'f 2 3')")
        print("Type 'quit' to exit.")
        cmd = input("Command: ").strip().lower().split()
        
        if not cmd:
            continue
        if cmd[0] == 'quit':
            print("Exiting game. Bye!")
            sys.exit(0)
            
        if len(cmd) != 3 or cmd[0] not in ('d', 'f'):
            print("Invalid command format.")
            continue
            
        try:
            r = int(cmd[1])
            c = int(cmd[2])
        except ValueError:
            print("Row and column must be integers.")
            continue
            
        if r < 0 or r >= size or c < 0 or c >= size:
            print("Coordinates out of bounds.")
            continue
            
        if cmd[0] == 'd':
            game.dig(r, c)
        elif cmd[0] == 'f':
            game.flag(r, c)
            
        if not game.game_over:
            game.victory = game.check_victory()

    print("\n" + "="*40 + "\n")
    if game.game_over:
        print("💥 BOOM! You hit a mine. GAME OVER. 💥")
        game.print_board(show_all=True)
    elif game.victory:
        print("🎉 CONGRATULATIONS! You cleared the minefield! 🎉")
        game.print_board(show_all=True)

if __name__ == "__main__":
    try:
        play_game()
    except KeyboardInterrupt:
        print("\nGame interrupted. Exiting.")
