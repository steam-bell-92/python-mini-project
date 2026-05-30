import math

print("=" * 58)
print("📊 AP / GP / AGP / HP RECOGNIZER 📊")
print("=" * 58)
print("Enter at least 4 numbers separated by commas to recognize the progression.")
print("Example: 2, 4, 6, 8 or 3, 6, 12, 24\n")

EPS = 1e-9

while True:
    print("=" * 58)
    print("Choose an option:")
    print("1️⃣  Recognize sequence type")
    print("2️⃣  Exit")

    choice = input("🎯 Enter your choice (1-2): ").strip()

    if choice == "2":
        print("\n👋 Thanks for using the recognizer. Keep practicing! ✨\n")
        break

    if choice != "1":
        print("❌ Please choose 1 or 2.")
        continue

    user_input = input("\n📝 Enter sequence values separated by commas: ").strip()
    if not user_input:
        print("❌ Error: Input cannot be empty.")
        continue

    # Parse sequence
    parts = [item.strip() for item in user_input.split(",") if item.strip()]
    if len(parts) < 4:
        print("❌ Please enter at least 4 values.")
        continue

    sequence = []
    parse_error = False
    for part in parts:
        try:
            sequence.append(float(part))
        except ValueError:
            print(f"❌ Invalid number: {part}")
            parse_error = True
            break

    if parse_error:
        continue

    matched_types = []

    # 1. Check AP (Arithmetic Progression)
    is_ap = True
    ap_diff = sequence[1] - sequence[0]
    for i in range(2, len(sequence)):
        if abs((sequence[i] - sequence[i - 1]) - ap_diff) > EPS:
            is_ap = False
            break

    if is_ap:
        # Format helper
        val = ap_diff
        ap_diff_str = str(int(round(val))) if abs(val - round(val)) < 1e-9 else f"{val:.6g}"
        matched_types.append(f"AP (common difference d = {ap_diff_str})")

    # 2. Check GP (Geometric Progression)
    is_gp = True
    gp_ratio = 0.0
    if all(abs(x) <= EPS for x in sequence):
        gp_ratio = 0.0
    elif any(abs(sequence[i - 1]) <= EPS for i in range(1, len(sequence))):
        is_gp = False
    else:
        gp_ratio = sequence[1] / sequence[0]
        for i in range(2, len(sequence)):
            if abs((sequence[i] / sequence[i - 1]) - gp_ratio) > EPS:
                is_gp = False
                break

    if is_gp:
        val = gp_ratio
        gp_ratio_str = str(int(round(val))) if abs(val - round(val)) < 1e-9 else f"{val:.6g}"
        matched_types.append(f"GP (common ratio r = {gp_ratio_str})")

    # 3. Check HP (Harmonic Progression)
    is_hp = True
    hp_diff = 0.0
    if any(abs(x) <= EPS for x in sequence):
        is_hp = False
    else:
        reciprocal = [1.0 / x for x in sequence]
        hp_diff = reciprocal[1] - reciprocal[0]
        for i in range(2, len(reciprocal)):
            if abs((reciprocal[i] - reciprocal[i - 1]) - hp_diff) > EPS:
                is_hp = False
                break

    if is_hp:
        val = hp_diff
        hp_diff_str = str(int(round(val))) if abs(val - round(val)) < 1e-9 else f"{val:.6g}"
        matched_types.append(f"HP (reciprocal AP difference = {hp_diff_str})")

    # 4. Check AGP (Arithmetico-Geometric Progression)
    is_agp = False
    agp_ratio = 0.0
    
    # Generate AGP ratio candidates
    s0, s1, s2 = sequence[0], sequence[1], sequence[2]
    candidates = []
    if abs(s0) <= EPS:
        if abs(s1) > EPS:
            candidates.append(s2 / (2 * s1))
    else:
        a = s0
        b = -2 * s1
        c = s2
        disc = b * b - 4 * a * c
        if disc >= -EPS:
            if abs(disc) <= EPS:
                candidates.append(-b / (2 * a))
            else:
                sqrt_disc = math.sqrt(disc)
                candidates.append((-b + sqrt_disc) / (2 * a))
                candidates.append((-b - sqrt_disc) / (2 * a))

    for r in candidates:
        if abs(r) <= EPS:
            # If common ratio r = 0, all terms from index 1 onwards must be 0
            if all(abs(x) <= EPS for x in sequence[1:]):
                is_agp = True
                agp_ratio = r
                break
            continue

        valid = True
        for i in range(2, len(sequence)):
            expected = 2 * r * sequence[i - 1] - (r * r) * sequence[i - 2]
            if abs(sequence[i] - expected) > 1e-7:
                valid = False
                break
        if valid:
            is_agp = True
            agp_ratio = r
            break

    if is_agp:
        val = agp_ratio
        agp_ratio_str = str(int(round(val))) if abs(val - round(val)) < 1e-9 else f"{val:.6g}"
        matched_types.append(f"AGP (repetition ratio r = {agp_ratio_str})")

    # Display Results
    print("\n💡 Result")
    print("-" * 58)
    formatted_seq = []
    for x in sequence:
        f_str = str(int(round(x))) if abs(x - round(x)) < 1e-9 else f"{x:.6g}"
        formatted_seq.append(f_str)
    print("Sequence:", ", ".join(formatted_seq))

    if matched_types:
        print("✅ Recognized as:")
        for seq_type in matched_types:
            print("  -", seq_type)
    else:
        print("❌ Not AP, GP, AGP, or HP for the given values.")

    print("-" * 58)
