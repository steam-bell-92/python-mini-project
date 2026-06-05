print("📻 Morse Code Translator 📻")
print("Translate text to Morse code and vice versa\n")

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
            
        print()
        
    elif choice == '2':
        morse_input = input("\n📻 Enter Morse code (separate letters with space, words with ' / '): ")
        morse_chars = morse_input.strip().split()
        morse_input = input(
            "\n📻 Enter Morse code (separate letters with space, words with ' / '): "
        )
        
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
