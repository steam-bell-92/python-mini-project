import random

def caesar_cipher(message: str, shift: int, mode: str) -> str:
    if mode.upper() in ["D", "DECRYPT"]:
        shift = -shift

    shift %= 26
    result = ""

    for char in message:
        if char.isascii() and char.isalpha():
            start = ord('A') if char.isupper() else ord('a')
            shifted_pos = (ord(char) - start + shift) % 26
            new_char = chr(start + shifted_pos)
            result += new_char
        else:
            result += char
            
    return result

def vigenere_cipher(message: str, keyword: str, mode: str) -> str:
    result = ""
    keyword = "".join([c.upper() for c in keyword if c.isalpha()])
    if not keyword:
        return message
    
    keyword_idx = 0
    for char in message:
        if char.isascii() and char.isalpha():
            start = ord('A') if char.isupper() else ord('a')
            shift = ord(keyword[keyword_idx % len(keyword)]) - ord('A')
            
            if mode.upper() in ["D", "DECRYPT"]:
                shift = -shift
                
            shifted_pos = (ord(char) - start + shift) % 26
            result += chr(start + shifted_pos)
            keyword_idx += 1
        else:
            result += char
    return result

def atbash_cipher(message: str) -> str:
    result = ""
    for char in message:
        if char.isascii() and char.isalpha():
            if char.isupper():
                result += chr(ord('Z') - (ord(char) - ord('A')))
            else:
                result += chr(ord('z') - (ord(char) - ord('a')))
        else:
            result += char
    return result

def generate_playfair_matrix(keyword: str) -> list:
    keyword = "".join([c.upper() for c in keyword if c.isalpha()]).replace("J", "I")
    matrix = []
    seen = set()
    
    for char in keyword + "ABCDEFGHIKLMNOPQRSTUVWXYZ":
        if char not in seen:
            seen.add(char)
            matrix.append(char)
            
    return [matrix[i:i+5] for i in range(0, 25, 5)]

def find_position(matrix: list, char: str) -> tuple:
    for row in range(5):
        for col in range(5):
            if matrix[row][col] == char:
                return row, col
    return -1, -1

def playfair_cipher(message: str, keyword: str, mode: str) -> str:
    matrix = generate_playfair_matrix(keyword)
    
    msg = "".join([c.upper() for c in message if c.isalpha()]).replace("J", "I")
    if not msg:
        return ""
        
    processed_msg = ""
    i = 0
    while i < len(msg):
        processed_msg += msg[i]
        if i + 1 < len(msg):
            if msg[i] == msg[i+1] and mode.upper() in ["E", "ENCRYPT"]:
                processed_msg += "X"
            else:
                processed_msg += msg[i+1]
                i += 1
        else:
            if mode.upper() in ["E", "ENCRYPT"]:
                processed_msg += "X"
        i += 1
        
    result = ""
    shift = 1 if mode.upper() in ["E", "ENCRYPT"] else -1
    
    for i in range(0, len(processed_msg) - 1, 2):
        char1, char2 = processed_msg[i], processed_msg[i+1]
        r1, c1 = find_position(matrix, char1)
        r2, c2 = find_position(matrix, char2)
        
        if r1 == r2:
            result += matrix[r1][(c1 + shift) % 5]
            result += matrix[r2][(c2 + shift) % 5]
        elif c1 == c2:
            result += matrix[(r1 + shift) % 5][c1]
            result += matrix[(r2 + shift) % 5][c2]
        else:
            result += matrix[r1][c2]
            result += matrix[r2][c1]
            
    return result

# RSA implementation
def is_prime(n):
    if n <= 1: return False
    if n <= 3: return True
    if n % 2 == 0 or n % 3 == 0: return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0: return False
        i += 6
    return True

def generate_prime(min_val=10, max_val=100):
    prime = random.randint(min_val, max_val)
    while not is_prime(prime):
        prime = random.randint(min_val, max_val)
    return prime

def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def mod_inverse(e, phi):
    for d in range(2, phi):
        if (d * e) % phi == 1:
            return d
    return None

def generate_rsa_keys():
    p = generate_prime(10, 100)
    q = generate_prime(10, 100)
    while p == q:
        q = generate_prime(10, 100)
    
    n = p * q
    phi = (p - 1) * (q - 1)
    
    e = random.randrange(2, phi)
    while gcd(e, phi) != 1:
        e = random.randrange(2, phi)
        
    d = mod_inverse(e, phi)
    while d is None:
        e = random.randrange(2, phi)
        while gcd(e, phi) != 1:
            e = random.randrange(2, phi)
        d = mod_inverse(e, phi)
    
    return ((e, n), (d, n))

def rsa_encrypt(message, public_key):
    e, n = public_key
    cipher = [(ord(char) ** e) % n for char in message]
    return cipher

def rsa_decrypt(cipher, private_key):
    d, n = private_key
    message = "".join([chr((char ** d) % n) for char in cipher])
    return message

def main() -> None:
    print("🔐 Cipher Suite (Caesar, Vigenère, Atbash, Playfair, RSA) 🔐")
    print("Hide your secret messages or reveal them! \n")
    
    while True:
        print("\n--- Main Menu ---")
        print("1. Caesar Cipher")
        print("2. Vigenère Cipher")
        print("3. Atbash Cipher")
        print("4. Playfair Cipher")
        print("5. Basic RSA Algorithm")
        print("0. Quit")
        
        choice = input("🎯 Choose an option (0-5): ").strip()
        
        if choice == "0":
            break
            
        if choice not in ["1", "2", "3", "4", "5"]:
            print("⚠️ Invalid input. Please select a valid option.\n")
            continue
            
        if choice == "5":
            print("\n--- Basic RSA Algorithm ---")
            rsa_op = input("🎯 Choose: Generate Keys (G), Encrypt (E), Decrypt (D): ").upper()
            if rsa_op in ["G", "GENERATE"]:
                pub, priv = generate_rsa_keys()
                print(f"\n✨ Keys Generated!")
                print(f"👉 Public Key (e, n): {pub}")
                print(f"👉 Private Key (d, n): {priv}")
                print("Keep your private key secret!")
                continue
            elif rsa_op in ["E", "ENCRYPT"]:
                message = input("📝 Enter your message: ")
                if not message:
                    print("❌ Error: Message cannot be empty.\n")
                    continue
                try:
                    e = int(input("🔑 Enter Public Key 'e': "))
                    n = int(input("🔑 Enter Public Key 'n': "))
                    cipher = rsa_encrypt(message, (e, n))
                    print(f"\n✨ Encrypted Message (array of numbers):")
                    print(f"👉 {cipher}")
                except ValueError:
                    print("❌ Error: Key components must be integers.")
            elif rsa_op in ["D", "DECRYPT"]:
                cipher_str = input("📝 Enter your encrypted message (comma separated numbers): ")
                try:
                    cipher = [int(x.strip()) for x in cipher_str.split(',') if x.strip()]
                    if not cipher:
                        print("❌ Error: Message cannot be empty.\n")
                        continue
                    d = int(input("🔑 Enter Private Key 'd': "))
                    n = int(input("🔑 Enter Private Key 'n': "))
                    message = rsa_decrypt(cipher, (d, n))
                    print(f"\n✨ Decrypted Message:")
                    print(f"👉 {message}")
                except ValueError:
                    print("❌ Error: Invalid input format. Numbers expected.")
            else:
                print("⚠️ Invalid operation for RSA.\n")
            continue

        op = input("🎯 Choose Operation: Encrypt (E) or Decrypt (D): ").upper()
        if op not in ["E", "ENCRYPT", "D", "DECRYPT"]:
            print("⚠️ Invalid operation.\n")
            continue

        message = input("📝 Enter your message: ")
        if not message.strip():
            print("❌ Error: Message cannot be empty.\n")
            continue
            
        result = ""
        
        if choice == "1":
            try:
                shift = int(input("🔑 Enter the shift key (whole number): "))
                result = caesar_cipher(message, shift, op)
            except ValueError:
                print("❌ Error: Shift key must be a valid whole number.\n")
                continue
                
        elif choice == "2":
            keyword = input("🔑 Enter the keyword: ")
            if not any(c.isalpha() for c in keyword):
                print("❌ Error: Keyword must contain letters.\n")
                continue
            result = vigenere_cipher(message, keyword, op)
            
        elif choice == "3":
            result = atbash_cipher(message)
            
        elif choice == "4":
            keyword = input("🔑 Enter the keyword: ")
            if not any(c.isalpha() for c in keyword):
                print("❌ Error: Keyword must contain letters.\n")
                continue
            result = playfair_cipher(message, keyword, op)
            
        print("\n✨ Resulting Message:")
        print(f"👉 {result}\n")
        
    print("\n👋 Thanks for using the Cipher Suite! Stay secure! 🕵️‍♂️\n")

if __name__ == "__main__":
    main()
