print("🔐 Caesar Cipher Encoder & Decoder 🔐")
print("Encrypt and decrypt messages using Caesar Cipher\n")


def encrypt(text, shift):

    result = ""

    for char in text:

        if char.isupper():
            result += chr((ord(char) - 65 + shift) % 26 + 65)

        elif char.islower():
            result += chr((ord(char) - 97 + shift) % 26 + 97)

        else:
            result += char

    return result


def decrypt(text, shift):

    return encrypt(text, -shift)


while True:

    print("=" * 50)
    print("🎯 Choose an option:")
    print("1️⃣ Encrypt Text")
    print("2️⃣ Decrypt Text")
    print("3️⃣ Exit")
    print("=" * 50)

    choice = input("\n➡️ Enter your choice (1-3): ")

    if choice == '1':

        text = input("\n📝 Enter text to encrypt: ")
        shift = int(input("🔑 Enter shift value: "))

        encrypted = encrypt(text, shift)

        print(f"\n🔐 Encrypted Text: {encrypted}\n")

    elif choice == '2':

        text = input("\n📨 Enter text to decrypt: ")
        shift = int(input("🔑 Enter shift value: "))

        decrypted = decrypt(text, shift)

        print(f"\n📝 Decrypted Text: {decrypted}\n")

    elif choice == '3':

        print("\n👋 Thanks for using Caesar Cipher! Goodbye!\n")
        break

    else:
        print("\n❌ Invalid choice! Please select 1-3.\n")