import os
import random
import time


def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")


def print_header():
    print("\n====================================")
    print("      SUDOKU MINI GAME")
    print("====================================")


def print_board(board, original=None):
    print("    1 2 3 | 4 5 6 | 7 8 9")
    print("  +-------+-------+-------+")
    for row in range(9):
        line = str(row + 1) + " |"
        for col in range(9):
            value = board[row][col]
            token = "." if value == 0 else str(value)
            if original is not None and original[row][col] != 0:
                token = "[" + token + "]"
            else:
                token = " " + token + " "
            line += token
            if col in (2, 5):
                line += "|"
        print(line)
        if row in (2, 5):
            print("  +-------+-------+-------+")
    print("  +-------+-------+-------+")


def is_safe_move(board, row, col, value):
    for c in range(9):
        if board[row][c] == value and c != col:
            return False
    for r in range(9):
        if board[r][col] == value and r != row:
            return False
    start_row = (row // 3) * 3
    start_col = (col // 3) * 3
    for r in range(start_row, start_row + 3):
        for c in range(start_col, start_col + 3):
            if board[r][c] == value and (r != row or c != col):
                return False
    return True


def find_empty_cell(board):
    for row in range(9):
        for col in range(9):
            if board[row][col] == 0:
                return row, col
    return None


def generate_completed_board():
    board = [[0] * 9 for _ in range(9)]

    def backtrack():
        empty = find_empty_cell(board)
        if empty is None:
            return True
        row, col = empty
        digits = list(range(1, 10))
        random.shuffle(digits)
        for value in digits:
            if is_safe_move(board, row, col, value):
                board[row][col] = value
                if backtrack():
                    return True
                board[row][col] = 0
        return False

    backtrack()
    return board


def generate_puzzle(difficulty):
    solution = generate_completed_board()
    puzzle = [row[:] for row in solution]

    remove_count = {"easy": 35, "medium": 45, "hard": 55}[difficulty]
    cells = [(r, c) for r in range(9) for c in range(9)]
    random.shuffle(cells)

    for index in range(remove_count):
        row, col = cells[index]
        puzzle[row][col] = 0

    return puzzle, solution


def solve_sudoku(board, original=None, animated=False, delay=0.05):
    empty = find_empty_cell(board)
    if empty is None:
        return True

    row, col = empty
    digits = list(range(1, 10))
    random.shuffle(digits)

    for value in digits:
        if is_safe_move(board, row, col, value):
            board[row][col] = value
            if animated:
                clear_screen()
                print_header()
                print("Auto-solving with backtracking...")
                print_board(board, original)
                time.sleep(delay)
            if solve_sudoku(board, original, animated, delay):
                return True
            board[row][col] = 0
            if animated:
                clear_screen()
                print_header()
                print("Backtracking to try another path...")
                print_board(board, original)
                time.sleep(delay)
    return False


def choose_difficulty():
    while True:
        print("\nSelect Difficulty:")
        print("  1) Easy")
        print("  2) Medium")
        print("  3) Hard")
        choice = input("Choose 1, 2, or 3: ").strip().lower()
        if choice in ("1", "easy"):
            return "easy"
        if choice in ("2", "medium"):
            return "medium"
        if choice in ("3", "hard"):
            return "hard"
        print("Please enter a valid difficulty.")


def ask_move(board, original):
    while True:
        move = input("Enter row col value (or 'hint', 'solve', 'quit'): ").strip().lower()
        if move in ("q", "quit"):
            return None
        if move in ("h", "hint"):
            return "hint"
        if move in ("s", "solve"):
            return "solve"

        parts = move.split()
        if len(parts) != 3:
            print("Invalid command. Use: row col value")
            continue

        try:
            row = int(parts[0]) - 1
            col = int(parts[1]) - 1
            value = int(parts[2])
        except ValueError:
            print("Numbers only, please.")
            continue

        if not (0 <= row < 9 and 0 <= col < 9):
            print("Row and column must be between 1 and 9.")
            continue
        if original[row][col] != 0:
            print("That cell is a starting clue and cannot be changed.")
            continue
        if not (0 <= value <= 9):
            print("Value must be between 0 and 9.")
            continue
        if value == 0:
            board[row][col] = 0
            return (row, col, 0)
        if not is_safe_move(board, row, col, value):
            print("That move breaks Sudoku rules.")
            continue
        board[row][col] = value
        return (row, col, value)


def is_complete(board):
    if find_empty_cell(board) is not None:
        return False
    for row in range(9):
        for col in range(9):
            if not is_safe_move(board, row, col, board[row][col]):
                return False
    return True


def play_mode():
    difficulty = choose_difficulty()
    puzzle, solution = generate_puzzle(difficulty)
    board = [row[:] for row in puzzle]

    while True:
        clear_screen()
        print_header()
        print("Difficulty:", difficulty.upper())
        print_board(board, puzzle)
        print("\nCommands:")
        print("  - row col value  : place a number")
        print("  - row col 0      : clear a cell")
        print("  - hint           : reveal one correct value")
        print("  - solve          : watch the solver work")
        print("  - quit           : return to menu")

        result = ask_move(board, puzzle)
        if result is None:
            break
        if result == "hint":
            empties = [(r, c) for r in range(9) for c in range(9) if board[r][c] == 0]
            if not empties:
                print("The board is already full.")
                time.sleep(1)
                continue
            row, col = random.choice(empties)
            board[row][col] = solution[row][col]
            print("Hint placed.")
            time.sleep(1)
            if is_complete(board):
                clear_screen()
                print_header()
                print_board(board, puzzle)
                print("\nYou solved it!")
                time.sleep(1.5)
                break
            continue
        if result == "solve":
            clear_screen()
            print_header()
            print("Solving the puzzle...")
            print_board(board, puzzle)
            working_board = [row[:] for row in board]
            if solve_sudoku(working_board, puzzle, animated=True, delay=0.05):
                board = working_board
                print("\nSolved!")
            else:
                print("\nNo solution found.")
            time.sleep(1.5)
            continue

        row, col, value = result
        if value == 0:
            board[row][col] = 0
            continue
        if is_complete(board):
            clear_screen()
            print_header()
            print_board(board, puzzle)
            print("\nYou solved it!")
            time.sleep(1.5)
            break


def auto_solver_mode():
    difficulty = choose_difficulty()
    puzzle, solution = generate_puzzle(difficulty)
    board = [row[:] for row in puzzle]
    clear_screen()
    print_header()
    print("Starting auto-solver mode...")
    print_board(board, puzzle)
    print("\nThe solver is searching the decision tree...")
    time.sleep(1)

    if solve_sudoku(board, puzzle, animated=True, delay=0.06):
        clear_screen()
        print_header()
        print_board(board, puzzle)
        print("\nSolved successfully!")
    else:
        print("No valid solution was found.")
    time.sleep(2)


def show_instructions():
    clear_screen()
    print_header()
    print("How to play:")
    print("  - Fill each row, column, and 3x3 box with digits 1 to 9.")
    print("  - Use row col value input such as 3 4 7.")
    print("  - 0 clears a value you entered.")
    print("  - The solver uses recursive backtracking to find a valid solution.")
    input("\nPress Enter to return to the menu...")


def main():
    while True:
        clear_screen()
        print_header()
        print("1) Play Sudoku")
        print("2) Auto-Solver")
        print("3) Instructions")
        print("4) Quit")
        choice = input("Choose an option: ").strip().lower()

        if choice in ("1", "play"):
            play_mode()
        elif choice in ("2", "auto", "solver"):
            auto_solver_mode()
        elif choice in ("3", "instructions", "help"):
            show_instructions()
        elif choice in ("4", "quit", "q"):
            print("\nGoodbye!")
            break
        else:
            print("Please choose a valid option.")
            time.sleep(1)


if __name__ == "__main__":
    main()
