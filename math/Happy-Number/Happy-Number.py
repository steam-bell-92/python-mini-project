print("🔢 Happy Number Checker 🔢")
print("🎯 A happy number is a number which eventually reaches 1 when replaced repeatedly by the sum of the square of its digits.\n")

while True:
    try:
        N = int(input("➡️  Enter a number: "))
        break
    except ValueError:
        print("⚠️ Oops! That doesn't look like a valid number. Please try again.\n")

seen = set()
num = N
while num != 1 and num not in seen:
    seen.add(num)
    num = sum((int(digit) ** 2) for digit in str(num))

if (num == 1):
    print(f"🔍 {N} is a happy number! ✅")
else:
    print(f"🔍 {N} is not a happy number. ❌")