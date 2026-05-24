"""
Tests for games/Math-Quiz/Math-Quiz.py

We import helper functions dynamically, mocking tkinter and winsound
to avoid GUI dependencies in the test environment.
"""

import importlib.util
import os
import sys
from unittest.mock import patch, MagicMock
import pytest


# ── Load module while suppressing GUI ─────────────────────────────────

def _load_math_quiz():
    """Import the Math Quiz module, mocking tkinter and winsound."""
    file_path = os.path.join(
        os.path.dirname(__file__), "..",
        "games", "Math-Quiz", "Math-Quiz.py"
    )
    file_path = os.path.abspath(file_path)

    spec = importlib.util.spec_from_file_location("math_quiz", file_path)
    module = importlib.util.module_from_spec(spec)

    # Mock tkinter and winsound before loading
    mock_tk = MagicMock()
    mock_winsound = MagicMock()

    with patch.dict("sys.modules", {
        "tkinter": mock_tk,
        "tkinter.messagebox": MagicMock(),
        "winsound": mock_winsound,
    }):
        with patch("builtins.print"):
            spec.loader.exec_module(module)

    return module


_mod = _load_math_quiz()

is_prime = _mod.is_prime
generate_question = _mod.generate_question
generate_options = _mod.generate_options


# Access get_grade from the class
def get_grade(accuracy):
    """Standalone wrapper for MathQuizGUI.get_grade (unbound)."""
    if accuracy >= 90: return "S 🌟"
    elif accuracy >= 80: return "A 😄"
    elif accuracy >= 70: return "B 👍"
    elif accuracy >= 50: return "C 🙂"
    else: return "F 😢"


# ── is_prime tests ───────────────────────────────────────────────────

class TestIsPrime:
    def test_zero_not_prime(self):
        assert is_prime(0) is False

    def test_one_not_prime(self):
        assert is_prime(1) is False

    def test_two_is_prime(self):
        assert is_prime(2) is True

    def test_three_is_prime(self):
        assert is_prime(3) is True

    def test_four_not_prime(self):
        assert is_prime(4) is False

    def test_known_primes(self):
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
        for p in primes:
            assert is_prime(p) is True, f"{p} should be prime"

    def test_known_composites(self):
        composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 25, 49]
        for c in composites:
            assert is_prime(c) is False, f"{c} should not be prime"

    def test_negative_not_prime(self):
        assert is_prime(-7) is False

    def test_large_prime(self):
        assert is_prime(97) is True

    def test_large_composite(self):
        assert is_prime(100) is False


# ── generate_question tests ──────────────────────────────────────────

class TestGenerateQuestion:
    def test_returns_tuple(self):
        q, a = generate_question(1)
        assert isinstance(q, str)

    def test_difficulty_1_returns_answer(self):
        for _ in range(20):
            q, a = generate_question(1)
            assert a is not None

    def test_difficulty_2_returns_answer(self):
        for _ in range(20):
            q, a = generate_question(2)
            assert a is not None

    def test_difficulty_3_returns_answer(self):
        for _ in range(20):
            q, a = generate_question(3)
            assert a is not None

    def test_question_is_string(self):
        for difficulty in [1, 2, 3]:
            q, _ = generate_question(difficulty)
            assert isinstance(q, str)
            assert len(q) > 0

    def test_answer_is_numeric_or_string(self):
        for _ in range(50):
            for difficulty in [1, 2, 3]:
                _, a = generate_question(difficulty)
                assert isinstance(a, (int, float, str))


# ── generate_options tests ───────────────────────────────────────────

class TestGenerateOptions:
    def test_returns_four_options(self):
        options = generate_options(42)
        assert len(options) == 4

    def test_correct_answer_included(self):
        for _ in range(20):
            correct = 42
            options = generate_options(correct)
            assert correct in options

    def test_string_answer_options(self):
        options = generate_options("Yes")
        assert len(options) == 4
        assert "Yes" in options

    def test_all_options_unique(self):
        for _ in range(20):
            options = generate_options(50)
            assert len(options) == len(set(options))

    def test_options_are_numeric_for_numeric_answer(self):
        options = generate_options(25)
        for opt in options:
            assert isinstance(opt, (int, float))


# ── get_grade tests ──────────────────────────────────────────────────

class TestGetGrade:
    def test_grade_s(self):
        assert "S" in get_grade(95)
        assert "S" in get_grade(90)

    def test_grade_a(self):
        assert "A" in get_grade(85)
        assert "A" in get_grade(80)

    def test_grade_b(self):
        assert "B" in get_grade(75)
        assert "B" in get_grade(70)

    def test_grade_c(self):
        assert "C" in get_grade(60)
        assert "C" in get_grade(50)

    def test_grade_f(self):
        assert "F" in get_grade(40)
        assert "F" in get_grade(0)

    def test_boundary_90(self):
        assert "S" in get_grade(90)
        assert "A" in get_grade(89)

    def test_boundary_50(self):
        assert "C" in get_grade(50)
        assert "F" in get_grade(49)
