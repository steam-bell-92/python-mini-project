print("🔺 Pascal's Triangle Generator 🔺")
print("Each number is the sum of the two numbers above it\n")

try:
    n = int(input("➡️  Enter the number of rows to generate: "))
    
    if n <= 0:
        print("❌ Please enter a positive number!")
    else:
        triangle = []
        
        for i in range(n):
            row = [1]
            if i > 0:
                for j in range(1, i):
                    row.append(triangle[i-1][j-1] + triangle[i-1][j])
                row.append(1)
            triangle.append(row)
        
        print("\nWhat would you like to see?")
        print("1️⃣  Whole Pascal's Triangle")
        print("2️⃣  Specific Row")
        
        choice = input("\n🎯 Enter your choice (1/2): ")
        
        if choice == '1':
            max_width = len(' '.join(map(str, triangle[-1])))
            
            print("\n✨ Pascal's Triangle ✨\n")
            for i, row in enumerate(triangle):
                row_str = ' '.join(map(str, row))
                print(f"Row {i+1}: {row_str.center(max_width)}")
        
        elif choice == '2':
            try:
                row_num = int(input(f"\n📍 Enter row number (1 to {n}): "))
            except ValueError:
                print("⚠️ Oops! That doesn't look like a valid number. Please try again.")
                row_num = None

            if row_num is not None and 1 <= row_num <= len(triangle):
                print(f"\n📍 Row {row_num} of Pascal's Triangle:")
                print(f"   {triangle[row_num-1]}")
                print(f"\n📊 Elements: {' → '.join(map(str, triangle[row_num-1]))}")
            elif row_num is not None:
                print(f"\n❌ Row {row_num} doesn't exist in the generated triangle!")

            else:
                print("❌ Invalid choice!")
        
        print(f"\n💡 Total rows generated: {n}")

except ValueError:
    print("❌ Invalid input! Please enter a valid number.")