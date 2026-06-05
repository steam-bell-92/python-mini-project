import unittest
from unittest.mock import patch
import io
import os
import importlib.util

# Absolute path to Armstrong-Number.py
file_path = os.path.join(
    os.path.dirname(__file__), "..",
    "math", "Armstrong-Number", "Armstrong-Number.py"
)
file_path = os.path.abspath(file_path)

# Load module dynamically from file path
spec = importlib.util.spec_from_file_location("armstrong_number", file_path)
armstrong_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(armstrong_module)

is_armstrong_number = armstrong_module.is_armstrong_number
main = armstrong_module.main

class TestArmstrongNumber(unittest.TestCase):
    def test_is_armstrong_number(self):
        self.assertTrue(is_armstrong_number(153))
        self.assertTrue(is_armstrong_number(370))
        self.assertFalse(is_armstrong_number(154))
        self.assertFalse(is_armstrong_number(-5))

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_armstrong(self, mock_stdout, mock_input):
        mock_input.side_effect = ["153", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("153 is an Armstrong Number!", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_non_armstrong(self, mock_stdout, mock_input):
        mock_input.side_effect = ["154", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("154 is NOT an Armstrong Number.", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_invalid_and_negative(self, mock_stdout, mock_input):
        mock_input.side_effect = ["-5", "abc", "153", "n"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Please enter a positive number!", output)
        self.assertIn("Oops! That doesn't look like a valid integer.", output)
        self.assertIn("153 is an Armstrong Number!", output)

if __name__ == '__main__':
    unittest.main()
