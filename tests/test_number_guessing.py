import unittest
import os
from unittest.mock import patch
import io
import sys

class TestNumberGuessing(unittest.TestCase):
    def setUp(self):
        self.script_path = os.path.abspath(os.path.join(
            os.path.dirname(__file__), "..",
            "games", "Number-Guessing-Game", "Number-Guessing-Game.py"
        ))

    @patch('builtins.input', side_effect=['1', '50', 'n'])
    @patch('random.randint', return_value=50)
    def test_game_win(self, mock_randint, mock_input):
        captured_output = io.StringIO()
        sys.stdout = captured_output
        try:
            with open(self.script_path, 'r', encoding='utf-8') as f:
                exec(f.read(), {'__name__': '__main__'})
        except StopIteration:
            pass
        finally:
            sys.stdout = sys.__stdout__

        output = captured_output.getvalue()
        self.assertIn("Correct! You guessed the number.", output)

    @patch('builtins.input', side_effect=['3', '1', '2', '3', '4', '5', 'n'])
    @patch('random.randint', return_value=50) 
    def test_game_lose(self, mock_randint, mock_input):
        captured_output = io.StringIO()
        sys.stdout = captured_output
        try:
            with open(self.script_path, 'r', encoding='utf-8') as f:
                exec(f.read(), {'__name__': '__main__'})
        except StopIteration:
            pass
        finally:
            sys.stdout = sys.__stdout__

        output = captured_output.getvalue()
        self.assertIn("Out of attempts.", output)

    @patch('builtins.input', side_effect=['1', 'abc', '150', '50', 'n'])
    @patch('random.randint', return_value=50)
    def test_game_invalid_inputs(self, mock_randint, mock_input):
        captured_output = io.StringIO()
        sys.stdout = captured_output
        try:
            with open(self.script_path, 'r', encoding='utf-8') as f:
                exec(f.read(), {'__name__': '__main__'})
        except StopIteration:
            pass
        finally:
            sys.stdout = sys.__stdout__

        output = captured_output.getvalue()
        self.assertIn("Invalid input.", output)
        self.assertIn("Enter a number between 1 and 100.", output)
        self.assertIn("Correct! You guessed the number.", output)

if __name__ == "__main__":
    unittest.main()
