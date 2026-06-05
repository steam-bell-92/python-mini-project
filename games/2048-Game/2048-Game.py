import tkinter as tk
import random
from pathlib import Path

GRID_SIZE = 4
CELL_SIZE = 100
CELL_PADDING = 10
BACKGROUND_COLOR = "#92877d"
EMPTY_CELL_COLOR = "#9e948a"
TOTAL_MOVES = 100

TILE_COLORS = {
    2: "#eee4da",
    4: "#ede0c8",
    8: "#f2b179",
    16: "#f59563",
    32: "#f67c5f",
    64: "#f65e3b",
    128: "#edcf72",
    256: "#edcc61",
    512: "#edc850",
    1024: "#edc53f",
    2048: "#edc22e"
}

TEXT_COLORS = {
    2: "#776e65",
    4: "#776e65",
    8: "#f9f6f2",
    16: "#f9f6f2",
    32: "#f9f6f2",
    64: "#f9f6f2",
    128: "#f9f6f2",
    256: "#f9f6f2",
    512: "#f9f6f2",
    1024: "#f9f6f2",
    2048: "#f9f6f2"
}

HIGH_SCORE_FILE = "highscore.txt"
HIGH_SCORE_PATH = Path(__file__).with_name(HIGH_SCORE_FILE)


class Game2048:
    def __init__(self, root):
        self.root = root
        self.root.title("2048 Game")
        self.root.resizable(False, False)
        self.moves_left = TOTAL_MOVES

        self.score = 0
        self.high_score = self.load_high_score()

        self.main_frame = tk.Frame(root, bg=BACKGROUND_COLOR)
        self.main_frame.grid(padx=10, pady=10)

        self.score_label = tk.Label(
            root,
            text=f"Score: 0    High Score: {self.high_score}",
            font=("Arial", 16, "bold")
        )
        self.score_label.grid(pady=10)

        self.total_moves_label = tk.Label(
            root,
            text=f"Moves left: {self.moves_left}",
            font=("Arial", 16, "bold")
        )
        self.total_moves_label.grid(pady=10)
        self.restart_button = tk.Button(
            root,
            text="Restart Game",
            font=("Arial", 12, "bold"),
            command=self.restart_game
        )
        self.restart_button.grid(pady=5)

        self.instruction_label = tk.Label(
            root,
            text="🎮 Controls: ← ↑ → ↓ | Merge same numbers | Goal: 2048 🎯",
            font=("Arial", 10),
            fg="#6a635b",
        )
        self.instruction_label.grid(pady=5)

        self.cells = []
        self.board = [[0] * GRID_SIZE for _ in range(GRID_SIZE)]

        self.game_over_label = None

        self.create_grid()
        self.start_new_game()

        self.root.bind("<Key>", self.handle_keypress)

    def load_high_score(self):
        if HIGH_SCORE_PATH.exists():
            try:
                return int(HIGH_SCORE_PATH.read_text().strip() or 0)
            except ValueError:
                return 0
        return 0

    def save_high_score(self):
        try:
            HIGH_SCORE_PATH.write_text(str(self.high_score))
        except Exception as e:
            print(f"Warning: Could not save high score: {e}")

    def create_grid(self):
        for row in range(GRID_SIZE):
            row_cells = []

            for col in range(GRID_SIZE):
                frame = tk.Frame(
                    self.main_frame,
                    bg=EMPTY_CELL_COLOR,
                    width=CELL_SIZE,
                    height=CELL_SIZE
                )

                frame.grid(
                    row=row,
                    column=col,
                    padx=CELL_PADDING,
                    pady=CELL_PADDING
                )

                frame.grid_propagate(False)

                label = tk.Label(
                    frame,
                    text="",
                    bg=EMPTY_CELL_COLOR,
                    justify=tk.CENTER,
                    font=("Arial", 24, "bold")
                )

                label.place(relx=0.5, rely=0.5, anchor="center")

                row_cells.append(label)

            self.cells.append(row_cells)

    def start_new_game(self):
        self.board = [[0] * GRID_SIZE for _ in range(GRID_SIZE)]
        self.score = 0
        self.moves_left = TOTAL_MOVES

        self.add_new_tile()
        self.add_new_tile()

        self.update_grid()

    def add_new_tile(self):
        empty_cells = []

        for row in range(GRID_SIZE):
            for col in range(GRID_SIZE):
                if self.board[row][col] == 0:
                    empty_cells.append((row, col))

        if empty_cells:
            row, col = random.choice(empty_cells)
            self.board[row][col] = 2 if random.random() < 0.9 else 4

    def update_grid(self):
        for row in range(GRID_SIZE):
            for col in range(GRID_SIZE):
                value = self.board[row][col]

                if value == 0:
                    self.cells[row][col].configure(
                        text="",
                        bg=EMPTY_CELL_COLOR
                    )
                else:
                    self.cells[row][col].configure(
                        text=str(value),
                        bg=TILE_COLORS.get(value, "#3c3a32"),
                        fg=TEXT_COLORS.get(value, "#f9f6f2")
                    )

        self.score_label.configure(
            text=f"Score: {self.score}    High Score: {self.high_score}"
        )
        self.total_moves_label.configure(
            text=f"Moves left: {self.moves_left}")

        self.root.update_idletasks()

    def compress(self, row):
        new_row = [num for num in row if num != 0]
        new_row += [0] * (GRID_SIZE - len(new_row))
        return new_row

    def merge(self, row):
        for i in range(GRID_SIZE - 1):
            if row[i] == row[i + 1] and row[i] != 0:
                row[i] *= 2
                self.score += row[i]
                row[i + 1] = 0

        return row

    def move_left(self):
        moved = False
        new_board = []

        for row in self.board:
            compressed = self.compress(row)
            merged = self.merge(compressed)
            final = self.compress(merged)

            if final != row:
                moved = True

            new_board.append(final)

        self.board = new_board
        return moved

    def reverse(self):
        self.board = [row[::-1] for row in self.board]

    def transpose(self):
        self.board = [list(row) for row in zip(*self.board)]

    def move_right(self):
        self.reverse()
        moved = self.move_left()
        self.reverse()
        return moved

    def move_up(self):
        self.transpose()
        moved = self.move_left()
        self.transpose()
        return moved

    def move_down(self):
        self.transpose()
        moved = self.move_right()
        self.transpose()
        return moved

    def check_game_over(self):
        for row in range(GRID_SIZE):
            for col in range(GRID_SIZE):

                if self.board[row][col] == 0:
                    return False

                if col < GRID_SIZE - 1:
                    if self.board[row][col] == self.board[row][col + 1]:
                        return False

                if row < GRID_SIZE - 1:
                    if self.board[row][col] == self.board[row + 1][col]:
                        return False

        return True

    def handle_keypress(self, event):
        key = event.keysym
        moved = False

        if key == "Left":
            moved = self.move_left()

        elif key == "Right":
            moved = self.move_right()

        elif key == "Up":
            moved = self.move_up()

        elif key == "Down":
            moved = self.move_down()

        else:
            return
        
        

        if moved:
            self.add_new_tile()
            self.moves_left -=1

            if self.score > self.high_score:
                self.high_score = self.score
                self.save_high_score()

            self.update_grid()

        # FIXED BUG:
        # Game over is now checked even when no movement happens
        if self.check_game_over():
            self.game_over()
        if self.moves_left<=0:
            self.game_over()

    def game_over(self):

        # Prevent duplicate labels
        if self.game_over_label is not None:
            return

        # Disable controls after game over
        self.root.unbind("<Key>")

        self.game_over_label = tk.Label(
            self.root,
            text="GAME OVER",
            font=("Arial", 24, "bold"),
            fg="red"
        )

        self.game_over_label.grid(pady=10)

    def restart_game(self):

        # Remove old game over label
        if self.game_over_label is not None:
            self.game_over_label.destroy()
            self.game_over_label = None

        self.start_new_game()

        # Re-enable keyboard controls
        self.root.bind("<Key>", self.handle_keypress)


if __name__ == "__main__":
    root = tk.Tk()
    game = Game2048(root)
    root.mainloop()