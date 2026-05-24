"""
Tests for utilities/Text-to-Morse/Text-to-Morse.py

The source file runs a REPL loop at module level, so we extract the
Morse dictionaries and conversion logic inline using the same data.
"""

import pytest


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

class TestMorseDictionary:
    def test_all_letters_present(self):
        for letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
            assert letter in MORSE_CODE, f"Missing letter: {letter}"

    def test_all_digits_present(self):
        for digit in "0123456789":
            assert digit in MORSE_CODE, f"Missing digit: {digit}"

    def test_reverse_mapping_complete(self):
        for char, code in MORSE_CODE.items():
            assert code in REVERSE_MORSE
            assert REVERSE_MORSE[code] == char

    def test_no_duplicate_codes(self):
        codes = list(MORSE_CODE.values())
        assert len(codes) == len(set(codes)), "Duplicate Morse codes found"


# ── Text to Morse tests ─────────────────────────────────────────────

class TestTextToMorse:
    def test_single_letter(self):
        assert text_to_morse("S") == "..."

    def test_sos(self):
        assert text_to_morse("SOS") == "... --- ..."

    def test_hello(self):
        assert text_to_morse("HELLO") == ".... . .-.. .-.. ---"

    def test_lowercase_converted(self):
        assert text_to_morse("hello") == ".... . .-.. .-.. ---"

    def test_digits(self):
        assert text_to_morse("123") == ".---- ..--- ...--"

    def test_mixed_text(self):
        result = text_to_morse("Hi 5")
        assert ".... .." in result  # H I
        assert "....." in result    # 5

    def test_space_becomes_slash(self):
        result = text_to_morse("A B")
        assert "/" in result

    def test_empty_string(self):
        assert text_to_morse("") == ""

    def test_special_chars(self):
        assert text_to_morse("?") == "..--.."
        assert text_to_morse("!") == "-.-.--"


# ── Morse to Text tests ─────────────────────────────────────────────

class TestMorseToText:
    def test_single_code(self):
        assert morse_to_text("...") == "S"

    def test_sos(self):
        assert morse_to_text("... --- ...") == "SOS"

    def test_with_word_separator(self):
        result = morse_to_text(".... .. / ..... .---- ..---")
        assert result == "HI 512"

    def test_unknown_code_becomes_question_mark(self):
        result = morse_to_text("... .-.-.-.- ---")
        assert "?" in result

    def test_empty_input(self):
        # Single empty string splits to ['']
        result = morse_to_text("")
        assert result == "?"  # empty string is not in reverse_morse


# ── Round-trip tests ─────────────────────────────────────────────────

class TestRoundTrip:
    def test_alphabet_round_trip(self):
        original = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        morse = text_to_morse(original)
        decoded = morse_to_text(morse)
        assert decoded == original

    def test_digits_round_trip(self):
        original = "0123456789"
        morse = text_to_morse(original)
        decoded = morse_to_text(morse)
        assert decoded == original

    def test_sentence_round_trip(self):
        original = "HELLO WORLD"
        morse = text_to_morse(original)
        decoded = morse_to_text(morse)
        assert decoded == original

    def test_mixed_round_trip(self):
        original = "TEST 123"
        morse = text_to_morse(original)
        decoded = morse_to_text(morse)
        assert decoded == original
