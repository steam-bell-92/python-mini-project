import turtle
import random
import time

screen = turtle.Screen()
screen.title("Snake")
screen.bgcolor("black")
screen.setup(700, 700)
screen.tracer(0)

box = turtle.Turtle()
box.hideturtle()
box.color("white")
box.pensize(3)
box.penup()
box.goto(-300, 300)
box.pendown()

for _ in range(4):
    box.forward(600)
    box.right(90)

head = turtle.Turtle()
head.shape("square")
head.color("green")
head.penup()
head.direction = "stop"

food = turtle.Turtle()
food.shape("circle")
food.color("red")
food.penup()
food.goto(0, 100)

parts = []

score = 0

score_text = turtle.Turtle()
score_text.hideturtle()
score_text.color("white")
score_text.penup()
score_text.goto(0, 320)
score_text.write("Score: 0", align="center", font=("Arial", 18, "normal"))


def move_up():
    if head.direction != "down":
        head.direction = "up"


def move_down():
    if head.direction != "up":
        head.direction = "down"


def move_left():
    if head.direction != "right":
        head.direction = "left"


def move_right():
    if head.direction != "left":
        head.direction = "right"


screen.listen()
screen.onkeypress(move_up, "Up")
screen.onkeypress(move_down, "Down")
screen.onkeypress(move_left, "Left")
screen.onkeypress(move_right, "Right")


def move():
    if head.direction == "up":
        head.sety(head.ycor() + 20)

    if head.direction == "down":
        head.sety(head.ycor() - 20)

    if head.direction == "left":
        head.setx(head.xcor() - 20)

    if head.direction == "right":
        head.setx(head.xcor() + 20)


while True:
    screen.update()

    if (
        head.xcor() > 280 or
        head.xcor() < -280 or
        head.ycor() > 280 or
        head.ycor() < -280
    ):
        time.sleep(1)

        head.goto(0, 0)
        head.direction = "stop"

        for p in parts:
            p.goto(1000, 1000)

        parts.clear()

        score = 0

        score_text.clear()
        score_text.write(
            f"Score: {score}",
            align="center",
            font=("Arial", 18, "normal")
        )

    if head.distance(food) < 15:
        while True:
            x = random.randint(-14, 14) * 20
            y = random.randint(-14, 14) * 20
            overlaps = False
            if head.distance(x, y) < 15:
                overlaps = True
            for p in parts:
                if p.distance(x, y) < 15:
                    overlaps = True
                    break
            if not overlaps:
                break

        food.goto(x, y)

        new_part = turtle.Turtle()
        new_part.shape("square")
        new_part.color("lightgreen")
        new_part.penup()

        parts.append(new_part)

        score += 1

        score_text.clear()
        score_text.write(
            f"Score: {score}",
            align="center",
            font=("Arial", 18, "normal")
        )

    for i in range(len(parts) - 1, 0, -1):
        x = parts[i - 1].xcor()
        y = parts[i - 1].ycor()
        parts[i].goto(x, y)

    if len(parts) > 0:
        parts[0].goto(head.xcor(), head.ycor())

    move()

    for p in parts:
        if p.distance(head) < 20:
            time.sleep(1)

            head.goto(0, 0)
            head.direction = "stop"

            for s in parts:
                s.goto(1000, 1000)

            parts.clear()

            score = 0

            score_text.clear()
            score_text.write(
                f"Score: {score}",
                align="center",
                font=("Arial", 18, "normal")
            )

    time.sleep(0.1)