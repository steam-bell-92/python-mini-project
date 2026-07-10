def print_board(board, n):
    for row in board:
        print(" ".join("♛" if col else "⬜" for col in row))
    print()

columns = set()
diag1 = set()  # row - col
diag2 = set()  # row + col

def is_safe(board, row, col, n):
    return (
        col not in columns and
        (row - col) not in diag1 and
        (row + col) not in diag2
    )

def solve(board, row, n, solutions):
    if row == n:
        solutions.append([r[:] for r in board])
        return
    for col in range(n):
        if is_safe(board, row, col, n):
            board[row][col] = 1
            columns.add(col)
            diag1.add(row - col)
            diag2.add(row + col)

            solve(board, row + 1, n, solutions)

            board[row][col] = 0
            columns.remove(col)
            diag1.remove(row - col)
            diag2.remove(row + col)

def main():
    n = int(input("Enter board size (n): "))
    board = [[0]*n for _ in range(n)]
    solutions = []

    columns.clear()
    diag1.clear()
    diag2.clear()

    solve(board, 0, n, solutions)

    print(f"Total solutions for {n}-Queens: {len(solutions)}\n")
    for sol in solutions:
        print_board(sol, n)

if __name__ == "__main__":
    main()
