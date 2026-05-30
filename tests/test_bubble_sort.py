import unittest
from unittest.mock import patch
import io
import os
import importlib.util

# Absolute path to Bubble-Sort.py
file_path = os.path.join(
    os.path.dirname(__file__), "..",
    "math", "Bubble-Sort", "Bubble-Sort.py"
)
file_path = os.path.abspath(file_path)

# Load module dynamically
spec = importlib.util.spec_from_file_location("bubble_sort_module", file_path)
bubble_sort_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(bubble_sort_module)

bubble_sort = bubble_sort_module.bubble_sort
main = bubble_sort_module.main

class TestBubbleSort(unittest.TestCase):
    def test_bubble_sort_ascending(self):
        # Ascending order
        self.assertEqual(bubble_sort([64, 34, 25, 12, 22, 11, 90]), [11, 12, 22, 25, 34, 64, 90])
        self.assertEqual(bubble_sort([5, 1, 4, 2, 8]), [1, 2, 4, 5, 8])

    def test_bubble_sort_descending(self):
        # Descending order
        self.assertEqual(bubble_sort([64, 34, 25, 12, 22, 11, 90], reverse=True), [90, 64, 34, 25, 22, 12, 11])
        self.assertEqual(bubble_sort([5, 1, 4, 2, 8], reverse=True), [8, 5, 4, 2, 1])

    def test_bubble_sort_empty_and_single_item(self):
        # Empty array
        self.assertEqual(bubble_sort([]), [])
        # Single-item array
        self.assertEqual(bubble_sort([42]), [42])

    def test_bubble_sort_negative_integers(self):
        # Lists with negative integers
        self.assertEqual(bubble_sort([-5, -1, -10, 0, 5]), [-10, -5, -1, 0, 5])
        self.assertEqual(bubble_sort([-5, -1, -10, 0, 5], reverse=True), [5, 0, -1, -5, -10])

    def test_bubble_sort_already_sorted(self):
        # Already sorted ascending
        self.assertEqual(bubble_sort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
        # Already sorted descending
        self.assertEqual(bubble_sort([5, 4, 3, 2, 1], reverse=True), [5, 4, 3, 2, 1])

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_ascending(self, mock_stdout, mock_input):
        # Ascending sort flow
        mock_input.side_effect = ["64 34 25", "1", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Original list: [64, 34, 25]", output)
        self.assertIn("Sorted list (Ascending): [25, 34, 64]", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_descending(self, mock_stdout, mock_input):
        # Descending sort flow
        mock_input.side_effect = ["64 34 25", "2", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Original list: [64, 34, 25]", output)
        self.assertIn("Sorted list (Descending): [64, 34, 25]", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_invalid_inputs(self, mock_stdout, mock_input):
        # Invalid inputs validation flow
        mock_input.side_effect = ["", "64 abc 25", "64 34 25", "3", "64 34 25", "1", "y", "12 11", "2", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Error: Input cannot be empty!", output)
        self.assertIn("Error: Please enter valid integers only.", output)
        self.assertIn("Invalid sorting choice! Please select 1 or 2.", output)
        self.assertIn("Sorted list (Ascending): [25, 34, 64]", output)
        self.assertIn("Sorted list (Descending): [12, 11]", output)

if __name__ == '__main__':
    unittest.main()
