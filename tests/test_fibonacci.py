import unittest
import importlib.util
import os
import sys
from unittest.mock import patch, MagicMock
import io

class TestFibonacci(unittest.TestCase):
    def run_script_with_inputs(self, inputs):
        file_path = os.path.join(
            os.path.dirname(__file__), "..",
            "math", "Fibonacci-Series", "Fibonacci-Series.py"
        )
        file_path = os.path.abspath(file_path)
        spec = importlib.util.spec_from_file_location("fibonacci_series", file_path)
        module = importlib.util.module_from_spec(spec)
        
        # Mock turtle
        mock_turtle_module = MagicMock()
        mock_screen = MagicMock()
        mock_turtle_module.Screen.return_value = mock_screen
        mock_turtle_module.Turtle.return_value = MagicMock()
        
        stdout_buf = io.StringIO()
        
        # We need to clean sys.modules to force reload of the script if it was imported before
        if "fibonacci_series" in sys.modules:
            del sys.modules["fibonacci_series"]
            
        with patch.dict("sys.modules", {"turtle": mock_turtle_module}):
            with patch("builtins.input", side_effect=inputs):
                with patch("sys.stdout", new=stdout_buf):
                    try:
                        spec.loader.exec_module(module)
                    except SystemExit:
                        pass
                    except StopIteration:
                        # Raised if inputs list is exhausted
                        pass
        return stdout_buf.getvalue()

    def test_fibonacci_5_terms(self):
        output = self.run_script_with_inputs(["5", "n"])
        self.assertIn("[1, 1, 2, 3, 5]", output)

    def test_fibonacci_10_terms(self):
        output = self.run_script_with_inputs(["10", "n"])
        self.assertIn("[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]", output)

    def test_invalid_input(self):
        # First pass invalid input "abc", then "5", then "n" to exit
        output = self.run_script_with_inputs(["abc", "5", "n"])
        self.assertIn("Invalid input. Please enter a whole number.", output)
        self.assertIn("[1, 1, 2, 3, 5]", output)

if __name__ == "__main__":
    unittest.main()
