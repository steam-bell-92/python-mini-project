import unittest
import subprocess
import os
import sys

class TestMatrixCalculator(unittest.TestCase):
    def setUp(self):
        self.script_path = os.path.join(
            os.path.dirname(__file__), "..",
            "math", "Matrix-Calculator", "Matrix-Calculator.py"
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

    def test_addition(self):
        # Add two 2x2 matrices
        # Matrix 1: [[1, 2], [3, 4]]
        # Matrix 2: [[5, 6], [7, 8]]
        # Expected Result: [[6.00, 8.00], [10.00, 12.00]]
        user_input = "A\n2\n2\n1 2\n3 4\n5 6\n7 8\nQ\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("6.00\t8.00", stdout)
        self.assertIn("10.00\t12.00", stdout)

    def test_subtraction(self):
        # Subtract two 2x2 matrices
        user_input = "S\n2\n2\n5 6\n7 8\n1 2\n3 4\nQ\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("4.00\t4.00", stdout)
        self.assertIn("4.00\t4.00", stdout)

    def test_multiplication(self):
        # Multiply 2x3 by 3x2 matrix
        # Matrix 1: [[1, 2, 3], [4, 5, 6]] (2x3)
        # Matrix 2: [[7, 8], [9, 1], [2, 3]] (3x2)
        # Expected: [[31.00, 19.00], [85.00, 55.00]]
        user_input = "M\n2\n3\n1 2 3\n4 5 6\n3\n2\n7 8\n9 1\n2 3\nQ\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("31.00\t19.00", stdout)
        self.assertIn("85.00\t55.00", stdout)

    def test_transpose(self):
        # Transpose a 2x3 matrix
        # Matrix: [[1, 2, 3], [4, 5, 6]]
        # Expected: [[1.00, 4.00], [2.00, 5.00], [3.00, 6.00]]
        user_input = "T\n2\n3\n1 2 3\n4 5 6\nQ\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("1.00\t4.00", stdout)
        self.assertIn("2.00\t5.00", stdout)
        self.assertIn("3.00\t6.00", stdout)

    def test_determinant_3x3(self):
        # Determinant of 3x3 matrix
        # Matrix: [[1, 2, 3], [0, 4, 5], [1, 0, 6]]
        # Expected Det: 1*(24) - 2*(-5) + 3*(-4) = 24 + 10 - 12 = 22
        user_input = "D\n3\n1 2 3\n0 4 5\n1 0 6\nQ\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("Determinant: 22.00", stdout)

    def test_determinant_with_row_swap(self):
        # Determinant of a matrix that requires row swapping during pivot selection
        # Matrix: [[0, 1], [1, 2]]
        # Expected: -1
        user_input = "D\n2\n0 1\n1 2\nQ\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("Determinant: -1.00", stdout)

    def test_rank(self):
        # Rank of a 3x3 matrix (linearly dependent)
        # Matrix: [[1, 2, 3], [2, 4, 6], [1, 0, 1]]
        # Expected Rank: 2
        user_input = "R\n3\n3\n1 2 3\n2 4 6\n1 0 1\nQ\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("Rank of the Matrix: 2", stdout)

    def test_inverse(self):
        # Inverse of a 2x2 matrix
        # Matrix: [[4, 7], [2, 6]]
        # Det = 24 - 14 = 10
        # Expected: [[0.6, -0.7], [-0.2, 0.4]]
        user_input = "I\n2\n4 7\n2 6\nQ\n"
        stdout, _ = self.run_script_with_input(user_input)
        self.assertIn("0.60\t-0.70", stdout)
        self.assertIn("-0.20\t0.40", stdout)

if __name__ == "__main__":
    unittest.main()
