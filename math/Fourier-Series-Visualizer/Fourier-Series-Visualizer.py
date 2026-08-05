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


def main():
    print("=" * 58)
    print("📈 WELCOME TO FOURIER SERIES VISUALIZER 📈")
    print("=" * 58)
    print("Explore how complex waveforms can be approximated using harmonics.\n")

    while True:
        print("=" * 58)
        print("Choose a waveform type:")
        print("1️⃣  Square Wave")
        print("2️⃣  Sawtooth Wave")
        print("3️⃣  Triangle Wave")
        print("4️⃣  Exit")

        choice = input("🎯 Enter choice (1-4): ").strip()

        if choice == "4":
            print("\n👋 Exiting... Keep exploring math!\n")
            break

        if choice not in ["1", "2", "3"]:
            print("❌ Invalid choice. Please pick 1, 2, 3, or 4.\n")
            continue

        waveform_type = {"1": "square", "2": "sawtooth", "3": "triangle"}[choice]

        # Get number of harmonics
        while True:
            harmonics_in = input("📝 Enter number of harmonics (N) (1-50): ").strip()
            try:
                n_harmonics = int(harmonics_in)
                if n_harmonics < 1:
                    print("⚠️ Enter a value greater than or equal to 1.")
                    continue
                if n_harmonics > 50:
                    print("⚠️ For performance, keep harmonics up to 50.")
                    continue
                break
            except ValueError:
                print("⚠️ Invalid number. Try again.")

        print(f"\n⏳ Simulating {waveform_type} wave with {n_harmonics} harmonics...")
        time.sleep(0.6)

        print("\n🖥️  Opening animation window... Close it to return to menu.")

        # Setup figure
        fig, ax = plt.subplots(figsize=(10, 5))
        ax.set_title(f"Fourier Series Approximation: {waveform_type.capitalize()} Wave (N={n_harmonics})")
        
        # We'll draw circles on the left and the wave on the right
        ax.set_xlim(-3, 10)
        ax.set_ylim(-3, 3)
        ax.set_aspect('equal', adjustable='box')
        ax.grid(True, linestyle='--', alpha=0.5)

        # Plot elements
        wave_line, = ax.plot([], [], color="#10b981", linewidth=2, label="Approximated Wave")
        connect_line, = ax.plot([], [], color="gray", linestyle="--", alpha=0.5)
        drawing_point, = ax.plot([], [], 'ro', markersize=4)
        
        circles = []
        radii_lines = []
        for _ in range(n_harmonics):
            circle, = ax.plot([], [], color="blue", alpha=0.2)
            circles.append(circle)
            radius_line, = ax.plot([], [], color="blue", alpha=0.5)
            radii_lines.append(radius_line)

        time_val = 0
        wave_data = []

        def update(frame):
            nonlocal time_val, wave_data
            
            x = 0
            y = 0
            
            for i in range(n_harmonics):
                prev_x = x
                prev_y = y
                
                n = 0
                radius = 0
                
                if waveform_type == 'square':
                    n = i * 2 + 1
                    radius = (4 / (n * math.pi))
                elif waveform_type == 'sawtooth':
                    n = i + 1
                    radius = (2 * (-1)**(n + 1) / (n * math.pi))
                elif waveform_type == 'triangle':
                    n = i * 2 + 1
                    radius = (8 * (-1)**((n - 1) / 2) / ((n**2) * (math.pi**2)))
                
                x += radius * math.cos(n * time_val)
                y += radius * math.sin(n * time_val)
                
                # Draw circle
                circle_theta = np.linspace(0, 2*np.pi, 50)
                circles[i].set_data(prev_x + abs(radius)*np.cos(circle_theta), 
                                  prev_y + abs(radius)*np.sin(circle_theta))
                
                # Draw radius line
                radii_lines[i].set_data([prev_x, x], [prev_y, y])

            wave_data.insert(0, y)
            if len(wave_data) > 300:
                wave_data.pop()
                
            wave_x = np.linspace(3, 3 + len(wave_data) * 0.03, len(wave_data))
            wave_line.set_data(wave_x, wave_data)
            
            connect_line.set_data([x, 3], [y, wave_data[0]])
            drawing_point.set_data([x], [y])
            
            time_val = (time_val + 0.03) % (2 * math.pi)
            
            # Matplotlib requires returning an iterable of updated artists
            return [wave_line, connect_line, drawing_point] + circles + radii_lines

        ani = FuncAnimation(fig, update, frames=400, interval=20, blit=True)
        plt.show()

if __name__ == "__main__":
    main()
