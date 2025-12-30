#! /usr/bin/env python3
"""
Turtle Mandala Design
Creates a beautiful geometric mandala with layered stars and circles.
Features three nested stars in different colors with circular accents.
"""

##  sudo apt install python3-tk

import turtle as t
##  begins facing right

t.title( 'Turtle soup' )
w, h = 650, 650
t.setup( width=w, height=h )

t.bgcolor('black')
t.speed('fastest')

##  crosshairs, to center image
##  remove triple-quotes to render
'''
t.pensize(1)
t.pencolor('red')
t.penup()
t.setx(-w/2)
t.pendown()
t.setx(w/2)
t.penup()
t.setpos(0,-h/2)
t.pendown()
t.sety(h/2)
t.home()
'''

##  circles
t.pensize(2)
t.pencolor('aqua')
t.penup()
t.sety(18)
t.forward(150)
t.right(43)
t.forward(150)
t.left(115.15)
t.circle(272,18)
t.pendown()
t.circle(20,360)

for i in range(9):
    t.penup()
    t.circle(272,36)
    t.pendown()
    t.circle(20,360)

t.penup()
t.home()
t.left(7)
t.pendown()

##  stars
for i in range(10):
    t.pensize(1)
    t.pencolor('white')
    for j in range(2):
        t.forward(165)
        t.right(50)
        t.forward(165)
        t.right(130)
    t.left(36)

for i in range(10):
    t.pensize(2)
    t.pencolor('blue')
    for j in range(2):
        t.forward(115)
        t.right(50)
        t.forward(115)
        t.right(130)
    t.left(36)

for i in range(10):
    t.pencolor('aqua')
    for j in range(2):
        t.forward(50)
        t.right(50)
        t.forward(50)
        t.right(130)
    t.left(36)

t.hideturtle()
t.exitonclick()
