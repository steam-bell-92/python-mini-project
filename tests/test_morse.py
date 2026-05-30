import unittest

# ── Morse code dictionary (identical to source) ──────────────────────

MORSE_CODE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/', '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--',
    '-': '-....-', '/': '-..-.', '@': '.--.-.', '(': '-.--.', ')': '-.--.-'
}

REVERSE_MORSE = {v: k for k, v in MORSE_CODE.items()}


# ── Conversion helpers (same logic as source) ────────────────────────

def text_to_morse(text):
    """Convert text to Morse code string."""
    text = text.upper()
    morse_result = []
    for char in text:
        if char in MORSE_CODE:
            morse_result.append(MORSE_CODE[char])
        # Unknown characters are silently skipped (matching source behaviour)
    return ' '.join(morse_result)


def morse_to_text(morse_input):
    """Convert Morse code string back to text."""
    morse_chars = morse_input.split(' ')
    text_result = []
    for code in morse_chars:
        if code in REVERSE_MORSE:
            text_result.append(REVERSE_MORSE[code])
        elif code == '/':
            text_result.append(' ')
        else:
            text_result.append('?')
    return ''.join(text_result)


# ── Dictionary completeness tests ────────────────────────────────────

class TestMorseDictionary(unittest.TestCase):
    def test_all_letters_present(self):
        for letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
            self.assertIn(letter, MORSE_CODE, f"Missing letter: {letter}")

    def test_all_digits_present(self):
        for digit in "0123456789":
            self.assertIn(digit, MORSE_CODE, f"Missing digit: {digit}")

    def test_reverse_mapping_complete(self):
        for char, code in MORSE_CODE.items():
            self.assertIn(code, REVERSE_MORSE)
            self.assertEqual(REVERSE_MORSE[code], char)

    def test_no_duplicate_codes(self):
        codes = list(MORSE_CODE.values())
        self.assertEqual(len(codes), len(set(codes)), "Duplicate Morse codes found")


# ── Text to Morse tests ─────────────────────────────────────────────

class TestTextToMorse(unittest.TestCase):
    def test_single_letter(self):
        self.assertEqual(text_to_morse("S"), "...")

    def test_sos(self):
        self.assertEqual(text_to_morse("SOS"), "... --- ...")

    def test_hello(self):
        self.assertEqual(text_to_morse("HELLO"), ".... . .-.. .-.. ---")

    def test_lowercase_converted(self):
        self.assertEqual(text_to_morse("hello"), ".... . .-.. .-.. ---")

    def test_digits(self):
        self.assertEqual(text_to_morse("123"), ".---- ..--- ...--")

    def test_mixed_text(self):
        result = text_to_morse("Hi 5")
        self.assertIn(".... ..", result)  # H I
        self.assertIn(".....", result)    # 5

    def test_space_becomes_slash(self):
        result = text_to_morse("A B")
        self.assertIn("/", result)

    def test_empty_string(self):
        self.assertEqual(text_to_morse(""), "")

    def test_special_chars(self):
        self.assertEqual(text_to_morse("?"), "..--..")
        self.assertEqual(text_to_morse("!"), "-.-.--")


# ── Morse to Text tests ─────────────────────────────────────────────

class TestMorseToText(unittest.TestCase):
    def test_single_code(self):
        self.assertEqual(morse_to_text("..."), "S")

    def test_sos(self):
        self.assertEqual(morse_to_text("... --- ..."), "SOS")

    def test_with_word_separator(self):
        result = morse_to_text(".... .. / ..... .---- ..---")
        self.assertEqual(result, "HI 512")

    def test_unknown_code_becomes_question_mark(self):
        result = morse_to_text("... .-.-.-.- ---")
        self.assertIn("?", result)

    def test_empty_input(self):
        # Single empty string splits to ['']
        result = morse_to_text("")
        self.assertEqual(result, "?")  # empty string is not in reverse_morse


# ── Round-trip tests ─────────────────────────────────────────────────

class TestRoundTrip(unittest.TestCase):
    def test_alphabet_round_trip(self):
        original = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        morse = text_to_morse(original)
        decoded = morse_to_text(morse)
        self.assertEqual(decoded, original)

    def test_digits_round_trip(self):
        original = "0123456789"
        morse = text_to_morse(original)
        decoded = morse_to_text(morse)
        self.assertEqual(decoded, original)

    def test_sentence_round_trip(self):
        original = "HELLO WORLD"
        morse = text_to_morse(original)
        decoded = morse_to_text(morse)
        self.assertEqual(decoded, original)

    def test_mixed_round_trip(self):
        original = "TEST 123"
        morse = text_to_morse(original)
        decoded = morse_to_text(morse)
        self.assertEqual(decoded, original)

if __name__ == "__main__":
    unittest.main()
