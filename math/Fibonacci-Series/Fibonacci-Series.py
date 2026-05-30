import turtle
import math

print("=" * 58)
print("🌀 FIBONACCI SERIES GENERATOR & SPIRAL 🌀")
print("=" * 58)
print("Generate Fibonacci numbers and draw a beautiful spiral using turtle graphics.\n")

# Screen initialized outside or inside loop
screen_initialized = False

while True:
    print("=" * 58)
    try:
        raw_value = input("🎯 Enter Fibonacci terms (5-12 recommended): ").strip()
        if not raw_value:
            print("❌ Error: Input cannot be empty.")
            continue
        term_count = int(raw_value)
        if term_count <= 0:
            print("❌ Please enter a positive number.")
            continue
    except ValueError:
        print("❌ Invalid input. Please enter a whole number.")
        continue

    # Calculate Fibonacci series
    if term_count == 1:
        fib = [1]
    else:
        fib = [1, 1]
        while len(fib) < term_count:
            fib.append(fib[-1] + fib[-2])

    print(f"\n📊 Fibonacci Series ({term_count} terms): {fib}")

    # Build Layout
    squares = []
    min_x, max_x = 0, 0
    min_y, max_y = 0, 0
    cx, cy = 0, 0
    
    prev_x, prev_y, prev_size = 0, 0, 0
    prev_max_x, prev_max_y = 0, 0

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

    scale = min((1300 - padding * 2) / total_w, (850 - padding * 2) / total_h)

    offset_x = -(min_x + total_w / 2) * scale
    offset_y = -(min_y + total_h / 2) * scale

    # Initialize or reset Turtle Graphics
    if not screen_initialized:
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
    else:
        grid.clear()
        spiral.clear()

    # Draw grid
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
                grid.forward(min(3, grid_size - total_drawn))
                grid.penup()
                grid.forward(min(2, grid_size - (total_drawn + 3)))
                grid.pendown()
                total_drawn += 5
            grid.left(90)
        grid.penup()

    # Draw spiral
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
    screen.update()
    
    print("\n🖥️  Drawing completed in Turtle window.")

    again = input("\n🔄 Do you want to generate another Fibonacci spiral? (y/n): ").strip().lower()
    if again != 'y':
        print("\n👋 Thanks for using Fibonacci Generator! Goodbye!\n")
        try:
            screen.bye()
        except:
            pass
        break