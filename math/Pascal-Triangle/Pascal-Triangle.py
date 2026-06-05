import sys
import os

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))
from utils.validation import get_int, get_choice

def generate_pascal_triangle(n: int) -> list[list[int]]:
    if n <= 0:
        return []
    triangle = []
    
    for i in range(n):
        row = [1]
        if i > 0:
            for j in range(1, i):
                row.append(triangle[i-1][j-1] + triangle[i-1][j])
            row.append(1)
        triangle.append(row)
    return triangle

def main() -> None:
    print("🔺 Pascal's Triangle Generator 🔺")
    print("Each number is the sum of the two numbers above it\n")

    try:
        n = get_int(
            prompt="➡️  Enter the number of rows to generate: ",
            error_invalid="❌ Invalid input! Please enter a valid number."
        )
        
        if n <= 0:
            print("❌ Please enter a positive number!")
        else:
            triangle = generate_pascal_triangle(n)
            
            print("\nWhat would you like to see?")
            print("1️⃣  Whole Pascal's Triangle")
            print("2️⃣  Specific Row")
            
            choice = get_choice(
                prompt="\n🎯 Enter your choice (1/2): ",
                choices=["1", "2"],
                error_invalid="❌ Invalid choice!"
            )
            
            if choice == '1':
                max_width = len(' '.join(map(str, triangle[-1])))
                
                print("\n✨ Pascal's Triangle ✨\n")
                for i, row in enumerate(triangle):
                    row_str = ' '.join(map(str, row))
                    print(f"Row {i+1}: {row_str.center(max_width)}")
            
            elif choice == '2':
                row_num = get_int(
                    prompt=f"\n📍 Enter row number (1 to {n}): ",
                    error_invalid="⚠️ Oops! That doesn't look like a valid number. Please try again."
                )

                if 1 <= row_num <= len(triangle):
                    print(f"\n📍 Row {row_num} of Pascal's Triangle:")
                    print(f"   {triangle[row_num-1]}")
                    print(f"\n📊 Elements: {' → '.join(map(str, triangle[row_num-1]))}")
                else:
                    print(f"\n❌ Row {row_num} doesn't exist in the generated triangle!")
            
            print(f"\n💡 Total rows generated: {n}")

    except (KeyboardInterrupt, SystemExit):
        print("\n👋 Goodbye!")

if __name__ == "__main__":
    main()