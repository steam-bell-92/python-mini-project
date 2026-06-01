import sys
import os
import math

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))
from utils.validation import get_int, get_choice, get_yes_no

def is_prime(num: int) -> bool:
    """Check if a number is prime."""
    if num < 2:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    for i in range(3, int(math.sqrt(num)) + 1, 2):
        if num % i == 0:
            return False
    return True

def generate_primes_up_to(limit: int) -> list[int]:
    """Generate prime numbers up to limit N."""
    if limit < 2:
        return []
    sieve = [True] * (limit + 1)
    sieve[0] = sieve[1] = False
    for p in range(2, int(math.sqrt(limit)) + 1):
        if sieve[p]:
            for i in range(p * p, limit + 1, p):
                sieve[i] = False
    return [i for i, is_p in enumerate(sieve) if is_p]

def find_primes_in_range(start: int, end: int) -> list[int]:
    """Find prime numbers within a range [start, end]."""
    if end < 2 or start > end:
        return []
    current_start = max(2, start)
    sieve = [True] * (end + 1)
    sieve[0] = sieve[1] = False
    for p in range(2, int(math.sqrt(end)) + 1):
        if sieve[p]:
            for i in range(p * p, end + 1, p):
                sieve[i] = False
    return [i for i in range(current_start, end + 1) if sieve[i]]

def prime_factorization(num: int) -> list[int]:
    """Find prime factorization of a number."""
    if num < 2:
        return []
    factors = []
    divisor = 2
    temp = num
    while divisor * divisor <= temp:
        while temp % divisor == 0:
            factors.append(divisor)
            temp = temp // divisor
        divisor += 1
    if temp > 1:
        factors.append(temp)
    return factors

def find_nth_prime(n: int) -> int:
    """Find the Nth prime number."""
    if n <= 0:
        raise ValueError("n must be positive")
    if n == 1:
        return 2
    
    limit = 100
    if n < 6:
        limit = 15
    else:
        log_n = math.log(n)
        limit = int(n * (log_n + math.log(log_n))) + 10
    
    prime = [True] * (limit + 1)
    prime[0] = prime[1] = False
    p = 2
    while p * p <= limit:
        if prime[p]:
            for i in range(p * p, limit + 1, p):
                prime[i] = False
        p += 1
    
    count = 0
    for i in range(2, limit + 1):
        if prime[i]:
            count += 1
            if count == n:
                return i
    raise RuntimeError("Calculation range exceeded")

def main() -> None:
    print("=" * 50)
    print("🔢 PRIME NUMBER GENERATOR & ANALYZER 🔢")
    print("=" * 50)
    print("📝 Analyze, generate, and factorize prime numbers efficiently.")

    while True:
        print("\n" + "—" * 50)
        print("📋 MAIN MENU")
        print("1️⃣  Check if a number is prime")
        print("2️⃣  Generate prime numbers up to N")
        print("3️⃣  Find primes in a range")
        print("4️⃣  Prime factorization")
        print("5️⃣  Find the Nth prime number")
        print("6️⃣  Exit")

        choice = get_choice(
            prompt="\n🎯 Enter your choice (1-6): ",
            choices=["1", "2", "3", "4", "5", "6"],
            error_invalid="\n ❌ Invalid choice! Please enter a number between 1 and 6."
        )

        if choice == '1':
            print("🔍CHECK IF A NUMBER IS PRIME")        
            num = get_int(
                prompt="🎯 Enter a number to check: ",
                error_invalid="❌ Error: Please enter a valid integer."
            )
            if num < 2:
                print(f"😔 {num} is NOT a prime number. (Primes must be > 1)")
            else:
                if is_prime(num):
                    print(f"✅ {num} is a prime number!")
                else:
                    print(f"😔 {num} is NOT a prime number.")

        elif choice == '2':
            print("\n🔢 GENERATE PRIME NUMBERS UP TO N")
            limit = get_int(
                prompt="🎯 Enter the limit (N): ",
                error_invalid="❌ Error: Please enter a valid integer!"
            )
            if limit > 10000000:
                print("❌ Error: Limit is too high for this system's memory.")
            elif limit < 2:
                print("⚠️ No prime numbers exist below 2.")
            else:
                primes = generate_primes_up_to(limit)
                print(f"✅ Primes up to {limit}: {primes}")
                print(f"📊 Total count: {len(primes)}")
        
        elif choice == '3':
            print("\n📍FIND PRIMES IN A RANGE")
            start = get_int(
                prompt="🎯 Enter start of range: ",
                error_invalid="❌ Error:Please enter valid numbers!"
            )
            end = get_int(
                prompt="🎯 Enter end of range: ",
                error_invalid="❌ Error:Please enter valid numbers!"
            )
            
            if start > end:
                print("❌ Error: Start must be less than or equal to end!")
            elif end < 2:
                print("❌ No prime numbers exist below 2.")
            else:
                primes = find_primes_in_range(start, end)
                print(f"✅ Primes between {start} and {end}: {primes}")
        
        elif choice == '4':
            print("\n🏗️ PRIME FACTORIZATION")
            num = get_int(
                prompt="🎯 Enter a number: ",
                error_invalid="❌ Error:Please enter a valid number!"
            )
            if num < 2:
                print(f"⚠️ {num} cannot be factorized into primes.")
            else:
                factors = prime_factorization(num)
                result_str = " × ".join(map(str, factors))
                print(f"✅ Factorization: {num} = {result_str}")
        
        elif choice == '5':
            print("\n🏆 FIND THE NTH PRIME NUMBER")
            n = get_int(
                prompt="🎯 Enter the value of n: ",
                error_invalid="Please enter a valid number!"
            )
            if n > 1000000:
                print("❌ Error: n is too large. High-range Nth primes require a Segmented Sieve.")
            elif n <= 0:
                print("❌ Please enter a positive number!")
            elif n == 1:
                print("The First Prime Number is: 2")
            else:
                try:
                    nth_prime = find_nth_prime(n)
                    print(f"🎉 The {n}th prime number is: {nth_prime}")
                except RuntimeError as e:
                    print(f"❌ Error: {e}")
        
        elif choice == '6':
            print("\n👋Thank you for using Prime Number Analyzer!")
            break
        
        again = input("\n🔄 Return to main menu? (y/n): ").strip().lower()
        if again != 'y':
            print("\n👋 Goodbye!\n")
            break

if __name__ == "__main__":
    main()
