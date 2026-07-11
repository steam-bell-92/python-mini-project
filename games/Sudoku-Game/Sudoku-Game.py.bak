import os
import sys
import time
import random
from typing import List, Tuple, Optional

# Reconfigure stdout/stderr to use UTF-8 encoding (resolves CP1252/Unicode issues on Windows)
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except AttributeError:
        pass
if sys.stderr.encoding != 'utf-8':
    try:
        sys.stderr.reconfigure(encoding='utf-8')
    except AttributeError:
        pass

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))

from utils.validation import get_choice, get_int
from utils.banners import print_victory_banner

# Enable ANSI escape sequences on Windows
if os.name == 'nt':
    os.system('')

# ANSI Colors for premium terminal interface
CYAN = '\033[96m'
GREEN = '\033[92m'
YELLOW = '\033[93m'
RED = '\033[91m'
BOLD = '\033[1m'
RESET = '\033[0m'
MAGENTA = '\033[95m'

def print_header():
    print(f"\n{MAGENTA}══════════════════════════════════════════════════════════{RESET}")
    print(f"        🧩  {BOLD}{CYAN}SUDOKU GAME & BACKTRACKING SOLVER{RESET}  🧩")
    print(f"{MAGENTA}══════════════════════════════════════════════════════════{RESET}")

def print_board(grid: List[List[int]], initial_grid: Optional[List[List[int]]] = None):
    """
    Prints a beautiful, aligned 9x9 Sudoku board.
    Initial clues are styled differently from user entries.
    """
    print(f"    {YELLOW}1   2   3   4   5   6   7   8   9{RESET}")
    print("  ╔═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╗")
    for r in range(9):
        row_str = f"{YELLOW}{r+1}{RESET} ║"
        for c in range(9):
            val = grid[r][c]
            if val == 0:
                cell_str = " . "
            else:
                if initial_grid and initial_grid[r][c] != 0:
                    cell_str = f" {CYAN}{BOLD}{val}{RESET} "
                else:
                    cell_str = f" {GREEN}{val}{RESET} "
            
            row_str += cell_str
            if (c + 1) % 3 == 0:
                row_str += "║"
            else:
                row_str += "│"
        print(row_str)
        if (r + 1) % 3 == 0 and r < 8:
            print("  ╠═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╣")
        elif r < 8:
            print("  ║───┼───┼───╟───┼───┼───╟───┼───┼───║")
    print("  ╚═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╝")

def is_valid(grid: List[List[int]], r: int, c: int, val: int) -> bool:
    """Checks if placing 'val' at row 'r', column 'c' is valid under Sudoku rules."""
    # Check row
    for col in range(9):
        if grid[r][col] == val and col != c:
            return False
    # Check column
    for row in range(9):
        if grid[row][c] == val and row != r:
            return False
    # Check 3x3 block
    start_r, start_c = 3 * (r // 3), 3 * (c // 3)
    for row in range(start_r, start_r + 3):
        for col in range(start_c, start_c + 3):
            if grid[row][col] == val and (row != r or col != c):
                return False
    return True

def find_empty(grid: List[List[int]]) -> Optional[Tuple[int, int]]:
    """Finds the first empty cell (containing 0) in the grid."""
    for r in range(9):
        for c in range(9):
            if grid[r][c] == 0:
                return r, c
    return None

def solve_sudoku_backtracking(
    grid: List[List[int]], 
    visual: bool = False, 
    initial_grid: Optional[List[List[int]]] = None, 
    delay: float = 0.02, 
    stats: Optional[dict] = None
) -> bool:
    """
    Standard Backtracking Solver with an optional visual animation mode.
    Keeps track of operations (steps) in the 'stats' dictionary.
    """
    if stats is not None:
        stats["steps"] += 1

    empty = find_empty(grid)
    if not empty:
        return True
    r, c = empty

    for val in range(1, 10):
        if is_valid(grid, r, c, val):
            grid[r][c] = val

            if visual:
                sys.stdout.write("\033[20F") # Move cursor up 20 lines to redraw board
                sys.stdout.flush()
                print_board(grid, initial_grid)
                time.sleep(delay)

            if solve_sudoku_backtracking(grid, visual, initial_grid, delay, stats):
                return True

            grid[r][c] = 0

            if visual:
                sys.stdout.write("\033[20F")
                sys.stdout.flush()
                print_board(grid, initial_grid)
                time.sleep(delay)

    return False

def generate_full_board(grid: List[List[int]]) -> bool:
    """Generates a random completed Sudoku board using backtracking with shuffled digits."""
    empty = find_empty(grid)
    if not empty:
        return True
    r, c = empty

    digits = list(range(1, 10))
    random.shuffle(digits)

    for val in digits:
        if is_valid(grid, r, c, val):
            grid[r][c] = val
            if generate_full_board(grid):
                return True
            grid[r][c] = 0

    return False

def generate_sudoku_puzzle(difficulty: str) -> Tuple[List[List[int]], List[List[int]]]:
    """
    Generates a new Sudoku puzzle by first creating a full grid and then removing cells
    based on the selected difficulty level.
    """
    # 1. Generate full solved board
    solution = [[0] * 9 for _ in range(9)]
    generate_full_board(solution)

    # 2. Make a copy for the puzzle board
    puzzle = [row[:] for row in solution]

    # 3. Determine how many cells to remove
    # Easy: 35 clues (remove 46)
    # Medium: 28 clues (remove 53)
    # Hard: 20 clues (remove 61)
    if difficulty == "easy":
        cells_to_remove = 46
    elif difficulty == "medium":
        cells_to_remove = 53
    else:
        cells_to_remove = 61

    # Remove cells randomly
    cells = [(r, c) for r in range(9) for c in range(9)]
    random.shuffle(cells)

    for i in range(cells_to_remove):
        r, c = cells[i]
        puzzle[r][c] = 0

    return puzzle, solution

def play_game():
    """Starts the interactive Sudoku game loop."""
    print("\nSelect Difficulty:")
    print("  1) Easy   🟢  (35 Clues)")
    print("  2) Medium 🟡  (28 Clues)")
    print("  3) Hard   🔴  (20 Clues)")
    
    diff_choice = get_choice(
        prompt="Select (1-3, default 2): ",
        choices=["1", "2", "3"],
        default="2"
    )

    diff_map = {"1": "easy", "2": "medium", "3": "hard"}
    difficulty = diff_map[diff_choice]

    print(f"\n🎲 Generating {difficulty.capitalize()} Sudoku Board...")
    puzzle, solution = generate_sudoku_puzzle(difficulty)
    current_board = [row[:] for row in puzzle]

    hints_used = 0

    while True:
        os.system('cls' if os.name == 'nt' else 'clear')
        print_header()
        print(f"Difficulty: {difficulty.upper()} | Hints Used: {hints_used} 💡")
        print("─" * 58)
        print_board(current_board, puzzle)
        print("─" * 58)
        print("Commands:")
        print("  • Enter coordinates and value to place (e.g., '3 4 5' to place 5 at Row 3, Col 4)")
        print("  • Enter coordinates and 0 to clear a cell (e.g., '3 4 0')")
        print("  • 'hint' or 'h' to reveal a cell 💡")
        print("  • 'solve' or 's' to auto-solve using backtracking solver 🤖")
        print("  • 'quit' or 'q' to exit back to menu 🔙")
        
        move = input("\n👉 Enter Command: ").strip().lower()

        if move in ['q', 'quit']:
            break
        
        if move in ['h', 'hint']:
            empty_cells = []
            for r in range(9):
                for c in range(9):
                    if current_board[r][c] == 0:
                        empty_cells.append((r, c))
            if not empty_cells:
                print(f"🎉 Board is already complete!")
                input("Press Enter to continue...")
                continue
            
            # Pick a random empty cell and fill it with the correct answer
            r, c = random.choice(empty_cells)
            current_board[r][c] = solution[r][c]
            hints_used += 1
            print(f"💡 Hint: Filled Row {r+1}, Col {c+1} with {solution[r][c]}!")
            time.sleep(1.5)
            
            # Check if solved
            if find_empty(current_board) is None:
                print_victory_banner()
                print(f"Hints used: {hints_used}")
                input("\nPress Enter to return to menu...")
                break
            continue

        if move in ['s', 'solve']:
            print("\n🤖 Select auto-solving mode:")
            print("  1) Animated Solving (Watch it solve) 🎥")
            print("  2) Instant Solving (Get results directly) ⚡")
            
            solve_choice = get_choice(
                prompt="Select (1-2, default 1): ",
                choices=["1", "2"],
                default="1"
            )

            # Re-initialize current board to puzzle state if needed
            current_board = [row[:] for row in puzzle]
            
            os.system('cls' if os.name == 'nt' else 'clear')
            print_header()
            print("🤖 Auto-solving with Backtracking Algorithm...")
            print("─" * 58)
            print_board(current_board, puzzle)
            print("─" * 58)

            stats = {"steps": 0}
            start_time = time.time()
            
            if solve_choice == "1":
                # Print extra spacing so animated backtracking doesn't overwrite header
                print("\n" * 2) 
                solve_sudoku_backtracking(current_board, visual=True, initial_grid=puzzle, delay=0.015, stats=stats)
            else:
                solve_sudoku_backtracking(current_board, visual=False, stats=stats)

            elapsed_time = time.time() - start_time
            
            print("\n" + "═" * 58)
            print(f"✅ Board solved in {stats['steps']} steps!")
            print(f"⏱️ Time taken: {elapsed_time:.3f} seconds.")
            print("═" * 58)
            input("\nPress Enter to return to menu...")
            break

        # Coordinate parsing
        try:
            parts = move.split()
            if len(parts) != 3:
                raise ValueError
            r = int(parts[0]) - 1
            c = int(parts[1]) - 1
            val = int(parts[2])

            if not (0 <= r < 9 and 0 <= c < 9):
                print(f"⚠️ Coordinates must be between 1 and 9.")
                time.sleep(1.5)
                continue

            if puzzle[r][c] != 0:
                print(f"⚠️ Row {r+1}, Col {c+1} is a starting clue cell. It cannot be modified!")
                time.sleep(1.5)
                continue

            if not (0 <= val <= 9):
                print(f"⚠️ Value must be between 0 (to clear) and 9.")
                time.sleep(1.5)
                continue

            if val == 0:
                current_board[r][c] = 0
                print(f"🧹 Cleared Row {r+1}, Col {c+1}.")
                time.sleep(0.8)
                continue

            # Real-time rule validation
            if not is_valid(current_board, r, c, val):
                print(f"⚠️ Rule Violation! Placing {val} at Row {r+1}, Col {c+1} conflicts with row, col, or box.")
                time.sleep(2.0)
                continue

            current_board[r][c] = val
            
            # Check if correct solution
            if find_empty(current_board) is None:
                # Validate the entire board against rules
                all_correct = True
                for i in range(9):
                    for j in range(9):
                        if not is_valid(current_board, i, j, current_board[i][j]):
                            all_correct = False
                            break
                
                if all_correct:
                    os.system('cls' if os.name == 'nt' else 'clear')
                    print_header()
                    print_board(current_board, puzzle)
                    print_victory_banner()
                    print(f"Hints used: {hints_used}")
                    input("\nPress Enter to return to menu...")
                    break

        except ValueError:
            print("⚠️ Invalid command format. Enter: <row> <col> <value> (e.g., '1 5 9')")
            time.sleep(1.5)

def custom_solver():
    """Lets users input their own custom Sudoku board and watch the solver work."""
    os.system('cls' if os.name == 'nt' else 'clear')
    print_header()
    print("📋 Enter custom Sudoku board row by row.")
    print("Use digits 1-9 for filled cells and 0 or '.' for blanks.")
    print("Example input for a row: 5 3 0 0 7 0 0 0 0\n")

    grid = []
    r = 0
    while r < 9:
        row_input = input(f"Row {r+1}: ").strip()
        # Clean input (allow space or comma separators, handle dots)
        row_input = row_input.replace(',', ' ').replace('.', '0')
        parts = row_input.split()
        
        if len(parts) != 9:
            print("⚠️ Please enter exactly 9 values for the row.")
            continue
        
        try:
            row_vals = [int(x) for x in parts]
            if any(not (0 <= x <= 9) for x in row_vals):
                print("⚠️ Values must be digits between 0 and 9.")
                continue
            
            # Validate initial values against themselves
            valid_row = True
            for c in range(9):
                if row_vals[c] != 0:
                    # Temporarily put it in a grid and check
                    temp_grid = [row[:] for row in grid] + [row_vals]
                    # Pad out the grid to 9 rows for is_valid logic
                    while len(temp_grid) < 9:
                        temp_grid.append([0]*9)
                    if not is_valid(temp_grid, r, c, row_vals[c]):
                        print(f"⚠️ Rule violation! The value {row_vals[c]} at column {c+1} conflicts with existing numbers.")
                        valid_row = False
                        break
            
            if not valid_row:
                continue

            grid.append(row_vals)
            r += 1
        except ValueError:
            print("⚠️ Invalid format. Enter 9 integers separated by spaces.")

    initial_grid = [row[:] for row in grid]

    print("\nSelect auto-solving mode:")
    print("  1) Animated Solving (Watch it solve) 🎥")
    print("  2) Instant Solving (Get results directly) ⚡")
    
    solve_choice = get_choice(
        prompt="Select (1-2, default 1): ",
        choices=["1", "2"],
        default="1"
    )

    os.system('cls' if os.name == 'nt' else 'clear')
    print_header()
    print("🤖 Solving your Custom Sudoku...")
    print("─" * 58)
    print_board(grid, initial_grid)
    print("─" * 58)

    stats = {"steps": 0}
    start_time = time.time()

    if solve_choice == "1":
        print("\n" * 2) 
        solved = solve_sudoku_backtracking(grid, visual=True, initial_grid=initial_grid, delay=0.02, stats=stats)
    else:
        solved = solve_sudoku_backtracking(grid, visual=False, stats=stats)

    elapsed_time = time.time() - start_time

    if solved:
        print("\n" + "═" * 58)
        print(f"🎉 Successfully Solved in {stats['steps']} steps!")
        print(f"⏱️ Time taken: {elapsed_time:.3f} seconds.")
        print("═" * 58)
    else:
        print("\n❌ Unsolvable! The puzzle configuration has no valid solution.")
    
    input("\nPress Enter to return to menu...")

def show_instructions():
    os.system('cls' if os.name == 'nt' else 'clear')
    print_header()
    print("📖 HOW TO PLAY SUDOKU:")
    print("  1. The board is a 9x9 grid, divided into nine 3x3 subgrids.")
    print("  2. The goal is to fill the empty cells (marked with '.') with digits 1-9.")
    print("  3. Every row, column, and 3x3 subgrid must contain digits 1-9 without duplicates.")
    print("\n💻 GAME CONTROLS:")
    print("  • To enter a digit, input: <row> <col> <val> (e.g., '1 5 9' places 9 at Row 1, Col 5).")
    print("  • To clear a user entry, input: <row> <col> 0.")
    print("  • Clue cells (highlighted in cyan) cannot be modified or cleared.")
    print("\n🤖 BACKTRACKING SOLVER:")
    print("  • The solver uses a recursive depth-first backtracking algorithm.")
    print("  • Choose the animated mode to watch the solver explore valid placements,")
    print("    backtrack upon conflicts, and dynamically find the solution step-by-step.")
    input("\nPress Enter to return to menu...")

def main() -> None:
    while True:
        os.system('cls' if os.name == 'nt' else 'clear')
        print_header()
        print("  Please select an option:")
        print("\n  [1] 🎮 Play Sudoku Game")
        print("  [2] 🤖 Backtracking Solver (Custom Puzzle)")
        print("  [3] 📖 Game Instructions")
        print("  [4] ❌ Return to main launcher")
        print("\n" + "═" * 58)

        choice = get_choice(
            prompt="👉 Enter choice (1-4): ",
            choices=["1", "2", "3", "4"],
            default="1"
        )

        if choice == "1":
            play_game()
        elif choice == "2":
            custom_solver()
        elif choice == "3":
            show_instructions()
        elif choice == "4":
            print("\n👋 Returning to interactive launcher...\n")
            break

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n👋 Goodbye!")
