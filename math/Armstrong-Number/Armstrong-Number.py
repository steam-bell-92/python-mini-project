class ArmstrongChecker:

    def __init__(self, num):
        self.num = num
        self.original_num = num
        self.num_digits = len(str(num))
        self.total = 0

    def calculate(self):
        temp = self.num

        while temp > 0:
            digit = temp % 10
            self.total += digit ** self.num_digits
            temp //= 10

    def show_calculation(self):
        temp = self.original_num
        digits = []

        while temp > 0:
            digits.append(temp % 10)
            temp //= 10

        digits.reverse()

        calculation_parts = [f"{d}^{self.num_digits}" for d in digits]
        print(f"   {' + '.join(calculation_parts)}")

        values = [f"{d**self.num_digits}" for d in digits]
        print(f"   = {' + '.join(values)}")
        print(f"   = {self.total}")

    def check(self):
        self.calculate()

        print(f"\n📊 Number: {self.original_num}")
        print(f"📐 Number of digits: {self.num_digits}")

        print(f"\n🔍 Calculation:")
        self.show_calculation()

        if self.total == self.original_num:
            print(f"\n✅ {self.original_num} is an Armstrong Number! 🎉")
        else:
            print(f"\n❌ {self.original_num} is NOT an Armstrong Number.")
        
        print("\n💡 Some Armstrong Numbers:")
        print("   1-digit: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9")
        print("   3-digit: 153, 370, 371, 407")
        print("   4-digit: 1634, 8208, 9474")


print("🔢 Armstrong Number Checker 🔢")
print("An Armstrong number equals the sum of its digits raised to the power of number of digits")
print("Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153\n")

while True:
    try:
        num = int(input("➡️  Enter a number to check: "))
        break
    except ValueError:
        print("⚠️ Oops! That doesn't look like a valid number. Please try again.\n")

if num < 0:
    print("❌ Please enter a positive number!")
else:
    checker = ArmstrongChecker(num)
    checker.check()
