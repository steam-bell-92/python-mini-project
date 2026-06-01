import unittest
from unittest.mock import patch
import io
import os
import importlib.util

# Absolute path to Pascal-Triangle.py
file_path = os.path.join(
    os.path.dirname(__file__), "..",
    "math", "Pascal-Triangle", "Pascal-Triangle.py"
)
file_path = os.path.abspath(file_path)

# Load module dynamically
spec = importlib.util.spec_from_file_location("pascal_triangle_module", file_path)
pascal_triangle_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pascal_triangle_module)

generate_pascal_triangle = pascal_triangle_module.generate_pascal_triangle
main = pascal_triangle_module.main

class TestPascalTriangle(unittest.TestCase):
    def test_generate_pascal_triangle_valid(self):
        # n = 1
        self.assertEqual(generate_pascal_triangle(1), [[1]])
        # n = 2
        self.assertEqual(generate_pascal_triangle(2), [[1], [1, 1]])
        # n = 5
        self.assertEqual(generate_pascal_triangle(5), [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1]
        ])

    def test_generate_pascal_triangle_edge_cases(self):
        # n = 0
        self.assertEqual(generate_pascal_triangle(0), [])
        # n = -5
        self.assertEqual(generate_pascal_triangle(-5), [])

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_whole_triangle(self, mock_stdout, mock_input):
        # Inputs: n=5, choice='1'
        mock_input.side_effect = ["5", "1"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Pascal's Triangle", output)
        self.assertIn("Row 1:", output)
        self.assertIn("Row 5:", output)
        self.assertIn("Total rows generated: 5", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_specific_row_valid(self, mock_stdout, mock_input):
        # Inputs: n=5, choice='2', row_num=3
        mock_input.side_effect = ["5", "2", "3"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Row 3 of Pascal's Triangle:", output)
        self.assertIn("[1, 2, 1]", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_specific_row_invalid(self, mock_stdout, mock_input):
        # Inputs: n=5, choice='2', row_num=6
        mock_input.side_effect = ["5", "2", "6"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Row 6 doesn't exist in the generated triangle!", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_specific_row_value_error(self, mock_stdout, mock_input):
        # Inputs: n=5, choice='2', row_num='abc', then 3
        mock_input.side_effect = ["5", "2", "abc", "3"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Oops! That doesn't look like a valid number. Please try again.", output)
        self.assertIn("[1, 2, 1]", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_invalid_n(self, mock_stdout, mock_input):
        # Inputs: n=-1
        mock_input.side_effect = ["-1"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Please enter a positive number!", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_value_error_n(self, mock_stdout, mock_input):
        # Inputs: n='abc', then 5, then choice 1
        mock_input.side_effect = ["abc", "5", "1"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Invalid input! Please enter a valid number.", output)
        self.assertIn("Row 5:", output)

if __name__ == '__main__':
    unittest.main()
