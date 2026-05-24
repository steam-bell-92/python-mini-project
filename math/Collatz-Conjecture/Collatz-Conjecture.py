print("=" * 50)
print("THE COLLATZ CONJECTURE SEQUENCE")
print("=" * 50)
print("\nAlso known as the 3n+1 problem")
print("Rules:")
print("- If the number is even: divide by 2")
print("- If the number is odd: multiply by 3 and add 1")
print("- Continue until you reach 1")
print("=" * 50)

MAX_STEPS = 100000
MAX_VALUE = 10**18
MAX_INPUT = 10**12
steps_cache = {1: 0}

def collatz_next(n):
    return n // 2 if n % 2 == 0 else 3 * n + 1

def get_remaining_sequence(n):
    seq = []
    while n != 1:
        n = collatz_next(n)
        seq.append(n)
    return seq
def collatz_sequence(start):
    if start in steps_cache:
        n = start
        yield n
        while n != 1:
            n = collatz_next(n)
            yield n
        return

    n = start
    path = [n]
    steps = 0

    yield n

    while n != 1 and steps < MAX_STEPS:
        n = collatz_next(n)
        steps += 1

        if n > MAX_VALUE:
            print("\n\n⚠ Computation stopped: safety limit reached")
            break

        yield n
        path.append(n)

        if n in steps_cache:
            for remaining in get_remaining_sequence(n):
                yield remaining
            steps += steps_cache[n]
            break

    total = steps_cache.get(n, 0)
    for value in reversed(path):
        total += 1
        steps_cache[value] = total

while True:
    try:
        number = int(input("\nEnter a positive integer to start: "))
        if number > 0:
            if number > MAX_INPUT:
                print(f"Input too large! Maximum allowed: {MAX_INPUT:,}")
                continue
            break
        else:
            print("Please enter a positive integer!")
    except ValueError:
        print("Please enter a valid number!")

original_number = number

print(f"\nStarting with: {number}")
print("\nSequence:")

sequence = []
steps = 0
max_value = number

gen = collatz_sequence(number)

first = next(gen)
print(first, end="")
sequence.append(first)

for num in gen:
    sequence.append(num)
    steps += 1
    max_value = max(max_value, num)
    print(f" → {num}", end="")
    if steps % 10 == 0:
        print()

print("\n\n" + "=" * 50)
print("SEQUENCE COMPLETE!")
print("=" * 50)
print(f"Starting number: {original_number}")
print(f"Total steps: {steps}")
print(f"Sequence length: {len(sequence)}")
print(f"Highest number reached: {max_value}")

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
