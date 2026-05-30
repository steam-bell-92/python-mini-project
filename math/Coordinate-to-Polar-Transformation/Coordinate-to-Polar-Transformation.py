import math

print("=" * 58)
print("🌐 CARTESIAN TO POLAR TRANSFORMATION 🌐")
print("=" * 58)
print("Convert (x, y) coordinates to polar form (r, theta).\n")

while True:
    print("=" * 58)
    print("Choose an option:")
    print("1️⃣  Convert Cartesian to Polar")
    print("2️⃣  Exit")

    choice = input("🎯 Enter your choice (1-2): ").strip()

    if choice == "2":
        print("\n👋 Thanks for using Coordinate to Polar Transformation! Goodbye! ✨\n")
        break

    if choice != "1":
        print("❌ Please choose 1 or 2.")
        continue

    try:
        x_in = input("📝 Enter x coordinate: ").strip()
        y_in = input("📝 Enter y coordinate: ").strip()
        if not x_in or not y_in:
            print("❌ Error: Input cannot be empty.")
            continue
        x = float(x_in)
        y = float(y_in)
    except ValueError:
        print("❌ Invalid input. Please enter numeric values.")
        continue

    radius = math.hypot(x, y)
    theta_rad = math.atan2(y, x)
    theta_deg = math.degrees(theta_rad)

    if theta_deg < 0:
        theta_deg += 360

    quadrant = "Origin"
    if x > 0 and y > 0:
        quadrant = "Quadrant I"
    elif x < 0 and y > 0:
        quadrant = "Quadrant II"
    elif x < 0 and y < 0:
        quadrant = "Quadrant III"
    elif x > 0 and y < 0:
        quadrant = "Quadrant IV"
    elif x == 0 and y != 0:
        quadrant = "Y-axis"
    elif y == 0 and x != 0:
        quadrant = "X-axis"

    # Inline formatting logic:
    # str(int(round(val))) if abs(val - round(val)) < 1e-9 else f"{val:.6f}".rstrip("0").rstrip(".")
    x_str = str(int(round(x))) if abs(x - round(x)) < 1e-9 else f"{x:.6f}".rstrip("0").rstrip(".")
    y_str = str(int(round(y))) if abs(y - round(y)) < 1e-9 else f"{y:.6f}".rstrip("0").rstrip(".")
    r_str = str(int(round(radius))) if abs(radius - round(radius)) < 1e-9 else f"{radius:.6f}".rstrip("0").rstrip(".")
    t_deg_str = str(int(round(theta_deg))) if abs(theta_deg - round(theta_deg)) < 1e-9 else f"{theta_deg:.6f}".rstrip("0").rstrip(".")
    t_rad_str = str(int(round(theta_rad))) if abs(theta_rad - round(theta_rad)) < 1e-9 else f"{theta_rad:.6f}".rstrip("0").rstrip(".")

    print("\n💡 Result")
    print("-" * 58)
    print(f"💠 Cartesian form: ({x_str}, {y_str})")
    print(f"💠 Polar form: r = {r_str}, theta = {t_deg_str} degrees")
    print(f"💠 Theta in radians: {t_rad_str}")
    print(f"💠 Location: {quadrant}")
    print("-" * 58)
