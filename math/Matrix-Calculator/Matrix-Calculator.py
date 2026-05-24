print("🎮 Matrix Calculator 🎮")
print("Easily add, subtract, multiply, or transpose matrices! \n")

while True:
    choice = input("🎯 Choose Operation: Add (A), Subtract (S), Multiply (M), Transpose (T), or Quit (Q): ").upper()

    if choice in ["Q", "QUIT"]:
        break
    
    elif choice in ["A", "S"]:
        try:
            rows = int(input("➡️ Enter number of rows: "))
            cols = int(input("➡️ Enter number of columns: "))

            print(f"\n📝 Enter elements for Matrix 1 ({rows}x{cols}) row by row (space separated):")
            matrix1 = []
            for _ in range(rows):
                row = list(map(float, input("🔢 ").split()))
                matrix1.append(row)

            print(f"\n📝 Enter elements for Matrix 2 ({rows}x{cols}) row by row (space separated):")
            matrix2 = []
            for _ in range(rows):
                row = list(map(float, input("🔢 ").split()))
                matrix2.append(row)

            print("\n📊 Resulting Matrix:")
            for i in range(rows):
                result_row = []
                for j in range(cols):
                    if choice == "A":
                        val = matrix1[i][j] + matrix2[i][j]
                    else:
                        val = matrix1[i][j] - matrix2[i][j]
                    result_row.append(str(val))
                print("\t".join(result_row))
                
            print("✅ Calculation successful!\n")
            
        except Exception:
            print("❌ Error: Please enter valid numbers or ensure dimensions match.\n")

    elif choice == "M":
        try:
            r1 = int(input("➡️ Enter number of rows for Matrix 1: "))
            c1 = int(input("➡️ Enter number of columns for Matrix 1: "))
            
            print(f"\n📝 Enter elements for Matrix 1 ({r1}x{c1}) row by row (space separated):")
            matrix1 = []
            for _ in range(r1):
                row = list(map(float, input("🔢 ").split()))
                matrix1.append(row)
                
            r2 = int(input(f"\n➡️ Enter number of rows for Matrix 2 (MUST be {c1}): "))
            c2 = int(input("➡️ Enter number of columns for Matrix 2: "))
            
            if c1 != r2:
                print("❌ Error: Matrix 1 columns must equal Matrix 2 rows for multiplication.\n")
                continue
                
            print(f"\n📝 Enter elements for Matrix 2 ({r2}x{c2}) row by row (space separated):")
            matrix2 = []
            for _ in range(r2):
                row = list(map(float, input("🔢 ").split()))
                matrix2.append(row)
                
            print("\n📊 Resulting Matrix:")
            for i in range(r1):
                result_row = []
                for j in range(c2):
                    val = 0
                    for k in range(c1):
                        val += matrix1[i][k] * matrix2[k][j]
                    result_row.append(str(val))
                print("\t".join(result_row))
            print("✅ Calculation successful!\n")

        except Exception:
            print("❌ Error: Please enter valid numbers or ensure dimensions match.\n")

    elif choice == "T":
        try:
            r = int(input("➡️ Enter number of rows: "))
            c = int(input("➡️ Enter number of columns: "))
            
            print(f"\n📝 Enter elements for Matrix ({r}x{c}) row by row (space separated):")
            matrix = []
            for _ in range(r):
                row = list(map(float, input("🔢 ").split()))
                matrix.append(row)
                
            print("\n📊 Transposed Matrix:")
            for j in range(c):
                result_row = []
                for i in range(r):
                    result_row.append(str(matrix[i][j]))
                print("\t".join(result_row))
            print("✅ Calculation successful!\n")

        except Exception:
            print("❌ Error: Please enter valid numbers.\n")
            
    else:
        print("⚠️ Invalid input\n")

print("\n👋 Thanks for using Matrix Calculator! Goodbye!\n")