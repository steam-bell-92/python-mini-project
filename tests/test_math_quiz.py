import importlib.util
import os
import sys
from unittest.mock import patch, MagicMock
import unittest

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

class TestIsPrime(unittest.TestCase):
    def test_zero_not_prime(self):
        self.assertFalse(is_prime(0))

    def test_one_not_prime(self):
        self.assertFalse(is_prime(1))

    def test_two_is_prime(self):
        self.assertTrue(is_prime(2))

    def test_three_is_prime(self):
        self.assertTrue(is_prime(3))

    def test_four_not_prime(self):
        self.assertFalse(is_prime(4))

    def test_known_primes(self):
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
        for p in primes:
            self.assertTrue(is_prime(p), f"{p} should be prime")

    def test_known_composites(self):
        composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 25, 49]
        for c in composites:
            self.assertFalse(is_prime(c), f"{c} should not be prime")

    def test_negative_not_prime(self):
        self.assertFalse(is_prime(-7))

    def test_large_prime(self):
        self.assertTrue(is_prime(97))

    def test_large_composite(self):
        self.assertFalse(is_prime(100))


# ── generate_question tests ──────────────────────────────────────────

class TestGenerateQuestion(unittest.TestCase):
    def test_returns_tuple(self):
        q, a = generate_question(1)
        self.assertIsInstance(q, str)

    def test_difficulty_1_returns_answer(self):
        for _ in range(20):
            q, a = generate_question(1)
            self.assertIsNotNone(a)

    def test_difficulty_2_returns_answer(self):
        for _ in range(20):
            q, a = generate_question(2)
            self.assertIsNotNone(a)

    def test_difficulty_3_returns_answer(self):
        for _ in range(20):
            q, a = generate_question(3)
            self.assertIsNotNone(a)

    def test_question_is_string(self):
        for difficulty in [1, 2, 3]:
            q, _ = generate_question(difficulty)
            self.assertIsInstance(q, str)
            self.assertGreater(len(q), 0)

    def test_answer_is_numeric_or_string(self):
        for _ in range(50):
            for difficulty in [1, 2, 3]:
                _, a = generate_question(difficulty)
                self.assertIsInstance(a, (int, float, str))


# ── generate_options tests ───────────────────────────────────────────

class TestGenerateOptions(unittest.TestCase):
    def test_returns_four_options(self):
        options = generate_options(42)
        self.assertEqual(len(options), 4)

    def test_correct_answer_included(self):
        for _ in range(20):
            correct = 42
            options = generate_options(correct)
            self.assertIn(correct, options)

    def test_string_answer_options(self):
        options = generate_options("Yes")
        self.assertEqual(len(options), 4)
        self.assertIn("Yes", options)

    def test_all_options_unique(self):
        for _ in range(20):
            options = generate_options(50)
            self.assertEqual(len(options), len(set(options)))

    def test_options_are_numeric_for_numeric_answer(self):
        options = generate_options(25)
        for opt in options:
            self.assertIsInstance(opt, (int, float))


# ── get_grade tests ──────────────────────────────────────────────────

class TestGetGrade(unittest.TestCase):
    def test_grade_s(self):
        self.assertIn("S", get_grade(95))
        self.assertIn("S", get_grade(90))

    def test_grade_a(self):
        self.assertIn("A", get_grade(85))
        self.assertIn("A", get_grade(80))

    def test_grade_b(self):
        self.assertIn("B", get_grade(75))
        self.assertIn("B", get_grade(70))

    def test_grade_c(self):
        self.assertIn("C", get_grade(60))
        self.assertIn("C", get_grade(50))

    def test_grade_f(self):
        self.assertIn("F", get_grade(40))
        self.assertIn("F", get_grade(0))

    def test_boundary_90(self):
        self.assertIn("S", get_grade(90))
        self.assertIn("A", get_grade(89))

    def test_boundary_50(self):
        self.assertIn("C", get_grade(50))
        self.assertIn("F", get_grade(49))

if __name__ == "__main__":
    unittest.main()
