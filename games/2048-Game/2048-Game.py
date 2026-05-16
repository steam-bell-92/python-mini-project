import tkinter as tk
import random
import os

GRID_SIZE = 4
CELL_SIZE = 100
CELL_PADDING = 10
BACKGROUND_COLOR = "#92877d"
EMPTY_CELL_COLOR = "#9e948a"

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


class Game2048:
    def __init__(self, root):
        self.root = root
        self.root.title("2048 Game")

        self.score = 0
        self.high_score = self.load_high_score()

        self.main_frame = tk.Frame(root, bg=BACKGROUND_COLOR)
        self.main_frame.grid()

        self.score_label = tk.Label(
            root,
            text=f"Score: 0    High Score: {self.high_score}",
            font=("Arial", 16, "bold")
        )
        self.score_label.grid(pady=10)

        self.restart_button = tk.Button(
            root,
            text="Restart Game",
            font=("Arial", 12, "bold"),
            command=self.restart_game
        )
        self.restart_button.grid(pady=5)

        self.cells = []
        self.board = [[0] * GRID_SIZE for _ in range(GRID_SIZE)]

        self.create_grid()
        self.add_new_tile()
        self.add_new_tile()
        self.update_grid()

        self.root.bind("<Key>", self.handle_keypress)

    def load_high_score(self):
        if os.path.exists(HIGH_SCORE_FILE):
            with open(HIGH_SCORE_FILE, "r") as file:
                return int(file.read())
        return 0

    def save_high_score(self):
        with open(HIGH_SCORE_FILE, "w") as file:
            file.write(str(self.high_score))

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

                label = tk.Label(
                    self.main_frame,
                    text="",
                    bg=EMPTY_CELL_COLOR,
                    justify=tk.CENTER,
                    font=("Arial", 24, "bold"),
                    width=4,
                    height=2
                )

                label.grid(
                    row=row,
                    column=col,
                    padx=CELL_PADDING,
                    pady=CELL_PADDING
                )

                row_cells.append(label)

            self.cells.append(row_cells)

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

        if moved:
            self.add_new_tile()

            if self.score > self.high_score:
                self.high_score = self.score
                self.save_high_score()

            self.update_grid()

            if self.check_game_over():
                self.game_over()

    def game_over(self):
        game_over_label = tk.Label(
            self.root,
            text="GAME OVER",
            font=("Arial", 24, "bold"),
            fg="red"
        )

        game_over_label.grid(pady=10)

    def restart_game(self):
        self.board = [[0] * GRID_SIZE for _ in range(GRID_SIZE)]
        self.score = 0

        self.add_new_tile()
        self.add_new_tile()

        self.update_grid()


if __name__ == "__main__":
    root = tk.Tk()
    game = Game2048(root)
    root.mainloop()