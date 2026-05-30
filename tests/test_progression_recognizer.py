import unittest
import subprocess
import os
import sys

class TestProgressionRecognizer(unittest.TestCase):
    def setUp(self):
        self.script_path = os.path.join(
            os.path.dirname(__file__), "..",
            "math", "AP-GP-AGP-HP-Recognizer", "AP-GP-AGP-HP-Recognizer.py"
        )
        self.script_path = os.path.abspath(self.script_path)

    def run_script_with_input(self, user_input):
        env = os.environ.copy()
        env["PYTHONIOENCODING"] = "utf-8"
        process = subprocess.Popen(
            [sys.executable, self.script_path],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            encoding='utf-8',
            env=env
        )
        stdout, stderr = process.communicate(input=user_input)
        return stdout, stderr

    def test_ap_sequence(self):
        # Choice 1 for Recognize sequence type, then the AP sequence, then 2 to exit
        user_input = "1\n2, 4, 6, 8\n2\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("AP (common difference d = 2)", stdout)

    def test_gp_sequence(self):
        user_input = "1\n3, 6, 12, 24\n2\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("GP (common ratio r = 2)", stdout)

    def test_hp_sequence(self):
        user_input = "1\n6, 3, 2, 1.5\n2\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("HP (reciprocal AP difference = 0.166667)", stdout)

    def test_agp_sequence(self):
        user_input = "1\n2, 8, 24, 64\n2\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("AGP (repetition ratio r = 2)", stdout)

    def test_non_agp_zero_sequence(self):
        # Sequence like [0, 1, 0, 0] should not be identified as AGP with ratio 0
        user_input = "1\n0, 1, 0, 0\n2\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertNotIn("AGP (repetition ratio r = 0)", stdout)
        self.assertIn("Not AP, GP, AGP, or HP for the given values", stdout)

    def test_valid_agp_zero_sequence(self):
        # Sequence like [5, 0, 0, 0] is a valid AGP with ratio 0
        user_input = "1\n5, 0, 0, 0\n2\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("AGP (repetition ratio r = 0)", stdout)

if __name__ == "__main__":
    unittest.main()
