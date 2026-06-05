import unittest
from unittest.mock import patch
import io
import os
import importlib.util

# Absolute path to Happy-Number.py
file_path = os.path.join(
    os.path.dirname(__file__), "..",
    "math", "Happy-Number", "Happy-Number.py"
)
file_path = os.path.abspath(file_path)

# Load module dynamically
spec = importlib.util.spec_from_file_location("happy_number_module", file_path)
happy_number_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(happy_number_module)

is_happy_number = happy_number_module.is_happy_number
main = happy_number_module.main

class TestHappyNumber(unittest.TestCase):
    def test_happy_numbers(self):
        # 19 is happy
        is_happy, seq = is_happy_number(19)
        self.assertTrue(is_happy)
        self.assertEqual(seq, [19, 82, 68, 100, 1])

        # 7 is happy
        is_happy, seq = is_happy_number(7)
        self.assertTrue(is_happy)
        self.assertEqual(seq, [7, 49, 97, 130, 10, 1])

    def test_unhappy_numbers(self):
        # 4 is unhappy (starts a cycle)
        is_happy, seq = is_happy_number(4)
        self.assertFalse(is_happy)
        self.assertEqual(seq, [4, 16, 37, 58, 89, 145, 42, 20, 4])

        # 2 is unhappy
        is_happy, seq = is_happy_number(2)
        self.assertFalse(is_happy)
        self.assertIn(4, seq)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    @patch.object(happy_number_module, 'run_visualizer')
    def test_main_flow_happy(self, mock_visualizer, mock_stdout, mock_input):
        # Inputs: n=19, y/n choice 'n'
        mock_input.side_effect = ["19", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("19 is a HAPPY number!", output)
        self.assertIn("Sequence: 19 → 82 → 68 → 100 → 1", output)
        mock_visualizer.assert_called_once_with(19, True, [19, 82, 68, 100, 1])

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    @patch.object(happy_number_module, 'run_visualizer')
    def test_main_flow_invalid_and_unhappy(self, mock_visualizer, mock_stdout, mock_input):
        # Inputs: 
        # 1. empty input "" -> error
        # 2. negative input "-5" -> error
        # 3. invalid input "abc" -> error
        # 4. unhappy number "4" -> not happy, then exit "n"
        mock_input.side_effect = ["", "-5", "abc", "4", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Error: Input cannot be empty.", output)
        self.assertIn("Please enter a positive number!", output)
        self.assertIn("Error: Please enter a valid positive integer.", output)
        self.assertIn("4 is NOT a happy number!", output)
        self.assertIn("Sequence: 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4", output)
        mock_visualizer.assert_called_once_with(4, False, [4, 16, 37, 58, 89, 145, 42, 20, 4])

    @patch('tkinter.Tk')
    @patch('tkinter.Frame')
    @patch('tkinter.Scrollbar')
    @patch('tkinter.Canvas')
    def test_run_visualizer(self, mock_canvas, mock_scrollbar, mock_frame, mock_tk):
        happy_number_module.run_visualizer(19, True, [19, 82, 68, 100, 1])
        mock_tk.assert_called_once()

if __name__ == '__main__':
    unittest.main()
