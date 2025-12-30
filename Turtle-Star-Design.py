"""
Turtle Star Design
Creates an 18-pointed yellow star pattern on black background.
The overlapping lines create a beautiful flower-like geometric design.
"""

import turtle

turtle.title('Star Design')
turtle.color('yellow')
turtle.bgcolor('black')
turtle.pensize(2)

# Draw 18 lines rotated to create star pattern
for i in range(18):
    turtle.forward(200)
    turtle.right(100)

turtle.hideturtle()
turtle.exitonclick()
