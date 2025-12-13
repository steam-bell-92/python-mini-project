print("=" * 50)
print("THE COLLATZ CONJECTURE SEQUENCE")
print("=" * 50)
print("\nAlso known as the 3n+1 problem")
print("Rules:")
print("- If the number is even: divide by 2")
print("- If the number is odd: multiply by 3 and add 1")
print("- Continue until you reach 1")
print("=" * 50)

while True:
    try:
        number = int(input("\nEnter a positive integer to start: "))
        if number > 0:
            break
        else:
            print("Please enter a positive integer!")
    except ValueError:
        print("Please enter a valid number!")

original_number = number
sequence = [number]
steps = 0

print(f"\nStarting with: {number}")
print("\nSequence:")
print(number, end="")

while number != 1:
    if number % 2 == 0:
        number = number // 2
    else:
        number = 3 * number + 1
    
    sequence.append(number)
    steps += 1
    
    print(f" → {number}", end="")
    
    if steps % 10 == 0:
        print()

print("\n\n" + "=" * 50)
print("SEQUENCE COMPLETE!")
print("=" * 50)
print(f"Starting number: {original_number}")
print(f"Total steps: {steps}")
print(f"Sequence length: {len(sequence)}")
print(f"Highest number reached: {max(sequence)}")

if len(sequence) <= 100:
    view_details = input("\nWould you like to see step-by-step details? (yes/no): ").lower()
    if view_details in ['yes', 'y']:
        print("\nDetailed Steps:")
        print("-" * 50)
        for i in range(len(sequence) - 1):
            current = sequence[i]
            next_num = sequence[i + 1]
            if current % 2 == 0:
                print(f"Step {i + 1}: {current} is even → {current} ÷ 2 = {next_num}")
            else:
                print(f"Step {i + 1}: {current} is odd → ({current} × 3) + 1 = {next_num}")
        print("-" * 50)

print("\n✓ The sequence reached 1 as expected!")
print("=" * 50)
