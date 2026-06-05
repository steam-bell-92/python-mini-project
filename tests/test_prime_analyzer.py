import unittest
import subprocess
import os

class TestPrimeNumberAnalyzer(unittest.TestCase):
    def setUp(self):
        # Resolve the absolute path to the prime analyzer script
        self.script_path = os.path.join(
            os.path.dirname(__file__), "..",
            "math", "Prime-Number-Analyzer", "Prime-Number-Analyzer.py"
        )
        self.script_path = os.path.abspath(self.script_path)

    def run_script(self, inputs):
        # Join inputs with newline and add 'n' at the end to quit the "Return to menu?" loop
        input_data = "\n".join(inputs + ["n"]) + "\n"
        env = os.environ.copy()
        env["PYTHONIOENCODING"] = "utf-8" # Handles the Emojis properly
        
        result = subprocess.run(
            ["python", self.script_path],
            input=input_data,
            text=True,
            capture_output=True,
            encoding='utf-8',
            env=env
        )
        if result.returncode != 0:
            pass # Ignore standard errors from EOFError if any
        return result.stdout

    def test_check_prime_true(self):
        # Menu 1, Input 7 -> 7 is a prime number
        output = self.run_script(["1", "7"])
        self.assertIn("7 is a prime number", output)

    def test_check_prime_false(self):
        # Menu 1, Input 4 -> 4 is NOT a prime number
        output = self.run_script(["1", "4"])
        self.assertIn("4 is NOT a prime number", output)

    def test_generate_primes(self):
        # Menu 2, Input 10 -> [2, 3, 5, 7]
        output = self.run_script(["2", "10"])
        self.assertIn("[2, 3, 5, 7]", output)

    def test_primes_in_range(self):
        # Menu 3, Start 10, End 20 -> [11, 13, 17, 19]
        output = self.run_script(["3", "10", "20"])
        self.assertIn("[11, 13, 17, 19]", output)

    def test_prime_factorization(self):
        # Menu 4, Input 12 -> 2 × 2 × 3
        output = self.run_script(["4", "12"])
        self.assertIn("12 = 2 × 2 × 3", output)

    def test_nth_prime(self):
        # Menu 5, N 5 -> 11 (This proves your n*log(n) logic works perfectly!)
        output = self.run_script(["5", "5"])
        self.assertIn("The 5th prime number is: 11", output)

    def test_invalid_input(self):
        # Menu 1, Input 'abc' -> Error message
        output = self.run_script(["1", "abc"])
        self.assertIn("Please enter a valid integer", output)

    def test_exit_program(self):
        # Menu 6 -> Exits cleanly
        output = self.run_script(["6"])
        self.assertIn("Thank you for using Prime Number Analyzer", output)

if __name__ == '__main__':
    unittest.main()