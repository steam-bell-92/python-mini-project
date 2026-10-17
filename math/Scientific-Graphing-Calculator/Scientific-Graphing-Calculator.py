import ast
import math
import operator

import numpy as np
import matplotlib.pyplot as plt

_BINARY_OPS = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.FloorDiv: operator.floordiv,
    ast.Mod: operator.mod,
    ast.Pow: operator.pow,
}
_UNARY_OPS = {ast.UAdd: operator.pos, ast.USub: operator.neg}

# Guards against expressions such as 9**9**9 that would hang the program.
_MAX_INT_EXPONENT = 10_000


def _build_namespace(x_val=None):
    """Return the names an expression may use (math functions/constants, and x)."""
    names = {k: v for k, v in vars(math).items() if not k.startswith("_")}
    names["abs"] = abs
    names["round"] = round
    if x_val is not None:
        names["x"] = x_val
        # Prefer numpy's elementwise versions so sin(x) works on arrays.
        # Only ufuncs and the constants pi/e are exposed: they are pure math
        # and cannot touch the filesystem (unlike e.g. numpy.save).
        for key, value in vars(np).items():
            if isinstance(value, np.ufunc):
                names[key] = value
        names["pi"] = np.pi
        names["e"] = np.e
    return names


def _eval_node(node, names):
    if isinstance(node, ast.Expression):
        return _eval_node(node.body, names)
    if isinstance(node, ast.Constant):
        if isinstance(node.value, (int, float)) and not isinstance(node.value, bool):
            return node.value
        raise ValueError("only numeric literals are allowed")
    if isinstance(node, ast.Name):
        if node.id in names:
            return names[node.id]
        raise ValueError(f"unknown name '{node.id}'")
    if isinstance(node, ast.UnaryOp) and type(node.op) in _UNARY_OPS:
        return _UNARY_OPS[type(node.op)](_eval_node(node.operand, names))
    if isinstance(node, ast.BinOp) and type(node.op) in _BINARY_OPS:
        left = _eval_node(node.left, names)
        right = _eval_node(node.right, names)
        if (
            isinstance(node.op, ast.Pow)
            and isinstance(right, int)
            and abs(right) > _MAX_INT_EXPONENT
        ):
            raise ValueError("exponent too large")
        return _BINARY_OPS[type(node.op)](left, right)
    if isinstance(node, ast.Call):
        if not isinstance(node.func, ast.Name) or node.keywords:
            raise ValueError("only simple function calls are allowed")
        func = names.get(node.func.id)
        if not callable(func):
            raise ValueError(f"unknown function '{node.func.id}'")
        return func(*[_eval_node(arg, names) for arg in node.args])
    raise ValueError(f"unsupported syntax: {type(node).__name__}")


def evaluate_expression(expr, x_val=None):
    """
    Safely evaluate a mathematical expression.

    The expression is parsed with ``ast`` and only numeric literals, arithmetic
    operators, the names in ``math`` (plus ``abs``/``round``) and, when
    ``x_val`` is given, ``x`` and numpy's elementwise math functions are
    permitted. Attribute access, subscripts, comprehensions and every other
    construct are rejected, so no arbitrary code can run.
    """
    try:
        tree = ast.parse(expr.strip(), mode="eval")
        return _eval_node(tree, _build_namespace(x_val))
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
