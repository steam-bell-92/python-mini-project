import unittest
from unittest.mock import patch
import io
import os
import sys
import importlib.util

# Add project root to path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

# Load module dynamically
file_path = os.path.abspath(os.path.join(
    os.path.dirname(__file__), "..", "math", "Quadratic-Solver", "Quadratic-Solver.py"
))
spec = importlib.util.spec_from_file_location("quadratic_solver", file_path)
quadratic_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(quadratic_module)

solve_quadratic = quadratic_module.solve_quadratic
main = quadratic_module.main

class TestQuadraticSolver(unittest.TestCase):
    def test_solve_quadratic_distinct_real_roots(self):
        # x^2 - 5x + 6 = 0 -> roots: 3, 2
        roots_type, r1, r2, d = solve_quadratic(1, -5, 6)
        self.assertEqual(roots_type, "distinct_real")
        self.assertEqual(d, 1.0)
        self.assertEqual(set([r1, r2]), {3.0, 2.0})

    def test_solve_quadratic_repeated_real_root(self):
        # x^2 - 4x + 4 = 0 -> root: 2
        roots_type, r1, r2, d = solve_quadratic(1, -4, 4)
        self.assertEqual(roots_type, "repeated_real")
        self.assertEqual(d, 0.0)
        self.assertEqual(r1, 2.0)
        self.assertEqual(r2, 2.0)

    def test_solve_quadratic_complex_roots(self):
        # x^2 + 2x + 5 = 0 -> roots: -1 + 2i, -1 - 2i
        roots_type, r1, r2, d = solve_quadratic(1, 2, 5)
        self.assertEqual(roots_type, "complex")
        self.assertEqual(d, -16.0)
        self.assertEqual(set([r1, r2]), {-1 + 2j, -1 - 2j})

    def test_solve_quadratic_invalid_a(self):
        with self.assertRaises(ValueError):
            solve_quadratic(0, 2, 3)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_distinct_real(self, mock_stdout, mock_input):
        mock_input.side_effect = ["1, -5, 6", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("The equation has two distinct real roots.", output)
        self.assertIn("x1 = 3.0000", output)
        self.assertIn("x2 = 2.0000", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_repeated_real(self, mock_stdout, mock_input):
        mock_input.side_effect = ["1, -4, 4", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("The equation has one repeated real root.", output)
        self.assertIn("x = 2.0000", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_complex(self, mock_stdout, mock_input):
        mock_input.side_effect = ["1, 2, 5", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("The equation has two complex roots.", output)
        self.assertIn("x1 = -1.0000 + 2.0000i", output)
        self.assertIn("x2 = -1.0000 - 2.0000i", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_invalid_and_quit(self, mock_stdout, mock_input):
        mock_input.side_effect = ["", "abc", "a, b, c", "0, 2, 3", "q"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Error: Input cannot be empty.", output)
        self.assertIn("Error: Please enter exactly three numbers separated by commas.", output)
        self.assertIn("Error: Please enter valid numbers.", output)
        self.assertIn("Error: Not a quadratic equation (a cannot be 0)", output)

if __name__ == '__main__':
    unittest.main()
