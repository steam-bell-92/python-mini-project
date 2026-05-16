import time
import turtle


def build_fibonacci_series(term_count):
    if term_count <= 0:
        return []

    series = [0]

    if term_count == 1:
        return series

    series.append(1)

    while len(series) < term_count:
        series.append(series[-1] + series[-2])

    return series


def draw_dotted_arc(pen, screen, radius, extent, dot_color, dot_size=7, step_degrees=3, join_delay=0.008):
    steps = max(1, int(abs(extent) / step_degrees))
    arc_step = extent / steps

    for _ in range(steps):
        pen.dot(dot_size, dot_color)
        pen.circle(radius, arc_step)
        screen.update()
        time.sleep(join_delay)


def show_fibonacci_curve(series):
   
    curve_terms = series[1:13] if len(series) > 13 else series[1:]
    if not curve_terms:
        curve_terms = [0]

    positive_values = [value for value in curve_terms if value > 0]
    max_value = max(positive_values, default=1)
    
    scale = max(6, min(20, 200 // max_value if max_value else 6))

    screen_height = 720
    screen = turtle.Screen()
    screen.title("Fibonacci Curve")
    screen.bgcolor("white")
    screen.setup(width=900, height=screen_height)
    screen.tracer(0)

    pen = turtle.Turtle()
    pen.hideturtle()
    pen.speed(0)
    pen.penup()
    pen.pensize(1)

    title_y = screen_height // 2 - 40
    pen.goto(0, title_y)
    pen.color("#111827")
    pen.write("Fibonacci Curve", align="center", font=("Arial", 18, "bold"))

    pen.goto(0, title_y - 28)
    pen.color("#374151")
    pen.write("Drawing... (click to close when finished)", align="center", font=("Arial", 10, "normal"))

    start_x = -120
    start_y = -120
    colors = ["#0ea5e9", "#10b981", "#f59e0b", "#f97316", "#8b5cf6"]

    pen.goto(start_x, start_y)
    pen.setheading(0)

    for index, value in enumerate(curve_terms):
        radius = max(10, value * scale) if value > 0 else 10
        color = colors[index % len(colors)]
        pen.pencolor(color)
        draw_dotted_arc(pen, screen, radius, 90, color, dot_size=6, step_degrees=4, join_delay=0.004)
        pen.left(90)

    pen.penup()
    pen.goto(0, start_y - 30)
    pen.color("#111827")
    pen.write("Done — click anywhere to close", align="center", font=("Arial", 10, "normal"))

    screen.update()
    screen.exitonclick()


def main():
    print("🔢 Fibonacci Series Generator 🔢")
    print("📐 Pattern: 0, 1, 1, 2, 3, 5, 8, 13...\n")

    while True:
        try:
            term_count = int(input("➡️  Enter number of terms: "))
            if term_count <= 0:
                print("❌ Please enter a positive whole number.\n")
                continue
            break
        except ValueError:
            print("❌ Invalid input! Please enter a whole number.\n")

    series = build_fibonacci_series(term_count)

    print("\n✨ Fibonacci Series:")
    print(" → ".join(map(str, series)))
    print(f"\n📊 Sum of {len(series)} terms: {sum(series)}")

    try:
        show_fibonacci_curve(series)
    except turtle.Terminator:
        print("\n⚠️ Turtle window was closed before drawing finished.")
    except Exception as error:
        print(f"\n⚠️ Graphical view could not be displayed: {error}")


if __name__ == "__main__":
    main()