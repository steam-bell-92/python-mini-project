import re
import math

def parse_polynomial(raw):
    clean_str = raw.replace(" ", "")
    if not clean_str:
        return None
    
    term_pattern = r'([+-]?\d*\.?\d*\*?x(?:\^[+-]?\d+)?|[+-]?\d+\.?\d*)'
    matches = re.findall(term_pattern, clean_str)
    
    if not matches:
        return None
        
    terms_map = {}
    for term in matches:
        if not term or term in ('+', '-'):
            continue
            
        coeff = 1.0
        power = 0
        
        if 'x' in term:
            parts = term.split('x')
            coeff_str = parts[0].replace('*', '')
            if coeff_str == '+' or coeff_str == '':
                coeff = 1.0
            elif coeff_str == '-':
                coeff = -1.0
            else:
                try:
                    coeff = float(coeff_str)
                except ValueError:
                    return None
                
            if len(parts) > 1 and parts[1].startswith('^'):
                try:
                    power = int(parts[1][1:])
                except ValueError:
                    return None
            else:
                power = 1
        else:
            try:
                coeff = float(term)
            except ValueError:
                return None
            power = 0
            
        if power not in terms_map:
            terms_map[power] = 0.0
        terms_map[power] += coeff
        
    result = []
    for p in sorted(terms_map.keys(), reverse=True):
        c = terms_map[p]
        if abs(c) > 1e-12:
            result.append({"coeff": c, "power": p, "is_ln": False})
            
    if not result:
        result.append({"coeff": 0.0, "power": 0, "is_ln": False})
        
    return result

def poly_to_string(terms, is_integral=False):
    if not terms:
        return "C" if is_integral else "0"
        
    parts = []
    for i, term in enumerate(terms):
        c = term['coeff']
        p = term['power']
        is_ln = term['is_ln']
        
        if abs(c) < 1e-12:
            continue
            
        sign = "+" if c >= 0 else "-"
        abs_c = abs(c)
        c_str = str(int(round(abs_c))) if abs(abs_c - round(abs_c)) < 1e-9 else f"{abs_c:.6f}".rstrip("0").rstrip(".")
        
        if is_ln:
            body = "ln|x|" if abs(abs_c - 1.0) < 1e-12 else f"{c_str}ln|x|"
        else:
            if p == 0:
                body = c_str
            elif p == 1:
                body = "x" if abs(abs_c - 1.0) < 1e-12 else f"{c_str}x"
            else:
                body = f"x^{p}" if abs(abs_c - 1.0) < 1e-12 else f"{c_str}x^{p}"
                
        if len(parts) == 0:
            parts.append(body if sign == "+" else f"-{body}")
        else:
            parts.append(f"{sign} {body}")
            
    res = " ".join(parts)
    if not res:
        res = "0"
        
    if is_integral:
        if res == "0":
            res = "C"
        else:
            res += " + C"
    return res

def derivative(terms):
    res = []
    for t in terms:
        c = t['coeff']
        p = t['power']
        if p != 0:
            res.append({"coeff": c * p, "power": p - 1, "is_ln": False})
    if not res:
        res.append({"coeff": 0.0, "power": 0, "is_ln": False})
    return res

def integral(terms):
    res = []
    for t in terms:
        c = t['coeff']
        p = t['power']
        if p == -1:
            res.append({"coeff": c, "power": 0, "is_ln": True})
        else:
            res.append({"coeff": c / (p + 1), "power": p + 1, "is_ln": False})
    if not res:
        res.append({"coeff": 0.0, "power": 0, "is_ln": False})
    
    # Sort for consistent display (ln at the end or powers sorted)
    res.sort(key=lambda x: (x['is_ln'], -x['power']))
    return res

def evaluate(terms, x):
    val = 0.0
    for t in terms:
        c = t['coeff']
        p = t['power']
        is_ln = t['is_ln']
        if is_ln:
            if x == 0:
                raise ValueError("Cannot evaluate ln|0|")
            val += c * math.log(abs(x))
        else:
            if x == 0 and p < 0:
                raise ValueError("Division by zero in negative exponent")
            val += c * math.pow(x, p)
    return val

def main():
    print("=" * 58)
    print("📈 COMPLETE CALCULUS ENGINE 📈")
    print("=" * 58)

    while True:
        print("\nChoose an option:")
        print("1️⃣  Find 1st derivative")
        print("2️⃣  Find nth derivative")
        print("3️⃣  Evaluate derivative at x")
        print("4️⃣  Find indefinite integral")
        print("5️⃣  Evaluate definite integral")
        print("6️⃣  Exit")

        choice = input("🎯 Enter your choice (1-6): ").strip()

        if choice == "6":
            print("\n👋 Thanks for using Complete Calculus Engine! Goodbye! ✨\n")
            break

        if choice not in {"1", "2", "3", "4", "5"}:
            print("❌ Please choose between 1 and 6.")
            continue

        raw = input("\n📝 Enter equation (e.g. 3x^2 - x^-1 + 5): ").strip()
        if not raw:
            print("❌ Error: Input cannot be empty.")
            continue

        terms = parse_polynomial(raw)
        if terms is None:
            print("❌ Error: Could not parse equation.")
            print("   ✅ Correct format: 3x^2 - 2x + 5  (separate terms with spaces)")
            continue
            
        print(f"\n✨ Equation: {poly_to_string(terms)}")

        if choice == "1":
            derived = derivative(terms)
            print(f"✅ First derivative: {poly_to_string(derived)}")

        elif choice == "2":
            try:
                n_order = int(input("🎯 Enter derivative order n (>= 1): ").strip())
                if n_order < 1:
                    raise ValueError
            except ValueError:
                print("❌ n must be an integer >= 1.")
                continue

            derived = terms
            for _ in range(n_order):
                derived = derivative(derived)
            print(f"✅ {n_order}th derivative: {poly_to_string(derived)}")

        elif choice == "3":
            try:
                x_val = float(input("🎯 Enter x value: ").strip())
                order = int(input("🎯 Derivative order to evaluate (>= 1): ").strip())
                if order < 1:
                    raise ValueError
            except ValueError:
                print("❌ Enter valid numeric x and integer order >= 1.")
                continue

            derived = terms
            for _ in range(order):
                derived = derivative(derived)
                
            try:
                val_eval = evaluate(derived, x_val)
                x_str = str(int(round(x_val))) if abs(x_val - round(x_val)) < 1e-9 else f"{x_val:.6f}".rstrip("0").rstrip(".")
                val_eval_str = str(int(round(val_eval))) if abs(val_eval - round(val_eval)) < 1e-9 else f"{val_eval:.6f}".rstrip("0").rstrip(".")
                print(f"🔍 Derivative used: {poly_to_string(derived)}")
                print(f"✅ Value at x = {x_str}: {val_eval_str}")
            except ValueError as e:
                print(f"❌ Error during evaluation: {e}")

        elif choice == "4":
            integral_terms = integral(terms)
            print(f"✅ Indefinite integral: {poly_to_string(integral_terms, is_integral=True)}")

        elif choice == "5":
            try:
                lower = float(input("🎯 Enter lower bound: ").strip())
                upper = float(input("🎯 Enter upper bound: ").strip())
            except ValueError:
                print("❌ Enter valid numeric bounds.")
                continue

            integral_terms = integral(terms)
            try:
                val_upper = evaluate(integral_terms, upper)
                val_lower = evaluate(integral_terms, lower)
                result = val_upper - val_lower
                result_str = str(int(round(result))) if abs(result - round(result)) < 1e-9 else f"{result:.6f}".rstrip("0").rstrip(".")
                print(f"🔍 Integral used: {poly_to_string(integral_terms)}")
                print(f"✅ Definite integral from {lower} to {upper}: {result_str}")
            except ValueError as e:
                print(f"❌ Error during evaluation: {e}")

if __name__ == "__main__":
    main()
