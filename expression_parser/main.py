"""
Interactive CLI REPL and runner for Mathematical Expression Parser & Evaluator.
"""

import sys
import os

# Ensure project root is in sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from typing import Dict, Union
from expression_parser import evaluate_expression, TokenizerError, ParseError, EvaluationError


def run_repl():
    print("=" * 60)
    print("  Mathematical Expression Parser & Evaluator (CLI REPL)")
    print("=" * 60)
    print("Commands:")
    print("  exit / quit : Exit REPL")
    print("  vars        : Show current active variables")
    print("  let x = val : Set variable value (e.g. let x = 10)")
    print("  clear       : Reset custom variables")
    print("-" * 60)

    user_vars: Dict[str, Union[int, float]] = {}

    while True:
        try:
            inp = input("math> ").strip()
        except (KeyboardInterrupt, EOFError):
            print("\nExiting REPL. Goodbye!")
            break

        if not inp:
            continue

        if inp.lower() in ("exit", "quit"):
            print("Goodbye!")
            break

        if inp.lower() == "vars":
            if not user_vars:
                print("No custom variables set. Builtins available: pi, e, tau.")
            else:
                print("Active variables:", user_vars)
            continue

        if inp.lower() == "clear":
            user_vars.clear()
            print("Custom variables cleared.")
            continue

        if inp.lower().startswith("let "):
            parts = inp[4:].split("=", 1)
            if len(parts) == 2:
                var_name = parts[0].strip()
                val_expr = parts[1].strip()

                if not var_name.isidentifier():
                    print(f"Error: Invalid variable name '{var_name}'")
                    continue

                try:
                    val = evaluate_expression(val_expr, user_vars)
                    user_vars[var_name] = val
                    print(f"Set {var_name} = {val}")
                except Exception as e:
                    print(f"Error evaluating variable value: {e}")
                continue
            else:
                print("Usage for assignment: let <var_name> = <expression>")
                continue

        try:
            result = evaluate_expression(inp, user_vars)
            print(f"Result: {result}")
        except (TokenizerError, ParseError, EvaluationError) as e:
            print(f"Error: {e}")
        except Exception as e:
            print(f"Unexpected error: {e}")


def main():
    if len(sys.argv) > 1:
        expr = " ".join(sys.argv[1:])
        try:
            res = evaluate_expression(expr)
            print(res)
        except Exception as e:
            print(f"Error: {e}", file=sys.stderr)
            sys.exit(1)
    else:
        run_repl()


if __name__ == "__main__":
    main()
