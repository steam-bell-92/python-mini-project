import unittest
from unittest.mock import patch
import io
import sys
import os

# Add project root to path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from utils.validation import (
    get_int,
    get_float,
    get_non_empty_string,
    get_choice,
    get_yes_no,
    get_int_list,
    get_float_list
)

class TestValidationHelpers(unittest.TestCase):
    
    # --- get_int tests ---
    
    @patch('builtins.input', return_value="42")
    def test_get_int_normal(self, mock_input):
        self.assertEqual(get_int("Enter int: "), 42)

    @patch('builtins.input', side_effect=["", "10"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_int_empty_then_valid(self, mock_stdout, mock_input):
        self.assertEqual(get_int("Enter int: "), 10)
        self.assertIn("Error: Input cannot be empty.", mock_stdout.getvalue())

    @patch('builtins.input', return_value="")
    def test_get_int_empty_with_default(self, mock_input):
        self.assertEqual(get_int("Enter int: ", default=5), 5)

    @patch('builtins.input', side_effect=["abc", "5"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_int_invalid_then_valid(self, mock_stdout, mock_input):
        self.assertEqual(get_int("Enter int: "), 5)
        self.assertIn("Invalid input. Please enter a valid integer.", mock_stdout.getvalue())

    @patch('builtins.input', side_effect=["3", "7", "5"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_int_min_max_bounds(self, mock_stdout, mock_input):
        # min=4, max=6
        self.assertEqual(get_int("Enter int: ", min_value=4, max_value=6), 5)
        output = mock_stdout.getvalue()
        self.assertIn("Please enter a number greater than or equal to 4.", output)
        self.assertIn("Please enter a number less than or equal to 6.", output)

    # --- get_float tests ---

    @patch('builtins.input', return_value="3.14")
    def test_get_float_normal(self, mock_input):
        self.assertEqual(get_float("Enter float: "), 3.14)

    @patch('builtins.input', side_effect=["", "1.5"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_float_empty_then_valid(self, mock_stdout, mock_input):
        self.assertEqual(get_float("Enter float: "), 1.5)
        self.assertIn("Error: Input cannot be empty.", mock_stdout.getvalue())

    @patch('builtins.input', return_value="")
    def test_get_float_empty_with_default(self, mock_input):
        self.assertEqual(get_float("Enter float: ", default=2.71), 2.71)

    @patch('builtins.input', side_effect=["xyz", "2.5"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_float_invalid_then_valid(self, mock_stdout, mock_input):
        self.assertEqual(get_float("Enter float: "), 2.5)
        self.assertIn("Invalid input. Please enter a valid number.", mock_stdout.getvalue())

    @patch('builtins.input', side_effect=["1.2", "8.9", "4.5"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_float_min_max_bounds(self, mock_stdout, mock_input):
        self.assertEqual(get_float("Enter float: ", min_value=2.0, max_value=5.0), 4.5)
        output = mock_stdout.getvalue()
        self.assertIn("Please enter a number greater than or equal to 2.0.", output)
        self.assertIn("Please enter a number less than or equal to 5.0.", output)

    # --- get_non_empty_string tests ---

    @patch('builtins.input', return_value="hello")
    def test_get_non_empty_string_normal(self, mock_input):
        self.assertEqual(get_non_empty_string("Enter str: "), "hello")

    @patch('builtins.input', side_effect=["", "world"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_non_empty_string_empty_then_valid(self, mock_stdout, mock_input):
        self.assertEqual(get_non_empty_string("Enter str: "), "world")
        self.assertIn("Error: Input cannot be empty.", mock_stdout.getvalue())

    @patch('builtins.input', return_value="")
    def test_get_non_empty_string_default(self, mock_input):
        self.assertEqual(get_non_empty_string("Enter str: ", default="default_val"), "default_val")

    # --- get_choice tests ---

    @patch('builtins.input', return_value="b")
    def test_get_choice_normal(self, mock_input):
        self.assertEqual(get_choice("Enter choice: ", ["a", "b", "c"]), "b")

    @patch('builtins.input', return_value="B")
    def test_get_choice_case_insensitive(self, mock_input):
        self.assertEqual(get_choice("Enter choice: ", ["a", "b", "c"]), "b")

    @patch('builtins.input', side_effect=["d", "a"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_choice_invalid_then_valid(self, mock_stdout, mock_input):
        self.assertEqual(get_choice("Enter choice: ", ["a", "b", "c"]), "a")
        self.assertIn("Invalid selection. Please choose from: a, b, c", mock_stdout.getvalue())

    @patch('builtins.input', return_value="")
    def test_get_choice_default(self, mock_input):
        self.assertEqual(get_choice("Enter choice: ", ["a", "b"], default="a"), "a")

    # --- get_yes_no tests ---

    @patch('builtins.input', side_effect=["y", "YES", "n", "no"])
    def test_get_yes_no_variations(self, mock_input):
        self.assertTrue(get_yes_no("y: "))
        self.assertTrue(get_yes_no("YES: "))
        self.assertFalse(get_yes_no("n: "))
        self.assertFalse(get_yes_no("no: "))

    @patch('builtins.input', side_effect=["maybe", "y"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_yes_no_invalid_then_valid(self, mock_stdout, mock_input):
        self.assertTrue(get_yes_no("Enter: "))
        self.assertIn("Invalid choice. Please enter 'y' or 'n'.", mock_stdout.getvalue())

    @patch('builtins.input', return_value="")
    def test_get_yes_no_default(self, mock_input):
        self.assertTrue(get_yes_no("Enter: ", default="y"))
        self.assertFalse(get_yes_no("Enter: ", default="n"))

    # --- get_int_list tests ---

    @patch('builtins.input', return_value="1 2 3")
    def test_get_int_list_normal(self, mock_input):
        self.assertEqual(get_int_list("Enter list: "), [1, 2, 3])

    @patch('builtins.input', side_effect=["1 abc 3", "4 5 6"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_int_list_invalid_then_valid(self, mock_stdout, mock_input):
        self.assertEqual(get_int_list("Enter list: "), [4, 5, 6])
        self.assertIn("Error: Please enter valid integers only.", mock_stdout.getvalue())

    @patch('builtins.input', side_effect=["1 2", "1 2 3 4", "1 2 3"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_int_list_bounds(self, mock_stdout, mock_input):
        self.assertEqual(get_int_list("Enter list: ", min_len=3, max_len=3), [1, 2, 3])
        output = mock_stdout.getvalue()
        self.assertIn("Error: Please enter at least 3 numbers.", output)
        self.assertIn("Error: Please enter at most 3 numbers.", output)

    # --- get_float_list tests ---

    @patch('builtins.input', return_value="1.1 2.2 3.3")
    def test_get_float_list_normal(self, mock_input):
        self.assertEqual(get_float_list("Enter list: "), [1.1, 2.2, 3.3])

    @patch('builtins.input', side_effect=["1.1 abc 3.3", "4.4 5.5 6.6"])
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_get_float_list_invalid_then_valid(self, mock_stdout, mock_input):
        self.assertEqual(get_float_list("Enter list: "), [4.4, 5.5, 6.6])
        self.assertIn("Error: Please enter valid numbers only.", mock_stdout.getvalue())

if __name__ == '__main__':
    unittest.main()
