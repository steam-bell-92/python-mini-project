import unittest
import subprocess
import os
import sys

class TestBinarySearch(unittest.TestCase):
    def setUp(self):
        self.script_path = os.path.join(
            os.path.dirname(__file__), "..",
            "math", "Binary-Search", "Binary-Search.py"
        )
        self.script_path = os.path.abspath(self.script_path)

    def run_script(self, inputs):
        # Join inputs with newline and add 'n' at the end to quit the program
        input_data = "\n".join(inputs + ["n"]) + "\n"
        env = os.environ.copy()
        env["PYTHONIOENCODING"] = "utf-8"
        
        result = subprocess.run(
            [sys.executable, self.script_path],
            input=input_data,
            text=True,
            capture_output=True,
            encoding='utf-8',
            env=env
        )
        if result.returncode != 0:
            pass # Ignore standard errors from EOFError if any
        return result.stdout

    def test_element_found(self):
        # 2 5 8 12, target: 8 -> Found at position 3
        output = self.run_script(["2 5 8 12", "8"])
        self.assertIn("Success! Element found at position: 3", output)

    def test_element_not_found(self):
        # 2 5 8 12, target: 100 -> Not found
        output = self.run_script(["2 5 8 12", "100"])
        self.assertIn("Element not found in the list", output)

    def test_unsorted_list(self):
        # 8 2 12 5 -> Error must be sorted, then we give valid input to exit cleanly
        output = self.run_script(["8 2 12 5", "2 5 8", "5"])
        self.assertIn("List must be sorted for Binary Search", output)

    def test_invalid_input(self):
        # a b c -> Error invalid integers
        output = self.run_script(["a b c"])
        self.assertIn("Please enter valid integers only", output)

if __name__ == '__main__':
    unittest.main()
