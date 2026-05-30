import os
import subprocess
import sys
import unittest

class TestNumberSystemConverter(unittest.TestCase):
    def setUp(self):
        self.script_path = os.path.abspath(os.path.join(
            os.path.dirname(__file__), "..",
            "utilities", "Number-System-Converter", "Number-System-Converter.py"
        ))

    def run_script_with_inputs(self, inputs):
        # Join inputs with newlines
        input_data = "\n".join(inputs) + "\n"
        env = os.environ.copy()
        env["PYTHONIOENCODING"] = "utf-8"
        process = subprocess.Popen(
            [sys.executable, self.script_path],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            env=env,
            encoding="utf-8"
        )
        stdout, stderr = process.communicate(input=input_data, timeout=5)
        return stdout, stderr

    def test_decimal_to_others(self):
        # Input choice 1 (Decimal), then value 10, then choice 5 (Exit)
        stdout, stderr = self.run_script_with_inputs(["1", "10", "5"])
        self.assertIn("Binary (Base 2) : 1010", stdout)
        self.assertIn("Octal (Base 8)", stdout)
        self.assertIn("Hex (Base 16)", stdout)

    def test_binary_to_others(self):
        # Input choice 2 (Binary), then value 1010, then choice 5 (Exit)
        stdout, stderr = self.run_script_with_inputs(["2", "1010", "5"])
        self.assertIn("Decimal (Base 10) : 10", stdout)
        self.assertIn("Octal (Base 8)", stdout)
        self.assertIn("Hex (Base 16)", stdout)

    def test_octal_to_others(self):
        # Input choice 3 (Octal), then value 17, then choice 5 (Exit)
        stdout, stderr = self.run_script_with_inputs(["3", "17", "5"])
        self.assertIn("Decimal (Base 10) : 15", stdout)
        self.assertIn("Binary (Base 2)", stdout)
        self.assertIn("Hex (Base 16)", stdout)

    def test_hex_to_others(self):
        # Input choice 4 (Hex), then value 1a, then choice 5 (Exit)
        stdout, stderr = self.run_script_with_inputs(["4", "1a", "5"])
        self.assertIn("Conversions for Hexadecimal: 1A", stdout)
        self.assertIn("Decimal (Base 10) : 26", stdout)
        self.assertIn("Binary (Base 2)", stdout)

    def test_invalid_input_is_handled(self):
        # Input choice 1 (Decimal), then value "not-a-number", then choice 5 (Exit)
        stdout, stderr = self.run_script_with_inputs(["1", "not-a-number", "5"])
        self.assertIn("Invalid input! Please enter a valid decimal integer.", stdout)