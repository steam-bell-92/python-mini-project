import sys
import os

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))
from utils.validation import get_choice, get_int, get_float_list

def add_matrices(m1: list[list[float]], m2: list[list[float]]) -> list[list[float]]:
    """Add two matrices of the same dimensions."""
    rows = len(m1)
    cols = len(m1[0])
    return [[m1[i][j] + m2[i][j] for j in range(cols)] for i in range(rows)]

def subtract_matrices(m1: list[list[float]], m2: list[list[float]]) -> list[list[float]]:
    """Subtract matrix m2 from m1."""
    rows = len(m1)
    cols = len(m1[0])
    return [[m1[i][j] - m2[i][j] for j in range(cols)] for i in range(rows)]

def multiply_matrices(m1: list[list[float]], m2: list[list[float]]) -> list[list[float]]:
    """Multiply two matrices."""
    r1 = len(m1)
    c1 = len(m1[0])
    r2 = len(m2)
    c2 = len(m2[0])
    if c1 != r2:
        raise ValueError("Matrix 1 columns must equal Matrix 2 rows for multiplication.")
    
    result = []
    for i in range(r1):
        row = []
        for j in range(c2):
            val = sum(m1[i][k] * m2[k][j] for k in range(c1))
            row.append(val)
        result.append(row)
    return result

def transpose_matrix(m: list[list[float]]) -> list[list[float]]:
    """Transpose a matrix."""
    r = len(m)
    c = len(m[0])
    return [[m[i][j] for i in range(r)] for j in range(c)]

def determinant_matrix(m: list[list[float]]) -> float:
    """Calculate determinant of a square matrix."""
    n = len(m)
    if n == 1:
        return m[0][0]
    elif n == 2:
        return m[0][0] * m[1][1] - m[0][1] * m[1][0]
    else:
        mat = [row[:] for row in m]
        det_value = 1.0
        is_singular = False
        for i in range(n):
            pivot_row = i
            while pivot_row < n and abs(mat[pivot_row][i]) < 1e-9:
                pivot_row += 1
                
            if pivot_row == n:
                return 0.0
                
            if pivot_row != i:
                mat[i], mat[pivot_row] = mat[pivot_row], mat[i]
                det_value *= -1.0
                
            pivot_val = mat[i][i]
            for r in range(i + 1, n):
                factor = mat[r][i] / pivot_val
                for c in range(i, n):
                    mat[r][c] -= factor * mat[i][c]
                    
        for i in range(n):
            det_value *= mat[i][i]
        return det_value

def rank_matrix(m: list[list[float]]) -> int:
    """Calculate rank of a matrix."""
    mat = [row[:] for row in m]
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
            
    return sum(1 for row in mat if any(abs(val) > 1e-9 for val in row))

def inverse_matrix(m: list[list[float]]) -> list[list[float]]:
    """Invert a square matrix. Raises ValueError if matrix is singular."""
    n = len(m)
    aug_mat = [m[i][:] + [1.0 if i == j else 0.0 for j in range(n)] for i in range(n)]
    
    for i in range(n):
        pivot_row = i
        while pivot_row < n and abs(aug_mat[pivot_row][i]) < 1e-9:
            pivot_row += 1
            
        if pivot_row == n:
            raise ValueError("The matrix is singular (determinant is 0) and cannot be inverted.")
            
        aug_mat[i], aug_mat[pivot_row] = aug_mat[pivot_row], aug_mat[i]
        
        pivot_val = aug_mat[i][i]
        aug_mat[i] = [val / pivot_val for val in aug_mat[i]]
        
        for r_idx in range(n):
            if r_idx != i:
                factor = aug_mat[r_idx][i]
                aug_mat[r_idx] = [aug_mat[r_idx][c_idx] - factor * aug_mat[i][c_idx] for c_idx in range(2 * n)]
                
    return [row[n:] for row in aug_mat]

def get_matrix_input(rows: int, cols: int) -> list[list[float]]:
    matrix = []
    for _ in range(rows):
        row = get_float_list(
            prompt="🔢 ",
            min_len=cols,
            max_len=cols,
            error_invalid="❌ Error: Please enter valid numbers or ensure dimensions match."
        )
        matrix.append(row)
    return matrix

def main() -> None:
    print("=" * 50)
    print("🎮 MATRIX CALCULATOR 🎮")
    print("=" * 50)
    print("Easily add, subtract, multiply, transpose, calculate determinant, rank, and inverse of matrices!\n")

    while True:
        print("=" * 50)
        choice = get_choice(
            prompt="🎯 Choose Operation: Add (A), Subtract (S), Multiply (M), Transpose (T), Determinant (D), Rank (R), Inverse (I), or Quit (Q): ",
            choices=["A", "S", "M", "T", "D", "R", "I", "Q", "QUIT"],
            error_invalid="⚠️ Invalid input\n"
        )

        if choice in ["Q", "QUIT"]:
            print("\n👋 Thanks for using Matrix Calculator! Goodbye!\n")
            break

        elif choice in ["A", "S"]:
            try:
                rows = get_int(prompt="➡️ Enter number of rows: ")
                cols = get_int(prompt="➡️ Enter number of columns: ")
                
                print(f"\n📝 Enter elements for Matrix 1 ({rows}x{cols}) row by row (space separated):")
                matrix1 = get_matrix_input(rows, cols)
                    
                print(f"\n📝 Enter elements for Matrix 2 ({rows}x{cols}) row by row (space separated):")
                matrix2 = get_matrix_input(rows, cols)
                    
                print("\n📊 Resulting Matrix:")
                if choice == "A":
                    result = add_matrices(matrix1, matrix2)
                else:
                    result = subtract_matrices(matrix1, matrix2)
                
                for row in result:
                    print("\t".join([f"{val:.2f}" for val in row]))
                print("\n✅ Calculation successful!\n")
            except Exception:
                print("❌ Error: Please enter valid numbers or ensure dimensions match.\n")

        elif choice == "M":
            try:
                r1 = get_int(prompt="➡️ Enter number of rows for Matrix 1: ")
                c1 = get_int(prompt="➡️ Enter number of columns for Matrix 1: ")
                
                print(f"\n📝 Enter elements for Matrix 1 ({r1}x{c1}) row by row (space separated):")
                matrix1 = get_matrix_input(r1, c1)
                    
                r2 = get_int(prompt=f"\n➡️ Enter number of rows for Matrix 2 (MUST be {c1}): ")
                c2 = get_int(prompt="➡️ Enter number of columns for Matrix 2: ")
                
                if c1 != r2:
                    print("❌ Error: Matrix 1 columns must equal Matrix 2 rows for multiplication.\n")
                    continue
                    
                print(f"\n📝 Enter elements for Matrix 2 ({r2}x{c2}) row by row (space separated):")
                matrix2 = get_matrix_input(r2, c2)
                    
                print("\n📊 Resulting Matrix:")
                result = multiply_matrices(matrix1, matrix2)
                
                for row in result:
                    print("\t".join([f"{val:.2f}" for val in row]))
                print("\n✅ Calculation successful!\n")
            except Exception:
                print("❌ Error: Please enter valid numbers or ensure dimensions match.\n")

        elif choice == "T":
            try:
                r = get_int(prompt="➡️ Enter number of rows: ")
                c = get_int(prompt="➡️ Enter number of columns: ")
                
                print(f"\n📝 Enter elements for Matrix ({r}x{c}) row by row (space separated):")
                matrix = get_matrix_input(r, c)
                    
                print("\n📊 Transposed Matrix:")
                result = transpose_matrix(matrix)
                for row in result:
                    print("\t".join([f"{val:.2f}" for val in row]))
                print("\n✅ Calculation successful!\n")
            except Exception:
                print("❌ Error: Please enter valid numbers.\n")

        elif choice == "D":
            try:
                n = get_int(prompt="➡️ Enter size of square matrix (n x n): ")
                
                print(f"\n📝 Enter elements for Matrix ({n}x{n}) row by row (space separated):")
                matrix = get_matrix_input(n, n)
                    
                det_value = determinant_matrix(matrix)
                print(f"\n📊 Determinant: {det_value:.2f}")
                print("✅ Calculation successful!\n")
            except Exception:
                print("❌ Error: Please enter valid numbers or ensure it's a square matrix.\n")

        elif choice == "R":
            try:
                r = get_int(prompt="➡️ Enter number of rows: ")
                c = get_int(prompt="➡️ Enter number of columns: ")
                
                print(f"\n📝 Enter elements for Matrix ({r}x{c}) row by row (space separated):")
                matrix = get_matrix_input(r, c)
                    
                rank_value = rank_matrix(matrix)
                print(f"\n📊 Rank of the Matrix: {rank_value}")
                print("✅ Calculation successful!\n")
            except Exception:
                print("❌ Error: Please enter valid row elements.\n")

        elif choice == "I":
            try:
                n = get_int(prompt="➡️ Enter size of square matrix (n x n): ")
                
                print(f"\n📝 Enter elements for Matrix ({n}x{n}) row by row (space separated):")
                matrix = get_matrix_input(n, n)
                    
                inv_matrix = inverse_matrix(matrix)
                
                print("\n📊 Inverted Matrix:")
                for row in inv_matrix:
                    print("\t".join([f"{val:.2f}" for val in row]))
                print("✅ Calculation successful!\n")
            except Exception as e:
                # If ValueError is raised due to singularity
                if "singular" in str(e):
                    print("❌ Error: The matrix is singular (determinant is 0) and cannot be inverted.\n")
                else:
                    print("❌ Error: Please enter valid numbers or ensure it's a square matrix.\n")

if __name__ == "__main__":
    main()