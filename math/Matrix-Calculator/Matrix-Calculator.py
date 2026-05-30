print("=" * 50)
print("🎮 MATRIX CALCULATOR 🎮")
print("=" * 50)
print("Easily add, subtract, multiply, transpose, calculate determinant, rank, and inverse of matrices!\n")

while True:
    print("=" * 50)
    choice = input("🎯 Choose Operation: Add (A), Subtract (S), Multiply (M), Transpose (T), Determinant (D), Rank (R), Inverse (I), or Quit (Q): ").strip().upper()

    if choice in ["Q", "QUIT"]:
        print("\n👋 Thanks for using Matrix Calculator! Goodbye!\n")
        break

    elif choice in ["A", "S"]:
        try:
            rows_str = input("➡️ Enter number of rows: ").strip()
            cols_str = input("➡️ Enter number of columns: ").strip()
            if not rows_str or not cols_str:
                print("❌ Error: Dimensions cannot be empty.")
                continue
            rows = int(rows_str)
            cols = int(cols_str)
            
            print(f"\n📝 Enter elements for Matrix 1 ({rows}x{cols}) row by row (space separated):")
            matrix1 = []
            for _ in range(rows):
                row = list(map(float, input("🔢 ").split()))
                if len(row) != cols:
                    raise ValueError("Column count mismatch")
                matrix1.append(row)
                
            print(f"\n📝 Enter elements for Matrix 2 ({rows}x{cols}) row by row (space separated):")
            matrix2 = []
            for _ in range(rows):
                row = list(map(float, input("🔢 ").split()))
                if len(row) != cols:
                    raise ValueError("Column count mismatch")
                matrix2.append(row)
                
            print("\n📊 Resulting Matrix:")
            for i in range(rows):
                result_row = []
                for j in range(cols):
                    if choice == "A":
                        val = matrix1[i][j] + matrix2[i][j]
                    else:
                        val = matrix1[i][j] - matrix2[i][j]
                    result_row.append(f"{val:.2f}")
                print("\t".join(result_row))
            print("\n✅ Calculation successful!\n")
        except Exception:
            print("❌ Error: Please enter valid numbers or ensure dimensions match.\n")

    elif choice == "M":
        try:
            r1_str = input("➡️ Enter number of rows for Matrix 1: ").strip()
            c1_str = input("➡️ Enter number of columns for Matrix 1: ").strip()
            if not r1_str or not c1_str:
                print("❌ Error: Dimensions cannot be empty.")
                continue
            r1 = int(r1_str)
            c1 = int(c1_str)
            
            print(f"\n📝 Enter elements for Matrix 1 ({r1}x{c1}) row by row (space separated):")
            matrix1 = []
            for _ in range(r1):
                row = list(map(float, input("🔢 ").split()))
                if len(row) != c1:
                    raise ValueError("Column count mismatch")
                matrix1.append(row)
                
            r2_str = input(f"\n➡️ Enter number of rows for Matrix 2 (MUST be {c1}): ").strip()
            c2_str = input("➡️ Enter number of columns for Matrix 2: ").strip()
            if not r2_str or not c2_str:
                print("❌ Error: Dimensions cannot be empty.")
                continue
            r2 = int(r2_str)
            c2 = int(c2_str)
            
            if c1 != r2:
                print("❌ Error: Matrix 1 columns must equal Matrix 2 rows for multiplication.\n")
                continue
                
            print(f"\n📝 Enter elements for Matrix 2 ({r2}x{c2}) row by row (space separated):")
            matrix2 = []
            for _ in range(r2):
                row = list(map(float, input("🔢 ").split()))
                if len(row) != c2:
                    raise ValueError("Column count mismatch")
                matrix2.append(row)
                
            print("\n📊 Resulting Matrix:")
            for i in range(r1):
                result_row = []
                for j in range(c2):
                    val = 0
                    for k in range(c1):
                        val += matrix1[i][k] * matrix2[k][j]
                    result_row.append(f"{val:.2f}")
                print("\t".join(result_row))
            print("\n✅ Calculation successful!\n")
        except Exception:
            print("❌ Error: Please enter valid numbers or ensure dimensions match.\n")

    elif choice == "T":
        try:
            r_str = input("➡️ Enter number of rows: ").strip()
            c_str = input("➡️ Enter number of columns: ").strip()
            if not r_str or not c_str:
                print("❌ Error: Dimensions cannot be empty.")
                continue
            r = int(r_str)
            c = int(c_str)
            
            print(f"\n📝 Enter elements for Matrix ({r}x{c}) row by row (space separated):")
            matrix = []
            for _ in range(r):
                row = list(map(float, input("🔢 ").split()))
                if len(row) != c:
                    raise ValueError("Column count mismatch")
                matrix.append(row)
                
            print("\n📊 Transposed Matrix:")
            for j in range(c):
                result_row = []
                for i in range(r):
                    result_row.append(f"{matrix[i][j]:.2f}")
                print("\t".join(result_row))
            print("\n✅ Calculation successful!\n")
        except Exception:
            print("❌ Error: Please enter valid numbers.\n")

    elif choice == "D":
        try:
            n_str = input("➡️ Enter size of square matrix (n x n): ").strip()
            if not n_str:
                print("❌ Error: Size cannot be empty.")
                continue
            n = int(n_str)
            
            print(f"\n📝 Enter elements for Matrix ({n}x{n}) row by row (space separated):")
            matrix = []
            for _ in range(n):
                row = list(map(float, input("🔢 ").split()))
                if len(row) != n:
                    raise ValueError("Column count mismatch")
                matrix.append(row)
                
            # Inline determinant
            if n == 1:
                det_value = matrix[0][0]
            elif n == 2:
                det_value = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
            else:
                mat = [row[:] for row in matrix]
                det_value = 1.0
                is_singular = False
                for i in range(n):
                    pivot_row = i
                    while pivot_row < n and abs(mat[pivot_row][i]) < 1e-9:
                        pivot_row += 1
                        
                    if pivot_row == n:
                        det_value = 0.0
                        is_singular = True
                        break
                        
                    if pivot_row != i:
                        mat[i], mat[pivot_row] = mat[pivot_row], mat[i]
                        det_value *= -1.0
                        
                    pivot_val = mat[i][i]
                    for r in range(i + 1, n):
                        factor = mat[r][i] / pivot_val
                        for c in range(i, n):
                            mat[r][c] -= factor * mat[i][c]
                            
                if not is_singular:
                    for i in range(n):
                        det_value *= mat[i][i]
                        
            print(f"\n📊 Determinant: {det_value:.2f}")
            print("✅ Calculation successful!\n")
        except Exception:
            print("❌ Error: Please enter valid numbers or ensure it's a square matrix.\n")

    elif choice == "R":
        try:
            r_str = input("➡️ Enter number of rows: ").strip()
            c_str = input("➡️ Enter number of columns: ").strip()
            if not r_str or not c_str:
                print("❌ Error: Dimensions cannot be empty.")
                continue
            r = int(r_str)
            c = int(c_str)
            
            print(f"\n📝 Enter elements for Matrix ({r}x{c}) row by row (space separated):")
            matrix = []
            for _ in range(r):
                row = list(map(float, input("🔢 ").split()))
                if len(row) != c:
                    raise ValueError("Column count mismatch")
                matrix.append(row)
                
            # Inline Gaussian elimination to find Rank
            mat = [row[:] for row in matrix]
            rows = len(mat)
            cols = len(mat[0])
            
            pivot_row = 0
            for col in range(cols):
                swap_row = pivot_row
                while swap_row < rows and abs(mat[swap_row][col]) < 1e-9:
                    swap_row += 1
                    
                if swap_row == rows:
                    continue
                    
                mat[pivot_row], mat[swap_row] = mat[swap_row], mat[pivot_row]
                
                for r_idx in range(pivot_row + 1, rows):
                    factor = mat[r_idx][col] / mat[pivot_row][col]
                    for c_idx in range(col, cols):
                        mat[r_idx][c_idx] -= factor * mat[pivot_row][c_idx]
                        
                pivot_row += 1
                if pivot_row == rows:
                    break
                    
            rank_value = sum(1 for row in mat if any(abs(val) > 1e-9 for val in row))
            
            print(f"\n📊 Rank of the Matrix: {rank_value}")
            print("✅ Calculation successful!\n")
        except Exception:
            print("❌ Error: Please enter valid row elements.\n")

    elif choice == "I":
        try:
            n_str = input("➡️ Enter size of square matrix (n x n): ").strip()
            if not n_str:
                print("❌ Error: Size cannot be empty.")
                continue
            n = int(n_str)
            
            print(f"\n📝 Enter elements for Matrix ({n}x{n}) row by row (space separated):")
            matrix = []
            for _ in range(n):
                row = list(map(float, input("🔢 ").split()))
                if len(row) != n:
                    raise ValueError("Column count mismatch")
                matrix.append(row)
                
            # Inline calculation of inverse
            aug_mat = [matrix[i][:] + [1.0 if i == j else 0.0 for j in range(n)] for i in range(n)]
            is_singular = False
            
            for i in range(n):
                pivot_row = i
                while pivot_row < n and abs(aug_mat[pivot_row][i]) < 1e-9:
                    pivot_row += 1
                    
                if pivot_row == n:
                    is_singular = True
                    break
                    
                aug_mat[i], aug_mat[pivot_row] = aug_mat[pivot_row], aug_mat[i]
                
                pivot_val = aug_mat[i][i]
                aug_mat[i] = [val / pivot_val for val in aug_mat[i]]
                
                for r_idx in range(n):
                    if r_idx != i:
                        factor = aug_mat[r_idx][i]
                        aug_mat[r_idx] = [aug_mat[r_idx][c_idx] - factor * aug_mat[i][c_idx] for c_idx in range(2 * n)]
                        
            if is_singular:
                print("❌ Error: The matrix is singular (determinant is 0) and cannot be inverted.\n")
                continue
                
            inv_matrix = [row[n:] for row in aug_mat]
            
            print("\n📊 Inverted Matrix:")
            for row in inv_matrix:
                print("\t".join([f"{val:.2f}" for val in row]))
            print("✅ Calculation successful!\n")
        except Exception:
            print("❌ Error: Please enter valid numbers or ensure it's a square matrix.\n")

    else:
        print("⚠️ Invalid input\n")