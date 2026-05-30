import math
import sys
import time

try:
    import numpy as np
    import matplotlib.pyplot as plt
    from matplotlib.animation import FuncAnimation
except ImportError:
    print("❌ This project requires numpy and matplotlib.")
    print("Install them using: pip install numpy matplotlib")
    sys.exit(1)

GRAVITY = 9.81

print("=" * 58)
print("🚀 WELCOME TO PROJECTILE MOTION CALCULATOR 🚀")
print("=" * 58)
print("Compute Time of Flight (TOF), Max Height (Hmax), and Range with animation.\n")

while True:
    print("=" * 58)
    print("Choose an option:")
    print("1️⃣  Calculate Projectile Motion")
    print("2️⃣  Exit")

    choice = input("🎯 Enter choice (1-2): ").strip()

    if choice == "2":
        print("\n👋 Exiting... See you next launch!\n")
        break

    if choice != "1":
        print("❌ Invalid choice. Please pick 1 or 2.\n")
        continue

    # Get Speed with validation
    while True:
        speed_in = input("📝 Enter launch speed (m/s) (>= 1): ").strip()
        try:
            speed = float(speed_in)
            if speed < 1:
                print("⚠️ Enter a value greater than or equal to 1.")
                continue
            break
        except ValueError:
            print("⚠️ Invalid number. Try again.")

    # Get Angle with validation
    while True:
        angle_in = input("📝 Enter launch angle (degrees 1-89): ").strip()
        try:
            angle = float(angle_in)
            if angle < 1:
                print("⚠️ Enter a value greater than or equal to 1.")
                continue
            if angle > 89:
                print("⚠️ Enter a value less than or equal to 89.")
                continue
            break
        except ValueError:
            print("⚠️ Invalid number. Try again.")

    print("\n⏳ Simulating trajectory...")
    time.sleep(0.6)

    # Compute Stats
    angle_rad = math.radians(angle)
    flight_time = (2 * speed * math.sin(angle_rad)) / GRAVITY
    max_height = (speed ** 2 * (math.sin(angle_rad) ** 2)) / (2 * GRAVITY)
    horizontal_range = (speed ** 2 * math.sin(2 * angle_rad)) / GRAVITY

    print("\n📊 Results")
    print(f"💠 Time of Flight (TOF) : {flight_time:.2f} s")
    print(f"💠 Max Height (Hmax)    : {max_height:.2f} m")
    print(f"💠 Horizontal Range     : {horizontal_range:.2f} m")

    # Generate Trajectory Points
    if flight_time > 0:
        t = np.linspace(0, flight_time, 350)
        x = speed * np.cos(angle_rad) * t
        y = speed * np.sin(angle_rad) * t - (0.5 * GRAVITY * t ** 2)
        y = np.maximum(y, 0)
    else:
        x = np.array([0.0])
        y = np.array([0.0])

    print("\n🖥️  Opening animation window... Close it to return to menu.")

    # Show Plot with Animation (procedural)
    fig, ax = plt.subplots()
    max_limit = max(max(x), max(y)) * 1.1
    ax.set_xlim(0, max_limit)
    ax.set_ylim(0, max_limit)

    ax.set_title("Projectile Motion Simulator")
    ax.set_xlabel("Horizontal Distance (m)")
    ax.set_ylabel("Vertical Height (m)")
    ax.grid()
    
    line, = ax.plot([], [], color="#0078D7", linewidth=2.2, label="Projectile Path")
    point, = ax.plot([], [], 'ro')

    # Lambda function for animation updates to avoid using def
    update_ani = lambda frame: (
        line.set_data(x[:frame], y[:frame]),
        point.set_data([x[frame-1] if frame > 0 else x[0]], [y[frame-1] if frame > 0 else y[0]]),
        (line, point)
    )

    ani = FuncAnimation(fig, update_ani, frames=len(x), interval=16, repeat=False)
    plt.show()