"""Terminal Spot the Difference game."""

PUZZLES = [
    {
        "left": [
            r"  /\_/\  ",
            " ( o.o ) ",
            "  > ^ <  ",
        ],
        "right": [
            r"  /\_/\  ",
            " ( o.O ) ",
            "  > ^ <  ",
        ],
        "answer": (2, 6),
    },
    {
        "left": [
            " [1] [2] [3] ",
            " [4] [5] [6] ",
            " [7] [8] [9] ",
        ],
        "right": [
            " [1] [2] [3] ",
            " [4] [S] [6] ",
            " [7] [8] [9] ",
        ],
        "answer": (2, 7),
    },
    {
        "left": [
            "  *     *  ",
            "    *      ",
            " *     *   ",
        ],
        "right": [
            "  *     *  ",
            "    *      ",
            " *    **   ",
        ],
        "answer": (3, 7),
    },
]


def print_puzzle(puzzle):
    print("\nFind the one changed character in the right image.")
    print("Enter the row and column number, starting from 1.\n")
    print("Left image           Right image")
    print("-" * 35)

    for row_number, (left, right) in enumerate(zip(puzzle["left"], puzzle["right"]), start=1):
        print(f"{row_number}. {left}      {right}")

    print("   " + "".join(str((index % 10) or 0) for index in range(1, len(puzzle["left"][0]) + 1)))


def read_guess():
    raw = input("\nYour guess (row column): ").strip().replace(",", " ")
    parts = raw.split()

    if len(parts) != 2:
        raise ValueError("Please enter two numbers, for example: 2 6")

    row, column = (int(part) for part in parts)
    return row, column


def play_round(puzzle):
    print_puzzle(puzzle)

    for attempt in range(1, 4):
        try:
            guess = read_guess()
        except ValueError as error:
            print(error)
            continue

        if guess == puzzle["answer"]:
            print(f"Correct! You found it in {attempt} attempt(s).")
            return True

        print("Not quite. Look closely and try again.")

    row, column = puzzle["answer"]
    print(f"The difference was at row {row}, column {column}.")
    return False


def main():
    print("Spot the Difference")
    print("===================")

    score = 0
    for puzzle in PUZZLES:
        if play_round(puzzle):
            score += 1

    print(f"\nFinal score: {score}/{len(PUZZLES)}")


if __name__ == "__main__":
    main()
