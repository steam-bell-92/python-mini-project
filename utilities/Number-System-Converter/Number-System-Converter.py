print("🔢 Number System Converter 🔢")
print("Convert between Decimal, Binary, Octal, and Hexadecimal formats interactively!\n")

while True:
    print("=" * 50)
    print("🎯 Choose the source number system:")
    print("1️⃣  Decimal (Base 10)")
    print("2️⃣  Binary (Base 2)")
    print("3️⃣  Octal (Base 8)")
    print("4️⃣  Hexadecimal (Base 16)")
    print("5️⃣  Exit")
    print("=" * 50)
    
    choice = input("\n➡️  Enter your choice (1-5): ").strip()
    
    if choice == '5':
        print("\n👋 Thanks for using Number System Converter! Goodbye!\n")
        break
        
    if choice not in ('1', '2', '3', '4'):
        print("\n❌ Invalid choice! Please select 1-5.\n")
        continue

    # 1. Decimal to others
    if choice == '1':
        val = input("📝 Enter Decimal Number: ").strip()
        if not val:
            print("❌ Error: Input cannot be empty.\n")
            continue
        try:
            n = int(val)
            print(f"\n✨ Conversions for Decimal: {n}")
            print("----------------------------------------")
            print(f"🔹 Binary (Base 2) : {format(n, 'b')}  [Logic: Successive division by 2, collect remainders]")
            print(f"🔹 Octal (Base 8)  : {format(n, 'o')}  [Logic: Successive division by 8, collect remainders]")
            print(f"🔹 Hex (Base 16)   : {format(n, 'X')}  [Logic: Successive division by 16, map 10-15 to A-F]")
            print("----------------------------------------\n")
        except ValueError:
            print("❌ Invalid input! Please enter a valid decimal integer.\n")

    # 2. Binary to others
    elif choice == '2':
        val = input("📝 Enter Binary Number: ").strip()
        if not val:
            print("❌ Error: Input cannot be empty.\n")
            continue
        try:
            n = int(val, 2)
            print(f"\n✨ Conversions for Binary: {val}")
            print("----------------------------------------")
            print(f"🔹 Decimal (Base 10) : {n}  [Logic: Multiply each bit by 2^position and sum]")
            print(f"🔹 Octal (Base 8)    : {format(n, 'o')}  [Logic: Group bits into 3s, convert each group]")
            print(f"🔹 Hex (Base 16)     : {format(n, 'X')}  [Logic: Group bits into 4s, convert each group]")
            print("----------------------------------------\n")
        except ValueError:
            print("❌ Invalid input! Please enter a valid binary number (0s and 1s).\n")

    # 3. Octal to others
    elif choice == '3':
        val = input("📝 Enter Octal Number: ").strip()
        if not val:
            print("❌ Error: Input cannot be empty.\n")
            continue
        try:
            n = int(val, 8)
            print(f"\n✨ Conversions for Octal: {val}")
            print("----------------------------------------")
            print(f"🔹 Decimal (Base 10) : {n}  [Logic: Multiply each digit by 8^position and sum]")
            print(f"🔹 Binary (Base 2)   : {format(n, 'b')}  [Logic: Convert each octal digit to 3-bit binary]")
            print(f"🔹 Hex (Base 16)     : {format(n, 'X')}  [Logic: Convert to Binary first, then group by 4]")
            print("----------------------------------------\n")
        except ValueError:
            print("❌ Invalid input! Please enter a valid octal number (0-7).\n")

    # 4. Hex to others
    elif choice == '4':
        val = input("📝 Enter Hexadecimal Number: ").strip()
        if not val:
            print("❌ Error: Input cannot be empty.\n")
            continue
        try:
            n = int(val, 16)
            print(f"\n✨ Conversions for Hexadecimal: {val.upper()}")
            print("----------------------------------------")
            print(f"🔹 Decimal (Base 10) : {n}  [Logic: Multiply each digit by 16^position and sum]")
            print(f"🔹 Binary (Base 2)   : {format(n, 'b')}  [Logic: Convert each hex digit to 4-bit binary]")
            print(f"🔹 Octal (Base 8)    : {format(n, 'o')}  [Logic: Convert to Binary first, then group by 3]")
            print("----------------------------------------\n")
        except ValueError:
            print("❌ Invalid input! Please enter a valid hexadecimal number (0-9, A-F).\n")
