# Testing & Code Quality Guidelines

This document outlines the testing and code quality standards for the Python Mini Projects repository.

## Python Syntax & Validation

All Python code in the `games/`, `math/`, and `utilities/` directories must:

1. **Have valid Python syntax** - Code must compile without syntax errors
2. **Have correct imports** - All imported modules must be available (standard library or in requirements.txt)
3. **Run without immediate errors** - Code should execute its core functionality

### Automatic Validation

CI/CD pipeline automatically validates:
- Python syntax via `py_compile`
- Import availability
- Executable structure

If your code fails validation, the CI will show specific error messages.

## Unit Testing

Each project should have corresponding unit tests in the `tests/` directory.

### Writing Tests

1. **Test file naming**: Use `test_<project_name>.py` format
2. **Test class structure**: Group tests in classes for organization
3. **Test method naming**: Use `test_<functionality>` format

Example:
```python
# tests/test_fibonacci.py
import pytest
from fibonacci_series import generate_fibonacci

class TestFibonacci:
    def test_basic_sequence(self):
        result = generate_fibonacci(5)
        assert result == [0, 1, 1, 2, 3]

    def test_single_element(self):
        result = generate_fibonacci(1)
        assert result == [0]
```

### Running Tests Locally

```bash
# Run all tests
pytest tests/ -v

# Run specific test file
pytest tests/test_fibonacci.py -v

# Run specific test class
pytest tests/test_fibonacci.py::TestFibonacci -v

# Run specific test method
pytest tests/test_fibonacci.py::TestFibonacci::test_basic_sequence -v
```

## Code Quality Standards

### 1. Style Guidelines (PEP 8)

Follow Python Enhancement Proposal 8 (PEP 8):

```python
# Good
def calculate_sum(numbers):
    """Calculate sum of numbers."""
    total = 0
    for num in numbers:
        total += num
    return total

# Bad - unclear naming, no spacing
def calc(n):
    t=0
    for x in n:t+=x
    return t
```

### 2. Imports

- Place all imports at the top of file
- Organize in order: standard library, third-party, local imports
- One import per line (except `from x import a, b` which is acceptable)

```python
# Good
import os
import sys
from pathlib import Path
from typing import List
```

### 3. Docstrings

Functions and classes should have docstrings:

```python
def fibonacci(n: int) -> int:
    """
    Calculate the nth Fibonacci number.
    
    Args:
        n: Position in Fibonacci sequence (0-indexed)
    
    Returns:
        The nth Fibonacci number
    """
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

### 4. Type Hints (Optional but Recommended)

Use type hints for better code clarity:

```python
from typing import List, Dict, Tuple

def process_data(items: List[str]) -> Dict[str, int]:
    """Process items and return count."""
    return {item: len(item) for item in items}
```

### 5. Error Handling

Handle errors gracefully:

```python
# Good
def read_file(filepath: str) -> str:
    try:
        with open(filepath, 'r') as f:
            return f.read()
    except FileNotFoundError:
        print(f"Error: File '{filepath}' not found")
        return ""

# Bad - silent failure
def read_file(filepath):
    try:
        return open(filepath).read()
    except:
        pass
```

## Common Issues & Fixes

### Issue: ModuleNotFoundError

```python
# Problem
import numpy as np  # numpy not in requirements.txt

# Solution
# 1. Check if module is needed
# 2. Use only standard library, or
# 3. Add to requirements.txt and create PR to update dependencies
```

### Issue: Syntax Errors

```python
# Problem
def function(
    x, y  # Missing closing parenthesis

# Solution
def function(x, y):
    pass
```

### Issue: Broken Imports

```python
# Problem
from fibonacci_series import fibonacci_generator
# But function is named 'generate_fibonacci'

# Solution
from fibonacci_series import generate_fibonacci
```

## CI/CD Pipeline

When you open a Pull Request:

1. **Syntax validation** runs automatically
2. **Example validation** tests all code files
3. **Unit tests** execute against Python 3.10, 3.11, 3.12
4. **All checks must pass** before merge

### Viewing CI Results

1. Go to your PR on GitHub
2. Scroll to "Checks" section
3. Click on failed check to see details
4. Fix the issue locally and push again

## Pre-commit Checklist

Before submitting a PR:

- [ ] Python syntax is valid (`python3 -m py_compile file.py`)
- [ ] Imports are correct and available
- [ ] Code follows PEP 8 guidelines
- [ ] Docstrings added for functions/classes
- [ ] Unit tests written and pass locally
- [ ] No commented-out code left
- [ ] Error handling implemented
- [ ] README updated if needed

## Questions?

If CI fails and you're unsure how to fix it:

1. Read the error message carefully - it usually indicates the problem
2. Check similar files in the repo for examples
3. Comment on your PR asking for help
4. Refer to [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/)

## References

- [PEP 8 Style Guide](https://www.python.org/dev/peps/pep-0008/)
- [Python Type Hints](https://docs.python.org/3/library/typing.html)
- [Pytest Documentation](https://docs.pytest.org/)
- [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html)
