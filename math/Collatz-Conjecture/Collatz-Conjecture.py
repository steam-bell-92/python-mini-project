print("🎮 The Collatz Conjecture Sequence 🎮")
print("Also known as the 3n+1 problem\n")
print("📚 Rules:")
print("  - If the number is even: divide by 2")
print("  - If the number is odd: multiply by 3 and add 1")
print("  - Continue until you reach 1\n")

MAX_STEPS = 100000
MAX_INPUT = 10**12

while True:
    try:
        number = int(input("🎯 Enter a positive integer to start: "))
        if number <= 0:
            print("❌ Please enter a positive integer!")
            continue
        if number > MAX_INPUT:
            print(f"⚠️ Input too large! Maximum allowed: {MAX_INPUT:,}")
            continue
    except ValueError:
        print("❌ Please enter a valid number!")
        continue

    original_number = number
    sequence = [number]
    steps = 0
    max_value = number

    print(f"\n🚀 Starting with: {number}")
    print("📊 Sequence:")
    print(number, end="")

    while number != 1 and steps < MAX_STEPS:
        if number % 2 == 0:
            number = number // 2
        else:
            number = 3 * number + 1
            
        steps += 1
        sequence.append(number)
        
        if number > max_value:
            max_value = number
            
        print(f" ➡️ {number}", end="")
        if steps % 10 == 0:
            print()

    print("\n\n✅ SEQUENCE COMPLETE!")
    print(f"📍 Starting number: {original_number}")
    print(f"👣 Total steps: {steps}")
    print(f"📏 Sequence length: {len(sequence)}")
    print(f"🏆 Highest number reached: {max_value}")

    if len(sequence) <= 100:
        view_details = input("\n🔍 Would you like to see step-by-step details? (y/n): ").strip().lower()
        if view_details in ['y', 'yes']:
            print("\n📝 Detailed Steps:")
            for i in range(len(sequence) - 1):
                current = sequence[i]
                next_num = sequence[i + 1]
                if current % 2 == 0:
                    print(f"  Step {i + 1}: {current} is even ➡️ {current} ÷ 2 = {next_num}")
                else:
                    print(f"  Step {i + 1}: {current} is odd ➡️ ({current} × 3) + 1 = {next_num}")

    print("\n🎉 The sequence reached 1 as expected!")
    
    again = input("\n🔄 Do you want to test another number? (y/n): ").strip().lower()
    if again != 'y':
        print("\n👋 Thanks for exploring the Collatz Conjecture! Goodbye!\n")
        break
