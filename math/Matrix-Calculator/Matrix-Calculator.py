print("🎮 Matrix Calculator 🎮")
print("Easily add, subtract, multiply, transpose, calculate determinant, rank, and inverse of matrices! \n")

def helper_gaussian_elimination(matrix):
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
        
        for r in range(pivot_row + 1, rows):
            factor = mat[r][col] / mat[pivot_row][col]
            for c in range(col, cols):
                mat[r][c] -= factor * mat[pivot_row][c]
                
        pivot_row += 1
        if pivot_row == rows:
            break
            
    rank = sum(1 for row in mat if any(abs(val) > 1e-9 for val in row))
    return mat, rank


def calculate_inverse(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    
    if rows != cols:
        raise ValueError("Only square matrices have an inverse.")
        
    aug_mat = [matrix[i][:] + [1 if i == j else 0 for j in range(rows)] for i in range(rows)]
    n = rows
    
    for i in range(n):
        pivot_row = i
        while pivot_row < n and abs(aug_mat[pivot_row][i]) < 1e-9:
            pivot_row += 1
            
        if pivot_row == n:
            raise ValueError("The matrix is singular (determinant is 0) and cannot be inverted.")
            
        aug_mat[i], aug_mat[pivot_row] = aug_mat[pivot_row], aug_mat[i]
        
        pivot_val = aug_mat[i][i]
        aug_mat[i] = [val / pivot_val for val in aug_mat[i]]
        
        for r in range(n):
            if r != i:
                factor = aug_mat[r][i]
                aug_mat[r] = [aug_mat[r][c] - factor * aug_mat[i][c] for c in range(2 * n)]
                
    inverse_matrix = [row[n:] for row in aug_mat]
    return inverse_matrix


while True:
    choice = input("🎯 Choose Operation: Add (A), Subtract (S), Multiply (M), Transpose (T), Determinant (D), Rank (R), Inverse (I), or Quit (Q): ").upper()

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
                    result_row.append(f"{val:.2f}")
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
                    result_row.append(f"{val:.2f}")
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
                    result_row.append(f"{matrix[i][j]:.2f}")
                print("\t".join(result_row))
            print("✅ Calculation successful!\n")
        except Exception:
            print("❌ Error: Please enter valid numbers.\n")

    elif choice == "D":
        try:
            n = int(input("➡️ Enter size of square matrix (n x n): "))
            print(f"\n📝 Enter elements for Matrix ({n}x{n}) row by row (space separated):")
            matrix = []
            for _ in range(n):
                row = list(map(float, input("🔢 ").split()))
                matrix.append(row)
                
            def determinant(m):
                n = len(m)
                if n == 1:
                    return m[0][0]
                if n == 2:
                    return m[0][0] * m[1][1] - m[0][1] * m[1][0]
                
                mat = [row[:] for row in m]
                det = 1.0
                
                for i in range(n):
                    pivot_row = i
                    while pivot_row < n and abs(mat[pivot_row][i]) < 1e-9:
                        pivot_row += 1
                        
                    if pivot_row == n:
                        return 0.0
                        
                    if pivot_row != i:
                        mat[i], mat[pivot_row] = mat[pivot_row], mat[i]
                        det *= -1.0
                        
                    pivot_val = mat[i][i]
                    for r in range(i + 1, n):
                        factor = mat[r][i] / pivot_val
                        for c in range(i, n):
                            mat[r][c] -= factor * mat[i][c]
                            
                for i in range(n):
                    det *= mat[i][i]
                    
                return det
                
            det_value = determinant(matrix)
            print(f"\n📊 Determinant: {det_value:.2f}")
            print("✅ Calculation successful!\n")
        except Exception:
            print("❌ Error: Please enter valid numbers or ensure it's a square matrix.\n")

    elif choice == "R":
        try:
            r = int(input("➡️ Enter number of rows: "))
            c = int(input("➡️ Enter number of columns: "))
            
            print(f"\n📝 Enter elements for Matrix ({r}x{c}) row by row (space separated):")
            matrix = []
            for _ in range(r):
                row = list(map(float, input("🔢 ").split()))
                matrix.append(row)
                
            _, rank_value = helper_gaussian_elimination(matrix)
            print(f"\n📊 Rank of the Matrix: {rank_value}")
            print("✅ Calculation successful!\n")
        except Exception:
            print("❌ Error: Please enter valid row elements.\n")

    elif choice == "I":
        try:
            n = int(input("➡️ Enter size of square matrix (n x n): "))
            print(f"\n📝 Enter elements for Matrix ({n}x{n}) row by row (space separated):")
            matrix = []
            for _ in range(n):
                row = list(map(float, input("🔢 ").split()))
                matrix.append(row)
                
            inv_matrix = calculate_inverse(matrix)
            print("\n📊 Inverted Matrix:")
            for row in inv_matrix:
                print("\t".join([f"{val:.2f}" for val in row]))
            print("✅ Calculation successful!\n")
        except ValueError as ve:
            print(f"❌ Error: {ve}\n")
        except Exception:
            print("❌ Error: Please enter valid numbers or ensure it's a square matrix.\n")

    else:
        print("⚠️ Invalid input\n")

print("\n👋 Thanks for using Matrix Calculator! Goodbye!\n")