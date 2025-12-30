"""
Turtle Rainbow Mandala
Creates a stunning mandala with 10 petals made of concentric rainbow circles.
Each petal consists of circles with gradually increasing radii (49-106 pixels).
"""

import turtle as t

t.title('Rainbow Mandala')
t.speed(0)
t.bgcolor('black')

# VIBGYOR color array for rainbow effect
colour = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']

# Create 10 petals (360 degrees / 10 = 36 degrees each)
for _ in range(10):
    # Draw concentric circles with increasing radii for each petal
    for i in range(49, 106):
        t.color(colour[i % 7])  # Cycle through rainbow colors
        t.circle(i)
    t.left(36)  # Rotate to next petal position

t.hideturtle()
t.exitonclick()
