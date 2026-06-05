import unittest
import subprocess
import os
import sys

class TestProgressions(unittest.TestCase):
    def setUp(self):
        self.script_path = os.path.join(
            os.path.dirname(__file__), "..",
            "math", "AP-GP-AGP-HP-Recognizer", "AP-GP-AGP-HP-Recognizer.py"
        )
        self.script_path = os.path.abspath(self.script_path)

    def run_script(self, inputs):
        # We choose option 1, then pass input, then option 2 to exit
        input_data = "\n".join(["1", inputs, "2"]) + "\n"
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
        return result.stdout

    def test_valid_ap(self):
        output = self.run_script("2, 4, 6, 8")
        self.assertIn("AP (common difference d = 2)", output)

    def test_negative_ap(self):
        output = self.run_script("10, 7, 4, 1")
        self.assertIn("AP (common difference d = -3)", output)

    def test_constant_ap(self):
        output = self.run_script("5, 5, 5, 5")
        self.assertIn("AP (common difference d = 0)", output)
        self.assertIn("GP (common ratio r = 1)", output)

    def test_valid_gp(self):
        output = self.run_script("3, 6, 12, 24")
        self.assertIn("GP (common ratio r = 2)", output)

    def test_fractional_gp(self):
        output = self.run_script("16, 8, 4, 2")
        self.assertIn("GP (common ratio r = 0.5)", output)

    def test_valid_hp(self):
        # 1, 1/2, 1/3, 1/4 -> HP
        output = self.run_script("1, 0.5, 0.3333333333333333, 0.25")
        self.assertIn("HP (reciprocal AP difference = 1)", output)

    def test_valid_agp(self):
        # AGP: 1, 4, 12, 32
        output = self.run_script("1, 4, 12, 32")
        self.assertIn("AGP (repetition ratio r = 2)", output)

    def test_too_few_values(self):
        output = self.run_script("1, 2, 3")
        self.assertIn("Please enter at least 4 values.", output)

    def test_invalid_values(self):
        output = self.run_script("1, 2, abc, 4")
        self.assertIn("Invalid number: abc", output)

if __name__ == '__main__':
    unittest.main()
