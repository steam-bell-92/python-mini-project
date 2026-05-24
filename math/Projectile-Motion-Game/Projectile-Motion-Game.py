import math
import sys
import time

try:
    import numpy as np
    import matplotlib.pyplot as plt
except ImportError:
    print("❌ This project requires numpy and matplotlib.")
    print("Install them using: pip install numpy matplotlib")
    sys.exit(1)


GRAVITY = 9.81


def get_float(prompt, min_value=None, max_value=None):
    while True:
        raw_value = input(prompt).strip()
        try:
            value = float(raw_value)
            if min_value is not None and value < min_value:
                print(f"⚠️ Enter a value greater than or equal to {min_value}.")
                continue
            if max_value is not None and value > max_value:
                print(f"⚠️ Enter a value less than or equal to {max_value}.")
                continue
            return value
        except ValueError:
            print("⚠️ Invalid number. Try again.")


def projectile_stats(speed, angle_deg):
    angle_rad = math.radians(angle_deg)
    flight_time = (2 * speed * math.sin(angle_rad)) / GRAVITY
    max_height = (speed ** 2 * (math.sin(angle_rad) ** 2)) / (2 * GRAVITY)
    horizontal_range = (speed ** 2 * math.sin(2 * angle_rad)) / GRAVITY
    return flight_time, max_height, horizontal_range


def trajectory_points(speed, angle_deg, point_count=350):
    flight_time, _, _ = projectile_stats(speed, angle_deg)
    if flight_time <= 0:
        return np.array([0.0]), np.array([0.0]), flight_time

    angle_rad = math.radians(angle_deg)
    t = np.linspace(0, flight_time, point_count)
    x = speed * math.cos(angle_rad) * t
    y = speed * math.sin(angle_rad) * t - 0.5 * GRAVITY * (t ** 2)
    y = np.maximum(y, 0)
    return x, y, flight_time


def show_plot(x, y):
    plt.figure(figsize=(10, 6))
    plt.plot(x, y, color="#0078D7", linewidth=2.2, label="Projectile Path")
    plt.scatter([x[-1]], [0], color="#D7263D", s=70, label="Landing Point")

    plt.title("Projectile Motion Simulator")
    plt.xlabel("Horizontal Distance (m)")
    plt.ylabel("Vertical Height (m)")
    plt.grid(alpha=0.3)
    plt.gca().set_aspect('equal', adjustable='box')
    plt.ylim(bottom=0)
    plt.xlim(left=0)
    plt.legend()
    plt.tight_layout()
    plt.show()


def run_practice_mode():
    print("\n🎯 Projectile Calculator")
    speed = get_float("Enter launch speed (m/s): ", min_value=1)
    angle = get_float("Enter launch angle (degrees 1-89): ", min_value=1, max_value=89)

    print("\n⏳ Simulating trajectory...")
    time.sleep(0.6)

    x, y, _ = trajectory_points(speed, angle)
    flight_time, max_height, horizontal_range = projectile_stats(speed, angle)

    print("\n📊 Results")
    print(f"- TOF: {flight_time:.2f} s")
    print(f"- Hmax: {max_height:.2f} m")
    print(f"- Range: {horizontal_range:.2f} m")

    show_plot(x, y)


def main():
    print("🚀 Welcome to Projectile Motion Calculator 🚀")
    print("Compute TOF, Hmax, and Range\n")

    while True:
        print("Choose an option:")
        print("1) Calculate")
        print("2) Exit")

        choice = input("Enter choice (1-2): ").strip()

        if choice == "1":
            run_practice_mode()
        elif choice == "2":
            print("👋 Exiting... See you next launch!")
            sys.exit(0)
        else:
            print("⚠️ Invalid choice. Please pick 1 or 2.\n")


if __name__ == "__main__":
    main()