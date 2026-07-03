import sys
import time

morse_code = {
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

reverse_morse = {v: k for k, v in morse_code.items()}

# ---------------------------------------------------------------------------
# Timing constants (in milliseconds) – ITU-R M.1677 inspired
# ---------------------------------------------------------------------------
DOT_DURATION   = 100   # ms  – short beep for dot
DASH_DURATION  = 300   # ms  – long beep for dash
INTRA_CHAR_GAP = 100   # ms  – silence between symbols inside a letter
INTER_CHAR_GAP = 300   # ms  – silence between letters
WORD_GAP       = 700   # ms  – silence for word separator '/'
BEEP_FREQ      = 700   # Hz  – comfortable mid-range tone


def _sleep_ms(ms: int) -> None:
    """Sleep for *ms* milliseconds."""
    time.sleep(ms / 1000.0)


def _play_beep(duration_ms: int) -> None:
    """Play a single beep using winsound (Windows) or a terminal bell fallback."""
    if sys.platform == "win32":
        import winsound
        winsound.Beep(BEEP_FREQ, duration_ms)
    else:
        # Cross-platform fallback: print the terminal bell character.
        # Users on Linux/macOS can install 'beepy' for real audio support.
        sys.stdout.write("\a")
        sys.stdout.flush()
        _sleep_ms(duration_ms)


def play_morse_audio(morse_output: str) -> None:
    """
    Play *morse_output* as audio beeps.

    The string is expected to be space-separated Morse tokens where '/'
    represents a word boundary (as produced by this translator).

    Timing:
      · dot   → DOT_DURATION ms beep
      − dash  → DASH_DURATION ms beep
      (gap between symbols in same letter) → INTRA_CHAR_GAP ms silence
      (gap between letters)               → INTER_CHAR_GAP ms silence
      / word separator                    → WORD_GAP ms silence
    """
    tokens = morse_output.split()

    for i, token in enumerate(tokens):
        if token == '/':
            # Word gap (already includes the inter-letter gaps on each side,
            # so just add the extra pause that makes up a full 7-unit gap).
            _sleep_ms(WORD_GAP)
        else:
            # Play each symbol inside the letter
            for j, symbol in enumerate(token):
                if symbol == '.':
                    _play_beep(DOT_DURATION)
                elif symbol == '-':
                    _play_beep(DASH_DURATION)
                # Intra-character gap after every symbol except the last
                if j < len(token) - 1:
                    _sleep_ms(INTRA_CHAR_GAP)

            # Inter-character gap after every letter (skip after last token)
            if i < len(tokens) - 1 and tokens[i + 1] != '/':
                _sleep_ms(INTER_CHAR_GAP)


def main():
    print("📻 Morse Code Translator 📻")
    print("Translate text to Morse code and vice versa\n")

    while True:
        print("=" * 50)
        print("🎯 Choose an option:")
        print("1️⃣  Text to Morse Code")
        print("2️⃣  Morse Code to Text")
        print("3️⃣  View Morse Code Chart")
        print("4️⃣  Exit")
        print("=" * 50)

        choice = input("\n➡️  Enter your choice (1-4): ")

        if choice == '1':
            text = input("\n📝 Enter text to convert: ")
            morse_result = []
            unsupported_chars = []

            for char in text.upper():
                if char in morse_code:
                    morse_result.append(morse_code[char])
                else:
                    morse_result.append('?')
                    unsupported_chars.append(char)

            morse_output = ' '.join(morse_result)
            print(f"\n📻 Morse Code: {morse_output}")

            if unsupported_chars:
                print(f"⚠️ Unsupported characters: {' '.join(sorted(set(unsupported_chars)))}")

            # ---------------------------------------------------------------
            # Optional audio playback
            # ---------------------------------------------------------------
            play_audio = input("\n🔊 Play as audio? (y/n): ").strip().lower()
            if play_audio == 'y':
                if sys.platform != "win32":
                    print(
                        "ℹ️  Non-Windows platform detected. Audio playback uses the "
                        "terminal bell (\\a). For real beeps install 'beepy' and "
                        "update _play_beep() accordingly."
                    )
                print("▶️  Playing Morse code audio… (press Ctrl+C to stop)")
                try:
                    play_morse_audio(morse_output)
                    print("✅ Playback complete.")
                except KeyboardInterrupt:
                    print("\n⏹️  Playback stopped by user.")
                except Exception as exc:
                    print(f"❌ Audio playback failed: {exc}")
            # ---------------------------------------------------------------

            print()

        elif choice == '2':
            morse_input = input("\n📻 Enter Morse code (separate letters with space, words with ' / '): ")

            invalid_chars = [
                char for char in morse_input
                if char not in {'.', '-', '/', ' ', '\t', '\n', '\r'}
            ]

            if invalid_chars:
                print("\n❌ Invalid Morse code! Only '.', '-', '/', and whitespace are allowed.\n")
                continue

            morse_chars = morse_input.split()
            text_result = []

            for code in morse_chars:
                if code == '/':
                    text_result.append(' ')
                elif code in reverse_morse:
                    text_result.append(reverse_morse[code])
                else:
                    text_result.append('?')

            text_output = ''.join(text_result)
            print(f"\n📝 Text: {text_output}\n")

        elif choice == '3':
            print("\n📊 Morse Code Chart:\n")

            print("Letters:")
            letter_count = 0
            for key, value in morse_code.items():
                if key.isalpha():
                    print(f"  {key}: {value:8}", end='')
                    letter_count += 1
                    if letter_count % 4 == 0:
                        print()

            print("\n\nNumbers:")
            for key, value in morse_code.items():
                if key.isdigit():
                    print(f"  {key}: {value}")

            print("\nSpecial Characters:")
            for key, value in morse_code.items():
                if not key.isalpha() and not key.isdigit():
                    print(f"  {key}: {value}")

            print()

        elif choice == '4':
            print("\n👋 Thanks for using Morse Code Translator! Goodbye!\n")
            break

        else:
            print("\n❌ Invalid choice! Please select 1-4.\n")


if __name__ == "__main__":
    main()
