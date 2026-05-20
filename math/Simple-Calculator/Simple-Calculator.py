import math

from matplotlib.pylab import angle

class Calculator:
    def __init__(self):
        pass 

    def start_calculation(self):
        print("--------Menu---------")
        print('1. Addition')
        print('2. Subtraction')
        print('3. Multiplication')
        print('4. Division')
        print('5. Modulus')
        print('6. Floor Division')
        print('7. Power')
        print('8. Factorial')
        print('9. Square root')
        print('10. Sine')
        print('11. Cosine')
        print('12. Tangent')
        print('13. Cotangent')
        print('14. Secant')
        print('15. Cosecant')
        print('16. Exit')

        while True:
            try:
                user_input = int(input('Enter your choice to calculate(1-16): '))
                if user_input == 1:
                    self.addition()
                elif user_input == 2:
                    self.substraction()
                elif user_input == 3:
                    self.multiplication()
                elif user_input == 4:
                    self.division()
                elif user_input == 5:
                    self.modulus()
                elif user_input == 6:
                    self.floor_division()
                elif user_input == 7:
                    self.power()
                elif user_input == 8:
                    self.factorial()
                elif user_input == 9:
                    self.sqrt()
                elif user_input == 10:
                    self.sine()
                elif user_input == 11:
                    self.cosine()
                elif user_input == 12:
                    self.tangent()
                elif user_input == 13:
                    self.cotangent()
                elif user_input == 14:
                    self.secant()
                elif user_input == 15:
                    self.cosecant()
                elif user_input == 16:
                    print('Goodbye! Have a good day.')
                    break
                else:
                    print('Wrong Choice.')

            except ValueError:
                print('please enter correct option.')
            except ZeroDivisionError:
                print('Zero cannot be divided by zero.')
            except Exception as e:
                print(f'Something went wrong: {e}')

    def clean(self, x, eps=1e-10):
        if abs(x) < eps:
            return 0.0
        return x


    def addition(self):
        a = int(input('enter first value: '))
        b = int(input('enter second value: '))
        add = a + b
        print(f'The Result is: {add}')
    
    def substraction(self):
        a = int(input('enter first value: '))
        b = int(input('enter second value: '))
        minus = a - b
        print(f'The Result is: {minus}')

    def division(self):
        a = int(input('enter first value: '))
        b = int(input('enter second value: '))
        div = a / b
        print(f'The Result is: {div}')
    
    def multiplication(self):
        a = int(input('enter first value: '))
        b = int(input('enter second value: '))
        multiplication = a * b
        print(f'The Result is: {multiplication}')

    def floor_division(self):
        a = int(input('enter first value: '))
        b = int(input('enter second value: '))
        floor = a // b
        print(f'The Result is: {floor}')

    def modulus(self):
        a = int(input('enter first value: '))
        b = int(input('enter second value: '))
        mod = a % b
        print(f'The Result is: {mod}')

    def power(self):
        a = int(input('enter first value: '))
        b = int(input('enter second value: '))
        power = a ** b
        print(f'The Result is: {power}')

    def factorial(self):
        a = int(input("Enter the number: "))
        fact = 1
        for i in range(1,a+1):
            fact = fact * i
        print(f"Factorial is: {fact}")
    
    def sqrt(self):
        num = int(input("Enter the number: "))
        sqrt = num ** 0.5
        print(f"Square root of {num} : {sqrt}")

    def sine(self):
        angle = float(input("Enter the angle in degrees: "))
        rads = math.radians(angle)
        sin_val = self.clean(math.sin(rads))
        print(f"Sine of {angle} degrees is: {sin_val}")

    def cosine(self):
        angle = float(input("Enter the angle in degrees: "))
        rads = math.radians(angle)
        cos_val = self.clean(math.cos(rads))
        print(f"Cosine of {angle} degrees is: {cos_val}")

    def tangent(self):
        angle = float(input("Enter the angle in degrees: "))
        rads = math.radians(angle)
        tan_val = self.clean(math.tan(rads))
        print(f"Tangent of {angle} degrees is: {tan_val}")

    def cotangent(self):
        angle = float(input("Enter the angle in degrees: "))
        rads = math.radians(angle)
        tan_val = self.clean(math.tan(rads))
        if tan_val != 0:
            cot_val = 1 / tan_val
            print(f"Cotangent of {angle} degrees is: {cot_val}")
        else:
            print(f"Cotangent of {angle} degrees is undefined.")

    def secant(self):
        angle = float(input("Enter the angle in degrees: "))
        rads = math.radians(angle)
        cos_val = self.clean(math.cos(rads))
        if cos_val != 0:
            sec_val = 1 / cos_val
            print(f"Secant of {angle} degrees is: {sec_val}")
        else:
            print(f"Secant of {angle} degrees is undefined.")

    def cosecant(self):
        angle = float(input("Enter the angle in degrees: "))
        rads = math.radians(angle)
        sin_val = self.clean(math.sin(rads))
        if sin_val != 0:
            csc_val = 1 / sin_val
            print(f"Cosecant of {angle} degrees is: {csc_val}")
        else:
            print(f"Cosecant of {angle} degrees is undefined.")

cal = Calculator()
cal.start_calculation()
