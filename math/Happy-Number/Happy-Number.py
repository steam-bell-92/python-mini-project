import sys
import os
import tkinter as tk

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))
from utils.validation import get_int

def is_happy_number(n: int) -> tuple[bool, list[int]]:
    seen = set()
    sequence = []
    num = n

    while num != 1 and num not in seen:
        seen.add(num)
        sequence.append(num)
        num = sum(int(digit) ** 2 for digit in str(num))

    sequence.append(num)
    return num == 1, sequence

def run_visualizer(n: int, is_happy: bool, sequence: list[int]) -> None:
    # ---------------- TKINTER VISUALIZER ---------------- #
    try:
        root = tk.Tk()
        root.title("Happy Number Visualizer")
        root.geometry("1000x600")
        root.configure(bg="#f4f4f4")
    except Exception:
        # Tkinter not available/supported (e.g. headless CI environments)
        return

    # Frame
    frame = tk.Frame(root, bg="#f4f4f4")
    frame.pack(fill=tk.BOTH, expand=True)

    # Scrollbars
    h_scroll = tk.Scrollbar(frame, orient=tk.HORIZONTAL)
    h_scroll.pack(side=tk.BOTTOM, fill=tk.X)

    v_scroll = tk.Scrollbar(frame, orient=tk.VERTICAL)
    v_scroll.pack(side=tk.RIGHT, fill=tk.Y)

    # Canvas
    canvas = tk.Canvas(
        frame,
        bg="white",
        xscrollcommand=h_scroll.set,
        yscrollcommand=v_scroll.set,
        highlightthickness=2,
        highlightbackground="#cccccc"
    )
    canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

    h_scroll.config(command=canvas.xview)
    v_scroll.config(command=canvas.yview)

    # Mouse wheel scrolling callback
    def mouse_scroll(event):
        canvas.yview_scroll(int(-1 * (event.delta / 120)), "units")

    canvas.bind_all("<MouseWheel>", mouse_scroll)

    start_x = 100
    y = 250
    spacing = 180

    for i, value in enumerate(sequence):
        x = start_x + i * spacing
        
        # Colors
        if value == 1:
            color = "#00C853"
        elif i == len(sequence) - 1 and not is_happy:
            color = "#D50000"
        else:
            color = "#1976D2"
            
        # Circle
        canvas.create_oval(x - 45, y - 45, x + 45, y + 45, fill=color, outline="")
        
        # Number
        canvas.create_text(x, y, text=str(value), font=("Arial", 16, "bold"), fill="white")
        
        # Arrow
        if i < len(sequence) - 1:
            next_x = start_x + (i + 1) * spacing
            canvas.create_line(x + 45, y, next_x - 45, y, arrow=tk.LAST, width=3, fill="#444")

    # Result text
    result = f"{n} is a HAPPY Number 🎉" if is_happy else f"{n} is NOT a Happy Number ❌"
    canvas.create_text(
        max(500, start_x + len(sequence) * spacing // 2),
        420,
        text=result,
        font=("Arial", 22, "bold"),
        fill="#222"
    )

    # Dynamic scroll region
    canvas.config(scrollregion=canvas.bbox("all"))

    root.mainloop()

def main() -> None:
    print("=" * 50)
    print("🔢 HAPPY NUMBER CHECKER & VISUALIZER 🔢")
    print("=" * 50)
    print("A happy number eventually reaches 1 when replaced by the sum of square of its digits.\n")

    while True:
        print("=" * 50)
        n = get_int(
            prompt="➡️  Enter a number: ",
            error_empty="❌ Error: Input cannot be empty.",
            error_invalid="❌ Error: Please enter a valid positive integer."
        )
        if n <= 0:
            print("❌ Please enter a positive number!")
            continue

        is_happy, sequence = is_happy_number(n)

        if is_happy:
            print(f"\n✅ {n} is a HAPPY number!")
        else:
            print(f"\n❌ {n} is NOT a happy number!")

        print("➡️  Sequence:", " → ".join(map(str, sequence)))
        print("\n🖥️  Opening Visualizer window... Close the window to continue.")

        run_visualizer(n, is_happy, sequence)

        again = input("\n🔄 Do you want to check another number? (y/n): ").strip().lower()
        if again != 'y':
            print("\n👋 Thanks for using Happy Number Checker! Goodbye!\n")
            break

if __name__ == "__main__":
    main()