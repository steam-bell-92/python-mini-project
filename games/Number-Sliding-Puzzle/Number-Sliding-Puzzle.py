import random

print("🧩 Emoji Sliding Puzzle Game 🧩")

while True:
    print("Arrange the numbers in correct order!\n")

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 0]
    random.shuffle(numbers)

    puzzle = [
        numbers[0:3],
        numbers[3:6],
        numbers[6:9]
    ]

    moves = 0
    winning_puzzle = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
    ]

    while True:
        print("\n🎮 Current Puzzle:\n")
        for row in puzzle:
            for item in row:
                if item == 0:
                    print("⬜", end=" ")
                else:
                    print(f"{item}️⃣", end=" ")
            print()

        print(f"\n🔄 Moves: {moves}")
        
        if puzzle == winning_puzzle:
            print("\n🎉 Congratulations! You solved the puzzle!")
            break
            
        try:
            choice_str = input("\n🎯 Enter number to move: ").strip()
            if not choice_str:
                continue
            choice = int(choice_str)
        except ValueError:
            print("❌ Please enter a valid number!")
            continue

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

        if number_row == -1:
            print("⚠️ Number not found!")
            continue

        if (abs(number_row - empty_row) == 1 and number_col == empty_col) or \
           (abs(number_col - empty_col) == 1 and number_row == empty_row):
            puzzle[empty_row][empty_col] = choice
            puzzle[number_row][number_col] = 0
            moves += 1
            print("✅ Tile moved successfully!")
        else:
            print("❌ Invalid move! Tile must be next to empty space.")

    print("\n👋 Thanks for playing Emoji Sliding Puzzle!\n")
    
    while True:
        replay = input("🔄 Play again? (y/n): ").strip().lower()
        if replay in ['y', 'yes', 'n', 'no']:
            break
        print("⚠️ Invalid input. Enter 'y' or 'n'.")
    if replay in ['n', 'no']:
        break