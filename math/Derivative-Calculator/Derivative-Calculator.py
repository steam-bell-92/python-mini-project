print("=" * 58)
print("📈 POLYNOMIAL DERIVATIVE CALCULATOR 📈")
print("=" * 58)
print("Enter coefficients from highest power to constant.")
print("Example: for 3x^3 - 2x + 7, enter: 3,0,-2,7\n")

while True:
    print("=" * 58)
    print("Choose an option:")
    print("1️⃣  Find 1st derivative")
    print("2️⃣  Find nth derivative")
    print("3️⃣  Evaluate derivative at x")
    print("4️⃣  Exit")

    choice = input("🎯 Enter your choice (1-4): ").strip()

    if choice == "4":
        print("\n👋 Thanks for using Derivative Calculator! Goodbye! ✨\n")
        break

    if choice not in {"1", "2", "3"}:
        print("❌ Please choose between 1 and 4.")
        continue

    raw = input("\n📝 Enter coefficients (highest power to constant): ").strip()
    if not raw:
        print("❌ Error: Input cannot be empty.")
        continue

    # Parse coefficients
    parts = [item.strip() for item in raw.split(",") if item.strip()]
    if len(parts) == 0:
        print("❌ Please enter at least one coefficient.")
        continue

    coeffs = []
    parse_error = False
    for part in parts:
        try:
            coeffs.append(float(part))
        except ValueError:
            print(f"❌ Invalid coefficient: {part}")
            parse_error = True
            break

    if parse_error:
        continue

    # Clean leading zeros
    while len(coeffs) > 1 and abs(coeffs[0]) < 1e-12:
        coeffs.pop(0)

    # Helper function substitute: format polynomial to string
    # We will build polynomial string for coeffs here
    poly_str = ""
    deg = len(coeffs) - 1
    terms = []
    for i, coeff in enumerate(coeffs):
        power = deg - i
        if abs(coeff) < 1e-12:
            continue
        sign = "+" if coeff >= 0 else "-"
        abs_coeff = abs(coeff)
        
        # Format coefficient value
        coeff_val_str = str(int(round(abs_coeff))) if abs(abs_coeff - round(abs_coeff)) < 1e-9 else f"{abs_coeff:.6f}".rstrip("0").rstrip(".")
        
        if power == 0:
            body = coeff_val_str
        elif power == 1:
            if abs(abs_coeff - 1.0) < 1e-12:
                body = "x"
            else:
                body = f"{coeff_val_str}x"
        else:
            if abs(abs_coeff - 1.0) < 1e-12:
                body = f"x^{power}"
            else:
                body = f"{coeff_val_str}x^{power}"
        terms.append((sign, body))
        
    if not terms:
        poly_str = "0"
    else:
        first_sign, first_body = terms[0]
        poly_str = first_body if first_sign == "+" else f"-{first_body}"
        for sign, body in terms[1:]:
            poly_str += f" {sign} {body}"

    print(f"\n✨ Polynomial: {poly_str}")

    if choice == "1":
        # Calculate 1st derivative
        derived = []
        degree = len(coeffs) - 1
        if degree <= 0:
            derived = [0.0]
        else:
            for idx, coeff in enumerate(coeffs[:-1]):
                power = degree - idx
                derived.append(coeff * power)
                
        # Format derived to string
        derived_str = ""
        d_deg = len(derived) - 1
        d_terms = []
        for idx, coeff in enumerate(derived):
            power = d_deg - idx
            if abs(coeff) < 1e-12:
                continue
            sign = "+" if coeff >= 0 else "-"
            abs_coeff = abs(coeff)
            
            coeff_val_str = str(int(round(abs_coeff))) if abs(abs_coeff - round(abs_coeff)) < 1e-9 else f"{abs_coeff:.6f}".rstrip("0").rstrip(".")
            
            if power == 0:
                body = coeff_val_str
            elif power == 1:
                if abs(abs_coeff - 1.0) < 1e-12:
                    body = "x"
                else:
                    body = f"{coeff_val_str}x"
            else:
                if abs(abs_coeff - 1.0) < 1e-12:
                    body = f"x^{power}"
                else:
                    body = f"{coeff_val_str}x^{power}"
            d_terms.append((sign, body))
            
        if not d_terms:
            derived_str = "0"
        else:
            first_sign, first_body = d_terms[0]
            derived_str = first_body if first_sign == "+" else f"-{first_body}"
            for sign, body in d_terms[1:]:
                derived_str += f" {sign} {body}"
                
        print(f"✅ First derivative: {derived_str}")

    elif choice == "2":
        try:
            n_order = int(input("🎯 Enter derivative order n (>= 1): ").strip())
            if n_order < 1:
                raise ValueError
        except ValueError:
            print("❌ n must be an integer >= 1.")
            continue

        # Calculate nth derivative
        derived = coeffs[:]
        for _ in range(n_order):
            degree = len(derived) - 1
            if degree <= 0:
                derived = [0.0]
                break
            new_derived = []
            for idx, coeff in enumerate(derived[:-1]):
                power = degree - idx
                new_derived.append(coeff * power)
            derived = new_derived
            if len(derived) == 1 and abs(derived[0]) < 1e-12:
                derived = [0.0]
                break

        # Format derived to string
        derived_str = ""
        d_deg = len(derived) - 1
        d_terms = []
        for idx, coeff in enumerate(derived):
            power = d_deg - idx
            if abs(coeff) < 1e-12:
                continue
            sign = "+" if coeff >= 0 else "-"
            abs_coeff = abs(coeff)
            
            coeff_val_str = str(int(round(abs_coeff))) if abs(abs_coeff - round(abs_coeff)) < 1e-9 else f"{abs_coeff:.6f}".rstrip("0").rstrip(".")
            
            if power == 0:
                body = coeff_val_str
            elif power == 1:
                if abs(abs_coeff - 1.0) < 1e-12:
                    body = "x"
                else:
                    body = f"{coeff_val_str}x"
            else:
                if abs(abs_coeff - 1.0) < 1e-12:
                    body = f"x^{power}"
                else:
                    body = f"{coeff_val_str}x^{power}"
            d_terms.append((sign, body))
            
        if not d_terms:
            derived_str = "0"
        else:
            first_sign, first_body = d_terms[0]
            derived_str = first_body if first_sign == "+" else f"-{first_body}"
            for sign, body in d_terms[1:]:
                derived_str += f" {sign} {body}"

        print(f"✅ {n_order}th derivative: {derived_str}")

    elif choice == "3":
        try:
            x_val = float(input("🎯 Enter x value: ").strip())
            order = int(input("🎯 Derivative order to evaluate (>= 1): ").strip())
            if order < 1:
                raise ValueError
        except ValueError:
            print("❌ Enter valid numeric x and integer order >= 1.")
            continue

        # Calculate nth derivative
        derived = coeffs[:]
        for _ in range(order):
            degree = len(derived) - 1
            if degree <= 0:
                derived = [0.0]
                break
            new_derived = []
            for idx, coeff in enumerate(derived[:-1]):
                power = degree - idx
                new_derived.append(coeff * power)
            derived = new_derived
            if len(derived) == 1 and abs(derived[0]) < 1e-12:
                derived = [0.0]
                break

        # Evaluate polynomial at x using Horner's method
        val_eval = 0.0
        for coeff in derived:
            val_eval = val_eval * x_val + coeff

        # Format derived to string
        derived_str = ""
        d_deg = len(derived) - 1
        d_terms = []
        for idx, coeff in enumerate(derived):
            power = d_deg - idx
            if abs(coeff) < 1e-12:
                continue
            sign = "+" if coeff >= 0 else "-"
            abs_coeff = abs(coeff)
            
            coeff_val_str = str(int(round(abs_coeff))) if abs(abs_coeff - round(abs_coeff)) < 1e-9 else f"{abs_coeff:.6f}".rstrip("0").rstrip(".")
            
            if power == 0:
                body = coeff_val_str
            elif power == 1:
                if abs(abs_coeff - 1.0) < 1e-12:
                    body = "x"
                else:
                    body = f"{coeff_val_str}x"
            else:
                if abs(abs_coeff - 1.0) < 1e-12:
                    body = f"x^{power}"
                else:
                    body = f"{coeff_val_str}x^{power}"
            d_terms.append((sign, body))
            
        if not d_terms:
            derived_str = "0"
        else:
            first_sign, first_body = d_terms[0]
            derived_str = first_body if first_sign == "+" else f"-{first_body}"
            for sign, body in d_terms[1:]:
                derived_str += f" {sign} {body}"

        x_str = str(int(round(x_val))) if abs(x_val - round(x_val)) < 1e-9 else f"{x_val:.6f}".rstrip("0").rstrip(".")
        val_eval_str = str(int(round(val_eval))) if abs(val_eval - round(val_eval)) < 1e-9 else f"{val_eval:.6f}".rstrip("0").rstrip(".")

        print(f"🔍 Derivative used: {derived_str}")
        print(f"✅ Value at x = {x_str}: {val_eval_str}")
