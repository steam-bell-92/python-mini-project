# Mathematical Expression Parser and Evaluator

A zero-external-dependency mathematical expression parser, tokenizer, AST builder, and evaluator built from scratch in Python.

## Features

- **Tokenizer**: Converts input text strings into tokens (Numbers, Operators, Identifiers, Functions, Parentheses). Supports implicit multiplication (e.g. `2(3+4)` or `3pi`).
- **AST Parser**: Recursive-descent parser building Abstract Syntax Trees respecting operator precedence and associativity (`^`, `*`, `/`, `%`, `+`, `-`).
- **Evaluator**: Walks AST nodes safely to calculate results with variable binding support and builtin math functions (`sin`, `cos`, `tan`, `sqrt`, `abs`, `log`, `exp`, `min`, `max`, `floor`, `ceil`).
- **Interactive REPL & CLI**: Support for interactive session and CLI expression evaluation.

## Usage

### CLI REPL

```bash
python expression_parser/main.py
```

### Direct Expression Evaluation

```bash
python expression_parser/main.py "2 + 3 * (4 - 1)^2"
# Output: 29.0
```

### Python API

```python
from expression_parser import evaluate_expression

result = evaluate_expression("sin(pi / 2) + cos(0)")
print(result) # 2.0

vars_dict = {"x": 5, "y": 2}
res = evaluate_expression("x^2 + 2*x*y + y^2", vars_dict)
print(res) # 49.0
```
