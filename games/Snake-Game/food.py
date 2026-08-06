import turtle
import random
from snake import Snake

class Food:
    """Manages the food item spawning."""
    def __init__(self):
        self.item = turtle.Turtle()
        self.item.shape("circle")
        self.item.color("red")
        self.item.penup()
        self.item.goto(0, 100)

    def reposition(self, snake: Snake):
        attempts = 0

        # Get all snake positions (aligned to grid)
        snake_positions = [(int(p.xcor()), int(p.ycor())) for p in snake.parts]
        snake_positions.append((int(snake.head.xcor()), int(snake.head.ycor())))

        while attempts < 100:
            x = random.randint(-14, 14) * 20
            y = random.randint(-14, 14) * 20

            # Check exact match instead of distance
            if (x, y) not in snake_positions:
                self.item.goto(x, y)
                return

            attempts += 1

        # fallback (rare case)
        self.item.goto(2000, 2000)
