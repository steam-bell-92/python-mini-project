import sys
import os
import turtle
import math

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))
from utils.validation import get_int

def generate_fibonacci(term_count: int) -> list[int]:
    """Calculate Fibonacci series."""
    if term_count <= 0:
        return []
    if term_count == 1:
        return [1]
    fib = [1, 1]
    while len(fib) < term_count:
        fib.append(fib[-1] + fib[-2])
    return fib

def calculate_spiral_layout(fib: list[int]) -> tuple[list[tuple[float, float, float, int]], float, float, float, float]:
    """Build spatial layout of Fibonacci squares."""
    squares = []
    min_x, max_x = 0.0, 0.0
    min_y, max_y = 0.0, 0.0
    cx, cy = 0.0, 0.0
    
    prev_x, prev_y, prev_size = 0.0, 0.0, 0.0
    prev_max_x, prev_max_y = 0.0, 0.0

    for i in range(len(fib)):
        size = fib[i]
        direction = i % 4

        if i == 0:
            x, y = cx, cy
            max_x = max(max_x, x + size)
            max_y = max(max_y, y + size)
        else:
            if direction == 0:
                x = prev_max_x
                y = prev_y + prev_size - size
                max_x = max(max_x, x + size)
            elif direction == 1:
                x = prev_x
                y = prev_max_y
                max_y = max(max_y, y + size)
            elif direction == 2:
                x = prev_x - size
                y = prev_y
                min_x = min(min_x, x)
            else:
                x = prev_x + prev_size - size
                y = prev_y - size
                min_y = min(min_y, y)

        squares.append((x, y, size, direction))
        prev_x, prev_y, prev_size = x, y, size
        prev_max_x, prev_max_y = x + size, y + size

    total_w = max_x - min_x
    total_h = max_y - min_y
    padding = 60

    scale = min((1300 - padding * 2) / total_w if total_w > 0 else 1.0, (850 - padding * 2) / total_h if total_h > 0 else 1.0)

    offset_x = -(min_x + total_w / 2) * scale
    offset_y = -(min_y + total_h / 2) * scale
    
    return squares, scale, offset_x, offset_y

def main() -> None:
    print("=" * 58)
    print("🌀 FIBONACCI SERIES GENERATOR & SPIRAL 🌀")
    print("=" * 58)
    print("Generate Fibonacci numbers and draw a beautiful spiral using turtle graphics.\n")

    screen_initialized = False
    grid = None
    spiral = None
    screen = None

    while True:
        print("=" * 58)
        term_count = get_int(
            prompt="🎯 Enter Fibonacci terms (5-12 recommended): ",
            min_value=1,
            error_empty="❌ Error: Input cannot be empty.",
            error_invalid="❌ Invalid input. Please enter a whole number."
        )

        fib = generate_fibonacci(term_count)
        print(f"\n📊 Fibonacci Series ({term_count} terms): {fib}")

        squares, scale, offset_x, offset_y = calculate_spiral_layout(fib)

        # Initialize or reset Turtle Graphics
        if not screen_initialized:
            try:
                screen = turtle.Screen()
                screen.setup(1400, 900)
                screen.bgcolor("black")
                screen.title("Perfect Fibonacci Spiral")
                screen.tracer(0)
                
                grid = turtle.Turtle()
                grid.speed(0)
                grid.hideturtle()

                spiral = turtle.Turtle()
                spiral.speed(0)
                spiral.hideturtle()
                
                screen_initialized = True
            except Exception:
                # If turtle is not supported (e.g. headless CI environments)
                screen_initialized = False
        else:
            if grid is not None:
                grid.clear()
            if spiral is not None:
                spiral.clear()

        # Draw grid
        if screen_initialized and grid is not None:
            for sq in squares:
                x, y, size, _ = sq
                sx = x * scale + offset_x
                sy = y * scale + offset_y
                grid_size = size * scale

                grid.penup()
                grid.goto(sx, sy)
                grid.setheading(0)
                grid.pencolor("#374151")
                grid.pensize(1)
                grid.pendown()
                
                for _ in range(4):
                    total_drawn = 0
                    while total_drawn < grid_size:
                        grid.forward(min(3.0, grid_size - total_drawn))
                        grid.penup()
                        grid.forward(min(2.0, grid_size - (total_drawn + 3)))
                        grid.pendown()
                        total_drawn += 5
                    grid.left(90)
                grid.penup()

        # Draw spiral
        if screen_initialized and spiral is not None:
            spiral.pencolor("#2563eb")
            spiral.pensize(3)
            spiral.penup()

            for i, square in enumerate(squares):
                x, y, size, direction = square
                scaled_size = size * scale

                if direction == 0:
                    start_x, start_y = x, y
                    start_heading = 0
                elif direction == 1:
                    start_x, start_y = x + size, y
                    start_heading = 90
                elif direction == 2:
                    start_x, start_y = x + size, y + size
                    start_heading = 180
                else:
                    start_x, start_y = x, y + size
                    start_heading = 270

                sx = start_x * scale + offset_x
                sy = start_y * scale + offset_y

                if i == 0:
                    spiral.goto(sx, sy)

                spiral.setheading(start_heading)
                spiral.pendown()
                spiral.circle(scaled_size, 90)
                
            spiral.penup()
            if screen is not None:
                screen.update()
            print("\n🖥️  Drawing completed in Turtle window.")
            
        again = input("\n🔄 Do you want to generate another Fibonacci spiral? (y/n): ").strip().lower()
        if again != 'y':
            print("\n👋 Thanks for using Fibonacci Generator! Goodbye!\n")
            if screen_initialized and screen is not None:
                try:
                    screen.bye()
                except turtle.Terminator:
                    pass  # Expected termination when window is closed
                except Exception as e:
                    print(f"⚠️ Error closing turtle screen: {e}")
            break

if __name__ == "__main__":
    main()