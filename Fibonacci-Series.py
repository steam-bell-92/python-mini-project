# 0,1,1,2,3,5,8,13,...

print("🔢 Fibonacci Series Generator 🔢")
print("📐 Pattern: 0, 1, 1, 2, 3, 5, 8, 13...\n")

series = [0, 1, 1]
n = int(input("➡️  Enter number of terms: "))

num1 = 0
num2 = 1
num3 = num2
i = 1

while i <= n:
    i += 1
    num1, num2 = num2, num3
    num3 = num1 + num2
    series.append(num3)

print("\n✨ Fibonacci Series:")
print(" → ".join(map(str, series)))

print(f"\n📊 Sum of {len(series)} terms: {sum(series)}")