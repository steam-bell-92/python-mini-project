# 0,1,1,2,3,5,8,13,...

print("🔢 Fibonacci Series Generator 🔢")
print("📐 Pattern: 0, 1, 1, 2, 3, 5, 8, 13...\n")

series = [0, 1]
n = int(input("➡️  Enter number of terms: "))

while len(series) < n:
    series.append(series[-1] + series[-2])

print("\n✨ Fibonacci Series:")
print(" → ".join(map(str, series)))

print(f"\n📊 Sum of {len(series)} terms: {sum(series)}")