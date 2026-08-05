import math
import numpy as np
import matplotlib.pyplot as plt

# Explicit allowlist of safe numpy functions for eval sandbox.
# Never expose np.__dict__ directly -- it contains thousands of objects
# including internals that can be chained to escape the sandbox.
_ALLOWED_NUMPY_FUNCS = {
    "array": np.array,
    "linspace": np.linspace,
    "arange": np.arange,
    "sin": np.sin,
    "cos": np.cos,
    "tan": np.tan,
    "arcsin": np.arcsin,
    "arccos": np.arccos,
    "arctan": np.arctan,
    "abs": np.abs,
    "sqrt": np.sqrt,
    "log": np.log,
    "log10": np.log10,
    "log2": np.log2,
    "exp": np.exp,
    "power": np.power,
    "pi": np.pi,
    "e": np.e,
    "degrees": np.degrees,
    "radians": np.radians,
    "sign": np.sign,
    "ceil": np.ceil,
    "floor": np.floor,
    "round": np.round,
    "sinh": np.sinh,
    "cosh": np.cosh,
    "tanh": np.tanh,
}

def evaluate_expression(expr, x_val=None):
    """
    Safely evaluate a mathematical expression.
    If x_val is provided, uses numpy functions to support array operations for graphing.
    """
    # Allowed names for safe evaluation -- math namespace + explicit numpy allowlist
    allowed_names = {k: v for k, v in math.__dict__.items() if not k.startswith("__")}
    allowed_names["abs"] = abs
    allowed_names["round"] = round

    if x_val is not None:
        allowed_names["x"] = x_val
        # Use explicit allowlist instead of full np.__dict__
        allowed_names.update(_ALLOWED_NUMPY_FUNCS)

    try:
        # __builtins__ must be an empty dict to prevent accessing dangerous built-in functions
        result = eval(expr, {"__builtins__": {}}, allowed_names)
        return result
    except Exception as e:
        raise ValueError(f"Invalid expression: {e}")


def main():
    print("=" * 50)
    print("🧮 WELCOME TO SCIENTIFIC GRAPHING CALCULATOR 🧮")
    print("=" * 50)

    history = []
    run = True

    while run:
        print("\n--------🧮 MENU 🧮---------")
        print('1. Standard Mode (Calculate expressions) ➕')
        print('2. Graphing Mode (Plot equations) 📉')
        print('3. View History 📜')
        print('4. Exit 🚪')

        user_choice = input('\n📌 Enter your choice (1-4): ').strip()

        if user_choice == '4':
            print('\n👋 Goodbye! Have a great day! 🌟\n')
            run = False
            break

        if user_choice == '3':
            if not history:
                print("📜 No calculations yet.")
            else:
                print("\n------ 📜 Calculation History 📜 ------")
                for item in history:
                    print(item)
            continue

        if user_choice == '1':
            print("\n--- ➕ Standard Mode ---")
            print("Enter a mathematical expression (e.g., '2 + 3 * sin(pi/2)' or 'log(e)').")
            print("Type 'back' to return to the main menu.")
            while True:
                expr = input("\n🔢 Expression: ").strip()
                if expr.lower() == 'back':
                    break
                if not expr:
                    continue
                try:
                    result = evaluate_expression(expr)
                    print(f"✅ Result: {result}")
                    history.append(f"{expr} = {result}")
                except Exception as e:
                    print(f"❌ Error evaluating expression: {e}")

        elif user_choice == '2':
            print("\n--- 📉 Graphing Mode ---")
            print("Enter an equation in terms of 'x' (e.g., 'x**2 - 4*x + 4' or 'sin(x)').")
            print("Type 'back' to return to the main menu.")
            while True:
                expr = input("\n📉 Equation f(x) = ").strip()
                if expr.lower() == 'back':
                    break
                if not expr:
                    continue
                
                try:
                    # Generate x values
                    x = np.linspace(-10, 10, 400)
                    
                    # Evaluate the user's expression
                    y = evaluate_expression(expr, x_val=x)
                    
                    # Handle cases where the expression evaluates to a scalar (e.g., "5")
                    if np.isscalar(y):
                        y = np.full_like(x, y)

                    # Plotting
                    plt.figure(figsize=(8, 6))
                    plt.plot(x, y, label=f"y = {expr}", color='blue')
                    plt.title("Graphing Calculator")
                    plt.xlabel("x")
                    plt.ylabel("f(x)")
                    
                    # Add axis lines
                    plt.axhline(0, color='black', linewidth=1)
                    plt.axvline(0, color='black', linewidth=1)
                    
                    plt.grid(color='gray', linestyle='--', linewidth=0.5)
                    plt.legend()
                    
                    print(f"📈 Showing plot for: y = {expr}. Close the plot window to continue.")
                    plt.show()
                    
                    history.append(f"Graphed: y = {expr}")
                except Exception as e:
                    print(f"❌ Error graphing equation: {e}")

        else:
            print('❌ Invalid choice. Please enter a number between 1 and 4.')

if __name__ == "__main__":
    main()
