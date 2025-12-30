"""
Turtle Rainbow Spiral
Creates a mesmerizing spiral pattern using rainbow colors.
Draws 72 overlapping circles, each rotated 5 degrees, cycling through VIBGYOR colors.
"""

import turtle as t

t.title('Rainbow Spiral')
t.speed(0)
t.pensize(2)
t.bgcolor('black')

# VIBGYOR color array for rainbow effect
colours = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']

# Draw 72 circles with 5-degree rotation between each
for i in range(72):
    t.color(colours[i % 7])  # Cycle through colors
    t.circle(150)
    t.left(5)

t.hideturtle()
t.exitonclick()