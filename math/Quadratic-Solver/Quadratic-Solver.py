import sys
import os
import math
import cmath

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))
from utils.validation import get_non_empty_string

def solve_quadratic(a: float, b: float, c: float) -> tuple[str, complex | float, complex | float, float]:
    """Solve the quadratic equation ax^2 + bx + c = 0."""
    if a == 0:
        raise ValueError("Not a quadratic equation (a cannot be 0)!")
    d = (b ** 2) - (4 * a * c)
    if d > 0:
        root1 = (-b + math.sqrt(d)) / (2 * a)
        root2 = (-b - math.sqrt(d)) / (2 * a)
        return "distinct_real", root1, root2, d
    elif d == 0:
        root = -b / (2 * a)
        return "repeated_real", root, root, d
    else:
        root1 = (-b + cmath.sqrt(d)) / (2 * a)
        root2 = (-b - cmath.sqrt(d)) / (2 * a)
        return "complex", root1, root2, d

def main() -> None:
    print("=" * 40)
    print("🧮 QUADRATIC EQUATION SOLVER 🧮")
    print("=" * 40)
    print("\n📝 Easily find the roots of a quadratic equation in the form of ax^2 + bx + c = 0.")
    print("💡 Input format should be three numbers separated by commas: a, b, c")

    while True:
        print("\n" + "=" * 40)
        inp = get_non_empty_string(
            prompt="🎯 Enter a, b, c (or type 'q' to quit): "
        )
        
        if inp.lower() == 'q':
            print("\n👋 Thanks for using Quadratic Solver! Goodbye!\n")
            break
            
        try:
            parts = [p.strip() for p in inp.split(",") if p.strip()]
            if len(parts) != 3:
                print("❌ Error: Please enter exactly three numbers separated by commas.")
                continue
                
            a = float(parts[0])
            b = float(parts[1])
            c = float(parts[2])
        except ValueError:
            print("❌ Error: Please enter valid numbers.")
            continue

        if a == 0:
            print("⚠️ Error: Not a quadratic equation (a cannot be 0)!")
            continue

        roots_type, root1, root2, d = solve_quadratic(a, b, c)

        print(f"\n🚀 Equation: {a}x² + {b}x + {c} = 0")
        print(f"🔍 Discriminant (Δ) = {d}")

        if roots_type == "distinct_real":
            print("🟢 The equation has two distinct real roots.")
            # Check if perfect square for exact integer/rational notation if they are integers
            if math.isqrt(int(d))**2 == int(d) and d.is_integer() and a.is_integer() and b.is_integer() and c.is_integer():
                print("✨ Roots are rational:")
            else:
                print("✨ Roots are irrational:")
                
            print(f"  💠 x1 = {root1:.4f}")
            print(f"  💠 x2 = {root2:.4f}")
            
        elif roots_type == "repeated_real":
            print("🟡 The equation has one repeated real root.")
            print(f"  💠 x = {root1:.4f}")
            
        else:
            print("🔴 The equation has two complex roots.")
            # Format complex roots cleanly
            r1_real = root1.real
            r1_imag = root1.imag
            r2_real = root2.real
            r2_imag = abs(root2.imag) # Absolute value for formatting
            
            print(f"  💠 x1 = {r1_real:.4f} + {r1_imag:.4f}i")
            print(f"  💠 x2 = {r2_real:.4f} - {r2_imag:.4f}i")
            
        again = input("\n🔄 Do you want to solve another equation? (y/n): ").strip().lower()
        if again != 'y':
            print("\n👋 Thanks for using Quadratic Solver! Goodbye!\n")
            break

if __name__ == "__main__":
    main()
