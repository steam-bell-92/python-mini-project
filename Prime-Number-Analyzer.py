print("=" * 50)
print("PRIME NUMBER GENERATOR & ANALYZER")
print("=" * 50)

while True:
    print("\nChoose an option:")
    print("1. Check if a number is prime")
    print("2. Generate prime numbers up to N")
    print("3. Find primes in a range")
    print("4. Prime factorization")
    print("5. Exit")
    
    choice = input("\nEnter your choice (1-5): ")
    
    if choice == '1':
        print("\n" + "-" * 50)
        print("CHECK IF A NUMBER IS PRIME")
        print("-" * 50)
        
        try:
            num = int(input("Enter a number: "))
            
            if num < 2:
                print(f"\n{num} is NOT a prime number.")
                print("(Prime numbers must be greater than 1)")
            else:
                is_prime = True
                divisor = 2
                
                while divisor * divisor <= num:
                    if num % divisor == 0:
                        is_prime = False
                        break
                    divisor += 1
                
                if is_prime:
                    print(f"\n✓ {num} is a PRIME number!")
                else:
                    print(f"\n✗ {num} is NOT a prime number.")
        
        except ValueError:
            print("Please enter a valid number!")
    
    elif choice == '2':
        print("\n" + "-" * 50)
        print("GENERATE PRIME NUMBERS UP TO N")
        print("-" * 50)
        
        try:
            limit = int(input("Enter the limit (N): "))
            
            if limit < 2:
                print("\nNo prime numbers exist below 2.")
            else:
                primes = []
                
                for num in range(2, limit + 1):
                    is_prime = True
                    divisor = 2
                    
                    while divisor * divisor <= num:
                        if num % divisor == 0:
                            is_prime = False
                            break
                        divisor += 1
                    
                    if is_prime:
                        primes.append(num)
                
                print(f"\nPrime numbers up to {limit}:")
                print(primes)
                print(f"\nTotal prime numbers: {len(primes)}")
                
                if len(primes) > 0:
                    print(f"Smallest prime: {primes[0]}")
                    print(f"Largest prime: {primes[-1]}")
        
        except ValueError:
            print("Please enter a valid number!")
    
    elif choice == '3':
        print("\n" + "-" * 50)
        print("FIND PRIMES IN A RANGE")
        print("-" * 50)
        
        try:
            start = int(input("Enter start of range: "))
            end = int(input("Enter end of range: "))
            
            if start > end:
                print("\nError: Start must be less than or equal to end!")
            else:
                if start < 2:
                    start = 2
                
                primes = []
                
                for num in range(start, end + 1):
                    is_prime = True
                    divisor = 2
                    
                    while divisor * divisor <= num:
                        if num % divisor == 0:
                            is_prime = False
                            break
                        divisor += 1
                    
                    if is_prime:
                        primes.append(num)
                
                print(f"\nPrime numbers between {start} and {end}:")
                if len(primes) == 0:
                    print("No prime numbers found in this range.")
                else:
                    print(primes)
                    print(f"\nTotal prime numbers: {len(primes)}")
        
        except ValueError:
            print("Please enter valid numbers!")
    
    elif choice == '4':
        print("\n" + "-" * 50)
        print("PRIME FACTORIZATION")
        print("-" * 50)
        
        try:
            num = int(input("Enter a number: "))
            
            if num < 2:
                print(f"\n{num} cannot be factorized into primes.")
            else:
                original_num = num
                factors = []
                divisor = 2
                
                while divisor * divisor <= num:
                    while num % divisor == 0:
                        factors.append(divisor)
                        num = num // divisor
                    divisor += 1
                
                if num > 1:
                    factors.append(num)
                
                print(f"\nPrime factorization of {original_num}:")
                print(f"{original_num} = {' × '.join(map(str, factors))}")
                
                unique_factors = []
                for factor in factors:
                    if factor not in unique_factors:
                        unique_factors.append(factor)
                
                print(f"\nUnique prime factors: {unique_factors}")
                print(f"Total prime factors (with repetition): {len(factors)}")
        
        except ValueError:
            print("Please enter a valid number!")
    
    elif choice == '5':
        print("\n" + "=" * 50)
        print("Thank you for using Prime Number Analyzer!")
        print("=" * 50)
        break
    
    else:
        print("\nInvalid choice! Please enter a number between 1 and 5.")
    
    print("\n" + "=" * 50)
