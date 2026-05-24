import random

print("🧩 Emoji Sliding Puzzle Game 🧩")
print("Arrange the numbers in correct order!\n")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 0]

random.shuffle(numbers)

puzzle = [
    numbers[0:3],
    numbers[3:6],
    numbers[6:9]
]

moves = 0
def display_puzzle():
    print("\n🎮 Current Puzzle:\n")
    for row in puzzle:
        for item in row:
            if item == 0:
                print("⬜", end=" ")
            else:
                print(f"{item}️⃣", end=" ")
        print()

def find_positions(choice):
    empty_row = 0
    empty_col = 0
    number_row = -1
    number_col = -1

    for i in range(3):
        for j in range(3):
            if puzzle[i][j] == 0:
                empty_row = i
                empty_col = j
            if puzzle[i][j] == choice:
                number_row = i
                number_col = j
    return number_row, number_col, empty_row, empty_col


def move_tile(choice):
    global moves
    number_row, number_col, empty_row, empty_col = find_positions(choice)

    if number_row == -1:
        print("⚠️ Number not found!")
        return
    if (
        abs(number_row - empty_row) == 1
        and number_col == empty_col
    ) or (
        abs(number_col - empty_col) == 1
        and number_row == empty_row
    ):

        puzzle[empty_row][empty_col] = choice
        puzzle[number_row][number_col] = 0
        moves += 1
        print("✅ Tile moved successfully!")

    else:
        print("❌ Invalid move! Tile must be next to empty space.")

def check_win():
    winning_puzzle = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
    ]
    return puzzle == winning_puzzle

def init():
    global moves
    while True:
        display_puzzle()
        print(f"\n🔄 Moves: {moves}")
        if check_win():
            print("\n🎉 Congratulations! You solved the puzzle!")
            break
        try:
            choice = int(input("\n🎯 Enter number to move: "))
        except ValueError:
            print("❌ Please enter a valid number!")
            continue
        move_tile(choice)
    print("\n👋 Thanks for playing Emoji Sliding Puzzle!\n")

init()