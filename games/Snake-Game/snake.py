import turtle
from constants import MOVE_DISTANCE, BOUNDARY

class Snake:
    def __init__(self):
        self.head = turtle.Turtle()
        self.head.shape("square")
        self.head.color("green")
        self.head.penup()
        self.head.direction = "stop"
        self.parts = []

    def move_up(self):
        if self.head.direction != "down":
            self.head.direction = "up"

    def move_down(self):
        if self.head.direction != "up":
            self.head.direction = "down"

    def move_left(self):
        if self.head.direction != "right":
            self.head.direction = "left"

    def move_right(self):
        if self.head.direction != "left":
            self.head.direction = "right"

    def move(self):
        for i in range(len(self.parts) - 1, 0, -1):
            x = self.parts[i - 1].xcor()
            y = self.parts[i - 1].ycor()
            self.parts[i].goto(x, y)

        if self.parts:
            self.parts[0].goto(self.head.xcor(), self.head.ycor())

        moves = {
            "up": (0, MOVE_DISTANCE),
            "down": (0, -MOVE_DISTANCE),
            "left": (-MOVE_DISTANCE, 0),
            "right": (MOVE_DISTANCE, 0)
        }

        if self.head.direction in moves:
            dx, dy = moves[self.head.direction]
            self.head.goto(self.head.xcor() + dx, self.head.ycor() + dy)

    def add_part(self):
        new_part = turtle.Turtle()
        new_part.shape("square")
        new_part.color("lightgreen")
        new_part.penup()

        if self.parts:
            last_part = self.parts[-1]
            new_part.goto(last_part.xcor(), last_part.ycor())
        else:
            new_part.goto(self.head.xcor(), self.head.ycor())

        self.parts.append(new_part)

    def check_boundary_collision(self) -> bool:
        return (
            self.head.xcor() > BOUNDARY or
            self.head.xcor() < -BOUNDARY or
            self.head.ycor() > BOUNDARY or
            self.head.ycor() < -BOUNDARY
        )

    def check_self_collision(self) -> bool:
        head_pos = (int(self.head.xcor()), int(self.head.ycor()))

        for p in self.parts[1:]:  # It will skip first segment
            if (int(p.xcor()), int(p.ycor())) == head_pos:
                return True
        return False

    def reset(self):
        self.head.goto(0, 0)
        self.head.direction = "stop"

        for p in self.parts:
            p.goto(1000, 1000)

        self.parts.clear()

    def is_moving(self):
        return self.head.direction != "stop"
