import math

 # ADDED: Emojis for better UI

class Calculator:

    def __init__(self):
        self.history = []

    def display_menu(self):
        """Display the calculator menu with emoji icons for each option."""
        print("--------🧮 MENU 🧮---------")
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

    def chain(self, result):
        """Ask user if they want to continue with current result."""
        while True:
            try:
                f = input(f"\n🔗 Continue calculation with current result ({result})? (y/n): ")
                if f.lower() == 'y':
                    return 1
                elif f.lower() == 'n':
                    return 0
                else:
                    print('❌ Invalid input! Please enter y or n.')
            except Exception as e:
                print(f'❌ Error: {e}. Please try again.')

    def start_calculation(self):
        """
        Main calculator loop. Handles user input, performs calculations,
        and manages calculation chaining and new calculation resets.
        """
        print("\n" + "=" * 50)
        print("\n🧮 WELCOME TO CALCULATOR 🧮")
        print("\n" + "=" * 50)
        run=1
        flag=1
        result=0
        while (run==1):
            try:
                """NEW FEATURE: Start new calculation option"""
                if flag == 0:
                    while True:
                        try:
                            f = input("\n🆕 Start new calculation? (y/n): ")
                            if f.lower() == 'y':
                                flag = 1
                                break
                            elif f.lower() == 'n':
                                run = 0
                                break
                            else:
                                print('❌ Invalid input! Please enter y or n.')
                        except Exception as e:
                            print(f'❌ Error: {e}. Please try again.')
                result=0
                while (flag==1):
                    self.display_menu()
                    user_input = int(input('/n📌Enter your choice to calculate(1-17): '))
                    """CHANGED: Added chaining support for the operations"""
                    if user_input in range(1,7):
                        if result!=0:
                            b=float(input('🔢Enter next number: '))
                        else:
                            a=float(input("🔢Enter a number: "))
                            b=float(input("🔢Enter next number: "))
                    if user_input==7:
                        if result==0:
                            a=float(input("🔢Enter a number: "))
                            b=float(input("🔢Enter exponent: "))
                        else:
                            b=float(input("⚡Enter exponent: "))
                    if user_input in range(8,16):
                        if result==0:
                            a=float(input("⚡Enter a number: "))
                    if user_input == 1:
                        if result==0:
                            result=self.addition(a,b)
                        else:
                            result=self.addition(result,b)
                        flag=self.chain(result)
                    elif user_input == 2:
                        if result==0:
                            result=self.subtraction(a,b)
                        else:
                            result=self.subtraction(result,b)
                        flag=self.chain(result)
                    elif user_input == 3:
                        if result==0:
                            result=self.multiplication(a,b)
                        else:
                            result=self.multiplication(result,b)
                        flag=self.chain(result)
                    elif user_input == 4:
                        if result==0:
                            result=self.division(a,b)
                        else:
                            result=self.division(result,b)
                        flag=self.chain(result)
                    elif user_input == 5:
                        if result==0:
                            result=self.modulus(a,b)
                        else:
                            result=self.modulus(result,b)
                        flag=self.chain(result)
                    elif user_input == 6:
                        if result==0:
                            result=self.floor_division(a,b)
                        else:
                            result=self.floor_division(result,b)
                        flag=self.chain(result)
                    elif user_input == 7:
                        if result==0:
                            result=self.power(a,b)
                        else:
                            result=self.power(result,b)
                        flag=self.chain(result)
                    elif user_input == 8:
                        if result==0:
                            result=self.factorial(a)
                        else:
                            result=self.factorial(result)
                        flag=self.chain(result)
                    elif user_input == 9:
                        if result==0:
                            result=self.sqrt(a)
                        else:
                            result=self.sqrt(result)
                        flag=self.chain(result)
                    elif user_input == 10:
                        if result==0:
                            result=self.sine(a)
                        else:
                            result=self.sine(result)
                        flag=self.chain(result)
                    elif user_input == 11:
                        if result==0:
                            result=self.cosine(a)
                        else:
                            result=self.cosine(result)
                        flag=self.chain(result)
                    elif user_input == 12:
                        if result==0:
                            result=self.tangent(a)
                        else:
                            result=self.tangent(result)
                        flag=self.chain(result)
                    elif user_input == 13:
                        if result==0:
                            result=self.cotangent(a)
                        else:
                            result=self.cotangent(result)
                        flag=self.chain(result)
                    elif user_input == 14:
                        if result==0:
                            result=self.secant(a)
                        else:
                            result=self.secant(result)
                        flag=self.chain(result)
                    elif user_input == 15:
                        if result==0:
                            result=self.cosecant(a)
                        else:
                            result=self.cosecant(result)
                        flag=self.chain(result)
                    elif user_input == 16:
                        self.show_history()
                    elif user_input == 17:
                        print('👋 Goodbye! Have a great day! 🌟')
                        run=0
                        break
                        """FIXED: Exit immediately"""
                    else:
                        print('❌Wrong Choice.')
                
            except ValueError:
                print('❌Please enter correct option.')
            except ZeroDivisionError:
                print('❌Zero cannot be divided by zero.')
            except Exception as e:
                print(f'❌Something went wrong: {e}')

    def clean(self, x, eps=1e-10):
        if abs(x) < eps:
            return 0.0
        return x

    def add_history(self, operation):
        self.history.append(operation)

    def show_history(self):
        if not self.history:
            print("📜No calculations yet.")
        else:
            print("\n------ 📜Calculation History📜 ------")
            for item in self.history:
                print(item)

    def addition(self,a,b):
        add = a + b
        print(f'✅The Result is: {add}')
        self.add_history(f"{a} + {b} = {add}")
        return add

    def subtraction(self,a,b):
        minus = a - b
        print(f'✅The Result is: {minus}')
        self.add_history(f"{a} - {b} = {minus}")
        return minus

    def multiplication(self,a,b):
        multiplication = a * b
        print(f'✅The Result is: {multiplication}')
        self.add_history(f"{a} * {b} = {multiplication}")
        return multiplication

    def division(self,a,b):
        div = a / b
        print(f'✅The Result is: {div}')
        self.add_history(f"{a} / {b} = {div}")
        return div

    def floor_division(self,a,b):
        floor = a // b
        print(f'✅The Result is: {floor}')
        self.add_history(f"{a} // {b} = {floor}")
        return floor

    def modulus(self,a,b):
        mod = a % b
        print(f'✅The Result is: {mod}')
        self.add_history(f"{a} % {b} = {mod}")
        return mod

    def power(self,a,b):
        power = a ** b
        print(f'✅The Result is: {power}')
        self.add_history(f"{a} ** {b} = {power}")
        return power

    def factorial(self,a):
        fact = 1
        for i in range(1, a + 1):
            fact *= i
        print(f"✅Factorial is: {fact}")
        self.add_history(f"{a}! = {fact}")
        return fact

    def sqrt(self,num):
        sqrt = num ** 0.5
        print(f"✅Square root of {num}: {sqrt}")
        self.add_history(f"sqrt({num}) = {sqrt}")
        return sqrt

    def sine(self,angle):
        rads = math.radians(angle)
        sin_val = self.clean(math.sin(rads))
        print(f"✅Sine of {angle} degrees is: {sin_val}")
        self.add_history(f"sin({angle}) = {sin_val}")
        return sin_val

    def cosine(self,angle):
        rads = math.radians(angle)
        cos_val = self.clean(math.cos(rads))
        print(f"✅Cosine of {angle} degrees is: {cos_val}")
        self.add_history(f"cos({angle}) = {cos_val}")
        return cos_val

    def tangent(self,angle):
        rads = math.radians(angle)
        tan_val = self.clean(math.tan(rads))
        print(f"✅Tangent of {angle} degrees is: {tan_val}")
        self.add_history(f"tan({angle}) = {tan_val}")
        return tan_val

    def cotangent(self,angle):
        rads = math.radians(angle)
        tan_val = self.clean(math.tan(rads))
        if tan_val != 0:
            cot_val = 1 / tan_val
            print(f"✅Cotangent of {angle} degrees is: {cot_val}")
            self.add_history(f"cot({angle}) = {cot_val}")
            return cot_val
        else:
            print("Cotangent is undefined.♾️")
            return 0


    def secant(self,angle):
        rads = math.radians(angle)
        cos_val = self.clean(math.cos(rads))
        if cos_val != 0:
            sec_val = 1 / cos_val
            print(f"✅Secant of {angle} degrees is: {sec_val}")
            self.add_history(f"sec({angle}) = {sec_val}")
            return sec_val
        else:
            print("Secant is undefined.♾️")
            return 0

    def cosecant(self,angle):
        rads = math.radians(angle)
        sin_val = self.clean(math.sin(rads))
        if sin_val != 0:
            csc_val = 1 / sin_val
            print(f"✅Cosecant of {angle} degrees is: {csc_val}")
            self.add_history(f"csc({angle}) = {csc_val}")
            return csc_val
        else:
            print("Cosecant is undefined.♾️")
            return 0


cal = Calculator()
cal.start_calculation()
