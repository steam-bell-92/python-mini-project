import unittest
from unittest.mock import patch
import io
import os
import importlib.util

# Absolute path to Caesar-Cipher.py
file_path = os.path.join(
    os.path.dirname(__file__), "..",
    "utilities", "Caesar-Cipher", "Caesar-Cipher.py"
)
file_path = os.path.abspath(file_path)

# Load module dynamically
spec = importlib.util.spec_from_file_location("caesar_cipher_module", file_path)
caesar_cipher_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(caesar_cipher_module)

caesar_cipher = caesar_cipher_module.caesar_cipher
main = caesar_cipher_module.main

class TestCaesarCipher(unittest.TestCase):
    def test_caesar_cipher_encryption(self):
        # Shift forwards, check lowercase & uppercase
        self.assertEqual(caesar_cipher("Hello World", 3, "E"), "Khoor Zruog")
        self.assertEqual(caesar_cipher("abc", 1, "E"), "bcd")
        self.assertEqual(caesar_cipher("xyz", 3, "E"), "abc")
        
        # Test large shifts and wrap arounds
        self.assertEqual(caesar_cipher("abc", 27, "E"), "bcd")

    def test_caesar_cipher_decryption(self):
        # Shift backwards, check lowercase & uppercase
        self.assertEqual(caesar_cipher("Khoor Zruog", 3, "D"), "Hello World")
        self.assertEqual(caesar_cipher("bcd", 1, "D"), "abc")
        self.assertEqual(caesar_cipher("abc", 3, "D"), "xyz")
        
        # Test large shifts
        self.assertEqual(caesar_cipher("bcd", 27, "D"), "abc")

    def test_caesar_cipher_special_characters(self):
        # Spaces, numbers, and punctuation should remain untouched
        self.assertEqual(caesar_cipher("Hello, World! 123", 5, "E"), "Mjqqt, Btwqi! 123")
        self.assertEqual(caesar_cipher("Mjqqt, Btwqi! 123", 5, "D"), "Hello, World! 123")

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_encryption_and_decryption(self, mock_stdout, mock_input):
        # Choice E -> message "Hello" -> shift 3
        # Choice D -> message "Khoor" -> shift 3
        # Choice Q
        mock_input.side_effect = ["E", "Hello", "3", "D", "Khoor", "3", "Q"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Khoor", output)
        self.assertIn("Hello", output)

    @patch('builtins.input')
    @patch('sys.stdout', new_callable=io.StringIO)
    def test_main_flow_invalid_inputs(self, mock_stdout, mock_input):
        # Choice Invalid (X) -> Invalid input error
        # Choice E -> message "Test" -> shift "abc" (ValueError)
        # Choice Q
        mock_input.side_effect = ["X", "E", "Test", "abc", "Q"]
        main()
        output = mock_stdout.getvalue()
        self.assertIn("Invalid input. Please type E, D, or Q.", output)
        self.assertIn("Error: Shift key must be a valid whole number.", output)

if __name__ == '__main__':
    unittest.main()
