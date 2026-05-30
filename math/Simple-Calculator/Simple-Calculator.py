import math

print("=" * 50)
print("🧮 WELCOME TO CALCULATOR 🧮")
print("=" * 50)

history = []
run = True
flag = True
result = 0.0

while run:
    try:
        # Start new calculation prompt
        if not flag:
            while True:
                f = input("\n🆕 Start new calculation? (y/n): ").strip().lower()
                if f == 'y':
                    flag = True
                    result = 0.0
                    break
                elif f == 'n':
                    run = False
                    break
                else:
                    print('❌ Invalid input! Please enter y or n.')

        if not run:
            break

        while flag:
            print("\n--------🧮 MENU 🧮---------")
            print('1. Addition ➕')
            print('2. Subtraction ➖')
            print('3. Multiplication ✖️')
            print('4. Division ➗')
            print('5. Modulus Ⓜ️')
            print('6. Floor Division 📉')
            print('7. Power ⚡')
            print('8. Factorial ❗')
            print('9. Square root √')
            print('10. Sine 📐')
            print('11. Cosine 📐')
            print('12. Tangent 📐')
            print('13. Cotangent 📐')
            print('14. Secant 📐')
            print('15. Cosecant 📐')
            print('16. View History 📜')
            print('17. Exit 🚪')

            user_choice = input('\n📌 Enter your choice to calculate (1-17): ').strip()
            if not user_choice:
                print('❌ Choice cannot be empty. Please enter a number between 1 and 17.')
                continue
                
            try:
                user_input = int(user_choice)
            except ValueError:
                print('❌ Please enter a correct option.')
                continue

            if user_input == 17:
                print('\n👋 Goodbye! Have a great day! 🌟\n')
                run = False
                break

            if user_input == 16:
                if not history:
                    print("📜 No calculations yet.")
                else:
                    print("\n------ 📜 Calculation History 📜 ------")
                    for item in history:
                        print(item)
                continue

            if user_input not in range(1, 16):
                print('❌ Wrong Choice. Enter a number between 1 and 17.')
                continue

            # Gather operands
            a = 0.0
            b = 0.0
            
            # Binary operations: Addition, Subtraction, Multiplication, Division, Modulus, Floor Division
            if user_input in range(1, 7):
                try:
                    if result != 0.0:
                        b = float(input('🔢 Enter next number: ').strip())
                        a = result
                    else:
                        a = float(input("🔢 Enter first number: ").strip())
                        b = float(input("🔢 Enter next number: ").strip())
                except ValueError:
                    print("❌ Error: Invalid numeric input.")
                    continue

            # Power operation
            elif user_input == 7:
                try:
                    if result == 0.0:
                        a = float(input("🔢 Enter base number: ").strip())
                        b = float(input("🔢 Enter exponent: ").strip())
                    else:
                        a = result
                        b = float(input("⚡ Enter exponent: ").strip())
                except ValueError:
                    print("❌ Error: Invalid numeric input.")
                    continue

            # Unary operations: Factorial, Sqrt, Trigonometric
            elif user_input in range(8, 16):
                try:
                    if result == 0.0:
                        a = float(input("⚡ Enter a number: ").strip())
                    else:
                        a = result
                except ValueError:
                    print("❌ Error: Invalid numeric input.")
                    continue

            # Perform calculations
            op_result = 0.0
            op_str = ""

            try:
                if user_input == 1:
                    op_result = a + b
                    op_str = f"{a} + {b} = {op_result}"
                    print(f'✅ The Result is: {op_result}')
                elif user_input == 2:
                    op_result = a - b
                    op_str = f"{a} - {b} = {op_result}"
                    print(f'✅ The Result is: {op_result}')
                elif user_input == 3:
                    op_result = a * b
                    op_str = f"{a} * {b} = {op_result}"
                    print(f'✅ The Result is: {op_result}')
                elif user_input == 4:
                    if b == 0:
                        raise ZeroDivisionError
                    op_result = a / b
                    op_str = f"{a} / {b} = {op_result}"
                    print(f'✅ The Result is: {op_result}')
                elif user_input == 5:
                    if b == 0:
                        raise ZeroDivisionError
                    op_result = a % b
                    op_str = f"{a} % {b} = {op_result}"
                    print(f'✅ The Result is: {op_result}')
                elif user_input == 6:
                    if b == 0:
                        raise ZeroDivisionError
                    op_result = a // b
                    op_str = f"{a} // {b} = {op_result}"
                    print(f'✅ The Result is: {op_result}')
                elif user_input == 7:
                    op_result = a ** b
                    op_str = f"{a} ** {b} = {op_result}"
                    print(f'✅ The Result is: {op_result}')
                elif user_input == 8:
                    if a < 0 or not a.is_integer():
                        print("❌ Error: Factorial is only defined for non-negative integers.")
                        continue
                    fact = 1
                    for i in range(1, int(a) + 1):
                        fact *= i
                    op_result = float(fact)
                    op_str = f"{int(a)}! = {fact}"
                    print(f"✅ Factorial is: {fact}")
                elif user_input == 9:
                    if a < 0:
                        print("❌ Error: Square root of negative number is not real.")
                        continue
                    op_result = a ** 0.5
                    op_str = f"sqrt({a}) = {op_result}"
                    print(f"✅ Square root of {a}: {op_result}")
                elif user_input in range(10, 16):
                    # Trig operations
                    rads = math.radians(a)
                    
                    def clean(val):
                        return 0.0 if abs(val) < 1e-10 else val

                    if user_input == 10:
                        op_result = clean(math.sin(rads))
                        op_str = f"sin({a}) = {op_result}"
                        print(f"✅ Sine of {a} degrees is: {op_result}")
                    elif user_input == 11:
                        op_result = clean(math.cos(rads))
                        op_str = f"cos({a}) = {op_result}"
                        print(f"✅ Cosine of {a} degrees is: {op_result}")
                    elif user_input == 12:
                        tan_val = clean(math.tan(rads))
                        op_result = tan_val
                        op_str = f"tan({a}) = {op_result}"
                        print(f"✅ Tangent of {a} degrees is: {op_result}")
                    elif user_input == 13:
                        tan_val = clean(math.tan(rads))
                        if tan_val != 0:
                            op_result = 1.0 / tan_val
                            op_str = f"cot({a}) = {op_result}"
                            print(f"✅ Cotangent of {a} degrees is: {op_result}")
                        else:
                            print("Cotangent is undefined.♾️")
                            continue
                    elif user_input == 14:
                        cos_val = clean(math.cos(rads))
                        if cos_val != 0:
                            op_result = 1.0 / cos_val
                            op_str = f"sec({a}) = {op_result}"
                            print(f"✅ Secant of {a} degrees is: {op_result}")
                        else:
                            print("Secant is undefined.♾️")
                            continue
                    elif user_input == 15:
                        sin_val = clean(math.sin(rads))
                        if sin_val != 0:
                            op_result = 1.0 / sin_val
                            op_str = f"csc({a}) = {op_result}"
                            print(f"✅ Cosecant of {a} degrees is: {op_result}")
                        else:
                            print("Cosecant is undefined.♾️")
                            continue

                history.append(op_str)
                result = op_result

                # Chain calculation prompt
                while True:
                    f = input(f"\n🔗 Continue calculation with current result ({result})? (y/n): ").strip().lower()
                    if f == 'y':
                        flag = True
                        break
                    elif f == 'n':
                        flag = False
                        break
                    else:
                        print('❌ Invalid input! Please enter y or n.')

            except ZeroDivisionError:
                print('❌ Division by zero is not allowed.')
                continue
            except Exception as e:
                print(f'❌ Something went wrong: {e}')
                continue

    except Exception as e:
        print(f'❌ Error: {e}')
