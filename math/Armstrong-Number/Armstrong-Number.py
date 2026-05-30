def is_armstrong_number(n: int) -> bool:
    if n < 0:
        return False
    num_str = str(n)
    num_digits = len(num_str)
    total = sum(int(char) ** num_digits for char in num_str)
    return total == n

def main() -> None:
    print("=" * 50)
    print("🔢 ARMSTRONG NUMBER CHECKER 🔢")
    print("=" * 50)
    print("An Armstrong number equals the sum of its digits raised to the power of number of digits.")
    print("Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153\n")

    while True:
        print("=" * 50)
        try:
            user_input = input("➡️  Enter a positive number to check: ").strip()
            if not user_input:
                print("❌ Error: Input cannot be empty.")
                continue
                
            num = int(user_input)
            if num < 0:
                print("❌ Please enter a positive number!")
                continue
                
            num_str = str(num)
            num_digits = len(num_str)
            total = sum(int(char) ** num_digits for char in num_str)
                
            print(f"\n📊 Number: {num}")
            print(f"📐 Number of digits: {num_digits}")
            print(f"\n🔍 Calculation:")
            
            calculation_parts = [f"{char}^{num_digits}" for char in num_str]
            print(f"   {' + '.join(calculation_parts)}")
            
            values = [f"{int(char)**num_digits}" for char in num_str]
            print(f"   = {' + '.join(values)}")
            print(f"   = {total}")
            
            if is_armstrong_number(num):
                print(f"\n✅ {num} is an Armstrong Number! 🎉")
            else:
                print(f"\n❌ {num} is NOT an Armstrong Number.")
                
            print("\n💡 Some Armstrong Numbers:")
            print("   1-digit: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9")
            print("   3-digit: 153, 370, 371, 407")
            print("   4-digit: 1634, 8208, 9474")

        except ValueError:
            print("⚠️ Oops! That doesn't look like a valid integer. Please try again.\n")
            continue

        again = input("\n🔄 Do you want to check another number? (y/n): ").strip().lower()
        if again != 'y':
            print("\n👋 Thanks for using Armstrong Number Checker! Goodbye!\n")
            break

if __name__ == "__main__":
    main()
