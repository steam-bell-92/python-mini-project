def caesar_cipher(message: str, shift: int, mode: str) -> str:
    # If decrypting, we just reverse the shift direction
    if mode.upper() in ["D", "DECRYPT"]:
        shift = -shift

    shift %= 26
    result = ""

    # Core Caesar Cipher Logic
    for char in message:
        if char.isascii() and char.isalpha():
            # Determine ASCII boundary (uppercase vs lowercase)
            start = ord('A') if char.isupper() else ord('a')
            
            # Shift character and wrap around using modulo 26
            shifted_pos = (ord(char) - start + shift) % 26
            new_char = chr(start + shifted_pos)
            result += new_char
        else:
            # Leave spaces, numbers, and punctuation untouched
            result += char
            
    return result


def main() -> None:
    print("🔐 Caesar Cipher Encryptor & Decryptor 🔐")
    print("Hide your secret messages or reveal them! \n")
    
    while True:
        choice = input(
            "🎯 Choose Operation: Encrypt (E), Decrypt (D), or Quit (Q): "
        ).upper()
        
        if choice in ["Q", "QUIT"]:
            break
            
        elif choice in ["E", "ENCRYPT", "D", "DECRYPT"]:
            message = input("📝 Enter your message: ")
            
            try:
                shift = int(input("🔑 Enter the shift key (whole number): "))
            except ValueError:
                print("❌ Error: Shift key must be a valid whole number.\n")
                continue
                
            result = caesar_cipher(message, shift, choice)
            
            print("\n✨ Resulting Message:")
            print(f"👉 {result}\n")
            
        else:
            print("⚠️ Invalid input. Please type E, D, or Q.\n")
            
    print("\n👋 Thanks for using the Caesar Cipher! Stay secure! 🕵️‍♂️\n")


if __name__ == "__main__":
    main()
