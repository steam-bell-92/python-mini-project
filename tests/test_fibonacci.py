"""
Tests for math/Fibonacci-Series/Fibonacci-Series.py

We import the fibonacci() and build_layout() functions dynamically,
suppressing top-level turtle/print/input calls.
"""

import importlib.util
import os
from unittest.mock import patch, MagicMock
import pytest


# ── Load module while suppressing turtle and I/O ──────────────────────

def _load_fibonacci_module():
    """Import the Fibonacci module, mocking turtle and suppressing I/O."""
    file_path = os.path.join(
        os.path.dirname(__file__), "..",
        "math", "Fibonacci-Series", "Fibonacci-Series.py"
    )
    file_path = os.path.abspath(file_path)

    spec = importlib.util.spec_from_file_location("fibonacci_series", file_path)
    module = importlib.util.module_from_spec(spec)

    # Mock turtle before loading
    mock_turtle = MagicMock()
    with patch.dict("sys.modules", {"turtle": mock_turtle}):
        with patch("builtins.print"):
            spec.loader.exec_module(module)

    return module


_mod = _load_fibonacci_module()
fibonacci = _mod.fibonacci
build_layout = _mod.build_layout


# ── fibonacci() tests ────────────────────────────────────────────────

class TestFibonacci:
    def test_zero_terms(self):
        assert fibonacci(0) == []

    def test_negative_terms(self):
        assert fibonacci(-5) == []

    def test_one_term(self):
        assert fibonacci(1) == [1]

    def test_two_terms(self):
        assert fibonacci(2) == [1, 1]

    def test_five_terms(self):
        assert fibonacci(5) == [1, 1, 2, 3, 5]

    def test_ten_terms(self):
        result = fibonacci(10)
        assert result == [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    def test_each_term_is_sum_of_previous_two(self):
        result = fibonacci(15)
        for i in range(2, len(result)):
            assert result[i] == result[i - 1] + result[i - 2]

    def test_length_matches_input(self):
        for n in [1, 5, 10, 20]:
            assert len(fibonacci(n)) == n


# ── build_layout() tests ─────────────────────────────────────────────

class TestBuildLayout:
    def test_single_square(self):
        fib = [1]
        squares, min_x, min_y, max_x, max_y = build_layout(fib)
        assert len(squares) == 1
        x, y, size, direction = squares[0]
        assert size == 1

    def test_bounding_box_positive(self):
        fib = fibonacci(6)  # [1, 1, 2, 3, 5, 8]
        squares, min_x, min_y, max_x, max_y = build_layout(fib)
        # Bounding box should have non-negative area
        assert max_x - min_x > 0
        assert max_y - min_y > 0

    def test_square_count_matches_terms(self):
        for n in [4, 6, 8]:
            fib = fibonacci(n)
            squares, *_ = build_layout(fib)
            assert len(squares) == n

    def test_directions_cycle(self):
        fib = fibonacci(8)
        squares, *_ = build_layout(fib)
        for i, (x, y, size, direction) in enumerate(squares):
            assert direction == i % 4
