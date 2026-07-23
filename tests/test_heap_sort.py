import unittest
from unittest.mock import patch
import io
import os
import importlib.util

# Absolute path to Heap-Sort.py
file_path = os.path.join(
    os.path.dirname(__file__), "..",
    "math", "Heap-Sort", "Heap-Sort.py"
)
file_path = os.path.abspath(file_path)

# Load module dynamically
spec = importlib.util.spec_from_file_location("heap_sort_module", file_path)
heap_sort_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(heap_sort_module)

heap_sort = heap_sort_module.heap_sort
main = heap_sort_module.main


class TestHeapSort(unittest.TestCase):

    def test_heap_sort_ascending(self):
        self.assertEqual(heap_sort([64, 34, 25, 12, 22, 11, 90]), [11, 12, 22, 25, 34, 64, 90])
        self.assertEqual(heap_sort([5, 1, 4, 2, 8]), [1, 2, 4, 5, 8])

    def test_heap_sort_descending(self):
        self.assertEqual(heap_sort([64, 34, 25, 12, 22, 11, 90], reverse=True), [90, 64, 34, 25, 22, 12, 11])
        self.assertEqual(heap_sort([5, 1, 4, 2, 8], reverse=True), [8, 5, 4, 2, 1])

    def test_heap_sort_empty_and_single_item(self):
        self.assertEqual(heap_sort([]), [])
        self.assertEqual(heap_sort([42]), [42])

    def test_heap_sort_negative_integers(self):
        self.assertEqual(heap_sort([-5, -1, -10, 0, 5]), [-10, -5, -1, 0, 5])
        self.assertEqual(heap_sort([-5, -1, -10, 0, 5], reverse=True), [5, 0, -1, -5, -10])

    def test_heap_sort_already_sorted(self):
        self.assertEqual(heap_sort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
        self.assertEqual(heap_sort([5, 4, 3, 2, 1], reverse=True), [5, 4, 3, 2, 1])

    def test_heap_sort_with_duplicates(self):
        self.assertEqual(heap_sort([5, 3, 8, 3, 9, 1, 5]), [1, 3, 3, 5, 5, 8, 9])

    def test_heap_sort_does_not_mutate_original(self):
        original = [5, 3, 1, 4, 2]
        original_copy = original.copy()
        heap_sort(original)
        self.assertEqual(original, original_copy)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_ascending(self, mock_stdout, mock_input):
        mock_input.side_effect = ["64 34 25", "1", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Original list: [64, 34, 25]", output)
        self.assertIn("Sorted list (Ascending): [25, 34, 64]", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_invalid_inputs(self, mock_stdout, mock_input):
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